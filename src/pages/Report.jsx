import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Download, Mail, FileText } from 'lucide-react';
import { useLocalizedPath } from '../hooks/useLocalizedPath';
import useScrollAnimation from '../hooks/useScrollAnimation';
import LazyImage from '../components/LazyImage';
import PartnerCard from '../components/PartnerCard';
import SponsorShowcase from '../components/SponsorShowcase';
import { agenda, DAYS, sessionTitle, TYPE_STYLES } from '../data/agenda';
import { partnerCommunities } from '../data/partners';
import { sponsorshipDeckUrl } from '../data/sponsors';
import { attendeeTotal, dayBadge, headlineStats, sessionFormats, sessionLanguages, sessionTopics, speakerCountries } from '../data/reportStats';

const PHOTOS_PER_DAY = 9;
const photoSrc = (day, index) => `/images/report/${day}-${String(index + 1).padStart(2, '0')}.webp`;

const BarList = ({ title, rows }) => {
    const max = Math.max(...rows.map((row) => row.count));
    return (
        <div className="card animate-on-scroll slide-up">
            <h3 className="card-title" style={{ marginBottom: 'var(--spacing-md)' }}>{title}</h3>
            {rows.map(({ label, count, color }) => (
                <div key={label} className="report-bar">
                    <div className="report-bar-label">
                        <span>{label}</span>
                        <strong>{count}</strong>
                    </div>
                    <div className="report-bar-track">
                        <div className="report-bar-fill" style={{ width: `${(count / max) * 100}%`, background: color }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

const Report = () => {
    useScrollAnimation();
    const { t, i18n } = useTranslation();
    const { l } = useLocalizedPath();

    return (
        <>
            <header className="page-header">
                <div className="container text-center page-header-content">
                    <h1>{t('report.title')} <span className="text-gradient">{t('report.titleHighlight')}</span></h1>
                    <p>{t('report.subtitle')}</p>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-sm)' }}>
                        {t('report.meta')}
                    </p>
                    <a
                        href={`/reports/pycon-cameroon-2026-report-${i18n.language === 'fr' ? 'fr' : 'en'}.pdf`}
                        download
                        className="btn btn-secondary"
                        style={{ marginTop: 'var(--spacing-md)', gap: '0.5em', background: 'var(--color-black)' }}
                    >
                        <Download size="1em" /> {t('report.download')}
                    </a>
                </div>
            </header>

            <section className="section bg-dark" id="summary">
                <div className="container">
                    <img src="/images/report/cover.webp" alt={t('report.heroAlt')} className="report-hero" />
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)' }}>
                        <div>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                                {t('report.summaryTitle')} <span className="text-gradient">{t('report.summaryHighlight')}</span>
                            </h2>
                            <p>{t('report.summaryP1')}</p>
                            <p>{t('report.summaryP2')}</p>
                            <p>{t('report.summaryP3')}</p>
                        </div>
                        <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
                            <h3 className="text-center" style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-orange)' }}>{t('report.glanceTitle')}</h3>
                            <div className="stats-grid report-stats">
                                {headlineStats.map(({ key, value }) => (
                                    <div key={key} className="stat-item">
                                        <div className="stat-number">{value}</div>
                                        <div className="stat-label">{t(`report.stats.${key}`)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="audience">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('report.audienceTitle')} <span className="text-gradient">{t('report.audienceHighlight')}</span></h2>
                        <p>{t('report.audienceSubtitle')}</p>
                    </div>
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div className="text-center animate-on-scroll slide-up">
                            <div className="report-hero-number text-gradient">{attendeeTotal}</div>
                            <div className="stat-label" style={{ fontSize: '1.25rem' }}>{t('report.stats.attendees')}</div>
                        </div>
                        <BarList
                            title={t('report.speakersByCountry')}
                            rows={speakerCountries.map(([country, count]) => ({ label: country ? t(`report.countryNames.${country}`, country) : t('report.countryNotListed'), count, color: 'var(--color-orange)' }))}
                        />
                    </div>

                    <div id="financial-aid" className="section-header" style={{ marginTop: 'var(--spacing-xl)' }}>
                        <h2>{t('report.aidTitle')} <span className="text-gradient">{t('report.aidHighlight')}</span></h2>
                        <p>{t('report.aidSubtitle')}</p>
                    </div>
                    <div className="grid grid-3 stagger">
                        {t('report.aid', { returnObjects: true }).map((item) => (
                            <div key={item.title} className="card animate-on-scroll slide-up" style={{ borderTop: '3px solid var(--color-green)' }}>
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            <section className="section bg-dark" id="programme">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('report.programTitle')} <span className="text-gradient">{t('report.programHighlight')}</span></h2>
                        <p>{t('report.programSubtitle')}</p>
                    </div>
                    <div className="grid grid-3 stagger">
                        <BarList
                            title={t('report.formatsTitle')}
                            rows={sessionFormats.map(([type, count]) => ({ label: t(`report.formats.${type}`), count, color: TYPE_STYLES[type]?.color }))}
                        />
                        <BarList
                            title={t('report.topicsTitle')}
                            rows={sessionTopics.map(([label, count]) => ({ label: t(`report.topicNames.${label}`, label), count, color: 'var(--color-orange)' }))}
                        />
                        <BarList
                            title={t('report.languagesTitle')}
                            rows={sessionLanguages.map(([lang, count]) => ({ label: t(`report.languages.${lang}`), count, color: 'var(--color-green)' }))}
                        />
                    </div>
                </div>
            </section>

            <section className="section bg-dark" id="days">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('report.daysTitle')} <span className="text-gradient">{t('report.daysHighlight')}</span></h2>
                        <p>{t('report.daysSubtitle')}</p>
                    </div>

                    {DAYS.map((day) => {
                        const captions = t(`report.${day.key}.photos`, { returnObjects: true });
                        const highlights = agenda[day.key].filter((s) => s.id && (s.type === 'keynote' || s.type === 'panel'));
                        return (
                            <article key={day.key} id={day.key} className="report-day">
                                <div className="report-day-head">
                                    <span className="report-day-badge">{dayBadge(day, t('report.dayWord'), i18n.language)}</span>
                                    <h3>{t(`report.${day.key}.title`)}</h3>
                                    <p>{t(`report.${day.key}.text`)}</p>
                                    <p className="report-day-keys">
                                        <strong>{t('report.keySessions')}:</strong>{' '}
                                        {highlights.map((s, i) => (
                                            <span key={s.id}>
                                                {i > 0 && ' · '}
                                                <Link to={l(`/sessions/${s.id}`)}>{sessionTitle(s, i18n.language)}</Link> ({s.speaker})
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                <div className="report-gallery">
                                    {Array.from({ length: PHOTOS_PER_DAY }, (_, i) => (
                                        <a
                                            key={i}
                                            href={photoSrc(day.key, i)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`report-photo${i === 0 ? ' report-photo-wide' : ''}`}
                                            title={t('report.openPhoto')}
                                        >
                                            <LazyImage src={photoSrc(day.key, i)} alt={captions[i]} />
                                            <span className="report-photo-caption">{captions[i]}</span>
                                        </a>
                                    ))}
                                </div>
                            </article>
                        );
                    })}

                    <div className="text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
                        <Link to={l('/agenda')} className="btn btn-secondary">{t('report.seeAgenda')}</Link>
                    </div>
                </div>
            </section>

            <div className="tribal-border"></div>

            <section className="section" id="sponsor-thanks" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="section-header">
                        <h2>{t('report.sponsorsTitle')} <span className="text-gradient">{t('report.sponsorsHighlight')}</span></h2>
                        <p>{t('report.sponsorsSubtitle')}</p>
                    </div>
                    <h3 className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>{t('report.visibilityTitle')}</h3>
                    <div className="grid grid-4 stagger">
                        {t('report.visibility', { returnObjects: true }).map((item) => (
                            <div key={item.title} className="card animate-on-scroll slide-up" style={{ borderTop: '3px solid var(--color-orange)' }}>
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <SponsorShowcase />

            <section className="section bg-dark" id="partners">
                <div className="container">
                    <div className="section-header">
                        <h2>{t('report.partnersTitle')} <span className="text-gradient">{t('report.partnersHighlight')}</span></h2>
                        <p>{t('report.partnersSubtitle')}</p>
                    </div>
                    <div className="grid grid-4 stagger" style={{ alignItems: 'center', justifyItems: 'center' }}>
                        {partnerCommunities.map((partner) => (
                            <PartnerCard key={partner.name} partner={partner} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" id="thanks"
                style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-red) 100%)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'white', marginBottom: 'var(--spacing-sm)' }}>{t('report.thanksTitle')} {t('report.thanksHighlight')}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', maxWidth: 720, margin: '0 auto var(--spacing-md)' }}>
                        {t('report.thanksText')}
                    </p>
                    <div className="flex justify-center gap-sm flex-wrap">
                        <a href="mailto:organizers@pythoncameroon.org" className="btn btn-lg" style={{ background: 'white', color: 'var(--color-orange)', gap: '0.5em' }}>
                            <Mail size="1em" /> {t('report.contact')}
                        </a>
                        <a href={sponsorshipDeckUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary" style={{ borderColor: 'white', color: 'white', gap: '0.5em' }}>
                            <FileText size="1em" /> {t('report.sponsorDeck')}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Report;
