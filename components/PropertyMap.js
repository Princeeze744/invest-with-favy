"use client";
import { useEffect, useRef } from "react";
const WA = "https://wa.me/2349049299303";
const props = [
  { name: "Casa Royale Estate", loc: "Eliozu / Eliogbolo", price: "₦49.5M", lat: 4.8780, lng: 7.0500 },
  { name: "Marble Crescent", loc: "Rukpokwu", price: "₦16M – ₦25M", lat: 4.8920, lng: 6.9990 },
  { name: "Runyi Residence", loc: "Eneka, Igbo-Etche Rd", price: "₦8.5M – ₦10M", lat: 4.9230, lng: 7.0360 },
  { name: "Grand Ville Estate", loc: "Omagwa", price: "₦4.8M", lat: 5.0150, lng: 6.9490 },
  { name: "The Murray", loc: "Beside NAF Harmony", price: "₦450M", lat: 4.8820, lng: 7.0560 },
  { name: "The Jubilee", loc: "Peter Odili Road", price: "₦320M", lat: 4.7980, lng: 7.0150 },
  { name: "The Harcourt", loc: "New GRA Phase 2", price: "₦110M – ₦150M", lat: 4.8470, lng: 7.0330 },
  { name: "The Aura", loc: "Peter Odili Road", price: "₦110M – ₦140M", lat: 4.7900, lng: 7.0200 },
  { name: "Joy Duplex", loc: "Greater TAF City", price: "₦105M – ₦115M", lat: 4.9500, lng: 6.9300 },
  { name: "Amber View", loc: "NTA Road", price: "From ₦34.5M", lat: 4.8200, lng: 6.9950 },
];
function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) return resolve(window.L);
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css"; link.rel = "stylesheet"; link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    const s = document.createElement("script");
    s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"; s.async = true;
    s.onload = () => resolve(window.L);
    document.body.appendChild(s);
  });
}
export default function PropertyMap() {
  const ref = useRef(null);
  const mapRef = useRef(null);
  useEffect(() => {
    let cancelled = false;
    loadLeaflet().then((L) => {
      if (cancelled || !ref.current || mapRef.current) return;
      const map = L.map(ref.current, { scrollWheelZoom: false }).setView([4.84, 7.02], 11);
      mapRef.current = map;
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", { attribution: "&copy; OpenStreetMap &copy; CARTO", maxZoom: 19 }).addTo(map);
      const icon = L.divIcon({ className: "map-pin", html: "<span></span>", iconSize: [22, 22], iconAnchor: [11, 11] });
      const pts = [];
      props.forEach((p) => {
        const m = L.marker([p.lat, p.lng], { icon }).addTo(map);
        const url = `${WA}?text=${encodeURIComponent(`Hi Favour! I would love more details about ${p.name}.`)}`;
        m.bindPopup(`<div class="map-pop"><b>${p.name}</b><span>${p.loc}</span><span class="map-pop-price">${p.price}</span><a href="${url}" target="_blank" rel="noopener noreferrer">Request details →</a></div>`);
        pts.push([p.lat, p.lng]);
      });
      if (pts.length) map.fitBounds(pts, { padding: [50, 50] });
    });
    return () => { cancelled = true; if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; } };
  }, []);
  return (
    <section className="map-sec" id="map">
      <div className="section-head"><p className="section-tag dark center">Explore By Location</p><h2>Property Map</h2><p>Every opportunity across Port Harcourt and Rivers State — tap a pin to explore.</p></div>
      <div className="map-wrap"><div ref={ref} className="map-box" /></div>
    </section>
  );
}
