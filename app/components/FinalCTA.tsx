"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        buttonsRef.current,
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
    <section
      id="contact"
      className="py-32 px-6 text-center scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto">
        <h2 ref={headingRef} className="hero-framer-text mb-8">
          Ready to scale?
        </h2>
        <p ref={textRef} className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Join the high-performing teams building the future with Infinite
          Studio.
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-base hover:bg-gray-800 transition-all shadow-xl"
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
          >
            Get Started Now
          </button>
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-gray-900 transition-colors"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                x: 5,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                x: 0,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}

