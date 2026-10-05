const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

// 1. Build the animated SVG (with both CSS keyframes and SMIL fallback)
function generateAnimatedSvg() {
  const width = 260;
  const height = 54;

  let jibTruss = '';
  for (let x = 16; x < 248; x += 10) {
    jibTruss += `<line x1="${x}" y1="8.5" x2="${x + 5}" y2="11" stroke="#FFDB5A" stroke-width="0.65" opacity="0.8" />`;
    jibTruss += `<line x1="${x + 5}" y1="11" x2="${x + 10}" y2="8.5" stroke="#FFDB5A" stroke-width="0.65" opacity="0.8" />`;
  }

  let mastTruss = '';
  for (let y = 14; y < 45; y += 6) {
    mastTruss += `<line x1="12" y1="${y}" x2="16.5" y2="${y + 6}" stroke="#FFDB5A" stroke-width="0.75" />`;
    mastTruss += `<line x1="12" y1="${y + 6}" x2="16.5" y2="${y}" stroke="#FFDB5A" stroke-width="0.75" />`;
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFF3A8" />
    <stop offset="35%" stop-color="#FFDB5A" />
    <stop offset="70%" stop-color="#F5C024" />
    <stop offset="100%" stop-color="#E29E0B" />
  </linearGradient>

  <linearGradient id="textGold" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#FFE57A" />
    <stop offset="45%" stop-color="#FFDB5A" />
    <stop offset="100%" stop-color="#F0B51A" />
  </linearGradient>

  <linearGradient id="craneSteel" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#243D61" />
    <stop offset="60%" stop-color="#14243B" />
    <stop offset="100%" stop-color="#0B1524" />
  </linearGradient>

  <filter id="craneGlow" x="-5%" y="-5%" width="110%" height="110%">
    <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#050C17" flood-opacity="0.55" />
  </filter>

  <style>
    @keyframes travelRightToLeft {
      0% { transform: translateX(0px); }
      10% { transform: translateX(0px); }
      50% { transform: translateX(-190px); }
      65% { transform: translateX(-190px); }
      92% { transform: translateX(0px); }
      100% { transform: translateX(0px); }
    }

    @keyframes swayCargo {
      0% { transform: rotate(0deg); }
      12% { transform: rotate(0deg); }
      20% { transform: rotate(2.8deg); }
      35% { transform: rotate(2.2deg); }
      48% { transform: rotate(-1.5deg); }
      52% { transform: rotate(0.8deg); }
      56% { transform: rotate(-0.3deg); }
      60% { transform: rotate(0deg); }
      65% { transform: rotate(0deg); }
      70% { transform: rotate(-2.8deg); }
      82% { transform: rotate(-1.8deg); }
      90% { transform: rotate(1.2deg); }
      95% { transform: rotate(-0.4deg); }
      100% { transform: rotate(0deg); }
    }

    .crane-moving-assembly {
      animation: travelRightToLeft 6s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    }

    .crane-suspended-girder {
      animation: swayCargo 6s ease-in-out infinite;
      transform-origin: 224.5px 13px;
    }
  </style>
</defs>

<!-- Static Crane Structure -->
<g filter="url(#craneGlow)">
  <!-- Tower Mast -->
  <path d="M12 49V13.5H16.5V49H12Z" fill="url(#craneSteel)" />
  <line x1="12" y1="20" x2="16.5" y2="20" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="26" x2="16.5" y2="26" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="32" x2="16.5" y2="32" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="38" x2="16.5" y2="38" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="44" x2="16.5" y2="44" stroke="#FFDB5A" stroke-width="0.8" />
  ${mastTruss}

  <!-- Mast Base Foundation Pad -->
  <rect x="9.5" y="47.5" width="9.5" height="2.5" rx="0.5" fill="url(#goldGrad)" />

  <!-- Operator Cabin & Slewing Ring -->
  <rect x="15" y="11.5" width="4.5" height="4" rx="0.6" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
  <rect x="16.5" y="12.5" width="2" height="1.8" rx="0.3" fill="#FFDB5A" />
  <rect x="11.5" y="13.5" width="6" height="1.2" rx="0.3" fill="url(#goldGrad)" />

  <!-- Crane Apex -->
  <path d="M11.5 13.5L14.2 3.2L17 13.5Z" fill="url(#craneSteel)" />
  <circle cx="14.2" cy="3.2" r="1.2" fill="url(#goldGrad)" />

  <!-- Rear Counter-Jib & Counterweight -->
  <line x1="12" y1="9.8" x2="3.5" y2="9.8" stroke="#FFDB5A" stroke-width="1.6" stroke-linecap="round" />
  <line x1="14.2" y1="3.2" x2="4.5" y2="9.8" stroke="#CAD5E2" stroke-width="0.8" />
  <rect x="2.5" y="10.8" width="5" height="4" rx="0.6" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="5" y1="10.8" x2="5" y2="14.8" stroke="#FFDB5A" stroke-width="0.6" />

  <!-- Full-Spanning Jib (Boom) -->
  <line x1="14" y1="8.5" x2="253" y2="8.5" stroke="#FFDB5A" stroke-width="1.5" stroke-linecap="round" />
  <line x1="16.5" y1="11" x2="251" y2="11" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
  <path d="M251 11L254 8.5L251 8.5Z" fill="#FFDB5A" />
  <circle cx="254" cy="8.5" r="1" fill="#FF4444" />
  ${jibTruss}

  <!-- Tension Stay Cables -->
  <line x1="14.2" y1="3.2" x2="65" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.85" />
  <line x1="14.2" y1="3.2" x2="125" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.85" />
  <line x1="14.2" y1="3.2" x2="185" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.75" />
  <line x1="14.2" y1="3.2" x2="235" y2="8.5" stroke="#CAD5E2" stroke-width="0.65" opacity="0.65" />

  <!-- Construction Foundation Tiers (Landing Site) -->
  <path d="M211 49V41H238V49H211Z" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="216" y1="41" x2="216" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="224.5" y1="41" x2="224.5" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="233" y1="41" x2="233" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <rect x="209" y="39.5" width="31" height="1.6" rx="0.3" fill="url(#goldGrad)" />
</g>

<!-- Animated Moving Trolley, Cable, Hook and Girder -->
<g class="crane-moving-assembly">
  <animateTransform
    attributeName="transform"
    type="translate"
    values="0 0; 0 0; -190 0; -190 0; 0 0; 0 0"
    keyTimes="0; 0.10; 0.50; 0.65; 0.92; 1"
    keySplines="0.4 0 0.6 1; 0.42 0 0.58 1; 0 0 1 1; 0.42 0 0.58 1; 0 0 1 1"
    calcMode="spline"
    dur="6s"
    repeatCount="indefinite"
  />

  <!-- Trolley Riding the Boom -->
  <rect x="221" y="10.8" width="7" height="2.2" rx="0.5" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.7" />
  <circle cx="222.5" cy="11.9" r="0.6" fill="#FFDB5A" />
  <circle cx="226.5" cy="11.9" r="0.6" fill="#FFDB5A" />

  <!-- Suspended Cargo with gentle sway -->
  <g class="crane-suspended-girder">
    <!-- Hoist Cable -->
    <line x1="224.5" y1="13" x2="224.5" y2="19.5" stroke="#CAD5E2" stroke-width="1.1" />

    <!-- Pulley Block -->
    <path d="M222.5 19.5H226.5L225.8 22.8H223.2L222.5 19.5Z" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <circle cx="224.5" cy="20.8" r="0.8" fill="url(#goldGrad)" />
    <!-- Curved Hook -->
    <path d="M224.5 22.8V24.5C224.5 25.5 223.6 26.2 222.8 25.6C222.3 25.2 222.3 24.3 223.1 23.9" stroke="#FFDB5A" stroke-width="1.3" stroke-linecap="round" fill="none" />

    <!-- Slanted Lifting Cables -->
    <line x1="224.5" y1="25.2" x2="209" y2="28.8" stroke="#CAD5E2" stroke-width="1.1" stroke-linecap="round" />
    <line x1="224.5" y1="25.2" x2="240" y2="28.8" stroke="#CAD5E2" stroke-width="1.1" stroke-linecap="round" />

    <!-- STEEL GIRDER WITH 4 GOLDEN RIVETS -->
    <rect x="207" y="28.5" width="35" height="1.8" rx="0.4" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <rect x="208.5" y="30.3" width="32" height="4.5" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <rect x="207" y="34.8" width="35" height="1.8" rx="0.4" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <circle cx="213" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="219.5" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="226" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="232.5" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
  </g>
</g>

<!-- Typography: BUILDORA -->
<!-- B -->
<path d="M26 18.5H38.5C42.2 18.5 44.5 20.4 44.5 23.2C44.5 25.2 43.2 26.8 41.2 27.5C44 28.3 45.5 30.2 45.5 33C45.5 36.5 42.5 39 38.5 39H26V18.5ZM31 27H37.8C39.3 27 40.3 26 40.3 24.6C40.3 23.2 39.3 22.2 37.8 22.2H31V27ZM31 35.2H38.2C40 35.2 41 34.2 41 32.5C41 31 40 30 38.2 30H31V35.2Z" fill="#FFFFFF"/>
<!-- U -->
<path d="M49 18.5H54V30.5C54 33.8 55.8 35.2 59 35.2C62.2 35.2 64 33.8 64 30.5V18.5H69V30.2C69 36.2 65 39.3 59 39.3C53 39.3 49 36.2 49 30.2V18.5Z" fill="#FFFFFF"/>
<!-- I -->
<path d="M74 18.5H79V39H74V18.5Z" fill="#FFFFFF"/>
<!-- L -->
<path d="M84 18.5H89V35H99.5V39H84V18.5Z" fill="#FFFFFF"/>
<!-- D -->
<path d="M104 18.5H115.5C122.2 18.5 126 22.8 126 28.8C126 34.8 122.2 39 115.5 39H104V18.5ZM109 35H115.2C119.2 35 121.5 32 121.5 28.8C121.5 25.5 119.2 22.5 115.2 22.5H109V35Z" fill="#FFFFFF"/>
<!-- O -->
<path d="M142.5 18.2C149.2 18.2 154.2 22.8 154.2 28.8C154.2 34.8 149.2 39.3 142.5 39.3C135.8 39.3 130.8 34.8 130.8 28.8C130.8 22.8 135.8 18.2 142.5 18.2ZM142.5 35.2C146.8 35.2 149.5 32 149.5 28.8C149.5 25.5 146.8 22.2 142.5 22.2C138.2 22.2 135.5 25.5 135.5 28.8C135.5 32 138.2 35.2 142.5 35.2Z" fill="url(#textGold)"/>
<!-- R -->
<path d="M159 18.5H170C174.2 18.5 177 20.8 177 24.4C177 27.2 175 29.2 172.5 30L178 39H172.5L167.5 30.5H163.8V39H159V18.5ZM163.8 26.8H169.5C171.5 26.8 172.5 25.8 172.5 24.4C172.5 22.8 171.5 22.2 169.5 22.2H163.8V26.8Z" fill="url(#textGold)"/>
<!-- A -->
<path d="M190.5 18.5H195.2L204 39H198.8L197 34.5H188.8L187 39H181.8L190.5 18.5ZM195.5 30.5L192.8 23.5L190.2 30.5H195.5Z" fill="url(#textGold)"/>

<!-- Subtitle -->
<g opacity="0.95">
  <line x1="27" y1="46" x2="35" y2="46" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
  <circle cx="37.5" cy="46" r="0.9" fill="#FFDB5A" />
  <text x="43" y="47.6" fill="#D3DCE6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="6.5" font-weight="700" letter-spacing="3.2">CONSTRUCTION &amp; ARCHITECTURE</text>
  <circle cx="196" cy="46" r="0.9" fill="#FFDB5A" />
  <line x1="198.5" y1="46" x2="204.5" y2="46" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
</g>
</svg>`;
}

// 2. Function to generate a static SVG frame at specific trolley offset (dx) and sway angle (angleDeg)
function generateFrameSvg(dx, angleDeg) {
  const width = 260;
  const height = 54;

  let jibTruss = '';
  for (let x = 16; x < 248; x += 10) {
    jibTruss += `<line x1="${x}" y1="8.5" x2="${x + 5}" y2="11" stroke="#FFDB5A" stroke-width="0.65" opacity="0.8" />`;
    jibTruss += `<line x1="${x + 5}" y1="11" x2="${x + 10}" y2="8.5" stroke="#FFDB5A" stroke-width="0.65" opacity="0.8" />`;
  }

  let mastTruss = '';
  for (let y = 14; y < 45; y += 6) {
    mastTruss += `<line x1="12" y1="${y}" x2="16.5" y2="${y + 6}" stroke="#FFDB5A" stroke-width="0.75" />`;
    mastTruss += `<line x1="12" y1="${y + 6}" x2="16.5" y2="${y}" stroke="#FFDB5A" stroke-width="0.75" />`;
  }

  return `<svg width="${width * 2}" height="${height * 2}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFF3A8" />
    <stop offset="35%" stop-color="#FFDB5A" />
    <stop offset="70%" stop-color="#F5C024" />
    <stop offset="100%" stop-color="#E29E0B" />
  </linearGradient>

  <linearGradient id="textGold" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#FFE57A" />
    <stop offset="45%" stop-color="#FFDB5A" />
    <stop offset="100%" stop-color="#F0B51A" />
  </linearGradient>

  <linearGradient id="craneSteel" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#243D61" />
    <stop offset="60%" stop-color="#14243B" />
    <stop offset="100%" stop-color="#0B1524" />
  </linearGradient>
</defs>

<!-- Transparent/Dark background matching Header/Footer -->
<rect width="${width}" height="${height}" fill="#12223B" fill-opacity="0" />

<!-- Static Crane Structure -->
<g>
  <path d="M12 49V13.5H16.5V49H12Z" fill="url(#craneSteel)" />
  <line x1="12" y1="20" x2="16.5" y2="20" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="26" x2="16.5" y2="26" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="32" x2="16.5" y2="32" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="38" x2="16.5" y2="38" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="12" y1="44" x2="16.5" y2="44" stroke="#FFDB5A" stroke-width="0.8" />
  ${mastTruss}

  <rect x="9.5" y="47.5" width="9.5" height="2.5" rx="0.5" fill="url(#goldGrad)" />
  <rect x="15" y="11.5" width="4.5" height="4" rx="0.6" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
  <rect x="16.5" y="12.5" width="2" height="1.8" rx="0.3" fill="#FFDB5A" />
  <rect x="11.5" y="13.5" width="6" height="1.2" rx="0.3" fill="url(#goldGrad)" />

  <path d="M11.5 13.5L14.2 3.2L17 13.5Z" fill="url(#craneSteel)" />
  <circle cx="14.2" cy="3.2" r="1.2" fill="url(#goldGrad)" />

  <line x1="12" y1="9.8" x2="3.5" y2="9.8" stroke="#FFDB5A" stroke-width="1.6" stroke-linecap="round" />
  <line x1="14.2" y1="3.2" x2="4.5" y2="9.8" stroke="#CAD5E2" stroke-width="0.8" />
  <rect x="2.5" y="10.8" width="5" height="4" rx="0.6" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.8" />
  <line x1="5" y1="10.8" x2="5" y2="14.8" stroke="#FFDB5A" stroke-width="0.6" />

  <line x1="14" y1="8.5" x2="253" y2="8.5" stroke="#FFDB5A" stroke-width="1.5" stroke-linecap="round" />
  <line x1="16.5" y1="11" x2="251" y2="11" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
  <path d="M251 11L254 8.5L251 8.5Z" fill="#FFDB5A" />
  <circle cx="254" cy="8.5" r="1" fill="#FF4444" />
  ${jibTruss}

  <line x1="14.2" y1="3.2" x2="65" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.85" />
  <line x1="14.2" y1="3.2" x2="125" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.85" />
  <line x1="14.2" y1="3.2" x2="185" y2="8.5" stroke="#CAD5E2" stroke-width="0.75" opacity="0.75" />
  <line x1="14.2" y1="3.2" x2="235" y2="8.5" stroke="#CAD5E2" stroke-width="0.65" opacity="0.65" />

  <path d="M211 49V41H238V49H211Z" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="216" y1="41" x2="216" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="224.5" y1="41" x2="224.5" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <line x1="233" y1="41" x2="233" y2="49" stroke="#FFDB5A" stroke-width="0.6" />
  <rect x="209" y="39.5" width="31" height="1.6" rx="0.3" fill="url(#goldGrad)" />
</g>

<!-- Moving Trolley + Suspended Cargo with offset dx -->
<g transform="translate(${dx}, 0)">
  <!-- Trolley -->
  <rect x="221" y="10.8" width="7" height="2.2" rx="0.5" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.7" />
  <circle cx="222.5" cy="11.9" r="0.6" fill="#FFDB5A" />
  <circle cx="226.5" cy="11.9" r="0.6" fill="#FFDB5A" />

  <!-- Suspended Girder rotated by angleDeg around (224.5, 13) -->
  <g transform="rotate(${angleDeg}, 224.5, 13)">
    <line x1="224.5" y1="13" x2="224.5" y2="19.5" stroke="#CAD5E2" stroke-width="1.1" />

    <path d="M222.5 19.5H226.5L225.8 22.8H223.2L222.5 19.5Z" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <circle cx="224.5" cy="20.8" r="0.8" fill="url(#goldGrad)" />
    <path d="M224.5 22.8V24.5C224.5 25.5 223.6 26.2 222.8 25.6C222.3 25.2 222.3 24.3 223.1 23.9" stroke="#FFDB5A" stroke-width="1.3" stroke-linecap="round" fill="none" />

    <line x1="224.5" y1="25.2" x2="209" y2="28.8" stroke="#CAD5E2" stroke-width="1.1" stroke-linecap="round" />
    <line x1="224.5" y1="25.2" x2="240" y2="28.8" stroke="#CAD5E2" stroke-width="1.1" stroke-linecap="round" />

    <rect x="207" y="28.5" width="35" height="1.8" rx="0.4" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <rect x="208.5" y="30.3" width="32" height="4.5" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <rect x="207" y="34.8" width="35" height="1.8" rx="0.4" fill="url(#craneSteel)" stroke="#FFDB5A" stroke-width="0.6" />
    <circle cx="213" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="219.5" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="226" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
    <circle cx="232.5" cy="32.55" r="1.3" fill="url(#goldGrad)" stroke="#12223B" stroke-width="0.4" />
  </g>
</g>

<!-- Typography: BUILDORA -->
<path d="M26 18.5H38.5C42.2 18.5 44.5 20.4 44.5 23.2C44.5 25.2 43.2 26.8 41.2 27.5C44 28.3 45.5 30.2 45.5 33C45.5 36.5 42.5 39 38.5 39H26V18.5ZM31 27H37.8C39.3 27 40.3 26 40.3 24.6C40.3 23.2 39.3 22.2 37.8 22.2H31V27ZM31 35.2H38.2C40 35.2 41 34.2 41 32.5C41 31 40 30 38.2 30H31V35.2Z" fill="#FFFFFF"/>
<path d="M49 18.5H54V30.5C54 33.8 55.8 35.2 59 35.2C62.2 35.2 64 33.8 64 30.5V18.5H69V30.2C69 36.2 65 39.3 59 39.3C53 39.3 49 36.2 49 30.2V18.5Z" fill="#FFFFFF"/>
<path d="M74 18.5H79V39H74V18.5Z" fill="#FFFFFF"/>
<path d="M84 18.5H89V35H99.5V39H84V18.5Z" fill="#FFFFFF"/>
<path d="M104 18.5H115.5C122.2 18.5 126 22.8 126 28.8C126 34.8 122.2 39 115.5 39H104V18.5ZM109 35H115.2C119.2 35 121.5 32 121.5 28.8C121.5 25.5 119.2 22.5 115.2 22.5H109V35Z" fill="#FFFFFF"/>
<path d="M142.5 18.2C149.2 18.2 154.2 22.8 154.2 28.8C154.2 34.8 149.2 39.3 142.5 39.3C135.8 39.3 130.8 34.8 130.8 28.8C130.8 22.8 135.8 18.2 142.5 18.2ZM142.5 35.2C146.8 35.2 149.5 32 149.5 28.8C149.5 25.5 146.8 22.2 142.5 22.2C138.2 22.2 135.5 25.5 135.5 28.8C135.5 32 138.2 35.2 142.5 35.2Z" fill="url(#textGold)"/>
<path d="M159 18.5H170C174.2 18.5 177 20.8 177 24.4C177 27.2 175 29.2 172.5 30L178 39H172.5L167.5 30.5H163.8V39H159V18.5ZM163.8 26.8H169.5C171.5 26.8 172.5 25.8 172.5 24.4C172.5 22.8 171.5 22.2 169.5 22.2H163.8V26.8Z" fill="url(#textGold)"/>
<path d="M190.5 18.5H195.2L204 39H198.8L197 34.5H188.8L187 39H181.8L190.5 18.5ZM195.5 30.5L192.8 23.5L190.2 30.5H195.5Z" fill="url(#textGold)"/>

<!-- Subtitle -->
<g opacity="0.95">
  <line x1="27" y1="46" x2="35" y2="46" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
  <circle cx="37.5" cy="46" r="0.9" fill="#FFDB5A" />
  <text x="43" y="47.6" fill="#D3DCE6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="6.5" font-weight="700" letter-spacing="3.2">CONSTRUCTION &amp; ARCHITECTURE</text>
  <circle cx="196" cy="46" r="0.9" fill="#FFDB5A" />
  <line x1="198.5" y1="46" x2="204.5" y2="46" stroke="#FFDB5A" stroke-width="1.2" stroke-linecap="round" />
</g>
</svg>`;
}

async function main() {
  console.log("1. Writing animated public/images/logo.svg...");
  const animSvg = generateAnimatedSvg();
  fs.writeFileSync('public/images/logo.svg', animSvg);
  console.log("   -> public/images/logo.svg written successfully!");

  console.log("2. Generating frames for public/images/logo.gif...");
  const framesDir = path.join(__dirname, 'gif_frames');
  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
  }

  // 48 frames at 12 fps = 4.0 seconds cycle
  const totalFrames = 48;
  for (let i = 0; i < totalFrames; i++) {
    const progress = i / totalFrames;
    let dx = 0;
    let angleDeg = 0;

    // Movement profile:
    // 0.00 to 0.10: wait at right (dx = 0)
    // 0.10 to 0.50: right to left (dx goes from 0 to -190)
    // 0.50 to 0.65: wait at left (dx = -190)
    // 0.65 to 0.95: return left to right (dx goes from -190 to 0)
    // 0.95 to 1.00: wait at right (dx = 0)
    if (progress < 0.10) {
      dx = 0;
      angleDeg = 0;
    } else if (progress < 0.50) {
      const p = (progress - 0.10) / 0.40;
      // Smooth cubic ease in-out
      const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      dx = -190 * ease;
      // Forward tilt when moving left (girder trails behind)
      angleDeg = Math.sin(p * Math.PI) * 2.8;
    } else if (progress < 0.65) {
      dx = -190;
      const settleP = (progress - 0.50) / 0.15;
      angleDeg = Math.sin(settleP * Math.PI * 2) * Math.exp(-settleP * 3) * 1.5;
    } else if (progress < 0.95) {
      const p = (progress - 0.65) / 0.30;
      const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      dx = -190 * (1 - ease);
      // Backward tilt when moving right
      angleDeg = -Math.sin(p * Math.PI) * 2.8;
    } else {
      dx = 0;
      angleDeg = 0;
    }

    const frameSvg = generateFrameSvg(dx, angleDeg);
    const framePath = path.join(framesDir, `frame_${String(i).padStart(3, '0')}.png`);
    await sharp(Buffer.from(frameSvg)).png().toFile(framePath);
  }

  console.log(`   -> Generated ${totalFrames} frames in ${framesDir}`);

  console.log("3. Compiling GIF with ffmpeg...");
  // Using palettegen and paletteuse for maximum quality, crisp colors and transparency
  const gifPath = path.join(process.cwd(), 'public', 'images', 'logo.gif');
  const palettePath = path.join(framesDir, 'palette.png');
  const inputPattern = path.join(framesDir, 'frame_%03d.png').replace(/\\/g, '/');

  // Step A: Generate optimal palette with transparency
  execSync(`ffmpeg -y -framerate 12 -i "${inputPattern}" -vf "palettegen=reserve_transparent=1" "${palettePath}"`, { stdio: 'inherit' });

  // Step B: Encode GIF with palette
  execSync(`ffmpeg -y -framerate 12 -i "${inputPattern}" -i "${palettePath}" -lavfi "paletteuse=alpha_threshold=128" -loop 0 "${gifPath}"`, { stdio: 'inherit' });

  console.log(`   -> Successfully created ${gifPath}!`);
}

main().catch(err => {
  console.error("Error generating assets:", err);
  process.exit(1);
});
