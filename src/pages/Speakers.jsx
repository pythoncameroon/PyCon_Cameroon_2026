import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import KeynoteCard from '../components/KeynoteCard';
import { speakers } from '../data/speakers';
import { sessionsById, keynoteSessions } from '../data/agenda';

const SpeakerCard = ({ speaker, linkTo }) => {
    const talks = (speaker.talkIds ?? []).map(id => sessionsById[id]).filter(Boolean);
    const primaryTalk = talks[0];
    return (
        <Link to={linkTo} className="speaker-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card speaker-card animate-on-scroll slide-up">
                {speaker.photo ? (
                    <img src={speaker.photo} alt={speaker.name} className="speaker-card-photo" />
                ) : (
                    <div className="speaker-card-photo-placeholder">
                        <User size={48} />
                    </div>
                )}
                <div className="speaker-card-name">{speaker.name}</div>
                {speaker.title && <div className="speaker-card-title">{speaker.title}</div>}
                {primaryTalk?.title && <div className="speaker-card-talk">{primaryTalk.title}</div>}
                {primaryTalk?.category && <span className="speaker-card-tag">{primaryTalk.category}</span>}
                {talks.length > 1 && <span className="speaker-card-tag">+{talks.length - 1} more</span>}
            </div>
        </Link>
    );
};

const Speakers = () => {
    useScrollAnimation();
    const { t } = useTranslation();
    const { l } = useLocalizedPath();

    const keynotes = keynoteSessions
        .map(session => ({ session, speaker: speakers.find(s => (s.talkIds ?? []).includes(session.id)) }))
        .filter(k => k.speaker);
    const keynoteIds = new Set(keynotes.map(k => k.speaker.id));

    const confirmedSpeakers = speakers.filter(s => s.name !== 'TBA' && !keynoteIds.has(s.id));
    const hasConfirmed = confirmedSpeakers.length > 0;

    return (
        <>
            {keynotes.length > 0 && (
                <section className="section" id="keynote-speakers" style={{ paddingTop: '140px' }}>
                    <div className="container">
                        <div className="section-header">
                            <h1>{t('speakers.keynoteTitle')} <span className="text-gradient">{t('speakers.keynoteHighlight')}</span></h1>
                            <p>{t('speakers.keynoteSubtitle')}</p>
                        </div>
                        <div className="keynote-grid stagger">
                            {keynotes.map(({ session, speaker }) => (
                                <KeynoteCard key={session.id} speaker={speaker} session={session} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="section bg-dark" id="speakers-list">
                <div className="container">
                    {hasConfirmed ? (
                        <>
                            {keynotes.length > 0 && (
                                <div className="section-header">
                                    <h2>{t('speakers.allTitle')} <span className="text-gradient">{t('speakers.allHighlight')}</span></h2>
                                    <p>{t('speakers.allSubtitle')}</p>
                                </div>
                            )}
                            <div className="grid grid-4 stagger">
                                {confirmedSpeakers.map(speaker => (
                                    <SpeakerCard
                                        key={speaker.id}
                                        speaker={speaker}
                                        linkTo={l(`/speakers/${speaker.id}`)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                            <div className="card-icon" style={{ margin: '0 auto var(--spacing-md)' }}>
                                <img src="/images/general/aa8b76bc47ebdea99b84fa3a26a94ade.webp" alt="Coming Soon" loading="lazy" />
                            </div>
                            <h3>{t('speakers.comingSoon')}</h3>
                            <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                                {t('speakers.comingSoonText')}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Speakers;
