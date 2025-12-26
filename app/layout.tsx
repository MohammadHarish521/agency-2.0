import type { Metadata } from "next";
import { Figtree } from "next/font/google";
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
        className={`${figtree.variable} antialiased bg-gray-50 text-gray-900 selection:bg-gray-900 selection:text-white relative min-h-screen overflow-x-hidden`}
      >
        {/* Animated gradient mesh background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
