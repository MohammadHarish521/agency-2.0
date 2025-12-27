"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How fast will I see results?",
    answer:
      "We typically deliver the initial MVP within 2 weeks. You'll see daily progress updates and have access to our staging environment from day one.",
  },
  {
    question: "Why shouldn't I just hire freelancers or build it myself?",
    answer:
      "Freelancers can be unreliable and managing them takes time. Building it yourself distracts from business growth. We provide a managed, senior team that delivers guaranteed results.",
  },
  {
    question: "What's included in the MVP package?",
    answer:
      "Everything you need to launch: Full-stack development, database setup, authentication, payment integration, basic analytics, and deployment to a production environment.",
  },
  {
    question: "What happens after the MVP is done?",
    answer:
      "We offer a seamless transition to our Growth Retainer for ongoing development, or we can hand off the code to your in-house team with full documentation.",
  },
  {
    question: "What if I want the full product, not just an MVP?",
    answer:
      "We can scale up! Our architecture is designed to grow. We'll simply extend the roadmap and continue building features based on your prioritized backlog.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<HTMLDivElement[]>([]);

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

    // Stagger FAQ items
    gsap.from(faqItemsRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: faqListRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id="faq" className="py-24 md:py-32 scroll-mt-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <div className="bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto mb-6">
            Got Questions? We&apos;ve
            <br className="hidden md:block" /> Got Answers
          </h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Simple explanations for your most important questions
          </p>
        </div>

        {/* FAQ List */}
        <div ref={faqListRef} className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) faqItemsRef.current[index] = el;
              }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
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
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <span className="text-lg md:text-xl font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                    openIndex === index
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-900 group-hover:bg-gray-200"
                  }`}
                >
                  {openIndex === index ? (
                    <HiMinus className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <HiPlus className="w-5 h-5 md:w-6 md:h-6" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-900 font-medium mb-6 text-lg">
            Still not sure?
          </p>
          <a
            href="https://calendly.com/xharish52/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-lg"
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
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
