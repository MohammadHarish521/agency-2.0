"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCheck } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"onetime" | "growth">("onetime");
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Card animation
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 relative overflow-hidden scroll-mt-32"
    >
      {/* Background Gradients/Noise could go here */}
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16">
          <div className="bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            Pricings
          </div>
          
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Two ways to launch fast - and keep growing even faster
          </h2>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Choose the perfect package to launch and grow your startup
          </p>

          {/* Toggle Switch */}
          <div className="bg-gray-200/50 p-1.5 rounded-full inline-flex relative">
            <button
              onClick={() => setActiveTab("onetime")}
              className={`px-8 py-2.5 rounded-full text-sm transition-all duration-200 ${
                activeTab === "onetime"
                  ? "bg-white text-gray-900 shadow-md ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              One Time
            </button>
            <button
              onClick={() => setActiveTab("growth")}
              className={`px-8 py-2.5 rounded-full text-sm transition-all duration-200 ${
                activeTab === "growth"
                  ? "bg-white text-gray-900 shadow-md ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Growth
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div ref={cardRef} className="bg-gray-100/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-white/50 shadow-xl relative overflow-hidden">
             
            {/* Card Content based on Tab */}
            {activeTab === "onetime" ? (
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-4xl font-semibold text-gray-900 mb-2">
                    MVP Development
                  </h3>
                  <p className="text-gray-500 text-lg">
                    MVP Development Package
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-gray-900 font-medium text-center">
                    Complete MVP Delivered in just 2 weeks
                  </p>
                </div>

                <hr className="border-gray-200/60" />

                <ul className="space-y-5">
                  {[
                    "Full web or mobile MVP - built to scale",
                    "Modern, reliable tech stack (AI-ready)",
                    "Seamless integrations (payments, auth, email, etc)",
                    "30 days of free post-launch support",
                    "Direct founder-led development & weekly updates",
                    "Transparent progress tracking - no surprises"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 text-gray-400">
                        <HiCheck className="w-5 h-5" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-400 line-through text-xl font-medium">
                      $6500
                    </span>
                    <span className="text-5xl font-heading font-semibold text-gray-900">
                      $4997
                    </span>
                  </div>
                  <button 
                    className="w-full md:w-auto bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20"
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
                    Book a Free MVP Call
                  </button>
                </div>
              </div>
            ) : (
              // Growth Tab Placeholder - or similar structure
              <div className="space-y-8 text-center py-12">
                <h3 className="font-heading text-3xl font-semibold text-gray-900">
                  Growth Retainer
                </h3>
                <p className="text-gray-500">
                  Continuous development and scaling for established startups.
                </p>
                <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Coming Soon
                </div>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </section>
  );
}
