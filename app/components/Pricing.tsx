"use client";

import { useEffect, useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCheck } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = {
  development: {
    starter: {
      title: "Starter",
      subtitle: "Basic Package",
      price: "$1,999",
      period: "/one-time",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Frontend Development",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Forms",
        "3 Revisions",
        "30 Days Support"
      ]
    },
    professional: {
      title: "Professional",
      subtitle: null,
      price: "$3,999",
      period: "/one-time",
      description: "Ideal for growing businesses that need advanced functionality",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "CMS Integration",
        "E-commerce Ready",
        "Analytics Setup",
        "Unlimited Revisions",
        "90 Days Support",
        "Performance Optimization"
      ],
      isPopular: true
    },
    enterprise: {
      title: "Enterprise",
      subtitle: "Premium Package",
      price: "Custom",
      period: "/quote",
      description: "For large-scale projects requiring custom solutions and ongoing support",
      features: [
        "Everything in Professional",
        "Custom Backend Development",
        "Third-party Integrations",
        "Advanced Security",
        "Multi-language Support",
        "Dedicated Project Manager",
        "Priority Support",
        "6 Months Maintenance"
      ]
    }
  },
  designDevelopment: {
    starter: {
      title: "Starter",
      subtitle: "Basic Package",
      price: "$2,499",
      period: "/one-time",
      description: "Perfect for small businesses looking to establish their digital presence",
      features: [
        "Custom Website Design",
        "Frontend Development",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Forms",
        "3 Revisions",
        "30 Days Support"
      ]
    },
    professional: {
      title: "Professional",
      subtitle: null,
      price: "$4,999",
      period: "/one-time",
      description: "Ideal for growing businesses that need advanced functionality",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "Custom UI/UX Design",
        "CMS Integration",
        "E-commerce Ready",
        "Analytics Setup",
        "Unlimited Revisions",
        "90 Days Support",
        "Performance Optimization"
      ],
      isPopular: true
    },
    enterprise: {
      title: "Enterprise",
      subtitle: "Premium Package",
      price: "Custom",
      period: "/quote",
      description: "For large-scale projects requiring custom solutions and ongoing support",
      features: [
        "Everything in Professional",
        "Custom Backend Development",
        "Advanced Design System",
        "Third-party Integrations",
        "Advanced Security",
        "Multi-language Support",
        "Dedicated Project Manager",
        "Priority Support",
        "6 Months Maintenance"
      ]
    }
  }
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"development" | "designDevelopment">("designDevelopment");
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
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
    }

    // Cards animation
    const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    validCards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, [activeTab]);

  const currentPlans = pricingPlans[activeTab];

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 relative overflow-hidden scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="text-sm font-semibold text-gray-900">Pricing</span>
          </div>
          
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Pricing
          </h2>

          {/* Toggle Switch */}
          <div className="bg-gray-200/50 p-1.5 rounded-full inline-flex relative mt-4">
            <button
              onClick={() => setActiveTab("development")}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "development"
                  ? "bg-white text-gray-900 shadow-md ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Development Only
            </button>
            <button
              onClick={() => setActiveTab("designDevelopment")}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "designDevelopment"
                  ? "bg-white text-gray-900 shadow-md ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Design + Development
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Card */}
          <div 
            ref={(el) => { cardsRef.current[0] = el; }}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            {currentPlans.starter.subtitle && (
              <div className="text-sm text-gray-500 font-medium mb-2">
                {currentPlans.starter.subtitle}
              </div>
            )}
            <h3 className="font-heading text-3xl font-semibold text-gray-900 mb-4">
              {currentPlans.starter.title}
            </h3>
            
            <div className="mb-4">
              <span className="text-4xl font-heading font-semibold text-gray-900">
                {currentPlans.starter.price}
              </span>
              <span className="text-gray-500 text-sm ml-2">
                {currentPlans.starter.period}
              </span>
            </div>
            
            <p className="text-gray-500 mb-8 text-sm">
              {currentPlans.starter.description}
            </p>

            <ul className="space-y-4 flex-1 mb-8">
              {currentPlans.starter.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <HiCheck className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className="w-full bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-lg mt-auto"
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
              Get Started
            </button>
          </div>

          {/* Professional Card - Most Popular */}
          <div 
            ref={(el) => { cardsRef.current[1] = el; }}
            className="bg-white rounded-[2.5rem] p-8 border-2 border-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col relative"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            <div className="absolute -top-3 left-6 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            
            <h3 className="font-heading text-3xl font-semibold text-gray-900 mb-4 mt-2">
              {currentPlans.professional.title}
            </h3>
            
            <div className="mb-4">
              <span className="text-4xl font-heading font-semibold text-gray-900">
                {currentPlans.professional.price}
              </span>
              <span className="text-gray-500 text-sm ml-2">
                {currentPlans.professional.period}
              </span>
            </div>
            
            <p className="text-gray-500 mb-8 text-sm">
              {currentPlans.professional.description}
            </p>

            <ul className="space-y-4 flex-1 mb-8">
              {currentPlans.professional.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <HiCheck className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className="w-full bg-gray-900 text-white px-6 py-3.5 rounded-full shadow-lg shadow-gray-900/20 mt-auto"
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
              Get Started
            </button>
          </div>

          {/* Enterprise Card */}
          <div 
            ref={(el) => { cardsRef.current[2] = el; }}
            className="bg-white rounded-[2.5rem] p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -8,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }}
          >
            {currentPlans.enterprise.subtitle && (
              <div className="text-sm text-gray-500 font-medium mb-2">
                {currentPlans.enterprise.subtitle}
              </div>
            )}
            <h3 className="font-heading text-3xl font-semibold text-gray-900 mb-4">
              {currentPlans.enterprise.title}
            </h3>
            
            <div className="mb-4">
              <span className="text-4xl font-heading font-semibold text-gray-900">
                {currentPlans.enterprise.price}
              </span>
              <span className="text-gray-500 text-sm ml-2">
                {currentPlans.enterprise.period}
              </span>
            </div>
            
            <p className="text-gray-500 mb-8 text-sm">
              {currentPlans.enterprise.description}
            </p>

            <ul className="space-y-4 flex-1 mb-8">
              {currentPlans.enterprise.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <HiCheck className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-gray-700 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button 
              className="w-full bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-lg mt-auto"
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
              Get Started
            </button>
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="flex justify-center mt-12">
          <button 
            className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-lg"
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
            <span>Need a custom quote?</span>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
