"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeInUp, TextAnime } from "@/components/animations";
import ArchitecturalShapesBg from "@/components/common/ArchitecturalShapesBg";

export default function WhyChooseUs() {
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

  const count500 = useCountUp(500, 2000, isVisible);
  const count350 = useCountUp(350, 2200, isVisible);
  const count100 = useCountUp(100, 2400, isVisible);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-20 lg:pt-24 lg:pb-0 bg-[#EFEFEF] relative overflow-hidden"
    >
      {/* Background Building & Tower Crane Architectural Shapes */}
      <ArchitecturalShapesBg variant="whyChooseUs" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-6">
          {/* Left / Main Content: Heading & 3 Flat White Cards */}
          <div className="w-full lg:w-[73%] xl:w-[74%] space-y-10 pb-16">
            {/* Section Title */}
            <div className="max-w-xl">
              <FadeInUp delay={0.1} direction="down">
                <div className="section-sub-title">Why Choose Us</div>
              </FadeInUp>
              <TextAnime
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12]"
                delay={0.2}
              >
                Excellence that defines our <br className="hidden sm:inline" />
                construction services
              </TextAnime>
            </div>

            {/* 3 Flat White Cards (No Shadow, Pixel-Perfect Spacing & Typography) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <FadeInUp delay={0.1} duration={0.7} className="h-full">
                <div className="bg-white rounded-lg p-7 sm:p-8 flex flex-col justify-between shadow-none border-0 h-full">
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/images/icon-why-choose-us-item-1.svg"
                        alt="Innovation Solutions"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#12223B] mb-2.5 leading-snug">
                      Innovation Solutions
                    </h3>
                    <p className="text-[15px] text-[#28374D] leading-[1.6]">
                      Simple action make difference. It starts & ends with each
                      employee striving to work
                    </p>
                  </div>
                  <div className="pt-6 mt-7 border-t border-[#12223B]/10">
                    <h4 className="text-[30px] font-semibold text-[#12223B] tracking-tight leading-none mb-1.5">
                      {count500}+
                    </h4>
                    <p className="text-[14px] font-normal text-[#28374D]">
                      Project Completed
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Card 2 */}
              <FadeInUp delay={0.22} duration={0.7} className="h-full">
                <div className="bg-white rounded-lg p-7 sm:p-8 flex flex-col justify-between shadow-none border-0 h-full">
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/images/icon-why-choose-us-item-2.svg"
                        alt="Quality Workmanship"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#12223B] mb-2.5 leading-snug">
                      Quality Workmanship
                    </h3>
                    <p className="text-[15px] text-[#28374D] leading-[1.6]">
                      Simple action make difference. It starts & ends with each
                      employee striving to work
                    </p>
                  </div>
                  <div className="pt-6 mt-7 border-t border-[#12223B]/10">
                    <h4 className="text-[30px] font-semibold text-[#12223B] tracking-tight leading-none mb-1.5">
                      {count350}+
                    </h4>
                    <p className="text-[14px] font-normal text-[#28374D]">
                      Satisfied Clients
                    </p>
                  </div>
                </div>
              </FadeInUp>

              {/* Card 3 */}
              <FadeInUp delay={0.34} duration={0.7} className="h-full">
                <div className="bg-white rounded-lg p-7 sm:p-8 flex flex-col justify-between shadow-none border-0 h-full">
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/images/icon-why-choose-us-item-3.svg"
                        alt="Expertise & Experience"
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#12223B] mb-2.5 leading-snug">
                      Expertise & Experience
                    </h3>
                    <p className="text-[15px] text-[#28374D] leading-[1.6]">
                      Simple action make difference. It starts & ends with each
                      employee striving to work
                    </p>
                  </div>
                  <div className="pt-6 mt-7 border-t border-[#12223B]/10">
                    <h4 className="text-[30px] font-semibold text-[#12223B] tracking-tight leading-none mb-1.5">
                      {count100}%
                    </h4>
                    <p className="text-[14px] font-normal text-[#28374D]">
                      Safety Commitment
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Right Side: Engineer Standing Illustration */}
          <div className="w-full lg:w-[27%] xl:w-[26%] flex justify-center lg:justify-end self-end">
            <FadeInUp direction="up" delay={0.25} duration={0.9} distance={40} className="w-full max-w-[340px] lg:max-w-none">
              <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px]">
                <Image
                  src="/images/why-choose-us-image.png"
                  alt="Why Choose Us Engineer"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
