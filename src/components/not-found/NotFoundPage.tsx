"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeInUp, TextAnime } from "@/components/animations";

export default function NotFoundPage() {
  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full text-center">
        {/* 404 Illustration */}
        <FadeInUp delay={0.1} direction="zoom" distance={20}>
          <div className="relative w-full max-w-[580px] mx-auto aspect-[1.3/1] mb-8">
            <Image
              src="/images/404-error-img.png"
              alt="404 Page Not Found"
              fill
              priority
              className="object-contain"
            />
          </div>
        </FadeInUp>

        {/* Heading */}
        <TextAnime
          as="h1"
          className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#12223B] tracking-tight mb-3"
        >
          Oops! Page Not Found
        </TextAnime>

        {/* Subtitle */}
        <FadeInUp delay={0.2} direction="up" distance={20}>
          <p className="text-[#526071] text-base sm:text-lg mb-8 max-w-md mx-auto">
            The page you are looking for does not exist.
          </p>
        </FadeInUp>

        {/* Action Button */}
        <FadeInUp delay={0.3} direction="up" distance={20}>
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFDB5A] text-[#12223B] hover:bg-[#12223B] hover:text-white font-semibold text-[15px] sm:text-[16px] rounded-[4px] transition-all duration-300 shadow-sm group"
            >
              <span>Back To Homepage</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
