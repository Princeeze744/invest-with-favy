"use client";
import { useState } from "react";
const WA = "https://wa.me/2349049299303";
function Icon({ d }) { return <svg viewBox="0 0 24 24"><path d={d} /></svg>; }
export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", location: "", budget: "", type: "", purpose: "", notes: "" });
  const [note, setNote] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = () => {
    if (!f.name) { setNote("Please add your name so Favour can reach you."); return; }
    const msg = `Hi Favour! I would like help finding a property.\n\nName: ${f.name}\nPhone: ${f.phone || "-"}\nPreferred location: ${f.location || "-"}\nBudget: ${f.budget || "-"}\nType: ${f.type || "-"}\nPurpose: ${f.purpose || "-"}\nNotes: ${f.notes || "-"}`;
    setNote("Opening WhatsApp with your request...");
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  return (
    <section className="book" id="contact">
      <div className="book-inner">
        <div className="book-intro">
          <p className="section-tag">Let&apos;s Connect</p>
          <h2>Tell me what you&apos;re looking for.</h2>
          <p>Share your property goals and I&apos;ll reach out with opportunities that match. Or contact me directly:</p>
          <a className="contact-line" href="tel:+2349038814847"><Icon d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z" />+234 903 881 4847</a>
          <a className="contact-line" href={WA} target="_blank" rel="noopener noreferrer"><Icon d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />WhatsApp: +234 904 929 9303</a>
          <a className="contact-line" href="mailto:favourobarisiaka@gmail.com"><Icon d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm8 7L5 6.5V18h14V6.5z" />favourobarisiaka@gmail.com</a>
        </div>
        <div className="book-form">
          <div className="field"><label>Your Name</label><input value={f.name} onChange={set("name")} placeholder="e.g. John" /></div>
          <div className="field"><label>Phone / WhatsApp</label><input value={f.phone} onChange={set("phone")} placeholder="e.g. 0801 234 5678" /></div>
          <div className="field two">
            <div><label>Preferred Location</label><input value={f.location} onChange={set("location")} placeholder="e.g. Eliozu" /></div>
            <div><label>Budget</label><input value={f.budget} onChange={set("budget")} placeholder="e.g. 10 million" /></div>
          </div>
          <div className="field two">
            <div><label>Property Type</label><select value={f.type} onChange={set("type")}><option value="">Select</option><option>Land / Plot</option><option>House</option><option>Commercial</option><option>Other</option></select></div>
            <div><label>Purpose</label><select value={f.purpose} onChange={set("purpose")}><option value="">Select</option><option>Investment</option><option>Residential</option><option>Commercial</option></select></div>
          </div>
          <div className="field"><label>Notes</label><textarea rows="3" value={f.notes} onChange={set("notes")} placeholder="Any specific requirements..." /></div>
          <button className="btn btn-primary full" onClick={submit}>Send My Request via WhatsApp</button>
          <p className="book-note">{note}</p>
        </div>
      </div>
    </section>
  );
}
