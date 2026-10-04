"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, TextAnime } from "@/components/animations";

interface PageHeaderProps {
  title?: string;
  breadcrumb?: string;
  parentPage?: {
    name: string;
    link: string;
  };
}

export default function PageHeader({
  title = "About us",
  breadcrumb = "About Us",
  parentPage,
}: PageHeaderProps) {
  return (
    <div className="relative pt-44 pb-20 sm:pt-48 sm:pb-24 lg:pt-56 lg:pb-28 bg-[#12223B] overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/page-header-bg.jpg"
          alt="Page Header"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18, 34, 59, 0.92) 0%, rgba(18, 34, 59, 0.82) 50%, rgba(18, 34, 59, 0.6) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <TextAnime
            as="h1"
            className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-3 sm:mb-4"
            delay={0.1}
          >
            {title}
          </TextAnime>

          <FadeInUp delay={0.25} direction="up">
            <nav className="flex items-center gap-2 text-[15px] sm:text-[16px]">
              <Link
                href="/"
                className="text-white hover:text-[#FFDB5A] transition-colors font-medium"
              >
                Home
              </Link>
              <span className="text-white/60">/</span>
              {parentPage && (
                <>
                  <Link
                    href={parentPage.link}
                    className="text-white hover:text-[#FFDB5A] transition-colors font-medium"
                  >
                    {parentPage.name}
                  </Link>
                  <span className="text-white/60">/</span>
                </>
              )}
              <span className="text-white font-medium">{breadcrumb}</span>
            </nav>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
