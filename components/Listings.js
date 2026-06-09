"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const WA = "https://wa.me/2349049299303";
const req = (name) => `${WA}?text=${encodeURIComponent(`Hi Favour! I would love more details about ${name}.`)}`;
function Fallback() { return <div className="lm-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="#c6a052" strokeWidth="1"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg></div>; }
const L = [
  { name: "Casa Royale Estate", loc: "Eliozu / Eliogbolo, Port Harcourt", img: "/images/casa-royale.jpg", cat: "Land & Plots", badge: "Now Selling", price: "₦49.5M", priceLabel: "Initial deposit ₦24M", plan: [["3 months", "₦45M"], ["6 months", "₦48M"]], features: ["Tarred Road", "Perimeter Fence", "Electricity", "Solar Lights", "Security House", "Deed of Conveyance"] },
  { name: "Marble Crescent", loc: "Rukpokwu, Port Harcourt", img: "/images/marble.jpg", cat: "Land & Plots", badge: "Premium", price: "₦16M – ₦25M", priceLabel: "Prime 300sqm / Elite 500sqm", plan: [["Prime · 300sqm", "₦16M"], ["Elite · 500sqm", "₦25M"]], features: ["Survey", "Electricity", "Access Road", "Deed of Conveyance"] },
  { name: "Runyi Residence", loc: "Eneka, Igbo-Etche Road, Rivers State", img: "/images/runyi.jpg", cat: "Land & Plots", badge: "Top Pick", price: "₦8.5M – ₦10M", priceLabel: "Residential 465sqm / Commercial 500sqm", plan: [["Residential · 465sqm", "₦8.5M"], ["Commercial · 500sqm", "₦10M"]], features: ["Strategic Location", "Flexible Payment", "Good Road Access", "Fast Growing Area"] },
  { name: "Grand Ville Estate", loc: "Omagwa, Port Harcourt", img: "/images/grandville.jpg", cat: "Land & Plots", badge: "Flexible Plan", price: "₦4.8M", priceLabel: "Now selling from", plan: [["3 months", "₦4.8M"], ["6 months", "₦5M"], ["12 months", "₦5.5M"]], features: ["Deed of Conveyance", "Registered Survey"] },
  { name: "The Murray", loc: "Beside NAF Harmony Estate, Port Harcourt", img: "/images/murray.jpg", cat: "Homes & Duplexes", badge: "Luxury", price: "₦450M", priceLabel: "Premium residence", plan: [], features: ["Off-Plan", "Luxury Build"] },
  { name: "The Jubilee", loc: "Peter Odili Road (near Sasun Roundabout)", img: "/images/jubilee.jpg", cat: "Homes & Duplexes", badge: "Off-Plan", price: "₦320M", priceLabel: "4 bedroom duplex", plan: [], features: ["Off-Plan", "4 Bedroom Duplex"] },
  { name: "The Harcourt", loc: "New GRA Phase 2, Woke Road", img: "/images/harcourt.jpg", cat: "Apartments", badge: "Apartments", price: "₦110M – ₦150M", priceLabel: "1 to 2 bedroom apartments", plan: [["1 bedroom", "₦110M"], ["2 bedroom", "₦150M"]], features: ["Off-Plan"] },
  { name: "The Aura", loc: "Peter Odili Road", img: "/images/aura.jpg", cat: "Apartments", badge: "Apartments", price: "₦110M – ₦140M", priceLabel: "1 to 3 bedroom apartments", plan: [["1 bedroom", "₦110M"], ["2 bedroom", "₦140M"], ["3 bedroom", "Sold out"]], features: ["Off-Plan"] },
  { name: "Joy Duplex", loc: "Greater TAF City, Obirikwere", img: "/images/joy.jpg", cat: "Homes & Duplexes", badge: "Duplex", price: "₦105M – ₦115M", priceLabel: "3 to 4 bedroom duplex", plan: [["3 bedroom", "₦105M"], ["4 bedroom", "₦115M"]], features: ["Off-Plan"] },
  { name: "Amber View", loc: "NTA Road, Port Harcourt", img: "/images/amber.jpg", cat: "Homes & Duplexes", badge: "Mixed Units", price: "From ₦34.5M", priceLabel: "Studio · 4-bed · Duplex", plan: [["Studio apartment", "₦34.5M"], ["4 bedroom", "₦49.5M"], ["Duplex", "₦82.5M"]], features: ["Off-Plan"] },
];
const cats = ["All", "Land & Plots", "Homes & Duplexes", "Apartments"];
export default function Listings() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? L : L.filter((l) => l.cat === filter);
  return (
    <section className="listings" id="listings">
      <div className="section-head"><p className="section-tag dark center">Available Properties</p><h2>Featured Opportunities</h2><p>Carefully selected homes, estates and plots across Port Harcourt and Rivers State.</p></div>
      <div className="filter-bar">
        {cats.map((c) => (
          <button key={c} className={`filter-pill ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>{c} ({c === "All" ? L.length : L.filter((l) => l.cat === c).length})</button>
        ))}
      </div>
      <motion.div className="listing-grid" layout>
        <AnimatePresence mode="popLayout">
          {shown.map((l) => (
            <motion.div key={l.name} layout className="listing-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92 }} whileHover={{ y: -8 }} transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}>
              <div className="listing-media">
                {l.img ? <Image src={l.img} alt={l.name} fill sizes="(max-width:980px) 100vw, 400px" /> : <Fallback />}
                <span className="listing-badge">{l.badge}</span>
                <div className="lm-overlay"><div className="listing-name">{l.name}</div><div className="listing-loc">{l.loc}</div></div>
              </div>
              <div className="listing-body">
                <div className="listing-price">{l.price}<span>{l.priceLabel}</span></div>
                {l.plan.length > 0 && <div className="plan">{l.plan.map((p, j) => (<div className="plan-row" key={j}><span>{p[0]}</span><b>{p[1]}</b></div>))}</div>}
                {l.features.length > 0 && <div className="features">{l.features.map((ft, j) => (<span className="chip" key={j}>{ft}</span>))}</div>}
                <a className="btn btn-navy full listing-cta" href={req(l.name)} target="_blank" rel="noopener noreferrer">Request Details</a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="partner" style={{ marginTop: "2.4rem" }}>All properties marketed by Favour, a consultant with M&amp;D Urban Realty Ltd. — every enquiry handled personally.</p>
    </section>
  );
}
