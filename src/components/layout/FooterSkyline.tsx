"use client";

import React from "react";

export default function FooterSkyline() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1600 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        className="w-full h-full object-cover object-bottom opacity-35 sm:opacity-45 hover:opacity-60 transition-opacity duration-700"
      >
        <defs>
          {/* ======================================================== */}
          {/* CSS KEYFRAME ANIMATIONS FOR CRANES & LIGHTS              */}
          {/* ======================================================== */}
          <style>{`
            @keyframes crane1TrolleyTravel {
              0%, 10% {
                transform: translateX(0px);
              }
              45%, 55% {
                transform: translateX(-270px);
              }
              90%, 100% {
                transform: translateX(0px);
              }
            }

            @keyframes crane1CargoSway {
              0%, 10% {
                transform: rotate(0deg);
              }
              18% {
                transform: rotate(3deg);
              }
              32% {
                transform: rotate(1.8deg);
              }
              44% {
                transform: rotate(-1.5deg);
              }
              48% {
                transform: rotate(0.8deg);
              }
              52%, 58% {
                transform: rotate(0deg);
              }
              66% {
                transform: rotate(-3deg);
              }
              78% {
                transform: rotate(-1.8deg);
              }
              88% {
                transform: rotate(1.2deg);
              }
              94% {
                transform: rotate(-0.4deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }

            @keyframes crane2TrolleyTravel {
              0%, 12% {
                transform: translateX(0px);
              }
              46%, 58% {
                transform: translateX(180px);
              }
              92%, 100% {
                transform: translateX(0px);
              }
            }

            @keyframes crane2CargoSway {
              0%, 12% {
                transform: rotate(0deg);
              }
              20% {
                transform: rotate(-2.6deg);
              }
              34% {
                transform: rotate(-1.2deg);
              }
              45% {
                transform: rotate(1.6deg);
              }
              52%, 60% {
                transform: rotate(0deg);
              }
              68% {
                transform: rotate(2.6deg);
              }
              80% {
                transform: rotate(1.4deg);
              }
              90% {
                transform: rotate(-0.6deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }

            @keyframes beaconBlink {
              0%, 100% { opacity: 0.25; }
              50% { opacity: 1; }
            }

            .crane1-trolley-anim {
              animation: crane1TrolleyTravel 11s cubic-bezier(0.42, 0, 0.58, 1) infinite;
            }

            .crane1-cargo-anim {
              animation: crane1CargoSway 11s ease-in-out infinite;
              transform-origin: 810px 128px;
            }

            .crane2-trolley-anim {
              animation: crane2TrolleyTravel 9s cubic-bezier(0.42, 0, 0.58, 1) infinite;
            }

            .crane2-cargo-anim {
              animation: crane2CargoSway 9s ease-in-out infinite;
              transform-origin: 955px 148px;
            }

            .beacon-pulse-fast {
              animation: beaconBlink 1.4s ease-in-out infinite;
            }

            .beacon-pulse-slow {
              animation: beaconBlink 2.2s ease-in-out infinite;
            }
          `}</style>

          {/* Gradients */}
          <linearGradient id="footerBuildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4E7199" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#243B5C" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#12223B" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="footerBuildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFDB5A" stopOpacity="0.38" />
            <stop offset="30%" stopColor="#3A5C85" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#12223B" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="craneGoldMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3A8" />
            <stop offset="40%" stopColor="#FFDB5A" />
            <stop offset="85%" stopColor="#E5A910" />
          </linearGradient>

          <radialGradient id="craneBackGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFDB5A" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FFDB5A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="craneBackGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>

          {/* Vertical fading mask to blend softly at the bottom */}
          <linearGradient id="fullFooterBottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#12223B" stopOpacity="0" />
            <stop offset="65%" stopColor="#12223B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#12223B" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Atmospheric Backglows */}
        <circle cx="580" cy="220" r="320" fill="url(#craneBackGlow1)" />
        <circle cx="1120" cy="240" r="300" fill="url(#craneBackGlow2)" />

        {/* ========================================================= */}
        {/* 1. BACKGROUND SKYLINE LAYER (Distant High-rises & Spires) */}
        {/* ========================================================= */}
        <g opacity="0.4">
          {/* Far Tower 1 (Left) */}
          <rect x="60" y="240" width="80" height="510" fill="url(#footerBuildingGrad1)" />
          <polygon points="60,240 100,165 140,240" fill="url(#footerBuildingGrad1)" />
          <line x1="100" y1="165" x2="100" y2="110" stroke="#7EA5D1" strokeWidth="2" strokeOpacity="0.6" />

          {/* Far Tower 2 */}
          <rect x="220" y="200" width="100" height="550" fill="url(#footerBuildingGrad1)" />
          <rect x="245" y="150" width="50" height="50" fill="url(#footerBuildingGrad1)" />
          <line x1="270" y1="150" x2="270" y2="90" stroke="#FFDB5A" strokeWidth="2" strokeOpacity="0.7" />
          <circle cx="270" cy="90" r="2.5" fill="#FFDB5A" className="beacon-pulse-slow" />

          {/* Far Center Mega Tower */}
          <rect x="630" y="160" width="140" height="590" fill="url(#footerBuildingGrad1)" />
          <polygon points="630,160 700,90 770,160" fill="url(#footerBuildingGrad1)" />
          <line x1="700" y1="90" x2="700" y2="40" stroke="#7EA5D1" strokeWidth="2.5" strokeOpacity="0.6" />
          <circle cx="700" cy="40" r="3" fill="#EF4444" className="beacon-pulse-fast" />

          {/* Far Tower 4 */}
          <rect x="990" y="220" width="110" height="530" fill="url(#footerBuildingGrad1)" />
          <polygon points="990,220 1045,150 1100,220" fill="url(#footerBuildingGrad1)" />

          {/* Far Right Spire Tower */}
          <rect x="1220" y="190" width="105" height="560" fill="url(#footerBuildingGrad1)" />
          <polygon points="1220,190 1272.5,120 1325,190" fill="url(#footerBuildingGrad1)" />
          <line x1="1272.5" y1="120" x2="1272.5" y2="65" stroke="#FFDB5A" strokeWidth="2" strokeOpacity="0.75" />
          <circle cx="1272.5" cy="65" r="2.8" fill="#FFDB5A" className="beacon-pulse-slow" />

          <rect x="1390" y="250" width="140" height="500" fill="url(#footerBuildingGrad1)" />
        </g>

        {/* ========================================================= */}
        {/* 2. MIDGROUND BUILDINGS (Modern Architecture Across Width) */}
        {/* ========================================================= */}
        <g opacity="0.68">
          {/* Building Left 1: Stepped Highrise */}
          <path
            d="M20 750V340H60V290H140V340H180V750H20Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          {/* Window Columns */}
          <g stroke="#FFDB5A" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="4 12">
            <line x1="75" y1="310" x2="75" y2="700" />
            <line x1="100" y1="310" x2="100" y2="700" />
            <line x1="125" y1="310" x2="125" y2="700" />
          </g>

          {/* Building Left 2: Diagonal Faceted Glass Skyscraper */}
          <path
            d="M175 750V270L245 200V750H175Z"
            fill="url(#footerBuildingGrad2)"
            stroke="#FFDB5A"
            strokeWidth="1.1"
            strokeOpacity="0.6"
          />
          <line x1="175" y1="270" x2="245" y2="340" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="175" y1="340" x2="245" y2="410" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="175" y1="410" x2="245" y2="480" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="245" y1="200" x2="175" y2="270" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="245" y1="270" x2="175" y2="340" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.4" />

          {/* Building 3: Terraced Modern Office Tower */}
          <path
            d="M310 750V300H345V250H400V195H440V250H475V750H310Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <line x1="420" y1="195" x2="420" y2="135" stroke="#FFDB5A" strokeWidth="1.8" strokeOpacity="0.8" />
          <circle cx="420" cy="135" r="2.5" fill="#FFDB5A" className="beacon-pulse-slow" />

          {/* Center Mega Skyscraper (Under Active Construction) */}
          <path
            d="M740 750V180H885V750H740Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1.3"
            strokeOpacity="0.65"
          />
          {/* Exposed Top Structural Steel Skeleton */}
          <rect
            x="760"
            y="135"
            width="105"
            height="45"
            fill="none"
            stroke="#FFDB5A"
            strokeWidth="1.3"
            strokeOpacity="0.8"
            strokeDasharray="8 4"
          />
          <line x1="785" y1="135" x2="785" y2="180" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.6" />
          <line x1="812" y1="135" x2="812" y2="180" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.6" />
          <line x1="840" y1="135" x2="840" y2="180" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.6" />
          <line x1="760" y1="157" x2="865" y2="157" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.6" />

          {/* Vertical Glass Mullions & Window Lights */}
          <g stroke="#7EA5D1" strokeWidth="0.9" strokeOpacity="0.35">
            <line x1="770" y1="195" x2="770" y2="720" />
            <line x1="795" y1="195" x2="795" y2="720" />
            <line x1="820" y1="195" x2="820" y2="720" />
            <line x1="845" y1="195" x2="845" y2="720" />
            <line x1="870" y1="195" x2="870" y2="720" />
          </g>
          {/* Illuminated Architectural Windows */}
          <rect x="765" y="225" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.8" />
          <rect x="815" y="245" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.9" />
          <rect x="840" y="295" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.75" />
          <rect x="790" y="340" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.7" />
          <rect x="865" y="270" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.8" />
          <rect x="765" y="380" width="10" height="6" rx="0.5" fill="#FFDB5A" opacity="0.7" />

          {/* Right Side Twin Towers with Skybridge */}
          <path
            d="M1260 750V225H1330V750H1260Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <path
            d="M1375 750V205H1445V750H1375Z"
            fill="url(#footerBuildingGrad2)"
            stroke="#FFDB5A"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          {/* Connecting Skybridge */}
          <rect
            x="1330"
            y="285"
            width="45"
            height="24"
            fill="url(#footerBuildingGrad1)"
            stroke="#FFDB5A"
            strokeWidth="1"
            strokeOpacity="0.75"
          />
          <line x1="1330" y1="297" x2="1375" y2="297" stroke="#7EA5D1" strokeWidth="1" strokeOpacity="0.5" />
          {/* Antenna Spire */}
          <line x1="1410" y1="205" x2="1410" y2="125" stroke="#FFDB5A" strokeWidth="1.6" strokeOpacity="0.8" />
          <circle cx="1410" cy="125" r="2.8" fill="#FFDB5A" className="beacon-pulse-slow" />

          {/* Far Right Corner Commercial Tower */}
          <path
            d="M1475 750V280H1590V750H1475Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </g>

        {/* ========================================================= */}
        {/* 3. TOWER CRANES (FULL HEIGHT, DETAILED & ANIMATED)        */}
        {/* ========================================================= */}

        {/* ===== CRANE 1: PRIMARY HEAVY TOWER CRANE (CENTER-LEFT) ===== */}
        {/* Spans from y=750 up to y=60 across the upper part of the footer */}
        <g>
          {/* Vertical Lattice Tower Mast */}
          <rect
            x="535"
            y="110"
            width="14"
            height="640"
            fill="#182C48"
            stroke="#FFDB5A"
            strokeWidth="1.2"
            strokeOpacity="0.9"
          />
          {/* Mast Lattice Cross-Bracing Pattern */}
          <g stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.75">
            <line x1="535" y1="125" x2="549" y2="145" />
            <line x1="535" y1="145" x2="549" y2="125" />
            <line x1="535" y1="145" x2="549" y2="165" />
            <line x1="535" y1="165" x2="549" y2="145" />
            <line x1="535" y1="165" x2="549" y2="185" />
            <line x1="535" y1="185" x2="549" y2="165" />
            <line x1="535" y1="185" x2="549" y2="205" />
            <line x1="535" y1="205" x2="549" y2="185" />
            <line x1="535" y1="205" x2="549" y2="225" />
            <line x1="535" y1="225" x2="549" y2="205" />
            <line x1="535" y1="225" x2="549" y2="245" />
            <line x1="535" y1="245" x2="549" y2="225" />
            <line x1="535" y1="245" x2="549" y2="265" />
            <line x1="535" y1="265" x2="549" y2="245" />
            <line x1="535" y1="265" x2="549" y2="285" />
            <line x1="535" y1="285" x2="549" y2="265" />
            <line x1="535" y1="285" x2="549" y2="305" />
            <line x1="535" y1="305" x2="549" y2="285" />
            <line x1="535" y1="305" x2="549" y2="335" />
            <line x1="535" y1="335" x2="549" y2="305" />
            <line x1="535" y1="335" x2="549" y2="365" />
            <line x1="535" y1="365" x2="549" y2="335" />
            <line x1="535" y1="365" x2="549" y2="395" />
            <line x1="535" y1="395" x2="549" y2="365" />
            <line x1="535" y1="395" x2="549" y2="425" />
            <line x1="535" y1="425" x2="549" y2="395" />
            <line x1="535" y1="425" x2="549" y2="455" />
            <line x1="535" y1="455" x2="549" y2="425" />
          </g>

          {/* Slewing Operator Cabin with Window */}
          <rect x="549" y="105" width="13" height="15" rx="2" fill="#FFDB5A" fillOpacity="0.95" />
          <rect x="553" y="108" width="6" height="6" rx="0.5" fill="#12223B" />

          {/* Tower Apex Head (A-Frame Mast Top) */}
          <polygon points="535,110 542,60 549,110" fill="#1B3150" stroke="#FFDB5A" strokeWidth="1.5" />
          {/* Pulsing Aviation Hazard Warning Beacon */}
          <circle cx="542" cy="60" r="3.5" fill="#EF4444" />
          <circle cx="542" cy="60" r="8" fill="#EF4444" opacity="0.4" className="beacon-pulse-fast" />

          {/* Rear Counter-Jib (Left: 430 to 535) */}
          <line x1="430" y1="106" x2="535" y2="106" stroke="#FFDB5A" strokeWidth="2.5" />
          <line x1="430" y1="113" x2="535" y2="113" stroke="#FFDB5A" strokeWidth="1.5" />
          <g stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.75">
            <line x1="440" y1="106" x2="455" y2="113" />
            <line x1="455" y1="106" x2="470" y2="113" />
            <line x1="470" y1="106" x2="485" y2="113" />
            <line x1="485" y1="106" x2="500" y2="113" />
            <line x1="500" y1="106" x2="515" y2="113" />
            <line x1="515" y1="106" x2="530" y2="113" />
          </g>
          {/* Concrete Counterweight Slabs */}
          <rect x="430" y="113" width="24" height="17" rx="1.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="1.2" />
          <line x1="442" y1="113" x2="442" y2="130" stroke="#12223B" strokeWidth="1" />
          {/* Counter-Jib Stay Cable */}
          <line x1="542" y1="60" x2="435" y2="106" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.9" />

          {/* Long Horizontal Working Jib (Right: extends from 549 all the way to 870!) */}
          <line x1="549" y1="106" x2="870" y2="106" stroke="#FFDB5A" strokeWidth="2.5" />
          <line x1="549" y1="114" x2="870" y2="114" stroke="#FFDB5A" strokeWidth="1.5" />
          {/* Working Jib Lattice Truss Webbing */}
          <g stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.75">
            <line x1="550" y1="106" x2="570" y2="114" />
            <line x1="570" y1="106" x2="590" y2="114" />
            <line x1="590" y1="106" x2="610" y2="114" />
            <line x1="610" y1="106" x2="630" y2="114" />
            <line x1="630" y1="106" x2="650" y2="114" />
            <line x1="650" y1="106" x2="670" y2="114" />
            <line x1="670" y1="106" x2="690" y2="114" />
            <line x1="690" y1="106" x2="710" y2="114" />
            <line x1="710" y1="106" x2="730" y2="114" />
            <line x1="730" y1="106" x2="750" y2="114" />
            <line x1="750" y1="106" x2="770" y2="114" />
            <line x1="770" y1="106" x2="790" y2="114" />
            <line x1="790" y1="106" x2="810" y2="114" />
            <line x1="810" y1="106" x2="830" y2="114" />
            <line x1="830" y1="106" x2="850" y2="114" />
            <line x1="850" y1="106" x2="870" y2="114" />
          </g>
          {/* Main Jib Tension Tie Cables from Mast Apex */}
          <line x1="542" y1="60" x2="650" y2="106" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.9" />
          <line x1="542" y1="60" x2="750" y2="106" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.9" />
          <line x1="542" y1="60" x2="840" y2="106" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.9" />
          {/* Jib Tip Warning Light */}
          <circle cx="870" cy="106" r="2.5" fill="#FFDB5A" className="beacon-pulse-slow" />

          {/* ======================================================== */}
          {/* ANIMATED CRANE 1 TROLLEY, CABLE & SUSPENDED CARGO BEAM   */}
          {/* ======================================================== */}
          <g className="crane1-trolley-anim">
            {/* Trolley Unit along the Jib Chord */}
            <rect x="803" y="114" width="14" height="6" rx="1" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.8" />
            <circle cx="806" cy="116" r="1.2" fill="#12223B" />
            <circle cx="814" cy="116" r="1.2" fill="#12223B" />

            {/* Suspended Hoist Assembly with Realistic Physics Sway */}
            <g className="crane1-cargo-anim">
              {/* Dual Steel Hoist Cables */}
              <line x1="808" y1="120" x2="808" y2="180" stroke="#FFDB5A" strokeWidth="1.2" strokeOpacity="0.95" />
              <line x1="812" y1="120" x2="812" y2="180" stroke="#FFDB5A" strokeWidth="1.2" strokeOpacity="0.95" />

              {/* Heavy Duty Crane Hook Block */}
              <polygon points="805,180 815,180 810,186" fill="#FFDB5A" />
              <circle cx="810" cy="183" r="1.2" fill="#12223B" />
              {/* Crane Hook */}
              <path
                d="M810 186V192C810 194.5 807.5 194.5 806.5 193.5"
                stroke="#FFDB5A"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />

              {/* Rigging Slings to Cargo */}
              <line x1="810" y1="192" x2="784" y2="202" stroke="#CAD5E2" strokeWidth="1.1" />
              <line x1="810" y1="192" x2="836" y2="202" stroke="#CAD5E2" strokeWidth="1.1" />

              {/* Suspended Heavy Construction Steel I-Beam Girder */}
              <rect x="775" y="202" width="70" height="4" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.8" />
              <rect x="778" y="206" width="64" height="7.5" fill="#243D61" stroke="#FFDB5A" strokeWidth="0.8" />
              <rect x="775" y="213.5" width="70" height="4" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.8" />

              {/* 4 Golden Rivets / Bolts on Girder */}
              <circle cx="786" cy="209.7" r="1.5" fill="url(#craneGoldMetal)" stroke="#12223B" strokeWidth="0.4" />
              <circle cx="802" cy="209.7" r="1.5" fill="url(#craneGoldMetal)" stroke="#12223B" strokeWidth="0.4" />
              <circle cx="818" cy="209.7" r="1.5" fill="url(#craneGoldMetal)" stroke="#12223B" strokeWidth="0.4" />
              <circle cx="834" cy="209.7" r="1.5" fill="url(#craneGoldMetal)" stroke="#12223B" strokeWidth="0.4" />
            </g>
          </g>
        </g>

        {/* ===== CRANE 2: CLIMBING CRANE ATOP HIGH-RISE (CENTER-RIGHT) ===== */}
        <g>
          {/* Mast mounted on high-rise: y=250 up to y=130 */}
          <rect
            x="1175"
            y="130"
            width="12"
            height="420"
            fill="#182C48"
            stroke="#7EA5D1"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />
          {/* Mast Bracing */}
          <g stroke="#7EA5D1" strokeWidth="0.9" strokeOpacity="0.7">
            <line x1="1175" y1="145" x2="1187" y2="165" />
            <line x1="1175" y1="165" x2="1187" y2="145" />
            <line x1="1175" y1="165" x2="1187" y2="185" />
            <line x1="1175" y1="185" x2="1187" y2="165" />
            <line x1="1175" y1="185" x2="1187" y2="205" />
            <line x1="1175" y1="205" x2="1187" y2="185" />
            <line x1="1175" y1="205" x2="1187" y2="225" />
            <line x1="1175" y1="225" x2="1187" y2="205" />
          </g>

          {/* Cabin */}
          <rect x="1163" y="125" width="12" height="13" rx="1.5" fill="#7EA5D1" />

          {/* Crane 2 Apex */}
          <polygon points="1175,130 1181,85 1187,130" fill="#1B3150" stroke="#7EA5D1" strokeWidth="1.3" />
          <circle cx="1181" cy="85" r="3.2" fill="#FFDB5A" />
          <circle cx="1181" cy="85" r="7" fill="#FFDB5A" opacity="0.35" className="beacon-pulse-slow" />

          {/* Working Jib extending left toward the construction skyscraper (1175 to 940) */}
          <line x1="940" y1="126" x2="1175" y2="126" stroke="#7EA5D1" strokeWidth="2.4" />
          <line x1="940" y1="133" x2="1175" y2="133" stroke="#7EA5D1" strokeWidth="1.3" />
          <g stroke="#7EA5D1" strokeWidth="0.85" strokeOpacity="0.75">
            <line x1="955" y1="126" x2="940" y2="133" />
            <line x1="975" y1="126" x2="955" y2="133" />
            <line x1="995" y1="126" x2="975" y2="133" />
            <line x1="1015" y1="126" x2="995" y2="133" />
            <line x1="1035" y1="126" x2="1015" y2="133" />
            <line x1="1055" y1="126" x2="1035" y2="133" />
            <line x1="1075" y1="126" x2="1055" y2="133" />
            <line x1="1095" y1="126" x2="1075" y2="133" />
            <line x1="1115" y1="126" x2="1095" y2="133" />
            <line x1="1135" y1="126" x2="1115" y2="133" />
            <line x1="1155" y1="126" x2="1135" y2="133" />
            <line x1="1175" y1="126" x2="1155" y2="133" />
          </g>
          {/* Tie Cable */}
          <line x1="1181" y1="85" x2="1020" y2="126" stroke="#7EA5D1" strokeWidth="1.4" strokeOpacity="0.85" />

          {/* Counter-Jib (Right: 1187 to 1270) */}
          <line x1="1187" y1="126" x2="1270" y2="126" stroke="#7EA5D1" strokeWidth="2.2" />
          <line x1="1187" y1="132" x2="1270" y2="132" stroke="#7EA5D1" strokeWidth="1.3" />
          {/* Counterweights */}
          <rect x="1245" y="132" width="22" height="15" rx="1.2" fill="#7EA5D1" stroke="#12223B" strokeWidth="1" />
          <line x1="1181" y1="85" x2="1260" y2="126" stroke="#7EA5D1" strokeWidth="1.4" strokeOpacity="0.85" />

          {/* ======================================================== */}
          {/* ANIMATED CRANE 2 TROLLEY & MATERIAL LOAD                 */}
          {/* ======================================================== */}
          <g className="crane2-trolley-anim">
            <rect x="948" y="133" width="12" height="5" rx="0.8" fill="#FFDB5A" />

            <g className="crane2-cargo-anim">
              <line x1="954" y1="138" x2="954" y2="195" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.9" />
              <polygon points="951,195 957,195 954,200" fill="#FFDB5A" />
              <line x1="954" y1="200" x2="936" y2="209" stroke="#CAD5E2" strokeWidth="0.9" />
              <line x1="954" y1="200" x2="972" y2="209" stroke="#CAD5E2" strokeWidth="0.9" />
              {/* Suspended Precast Structural Module */}
              <rect x="928" y="209" width="52" height="6" rx="0.6" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.8" />
              <rect x="932" y="211" width="44" height="2" fill="#12223B" />
            </g>
          </g>
        </g>

        {/* ===== CRANE 3: FAR-LEFT AUXILIARY LUFFING CRANE ===== */}
        <g opacity="0.8">
          <rect x="120" y="440" width="10" height="310" fill="#182C48" stroke="#FFDB5A" strokeWidth="1" />
          {/* Angled Lattice Boom reaching up into the sky */}
          <line x1="125" y1="440" x2="165" y2="240" stroke="#FFDB5A" strokeWidth="2.2" />
          <line x1="130" y1="440" x2="170" y2="240" stroke="#FFDB5A" strokeWidth="1.3" />
          <g stroke="#FFDB5A" strokeWidth="0.75" strokeOpacity="0.7">
            <line x1="125" y1="410" x2="167" y2="390" />
            <line x1="130" y1="380" x2="168" y2="350" />
            <line x1="135" y1="340" x2="169" y2="310" />
            <line x1="140" y1="300" x2="170" y2="270" />
          </g>
          {/* Hoist cable and hook hanging from boom tip */}
          <line x1="168" y1="240" x2="168" y2="310" stroke="#FFDB5A" strokeWidth="1" strokeOpacity="0.85" />
          <circle cx="168" cy="312" r="1.8" fill="#FFDB5A" />
          <circle cx="168" cy="240" r="2.2" fill="#EF4444" className="beacon-pulse-fast" />
        </g>

        {/* ========================================================= */}
        {/* 4. BOTTOM MASK & GROUND BASELINE                         */}
        {/* ========================================================= */}
        {/* Bottom Fade Mask ensuring copyright line is 100% legible */}
        <rect x="0" y="520" width="1600" height="230" fill="url(#fullFooterBottomFade)" />

        {/* Architectural Datum Ground Baseline with Gold Glow */}
        <line x1="0" y1="749" x2="1600" y2="749" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.3" />
      </svg>
    </div>
  );
}
