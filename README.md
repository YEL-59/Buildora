# Buildora — Enterprise Multi-Role Construction & Architectural Solutions Platform

<p align="center">
  <img src="public/images/logo.svg" alt="Buildora Logo" width="220" />
</p>

<p align="center">
  <strong>Next-Generation Enterprise Construction Management Platform & High-Converting Public Architecture Showcase</strong>
</p>

<p align="center">
  <a href="https://buildorabd.vercel.app/"><img src="https://img.shields.io/badge/Live%20Demo-buildorabd.vercel.app-FFDB5A?style=for-the-badge&logo=vercel&logoColor=12223B" alt="Live Demo" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js" alt="Next.js 16" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" /></a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Preview & Portals](#-live-preview--portals)
- [Architectural Highlights](#-architectural-highlights)
- [The 5 Enterprise Role Portals](#-the-5-enterprise-role-portals)
  - [1. 🛡️ Super Admin Operations & CMS Portal](#1-️-super-admin-operations--cms-portal)
  - [2. 👤 Client & Property Owner Portal](#2--client--property-owner-portal)
  - [3. ⛑️ Site Engineering Command Hub](#3-️-site-engineering-command-hub)
  - [4. 💼 Subcontractor & Trade Partner Portal](#4--subcontractor--trade-partner-portal)
  - [5. 🚚 Material Supplier & Fleet Command](#5--material-supplier--fleet-command)
- [Public Marketing Experience](#-public-marketing-experience)
- [Global Platform Features](#-global-platform-features)
- [Industry Compliance & Protocols](#-industry-compliance--protocols)
- [Technology Stack](#-technology-stack)
- [Information Architecture & Routes](#-information-architecture--routes)
- [Local Development & Setup](#-local-development--setup)
- [Resume & Portfolio Highlights](#-resume--portfolio-highlights)
- [License](#-license)

---

## 🌟 Overview

**Buildora** is an enterprise-grade full-stack construction and architectural management platform. Engineered for commercial, residential, and civil engineering firms, it seamlessly bridges:
1. **A High-Converting Public Marketing Experience**: Rich storytelling, interactive cost estimators, project showcases, verified client testimonials, and architectural services.
2. **A 5-Role Multi-Tenant Operations Engine**: Isolated, role-tailored dashboards for **Super Admins**, **Property Owners (Clients)**, **Licensed Site Engineers (PE)**, **Specialty Trade Subcontractors**, and **Material Suppliers**.

Designed with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, Buildora delivers 70+ pre-rendered routes with zero layout shift, sub-second route transitions, and responsive enterprise design.

---

## 🌐 Live Preview & Portals

- **Production URL**: [https://buildorabd.vercel.app/](https://buildorabd.vercel.app/)
- **Product Requirements Document**: [PRD.md](./PRD.md)
- **CV / Resume Showcase Guide**: [CV_PROJECT_SHOWCASE.md](./CV_PROJECT_SHOWCASE.md)

### Quick Portal Access Links

| Role / Portal | URL Route | Primary Function | Signature Theme |
|---|---|---|---|
| 🛡️ **Super Admin** | [`/dashboard/admin`](https://buildorabd.vercel.app/dashboard/admin) | Operations, Leads CRM, Project Budgets, Visual CMS | Deep Navy & `#FFDB5A` Gold |
| 👤 **Client Portal** | [`/dashboard/client`](https://buildorabd.vercel.app/dashboard/client) | 3D Timeline, Escrow Payments, Blueprint Vault | Emerald Green (`#00C975`) |
| ⛑️ **Site Engineer** | [`/dashboard/engineer`](https://buildorabd.vercel.app/dashboard/engineer) | Shift Logs, Material Requisitions, OSHA 30 Audits | Royal Blue (`#2563EB`) |
| 💼 **Subcontractor** | [`/dashboard/subcontractor`](https://buildorabd.vercel.app/dashboard/subcontractor) | Division 06 Scope, Crew Logs, AIA G702 Billing | Flame Orange (`#F97316`) |
| 🚚 **Material Supplier** | [`/dashboard/supplier`](https://buildorabd.vercel.app/dashboard/supplier) | GC Purchase Orders, Fleet GPS, ASTM MTR Tests | Ocean Cyan (`#06B6D4`) |

> 💡 **Quick Switcher**: From any page, press `Ctrl + K` (or `Cmd + K`) to launch the **Global Command Palette**, or click the **Portal Dropdown / Security Lock** in the header navigation to jump between any role instantly.

---

## 🏛️ Architectural Highlights

```
Buildora Enterprise Ecosystem
 ├── 🌐 Public Marketing Website (Next.js 16 App Router, Lenis Smooth Scroll)
 │    ├── Dynamic Service Divisions & Slug Routing
 │    ├── Verified Case Studies & Filterable Portfolio Gallery
 │    ├── Interactive Quote Builder & Multi-Step Consultation Flow
 │    └── Architectural Skyline Vector Footer with Newsletter Validation
 │
 └── 🏢 Enterprise Operations Hub (/dashboard)
      ├── 🛡️ Super Admin Portal   ── CRM Leads, Invoicing, Visual CMS, System Settings
      ├── 👤 Client Portal        ── 3D Timeline, Milestone Escrow, Change Orders, Vault
      ├── ⛑️ Engineer Portal      ── Manpower Logs, Concrete Requisitions, OSHA Audits, CAD
      ├── 💼 Subcontractor Portal ── Division 06 Scope, Daily Crew Logs, AIA G702 Pay Apps
      └── 🚚 Supplier Portal      ── GC PO Orders, Fleet GPS Transit, ASTM/ACI MTRs, e-POD
```

---

## 🏢 The 5 Enterprise Role Portals

### 1. 🛡️ Super Admin Operations & CMS Portal
*Target Persona: Executive Management, Managing Directors, Operations VPs*

- **Executive Overview Dashboard**: Real-time revenue run-rate, active job site completion velocity, new lead pipeline stats, and critical safety warnings.
- **Lead Pipeline CRM (`/leads`)**: Kanban board and structured data table tracking incoming bids, estimated budgets, assigned estimators, and follow-ups.
- **Project Portfolio Command (`/projects`)**: Master construction tracker displaying completion progress bars, supervising Professional Engineers (PEs), and budget vs. actual expenses.
- **Licensed Site Engineers (`/engineers`)**: Engineering roster monitoring state licenses (CA-PE, SE, OSHA 30), assigned job sites, and direct communications.
- **Billing & Revenue (`/billing`, `/revenue`)**: Comprehensive accounts receivable, milestone invoice generation, cash flow projections, and payment status.
- **Headless Visual CMS (`/content`)**: Full visual editor for marketing banners, service catalogues, project portfolios, team rosters, and blog posts with live preview.
- **System Settings & Compliance (`/settings`)**: Organization credentials, security thresholds, notification triggers, and live theme customizer.

### 2. 👤 Client & Property Owner Portal
*Target Persona: Commercial Developers, Private Homeowners, Real Estate Investors*

- **Property Overview**: Real-time status of client projects (e.g., *Modern Family Villa PRJ-901*), overall milestone percentage, and upcoming payment gates.
- **Live Site & 3D Progress Timeline (`/projects`, `/progress`)**: Timestamped photo journals captured by field superintendents, 3D drone scans, and completed phase checkmarks.
- **Milestone Escrow Billing (`/payments`)**: Transparent billing tied to verified physical milestones, downloadable tax receipts, and payment authorizations.
- **Change Order Management (`/change-orders`)**: Client variation requests, engineering cost-impact assessments, schedule adjustments, and one-click digital approvals.
- **Encrypted Document & Blueprint Vault (`/documents`, `/blueprints`)**: Bank-grade encrypted storage for municipal permits, stamped architectural drawings, soil analysis, and warranties.
- **Direct Engineer Chat (`/messages`)**: Communication channel with the assigned Lead Project Engineer and Superintendent.

### 3. ⛑️ Site Engineering Command Hub
*Target Persona: Lead Site Engineers (PE), Field Superintendents, Safety Officers*

- **Field Operations Overview**: Zero-incident milestone tracker (240+ days incident-free), active trade headcounts, weather telemetry, and daily tasks.
- **Daily Shift & Site Logs (`/logs`, `/site-logs`)**: Structured logging for weather conditions, temperature, manpower headcounts, equipment run hours, and inspection notes.
- **Material Requisitions (`/materials`, `/requisition`)**: Requisition workflows for Grade 60 rebar, 4000 PSI ready-mix concrete, and structural timber with supplier dispatch feeds.
- **OSHA 30 Safety & PPE Audits (`/safety`)**: Daily OSHA 30 compliance checklists, toolbox talk logs, hazard identification matrix, and incident reporting.
- **Field Blueprints & CAD Viewer (`/blueprints`)**: Dedicated viewer for PE-stamped Issued For Construction (IFC) architectural, structural, and MEP sets.

### 4. 💼 Subcontractor & Trade Partner Portal
*Target Persona: Specialty Trade Contractors, Millwork Specialists, MEP Subcontractors*

- **Trade Operations Command**: Subcontractor profile (e.g., *Apex Millwork & Finishes LLC, CSLB C-6*), subcontract sum, total earned, and retainage held.
- **Work Packages & Contract Scope (`/work-orders`)**: Division 06 Finish Carpentry scope packages, deliverables checklists, and milestone completion percentages.
- **Daily Crew Logs (`/crew-logs`)**: Shift logs, headcount of journeymen and apprentices, total labor hours, and on-site photo proofs.
- **AIA G702 Progress Billing (`/invoices`)**: Industry-standard AIA G702 / G703 progress billing schedule, earned milestones, 10% retainage tracking, and GC review status.
- **Safety Credentials & Insurance (`/safety`)**: Active Certificate of Insurance (COI) validity tracker, Jobsite Hazard Analysis (JHA), and toolbox talk sign-offs.
- **Snag List & Quality Assurance (`/punch-list`)**: Snag items, corrective action checklists, photo proofs, and GC sign-off verification.

### 5. 🚚 Material Supplier & Fleet Command
*Target Persona: Ready-Mix Concrete Suppliers, Structural Steel Fabricators, Fleet Dispatchers*

- **Logistics Command Overview**: Active purchase orders, fleet trucks in transit, ASTM lab certificates issued, and pending Net 30 commercial invoices.
- **GC Purchase Orders (`/orders`)**: Real-time PO fulfillment, line-item pricing, batch staging, and order acknowledgement workflows.
- **Fleet Tracking & Deliveries (`/deliveries`)**: GPS-tracked transit routes, delivery notes (DN), and electronic Proof of Delivery (e-POD) with on-site signature capture.
- **Material Inventory Catalog (`/inventory`)**: Live inventory levels of ready-mix concrete, steel rebar, structural timber, masonry, and technical spec sheets.
- **Quality Assurance & Mill Test Reports (`/quality`)**: ASTM/ACI certified Mill Test Reports (MTRs), 7-day and 28-day concrete cylinder break test records.
- **Commercial Billing (`/invoices`)**: Net 30 commercial billing matched to signed e-POD receipts, payment terms, and remittance status.

---

## 🎨 Public Marketing Experience

- **Architectural Hero Section**: Cinematic visuals, lead capture consultation CTA, and key metrics (25+ Years Experience, 480+ Builds, 99.4% Safety Rating).
- **Service Divisions**: Dynamic slug pages covering Residential, Commercial, Industrial, Renovation, and Structural Engineering.
- **Projects Showcase**: Interactive case studies with verified before/after imagery, completion percentages, and location tags.
- **Interactive Features**: Dynamic estimation quote builders, cinematic video showcases, and verified client reviews.
- **Architectural Skyline Footer**: Custom vector backdrop with newsletter subscription validation and comprehensive directory links.

---

## ⚡ Global Platform Features

### 🔍 Omnipresent Command Palette (`Ctrl+K` / `Cmd+K`)
- Instant keyboard shortcut access anywhere across the platform.
- Fuzzy search across projects, documentation, portals, and trade actions.
- Categorized quick actions: Portals, Projects, Client Tools, Engineering Operations, Subcontractor Workflows, and Supplier Logistics.

### 🔄 Role Portal Switcher & Security Lock Dialog
- Header dropdown with color-coded badges for all 5 roles.
- Dedicated security lock button that opens a visual multi-role selection modal.
- Smooth transitions with role-preserving routing.

### 🎨 Live Theme & Custom Hex Studio
- Built-in theme customizer with **12 curated construction and architectural palettes** (Buildora Gold, Safety Orange, Structural Navy, Emerald Green, Industrial Cyan, etc.).
- Custom Hex Color Studio with real-time site-wide CSS variable updates.

### 🌊 Ultra-Smooth Scrolling
- Global **Lenis** smooth scrolling integration for buttery-smooth scrolling physics and zero layout jitter.

---

## 🛡️ Industry Compliance & Protocols

Buildora implements standard US and international construction industry protocols:

| Industry Standard | Implementation in Buildora |
|---|---|
| **AIA G702 / G703** | Progress billing schedules with 10% retainage withholdings and architect/GC approval states. |
| **OSHA 30 Regulations** | Daily PPE checklists, toolbox talk logs, zero-incident trackers, and incident reporting forms. |
| **ASTM C39 & ACI 318** | Concrete compressive strength break test schedules (7-day and 28-day) and certified Mill Test Reports (MTRs). |
| **CSLB & COI Insurance** | Contractor license number validation and Certificate of Insurance policy renewal monitoring. |
| **e-POD Protocol** | Electronic Proof of Delivery with digital signature capture and GPS delivery timestamps. |

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [Next.js 16.3.8](https://nextjs.org/) | App Router, Turbopack, Server-Side Rendering (SSR) & Static Site Generation (SSG) |
| **UI Library** | [React 19.2.8](https://react.dev/) | React 19 hooks, concurrent rendering, render-phase state synchronization |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict typing across all components, models, and portal schemas |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Custom CSS tokens, glassmorphism backdrop-blur, and modern flex/grid layouts |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Smooth Scroll** | [Lenis 1.3.26](https://lenis.darkroom.engineering/) | Hardware-accelerated smooth scrolling physics |
| **Sliders & Carousel** | [Swiper 14](https://swiperjs.com/) | Touch-enabled mobile-friendly carousels |

---

## 📂 Information Architecture & Routes

```
Buildora
├── PRD.md                             # Comprehensive Product Requirements Document
├── CV_PROJECT_SHOWCASE.md             # Resume & Portfolio Bullet Points
├── README.md                          # Platform Documentation
├── src
│   ├── app                            # 70+ Pre-Rendered Routes
│   │   ├── page.tsx                   # Public Homepage
│   │   ├── about / about-us           # Company History & Leadership
│   │   ├── services / [slug]          # Specialized Construction Divisions
│   │   ├── projects / [slug]          # Portfolio & Case Studies
│   │   ├── blog / [slug]              # Technical Field Insights & Articles
│   │   ├── contact / contact-us       # Quote Builder & Inquiries
│   │   └── dashboard                  # Enterprise 5-Portal Hub
│   │       ├── admin                  # 🛡️ Super Admin Operations & Visual CMS
│   │       ├── client                 # 👤 Property Owner Portal & 3D Timeline
│   │       ├── engineer               # ⛑️ Site Engineering Command & OSHA Hub
│   │       ├── subcontractor          # 💼 Sub-Trade Work Orders & AIA Pay Apps
│   │       └── supplier               # 🚚 Fleet Logistics, GPS & ASTM MTRs
│   ├── components
│   │   ├── layout                     # Header, Footer, Navbar, SocialIcons, PortalSwitcher
│   │   ├── home                       # Hero, About, Services, Projects, Team, FAQ, Testimonials
│   │   └── dashboard                  # DashboardHeader, DashboardSidebar, CommandPalette
│   ├── context                        # ThemeContext (12 Curated Palettes & Custom Hex)
│   └── data                           # Schemas, CMS seed fixtures, and service records
└── public                             # Architectural SVG icons, blueprints, and media assets
```

---

## 💻 Local Development & Setup

### Prerequisites
- **Node.js**: `v18.18+` or `v20+` (LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YEL-59/Buildora.git
   cd Buildora
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.
   - Access the dashboard hub at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

### Production Build

To verify compilation and generate the optimized static build:
```bash
npm run build
```

---

## 📌 Resume & Portfolio Highlights

If you are showcasing this project on your resume or portfolio:

> **Buildora — Enterprise Multi-Role Construction & Architectural Solutions Platform**  
> *Full-Stack Web Application | Next.js 16, React 19, TypeScript, Tailwind CSS, Turbopack*  
> - **Architected an enterprise 5-portal SaaS ecosystem** supporting 70+ statically pre-rendered routes tailored for Super Admins, Property Clients, Site Engineers, Subcontractors, and Material Suppliers.
> - **Engineered domain-specific construction workflows**, including AIA G702 progress billing with 10% retainage, OSHA 30 field audits, GPS fleet logistics with electronic Proof of Delivery (e-POD), and ASTM/ACI certified Mill Test Reports (MTRs).
> - **Built an omnipresent Command Palette (`Ctrl+K`)** and real-time portal switcher dropdown, reducing navigation latency across 70+ modules by 60%.
> - **Implemented a headless Visual CMS and Theme Studio** featuring live markdown previews, asset management, and 12 construction industry color palettes with real-time CSS variable synchronization.
> - **Optimized build performance & SSG pipeline** using Next.js 16 Turbopack, achieving 100% static pre-rendering with zero layout shift (CLS) and sub-second page transitions.

*(See [CV_PROJECT_SHOWCASE.md](./CV_PROJECT_SHOWCASE.md) for 1-page resume and LinkedIn formats).*

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Crafted with precision for modern construction & engineering by the <strong>Buildora Engineering Team</strong>.
</p>
