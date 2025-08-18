import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon issue with webpack (Leaflet's default icon URLs)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});
// Default coordinates for Lekki Phase 1 (approx). Replace with exact lat/lng if you have them.
const DEFAULT_POSITION = [6.4477993, 3.4739988];

export default function HeadquartersMap({
  position = DEFAULT_POSITION,
  zoom = 15,
  address = `4th Floor, The Rock Tower, The Rock Drive,\nLekki, Lagos, Nigeria`,
  phone = '+234 708 167 5736',
  email = 'info@bartonheyman.com',
}) {
  return (
    <div className="w-full max-w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-md">
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        {/* OpenStreetMap tiles (free) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <div className="text-sm">
              <strong>Headquarters</strong>
              <div style={{ whiteSpace: 'pre-line' }}>{address}</div>
              <div className="mt-2">Phone: {phone}</div>
              <div>Email: {email}</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
