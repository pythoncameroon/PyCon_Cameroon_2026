import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Mic, Ticket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import LazyImage from '../components/LazyImage';
import TrackSection from '../components/TrackSection';
import { ubuconHighlights, djangoHighlights } from '../data/tracks';
import { sponsorshipDeckUrl } from '../data/sponsors';

const Home = () => {
    useScrollAnimation();
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>

                <div className="hero-content animate-fade-scale">
                    <h1 className="hero-title">
                        <span className="highlight">PyCon</span> Cameroon 2026
                    </h1>

                    <p className="hero-subtitle">{t('home.heroSubtitle')}</p>

                    <div className="hero-date">
                        <Calendar size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('home.heroDate')} | <MapPin size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('home.heroLocation')}
                    </div>

                    <div className="hero-buttons">
                        <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            <Mic size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('home.callForSpeakers')}
                        </a>
                        <Link to="/attend" className="btn btn-secondary btn-lg">
                            <Ticket size="1em" style={{ verticalAlign: '-0.125em' }} /> {t('home.getYourTicket')}
                        </Link>
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            {/* Event Description Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('home.welcomeTitle')} <span className="text-gradient">{t('home.welcomeTitleHighlight')}</span></h2>
                        <p className="mt-md" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                            {t('home.welcomeText')}
                        </p>
                    </div>

                    <div className="grid grid-3 mt-lg stagger">
                        <div className="card animate-slide-up">
                            <div className="card-icon">
                                <LazyImage src="/images/patterns/97568bbec02a103e305ee0d2bbaa6106.webp" alt="African Innovation" />
                            </div>
                            <h3 className="card-title">{t('home.card1Title')}</h3>
                            <p className="card-text">{t('home.card1Text')}</p>
                        </div>

                        <div className="card animate-slide-up" style={{ transitionDelay: '100ms' }}>
                            <div className="card-icon">
                                <LazyImage src="/images/general/50b4bb72bcda16fbabf50f8ca87ca412.webp" alt="Python for Everyone" />
                            </div>
                            <h3 className="card-title">{t('home.card2Title')}</h3>
                            <p className="card-text">{t('home.card2Text')}</p>
                        </div>

                        <div className="card animate-slide-up" style={{ transitionDelay: '200ms' }}>
                            <div className="card-icon">
                                <LazyImage src="/images/patterns/African.webp" alt="Community" />
                            </div>
                            <h3 className="card-title">{t('home.card3Title')}</h3>
                            <p className="card-text">{t('home.card3Text')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('home.whatToExpect')}</h2>
                    </div>

                    <div className="grid grid-4 stagger">
                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/images/general/5a266f7460a16bd5e7b0d2cabf54e874.webp" alt="Talks" />
                            </div>
                            <h4>{t('home.inspiringTalks')}</h4>
                            <p className="card-text">{t('home.inspiringTalksText')}</p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/images/general/5e7ef535d7837d92dc28625166cc2568.webp" alt="Workshops" />
                            </div>
                            <h4>{t('home.workshops')}</h4>
                            <p className="card-text">{t('home.workshopsText')}</p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/images/general/Unknown.webp" alt="Networking" />
                            </div>
                            <h4>{t('home.networking')}</h4>
                            <p className="card-text">{t('home.networkingText')}</p>
                        </div>

                        <div className="card animate-bounce-in text-center">
                            <div className="feature-icon">
                                <LazyImage src="/images/general/ac5ca270fe9d4f7c17c5b2bf97337208.webp" alt="Fun" />
                            </div>
                            <h4>{t('home.funActivities')}</h4>
                            <p className="card-text">{t('home.funActivitiesText')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* UbuCon Track */}
            <div className="tribal-border"></div>
            <TrackSection
                id="ubucon"
                logo="/images/partners/canonical-cm.webp"
                logoAlt="UbuCon Cameroon"
                title="UbuCon"
                titleGradient="Cameroon"
                color="var(--color-orange)"
                ctaLabel="UbuCon"
                highlights={ubuconHighlights}
                description={[
                    <>{t('home.ubuconDesc1Start')} <strong>{t('home.ubuconDesc1Bold')}</strong> {t('home.ubuconDesc1End')}</>,
                    t('home.ubuconDesc2'),
                ]}
            />

            {/* Django Track */}
            <TrackSection
                id="django"
                bgClass="bg-dark"
                logo="/images/partners/djcmr.webp"
                logoAlt="Django Cameroon"
                logoBg="white"
                title="Django"
                titleGradient="Track"
                color="var(--color-green)"
                ctaLabel="Django"
                highlights={djangoHighlights}
                description={[
                    <>{t('home.djangoDesc1Start')} <strong>{t('home.djangoDesc1Bold')}</strong> {t('home.djangoDesc1End')}</>,
                    t('home.djangoDesc2'),
                ]}
            />

            {/* Stats Section */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">{t('home.expectedAttendees')}</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">30+</div>
                            <div className="stat-label">{t('home.technicalSessions')}</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">{t('home.workshopsStat')}</div>
                        </div>
                        <div className="stat-item animate-fade-scale">
                            <div className="stat-number">2</div>
                            <div className="stat-label">{t('home.daysOfLearning')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>{t('home.readyToJoin')}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        {t('home.readyToJoinText')}
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <Link to="/attend" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)' }}>
                            {t('home.getYourTicket')}
                        </Link>
                        <Link to="/speakers" className="btn btn-lg btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                            {t('home.submitATalk')}
                        </Link>
                        <a href={sponsorshipDeckUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                            {t('home.sponsorshipDeck')}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
