import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sponsorsList } from '../data/sponsorsList';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const SponsorMarquee = () => {
    const { t } = useTranslation();
    const { l } = useLocalizedPath();

    if (sponsorsList.length === 0) return null;

    const repeats = Math.max(1, Math.ceil(12 / sponsorsList.length));
    const logos = Array.from({ length: repeats }).flatMap((_, i) =>
        sponsorsList.map((sponsor) => ({ ...sponsor, key: `${sponsor.id}-${i}` }))
    );

    return (
        <section className="section bg-dark sponsor-marquee-section" id="home-sponsors">
            <div className="container">
                <div className="section-header">
                    <h2>{t('home.sponsorsTitle')} <span className="text-gradient">{t('home.sponsorsHighlight')}</span></h2>
                </div>
            </div>
            <div className="sponsor-marquee" aria-label={t('home.sponsorsAria')}>
                <div className="sponsor-marquee-track">
                    <div className="sponsor-marquee-group">
                        {logos.map((sponsor) => (
                            <div className="sponsor-marquee-logo" key={sponsor.key}>
                                <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className="sponsor-marquee-group" aria-hidden="true">
                        {logos.map((sponsor) => (
                            <div className="sponsor-marquee-logo" key={`hidden-${sponsor.key}`}>
                                <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container text-center" style={{ marginTop: 'var(--spacing-lg)' }}>
                <Link to={l('/sponsors')} className="btn btn-secondary" style={{ padding: '0.85rem 2.25rem', background: 'var(--color-black)' }}>
                    {t('home.sponsorsAll')}
                </Link>
            </div>
        </section>
    );
};

export default SponsorMarquee;
