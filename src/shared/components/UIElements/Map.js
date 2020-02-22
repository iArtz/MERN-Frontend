import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = (props) => {
  const {
    className, style, center, zoom,
  } = props;

  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    // eslint-disable-next-line no-new
    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);


  return <div ref={mapRef} className={`map ${className}`} style={style} />;
};

export default Map;
