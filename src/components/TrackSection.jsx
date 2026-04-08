import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../hooks/useLocalizedPath';

const TrackSection = ({ id, bgClass, logo, logoAlt, logoBg, title, titleGradient, color, description, highlights, ctaLabel }) => {
  const { t } = useTranslation();
  const { l } = useLocalizedPath();

  return (
    <section className={`section ${bgClass || ''}`} id={id}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-xl)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
              <img
                src={logo}
                alt={logoAlt}
                loading="lazy"
                style={{
                  width: '80px', height: '80px', objectFit: 'contain', borderRadius: '12px',
                  border: '2px solid var(--color-border)', padding: '6px',
                  ...(logoBg ? { background: logoBg } : {}),
                }}
              />
              <div>
                <span style={{ fontSize: '0.85rem', color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{t('data.tracks.newTrack')}</span>
                <h2 style={{ margin: 0 }}>{title} <span className="text-gradient">{titleGradient}</span></h2>
              </div>
            </div>
            {description.map((p, i) => <p key={i}>{p}</p>)}
            <div className="mt-md flex gap-sm flex-wrap">
              <Link to={l('/speakers')} className="btn btn-primary" style={color !== 'var(--color-orange)' ? { background: color } : {}}>
                {t('data.tracks.submitTalk', { label: ctaLabel })}
              </Link>
              <Link to={l('/attend')} className="btn btn-secondary">
                {t('data.tracks.attendTrack', { label: ctaLabel })}
              </Link>
            </div>
          </div>
          <div className="card" style={{ padding: 'var(--spacing-lg)' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)', color }}>{t('data.tracks.trackHighlights', { label: ctaLabel })}</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              {highlights.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <span style={{ color, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
