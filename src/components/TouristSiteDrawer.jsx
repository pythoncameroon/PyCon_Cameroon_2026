import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X, MapPin, Clock, Navigation, Lightbulb } from 'lucide-react';

const mapsUrl = (name) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} Yaoundé`)}`;

const TouristSiteDrawer = ({ site, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!site) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [site, onClose]);

  if (!site) return null;

  const highlights = Array.isArray(site.highlights) ? site.highlights : [];

  return (
    <>
      <div className="site-drawer-overlay" onClick={onClose} role="presentation" />
      <aside className="site-drawer" role="dialog" aria-modal="true" aria-label={site.name}>
        <button type="button" className="site-drawer-close" onClick={onClose} aria-label={t('touristSites.close')}>
          <X size="1.5rem" />
        </button>

        <div className="site-drawer-img">
          <img src={site.image} alt={site.name} />
        </div>

        <div className="site-drawer-body">
          <h2 style={{ marginBottom: 'var(--spacing-xs)' }}>{site.name}</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>{site.description}</p>

          {site.longDescription && (
            <p style={{ marginTop: 'var(--spacing-sm)' }}>{site.longDescription}</p>
          )}

          <h3 style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
            <Clock size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem', color: 'var(--color-orange)' }} />
            {t('touristSites.duration')}
          </h3>
          <p>{t('touristSites.durationHours', { hours: site.duration })}</p>

          {site.gettingThere && (
            <>
              <h3 style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                <Navigation size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem', color: 'var(--color-orange)' }} />
                {t('touristSites.gettingThere')}
              </h3>
              <p>{site.gettingThere}</p>
            </>
          )}

          {highlights.length > 0 && (
            <>
              <h3 style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                <Lightbulb size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem', color: 'var(--color-orange)' }} />
                {t('touristSites.highlights')}
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {highlights.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}

          <div style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href={site.mapUrl || mapsUrl(site.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center' }}
            >
              <MapPin size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.5rem' }} />
              {t('venue.openInMaps')}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default TouristSiteDrawer;
