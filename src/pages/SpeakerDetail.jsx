import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Globe, MapPin, Tag, Calendar } from 'lucide-react';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { speakers } from '../data/speakers';
import { DAYS } from '../data/agenda';

const SpeakerDetail = () => {
    useScrollAnimation();
    const { t } = useTranslation();
    const { l } = useLocalizedPath();
    const { speakerId } = useParams();

    const speaker = speakers.find(s => s.id === speakerId);

    if (!speaker) {
        return (
            <section className="section bg-dark" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
                <div className="container text-center">
                    <h2>{t('speakers.notFound')}</h2>
                    <Link to={l('/speakers')} className="btn btn-primary mt-md">
                        <ArrowLeft size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('speakers.backToSpeakers')}
                    </Link>
                </div>
            </section>
        );
    }

    const talks = speaker.talks ?? (speaker.talk ? [speaker.talk] : []);

    return (
        <>
            <header className="page-header" style={{ display: 'block' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                    <Link to={l('/speakers')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--spacing-md)' }}>
                        <ArrowLeft size={16} /> {t('speakers.backToSpeakers')}
                    </Link>
                    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center', flexWrap: 'wrap' }}>
                        {speaker.photo ? (
                            <img
                                src={speaker.photo}
                                alt={speaker.name}
                                style={{
                                    width: '130px',
                                    height: '130px',
                                    borderRadius: 'var(--radius-full)',
                                    objectFit: 'cover',
                                    border: '3px solid var(--color-orange)',
                                    flexShrink: 0,
                                }}
                            />
                        ) : (
                            <div style={{
                                width: '130px',
                                height: '130px',
                                borderRadius: 'var(--radius-full)',
                                background: 'var(--color-dark-alt)',
                                border: '3px solid var(--color-orange)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                color: 'var(--color-orange)',
                                fontFamily: 'var(--font-display)',
                                flexShrink: 0,
                            }}>
                                {speaker.name.charAt(0)}
                            </div>
                        )}
                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ margin: '0 0 4px' }}>{speaker.name}</h1>
                            {speaker.title && (
                                <p style={{ color: 'var(--color-orange)', fontWeight: 600, fontSize: '1rem', margin: '0 0 8px', maxWidth: 'none' }}>
                                    {speaker.title}
                                </p>
                            )}
                            {speaker.country && (
                                <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: '0 0 var(--spacing-sm)', maxWidth: 'none' }}>
                                    <MapPin size={14} /> {speaker.country}
                                </p>
                            )}
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {speaker.linkedin && (
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.35rem 0.9rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                        <Globe size={13} /> LinkedIn
                                    </a>
                                )}
                                {speaker.website && (
                                    <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.35rem 0.9rem', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                                        <Globe size={13} /> Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="section bg-dark">
                <div className="container">
                    <div className="speaker-detail-grid">
                        {talks.length > 0 && (
                            <div>
                                {talks.map((talk, i) => {
                                    const day = talk.day ? DAYS.find(d => d.key === talk.day) : null;
                                    return (
                                        <div key={i} className="card" style={{ borderTop: '3px solid var(--color-orange)', padding: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                                            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', marginBottom: 'var(--spacing-xs)' }}>
                                                {t('speakers.talkDetails')}
                                            </p>
                                            <h2 style={{ marginBottom: 'var(--spacing-sm)', lineHeight: 1.35 }}>{talk.title}</h2>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: 'var(--spacing-md)' }}>
                                                {talk.category && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                                        <Tag size={13} style={{ color: 'var(--color-orange)' }} /> {talk.category}
                                                    </span>
                                                )}
                                                {day && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                                        <Calendar size={13} style={{ color: 'var(--color-orange)' }} /> {day.label} · {day.date}
                                                    </span>
                                                )}
                                                {talk.track && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.83rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                                        <MapPin size={13} style={{ color: 'var(--color-orange)' }} /> {talk.track}
                                                    </span>
                                                )}
                                            </div>

                                            {talk.abstract && (
                                                <p style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: 0 }}>
                                                    {talk.abstract}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {speaker.bio && (
                            <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                                <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', fontFamily: 'var(--font-ui)', marginBottom: 'var(--spacing-sm)' }}>
                                    {t('speakers.aboutSpeaker')}
                                </p>
                                <p style={{ lineHeight: 1.8, fontSize: '0.92rem', margin: 0 }}>{speaker.bio}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerDetail;
