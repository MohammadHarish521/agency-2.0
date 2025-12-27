"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { projectsData, Project } from "@/data/projects";
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="group flex-shrink-0 w-[600px] mx-4 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-row cursor-pointer h-[400px]"
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
      {/* Image Area - 70% */}
      <div className="w-[70%] h-full relative overflow-hidden bg-gray-50">
        <img
          src={project.bgimage}
          alt={project.Name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Area - 30% */}
      <div className="relative z-10 w-[30%] bg-white px-6 py-8 flex flex-col border-l border-gray-50">
        {/* Category Badge */}
        <div className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider border mb-4 ${
          project.category === "uiux" 
            ? "bg-gray-50 text-gray-600 border-gray-100"
            : project.category === "fullstack"
            ? "bg-blue-50 text-blue-600 border-blue-100"
            : project.category === "freelance"
            ? "bg-green-50 text-green-600 border-green-100"
            : "bg-gray-50 text-gray-600 border-gray-100"
        }`}>
          {project.category === "uiux" ? "UI/UX" : 
           project.category === "fullstack" ? "Full-Stack" :
           project.category === "freelance" ? "Freelance" : "General"}
        </div>

        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
          {project.Name}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-1 overflow-hidden line-clamp-5">
          {project.Description}
        </p>

        {project.Technologies && project.Technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.Technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
            {project.Technologies.length > 3 && (
              <span className="text-xs font-medium text-gray-500">
                +{project.Technologies.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-4 text-sm font-medium">
          <Link
            href={project.LinkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <HiArrowUpRight className="w-4 h-4" />
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Include all projects
  const allProjects = projectsData;

  // Duplicate for seamless infinite scroll
  const duplicatedProjects = [...allProjects, ...allProjects];

  useEffect(() => {
    let fallbackTimer: NodeJS.Timeout;
    
    const timer = setTimeout(() => {
      if (headerRef.current) {
        gsap.set(headerRef.current, { opacity: 0, y: 30 });
      }

      fallbackTimer = setTimeout(() => {
        if (headerRef.current && gsap.getProperty(headerRef.current, "opacity") === 0) {
          gsap.to(headerRef.current, { opacity: 1, y: 0, duration: 0.5 });
        }
      }, 2000);

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

      if (marqueeRef.current) {
        gsap.from(marqueeRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });
      }

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-sm font-semibold text-gray-900">Our Work</span>
          </div>
          <h2 className="hero-framer-text max-w-3xl mx-auto">
            Our Projects
          </h2>
          <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto">
            A comprehensive showcase of our work including UI/UX designs, full-stack applications, freelance projects, and more.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div ref={marqueeRef} className="relative overflow-hidden no-scrollbar marquee-container">
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="rgb(249, 250, 251)"
            gradientWidth={100}
            pauseOnHover={false}
            className="py-4 overflow-hidden no-scrollbar"
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} index={index} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
