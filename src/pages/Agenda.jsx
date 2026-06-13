import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, User } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { DAYS, agenda, TYPE_STYLES } from '../data/agenda';

const SessionRow = ({ session }) => {
    const style = TYPE_STYLES[session.type] || TYPE_STYLES.talk;
    const isBreak = session.type === 'break' || session.type === 'social';

    if (isBreak) {
        return (
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center', padding: '0.75rem 0', opacity: 0.55 }}>
                <span style={{ minWidth: '60px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-muted)', fontFamily: 'var(--font-ui)' }}>
                    {session.time}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--color-border)', position: 'relative' }}>
                    <span style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'var(--color-dark)',
                        padding: '0 0.75rem',
                        fontSize: '0.8rem',
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-ui)',
                        whiteSpace: 'nowrap',
                    }}>
                        {session.title}{session.room ? ` · ${session.room}` : ''}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="card animate-on-scroll slide-up" style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            padding: 'var(--spacing-md)',
            borderLeft: `4px solid ${style.color}`,
            margin: 0,
            alignItems: 'flex-start',
        }}>
            <div style={{
                minWidth: '60px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: style.color,
                fontFamily: 'var(--font-ui)',
                paddingTop: '2px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
            }}>
                <Clock size={13} style={{ opacity: 0.7 }} />
                {session.time}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginBottom: 'var(--spacing-xs)' }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text-primary)' }}>{session.title}</h4>
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
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                    {session.speaker && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                            <User size={13} style={{ color: 'var(--color-orange)' }} /> {session.speaker}
                        </span>
                    )}
                    {session.room && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                            <MapPin size={13} style={{ color: 'var(--color-orange)' }} /> {session.room}
                        </span>
                    )}
                </div>
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
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-xl)' }}>
                        <div style={{
                            display: 'inline-flex',
                            background: 'var(--color-dark-alt)',
                            borderRadius: '20px',
                            padding: '6px',
                            border: '1px solid var(--color-border)',
                            gap: '4px',
                        }}>
                            {DAYS.map((day) => {
                                const isActive = activeDay === day.key;
                                return (
                                    <button
                                        key={day.key}
                                        onClick={() => handleDayChange(day.key)}
                                        style={{
                                            padding: '0.65rem 0',
                                            borderRadius: '14px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            background: isActive ? 'var(--color-orange)' : 'transparent',
                                            color: isActive ? 'white' : 'var(--color-text-secondary)',
                                            width: '200px',
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            fontFamily: 'var(--font-ui)',
                                        }}
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
                        {sessions.map((session, i) => (
                            <SessionRow key={i} session={session} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Agenda;
