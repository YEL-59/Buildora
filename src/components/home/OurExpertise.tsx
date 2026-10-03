"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export default function OurExpertise() {
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

  const countExp = useCountUp(30, 2000, isVisible);
  const countProj = useCountUp(1.5, 2000, isVisible, 1);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Tall Card (Box 1) */}
          <div className="lg:col-span-5 relative rounded-[6px] overflow-hidden min-h-[500px] lg:min-h-[580px] p-8 sm:p-10 flex flex-col justify-end group">
            {/* Background Image */}
            <Image
              src="/images/expertise-item-image-1.jpg"
              alt="Discover & Consult"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(211deg, rgba(18, 34, 59, 0.00) 25%, rgba(18, 34, 59, 0.9) 100%)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-white">
              <div className="w-12 h-12 mb-6 flex items-center justify-start">
                <Image
                  src="/images/icon-expertise-item-1.svg"
                  alt="Discover & Consult"
                  width={48}
                  height={48}
                  className="w-auto h-auto max-h-12 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl sm:text-[26px] font-semibold text-white mb-2.5">
                Discover &amp; Consult
              </h3>
              <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-8">
                Every project is completed with precision, attention to detail, and the highest construction standards.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#FFDB5A] transition-colors"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Box 2 + Split Row) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Card (Box 2) */}
            <div className="relative rounded-[6px] overflow-hidden min-h-[280px] sm:min-h-[300px] p-8 sm:p-10 flex flex-col justify-end group">
              <Image
                src="/images/expertise-item-image-2.jpg"
                alt="Experienced Professionals"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(211deg, rgba(18, 34, 59, 0.00) 20%, rgba(18, 34, 59, 0.9) 100%)",
                }}
              />
              <div className="relative z-10 text-white">
                <div className="w-12 h-12 mb-4 flex items-center justify-start">
                  <Image
                    src="/images/icon-expertise-item-2.svg"
                    alt="Experienced Professionals"
                    width={48}
                    height={48}
                    className="w-auto h-auto max-h-12 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl sm:text-[24px] font-semibold text-white mb-2">
                  Experienced Professionals
                </h3>
                <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed max-w-xl">
                  Our skilled architects, engineers, and construction specialists bring years of industry expertise to every build.
                </p>
              </div>
            </div>

            {/* Bottom Row: Info Item (White) + Counter Box (Yellow) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 flex-1">
              {/* White Info Item */}
              <div className="sm:col-span-7 bg-white rounded-[6px] p-8 sm:p-9 flex flex-col justify-between">
                <div className="w-12 h-12 mb-6 flex items-center justify-start">
                  <Image
                    src="/images/icon-expertise-item-3.svg"
                    alt="Delivery"
                    width={48}
                    height={48}
                    className="w-auto h-auto max-h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#12223B] mb-2">
                    Fast, Reliable Delivery
                  </h3>
                  <p className="text-[14px] text-[#28374D] leading-relaxed">
                    Every project is completed with precision, attention to detail, and the highest construction standards.
                  </p>
                </div>
              </div>

              {/* Yellow Counter Box */}
              <div className="sm:col-span-5 bg-[#FFDB5A] rounded-[6px] p-6 sm:p-8 flex flex-col justify-center text-center">
                <div className="pb-5 mb-5 border-b border-[#12223B]/15">
                  <div className="text-3xl sm:text-[38px] font-semibold text-[#12223B] leading-none mb-1.5">
                    {countExp}+
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#12223B]/80 font-medium">
                    Years of Industry Experience
                  </p>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-semibold text-[#12223B] leading-none mb-1.5">
                    {countProj.toFixed(1)}k+
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#12223B]/80 font-medium">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
