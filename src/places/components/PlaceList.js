import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Card>
        <div className="place-list center">
          <h2>No places found. Maybe create one?</h2>
          <button type="button">Share Place</button>
        </div>
      </Card>
    );
  }

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
