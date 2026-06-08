"use client";
import Reveal from "@/components/Reveal";
const points = [
  "Honest, reliable guidance at every step",
  "Access to verified property opportunities",
  "Real estate tips and education",
  "Personalized support for buyers and investors",
  "A commitment to helping you decide with confidence",
];
function Check() { return <span className="ck"><svg viewBox="0 0 24 24"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" /></svg></span>; }
export default function Trust() {
  return (
    <section className="trust" id="why">
      <div className="section-head"><p className="section-tag dark center">Why Work With Me</p><h2>Guidance you can trust.</h2></div>
      <div className="trust-grid">
        {points.map((p, idx) => (<Reveal key={idx} className="trust-item" delay={(idx % 5) * 0.06}><Check /><p>{p}</p></Reveal>))}
      </div>
    </section>
  );
}
