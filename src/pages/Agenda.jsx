import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, User, Languages } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { DAYS, agenda, TYPE_STYLES, LANG_LABELS } from '../data/agenda';
import { speakers } from '../data/speakers';

const normalizeName = (s) =>
    (s || '')
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();

const NAME_ALIASES = {
    'kamdem ulrich': 'kamdem-yamen-ulrich-laress-ulrich',
    'tayo tate desmond': 'tayo-tate-desmond-corentin',
};

const speakerIdByName = {};
speakers.forEach((sp) => {
    speakerIdByName[normalizeName(sp.name)] = sp.id;
});

const resolveSpeakerId = (name) => {
    const key = normalizeName(name);
    if (NAME_ALIASES[key]) return NAME_ALIASES[key];
    if (speakerIdByName[key]) return speakerIdByName[key];
    const tokens = key.split(' ').filter(Boolean);
    const match = speakers.find((sp) => {
        const spKey = normalizeName(sp.name);
        return tokens.length > 1 && tokens.every((t) => spKey.includes(t));
    });
    return match ? match.id : null;
};

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

const SessionCard = ({ session }) => {
    const { l } = useLocalizedPath();
    const style = TYPE_STYLES[session.type] || TYPE_STYLES.talk;
    const speakerId = session.speaker ? resolveSpeakerId(session.speaker) : null;

    return (
        <div className="card animate-on-scroll slide-up agenda-session-card" style={{
            padding: 'var(--spacing-md)',
            borderLeft: `4px solid ${style.color}`,
            margin: 0,
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-xs)' }}>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text-primary)', fontFamily: 'var(--font-ui)', fontWeight: 700, lineHeight: 1.35 }}>{session.title}</h4>
                <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 12px',
                    borderRadius: '50px',
                    background: style.color,
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
                {session.speaker && (
                    speakerId ? (
                        <Link
                            to={l(`/speakers/${speakerId}`)}
                            style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', fontWeight: 600, textDecoration: 'none' }}
                        >
                            <User size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> {session.speaker}
                        </Link>
                    ) : (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                            <User size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> {session.speaker}
                        </span>
                    )
                )}
                {session.room && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                        <MapPin size={13} style={{ color: 'var(--color-orange)', flexShrink: 0 }} /> {session.room}{session.track ? ` · ${session.track}` : ''}
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

const TimeSlot = ({ slot }) => {
    const parallel = slot.sessions.length > 1;

    return (
        <div className="agenda-slot">
            <div className="agenda-slot-time">
                <Clock size={13} style={{ opacity: 0.7 }} />
                <span>{slot.time}</span>
            </div>
            <div className={`agenda-slot-tracks${parallel ? ' is-parallel' : ''}`}>
                {slot.sessions.map((session, i) => (
                    <SessionCard key={i} session={session} />
                ))}
            </div>
        </div>
    );
};

const Agenda = () => {
    const { t } = useTranslation();
    useScrollAnimation();
    const [searchParams, setSearchParams] = useSearchParams();

    const dayParam = searchParams.get('day');
    const activeDay = DAYS.find(d => d.key === dayParam) ? dayParam : 'day1';

    const handleDayChange = (key) => {
        setSearchParams({ day: key }, { replace: true });
    };

    const sessions = agenda[activeDay] || [];
    const slots = groupByTimeSlot(sessions);
    const activeDayData = DAYS.find(d => d.key === activeDay);

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('agenda.title')} <span className="text-gradient">{t('agenda.titleHighlight')}</span></h1>
                    <p>{t('agenda.subtitle')}</p>
                </div>
            </header>

            <section className="section bg-dark">
                <div className="container">
                    <div className="agenda-toggle-wrap">
                        <div className="agenda-toggle">
                            {DAYS.map((day) => {
                                const isActive = activeDay === day.key;
                                return (
                                    <button
                                        key={day.key}
                                        onClick={() => handleDayChange(day.key)}
                                        className={`agenda-toggle-btn ${isActive ? 'active' : ''}`}
                                    >
                                        {day.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {activeDayData?.key === 'day2' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--spacing-md)', justifyContent: 'center' }}>
                            <img src="/images/partners/canonical-cm.webp" alt="UbuCon" style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '50%' }} />
                            <span style={{ fontWeight: 700, color: '#E95420', fontSize: '1rem', fontFamily: 'var(--font-ui)' }}>UbuCon Cameroon Day</span>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        {slots.map((slot, i) => (
                            slot.kind === 'break'
                                ? <BreakRow key={i} session={slot.sessions[0]} />
                                : <TimeSlot key={i} slot={slot} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Agenda;
