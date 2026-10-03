"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export default function CoreValues() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const countYears = useCountUp(20, 2000, isVisible);
  const countProjects = useCountUp(1.0, 2000, isVisible, 1);
  const countEngineers = useCountUp(367, 2200, isVisible);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="section-sub-title mb-4">Core Values</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12] mb-5">
              Our commitment to lasting excellence
            </h2>
            <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6] mb-8">
              Our core values are the foundation of everything we build. They guide our decisions, strengthen our relationships, and inspire us to deliver exceptional construction services with integrity, quality, safety,
            </p>

            {/* Divider Line */}
            <div className="border-t border-[#12223B]/10 pt-8 mb-10">
              {/* 3 Counters Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {/* Counter 1 */}
                <div className="relative pr-2 sm:pr-4">
                  <div className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#12223B] tracking-tight leading-none mb-2">
                    {countYears}+
                  </div>
                  <p className="text-xs sm:text-sm text-[#28374D] leading-tight">
                    Years of Construction Experience
                  </p>
                  <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-[#12223B]/10 hidden sm:block" />
                </div>

                {/* Counter 2 */}
                <div className="relative px-2 sm:px-4">
                  <div className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#12223B] tracking-tight leading-none mb-2">
                    {countProjects.toFixed(1)}k+
                  </div>
                  <p className="text-xs sm:text-sm text-[#28374D] leading-tight">
                    Projects Successfully Completed
                  </p>
                  <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-[#12223B]/10 hidden sm:block" />
                </div>

                {/* Counter 3 */}
                <div className="pl-2 sm:pl-4">
                  <div className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#12223B] tracking-tight leading-none mb-2">
                    {countEngineers}+
                  </div>
                  <p className="text-xs sm:text-sm text-[#28374D] leading-tight">
                    Skilled Engineers & Professionals
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="btn-default"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[6px] overflow-hidden aspect-[4/3] sm:aspect-[1/0.95]">
              <Image
                src="/images/core-value-image.jpg"
                alt="Engineers reviewing construction blueprints"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
