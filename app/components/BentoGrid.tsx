"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCube, HiBolt, HiShieldCheck, HiCheck, HiStar } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [card1Ref, card2Ref, card3Ref, card4Ref];

    cards.forEach((cardRef, index) => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  return (
    <section
      id="work"
      className="px-4 md:px-6 max-w-[1440px] mx-auto w-full pb-32 scroll-mt-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 w-full">
      {/* Card 1: SaaS Interface (Large) */}
      <div 
        ref={card1Ref} 
        className="lg:col-span-8 h-[24rem] rounded-[2rem] border border-gray-100 bg-gray-50 overflow-hidden relative group cursor-pointer"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.01,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
      >
        <div className="absolute inset-x-8 top-8 z-10">
          <h3 className="font-heading text-xl font-semibold text-gray-900 tracking-tight">
            System Architecture
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Modular components designed for scale.
          </p>
        </div>
        {/* Simulated Interface */}
        <div className="absolute top-24 left-8 right-8 bottom-0 bg-white rounded-t-xl border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <HiCube className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">
                  Inventory.tsx
                </div>
                <div className="text-[10px] text-gray-400">
                  Last edited 2m ago
                </div>
              </div>
            </div>
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-pink-100 border border-white"></div>
              <div className="w-6 h-6 rounded-full bg-purple-100 border border-white"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-2 bg-gray-100 rounded w-1/3"></div>
            <div className="h-2 bg-gray-50 rounded w-3/4"></div>
            <div className="h-2 bg-gray-50 rounded w-1/2"></div>
            <div className="flex gap-4 mt-6">
              <div className="w-full h-24 bg-gray-50 rounded-lg border border-gray-100 border-dashed flex items-center justify-center text-gray-300 text-xs">
                Component Slot
              </div>
              <div className="w-full h-24 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-center text-blue-300 text-xs">
                Active Slot
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2: Analytics Dark (Small) */}
      <div 
        ref={card2Ref} 
        className="lg:col-span-4 h-[24rem] rounded-[2rem] bg-[#0F0F11] border border-gray-800 overflow-hidden relative p-8 flex flex-col justify-between group hover:border-gray-700 transition-colors cursor-pointer"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.02,
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
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Live Data
            </span>
          </div>
          <div className="text-4xl font-heading font-semibold text-white tracking-tight mb-1">
            98.4<span className="text-gray-600">%</span>
          </div>
          <p className="text-sm text-gray-500">Satisfaction Rate</p>
        </div>

        <div className="relative h-32 w-full mt-auto">
          {/* Graph Lines */}
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0 35 C 20 35, 30 10, 50 20 C 70 30, 80 5, 100 15"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  stopColor="#3b82f6"
                  stopOpacity="0.2"
                />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          {/* Floating Tooltip */}
          <div className="absolute top-0 right-10 bg-gray-800 text-white text-[10px] px-2 py-1 rounded border border-gray-700 shadow-xl transform translate-y-4">
            +24%
          </div>
        </div>
      </div>

      {/* Card 3: Feature List (Medium) */}
      <div 
        ref={card3Ref} 
        className="lg:col-span-5 h-80 rounded-[2rem] border border-gray-100 bg-white p-8 relative overflow-hidden flex flex-col justify-center cursor-pointer"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.02,
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
        <div className="space-y-5 relative z-10">
          {/* Toggle Item */}
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                <HiBolt className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  Lightning Fast
                </div>
                <div className="text-xs text-gray-400">Under 50ms latency</div>
              </div>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded-full relative transition-colors group-hover:bg-orange-500">
              <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform group-hover:translate-x-4 shadow-sm"></div>
            </div>
          </div>
          {/* Checkbox Item */}
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <HiShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">
                  Secure by Default
                </div>
                <div className="text-xs text-gray-400">SOC2 Compliant</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded border-2 border-gray-200 flex items-center justify-center text-white transition-colors group-hover:bg-blue-600 group-hover:border-blue-600">
              <HiCheck className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
        {/* Decorative bg blur */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Card 4: Gradient Promo (Medium) */}
      <div 
        ref={card4Ref} 
        className="lg:col-span-7 h-80 rounded-[2rem] overflow-hidden relative flex items-center justify-center p-8 cursor-pointer"
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div
          className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        ></div>

        <div className="relative z-10 text-center max-w-sm">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-lg text-white">
            <HiStar className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-4 tracking-tight">
            AI-First Design
          </h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Automate your design system workflows with our proprietary AI
            engine.
          </p>
          <button className="bg-white text-blue-600 text-xs font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
            Try Beta Access
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

