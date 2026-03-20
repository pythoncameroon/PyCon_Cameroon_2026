import React from 'react';

const VenueCard = ({ venue }) => (
  <div className="card animate-on-scroll slide-up">
    <div className="card-img">
      <img src={venue.image} alt={venue.name} loading="lazy" />
    </div>
    <h4>{venue.name}</h4>
    <p className="card-text">{venue.description}</p>
  </div>
);

export default VenueCard;
