import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

const mapsUrl = (name) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} Yaoundé`)}`;

const VenueCard = ({ venue }) => {
  const { t } = useTranslation();
  return (
    <a
      href={venue.mapUrl || mapsUrl(venue.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="card animate-on-scroll slide-up"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'inherit', textDecoration: 'none' }}
    >
      <div className="card-img">
        <img src={venue.image} alt={venue.name} loading="lazy" />
      </div>
      <h4>{venue.name}</h4>
      <p className="card-text">{venue.description}</p>
      <p style={{ marginTop: 'auto', paddingTop: 'var(--spacing-sm)', color: 'var(--color-orange)', fontWeight: 600, fontSize: '0.9rem' }}>
        <MapPin size="1em" style={{ verticalAlign: '-0.125em', marginRight: '0.25rem' }} />
        {t('venue.openInMaps')}
      </p>
    </a>
  );
};

export default VenueCard;
