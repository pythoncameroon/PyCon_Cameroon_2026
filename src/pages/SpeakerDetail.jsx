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

    const day = speaker.talk?.day ? DAYS.find(d => d.key === speaker.talk.day) : null;

    return (
        <>
            <header className="page-header">
                <div className="container">
                    <Link to={l('/speakers')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-orange)', fontFamily: 'var(--font-ui)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)', fontWeight: 600 }}>
                        <ArrowLeft size={16} /> {t('speakers.backToSpeakers')}
                    </Link>
                    <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flexShrink: 0 }}>
                            {speaker.photo ? (
                                <img
                                    src={speaker.photo}
                                    alt={speaker.name}
                                    style={{
                                        width: '160px',
                                        height: '160px',
                                        borderRadius: 'var(--radius-full)',
                                        objectFit: 'cover',
                                        border: '3px solid var(--color-orange)',
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: 'var(--radius-full)',
                                    background: 'var(--color-dark-alt)',
                                    border: '3px solid var(--color-orange)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    color: 'var(--color-orange)',
                                    fontFamily: 'var(--font-display)',
                                }}>
                                    {speaker.name.charAt(0)}
                                </div>
                            )}
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <h1 style={{ marginBottom: 'var(--spacing-xs)' }}>{speaker.name}</h1>
                            {speaker.title && (
                                <p style={{ color: 'var(--color-orange)', fontWeight: 600, fontSize: '1.05rem', marginBottom: 'var(--spacing-xs)' }}>
                                    {speaker.title}
                                </p>
                            )}
                            {speaker.country && (
                                <p style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: 'var(--spacing-sm)' }}>
                                    <MapPin size={15} /> {speaker.country}
                                </p>
                            )}
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                {speaker.linkedin && (
                                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <Globe size={15} /> LinkedIn
                                    </a>
                                )}
                                {speaker.website && (
                                    <a href={speaker.website} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <Globe size={15} /> Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="tribal-border"></div>

            <section className="section bg-dark">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--spacing-xl)', alignItems: 'start' }}>
                        <div>
                            {speaker.bio && (
                                <>
                                    <h2 style={{ marginBottom: 'var(--spacing-md)' }}>{t('speakers.aboutSpeaker')}</h2>
                                    <p style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>{speaker.bio}</p>
                                </>
                            )}
                        </div>

                        {speaker.talk && (
                            <div className="card" style={{ borderTop: '3px solid var(--color-orange)', padding: 'var(--spacing-lg)' }}>
                                <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-orange)' }}>{t('speakers.talkDetails')}</h3>
                                <h4 style={{ marginBottom: 'var(--spacing-sm)', lineHeight: 1.4 }}>{speaker.talk.title}</h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-md)' }}>
                                    {speaker.talk.category && (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                            <Tag size={13} style={{ color: 'var(--color-orange)' }} /> {speaker.talk.category}
                                        </span>
                                    )}
                                    {day && (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                            <Calendar size={13} style={{ color: 'var(--color-orange)' }} /> {day.label} — {day.sublabel} · {day.date}
                                        </span>
                                    )}
                                    {speaker.talk.track && (
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-ui)' }}>
                                            <MapPin size={13} style={{ color: 'var(--color-orange)' }} /> {speaker.talk.track}
                                        </span>
                                    )}
                                </div>

                                {speaker.talk.abstract && (
                                    <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
                                        {speaker.talk.abstract}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerDetail;
