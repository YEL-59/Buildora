"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import VideoModal from "@/components/layout/VideoModal";
import { useCountUp } from "@/hooks/useCountUp";

export default function AboutUs() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger countdown/countup every single time section enters viewport
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

  const count25 = useCountUp(25, 2000, isVisible);
  const count98 = useCountUp(98, 2200, isVisible);
  const count598 = useCountUp(598, 2400, isVisible);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-28 bg-[#EFEFEF]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Dual Image Composition */}
          <div className="lg:col-span-6 relative pr-0 lg:pr-10">
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
              {/* Main Large Image (Box 1) */}
              <div className="relative w-full aspect-[1/1.16] rounded-[6px] overflow-hidden bg-gray-200">
                <Image
                  src="/images/about-us-image-1.jpg"
                  alt="About Builtex Construction"
                  fill
                  priority
                  className="object-cover rounded-[6px]"
                />
                {/* Dark Gradient Overlay at the bottom for CTA content */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(18, 34, 59, 0.00) 73.72%, rgba(18, 34, 59, 0.90) 100%)",
                  }}
                />

                {/* 25+ Years CTA Content inside bottom of Box 1 */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-4 text-white">
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image
                      src="/images/icon-about-us-cta-box.svg"
                      alt="Award Badge Icon"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-[46px] font-semibold text-white tracking-tight leading-none min-w-[75px]">
                      {count25}+
                    </span>
                    <p className="text-xs sm:text-[13px] text-white font-normal leading-tight max-w-[210px]">
                      Years of Excellence in Construction and Building Solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Overlapping Image with Video Play Button (Box 2) */}
              <div className="absolute top-10 -right-4 sm:-right-8 w-[46%] max-w-[230px] aspect-[1/1.17] rounded-[12px] border-[6px] border-[#EFEFEF] overflow-hidden z-20 bg-gray-300">
                <Image
                  src="/images/about-us-image-2.jpg"
                  alt="Planning Blueprint"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#12223B]/20" />

                {/* Centered Dark Play Button */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#12223B] hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-all duration-300 focus:outline-none shadow-md group"
                  aria-label="Play Video"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: About Us Content with Slimmer / Elegant Semi-bold Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Badge */}
              <div className="section-sub-title mb-4">About Us</div>

              {/* Headline - Slim & Semi-bold matching reference site */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12] mb-4">
                Building reliable structures with quality and precision
              </h2>

              {/* Paragraph */}
              <p className="text-[15px] sm:text-[16px] text-[#28374D] font-normal leading-[1.6] mb-5">
                Offering comprehensive construction solutions tailored to client
                needs, driven by precision, transparency & a passion for
                delivering exceptional & lasting results
              </p>

              {/* Checklist with Yellow FontAwesome Style Circle Checks */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[15px] sm:text-[16px] text-[#28374D] font-normal">
                  <svg
                    className="w-4.5 h-4.5 text-[#FFDB5A] flex-shrink-0"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>Building quality spaces with trust and precision.</span>
                </li>
                <li className="flex items-center gap-3 text-[15px] sm:text-[16px] text-[#28374D] font-normal">
                  <svg
                    className="w-4.5 h-4.5 text-[#FFDB5A] flex-shrink-0"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>
                    Delivering high quality residential and commercial projects.
                  </span>
                </li>
              </ul>
            </div>

            {/* Stat Counter Columns with Live Scroll-Triggered Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-2">
              {/* Stat 1: 98% */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image
                      src="/images/icon-about-us-item-1.svg"
                      alt="Quality Projects Icon"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-[46px] font-semibold text-[#12223B] tracking-tight leading-none">
                      {count98}
                    </span>
                    <span className="text-4xl sm:text-[46px] font-semibold text-[#12223B] leading-none">
                      %
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#28374D] font-normal leading-snug">
                  Quality Projects Delivered with Precision
                </p>
              </div>

              {/* Stat 2: 598+ */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 flex-shrink-0">
                    <Image
                      src="/images/icon-about-us-item-2.svg"
                      alt="Client Satisfaction Icon"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-[46px] font-semibold text-[#12223B] tracking-tight leading-none">
                      {count598}
                    </span>
                    <span className="text-4xl sm:text-[46px] font-semibold text-[#12223B] leading-none">
                      +
                    </span>
                  </div>
                </div>
                <p className="text-[14px] text-[#28374D] font-normal leading-snug">
                  Delivering Complete Client Satisfaction
                </p>
              </div>
            </div>

            {/* Footer Row: Button & Author Box */}
            <div className="pt-8 mt-6 border-t border-[#12223B]/10 flex flex-wrap items-center gap-8">
              <Link href="/about" className="btn-default">
                More About Us
              </Link>

              {/* Author Box */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/author-1.jpg"
                    alt="Michael Anderson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-[#12223B] leading-snug">
                    Michael Anderson
                  </h4>
                  <p className="text-[13px] text-[#28374D] font-normal">
                    Co-Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
