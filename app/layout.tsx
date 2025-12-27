import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import DarkVeil from "./components/DarkVeil";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Infinite Studio X - Digital Product & UI Partners",
  description:
    "We build pixel-perfect digital experiences for fintech, AI, and SaaS companies that demand precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased bg-white text-gray-900 selection:bg-gray-900 selection:text-white relative min-h-screen overflow-x-hidden`}
      >
        {/* Dark Veil background - Light Gray on White */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <DarkVeil hueShift={0} speed={0.5} />
        </div>
        {children}
      </body>
    </html>
  );
}
