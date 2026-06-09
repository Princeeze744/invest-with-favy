"use client";
import { useState } from "react";
const WA = "https://wa.me/2349049299303";
const props = [
  { name: "Casa Royale Estate", price: 49500000 },
  { name: "Marble Crescent", price: 16000000 },
  { name: "Runyi Residence", price: 8500000 },
  { name: "Grand Ville Estate", price: 4800000 },
  { name: "The Murray", price: 450000000 },
  { name: "The Jubilee", price: 320000000 },
  { name: "The Harcourt", price: 110000000 },
  { name: "The Aura", price: 110000000 },
  { name: "Joy Duplex", price: 105000000 },
  { name: "Amber View", price: 34500000 },
];
const plans = [{ label: "Outright", months: 0 }, { label: "3 months", months: 3 }, { label: "6 months", months: 6 }, { label: "12 months", months: 12 }];
const fmt = (n) => "₦" + Math.max(0, Math.round(n)).toLocaleString("en-NG");
export default function Calculator() {
  const [sel, setSel] = useState(props[0].name);
  const [price, setPrice] = useState(props[0].price);
  const [deposit, setDeposit] = useState(0);
  const [months, setMonths] = useState(6);
  const onSelect = (e) => { const v = e.target.value; setSel(v); const p = props.find((x) => x.name === v); if (p) setPrice(p.price); };
  const balance = Math.max(price - deposit, 0);
  const monthly = months > 0 ? balance / months : balance;
  const book = () => {
    const planLabel = months > 0 ? `${months}-month plan` : "outright payment";
    const msg = `Hi Favour! I used the payment planner ✨\n\nProperty: ${sel}\nPrice: ${fmt(price)}\nDeposit: ${fmt(deposit)}\nPlan: ${planLabel}\n` + (months > 0 ? `Monthly: ${fmt(monthly)}\n` : "") + `\nCan we discuss this?`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <section className="calc" id="calculator">
      <div className="section-head"><p className="section-tag center">Plan With Confidence</p><h2>Payment Calculator</h2><p>See exactly how you can own your property — choose a plan and watch the numbers.</p></div>
      <div className="calc-card">
        <div className="calc-grid">
          <div className="calc-field"><label>Property</label><select value={sel} onChange={onSelect}>{props.map((p) => (<option key={p.name} value={p.name}>{p.name}</option>))}</select></div>
          <div className="calc-field"><label>Property price (₦)</label><input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value) || 0)} /></div>
          <div className="calc-field"><label>Your deposit (₦)</label><input type="number" value={deposit} onChange={(e) => setDeposit(Number(e.target.value) || 0)} placeholder="0" /></div>
        </div>
        <div className="calc-plans">{plans.map((pl) => (<button key={pl.label} className={`calc-plan ${months === pl.months ? "active" : ""}`} onClick={() => setMonths(pl.months)}>{pl.label}</button>))}</div>
        <div className="calc-results">
          <div className="calc-res"><span>Deposit</span><b>{fmt(deposit)}</b></div>
          <div className="calc-res"><span>Balance</span><b>{fmt(balance)}</b></div>
          <div className="calc-res highlight"><span>{months > 0 ? "Per month" : "Pay once"}</span><b>{fmt(monthly)}</b></div>
        </div>
        <button className="btn btn-primary full" onClick={book}>Discuss this plan with Favour</button>
        <p className="calc-note">Indicative only — final terms confirmed with Favour.</p>
      </div>
    </section>
  );
}
