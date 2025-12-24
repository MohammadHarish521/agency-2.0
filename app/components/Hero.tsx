"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    })
      .from(
        headlineRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.3"
      )
      .from(
        subheadlineRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.6,
        },
        "-=0.3"
      );
  }, []);

  return (
    <main className="pt-40 md:pt-48 px-4 md:px-6 max-w-[1440px] mx-auto overflow-hidden">
      <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
        
        {/* Founders Badge */}
        <div ref={badgeRef} className="inline-flex items-center justify-center mb-10">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-800">
              5 Founders booked the call this week
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 ref={headlineRef} className="hero-framer-text mb-8 max-w-4xl mx-auto">
          We Build and Launch Your<br className="hidden md:block" />
          Startup MVP in Just 2 Weeks
        </h1>

        {/* Subheadline */}
        <p ref={subheadlineRef} className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          LaunchPad Labs builds and ships investor-ready MVPs for founders
        </p>

        {/* Hero CTA */}
        <div ref={ctaRef} className="flex items-center justify-center w-full">
          <button 
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-base hover:bg-gray-800 transition-all shadow-xl shadow-gray-200/50 min-w-[200px]"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -4,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseDown={(e) => {
              gsap.to(e.currentTarget, {
                scale: 0.98,
                duration: 0.1,
              });
            }}
            onMouseUp={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                duration: 0.1,
              });
            }}
          >
            Book a Free MVP Call
          </button>
        </div>
      </div>
    </main>
  );
}
