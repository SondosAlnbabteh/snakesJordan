import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    // الحصول على الموقع الحالي
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        center={position}
        zoom={15}
        onLoad={map => setMap(map)}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
