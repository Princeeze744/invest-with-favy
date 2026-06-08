import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata = {
  metadataBase: new URL("https://invest-with-favy.vercel.app"),
  title: "Investwithfavy — Real Estate Hub",
  description: "Investwithfavy — helping you make smart, confident real estate decisions. Verified property opportunities, land acquisition & honest guidance in Port Harcourt and Rivers State.",
  keywords: ["real estate", "property investment", "land for sale Port Harcourt", "Rivers State property", "Investwithfavy", "Favour real estate"],
  openGraph: { title: "Investwithfavy — Real Estate Hub", description: "Smart, confident real estate decisions. Verified properties & honest guidance in Port Harcourt.", type: "website" },
  twitter: { card: "summary_large_image", title: "Investwithfavy — Real Estate Hub", description: "Smart, confident real estate decisions in Port Harcourt." },
};
export const viewport = { themeColor: "#0e1b33" };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>);
}
