"use client";
import { useEffect, useState } from "react";
const links = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Me" },
  { href: "#listings", label: "Listings" },
  { href: "#tips", label: "Tips" },
  { href: "#contact", label: "Contact" },
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const o = () => setScrolled(window.scrollY > 40); o(); window.addEventListener("scroll", o); return () => window.removeEventListener("scroll", o); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <img src="/images/icon.svg" alt="Investwithfavy" className="brand-logo" />
        <span className="brand-name">Investwith<b>favy</b></span>
      </a>
      <div className={`nav-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Consultation</a>
      </nav>
      <button className={`nav-toggle ${open ? "open" : ""}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
    </header>
  );
}
