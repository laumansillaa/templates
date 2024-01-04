// "use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

export default function MapComponent({ position }) {

  const icon = leaflet.icon({
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "/MapComponent/location.svg",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
    iconSize: new leaflet.Point(34, 41),
  });

  return (
    <MapContainer
      center={position}
      zoom={17}
      attributionControl={false}
      style={{ height: "40vh", width: "100%" }}
    >
      <TileLayer
        attributionControl={false}
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
}
