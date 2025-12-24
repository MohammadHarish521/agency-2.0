"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Chirag Kulkarni",
    title: "CEO @Hobbes",
    quote: "They have a wealth of knowledge / experience in the world of UX and leaned in heavily on all aspects of our brand.",
    avatar: "https://ui-avatars.com/api/?name=Chirag+Kulkarni&background=3b82f6&color=fff&size=128",
  },
  {
    name: "Valerio Di Palo",
    title: "Founder @AI SuitUp",
    quote: "The most impressive part was the attention to detail in their work.",
    avatar: "https://ui-avatars.com/api/?name=Valerio+Di+Palo&background=1e293b&color=fff&size=128",
    tag: "Geist",
  },
  {
    name: "Jorge Villafuerte",
    title: "Director of Technology @Avantpage",
    quote: "The company's ability to efficiently understand and align with a client's vision is indeed impressive.",
    avatar: "https://ui-avatars.com/api/?name=Jorge+Villafuerte&background=0f172a&color=fff&size=128",
  },
  {
    name: "Luka Pecavar",
    title: "Founder @Manyreach",
    quote: "A whole new user interface was designed in 30 days. Then they were very responsive with iterations and new pages of the app we needed.",
    avatar: "https://ui-avatars.com/api/?name=Luka+Pecavar&background=475569&color=fff&size=128",
  },
  {
    name: "Samanyou Garg",
    title: "CEO @Writesonic",
    quote: "Their designs consistently balanced aesthetics with functionality and business objectives.",
    avatar: "https://ui-avatars.com/api/?name=Samanyou+Garg&background=1e293b&color=fff&size=128",
  },
  {
    name: "Balaji Kummari",
    title: "CTO @ScaleJobs",
    quote: "What stood out was how much time B getting to know our customers before anything.",
    avatar: "https://ui-avatars.com/api/?name=Balaji+Kummari&background=3b82f6&color=fff&size=128",
  },
  {
    name: "Agarwal",
    title: "Founder @Sybill",
    quote: "working with the Bricx team, their attention nd great UI/UX sense and taste enabled a inp of our product. Highly recommend!",
    avatar: "https://ui-avatars.com/api/?name=Agarwal&background=0f172a&color=fff&size=128",
  },
  {
    name: "Priyanshu Tanwar",
    title: "Head of Product @Upsurge Labs",
    quote: "Bricx got truly obsessed with our product and went out of their way to make sure our expectations were met.",
    avatar: "https://ui-avatars.com/api/?name=Priyanshu+Tanwar&background=475569&color=fff&size=128",
  },
  {
    name: "Mike Nikles",
    title: "Founder @Webstone Technologies",
    quote: "They delivered fantastic work and always kept us updated and informed.",
    avatar: "https://ui-avatars.com/api/?name=Mike+Nikles&background=3b82f6&color=fff&size=128",
  },
  {
    name: "Frederic Jean-Bart",
    title: "CEO @Performance Partners",
    quote: "Bricx delivered the website on time and according to the specifications. I loved the quality of the work.",
    avatar: "https://ui-avatars.com/api/?name=Frederic+Jean-Bart&background=1e293b&color=fff&size=128",
  },
  {
    name: "Emmett Cooke",
    title: "Director @Pixelflow",
    quote: "Their speed and incredibly high quality of work, as well as industry knowledge, stood out.",
    avatar: "https://ui-avatars.com/api/?name=Emmett+Cooke&background=0f172a&color=fff&size=128",
  },
  {
    name: "Laxman Singh",
    title: "CTO @BTR Labs Inc",
    quote: "Bricx listens carefully and always comes up with creative ideas. Their thought process is impressive.",
    avatar: "https://ui-avatars.com/api/?name=Laxman+Singh&background=f59e0b&color=fff&size=128",
  },
];

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

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

    // Marquee container animation
    gsap.from(marqueeRef.current, {
      opacity: 0,
      scale: 0.98,
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
    <section
      id="testimonials"
      className="py-24 border-b border-gray-200 scroll-mt-32"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Testimonials
          </h2>
          <h3 className="hero-framer-text max-w-3xl mx-auto">
            Don&apos;t Take Our Word. Take Their&apos;s.
          </h3>
        </div>

        <div ref={marqueeRef} className="relative overflow-hidden">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={true}
            className="gap-4"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] mx-2 bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:border-gray-200 transition-colors"
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
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    on Clutch
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>

                {testimonial.tag && (
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-black text-white rounded">
                      {testimonial.tag}
                    </span>
                  </div>
                )}

                <a
                  href="#"
                  className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <span>Read full review on clutch</span>
                  <div className="flex items-center gap-1">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
