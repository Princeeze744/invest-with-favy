"use client";
import Reveal from "@/components/Reveal";
const reviews = [
  { q: "Favour made my first land purchase stress-free. She explained every document and I never felt lost.", a: "— First-time buyer" },
  { q: "Honest, patient, and truly knowledgeable. I invested with total confidence.", a: "— Property investor" },
  { q: "She found exactly what fit my budget and goals. I recommend her to everyone.", a: "— Happy client" },
];
export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-head"><p className="section-tag center">What People Say</p><h2>Client Stories</h2></div>
      <div className="review-grid">
        {reviews.map((r, idx) => (<Reveal key={idx} className="review" delay={idx * 0.1}><p>{r.q}</p><cite>{r.a}</cite></Reveal>))}
      </div>
    </section>
  );
}
