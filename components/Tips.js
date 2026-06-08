"use client";
import Reveal from "@/components/Reveal";
const tips = [
  "How to verify land documents before you pay",
  "Common mistakes first-time buyers make",
  "The right questions to ask before purchasing",
  "Understanding property ownership documents",
  "How to spot profitable investment opportunities",
  "Red flags to watch out for when buying land",
];
export default function Tips() {
  return (
    <section className="tips" id="tips">
      <div className="section-head"><p className="section-tag center">Learn Before You Invest</p><h2>Real Estate Tips</h2><p>An informed buyer is a confident buyer.</p></div>
      <div className="tips-grid">
        {tips.map((t, idx) => (<Reveal key={idx} className="tip" delay={(idx % 3) * 0.08}><div className="tip-num">{String(idx + 1).padStart(2, "0")}</div><p>{t}</p></Reveal>))}
      </div>
    </section>
  );
}
