"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projectData";
import { FadeInUp } from "@/components/animations";

export default function PageProjects() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* 8 Projects in a 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <FadeInUp
              key={project.id}
              delay={(index % 4) * 0.12}
              direction="up"
              distance={30}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative rounded-[6px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full"
              >
                {/* Image Container with image-anime diagonal shine sweep */}
                <div className="image-anime relative w-full aspect-[3/3.8] overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-[6px] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Bottom Overlay Info Banner */}
                  <div className="absolute inset-x-4 bottom-4 z-20 pointer-events-none">
                    {/* Yellow Category Tag */}
                    <div className="inline-block bg-[#FFDB5A] text-[#12223B] text-[12px] sm:text-[13px] font-semibold px-3 py-1 rounded-[2px] mb-1.5 shadow-sm">
                      {project.category}
                    </div>

                    {/* Dark Navy Title Box */}
                    <div className="bg-[#12223B] text-white text-[15px] sm:text-[16px] font-semibold px-4 py-2.5 rounded-[2px] shadow-md transition-colors group-hover:bg-[#FFDB5A] group-hover:text-[#12223B]">
                      {project.title}
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
