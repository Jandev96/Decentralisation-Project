// components/LeafletMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LeafletMap() {
  return (
    <MapContainer
      center={[9.021763106677037, 76.62988172024068]} // West Kallada Grama Panchayat coordinates
      zoom={13}
      scrollWheelZoom={false}
      dragging={false} 
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9.0166, 76.6032]}>
        <Popup>
           West Kallada Grama Panchayat.
           <br /> <a href="https://maps.app.goo.gl/VDw1uXf9QuCrnohY7">click here</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
