import React from 'react';

const PartnerCard = ({ partner }) => (
  <a
    href={partner.link}
    target="_blank"
    rel="noopener noreferrer"
    className="card animate-on-scroll slide-up"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-md)',
      textAlign: 'center',
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
      width: '100%',
    }}
  >
    <img
      src={partner.image}
      alt={partner.name}
      loading="lazy"
      style={{
        width: '120px',
        height: '120px',
        objectFit: 'contain',
        marginBottom: 'var(--spacing-sm)',
        border: '2px solid var(--color-border)',
        borderRadius: '20px',
        padding: '8px',
      }}
    />
    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>
      {partner.name}
    </span>
  </a>
);

export default PartnerCard;
