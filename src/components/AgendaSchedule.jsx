import { Link, useNavigate } from 'react-router-dom';
import { Clock, MapPin, User, Languages, Tag } from 'lucide-react';
import { TYPE_STYLES, LANG_LABELS } from '../data/agenda';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { resolveSpeakerId, splitSpeakerNames } from '../utils/speakerNames';

const groupByTimeSlot = (sessions) => {
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

    return slots;
};

const BreakRow = ({ session }) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center', padding: '0.75rem 0' }}>
        <span style={{ minWidth: '60px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
            {session.time}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--color-border)', position: 'relative' }}>
            <span style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'var(--color-black)',
                padding: '0 0.75rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-ui)',
                whiteSpace: 'nowrap',
            }}>
                {session.title}{session.room ? ` · ${session.room}` : ''}
            </span>
        </div>
    </div>
);

const SessionCard = ({ session, accentColor }) => {
    const { l } = useLocalizedPath();
    const navigate = useNavigate();
    const style = TYPE_STYLES[session.type] || TYPE_STYLES.talk;
    const color = accentColor || style.color;
    const speakerNames = session.speaker ? splitSpeakerNames(session.speaker) : [];
    const primarySpeakerId = speakerNames.map(resolveSpeakerId).find(Boolean) || null;
    const isClickable = Boolean(session.id && primarySpeakerId);

    const goToSpeaker = () => navigate(l(`/speakers/${primarySpeakerId}`));

    return (
        <div
            className="card agenda-session-card"
            role={isClickable ? 'link' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onClick={isClickable ? goToSpeaker : undefined}
            onKeyDown={isClickable ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToSpeaker(); } } : undefined}
            style={{
                padding: 'var(--spacing-md)',
                borderLeft: `4px solid ${color}`,
                margin: 0,
                cursor: isClickable ? 'pointer' : undefined,
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-xs)' }}>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-ui)', fontWeight: 700, lineHeight: 1.35 }}>{session.title}</h4>
                <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 12px',
                    borderRadius: '50px',
                    background: color,
                    color: 'white',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-ui)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                }}>
                    {style.label}
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {speakerNames.length > 0 && (
                    <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px', fontSize: '0.83rem', fontFamily: 'var(--font-ui)' }}>
                        <User size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                        {speakerNames.map((name, i) => {
                            const speakerId = resolveSpeakerId(name);
                            return (
                                <span key={name} style={{ display: 'contents' }}>
                                    {i > 0 && <span style={{ color: 'var(--color-text-secondary)' }}>&amp;</span>}
                                    {speakerId ? (
                                        <Link
                                            to={l(`/speakers/${speakerId}`)}
                                            onClick={(e) => e.stopPropagation()}
                                            style={{ color: 'var(--color-orange)', fontWeight: 600, textDecoration: 'none' }}
                                        >
                                            {name}
                                        </Link>
                                    ) : (
                                        <span style={{ color: 'var(--color-text-secondary)' }}>{name}</span>
                                    )}
                                </span>
                            );
                        })}
                    </span>
                )}
                {session.room && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                        <MapPin size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> {session.room}
                    </span>
                )}
                {session.track && (
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        alignSelf: 'flex-start',
                        padding: '2px 9px',
                        borderRadius: '50px',
                        border: '1px solid var(--color-orange)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--color-orange)',
                        fontFamily: 'var(--font-ui)',
                        letterSpacing: '0.03em',
                    }}>
                        <Tag size={11} style={{ flexShrink: 0 }} /> {session.track}
                    </span>
                )}
                {session.lang && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                        <Languages size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> {LANG_LABELS[session.lang]}
                    </span>
                )}
            </div>
        </div>
    );
};

const TimeSlot = ({ slot, accentColor }) => {
    const parallel = slot.sessions.length > 1;

    return (
        <div className="agenda-slot">
            <div className="agenda-slot-time">
                <Clock size={13} style={{ opacity: 0.7 }} />
                <span>{slot.time}</span>
            </div>
            <div className={`agenda-slot-tracks${parallel ? ' is-parallel' : ''}`}>
                {slot.sessions.map((session, i) => (
                    <SessionCard key={i} session={session} accentColor={accentColor} />
                ))}
            </div>
        </div>
    );
};

const AgendaSchedule = ({ sessions, accentColor }) => {
    const slots = groupByTimeSlot(sessions);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {slots.map((slot, i) => (
                slot.kind === 'break'
                    ? <BreakRow key={i} session={slot.sessions[0]} />
                    : <TimeSlot key={i} slot={slot} accentColor={accentColor} />
            ))}
        </div>
    );
};

export default AgendaSchedule;
