"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Founder @TechFlow",
    quote: "They transformed our vision into a stunning web app in record time. The attention to detail and user experience is exceptional. Our users love it!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Marcus Rodriguez",
    title: "CEO @CloudSync",
    quote: "Working with this team was a game-changer. They built our mobile app with such precision and creativity. The app has exceeded all our expectations.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Watson",
    title: "Product Lead @DataViz",
    quote: "The best design and development team we've worked with. They understood our brand perfectly and delivered a product that truly represents who we are.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "James Park",
    title: "CTO @FinTech Solutions",
    quote: "Incredible work on our web platform. Fast, scalable, and beautifully designed. Our conversion rates have increased by 40% since launch.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sophie Laurent",
    title: "Founder @DesignStudio",
    quote: "They brought our app idea to life with such elegance. The UI/UX is flawless, and the code quality is outstanding. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "David Kim",
    title: "Head of Product @StartupHub",
    quote: "Professional, creative, and incredibly talented. They delivered our MVP ahead of schedule and it's been a huge success with our investors.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Isabella Martinez",
    title: "CEO @HealthTech",
    quote: "The mobile app they built for us is absolutely beautiful and performs flawlessly. Our users can't stop raving about the experience.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Alex Thompson",
    title: "Founder @EcoApp",
    quote: "Outstanding work on both our web and mobile platforms. They truly understand modern design principles and best development practices.",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    name: "Priya Sharma",
    title: "Product Director @SaaS Platform",
    quote: "They transformed our outdated platform into a modern, user-friendly application. The results speak for themselves - 60% increase in user engagement.",
    avatar: "https://i.pravatar.cc/150?img=27",
  },
  {
    name: "Michael Chen",
    title: "CTO @AI Innovations",
    quote: "Exceptional team with deep expertise in both design and development. They delivered a product that's both beautiful and highly functional.",
    avatar: "https://i.pravatar.cc/150?img=38",
  },
  {
    name: "Olivia Brown",
    title: "Founder @Creative Labs",
    quote: "Working with them was seamless. They took our complex requirements and turned them into an intuitive, beautiful application. Simply amazing!",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    name: "Ryan O'Connor",
    title: "Head of Engineering @ScaleUp",
    quote: "The best development partner we've had. Clean code, modern architecture, and stunning design. They set the bar incredibly high.",
    avatar: "https://i.pravatar.cc/150?img=16",
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
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-900">Testimonials</span>
          </div>
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
                className="flex-shrink-0 w-[380px] mx-2 rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -8,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                  gsap.to(e.currentTarget, {
                    background: "rgba(255, 255, 255, 0.85)",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 12px 40px 0 rgba(0, 0, 0, 0.15)",
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
                  gsap.to(e.currentTarget, {
                    background: "rgba(255, 255, 255, 0.7)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                
                <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
