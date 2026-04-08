import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';

const UbuConMap = lazy(() => import('../components/UbuConMap'));

const UBUNTU_ORANGE = '#E95420';
const UBUNTU_AUBERGINE = '#77216F';
const UBUNTU_DARK = '#2C001E';

const UbuCon = () => {
    useScrollAnimation();
    const { t } = useTranslation();
    const { l } = useLocalizedPath();

    const topics = t('ubucon.topics', { returnObjects: true });

    return (
        <>
            {/* Page Header */}
            <header className="page-header page-header-dark" style={{
                background: `linear-gradient(160deg, ${UBUNTU_DARK} 0%, ${UBUNTU_AUBERGINE} 50%, ${UBUNTU_ORANGE} 100%)`,
            }}>
                <div className="container text-center">
                    <img
                        src="/images/partners/canonical-cm.webp"
                        alt="UbuCon Cameroon"
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'contain',
                            marginBottom: 'var(--spacing-md)',
                            borderRadius: '16px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            padding: '8px',
                            background: 'rgba(255,255,255,0.1)',
                        }}
                    />
                    <h1 style={{ color: 'white' }}>UbuCon <span style={{ color: UBUNTU_ORANGE }}>Cameroon</span></h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>{t('ubucon.headerSubtitle')}</p>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginTop: 'var(--spacing-xs)' }}>
                        {t('ubucon.coOrganized')}
                    </p>
                </div>
            </header>

            {/* About UbuCon */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                                {t('ubucon.whatIsTitle')} <span style={{ color: UBUNTU_ORANGE }}>{t('ubucon.whatIsHighlight')}</span>
                            </h2>
                            <p>
                                {t('ubucon.whatIsP1')}
                            </p>
                            <p>
                                {t('ubucon.whatIsP2')}
                            </p>
                            <div className="mt-md">
                                <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-lg"
                                    style={{ background: UBUNTU_ORANGE, color: 'white', border: 'none' }}>
                                    {t('ubucon.submitTalk')}
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{
                            padding: 'var(--spacing-lg)',
                            textAlign: 'center',
                            borderColor: UBUNTU_AUBERGINE,
                        }}>
                            <h3 style={{ marginBottom: 'var(--spacing-lg)', color: UBUNTU_ORANGE }}>{t('ubucon.glanceTitle')}</h3>
                            <div className="grid grid-2">
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_ORANGE }}>1</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('ubucon.dedicatedDay')}</div>
                                </div>
                                <div className="mb-md">
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_AUBERGINE }}>6+</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('ubucon.talksWorkshops')}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_ORANGE }}>2</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('ubucon.communitiesUnited')}</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700, color: UBUNTU_AUBERGINE }}>100%</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('ubucon.openSource')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* Topics */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('ubucon.topicsTitle')} <span style={{ color: UBUNTU_ORANGE }}>{t('ubucon.topicsHighlight')}</span></h2>
                        <p>{t('ubucon.topicsSubtitle')}</p>
                    </div>

                    <div className="grid grid-3 stagger">
                        {topics.map((topic, index) => {
                            const color = index % 2 === 0 ? UBUNTU_ORANGE : UBUNTU_AUBERGINE;
                            return (
                                <div key={index} className="card animate-on-scroll slide-up" style={{ borderTop: `3px solid ${color}` }}>
                                    <h3 className="card-title" style={{ color }}>{topic.title}</h3>
                                    <p className="card-text">{topic.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* UbuCons Around the World */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('ubucon.worldTitle')} <span style={{ color: UBUNTU_ORANGE }}>{t('ubucon.worldHighlight')}</span></h2>
                        <p>{t('ubucon.worldSubtitle')}</p>
                    </div>
                    <Suspense fallback={
                        <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-dark-alt)', borderRadius: 'var(--radius-md)' }}>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{t('ubucon.loadingMap')}</p>
                        </div>
                    }>
                        <UbuConMap />
                    </Suspense>
                </div>
            </section>

            {/* Tribal Border */}
            <div className="tribal-border"></div>

            {/* CTA */}
            <section className="section"
                style={{ background: `linear-gradient(135deg, ${UBUNTU_ORANGE} 0%, ${UBUNTU_AUBERGINE} 100%)` }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>{t('ubucon.ctaTitle')}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
                        {t('ubucon.ctaText')}
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <a href="https://sessionize.com/pycon-camerooon-2026" target="_blank" rel="noopener noreferrer" className="btn btn-lg"
                            style={{ background: 'white', color: UBUNTU_ORANGE }}>
                            {t('ubucon.ctaSubmit')}
                        </a>
                        <Link to={l('/attend')} className="btn btn-lg btn-secondary"
                            style={{ borderColor: 'white', color: 'white' }}>
                            {t('ubucon.ctaTicket')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UbuCon;
