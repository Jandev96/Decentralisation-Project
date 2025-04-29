// components/LeafletMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons in production
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LeafletMap() {
  return (
    <MapContainer
      center={[9.0166, 76.6032]} // West Kallada coordinates
      zoom={13}
      scrollWheelZoom={false}
      
      dragging={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      style={{ height: '500px', width: '100%',zIndex:"1" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9.0166, 76.6032]} icon={customIcon}>
        <Popup>
          This is West Kallada Grama Panchayat.<br /> <a href="https://maps.app.goo.gl/VDw1uXf9QuCrnohY7">Click here</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
