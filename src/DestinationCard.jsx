import React from 'react';
import './DestinationCard.css'; // (Optional CSS file for styles)

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;