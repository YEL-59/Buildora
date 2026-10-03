"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Plus, ArrowUpRight } from "lucide-react";
import VideoModal from "@/components/layout/VideoModal";
import { useCountUp } from "@/hooks/useCountUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-bg-image.jpg",
    alt: "Modern Construction Site",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    alt: "Architects and Engineers Reviewing Blueprints",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    alt: "Skyscraper Construction at Golden Hour",
  },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const count15 = useCountUp(15, 1800, isVisible);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen pt-36 pb-20 md:pt-48 md:pb-24 bg-[#12223B] flex flex-col justify-between overflow-hidden"
    >
      {/* 3-Image Smooth Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={slide.id === 1}
                  className="object-cover object-center scale-105 transition-transform duration-[6000ms] ease-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Triple Gradient Overlay for contrast and readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 34, 59, 0.00) 75%, rgba(18, 34, 59, 0.35) 88%, rgba(18, 34, 59, 0.70) 100%), linear-gradient(270deg, rgba(18, 34, 59, 0.10) 25%, rgba(18, 34, 59, 0.65) 55%, #12223B 100%), linear-gradient(0deg, rgba(18, 34, 59, 0.25) 0%, rgba(18, 34, 59, 0.25) 100%)",
        }}
      />

      {/* Top Spacer */}
      <div className="relative z-10" />

      {/* Main Hero Content */}
      <div className="container w-full mx-auto px-4 sm:px-6 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-9 xl:col-span-8 space-y-7">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm font-medium mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FFDB5A] animate-pulse" />
                Built With Trust
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl xl:text-[76px] font-semibold text-white tracking-[-0.03em] leading-[1.08] mb-6 drop-shadow-sm">
                Building excellence <br />
                since day one
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                Our experienced team transforms ideas into exceptional
                residential and commercial developments using premium materials,
                innovative engineering.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {/* Get Started Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FFDB5A] hover:bg-white text-[#12223B] font-semibold text-base px-7 py-4 rounded-lg transition-all duration-300 shadow-md group"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Video Play Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-3.5 text-white hover:text-[#FFDB5A] transition-colors focus:outline-none cursor-pointer"
              >
                <span className="w-12 h-12 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </span>
                <span className="text-base font-semibold tracking-wide">
                  Explore Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Footer */}
      <div className="container w-full mx-auto px-4 sm:px-6 relative z-10 pt-10 pb-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Satisfied Clients Box */}
          <div className="flex items-center gap-4 bg-[#12223B]/70 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/15 shadow-xl">
            <div className="flex items-center -space-x-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#12223B] shadow relative">
                <Image
                  src="/images/author-1.jpg"
                  alt="Client 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#12223B] shadow relative">
                <Image
                  src="/images/author-2.jpg"
                  alt="Client 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#12223B] shadow relative">
                <Image
                  src="/images/author-3.jpg"
                  alt="Client 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#12223B] shadow relative">
                <Image
                  src="/images/author-4.jpg"
                  alt="Client 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFDB5A] text-[#12223B] border-2 border-[#12223B] flex items-center justify-center font-bold text-xs shadow">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            <div>
              <p className="text-white font-medium text-sm sm:text-base">
                <span className="font-semibold">{count15}+</span> Years of
                Trusted Construction Excellence
              </p>
            </div>
          </div>

          {/* Bottom-Right Corner: Quality Construction Rotating Circle Badge */}
          <div className="hidden md:flex items-center justify-center self-start md:self-end">
            <div className="relative w-24 h-24 lg:w-28 lg:h-28 animate-spin-slow">
              <Image
                src="/images/quality-construction-circle.svg"
                alt="Quality Construction Circle Badge"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
