import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Investwithfavy — Real Estate Hub";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(150deg,#0a1424,#0e1b33 55%,#0a1424)", color: "#f9f6ef" }}>
        <div style={{ display: "flex", fontSize: 90, fontWeight: 700 }}><span>I</span><span style={{ color: "#c6a052" }}>F</span></div>
        <div style={{ display: "flex", fontSize: 62, fontWeight: 700, letterSpacing: -1, marginTop: 4 }}><span>Investwith</span><span style={{ color: "#c6a052" }}>favy</span></div>
        <div style={{ display: "flex", width: 120, height: 2, background: "#c6a052", margin: "28px 0" }} />
        <div style={{ display: "flex", fontSize: 30, color: "rgba(249,246,239,0.85)" }}>Building Wealth Through Smart Investments</div>
        <div style={{ display: "flex", fontSize: 22, color: "#c6a052", marginTop: 16, letterSpacing: 6 }}>PORT HARCOURT</div>
      </div>
    ),
    { ...size }
  );
}
