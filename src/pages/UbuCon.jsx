import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { Clock, MapPin, User } from 'lucide-react';
import { agenda, TYPE_STYLES } from '../data/agenda';

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

            {/* UbuCon Agenda */}
            <section className="section bg-dark" id="agenda">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('ubucon.agendaTitle')} <span style={{ color: UBUNTU_ORANGE }}>{t('ubucon.agendaHighlight')}</span></h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>September 18, 2026</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        {agenda.day2.map((session, i) => {
                            const style = TYPE_STYLES[session.type] || TYPE_STYLES.talk;
                            const isBreak = session.type === 'break' || session.type === 'social';
                            return (
                                <div key={i} style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start', padding: isBreak ? 'var(--spacing-sm) 0' : undefined, opacity: isBreak ? 0.6 : 1 }}>
                                    <div style={{ minWidth: '60px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', paddingTop: isBreak ? 0 : '1rem' }}>
                                        {session.time}
                                    </div>
                                    {isBreak ? (
                                        <div style={{ flex: 1, borderTop: '1px dashed var(--color-border)', paddingTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                            {session.title}{session.room ? ` — ${session.room}` : ''}
                                        </div>
                                    ) : (
                                        <div className="card" style={{ flex: 1, padding: 'var(--spacing-md)', borderLeft: `4px solid ${style.color}`, margin: 0 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                                                <h4 style={{ margin: 0, fontSize: '1rem' }}>{session.title}</h4>
                                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '2px 10px', borderRadius: '50px', background: style.color, color: 'white', whiteSpace: 'nowrap' }}>
                                                    {style.label}
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                                                {session.speaker && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                                                        <User size={13} /> {session.speaker}
                                                    </span>
                                                )}
                                                {session.room && (
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                                                        <MapPin size={13} /> {session.room}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
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
                        <Link to={l('/attend')} className="btn btn-lg"
                            style={{ background: 'white', color: UBUNTU_ORANGE }}>
                            {t('ubucon.ctaTicket')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UbuCon;
