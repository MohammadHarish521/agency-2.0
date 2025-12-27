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

// Animated Visual Components
function BrandIdentityVisual() {
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant morphing shapes - clean and sophisticated
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    
    // Morph between different shapes smoothly
    tl.to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      borderRadius: "50%",
      rotate: 45,
      scale: 1.1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.inOut",
    })
    .to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      borderRadius: "0.5rem",
      rotate: 0,
      scale: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.inOut",
    })
    .to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      borderRadius: "0%",
      rotate: -45,
      scale: 0.9,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.inOut",
    })
    .to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      borderRadius: "0.5rem",
      rotate: 0,
      scale: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
      {/* Elegant morphing brand shapes */}
      <div className="flex gap-3 items-center">
        <div ref={shape1Ref} className="w-14 h-14 bg-purple-600 rounded-lg shadow-md"></div>
        <div ref={shape2Ref} className="w-14 h-14 bg-pink-500 rounded-lg shadow-md"></div>
        <div ref={shape3Ref} className="w-14 h-14 bg-rose-400 rounded-lg shadow-md"></div>
      </div>
    </div>
  );
}

function WebsiteDesignVisual() {
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to([bar1Ref.current, bar2Ref.current, bar3Ref.current], {
      height: "60%",
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.inOut",
    })
    .to([bar1Ref.current, bar2Ref.current, bar3Ref.current], {
      height: "40%",
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.inOut",
    });
    
    const circleTl = gsap.timeline({ repeat: -1 });
    circleTl.to(circleRef.current, {
      scale: 1.2,
      duration: 1,
      ease: "power2.inOut",
    }).to(circleRef.current, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
      {/* Animated Bars */}
      <div className="flex items-end gap-3 h-32">
        <div ref={bar1Ref} className="w-12 bg-blue-600 rounded-t-lg shadow-lg" style={{ height: "40%" }}></div>
        <div ref={bar2Ref} className="w-12 bg-cyan-500 rounded-t-lg shadow-lg" style={{ height: "60%" }}></div>
        <div ref={bar3Ref} className="w-12 bg-blue-400 rounded-t-lg shadow-lg" style={{ height: "50%" }}></div>
      </div>
      
      {/* Floating Circle */}
      <div ref={circleRef} className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full shadow-lg"></div>
    </div>
  );
}

function ProductDesignVisual() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.to([card1Ref.current, card2Ref.current, card3Ref.current], {
      y: -10,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
    })
    .to([card1Ref.current, card2Ref.current, card3Ref.current], {
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6 gap-2">
      <div ref={card1Ref} className="w-20 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
        <div className="w-8 h-8 bg-indigo-600 rounded"></div>
      </div>
      <div ref={card2Ref} className="w-20 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
        <div className="w-8 h-8 bg-purple-600 rounded"></div>
      </div>
      <div ref={card3Ref} className="w-20 h-24 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
        <div className="w-8 h-8 bg-indigo-400 rounded"></div>
      </div>
    </div>
  );
}

