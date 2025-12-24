"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiAdobeillustrator, 
  SiFigma, 
  SiFramer, 
  SiWebflow, 
  SiBlender, 
  SiAdobeaftereffects, 
  SiNotion,
  SiLinear
} from "react-icons/si";
import { HiCube, HiPresentationChartBar, HiCodeBracket } from "react-icons/hi2";
import { FaMicrosoft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Brand Identity",
    description: "Get a differentiated and unique brand identity to stand out your product from competitors.",
    icons: [
      { Icon: SiAdobeillustrator, color: "text-[#FF9A00] bg-[#330000]" }, // Ai style
      { Icon: SiFigma, color: "text-purple-500 bg-gray-900" },
    ],
    imageGradient: "from-pink-500/20 to-rose-500/20",
    image: "https://images.unsplash.com/photo-1626785774573-4b79931434f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Website Design",
    description: "Turn your website into a eye-dropping marketing machine to turn visitors into customers.",
    icons: [
      { Icon: SiFigma, color: "text-purple-500 bg-gray-900" },
      { Icon: SiFramer, color: "text-black bg-white" },
    ],
    imageGradient: "from-blue-500/20 to-cyan-500/20",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Product Design",
    description: "Make your product so delightful to, it instantly becomes the thing to talk about in the industry.",
    icons: [
      { Icon: SiFigma, color: "text-purple-500 bg-gray-900" },
      { Icon: SiNotion, color: "text-black bg-white" },
      { Icon: SiLinear, color: "text-blue-500 bg-gray-900" },
    ],
    imageGradient: "from-purple-500/20 to-indigo-500/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "No Code Development",
    description: "Get your website developed in a blazing fast speed and have complete control as you scale.",
    icons: [
      { Icon: SiFramer, color: "text-black bg-white" },
      { Icon: SiWebflow, color: "text-blue-600 bg-white" },
      { Icon: HiCodeBracket, color: "text-pink-500 bg-pink-50" },
    ],
    imageGradient: "from-emerald-500/20 to-green-500/20",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "3D Design & Motion",
    description: "Elevate your brand by adding seamless 3D and motion animations to delight users.",
    icons: [
      { Icon: HiCube, color: "text-gray-900 bg-gray-100" }, // Spline-ish
      { Icon: SiAdobeaftereffects, color: "text-purple-600 bg-[#00005b]" },
      { Icon: SiBlender, color: "text-orange-500 bg-white" },
    ],
    imageGradient: "from-orange-500/20 to-amber-500/20",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3caf?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pitch Deck & Collaterals",
    description: "Fulfill all marketing design requirements with a team that feels like your own.",
    icons: [
      { Icon: FaMicrosoft, color: "text-orange-600 bg-white" },
      { Icon: HiPresentationChartBar, color: "text-blue-500 bg-blue-50" },
    ],
    imageGradient: "from-gray-500/20 to-slate-500/20",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    // Stagger cards animation
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-900">Our Services</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto">
            Anything you need. Done for you.
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
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
              {/* Image Area */}
              <div className="h-64 w-full relative overflow-hidden bg-gray-50">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.imageGradient} opacity-50`}></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              </div>

              {/* Content Area - Negative Margin for overlap effect */}
              <div className="relative z-10 -mt-12 bg-white rounded-t-[2.5rem] px-8 pt-8 pb-10 flex-1 flex flex-col border-t border-gray-50">
                 {/* Icons Row */}
                 <div className="flex gap-3 mb-6">
                   {service.icons.map((IconData, i) => (
                     <div key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                       <IconData.Icon className={`w-5 h-5 ${IconData.color.includes('text') ? IconData.color : 'text-gray-700'}`} />
                     </div>
                   ))}
                 </div>

                 <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3">
                   {service.title}
                 </h3>
                 
                 <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                   {service.description}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-900/20"
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
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Book Strategy Call
          </button>
          <button 
            className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all"
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
            Get a Quote
          </button>
        </div>

      </div>
    </section>
  );
}

