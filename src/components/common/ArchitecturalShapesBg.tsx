"use client";

import React from "react";
import Image from "next/image";

interface ArchitecturalShapesBgProps {
  variant?: "faq" | "about" | "whyChooseUs" | "general";
  className?: string;
}

export default function ArchitecturalShapesBg({
  variant = "general",
  className = "",
}: ArchitecturalShapesBgProps) {
  if (variant === "faq") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
      >
        {/* 1. Realistic Heavy Construction Tower Crane (Top-Right / Behind Accordion) */}
        <div className="absolute -right-8 sm:right-0 lg:right-2 -top-6 sm:top-0 w-[540px] sm:w-[680px] lg:w-[820px] h-[440px] sm:h-[540px] lg:h-[620px] opacity-[0.22] sm:opacity-[0.28] hover:opacity-40 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-crane.webp"
            alt="Realistic Construction Tower Crane"
            fill
            sizes="(max-width: 768px) 540px, (max-width: 1200px) 680px, 820px"
            className="object-contain object-right-top"
          />
        </div>

        {/* 2. Realistic Skyscraper Under Active Construction (Bottom-Left / Behind Heading) */}
        <div className="absolute -left-12 sm:-left-6 lg:left-0 -bottom-10 w-[360px] sm:w-[460px] lg:w-[540px] h-[420px] sm:h-[500px] lg:h-[580px] opacity-[0.16] sm:opacity-[0.22] hover:opacity-35 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-building.webp"
            alt="Realistic Skyscraper under Construction"
            fill
            sizes="(max-width: 768px) 360px, (max-width: 1200px) 460px, 540px"
            className="object-contain object-left-bottom"
          />
        </div>

        {/* 3. Architectural CAD Grid & Technical Elevation Details */}
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.12] sm:opacity-[0.15] transition-opacity duration-700"
        >
          <defs>
            <pattern
              id="faqDotGrid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.1" fill="#12223B" opacity="0.3" />
            </pattern>
          </defs>

          {/* Dot Matrix Drafting Grid */}
          <rect width="1440" height="800" fill="url(#faqDotGrid)" />

          {/* CAD Reference Axis Lines & Technical Annotations */}
          <g stroke="#12223B" strokeWidth="1">
            <line x1="120" y1="40" x2="120" y2="760" strokeDasharray="6 8" strokeOpacity="0.35" />
            <line x1="280" y1="40" x2="280" y2="760" strokeDasharray="6 8" strokeOpacity="0.35" />
            <line x1="440" y1="40" x2="440" y2="760" strokeDasharray="6 8" strokeOpacity="0.35" />
            <line x1="60" y1="160" x2="650" y2="160" strokeDasharray="4 6" strokeOpacity="0.3" />
            <line x1="60" y1="380" x2="650" y2="380" strokeDasharray="4 6" strokeOpacity="0.3" />
            <line x1="60" y1="600" x2="650" y2="600" strokeDasharray="4 6" strokeOpacity="0.3" />

            <text x="125" y="70" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">GRID A-01</text>
            <text x="285" y="70" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">GRID B-02</text>
            <text x="65" y="155" fill="#FFDB5A" fontSize="9" fontFamily="monospace" fontWeight="700">ELEV. +168.50m</text>
            <text x="65" y="375" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">ELEV. +112.00m</text>
            <text x="65" y="595" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">ELEV. +56.00m</text>

            {/* Crane Radius Arc */}
            <circle cx="1200" cy="90" r="140" stroke="#FFDB5A" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5" fill="none" />
            <text x="1080" y="75" fill="#FFDB5A" fontSize="9" fontFamily="monospace" fontWeight="bold">CRANE RADIUS: 65.0m</text>
          </g>

          {/* Technical Crosshairs */}
          <g stroke="#FFDB5A" strokeWidth="1" opacity="0.6">
            <line x1="275" y1="380" x2="285" y2="380" />
            <line x1="280" y1="375" x2="280" y2="385" />
            <line x1="435" y1="160" x2="445" y2="160" />
            <line x1="440" y1="155" x2="440" y2="165" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
      >
        {/* Realistic Skyscraper on the Right Background */}
        <div className="absolute -right-10 lg:right-6 bottom-0 w-[420px] sm:w-[500px] lg:w-[580px] h-[480px] sm:h-[560px] lg:h-[640px] opacity-[0.16] sm:opacity-[0.20] hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-building.webp"
            alt="Realistic Construction Skyscraper"
            fill
            sizes="(max-width: 768px) 420px, 580px"
            className="object-contain object-right-bottom"
          />
        </div>

        {/* Realistic Crane on the Upper Left */}
        <div className="absolute -left-16 sm:-left-8 top-0 w-[450px] sm:w-[560px] lg:w-[640px] h-[360px] sm:h-[440px] lg:h-[500px] opacity-[0.15] sm:opacity-[0.20] hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-crane.webp"
            alt="Realistic Construction Crane"
            fill
            sizes="(max-width: 768px) 450px, 640px"
            className="object-contain object-left-top"
          />
        </div>

        {/* Subtle Drafting Grid */}
        <svg
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.08] sm:opacity-[0.11] transition-opacity duration-700"
        >
          <defs>
            <pattern id="aboutGrid2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#12223B" strokeWidth="0.5" strokeOpacity="0.15" />
            </pattern>
          </defs>
          <rect width="1440" height="850" fill="url(#aboutGrid2)" />
        </svg>
      </div>
    );
  }

  if (variant === "whyChooseUs") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
      >
        {/* Realistic Tower Crane spanning over the cards from Right */}
        <div className="absolute right-0 sm:right-6 lg:right-12 top-4 w-[520px] sm:w-[640px] lg:w-[760px] h-[400px] sm:h-[480px] lg:h-[560px] opacity-[0.20] sm:opacity-[0.26] hover:opacity-35 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-crane.webp"
            alt="Realistic Tower Crane"
            fill
            sizes="(max-width: 768px) 520px, 760px"
            className="object-contain object-right-top"
          />
        </div>

        {/* Realistic Construction Building on the Left */}
        <div className="absolute -left-12 sm:left-4 bottom-0 w-[380px] sm:w-[460px] lg:w-[520px] h-[380px] sm:h-[460px] lg:h-[520px] opacity-[0.14] sm:opacity-[0.18] hover:opacity-28 transition-opacity duration-700 pointer-events-none select-none z-0">
          <Image
            src="/images/realistic-building.webp"
            alt="Realistic Construction Building"
            fill
            sizes="(max-width: 768px) 380px, 520px"
            className="object-contain object-left-bottom"
          />
        </div>
      </div>
    );
  }

  // General / Default Universal Realistic Backdrop
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
    >
      <div className="absolute right-2 top-4 w-[480px] sm:w-[600px] lg:w-[700px] h-[380px] sm:h-[460px] lg:h-[520px] opacity-[0.18] sm:opacity-[0.22] hover:opacity-30 transition-opacity duration-700 pointer-events-none select-none z-0">
        <Image
          src="/images/realistic-crane.webp"
          alt="Realistic Construction Crane"
          fill
          sizes="(max-width: 768px) 480px, 700px"
          className="object-contain object-right-top"
        />
      </div>
    </div>
  );
}
