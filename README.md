# Buildora — Enterprise Multi-Role Construction & Architectural Solutions Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-buildorabd.vercel.app-FFDB5A?style=for-the-badge&logo=vercel&logoColor=12223B)](https://buildorabd.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Buildora** is a premier, full-stack enterprise web application designed for modern commercial, residential, and industrial construction operations. It seamlessly bridges a high-converting public corporate marketing experience with an enterprise-grade, **5-role operations management hub**.

---

## 🌐 Live Preview

- **Production URL**: [https://buildorabd.vercel.app/](https://buildorabd.vercel.app/)
- **Product Requirements Document (PRD)**: [PRD.md](./PRD.md)

---

## 🚀 Key Architectural Pillars

### 1. Unified 5-Role Dashboard Hub (`/dashboard`)
Each role features custom navigation, dedicated workflows, role-specific metrics, and distinct branding:

| Portal | Role | Core Modules & Workflows | Signature Theme |
|---|---|---|---|
| 🛡️ **Admin Dashboard** | Super Admin / Executive | Operations overview, Leads CRM, Project budgets, Site Engineers, Billing & Invoices, Visual CMS manager, and System settings. | White / `#FFDB5A` Gold |
| 👤 **Client Dashboard** | Property Owner / Investor | Live 3D & photographic site timeline, Milestone escrow payments, Scope Change Orders, Encrypted Blueprint Vault, and Direct Engineer Chat. | `#00C975` Emerald Green |
| ⛑️ **Engineer Portal** | Lead Site Engineer (PE) | Daily manpower & weather shift logs, Material purchase requisitions, OSHA 30 safety & PPE audits, and IFC drawing viewer. | `#2563EB` Royal Blue |
| 💼 **Subcontractor Portal** | Sub-Trade Contractor | Division 06 contracted scope packages, Daily crew headcounts & craftsman labor hours, AIA G702 progress billing with 10% retainage, and Punch list QA. | `#F97316` Flame Orange |
| 🚚 **Supplier Portal** | Material Supplier & Logistics | GC purchase orders, Real-time GPS fleet tracking with electronic Proof of Delivery (e-POD), ASTM/ACI inventory, and certified Mill Test Reports (MTRs). | `#06B6D4` Ocean Cyan |

### 2. High-Converting Public Marketing Experience
- **Hero & Metrics**: 25+ years experience, 480+ completed builds, and 99.4% safety compliance.
- **Service Divisions**: Residential, commercial, industrial, renovation, and structural engineering with dynamic slug routing.
- **Projects Showcase**: Interactive case studies with verified progress galleries and specifications.
- **Interactive Features**: Dynamic estimation quote builders, cinematic video showcases, and client reviews.
- **Architectural Skyline Footer**: Custom vector backdrop with validated newsletter subscription and quick-access directory.

### 3. Global Productivity & Command Palette (`Ctrl+K`)
- Omnipresent keyboard-accessible command center (`Ctrl+K` or `Cmd+K`).
- Instant fuzzy search across projects, documentation, portals, and trade actions.
- Header **Quick Portal Switcher** dropdown for 1-click transitions between trade roles.

### 4. Headless Visual CMS Manager
- Live visual editing for marketing headlines, catalogues, team rosters, and project portfolios.
- Instant preview and section state management without redeploying code.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, SSR & Static Site Generation)
- **UI Library**: [React 19](https://react.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across all components and data models)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Sliders**: Swiper.js, CSS Keyframes, Glassmorphism backdrop-blur effects

---

## 📂 Project Structure

```
Buildora
├── PRD.md                         # Full Product Requirements Document
├── src
│   ├── app                        # Next.js App Router (70+ pre-rendered routes)
│   │   ├── page.tsx               # Public Homepage
│   │   ├── about / about-us       # Company History & Leadership
│   │   ├── services / [slug]      # Specialized Construction Divisions
│   │   ├── projects / [slug]      # Portfolio & Case Studies
│   │   ├── blog / [slug]          # Technical Articles
│   │   ├── contact / contact-us   # Quote Builder & Inquiries
│   │   └── dashboard              # 5 Enterprise Role Portals
│   │       ├── admin              # Super Admin Operations & CMS
│   │       ├── client             # Property Owner Portal
│   │       ├── engineer           # Field Engineering & OSHA Hub
│   │       ├── subcontractor      # Trade Work Packages & AIA Pay Apps
│   │       └── supplier           # Logistics, Fleet GPS & MTRs
│   ├── components
│   │   ├── layout                 # Header, Footer, Navbar, SocialIcons
│   │   ├── home                   # Hero, About, Services, Projects, Team, FAQ, etc.
│   │   └── dashboard              # DashboardHeader, DashboardSidebar, CommandPalette
│   └── data                       # Mock schemas, CMS catalogues & seed fixtures
└── public                         # Architectural SVG icons, blueprints, and assets
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YEL-59/Buildora.git
   cd Buildora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Verify type checking and compile static pages:
```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
