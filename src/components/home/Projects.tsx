"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

interface ProjectItem {
  id: number;
  category: string;
  title: string;
  image: string;
  link: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    category: "Residential",
    title: "Modern Family Villa",
    image: "/images/project-1.jpg",
    link: "/projects/modern-family-villa",
  },
  {
    id: 2,
    category: "Renovation",
    title: "Building Restoration",
    image: "/images/project-2.jpg",
    link: "/projects/building-restoration",
  },
  {
    id: 3,
    category: "Commercial",
    title: "Metro Business Center",
    image: "/images/project-3.jpg",
    link: "/projects/metro-business-center",
  },
  {
    id: 4,
    category: "Infrastructure",
    title: "City Highway Expansion",
    image: "/images/project-4.jpg",
    link: "/projects/city-highway-expansion",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const countRating = useCountUp(4.9, 2000, isVisible, 1);
  const countReviews = useCountUp(3000, 2200, isVisible);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 lg:py-28 bg-[#12223B] text-white dark-section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <div className="section-sub-title text-white">Our Projects</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-[-0.03em] leading-[1.12]">
              Creating landmark projects with superior quality
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="text-gray-300 text-base leading-relaxed">
              Our team of skilled professionals brings experience, precision,
              and dedication to every project we undertake, ensuring quality
              results and client satisfaction.
            </p>
            <div>
              <Link href="/projects" className="readmore-btn text-white">
                View All Projects
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-[#1c3254]/60 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="image-anime relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-end">
                <p className="text-xs uppercase tracking-widest text-[#FFDB5A] font-semibold mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#FFDB5A] transition-colors">
                  <Link href={project.link}>{project.title}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Banner with Review Stars */}
        <div className="mt-14 p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center -space-x-2">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#12223B] relative">
                <Image
                  src="/images/author-1.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#FFDB5A] flex items-center justify-center p-2.5 border-2 border-[#12223B]">
                <Image
                  src="/images/icon-phone-primary.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white text-sm sm:text-base">
              Let&apos;s connect and start building your project today.{" "}
              <Link
                href="#contact"
                className="text-[#FFDB5A] font-bold underline underline-offset-4 hover:text-white transition-colors"
              >
                Get Free Quote
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-xl font-extrabold text-[#FFDB5A] min-w-[32px]">
              {countRating.toFixed(1)}
            </span>
            <div className="flex items-center text-[#FFDB5A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#FFDB5A]" />
              ))}
            </div>
            <span className="text-xs text-gray-300 font-medium border-l border-white/20 pl-3">
              Over {countReviews.toLocaleString()}+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
