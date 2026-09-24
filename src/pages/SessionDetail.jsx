import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, MapPin, Tag, Languages } from 'lucide-react';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { speakers } from '../data/speakers';
import { DAYS, agenda, sessionsById, dayBySessionId, sessionTitle, TYPE_STYLES, LANG_LABELS } from '../data/agenda';
import { resolveSpeakerId, splitSpeakerNames } from '../utils/speakerNames';
import { formatDuration, groupByTimeSlot } from '../utils/agendaTime';

const metaStyle = { display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' };

const SessionDetail = () => {
    useScrollAnimation();
    const { t } = useTranslation();
    const { l, lang } = useLocalizedPath();
    const { sessionId } = useParams();

    const session = sessionsById[sessionId];

    if (!session) {
        return (
            <section className="section bg-dark" id="session-not-found" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container text-center">
                    <h2>{t('agenda.sessionNotFound')}</h2>
                    <Link to={l('/agenda')} className="btn btn-primary mt-md">
                        <ArrowLeft size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('agenda.backToAgenda')}
                    </Link>
                </div>
            </section>
        );
    }

    const dayKey = dayBySessionId[sessionId];
    const day = DAYS.find(d => d.key === dayKey);
    const end = groupByTimeSlot(agenda[dayKey]).find(slot => slot.sessions.includes(session))?.end;
    const duration = formatDuration(session.time, end);
    const style = TYPE_STYLES[session.type] || TYPE_STYLES.talk;
    const sessionSpeakers = session.speaker
        ? splitSpeakerNames(session.speaker).map((name) => {
            const id = resolveSpeakerId(name);
            return { name, id, profile: id ? speakers.find(s => s.id === id) : null };
        })
        : [];

    return (
        <>
            <header className="page-header" style={{ display: 'block' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                    <Link to={l(`/agenda?day=${dayKey}`)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
                        <ArrowLeft size={16} /> {t('agenda.backToAgenda')}
                    </Link>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: style.color, fontFamily: 'var(--font-ui)', margin: '0 0 var(--spacing-xs)', maxWidth: 'none' }}>
                        {style.label}
                    </p>
                    <h1 style={{ margin: '0 0 var(--spacing-md)', lineHeight: 1.25 }}>{sessionTitle(session, lang)}</h1>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {day && (
                            <span style={metaStyle}>
                                <Calendar size={14} style={{ color: 'var(--color-orange)' }} /> {day.label} · {day.date}
                            </span>
                        )}
                        {session.time && (
                            <span style={metaStyle}>
                                <Clock size={14} style={{ color: 'var(--color-orange)' }} /> {session.time}{end ? ` – ${end}` : ''}{duration ? ` · ${duration}` : ''}
                            </span>
                        )}
                        {session.room && (
                            <span style={metaStyle}>
                                <MapPin size={14} style={{ color: 'var(--color-orange)' }} /> {session.room}
                            </span>
                        )}
                        {session.lang && (
                            <span style={metaStyle}>
                                <Languages size={14} style={{ color: 'var(--color-orange)' }} /> {LANG_LABELS[session.lang]}
                            </span>
                        )}
                        {session.track && (
                            <span style={metaStyle}>
                                <Tag size={14} style={{ color: 'var(--color-orange)' }} /> {session.track}
                            </span>
                        )}
                        {session.category && (
                            <span style={metaStyle}>
                                <Tag size={14} style={{ color: 'var(--color-orange)' }} /> {session.category}
                            </span>
                        )}
                    </div>
                </div>
            </header>

            <section className="section bg-dark" id="session-details">
                <div className="container">
                    <div className="speaker-detail-grid">
                        <div className="card" style={{ borderTop: `3px solid ${style.color}`, padding: 'var(--spacing-lg)' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', marginBottom: 'var(--spacing-sm)' }}>
                                {t('agenda.aboutSession')}
                            </p>
                            <p style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: 0 }}>
                                {session.abstract || t('agenda.noAbstract')}
                            </p>
                        </div>

                        {sessionSpeakers.length > 0 && (
                            <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontFamily: 'var(--font-ui)', marginBottom: 'var(--spacing-md)' }}>
                                    {t('agenda.speakersLabel', { count: sessionSpeakers.length })}
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                                    {sessionSpeakers.map(({ name, id, profile }) => {
                                        const content = (
                                            <>
                                                {profile?.photo ? (
                                                    <img src={profile.photo} alt={name} style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', objectFit: 'cover', border: '2px solid var(--color-orange)', flexShrink: 0 }} />
                                                ) : (
                                                    <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', background: 'var(--color-dark-alt)', border: '2px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', fontFamily: 'var(--font-display)', fontSize: '1.4rem', flexShrink: 0 }}>
                                                        {name.charAt(0)}
                                                    </div>
                                                )}
                                                <div>
                                                    <p style={{ margin: 0, fontWeight: 700, color: id ? 'var(--color-orange)' : 'var(--color-text-primary)', fontFamily: 'var(--font-ui)', maxWidth: 'none' }}>{profile?.name || name}</p>
                                                    {profile?.title && (
                                                        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-secondary)', maxWidth: 'none' }}>{profile.title}</p>
                                                    )}
                                                </div>
                                            </>
                                        );
                                        const rowStyle = { display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', textDecoration: 'none' };
                                        return id ? (
                                            <Link key={name} to={l(`/speakers/${id}`)} style={rowStyle}>{content}</Link>
                                        ) : (
                                            <div key={name} style={rowStyle}>{content}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SessionDetail;
