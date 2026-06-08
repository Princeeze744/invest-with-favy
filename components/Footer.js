const IG = "https://www.instagram.com/investwithfavy_";
const YT = "https://youtube.com/@investwithfavy";
const FB = "https://www.facebook.com/share/14gP3ATMJp4/";
const WA = "https://wa.me/message/LHFJA267TYIML1";
export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="brand-name">Investwith<b>favy</b></span>
          <p>Helping you invest with confidence.</p>
          <p style={{ fontFamily: "var(--sans)", fontStyle: "normal", color: "rgba(249,246,239,.55)", fontSize: ".85rem", marginTop: ".4rem" }}>Port Harcourt · Rivers State</p>
        </div>
        <div className="footer-col"><h4>Explore</h4><a href="#about">About</a><a href="#listings">Listings</a><a href="#tips">Tips</a><a href="#contact">Contact</a></div>
        <div className="footer-col"><h4>Connect</h4><a href="tel:+2349038814847">+234 903 881 4847</a><a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="mailto:favourobarisiaka@gmail.com">Email</a></div>
        <div className="footer-col"><h4>Follow</h4><a href={IG} target="_blank" rel="noopener noreferrer">Instagram</a><a href={YT} target="_blank" rel="noopener noreferrer">YouTube</a><a href={FB} target="_blank" rel="noopener noreferrer">Facebook</a></div>
      </div>
      <p className="partner">Proudly working alongside M&amp;D Urban Realty Ltd.</p>
      <p className="copyright">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> Investwithfavy · Real Estate Hub</p>
    </footer>
  );
}
