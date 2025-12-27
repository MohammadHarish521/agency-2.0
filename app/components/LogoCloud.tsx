"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiVercel, SiStripe, SiLinear, SiNotion, SiRaycast, SiSupabase } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { icon: SiVercel, name: "Vercel" },
  { icon: SiStripe, name: "Stripe" },
  { icon: SiLinear, name: "Linear" },
  { icon: SiNotion, name: "Notion" },
  { icon: SiRaycast, name: "Raycast" },
  { icon: SiSupabase, name: "Supabase" },
];

export default function LogoCloud() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });

    // Marquee fade in
    gsap.from(marqueeRef.current, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: marqueeRef.current,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="border-y border-gray-200 py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-8 text-center">
        <p ref={textRef} className="text-sm font-medium text-gray-500">
          Trusted by engineering teams at
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div ref={marqueeRef} className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {/* Set 1 */}
            {logos.map((logo, index) => {
              const IconComponent = logo.icon;
              return (
                <div
                  key={`set1-${index}`}
                  className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200 cursor-pointer"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
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
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tight">{logo.name}</span>
                </div>
              );
            })}
            {/* Set 2 (Duplicate for loop) */}
            {logos.map((logo, index) => {
              const IconComponent = logo.icon;
              return (
                <div
                  key={`set2-${index}`}
                  className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200 cursor-pointer"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
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
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tight">{logo.name}</span>
                </div>
              );
            })}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