function WebDevVisual() {
  const codeLine1Ref = useRef<HTMLDivElement>(null);
  const codeLine2Ref = useRef<HTMLDivElement>(null);
  const codeLine3Ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to([codeLine1Ref.current, codeLine2Ref.current, codeLine3Ref.current], {
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.inOut",
    })
    .to([codeLine1Ref.current, codeLine2Ref.current, codeLine3Ref.current], {
      opacity: 0.5,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.inOut",
    });
    
    const cursorTl = gsap.timeline({ repeat: -1 });
    cursorTl.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(cursorRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
      <div className="w-full max-w-xs">
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
          <div ref={codeLine1Ref} className="text-green-400 mb-2">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-purple-400">app</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-400">express</span>
            <span className="text-white">()</span>
          </div>
          <div ref={codeLine2Ref} className="text-green-400 mb-2">
            <span className="text-blue-400">app</span>
            <span className="text-white">.</span>
            <span className="text-yellow-400">get</span>
            <span className="text-white">(</span>
            <span className="text-orange-400">'/'</span>
            <span className="text-white">, ...)</span>
          </div>
          <div ref={codeLine3Ref} className="text-green-400 flex items-center">
            <span className="text-blue-400">app</span>
            <span className="text-white">.</span>
            <span className="text-yellow-400">listen</span>
            <span className="text-white">(</span>
            <span className="text-orange-400">3000</span>
            <span className="text-white">)</span>
            <span ref={cursorRef} className="ml-1 w-2 h-4 bg-white inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppDevVisual() {
  const screenRef = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = [icon1Ref.current, icon2Ref.current, icon3Ref.current, icon4Ref.current];
    
    icons.forEach((icon, i) => {
      if (icon) {
        const iconTl = gsap.timeline({ repeat: -1, delay: i * 0.2 });
        iconTl.to(icon, {
          y: -8,
          duration: 0.75,
          ease: "power2.inOut",
        })
        .to(icon, {
          y: 0,
          duration: 0.75,
          ease: "power2.inOut",
        });
      }
    });
    
    const screenTl = gsap.timeline({ repeat: -1 });
    screenTl.to(screenRef.current, {
      scale: 1.02,
      duration: 1,
      ease: "power2.inOut",
    })
    .to(screenRef.current, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div ref={screenRef} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-48 h-64 flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
          <div className="text-xs font-semibold text-gray-900">9:41</div>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        
        {/* App Icons Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          <div ref={icon1Ref} className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div ref={icon2Ref} className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div ref={icon3Ref} className="w-16 h-16 bg-purple-400 rounded-xl flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
          <div ref={icon4Ref} className="w-16 h-16 bg-pink-400 rounded-xl flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PitchDeckVisual() {
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to([slide1Ref.current, slide2Ref.current, slide3Ref.current], {
      x: -20,
      opacity: 0.7,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.inOut",
    })
    .to([slide1Ref.current, slide2Ref.current, slide3Ref.current], {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-slate-50 flex items-center justify-center p-6 gap-2">
      <div ref={slide1Ref} className="w-16 h-20 bg-white rounded shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
        <div className="w-8 h-1 bg-gray-400 rounded"></div>
        <div className="w-6 h-1 bg-gray-300 rounded"></div>
      </div>
      <div ref={slide2Ref} className="w-16 h-20 bg-white rounded shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
        <div className="w-8 h-1 bg-gray-400 rounded"></div>
        <div className="w-6 h-1 bg-gray-300 rounded"></div>
      </div>
      <div ref={slide3Ref} className="w-16 h-20 bg-white rounded shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-1">
        <div className="w-8 h-1 bg-gray-400 rounded"></div>
        <div className="w-6 h-1 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Brand Identity",
    description: "Get a differentiated and unique brand identity to stand out your product from competitors.",
    icons: [
      { type: "icon", Icon: SiAdobeillustrator, color: "text-[#FF9A00] bg-[#330000]" },
      { type: "image", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg", alt: "Figma", className: "w-5 h-5" },
    ],
    visual: BrandIdentityVisual,
    rotation: -2,
  },
  {
    title: "Website Design",
    description: "Turn your website into a eye-dropping marketing machine to turn visitors into customers.",
    icons: [
      { type: "image", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg", alt: "Figma", className: "w-5 h-5" },
      { type: "icon", Icon: SiFramer, color: "text-black bg-white" },
    ],
    visual: WebsiteDesignVisual,
    rotation: 1.5,
  },
  {
    title: "Product Design",
    description: "Make your product so delightful to, it instantly becomes the thing to talk about in the industry.",
    icons: [
      { type: "image", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg", alt: "Figma", className: "w-5 h-5" },
      { type: "icon", Icon: SiNotion, color: "text-black bg-white" },
      { type: "icon", Icon: SiLinear, color: "text-blue-500 bg-gray-900" },
    ],
    visual: ProductDesignVisual,
    rotation: -1.5,
  },
  {
    title: "Web Development",
    description: "Build fast, scalable, and modern web applications with cutting-edge technologies and best practices.",
    icons: [
      { Icon: HiCodeBracket, color: "text-blue-600 bg-blue-50" },
      { Icon: SiFramer, color: "text-black bg-white" },
      { Icon: SiWebflow, color: "text-blue-600 bg-white" },
    ],
    visual: WebDevVisual,
    rotation: 1,
  },
  {
    title: "App Development",
    description: "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
    icons: [
      { Icon: HiCube, color: "text-purple-600 bg-purple-50" },
      { Icon: SiFramer, color: "text-black bg-white" },
      { Icon: HiCodeBracket, color: "text-pink-500 bg-pink-50" },
    ],
    visual: AppDevVisual,
    rotation: -2.5,
  },
  {
    title: "Pitch Deck & Collaterals",
    description: "Fulfill all marketing design requirements with a team that feels like your own.",
    icons: [
      { Icon: FaMicrosoft, color: "text-orange-600 bg-white" },
      { Icon: HiPresentationChartBar, color: "text-blue-500 bg-blue-50" },
    ],
    visual: PitchDeckVisual,
    rotation: 1.2,
  },
];

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>(new Array(services.length).fill(null));
  const visualRefs = useRef<(HTMLDivElement | null)[]>(new Array(services.length).fill(null));

  useEffect(() => {
    let fallbackTimer: NodeJS.Timeout;
    
    const timer = setTimeout(() => {
      if (headerRef.current) {
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
      }
      
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const validVisuals = visualRefs.current.filter(Boolean) as HTMLDivElement[];
      
      validCards.forEach((card) => {
        if (card) {
          gsap.set(card, { opacity: 0, y: 40, scale: 0.95 });
        }
      });

      validVisuals.forEach((visual, index) => {
        if (visual) {
          gsap.set(visual, { opacity: 0, scale: 0.8, rotation: 0 });
        }
      });

      fallbackTimer = setTimeout(() => {
        if (headerRef.current && gsap.getProperty(headerRef.current, "opacity") === 0) {
          gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5 });
        }
        validCards.forEach((card) => {
          if (card && gsap.getProperty(card, "opacity") === 0) {
            gsap.to(card, { opacity: 1, y: 0, scale: 1, duration: 0.5 });
          }
        });
        validVisuals.forEach((visual) => {
          if (visual && gsap.getProperty(visual, "opacity") === 0) {
            gsap.to(visual, { opacity: 1, scale: 1, duration: 0.5 });
          }
        });
      }, 2000);

      // Header animation
      if (headerRef.current) {
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
            onEnter: () => {
              if (fallbackTimer) clearTimeout(fallbackTimer);
            },
          },
        });
      }

      // Stagger cards animation
      if (gridRef.current && validCards.length > 0) {
        gsap.to(validCards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            end: "top 50%",
            toggleActions: "play none none none",
            onEnter: () => {
              if (fallbackTimer) clearTimeout(fallbackTimer);
            },
          },
        });
      }

      // Visual animations with rotation and bounce
      validVisuals.forEach((visual, index) => {
        if (visual) {
          const rotation = services[index]?.rotation || 0;
          gsap.to(visual, {
            opacity: 1,
            scale: 1,
            rotation: rotation,
            duration: 0.8,
            delay: index * 0.1 + 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: visual,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none none",
            },
          });
        }
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
          {services.map((service, index) => {
            const VisualComponent = service.visual;
            return (
              <div 
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -8,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                  if (visualRefs.current[index]) {
                    const baseRotation = service.rotation || 0;
                    gsap.to(visualRefs.current[index], {
                      rotation: baseRotation * 1.5,
                      scale: 1.05,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                  if (visualRefs.current[index]) {
                    gsap.to(visualRefs.current[index], {
                      rotation: service.rotation || 0,
                      scale: 1,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }
                }}
              >
                {/* Animated Visual Area */}
                <div 
                  ref={(el) => {
                    visualRefs.current[index] = el;
                  }}
                  className="h-64 w-full relative overflow-hidden"
                >
                  <VisualComponent />
                </div>

                {/* Content Area - Negative Margin for overlap effect */}
                <div className="relative z-10 -mt-12 bg-white rounded-t-[2.5rem] px-8 pt-8 pb-10 flex-1 flex flex-col border-t border-gray-50">
                   {/* Icons Row */}
                   <div className="flex gap-3 mb-6">
                     {service.icons.map((IconData, i) => (
                       <div key={i} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm">
                         {"src" in IconData && IconData.src ? (
                           <img 
                             src={IconData.src} 
                             alt={IconData.alt || "Logo"} 
                             className={IconData.className || "w-5 h-5 object-contain"}
                           />
                         ) : "Icon" in IconData && IconData.Icon ? (
                           <IconData.Icon className={`w-5 h-5 ${IconData.color && IconData.color.includes('text') ? IconData.color : 'text-gray-700'}`} />
                         ) : null}
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
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
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
