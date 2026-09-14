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
