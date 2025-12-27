"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsInfinity } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Initial entrance animation
    gsap.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
    });

    // Scroll-triggered animation
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      onEnter: () => {
        gsap.to(navRef.current, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav ref={navRef} className="pointer-events-auto flex items-center justify-between gap-8 p-2 pl-2 bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-50 min-w-[320px] md:min-w-[400px] max-w-2xl w-full mx-auto">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 pl-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm text-gray-900">
             <BsInfinity className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-heading font-semibold text-gray-900 text-sm md:text-base tracking-tight">
            Infinite Studio X
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 pr-2">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -2,
                duration: 0.2,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.2,
                ease: "power2.out",
              });
            }}
          >
            Work
          </a>
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -2,
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
          >
            Book a Call
          </a>
        </div>

      </nav>
    </div>
  );
}
