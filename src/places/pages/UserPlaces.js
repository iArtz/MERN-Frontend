import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import DUMMY_PLACES from '../../shared/util/places';

const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
