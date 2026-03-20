import React from 'react';
import LazyImage from './LazyImage';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const TeamCard = ({ member }) => (
  <div
    className="card team-card animate-on-scroll slide-up"
    style={{ flex: '0 1 calc(33.333% - var(--spacing-lg))', minWidth: '280px' }}
  >
    <div
      className="team-card-img"
      style={{
        background: member.image
          ? "none"
          : `linear-gradient(135deg, var(--color-${member.color}), var(--color-${member.gradient}))`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        padding: 0,
        overflow: "hidden",
      }}
    >
      {member.image ? (
        <LazyImage
          src={member.image}
          alt={member.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        "👤"
      )}
    </div>
    <h4 className="team-card-name">{member.name}</h4>
    <p className="team-card-role">{member.role}</p>
    <div className="team-card-social">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <LinkedInIcon />
      </a>
      {member.website && (
        <a href={member.website} target="_blank" rel="noopener noreferrer" title="Website">
          <WebIcon />
        </a>
      )}
    </div>
  </div>
);

export default TeamCard;
