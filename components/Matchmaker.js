"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
const WA = "https://wa.me/2349049299303";
const L = [
  { name: "Casa Royale Estate", cat: "Land & Plots", price: 49500000, loc: "Eliozu / Eliogbolo", img: "/images/casa-royale.jpg", blurb: "A serviced estate plot with road, fence, power and security — move-in ready land." },
  { name: "Marble Crescent", cat: "Land & Plots", price: 16000000, loc: "Rukpokwu", img: "/images/marble.jpg", blurb: "Premium 300–500sqm plots with survey and deed — a smart, central buy." },
  { name: "Runyi Residence", cat: "Land & Plots", price: 8500000, loc: "Eneka, Igbo-Etche Rd", img: "/images/runyi.jpg", blurb: "Affordable residential & commercial plots in a fast-growing corridor." },
  { name: "Grand Ville Estate", cat: "Land & Plots", price: 4800000, loc: "Omagwa", img: "/images/grandville.jpg", blurb: "The easiest entry point — flexible 3/6/12-month plans from ₦4.8M." },
  { name: "Amber View", cat: "Homes & Duplexes", price: 34500000, loc: "NTA Road", img: "/images/amber.jpg", blurb: "Mixed units from studios to duplexes — flexible options for any goal." },
  { name: "Joy Duplex", cat: "Homes & Duplexes", price: 105000000, loc: "Greater TAF City", img: "/images/joy.jpg", blurb: "Spacious 3–4 bedroom duplexes in a planned, modern community." },
  { name: "The Harcourt", cat: "Apartments", price: 110000000, loc: "New GRA Phase 2", img: "/images/harcourt.jpg", blurb: "Sleek 1–2 bedroom apartments in a prime, prestigious address." },
  { name: "The Aura", cat: "Apartments", price: 110000000, loc: "Peter Odili Road", img: "/images/aura.jpg", blurb: "Modern 1–3 bedroom apartments on one of PH's most sought-after roads." },
  { name: "The Jubilee", cat: "Homes & Duplexes", price: 320000000, loc: "Peter Odili Road", img: "/images/jubilee.jpg", blurb: "A statement 4-bedroom duplex for the discerning owner." },
  { name: "The Murray", cat: "Homes & Duplexes", price: 450000000, loc: "Beside NAF Harmony", img: "/images/murray.jpg", blurb: "A luxury residence for those who want the very best." },
];
const questions = [
  { q: "What are you looking for?", key: "type", options: ["Land / plot", "Apartment", "House / duplex", "Just investing"] },
  { q: "What's your budget?", key: "budget", options: ["Under ₦10M", "₦10M – ₦50M", "₦50M – ₦150M", "₦150M+"] },
  { q: "What's the goal?", key: "purpose", options: ["Build my home", "Pure investment", "Rent it out", "Not sure yet"] },
];
const byType = { "Land / plot": "Land & Plots", "Apartment": "Apartments", "House / duplex": "Homes & Duplexes", "Just investing": null };
const bmax = { "Under ₦10M": 10000000, "₦10M – ₦50M": 50000000, "₦50M – ₦150M": 150000000, "₦150M+": Infinity };
const bmin = { "Under ₦10M": 0, "₦10M – ₦50M": 10000000, "₦50M – ₦150M": 50000000, "₦150M+": 150000000 };
function recommend(a) {
  let pool = L.slice();
  const cat = byType[a.type];
  if (cat) pool = pool.filter((p) => p.cat === cat);
  const max = bmax[a.budget] ?? Infinity, min = bmin[a.budget] ?? 0;
  const inb = pool.filter((p) => p.price <= max);
  const ideal = inb.filter((p) => p.price >= min).sort((x, y) => y.price - x.price);
  return ideal[0] || inb.sort((x, y) => y.price - x.price)[0] || pool[0] || L[0];
}
const fmt = (n) => "₦" + n.toLocaleString("en-NG");
export default function Matchmaker() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({});
  const done = step >= questions.length;
  const pick = (k, v) => { setA((p) => ({ ...p, [k]: v })); setStep((s) => s + 1); };
  const restart = () => { setA({}); setStep(0); };
  const rec = done ? recommend(a) : null;
  const book = () => {
    const msg = `Hi Favour! I used the property matchmaker ✨\n\nLooking for: ${a.type || "-"}\nBudget: ${a.budget || "-"}\nGoal: ${a.purpose || "-"}\nMatched: ${rec.name} (${rec.loc})\n\nCan I get the details?`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <section className="match" id="match">
      <div className="section-head"><p className="section-tag dark center">Not sure where to start?</p><h2>Find Your Property</h2><p>Answer three quick questions and I will match you with the right opportunity.</p></div>
      <div className="match-card">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              <div className="match-progress"><span style={{ width: `${(step / questions.length) * 100}%` }} /></div>
              <div className="match-step">Question {step + 1} of {questions.length}</div>
              <h3 className="match-q">{questions[step].q}</h3>
              <div className="match-options">{questions[step].options.map((o) => (<button key={o} className="match-opt" onClick={() => pick(questions[step].key, o)}>{o}</button>))}</div>
              {step > 0 && <button className="match-back" onClick={() => setStep((s) => s - 1)}>← Back</button>}
            </motion.div>
          ) : (
            <motion.div key="res" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="match-result">
              <p className="match-result-tag">Your best match</p>
              <div className="match-prop">
                <div className="match-prop-img"><Image src={rec.img} alt={rec.name} fill sizes="320px" /></div>
                <div className="match-prop-info">
                  <h3>{rec.name}</h3>
                  <div className="match-prop-loc">{rec.loc}</div>
                  <div className="match-prop-price">{fmt(rec.price)}<span>starting from</span></div>
                  <p className="match-prop-blurb">{rec.blurb}</p>
                </div>
              </div>
              <button className="btn btn-primary full" onClick={book}>Get details on WhatsApp</button>
              <button className="match-retake" onClick={restart}>↺ Retake</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
