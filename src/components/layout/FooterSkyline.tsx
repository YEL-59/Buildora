"use client";

import React from "react";

export default function FooterSkyline() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* Top-Right Architectural Blueprint Accent (Crane & Building elevation sketch) */}
      <div className="absolute -top-10 -right-10 w-[360px] sm:w-[500px] lg:w-[640px] h-[360px] opacity-[0.12] sm:opacity-[0.16] pointer-events-none">
        <svg
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Blueprint Grid Lines */}
          <g stroke="#FFDB5A" strokeWidth="0.5" strokeDasharray="5 7" opacity="0.4">
            <line x1="0" y1="50" x2="500" y2="50" />
            <line x1="0" y1="110" x2="500" y2="110" />
            <line x1="0" y1="170" x2="500" y2="170" />
            <line x1="0" y1="230" x2="500" y2="230" />
            <line x1="0" y1="290" x2="500" y2="290" />
            <line x1="80" y1="0" x2="80" y2="320" />
            <line x1="160" y1="0" x2="160" y2="320" />
            <line x1="240" y1="0" x2="240" y2="320" />
            <line x1="320" y1="0" x2="320" y2="320" />
            <line x1="400" y1="0" x2="400" y2="320" />
          </g>

          {/* Blueprint Construction Crane Shape */}
          <g stroke="#FFDB5A" strokeWidth="1.2" opacity="0.8">
            {/* Crane Mast */}
            <line x1="280" y1="40" x2="280" y2="300" strokeWidth="1.6" />
            <line x1="295" y1="40" x2="295" y2="300" strokeWidth="1.6" />
            {/* Mast Cross Braces */}
            <line x1="280" y1="60" x2="295" y2="90" strokeWidth="0.8" />
            <line x1="280" y1="90" x2="295" y2="60" strokeWidth="0.8" />
            <line x1="280" y1="90" x2="295" y2="120" strokeWidth="0.8" />
            <line x1="280" y1="120" x2="295" y2="90" strokeWidth="0.8" />
            <line x1="280" y1="120" x2="295" y2="150" strokeWidth="0.8" />
            <line x1="280" y1="150" x2="295" y2="120" strokeWidth="0.8" />
            <line x1="280" y1="150" x2="295" y2="180" strokeWidth="0.8" />
            <line x1="280" y1="180" x2="295" y2="150" strokeWidth="0.8" />
            {/* Slewing & Jib Boom */}
            <polygon points="280,40 287.5,10 295,40" fill="none" strokeWidth="1.5" />
            <line x1="160" y1="36" x2="470" y2="36" strokeWidth="2" />
            <line x1="160" y1="44" x2="470" y2="44" strokeWidth="1.2" />
            <line x1="287.5" y1="10" x2="170" y2="36" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="287.5" y1="10" x2="400" y2="36" strokeWidth="1" strokeDasharray="3 3" />
            {/* Counterweight */}
            <rect x="165" y="44" width="28" height="20" fill="none" strokeWidth="1.4" />
            {/* Hoist Trolley, Cable & Hook */}
            <rect x="375" y="44" width="16" height="6" fill="#FFDB5A" />
            <line x1="383" y1="50" x2="383" y2="120" strokeWidth="1.2" />
            <circle cx="383" cy="125" r="4" fill="none" strokeWidth="1.2" />
            <path d="M383 129V135C383 138 380 138 378 136" fill="none" strokeWidth="1.5" />
          </g>

          {/* Blueprint Building Elevation Wireframe */}
          <g stroke="#7EA5D1" strokeWidth="1.1" opacity="0.7">
            {/* Skyscraper outline */}
            <rect x="330" y="110" width="130" height="190" fill="none" />
            <rect x="350" y="80" width="90" height="30" fill="none" />
            <polygon points="350,80 395,45 440,80" fill="none" />
            {/* Window Floor Grids */}
            <line x1="330" y1="140" x2="460" y2="140" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="330" y1="170" x2="460" y2="170" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="330" y1="200" x2="460" y2="200" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="330" y1="230" x2="460" y2="230" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="330" y1="260" x2="460" y2="260" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="370" y1="110" x2="370" y2="300" strokeDasharray="2 3" strokeWidth="0.8" />
            <line x1="410" y1="110" x2="410" y2="300" strokeDasharray="2 3" strokeWidth="0.8" />
          </g>

          {/* Architectural Compass / Dimension Arc */}
          <circle cx="287.5" cy="40" r="45" stroke="#FFDB5A" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.5" />
          <text x="315" y="30" fill="#FFDB5A" fontSize="10" fontFamily="monospace" opacity="0.75">R=185m</text>
        </svg>
      </div>

      {/* Bottom Panoramic Skyline & Tower Cranes Vector Shapes */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center">
        <svg
          viewBox="0 0 1600 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-[220px] sm:h-[280px] lg:h-[340px] opacity-45 sm:opacity-55 hover:opacity-75 transition-opacity duration-700"
        >
        <defs>
          {/* Subtle Ambient & Depth Gradients */}
          <linearGradient id="footerBuildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4E7199" stop-opacity="0.45" />
            <stop offset="50%" stop-color="#243B5C" stop-opacity="0.30" />
            <stop offset="100%" stop-color="#12223B" stop-opacity="0.05" />
          </linearGradient>

          <linearGradient id="footerBuildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFDB5A" stop-opacity="0.35" />
            <stop offset="35%" stop-color="#3A5C85" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#12223B" stop-opacity="0.05" />
          </linearGradient>

          <linearGradient id="craneSteelGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFE07A" />
            <stop offset="45%" stop-color="#FFDB5A" />
            <stop offset="85%" stop-color="#E5A910" />
          </linearGradient>

          <linearGradient id="craneBodySteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7EA5D1" />
            <stop offset="50%" stop-color="#3A5C85" />
            <stop offset="100%" stop-color="#1E3250" />
          </linearGradient>

          <radialGradient id="craneAmbientGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FFDB5A" stop-opacity="0.18" />
            <stop offset="100%" stop-color="#FFDB5A" stop-opacity="0" />
          </radialGradient>

          <radialGradient id="craneAmbientGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.15" />
            <stop offset="100%" stop-color="#38BDF8" stop-opacity="0" />
          </radialGradient>

          {/* Vertical fading mask to blend softly at the bottom */}
          <linearGradient id="bottomFadeMask" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#12223B" stop-opacity="0" />
            <stop offset="60%" stop-color="#12223B" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#12223B" stop-opacity="0.95" />
          </linearGradient>
        </defs>

        {/* Atmospheric Backglows */}
        <circle cx="560" cy="130" r="190" fill="url(#craneAmbientGlow1)" />
        <circle cx="1060" cy="120" r="210" fill="url(#craneAmbientGlow2)" />

        {/* ========================================================= */}
        {/* 1. BACKGROUND SILHOUETTE BUILDINGS (Distant City Skyline)  */}
        {/* ========================================================= */}
        <g opacity="0.45">
          {/* Far Tower Left 1 */}
          <rect x="50" y="150" width="60" height="190" fill="url(#footerBuildingGrad1)" />
          <polygon points="50,150 80,105 110,150" fill="url(#footerBuildingGrad1)" />
          <line x1="80" y1="105" x2="80" y2="70" stroke="#7EA5D1" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Far Tower Left 2 */}
          <rect x="220" y="120" width="80" height="220" fill="url(#footerBuildingGrad1)" />
          <rect x="238" y="90" width="44" height="30" fill="url(#footerBuildingGrad1)" />
          <line x1="260" y1="90" x2="260" y2="55" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.7" />

          {/* Far Center Skyscraper Complex */}
          <rect x="620" y="100" width="115" height="240" fill="url(#footerBuildingGrad1)" />
          <polygon points="620,100 677.5,55 735,100" fill="url(#footerBuildingGrad1)" />
          <line x1="677.5" y1="55" x2="677.5" y2="30" stroke="#7EA5D1" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Far Right Spire Tower */}
          <rect x="1190" y="130" width="85" height="210" fill="url(#footerBuildingGrad1)" />
          <polygon points="1190,130 1232.5,75 1275,130" fill="url(#footerBuildingGrad1)" />
          <line x1="1232.5" y1="75" x2="1232.5" y2="40" stroke="#FFDB5A" strokeWidth="1.5" strokeOpacity="0.7" />

          {/* Far Right Block */}
          <rect x="1360" y="160" width="120" height="180" fill="url(#footerBuildingGrad1)" />
        </g>

        {/* ========================================================= */}
        {/* 2. MIDGROUND DETAILED BUILDINGS (Modern Architecture)      */}
        {/* ========================================================= */}
        <g opacity="0.75">
          {/* Building Left 1: Stepped Highrise with Windows */}
          <path
            d="M15 340V200H45V170H105V200H135V340H15Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          {/* Window Columns */}
          <g stroke="#FFDB5A" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 9">
            <line x1="55" y1="185" x2="55" y2="320" />
            <line x1="75" y1="185" x2="75" y2="320" />
            <line x1="95" y1="185" x2="95" y2="320" />
          </g>

          {/* Building Left 2: Diagonal Faceted Tower */}
          <path
            d="M150 340V160L210 115V340H150Z"
            fill="url(#footerBuildingGrad2)"
            stroke="#FFDB5A"
            strokeWidth="0.9"
            strokeOpacity="0.6"
          />
          {/* Diagonal Architectural Cross-Bracing */}
          <line x1="150" y1="160" x2="210" y2="220" stroke="#7EA5D1" strokeWidth="0.85" strokeOpacity="0.4" />
          <line x1="150" y1="220" x2="210" y2="280" stroke="#7EA5D1" strokeWidth="0.85" strokeOpacity="0.4" />
          <line x1="210" y1="115" x2="150" y2="175" stroke="#7EA5D1" strokeWidth="0.85" strokeOpacity="0.4" />
          <line x1="210" y1="175" x2="150" y2="235" stroke="#7EA5D1" strokeWidth="0.85" strokeOpacity="0.4" />

          {/* Building 3: Terraced Modern Office Tower */}
          <path
            d="M320 340V180H350V150H395V115H425V150H455V340H320Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <line x1="410" y1="115" x2="410" y2="75" stroke="#FFDB5A" strokeWidth="1.4" strokeOpacity="0.8" />
          <circle cx="410" cy="75" r="1.8" fill="#FFDB5A" />

          {/* Center Mega Skyscraper (Under Active Construction) */}
          <path
            d="M740 340V105H860V340H740Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="1.1"
            strokeOpacity="0.6"
          />
          {/* Exposed Top Structural Steel Skeleton */}
          <rect
            x="755"
            y="75"
            width="90"
            height="30"
            fill="none"
            stroke="#FFDB5A"
            strokeWidth="1.1"
            strokeOpacity="0.75"
            strokeDasharray="6 3"
          />
          <line x1="775" y1="75" x2="775" y2="105" stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.6" />
          <line x1="800" y1="75" x2="800" y2="105" stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.6" />
          <line x1="825" y1="75" x2="825" y2="105" stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.6" />
          <line x1="755" y1="90" x2="845" y2="90" stroke="#FFDB5A" strokeWidth="0.9" strokeOpacity="0.6" />

          {/* Vertical Glass Mullions & Window Lights */}
          <g stroke="#7EA5D1" strokeWidth="0.75" strokeOpacity="0.35">
            <line x1="765" y1="115" x2="765" y2="330" />
            <line x1="785" y1="115" x2="785" y2="330" />
            <line x1="805" y1="115" x2="805" y2="330" />
            <line x1="825" y1="115" x2="825" y2="330" />
            <line x1="845" y1="115" x2="845" y2="330" />
          </g>
          {/* Illuminated Architectural Windows */}
          <rect x="762" y="140" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.75" />
          <rect x="802" y="155" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.85" />
          <rect x="822" y="190" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.7" />
          <rect x="782" y="220" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.6" />
          <rect x="842" y="170" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.75" />
          <rect x="762" y="240" width="7" height="4.5" rx="0.5" fill="#FFDB5A" opacity="0.65" />

          {/* Right Side Twin Towers with Skybridge */}
          <path
            d="M1260 340V135H1320V340H1260Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="0.85"
            strokeOpacity="0.5"
          />
          <path
            d="M1355 340V120H1415V340H1355Z"
            fill="url(#footerBuildingGrad2)"
            stroke="#FFDB5A"
            strokeWidth="0.85"
            strokeOpacity="0.5"
          />
          {/* Connecting Skybridge */}
          <rect
            x="1320"
            y="185"
            width="35"
            height="18"
            fill="url(#footerBuildingGrad1)"
            stroke="#FFDB5A"
            strokeWidth="0.85"
            strokeOpacity="0.7"
          />
          <line x1="1320" y1="194" x2="1355" y2="194" stroke="#7EA5D1" strokeWidth="0.8" strokeOpacity="0.5" />
          {/* Spire with beacon */}
          <line x1="1385" y1="120" x2="1385" y2="65" stroke="#FFDB5A" strokeWidth="1.3" strokeOpacity="0.8" />
          <circle cx="1385" cy="65" r="2.2" fill="#FFDB5A" className="animate-pulse" />

          {/* Far Right Corner Building */}
          <path
            d="M1455 340V175H1570V340H1455Z"
            fill="url(#footerBuildingGrad1)"
            stroke="#5D85B3"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
        </g>

        {/* ========================================================= */}
        {/* 3. TOWER CRANES (PROMINENT CONSTRUCTION VECTOR SHAPES)    */}
        {/* ========================================================= */}

        {/* ===== CRANE 1 (LEFT-CENTER TOWER CRANE WITH CARGO BEAM) ===== */}
        <g>
          {/* Vertical Mast Tower */}
          <rect
            x="548"
            y="60"
            width="11"
            height="280"
            fill="#182C48"
            stroke="#FFDB5A"
            strokeWidth="0.9"
            strokeOpacity="0.85"
          />
          {/* Mast Lattice Cross-Braces */}
          <g stroke="#FFDB5A" strokeWidth="0.75" strokeOpacity="0.75">
            <line x1="548" y1="72" x2="559" y2="87" />
            <line x1="548" y1="87" x2="559" y2="72" />
            <line x1="548" y1="87" x2="559" y2="102" />
            <line x1="548" y1="102" x2="559" y2="87" />
            <line x1="548" y1="102" x2="559" y2="117" />
            <line x1="548" y1="117" x2="559" y2="102" />
            <line x1="548" y1="117" x2="559" y2="132" />
            <line x1="548" y1="132" x2="559" y2="117" />
            <line x1="548" y1="132" x2="559" y2="147" />
            <line x1="548" y1="147" x2="559" y2="132" />
            <line x1="548" y1="147" x2="559" y2="162" />
            <line x1="548" y1="162" x2="559" y2="147" />
            <line x1="548" y1="162" x2="559" y2="177" />
            <line x1="548" y1="177" x2="559" y2="162" />
            <line x1="548" y1="177" x2="559" y2="192" />
            <line x1="548" y1="192" x2="559" y2="177" />
            <line x1="548" y1="192" x2="559" y2="207" />
            <line x1="548" y1="207" x2="559" y2="192" />
            <line x1="548" y1="207" x2="559" y2="222" />
            <line x1="548" y1="222" x2="559" y2="207" />
            <line x1="548" y1="222" x2="559" y2="237" />
            <line x1="548" y1="237" x2="559" y2="222" />
            <line x1="548" y1="237" x2="559" y2="252" />
            <line x1="548" y1="252" x2="559" y2="237" />
            <line x1="548" y1="252" x2="559" y2="267" />
            <line x1="548" y1="267" x2="559" y2="252" />
          </g>

          {/* Slewing Operator Cabin */}
          <rect x="559" y="56" width="10" height="11" rx="1.5" fill="#FFDB5A" fillOpacity="0.9" />
          <rect x="562" y="58" width="5" height="5" rx="0.5" fill="#12223B" />

          {/* Tower Apex / Mast Head */}
          <polygon points="548,60 553.5,25 559,60" fill="#1B3150" stroke="#FFDB5A" strokeWidth="1.2" />
          {/* Blinking Aviation Hazard Light */}
          <circle cx="553.5" cy="25" r="2.8" fill="#EF4444" />
          <circle cx="553.5" cy="25" r="6" fill="#EF4444" opacity="0.35" className="animate-ping" />

          {/* Counter-Jib (Left) */}
          <line x1="470" y1="57" x2="559" y2="57" stroke="#FFDB5A" strokeWidth="2" />
          <line x1="470" y1="62" x2="559" y2="62" stroke="#FFDB5A" strokeWidth="1.2" />
          <g stroke="#FFDB5A" strokeWidth="0.75" strokeOpacity="0.7">
            <line x1="475" y1="57" x2="490" y2="62" />
            <line x1="490" y1="57" x2="505" y2="62" />
            <line x1="505" y1="57" x2="520" y2="62" />
            <line x1="520" y1="57" x2="535" y2="62" />
            <line x1="535" y1="57" x2="550" y2="62" />
          </g>
          {/* Concrete Counterweight Slabs */}
          <rect x="470" y="62" width="18" height="13" rx="1" fill="#FFDB5A" stroke="#12223B" strokeWidth="1" />
          <line x1="479" y1="62" x2="479" y2="75" stroke="#12223B" strokeWidth="0.9" />
          {/* Counter-jib Stay Cable */}
          <line x1="553.5" y1="25" x2="474" y2="57" stroke="#FFDB5A" strokeWidth="1.3" strokeOpacity="0.9" />

          {/* Working Jib (Right): Spanning across above the buildings */}
          <line x1="559" y1="57" x2="735" y2="57" stroke="#FFDB5A" strokeWidth="2" />
          <line x1="559" y1="63" x2="735" y2="63" stroke="#FFDB5A" strokeWidth="1.2" />
          {/* Lattice Web Trusses */}
          <g stroke="#FFDB5A" strokeWidth="0.75" strokeOpacity="0.75">
            <line x1="560" y1="57" x2="575" y2="63" />
            <line x1="575" y1="57" x2="590" y2="63" />
            <line x1="590" y1="57" x2="605" y2="63" />
            <line x1="605" y1="57" x2="620" y2="63" />
            <line x1="620" y1="57" x2="635" y2="63" />
            <line x1="635" y1="57" x2="650" y2="63" />
            <line x1="650" y1="57" x2="665" y2="63" />
            <line x1="665" y1="57" x2="680" y2="63" />
            <line x1="680" y1="57" x2="695" y2="63" />
            <line x1="695" y1="57" x2="710" y2="63" />
            <line x1="710" y1="57" x2="725" y2="63" />
            <line x1="725" y1="57" x2="735" y2="63" />
          </g>
          {/* Jib Stay Cables */}
          <line x1="553.5" y1="25" x2="635" y2="57" stroke="#FFDB5A" strokeWidth="1.3" strokeOpacity="0.9" />
          <line x1="553.5" y1="25" x2="700" y2="57" stroke="#FFDB5A" strokeWidth="1.3" strokeOpacity="0.9" />
          <circle cx="735" cy="57" r="1.8" fill="#FFDB5A" />

          {/* Trolley, Hoist Cable & Suspended Construction Cargo */}
          <g>
            {/* Trolley Unit */}
            <rect x="645" y="63" width="11" height="4.5" rx="0.5" fill="#FFDB5A" />
            {/* Hoist Cable */}
            <line x1="650.5" y1="67.5" x2="650.5" y2="116" stroke="#FFDB5A" strokeWidth="1.1" strokeOpacity="0.95" />
            {/* Hook Block Assembly */}
            <polygon points="647,116 654,116 650.5,121" fill="#FFDB5A" />
            <path
              d="M650.5 121V125.5C650.5 127.5 648.5 127.5 647.5 126.5"
              stroke="#FFDB5A"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Heavy Rigging Slings */}
            <line x1="650.5" y1="125.5" x2="630" y2="133" stroke="#CAD5E2" strokeWidth="0.9" />
            <line x1="650.5" y1="125.5" x2="671" y2="133" stroke="#CAD5E2" strokeWidth="0.9" />
            {/* Suspended Steel Girder Beam */}
            <rect x="624" y="133" width="53" height="3.2" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.6" />
            <rect x="626.5" y="136.2" width="48" height="5.5" fill="#243D61" stroke="#FFDB5A" strokeWidth="0.6" />
            <rect x="624" y="141.7" width="53" height="3.2" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.6" />
            {/* Golden Girder Rivets */}
            <circle cx="632" cy="139" r="1.1" fill="#FFDB5A" />
            <circle cx="644" cy="139" r="1.1" fill="#FFDB5A" />
            <circle cx="657" cy="139" r="1.1" fill="#FFDB5A" />
            <circle cx="669" cy="139" r="1.1" fill="#FFDB5A" />
          </g>
        </g>

        {/* ===== CRANE 2 (RIGHT CLIMBING CRANE ATOP SKYSCRAPER) ===== */}
        <g>
          {/* Mast Tower */}
          <rect
            x="1052"
            y="42"
            width="10"
            height="298"
            fill="#182C48"
            stroke="#7EA5D1"
            strokeWidth="0.9"
            strokeOpacity="0.85"
          />
          {/* Mast Lattice Braces */}
          <g stroke="#7EA5D1" strokeWidth="0.7" strokeOpacity="0.7">
            <line x1="1052" y1="52" x2="1062" y2="67" />
            <line x1="1052" y1="67" x2="1062" y2="52" />
            <line x1="1052" y1="67" x2="1062" y2="82" />
            <line x1="1052" y1="82" x2="1062" y2="67" />
            <line x1="1052" y1="82" x2="1062" y2="97" />
            <line x1="1052" y1="97" x2="1062" y2="82" />
            <line x1="1052" y1="97" x2="1062" y2="112" />
            <line x1="1052" y1="112" x2="1062" y2="97" />
            <line x1="1052" y1="112" x2="1062" y2="127" />
            <line x1="1052" y1="127" x2="1062" y2="112" />
            <line x1="1052" y1="127" x2="1062" y2="142" />
            <line x1="1052" y1="142" x2="1062" y2="127" />
            <line x1="1052" y1="142" x2="1062" y2="157" />
            <line x1="1052" y1="157" x2="1062" y2="142" />
          </g>

          {/* Cabin */}
          <rect x="1042" y="39" width="10" height="10" rx="1.2" fill="#7EA5D1" />

          {/* Crane 2 Apex */}
          <polygon points="1052,42 1057,10 1062,42" fill="#1B3150" stroke="#7EA5D1" strokeWidth="1.1" />
          <circle cx="1057" cy="10" r="2.8" fill="#FFDB5A" />
          <circle cx="1057" cy="10" r="6" fill="#FFDB5A" opacity="0.4" className="animate-ping" />

          {/* Working Jib extending left toward the mega skyscraper: 1052 to 915 */}
          <line x1="915" y1="38" x2="1052" y2="38" stroke="#7EA5D1" strokeWidth="2" />
          <line x1="915" y1="44" x2="1052" y2="44" stroke="#7EA5D1" strokeWidth="1.2" />
          <g stroke="#7EA5D1" strokeWidth="0.7" strokeOpacity="0.7">
            <line x1="930" y1="38" x2="915" y2="44" />
            <line x1="945" y1="38" x2="930" y2="44" />
            <line x1="960" y1="38" x2="945" y2="44" />
            <line x1="975" y1="38" x2="960" y2="44" />
            <line x1="990" y1="38" x2="975" y2="44" />
            <line x1="1005" y1="38" x2="990" y2="44" />
            <line x1="1020" y1="38" x2="1005" y2="44" />
            <line x1="1035" y1="38" x2="1020" y2="44" />
            <line x1="1050" y1="38" x2="1035" y2="44" />
          </g>
          {/* Tie Cable */}
          <line x1="1057" y1="10" x2="945" y2="38" stroke="#7EA5D1" strokeWidth="1.3" strokeOpacity="0.85" />

          {/* Counter-Jib (Right): 1062 to 1130 */}
          <line x1="1062" y1="38" x2="1130" y2="38" stroke="#7EA5D1" strokeWidth="2" />
          <line x1="1062" y1="43" x2="1130" y2="43" stroke="#7EA5D1" strokeWidth="1.2" />
          {/* Counterweights */}
          <rect x="1112" y="43" width="18" height="12" rx="1" fill="#7EA5D1" stroke="#12223B" strokeWidth="0.9" />
          <line x1="1057" y1="10" x2="1125" y2="38" stroke="#7EA5D1" strokeWidth="1.3" strokeOpacity="0.85" />

          {/* Hoist Trolley & Load over Central Construction */}
          <rect x="962" y="44" width="9" height="3.5" rx="0.5" fill="#FFDB5A" />
          <line x1="966.5" y1="47.5" x2="966.5" y2="88" stroke="#FFDB5A" strokeWidth="1" strokeOpacity="0.9" />
          <polygon points="963.5,88 969.5,88 966.5,92" fill="#FFDB5A" />
          <line x1="966.5" y1="92" x2="952" y2="99" stroke="#CAD5E2" strokeWidth="0.8" />
          <line x1="966.5" y1="92" x2="981" y2="99" stroke="#CAD5E2" strokeWidth="0.8" />
          <rect x="946" y="99" width="42" height="4.5" rx="0.5" fill="#FFDB5A" stroke="#12223B" strokeWidth="0.6" />
        </g>

        {/* Bottom Fade Mask to ensure bottom text remains 100% legible */}
        <rect x="0" y="160" width="1600" height="180" fill="url(#bottomFadeMask)" />

        {/* Crisp Golden Architectural Horizon Datum Line */}
        <line x1="0" y1="339" x2="1600" y2="339" stroke="#FFDB5A" strokeWidth="1.2" strokeOpacity="0.25" />
      </svg>
    </div>
  );
}
