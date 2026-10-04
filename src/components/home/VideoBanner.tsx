"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import VideoModal from "@/components/layout/VideoModal";
import { FadeInUp, TextAnime } from "@/components/animations";

export default function VideoBanner() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="video"
      className="relative py-20 lg:py-28 bg-[#12223B] overflow-hidden"
    >
      {/* Background Video / Crisp Building Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://demo.awaikenthemes.com/assets/videos/builtex-intro-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Exact Gradient Overlay from custom.css: Dark on left, crystal clear on right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #12223B 0.01%, rgba(18, 34, 59, 0.75) 44.76%, rgba(18, 34, 59, 0.00) 65%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Intro Video Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            <div>
              {/* Badge */}
              <FadeInUp delay={0.1} direction="down">
                <div className="section-sub-title text-white mb-4">
                  Let&apos;s Build Together
                </div>
              </FadeInUp>

              {/* Title */}
              <TextAnime
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-[-0.03em] leading-[1.12] mb-4"
                delay={0.2}
              >
                Ready to build your next <br className="hidden sm:inline" />
                dream project?
              </TextAnime>

              {/* Description */}
              <FadeInUp delay={0.35}>
                <p className="text-gray-200 text-[15px] sm:text-[16px] leading-[1.6] max-w-xl">
                  From concept to completion, our expert team delivers
                  high-quality construction solutions tailored to your vision.
                </p>
              </FadeInUp>
            </div>

            {/* Actions & Contact List Row */}
            <FadeInUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
                {/* Request Consultation Button */}
                <Link href="#contact" className="btn-builtex-highlighted">
                  Request Consultation
                </Link>

                {/* Phone Contact Badge */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-12 h-12 rounded-full bg-[#FFDB5A] group-hover:bg-white flex items-center justify-center p-3 text-[#12223B] transition-colors duration-300 flex-shrink-0 shadow-md">
                    <Image
                      src="/images/icon-phone-primary.svg"
                      alt="Phone"
                      width={22}
                      height={22}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-tight mb-1">
                      Call us 24/7 on
                    </p>
                    <h3>
                      <a
                        href="tel:+1213465789"
                        className="text-lg sm:text-[20px] font-semibold text-white hover:text-[#FFDB5A] transition-colors leading-tight"
                      >
                        +1(213) 465 789
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Centered Sleek Dark Video Play Button */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-center pt-6 lg:pt-0">
            <FadeInUp direction="zoom" delay={0.3} duration={0.8}>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-[#12223B] hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center transition-all duration-300 shadow-2xl focus:outline-none group border border-white/20 hover:border-transparent hover:scale-110"
                aria-label="Play Intro Video"
              >
                <Play className="w-6 h-6 fill-current ml-0.5 transition-transform group-hover:scale-110" />
              </button>
            </FadeInUp>
          </div>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
