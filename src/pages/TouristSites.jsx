import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { touristSites } from '../data/touristSites';
import TouristSiteDrawer from '../components/TouristSiteDrawer';

const TouristSites = () => {
    const { t } = useTranslation();
    useScrollAnimation();

    const [selectedSlug, setSelectedSlug] = useState(null);

    const sites = useMemo(
        () => {
            const translatedMap = t('data.touristSites', { returnObjects: true }) || {};
            return touristSites.map((site) => ({
                ...site,
                ...(translatedMap[site.slug] || {}),
                name: translatedMap[site.slug]?.name || site.slug,
            }));
        },
        [t]
    );

    const selectedSite = sites.find((s) => s.slug === selectedSlug) || null;

    const handleKeyDown = (slug) => (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setSelectedSlug(slug);
        }
    };

    return (
        <>
            <header className="page-header">
                <div className="container text-center">
                    <h1>{t('touristSites.title')} <span className="text-gradient">{t('touristSites.titleHighlight')}</span></h1>
                    <p>{t('touristSites.subtitle')}</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <p style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                        {t('touristSites.intro')}
                    </p>

                    <div className="grid grid-3 stagger">
                        {sites.map((site) => (
                            <div
                                key={site.slug}
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedSlug(site.slug)}
                                onKeyDown={handleKeyDown(site.slug)}
                                className="card animate-on-scroll slide-up"
                                style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                            >
                                <div className="card-img">
                                    <img src={site.image} alt={site.name} loading="lazy" />
                                </div>
                                <h4>{site.name}</h4>
                                <p className="card-text">{site.description}</p>
                                <p style={{ marginTop: 'auto', paddingTop: 'var(--spacing-sm)', color: 'var(--color-orange)', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {t('touristSites.viewDetails')}
                                    <ChevronRight size="1em" style={{ verticalAlign: '-0.125em', marginLeft: '0.25rem' }} />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TouristSiteDrawer site={selectedSite} onClose={() => setSelectedSlug(null)} />
        </>
    );
};

export default TouristSites;
