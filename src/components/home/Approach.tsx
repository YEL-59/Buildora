"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Approach() {
  const approachItems = [
    {
      id: 1,
      title: "Our Mission",
      desc: "We begin by understanding your goals, budget, timeline, and project requirements. Our experts conduct site",
      icon: "/images/icon-approach-item-1.svg",
    },
    {
      id: 2,
      title: "Our Vision",
      desc: "We begin by understanding your goals, budget, timeline, and project requirements. Our experts conduct site",
      icon: "/images/icon-approach-item-2.svg",
    },
    {
      id: 3,
      title: "Our Story",
      desc: "We begin by understanding your goals, budget, timeline, and project requirements. Our experts conduct site",
      icon: "/images/icon-approach-item-3.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="section-sub-title mb-4">Our Approach</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12]">
              Building excellence through every step we take
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6]">
              We believe every successful construction project begins with careful planning, open communication, and expert execution.
            </p>
          </div>
        </div>

        {/* 3 Approach Cards (White by default, Smooth Yellow Slide-up on Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {approachItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-[6px] bg-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300"
            >
              {/* Slide-up Yellow Accent Background */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 flex items-center justify-start">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-auto h-auto max-h-12 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 pt-6 border-t border-[#12223B]/10">
                <h3 className="text-xl sm:text-[22px] font-semibold text-[#12223B] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#28374D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Box */}
        <div className="mt-10 rounded-[6px] border border-[#12223B]/10 bg-white/40 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            {/* 4 Avatar Stack */}
            <div className="flex items-center -space-x-2.5 flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                <Image
                  src="/images/author-1.jpg"
                  alt="Team Member 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                <Image
                  src="/images/author-2.jpg"
                  alt="Team Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                <Image
                  src="/images/author-3.jpg"
                  alt="Team Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                <Image
                  src="/images/author-4.jpg"
                  alt="Team Member 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#28374D]">
              Have a construction project in mind? Our experienced team is here to answer your questions,
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-default flex-shrink-0 whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
