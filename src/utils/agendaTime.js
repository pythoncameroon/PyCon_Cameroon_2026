// Time helpers for the agenda (HH:MM strings).

// Minutes reserved between two consecutive presentation slots (room change, setup).
export const TRANSITION_MINUTES = 5;

const toMinutes = (hhmm) => {
    const [h, m] = hhmm.split(':').map(Number);
    return h * 60 + m;
};

const toHHMM = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

export const formatDuration = (start, end) => {
    if (!start || !end) return null;
    const total = toMinutes(end) - toMinutes(start);
    if (total <= 0) return null;
    const h = Math.floor(total / 60);
    const m = total % 60;
    if (h === 0) return `${m} min`;
    return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`;
};

// Start time minus the transition gap, as HH:MM.
export const beforeTransition = (hhmm) => toHHMM(toMinutes(hhmm) - TRANSITION_MINUTES);

export const groupByTimeSlot = (sessions) => {
    const slots = [];
    const indexByTime = new Map();

    sessions.forEach((session) => {
        const isBreak = session.type === 'break' || session.type === 'social';
        if (isBreak) {
            slots.push({ time: session.time, kind: 'break', sessions: [session] });
            return;
        }
        if (indexByTime.has(session.time)) {
            slots[indexByTime.get(session.time)].sessions.push(session);
            return;
        }
        indexByTime.set(session.time, slots.length);
        slots.push({ time: session.time, kind: 'sessions', sessions: [session] });
    });

    // A slot ends when the next one starts. Between two presentation slots we keep a
    // transition gap; a slot followed by a break runs until the break. A session can
    // still declare its own `end` to override this.
    slots.forEach((slot, i) => {
        const explicitEnd = slot.sessions.find((s) => s.end)?.end;
        const next = slots[i + 1];
        if (explicitEnd) {
            slot.end = explicitEnd;
        } else if (!next) {
            slot.end = null;
        } else if (slot.kind === 'sessions' && next.kind === 'sessions') {
            slot.end = beforeTransition(next.time);
        } else {
            slot.end = next.time;
        }
    });

    return slots;
};
