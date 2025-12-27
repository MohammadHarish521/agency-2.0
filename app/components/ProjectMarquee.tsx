"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { projectsData } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Get only UI/UX project images
  const uiuxProjects = projectsData.filter((project) => project.category === "uiux");
  
  const projectImages = uiuxProjects.map((project) => ({
    id: project.id,
    image: project.bgimage,
    name: project.Name,
  }));

  // Duplicate the array for seamless loop
  const duplicatedImages = [...projectImages, ...projectImages];

  useEffect(() => {
    if (marqueeRef.current) {
      gsap.from(marqueeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section
      id="work"
      className="py-16 md:py-24 overflow-hidden bg-gray-50/50"
    >
      <div ref={marqueeRef} className="relative">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="rgb(249, 250, 251)"
          gradientWidth={100}
          pauseOnHover={false}
          className="py-8"
        >
          {duplicatedImages.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="mx-4 group cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  y: -8,
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
              <div className="relative w-96 h-64 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm group-hover:shadow-xl transition-shadow duration-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

