"use client";
import { useState } from "react";
const WA = "https://wa.me/2349049299303";
const types = ["Land / Plot", "House / Duplex", "Apartment", "Commercial", "Other"];
export default function SellList() {
  const [f, setF] = useState({ name: "", phone: "", type: types[0], location: "", price: "", details: "" });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  const submit = () => {
    const msg = `Hi Favour! I would like to LIST a property with you 🏠\n\nName: ${f.name || "-"}\nPhone: ${f.phone || "-"}\nType: ${f.type}\nLocation: ${f.location || "-"}\nAsking price: ${f.price || "-"}\nDetails: ${f.details || "-"}\n\nPlease reach out to me.`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <section className="sell" id="sell">
      <div className="section-head"><p className="section-tag center">Have a Property to Sell?</p><h2>List With Favour</h2><p>Selling land or a home? Submit the details and Favour will handle the marketing, the viewings and the right buyer — personally.</p></div>
      <div className="sell-card">
        <div className="sell-grid">
          <div className="sell-field"><label>Your name</label><input value={f.name} onChange={set("name")} placeholder="Full name" /></div>
          <div className="sell-field"><label>Phone / WhatsApp</label><input value={f.phone} onChange={set("phone")} placeholder="080..." /></div>
          <div className="sell-field"><label>Property type</label><select value={f.type} onChange={set("type")}>{types.map((t) => (<option key={t} value={t}>{t}</option>))}</select></div>
          <div className="sell-field"><label>Location / area</label><input value={f.location} onChange={set("location")} placeholder="e.g. Eliozu, PH" /></div>
          <div className="sell-field"><label>Asking price (optional)</label><input value={f.price} onChange={set("price")} placeholder="e.g. ₦25M" /></div>
        </div>
        <div className="sell-field full"><label>Brief details</label><textarea value={f.details} onChange={set("details")} rows={3} placeholder="Size, title documents, condition, anything useful..." /></div>
        <button className="btn btn-primary full" onClick={submit}>Send to Favour</button>
        <p className="sell-note">Your details go straight to Favour on WhatsApp — handled personally and confidentially.</p>
      </div>
    </section>
  );
}
