"use client";

import React from "react";

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
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.14] sm:opacity-[0.18] transition-opacity duration-700"
        >
          <defs>
            {/* Subtle Drafting Dot Pattern */}
            <pattern
              id="faqDotGrid"
              x="0"
              y="0"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#12223B" opacity="0.25" />
            </pattern>

            {/* Crane Gold Metal Gradient */}
            <linearGradient id="faqGoldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF099" />
              <stop offset="50%" stopColor="#FFDB5A" />
              <stop offset="100%" stopColor="#D49A10" />
            </linearGradient>

            {/* CSS Sway Animation for Crane Load */}
            <style>{`
              @keyframes faqCargoSway {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(2.2deg); }
                75% { transform: rotate(-2.2deg); }
              }
              .faq-cargo-sway {
                animation: faqCargoSway 7s ease-in-out infinite;
                transform-origin: 1040px 145px;
              }
            `}</style>
          </defs>

          {/* Dot Matrix Grid Layer */}
          <rect width="1440" height="800" fill="url(#faqDotGrid)" />

          {/* ======================================================== */}
          {/* LEFT BACKGROUND: MODERN SKYSCRAPER ELEVATION & CAD GRID */}
          {/* ======================================================== */}
          <g stroke="#12223B" strokeWidth="1.2">
            {/* CAD Axis Lines & Elevation Markers */}
            <line x1="80" y1="40" x2="80" y2="760" strokeDasharray="6 6" strokeOpacity="0.4" />
            <line x1="220" y1="40" x2="220" y2="760" strokeDasharray="6 6" strokeOpacity="0.4" />
            <line x1="360" y1="40" x2="360" y2="760" strokeDasharray="6 6" strokeOpacity="0.4" />
            <line x1="500" y1="40" x2="500" y2="760" strokeDasharray="6 6" strokeOpacity="0.4" />

            <line x1="40" y1="120" x2="600" y2="120" strokeDasharray="4 6" strokeOpacity="0.35" />
            <line x1="40" y1="280" x2="600" y2="280" strokeDasharray="4 6" strokeOpacity="0.35" />
            <line x1="40" y1="440" x2="600" y2="440" strokeDasharray="4 6" strokeOpacity="0.35" />
            <line x1="40" y1="600" x2="600" y2="600" strokeDasharray="4 6" strokeOpacity="0.35" />

            {/* Technical Labels */}
            <text x="85" y="60" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">AXIS A-01</text>
            <text x="225" y="60" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">AXIS B-02</text>
            <text x="365" y="60" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">AXIS C-03</text>
            <text x="45" y="115" fill="#FFDB5A" fontSize="9" fontFamily="monospace" fontWeight="700" opacity="0.9">ELEV. +168.00m</text>
            <text x="45" y="275" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">ELEV. +112.50m</text>
            <text x="45" y="435" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="600" opacity="0.6">ELEV. +56.00m</text>

            {/* Building 1: Stepped Modern Tower Elevation */}
            <rect x="120" y="260" width="180" height="500" fill="none" strokeWidth="1.6" />
            <rect x="150" y="180" width="120" height="80" fill="none" strokeWidth="1.4" />
            <rect x="180" y="110" width="60" height="70" fill="none" strokeWidth="1.2" />
            {/* Tower Spire */}
            <line x1="210" y1="110" x2="210" y2="40" strokeWidth="1.8" stroke="#FFDB5A" />
            <circle cx="210" cy="40" r="3" fill="#FFDB5A" />

            {/* Structural Floor Lines & Cross-Bracing */}
            <g strokeOpacity="0.5">
              <line x1="120" y1="340" x2="300" y2="340" />
              <line x1="120" y1="420" x2="300" y2="420" />
              <line x1="120" y1="500" x2="300" y2="500" />
              <line x1="120" y1="580" x2="300" y2="580" />
              <line x1="120" y1="660" x2="300" y2="660" />

              {/* Diagonal Seismic K-Bracing */}
              <line x1="120" y1="260" x2="210" y2="340" stroke="#FFDB5A" strokeWidth="1" />
              <line x1="300" y1="260" x2="210" y2="340" stroke="#FFDB5A" strokeWidth="1" />
              <line x1="120" y1="340" x2="210" y2="420" stroke="#FFDB5A" strokeWidth="1" />
              <line x1="300" y1="340" x2="210" y2="420" stroke="#FFDB5A" strokeWidth="1" />
              <line x1="120" y1="420" x2="210" y2="500" stroke="#FFDB5A" strokeWidth="1" />
              <line x1="300" y1="420" x2="210" y2="500" stroke="#FFDB5A" strokeWidth="1" />
            </g>

            {/* Building 2: Adjacent High-Rise with Curtain Wall Grid */}
            <rect x="330" y="320" width="160" height="440" fill="none" strokeWidth="1.5" />
            <polygon points="330,320 410,230 490,320" fill="none" strokeWidth="1.4" stroke="#FFDB5A" />
            <line x1="410" y1="230" x2="410" y2="150" strokeWidth="1.6" stroke="#FFDB5A" />
            {/* Window Grid Lines */}
            <g strokeOpacity="0.4" strokeDasharray="3 5">
              <line x1="370" y1="320" x2="370" y2="740" />
              <line x1="410" y1="320" x2="410" y2="740" />
              <line x1="450" y1="320" x2="450" y2="740" />
            </g>
          </g>

          {/* ======================================================== */}
          {/* RIGHT / TOP BACKGROUND: HEAVY CONSTRUCTION TOWER CRANE   */}
          {/* ======================================================== */}
          <g stroke="#12223B" strokeWidth="1.2">
            {/* Crane Mast Tower (Vertical Lattice rising up on the far right) */}
            <rect x="1240" y="80" width="18" height="680" fill="none" strokeWidth="1.8" stroke="#12223B" />
            {/* Mast Diagonal Truss Braces */}
            <g strokeOpacity="0.6">
              <line x1="1240" y1="100" x2="1258" y2="130" stroke="#FFDB5A" />
              <line x1="1240" y1="130" x2="1258" y2="100" stroke="#FFDB5A" />
              <line x1="1240" y1="130" x2="1258" y2="160" stroke="#FFDB5A" />
              <line x1="1240" y1="160" x2="1258" y2="130" stroke="#FFDB5A" />
              <line x1="1240" y1="160" x2="1258" y2="190" stroke="#FFDB5A" />
              <line x1="1240" y1="190" x2="1258" y2="160" stroke="#FFDB5A" />
              <line x1="1240" y1="190" x2="1258" y2="220" stroke="#FFDB5A" />
              <line x1="1240" y1="220" x2="1258" y2="190" stroke="#FFDB5A" />
              <line x1="1240" y1="220" x2="1258" y2="250" stroke="#FFDB5A" />
              <line x1="1240" y1="250" x2="1258" y2="220" stroke="#FFDB5A" />
              <line x1="1240" y1="250" x2="1258" y2="280" stroke="#FFDB5A" />
              <line x1="1240" y1="280" x2="1258" y2="250" stroke="#FFDB5A" />
              <line x1="1240" y1="280" x2="1258" y2="310" stroke="#FFDB5A" />
              <line x1="1240" y1="310" x2="1258" y2="280" stroke="#FFDB5A" />
              <line x1="1240" y1="310" x2="1258" y2="340" stroke="#FFDB5A" />
              <line x1="1240" y1="340" x2="1258" y2="310" stroke="#FFDB5A" />
              <line x1="1240" y1="340" x2="1258" y2="370" stroke="#FFDB5A" />
              <line x1="1240" y1="370" x2="1258" y2="340" stroke="#FFDB5A" />
              <line x1="1240" y1="370" x2="1258" y2="400" stroke="#FFDB5A" />
              <line x1="1240" y1="400" x2="1258" y2="370" stroke="#FFDB5A" />
            </g>

            {/* Slewing Operator Cabin */}
            <rect x="1222" y="74" width="16" height="18" rx="2" fill="none" strokeWidth="1.6" stroke="#FFDB5A" />
            <rect x="1226" y="78" width="8" height="8" rx="1" fill="#FFDB5A" fillOpacity="0.4" />

            {/* Apex Tower Head */}
            <polygon points="1240,80 1249,20 1258,80" fill="none" strokeWidth="2" stroke="#12223B" />
            <circle cx="1249" cy="20" r="3" fill="#EF4444" />

            {/* Counter-Jib (Right: extends beyond edge to 1380) */}
            <line x1="1258" y1="76" x2="1400" y2="76" strokeWidth="2.4" stroke="#12223B" />
            <line x1="1258" y1="84" x2="1400" y2="84" strokeWidth="1.5" stroke="#12223B" />
            <rect x="1350" y="84" width="35" height="24" rx="2" fill="none" strokeWidth="1.5" stroke="#FFDB5A" />
            <line x1="1249" y1="20" x2="1360" y2="76" strokeWidth="1.6" stroke="#FFDB5A" />

            {/* Main Long Working Jib (Spanning across the upper FAQ section from 1240 down to 680!) */}
            <line x1="680" y1="76" x2="1240" y2="76" strokeWidth="3" stroke="#12223B" />
            <line x1="680" y1="86" x2="1240" y2="86" strokeWidth="1.8" stroke="#12223B" />
            {/* Jib Web Trusses */}
            <g strokeOpacity="0.7">
              <line x1="1240" y1="76" x2="1210" y2="86" stroke="#FFDB5A" />
              <line x1="1210" y1="76" x2="1180" y2="86" stroke="#FFDB5A" />
              <line x1="1180" y1="76" x2="1150" y2="86" stroke="#FFDB5A" />
              <line x1="1150" y1="76" x2="1120" y2="86" stroke="#FFDB5A" />
              <line x1="1120" y1="76" x2="1090" y2="86" stroke="#FFDB5A" />
              <line x1="1090" y1="76" x2="1060" y2="86" stroke="#FFDB5A" />
              <line x1="1060" y1="76" x2="1030" y2="86" stroke="#FFDB5A" />
              <line x1="1030" y1="76" x2="1000" y2="86" stroke="#FFDB5A" />
              <line x1="1000" y1="76" x2="970" y2="86" stroke="#FFDB5A" />
              <line x1="970" y1="76" x2="940" y2="86" stroke="#FFDB5A" />
              <line x1="940" y1="76" x2="910" y2="86" stroke="#FFDB5A" />
              <line x1="910" y1="76" x2="880" y2="86" stroke="#FFDB5A" />
              <line x1="880" y1="76" x2="850" y2="86" stroke="#FFDB5A" />
              <line x1="850" y1="76" x2="820" y2="86" stroke="#FFDB5A" />
              <line x1="820" y1="76" x2="790" y2="86" stroke="#FFDB5A" />
              <line x1="790" y1="76" x2="760" y2="86" stroke="#FFDB5A" />
              <line x1="760" y1="76" x2="730" y2="86" stroke="#FFDB5A" />
              <line x1="730" y1="76" x2="700" y2="86" stroke="#FFDB5A" />
            </g>
            {/* Tension Cables from Apex */}
            <line x1="1249" y1="20" x2="1080" y2="76" strokeWidth="1.8" stroke="#FFDB5A" />
            <line x1="1249" y1="20" x2="900" y2="76" strokeWidth="1.8" stroke="#FFDB5A" />
            <line x1="1249" y1="20" x2="740" y2="76" strokeWidth="1.8" stroke="#FFDB5A" />

            {/* Jib Dimension and Angle Arc */}
            <circle cx="1240" cy="76" r="60" stroke="#FFDB5A" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5" fill="none" />
            <text x="1140" y="60" fill="#FFDB5A" fontSize="9" fontFamily="monospace" fontWeight="bold">WORKING RADIUS 75.0m</text>
            <text x="750" y="66" fill="#12223B" fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.7">TOWER CRANE TC-01</text>

            {/* Trolley, Hoist Cable & Suspended Heavy Construction Girder */}
            <g>
              {/* Trolley Car */}
              <rect x="1030" y="86" width="20" height="8" rx="1" fill="#FFDB5A" stroke="#12223B" strokeWidth="1" />

              {/* Suspended Rigging with Subtle Sway */}
              <g className="faq-cargo-sway">
                {/* Hoist Steel Cable */}
                <line x1="1038" y1="94" x2="1038" y2="155" strokeWidth="1.4" stroke="#12223B" />
                <line x1="1042" y1="94" x2="1042" y2="155" strokeWidth="1.4" stroke="#12223B" />
                {/* Hook Block */}
                <polygon points="1034,155 1046,155 1040,163" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.8" />
                <path d="M1040 163V170C1040 173 1037 173 1035 171.5" stroke="#12223B" strokeWidth="1.8" fill="none" strokeLinecap="round" />

                {/* Rigging Slings */}
                <line x1="1040" y1="170" x2="1005" y2="182" strokeWidth="1.2" stroke="#12223B" />
                <line x1="1040" y1="170" x2="1075" y2="182" strokeWidth="1.2" stroke="#12223B" />

                {/* Heavy Suspended Steel I-Beam */}
                <rect x="990" y="182" width="100" height="5" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="1" />
                <rect x="995" y="187" width="90" height="8" fill="#12223B" stroke="#FFDB5A" strokeWidth="0.8" />
                <rect x="990" y="195" width="100" height="5" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="1" />
                {/* Golden Rivets */}
                <circle cx="1008" cy="191" r="1.6" fill="url(#faqGoldMetal)" />
                <circle cx="1029" cy="191" r="1.6" fill="url(#faqGoldMetal)" />
                <circle cx="1051" cy="191" r="1.6" fill="url(#faqGoldMetal)" />
                <circle cx="1072" cy="191" r="1.6" fill="url(#faqGoldMetal)" />
              </g>
            </g>
          </g>

          {/* Technical Crosshairs at Key Grid Intersections */}
          <g stroke="#FFDB5A" strokeWidth="1" opacity="0.6">
            <line x1="215" y1="280" x2="225" y2="280" />
            <line x1="220" y1="275" x2="220" y2="285" />
            <line x1="355" y1="440" x2="365" y2="440" />
            <line x1="360" y1="435" x2="360" y2="445" />
            <line x1="495" y1="120" x2="505" y2="120" />
            <line x1="500" y1="115" x2="500" y2="125" />
            <line x1="1235" y1="340" x2="1245" y2="340" />
            <line x1="1240" y1="335" x2="1240" y2="345" />
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
        <svg
          viewBox="0 0 1440 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.12] sm:opacity-[0.16] transition-opacity duration-700"
        >
          <defs>
            <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#12223B" strokeWidth="0.5" strokeOpacity="0.12" />
            </pattern>
          </defs>
          <rect width="1440" height="850" fill="url(#aboutGrid)" />

          {/* Large Architectural Building Silhouette & Tower Crane (Behind Text & Media) */}
          <g stroke="#12223B" strokeWidth="1.2">
            {/* Center-Right Tower Crane */}
            <rect x="820" y="60" width="16" height="740" fill="none" strokeWidth="1.6" stroke="#12223B" />
            {/* Lattice bracing */}
            <g stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.7">
              <line x1="820" y1="80" x2="836" y2="110" />
              <line x1="820" y1="110" x2="836" y2="80" />
              <line x1="820" y1="110" x2="836" y2="140" />
              <line x1="820" y1="140" x2="836" y2="110" />
              <line x1="820" y1="140" x2="836" y2="170" />
              <line x1="820" y1="170" x2="836" y2="140" />
              <line x1="820" y1="170" x2="836" y2="200" />
              <line x1="820" y1="200" x2="836" y2="170" />
              <line x1="820" y1="200" x2="836" y2="230" />
              <line x1="820" y1="230" x2="836" y2="200" />
              <line x1="820" y1="230" x2="836" y2="260" />
              <line x1="820" y1="260" x2="836" y2="230" />
            </g>
            {/* Crane Apex */}
            <polygon points="820,60 828,15 836,60" fill="none" strokeWidth="1.8" />
            <circle cx="828" cy="15" r="3" fill="#EF4444" />
            {/* Jibs */}
            <line x1="500" y1="56" x2="820" y2="56" strokeWidth="2.5" stroke="#12223B" />
            <line x1="500" y1="64" x2="820" y2="64" strokeWidth="1.4" stroke="#12223B" />
            <line x1="836" y1="56" x2="980" y2="56" strokeWidth="2.5" stroke="#12223B" />
            <line x1="836" y1="64" x2="980" y2="64" strokeWidth="1.4" stroke="#12223B" />
            <rect x="940" y="64" width="30" height="20" fill="none" strokeWidth="1.4" stroke="#FFDB5A" />
            {/* Tie lines */}
            <line x1="828" y1="15" x2="620" y2="56" stroke="#FFDB5A" strokeWidth="1.4" />
            <line x1="828" y1="15" x2="950" y2="56" stroke="#FFDB5A" strokeWidth="1.4" />

            {/* Hoist cable & beam hovering over the center */}
            <line x1="640" y1="64" x2="640" y2="135" stroke="#12223B" strokeWidth="1.2" />
            <rect x="610" y="135" width="60" height="8" rx="1" fill="none" stroke="#FFDB5A" strokeWidth="1.4" />

            {/* Skyscraper Wireframe Elevations on Left & Right */}
            <rect x="60" y="280" width="220" height="520" fill="none" strokeWidth="1.6" stroke="#12223B" />
            <polygon points="60,280 170,190 280,280" fill="none" strokeWidth="1.4" stroke="#FFDB5A" />
            <line x1="170" y1="190" x2="170" y2="110" stroke="#FFDB5A" strokeWidth="1.8" />
            <line x1="60" y1="360" x2="280" y2="360" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="60" y1="440" x2="280" y2="440" strokeDasharray="4 4" strokeOpacity="0.4" />
            <line x1="60" y1="520" x2="280" y2="520" strokeDasharray="4 4" strokeOpacity="0.4" />

            <rect x="1050" y="220" width="260" height="580" fill="none" strokeWidth="1.6" stroke="#12223B" />
            <rect x="1090" y="150" width="180" height="70" fill="none" strokeWidth="1.4" stroke="#FFDB5A" />
            <line x1="1180" y1="150" x2="1180" y2="80" stroke="#FFDB5A" strokeWidth="1.8" />
          </g>
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
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full opacity-[0.13] sm:opacity-[0.16] transition-opacity duration-700"
        >
          <g stroke="#12223B" strokeWidth="1.2">
            {/* Panoramic Construction Skyline with Tower Cranes across the top */}
            {/* Tower Crane Left */}
            <rect x="180" y="70" width="14" height="680" fill="none" strokeWidth="1.5" stroke="#12223B" />
            <polygon points="180,70 187,25 194,70" fill="none" strokeWidth="1.6" />
            <line x1="80" y1="66" x2="480" y2="66" strokeWidth="2.5" stroke="#12223B" />
            <line x1="80" y1="73" x2="480" y2="73" strokeWidth="1.4" stroke="#12223B" />
            <line x1="187" y1="25" x2="360" y2="66" stroke="#FFDB5A" strokeWidth="1.4" />
            <circle cx="187" cy="25" r="3" fill="#EF4444" />

            {/* Tower Crane Right */}
            <rect x="1120" y="90" width="14" height="660" fill="none" strokeWidth="1.5" stroke="#12223B" />
            <polygon points="1120,90 1127,45 1134,90" fill="none" strokeWidth="1.6" />
            <line x1="840" y1="86" x2="1240" y2="86" strokeWidth="2.5" stroke="#12223B" />
            <line x1="840" y1="93" x2="1240" y2="93" strokeWidth="1.4" stroke="#12223B" />
            <line x1="1127" y1="45" x2="960" y2="86" stroke="#FFDB5A" strokeWidth="1.4" />
            <circle cx="1127" cy="45" r="3" fill="#FFDB5A" />

            {/* Architectural Building Elevation Outlines */}
            <rect x="260" y="240" width="200" height="510" fill="none" strokeWidth="1.6" />
            <polygon points="260,240 360,170 460,240" fill="none" stroke="#FFDB5A" strokeWidth="1.4" />
            <line x1="360" y1="170" x2="360" y2="100" stroke="#FFDB5A" strokeWidth="1.8" />

            <rect x="540" y="190" width="260" height="560" fill="none" strokeWidth="1.6" />
            <line x1="540" y1="270" x2="800" y2="270" strokeDasharray="4 6" strokeOpacity="0.4" />
            <line x1="540" y1="350" x2="800" y2="350" strokeDasharray="4 6" strokeOpacity="0.4" />
            <line x1="540" y1="430" x2="800" y2="430" strokeDasharray="4 6" strokeOpacity="0.4" />

            <rect x="880" y="260" width="180" height="490" fill="none" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    );
  }

  // General / Default Universal Architectural Backdrop
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none z-0 overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-[0.10] sm:opacity-[0.14] transition-opacity duration-700"
      >
        <g stroke="#12223B" strokeWidth="1.2">
          {/* Construction Tower Crane Silhouette */}
          <rect x="1100" y="80" width="15" height="670" fill="none" strokeWidth="1.6" />
          <polygon points="1100,80 1107.5,30 1115,80" fill="none" strokeWidth="1.8" />
          <line x1="820" y1="76" x2="1240" y2="76" strokeWidth="2.5" stroke="#12223B" />
          <line x1="820" y1="84" x2="1240" y2="84" strokeWidth="1.5" stroke="#12223B" />
          <line x1="1107.5" y1="30" x2="940" y2="76" stroke="#FFDB5A" strokeWidth="1.5" />
          <circle cx="1107.5" cy="30" r="3" fill="#EF4444" />

          {/* Suspended hook and beam */}
          <line x1="930" y1="84" x2="930" y2="150" stroke="#12223B" strokeWidth="1.2" />
          <rect x="900" y="150" width="60" height="7" rx="1" fill="none" stroke="#FFDB5A" strokeWidth="1.4" />

          {/* Building Outlines */}
          <rect x="100" y="300" width="220" height="450" fill="none" strokeWidth="1.5" />
          <polygon points="100,300 210,210 320,300" fill="none" stroke="#FFDB5A" strokeWidth="1.4" />
          <line x1="210" y1="210" x2="210" y2="130" stroke="#FFDB5A" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}
