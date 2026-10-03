"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useCountUp } from "@/hooks/useCountUp";

interface TestimonialItem {
  id: number;
  name: string;
  designation: string;
  comment: string;
  image: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    designation: "Office Manager",
    comment:
      "“Exceptional quality construction delivered on time with complete professionalism.”",
    image: "/images/testimonial-image-1.jpg",
  },
  {
    id: 2,
    name: "Daniel Carter",
    designation: "Residential Client",
    comment:
      "“Exceptional quality construction delivered on time with complete professionalism.”",
    image: "/images/testimonial-image-2.jpg",
  },
  {
    id: 3,
    name: "Amanda Thompson",
    designation: "Estate Investor",
    comment:
      "“Exceptional quality construction delivered on time with complete professionalism.”",
    image: "/images/testimonial-image-3.jpg",
  },
  {
    id: 4,
    name: "David Miller",
    designation: "Property Developer",
    comment:
      "“Exceptional quality construction delivered on time with complete professionalism.”",
    image: "/images/testimonial-image-4.jpg",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Re-trigger counter animation whenever section is in view
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
  const countReviews = useCountUp(2800, 2200, isVisible);
  const countProjects = useCountUp(120, 2000, isVisible);
  const countSafety = useCountUp(100, 2200, isVisible);
  const countFooterRating = useCountUp(4.9, 2000, isVisible, 1);
  const countFooterReviews = useCountUp(3000, 2200, isVisible);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 lg:py-28 bg-[#EFEFEF] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-sub-title mb-4">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12] mb-4">
            What our clients say about us
          </h2>
          <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6]">
            Real experiences from clients who trusted us to deliver quality
            construction with precision, reliability, and professionalism.
          </p>
        </div>

        {/* Main Content: Left CTA Card + Right Swiper Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Flat White CTA Card */}
          <div className="lg:col-span-4 bg-white rounded-[8px] p-7 sm:p-8 flex flex-col justify-between shadow-none border-0 min-h-[500px]">
            <div>
              {/* Overlapping Avatar Stack */}
              <div className="flex items-center -space-x-2.5 mb-7">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image
                    src="/images/author-1.jpg"
                    alt="Client 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image
                    src="/images/author-2.jpg"
                    alt="Client 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image
                    src="/images/author-3.jpg"
                    alt="Client 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
                  <Image
                    src="/images/author-4.jpg"
                    alt="Client 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Rating and Reviews Count */}
              <div className="flex items-center gap-4 mb-7">
                <div className="flex items-baseline">
                  <span className="text-4xl sm:text-[44px] font-bold text-[#12223B] leading-none">
                    {countRating.toFixed(1)}
                  </span>
                  <span className="text-sm text-gray-500 font-normal ml-0.5">
                    /5
                  </span>
                </div>
                <p className="text-[14px] text-[#28374D] leading-tight max-w-[170px]">
                  Based on{" "}
                  <strong className="font-semibold text-[#12223B]">
                    {countReviews.toLocaleString()}+
                  </strong>{" "}
                  verified client reviews
                </p>
              </div>

              {/* Checklist with Yellow Circle Check SVG */}
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-[14px] text-[#28374D]">
                  <svg
                    className="w-4 h-4 text-[#FFDB5A] flex-shrink-0"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>{countProjects}+ successful projects delivered</span>
                </li>
                <li className="flex items-center gap-2.5 text-[14px] text-[#28374D]">
                  <svg
                    className="w-4 h-4 text-[#FFDB5A] flex-shrink-0"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>{countSafety}% safe & quality-focus execution</span>
                </li>
              </ul>
            </div>

            {/* Bottom CTA Button & Text */}
            <div className="pt-6 mt-6 border-t border-[#12223B]/10">
              <p className="text-[14px] text-[#28374D] mb-5 leading-normal">
                Ready to start your project? Let&apos;s build something great
                together.
              </p>
              <Link
                href="#contact"
                className="btn-builtex w-full text-center justify-center"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>

          {/* Right Swiper Carousel Slider */}
          <div className="lg:col-span-8 relative flex flex-col justify-between overflow-hidden">
            <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-[8px]">
              <Swiper
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                speed={1200}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                className="w-full h-full"
              >
                {testimonialsData.map((item) => (
                  <SwiperSlide key={item.id} className="h-full">
                    <div className="relative w-full h-[520px] rounded-[8px] overflow-hidden group select-none cursor-grab active:cursor-grabbing">
                      {/* Full Photo Background */}
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay at Bottom */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(18, 34, 59, 0.00) 45%, rgba(18, 34, 59, 0.5) 65%, rgba(18, 34, 59, 0.95) 100%)",
                        }}
                      />

                      {/* Bottom Testimonial Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-10 text-white">
                        <p className="text-[16px] sm:text-[17px] font-semibold leading-snug mb-3">
                          {item.comment}
                        </p>
                        <h3 className="text-[14px] sm:text-[15px] text-white/90 font-normal">
                          - {item.name}, {item.designation}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#FFDB5A] text-[#12223B] flex items-center justify-center transition-colors shadow-sm focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#FFDB5A] text-[#12223B] flex items-center justify-center transition-colors shadow-sm focus:outline-none cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Footer Banner (Centered Review Badge) */}
        <div className="mt-16 text-center space-y-2">
          {/* Top Row: Avatar + Phone icon + Text + Link */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 text-[#28374D] text-[15px]">
            <div className="flex items-center -space-x-1.5">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white shadow-sm relative">
                <Image
                  src="/images/author-1.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#FFDB5A] flex items-center justify-center p-1.5 border border-white shadow-sm">
                <Image
                  src="/images/icon-phone-primary.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </div>
            </div>
            <span>
              Let&apos;s connect and start building your project today.{" "}
              <Link
                href="#contact"
                className="font-semibold text-[#12223B] underline underline-offset-4 hover:text-[#FFDB5A] transition-colors"
              >
                View Our All Reviews.
              </Link>
            </span>
          </div>

          {/* Bottom Row: 4.9 ★★★★★ Over 3000 Reviews */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="font-semibold text-[#12223B]">
              {countFooterRating.toFixed(1)}
            </span>
            <div className="flex items-center gap-0.5 text-[#FFDB5A]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#12223B]">
              Over {countFooterReviews.toLocaleString()} Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
