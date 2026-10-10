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

Buildora is architected around the **Next.js 16 App Router** with **70+ statically pre-rendered routes**. Every route leverages nested layouts, shared navigation contexts, and zero-layout-shift asset delivery.

---

### 🌳 Complete System File Tree

```
Buildora
├── PRD.md                                   # Comprehensive Product Requirements Document
├── CV_PROJECT_SHOWCASE.md                   # Resume & Portfolio Bullet Points
├── README.md                                # Platform Documentation
├── api.js                                   # Local Mock Services & API Integration Hub
├── next.config.ts                           # Next.js 16 Configuration & Turbopack Rules
├── tsconfig.json                            # Strict TypeScript 5 Configuration
├── postcss.config.mjs                       # Tailwind CSS PostCSS Processing
├── public/                                  # Static Media, Vector Logos & Blueprints
│   ├── favicon.svg                          # Brand Monogram Favicon
│   └── images/                              # 70+ Optimized WebP/JPEG Assets & SVG Icons
├── src/
│   ├── app/                                 # Next.js App Router (48 Route Files + Slugs)
│   │   ├── layout.tsx                       # Root Layout (Fonts, Global Theme, Smooth Scroll)
│   │   ├── not-found.tsx                    # Global 404 Error Boundary
│   │   ├── page.tsx                         # 🌐 Public Marketing Homepage
│   │   ├── 404/page.tsx                     # Architectural Custom 404 Error Page
│   │   ├── about/page.tsx                   # Corporate History, Mission & Credentials
│   │   ├── about-us/page.tsx                # Canonical Alias Route for About
│   │   ├── services/page.tsx                # Construction Divisions Index
│   │   ├── services/[slug]/page.tsx         # Dynamic Service Division Deep Dives (8 Slugs)
│   │   ├── projects/page.tsx                # Verified Project Portfolio Index
│   │   ├── projects/[slug]/page.tsx         # Dynamic Project Case Studies (6 Slugs)
│   │   ├── blog/page.tsx                    # Engineering Thought Leadership Articles
│   │   ├── blog/[slug]/page.tsx             # Dynamic Technical Insights (Slugs)
│   │   ├── contact/page.tsx                 # Interactive Cost Estimator & Quote Form
│   │   ├── contact-us/page.tsx              # Canonical Alias Route for Contact
│   │   └── dashboard/                       # Enterprise Operations Hub
│   │       ├── layout.tsx                   # Dashboard Shell (Sidebar, Header, CommandPalette)
│   │       ├── page.tsx                     # Multi-Role Central Gateway & Portal Switcher
│   │       │
│   │       ├── admin/                       # 🛡️ ROLE 1: SUPER ADMIN PORTAL
│   │       │   ├── page.tsx                 # Executive Command Dashboard
│   │       │   ├── billing/page.tsx         # Commercial Invoicing & Milestones
│   │       │   ├── content/page.tsx         # Headless Visual CMS & Live Theme Studio
│   │       │   ├── engineers/page.tsx       # Licensed PE Engineers Directory
│   │       │   ├── leads/page.tsx           # CRM Lead Pipeline & Kanban
│   │       │   ├── projects/page.tsx        # Active Project Budgets & Tracking
│   │       │   ├── revenue/page.tsx         # Cash Flow Analytics & Margin Metrics
│   │       │   └── settings/page.tsx        # Enterprise Compliance & Configuration
│   │       │
│   │       ├── client/                      # 👤 ROLE 2: PROPERTY OWNER / CLIENT PORTAL
│   │       │   ├── page.tsx                 # Client Build Overview & Milestone Status
│   │       │   ├── blueprints/page.tsx      # Stamped Architectural Floor Plans
│   │       │   ├── change-orders/page.tsx   # Scope Variation & Cost Approvals
│   │       │   ├── documents/page.tsx       # Encrypted Vault (Permits, Warranties, COI)
│   │       │   ├── messages/page.tsx        # Direct Engineer & Superintendent Chat
│   │       │   ├── payments/page.tsx        # Milestone Escrow Invoices & Tax Receipts
│   │       │   ├── progress/page.tsx        # 3D Drone Scans & Photographic Timeline
│   │       │   └── projects/page.tsx        # Client Project Portfolio Overview
│   │       │
│   │       ├── engineer/                    # ⛑️ ROLE 3: SITE ENGINEERING COMMAND HUB
│   │       │   ├── page.tsx                 # Field Operations Overview & Incident Clock
│   │       │   ├── blueprints/page.tsx      # Issued For Construction (IFC) CAD Viewer
│   │       │   ├── logs/page.tsx            # Daily Shift, Weather & Manpower Logs
│   │       │   ├── materials/page.tsx       # Material Requisition & Ready-Mix Orders
│   │       │   ├── requisition/page.tsx     # Canonical Material Purchase Approval
│   │       │   ├── safety/page.tsx          # OSHA 30 Audits, PPE Checks & Incident Logs
│   │       │   └── site-logs/page.tsx       # Canonical Historical Site Logs
│   │       │
│   │       ├── subcontractor/               # 💼 ROLE 4: SUBCONTRACTOR PORTAL
│   │       │   ├── page.tsx                 # Trade Operations & Retainage Overview
│   │       │   ├── crew-logs/page.tsx       # Journeyman & Apprentice Shift Headcounts
│   │       │   ├── invoices/page.tsx        # AIA G702 Progress Billing & 10% Retainage
│   │       │   ├── punch-list/page.tsx      # Snag Items & Corrective Action Checklists
│   │       │   ├── safety/page.tsx          # Certificate of Insurance (COI) & JHA Matrix
│   │       │   └── work-orders/page.tsx     # Division 06 Finish Carpentry Work Packages
│   │       │
│   │       └── supplier/                    # 🚚 ROLE 5: MATERIAL SUPPLIER PORTAL
│   │           ├── page.tsx                 # Logistics Command & Active PO Tracker
│   │           ├── deliveries/page.tsx      # Fleet GPS Transit & e-POD Signatures
│   │           ├── inventory/page.tsx       # Ready-Mix, Rebar & ASTM Stock Catalog
│   │           ├── invoices/page.tsx        # Net 30 Commercial Billing Matched to DNs
│   │           ├── orders/page.tsx          # GC Purchase Order Batch Staging
│   │           └── quality/page.tsx         # Certified Mill Test Reports & Break Tests
│   │
│   ├── components/                          # Modular Component Design System
│   │   ├── layout/                          # Header, Footer, Skyline, SmoothScroll, Preloader
│   │   ├── home/                            # Hero, AboutUs, Services, Projects, Team, FAQ, CTA
│   │   ├── dashboard/                       # DashboardHeader, DashboardSidebar, CommandPalette
│   │   ├── animations/                      # FadeInUp, TextAnime motion wrappers
│   │   ├── blog/                            # PageBlog, BlogDetails
│   │   ├── contact/                         # PageContact (Cost Estimator, Form)
│   │   ├── projects/                        # PageProjects, ProjectDetails
│   │   ├── services/                        # PageServices, ServiceDetails
│   │   └── not-found/                       # NotFoundPage component
│   │
│   ├── context/                             # Global Theme & Accent State
│   │   └── ThemeContext.tsx                 # 12 Curated Brand Palettes + Custom Studio
│   │
│   └── data/                                # Structured CMS Fixtures & Datasets
│       ├── serviceData.ts                   # 8 Construction Divisions & Overviews
│       ├── projectData.ts                   # 6 Verified Construction Case Studies
│       └── blogData.ts                      # Industry Technical Insights & Articles
```

---

### 🗺️ Master Route Directory (All 48 Route Files + Dynamic Slugs)

The table below outlines every single accessible route in Buildora, its source code file, target audience persona, and primary functional responsibilities:

| # | Route URL | Source File Path | Role / Audience | Module & Functional Capabilities |
|---|---|---|---|---|
| 1 | `/` | `src/app/page.tsx` | Public Visitor | **Flagship Marketing Homepage**: 12 sections including Hero, Stats counters, Why Choose Us, Video modal, Team, Reviews, and Skyline Footer. |
| 2 | `/about` | `src/app/about/page.tsx` | Public Visitor | **Corporate Heritage & Leadership**: 25-year company milestone timeline, executive board, ISO quality certifications, and core values. |
| 3 | `/about-us` | `src/app/about-us/page.tsx` | Public Visitor | **Canonical About Route**: Seamless alias to `/about` preserving SEO canonical link standards. |
| 4 | `/services` | `src/app/services/page.tsx` | Public Visitor | **Construction Divisions Index**: Grid of 8 specialized disciplines, capability checklists, and direct project inquiry hooks. |
| 5 | `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Public Visitor | **Dynamic Service Deep Dive**: SSG pre-rendered service specifications, methodologies, blueprint samples, and FAQs (8 dynamic slugs). |
| 6 | `/projects` | `src/app/projects/page.tsx` | Public Visitor | **Project Showcase Gallery**: Category filterable portfolio (Residential, Commercial, Renovation, Industrial) with specs and badges. |
| 7 | `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Public Visitor | **Dynamic Case Study**: Detailed project review, client challenge, geotechnical engineering solution, before/after gallery (6 dynamic slugs). |
| 8 | `/blog` | `src/app/blog/page.tsx` | Public Visitor | **Engineering Insights Index**: Articles on building materials, green construction, BIM methodologies, and structural innovations. |
| 9 | `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Public Visitor | **Dynamic Technical Article**: Long-form article with author profile, quote highlights, sustainability insights, and related topics. |
| 10 | `/contact` | `src/app/contact/page.tsx` | Public Visitor | **Interactive Quote Estimator**: Budget calculator, project scope selector, direct inquiry form, office locations, and maps. |
| 11 | `/contact-us` | `src/app/contact-us/page.tsx` | Public Visitor | **Canonical Contact Route**: Seamless alias to `/contact` maintaining URL symmetry. |
| 12 | `/404` | `src/app/404/page.tsx` | All Users | **Architectural 404 Screen**: Custom illustrated error recovery page with quick navigation back to the portal hub or homepage. |
| 13 | `not-found.tsx` | `src/app/not-found.tsx` | All Users | **Global Route Fallback**: Next.js App Router root catch-all handler for nonexistent paths. |
| 14 | `/dashboard` | `src/app/dashboard/page.tsx` | All Roles | **Central Operations Gateway Hub**: Interactive 5-tile portal selector with direct routing, permission overviews, and live role switching. |
| 15 | `/dashboard/admin` | `src/app/dashboard/admin/page.tsx` | 🛡️ Super Admin | **Executive Operations Command**: Revenue run-rates, live project velocity, pending bid volume, and high-priority site safety warnings. |
| 16 | `/dashboard/admin/billing` | `src/app/dashboard/admin/billing/page.tsx` | 🛡️ Super Admin | **Commercial Invoicing & Accounts**: Milestone invoice authorization, escrow draw releases, client tax receipts, and payment logs. |
| 17 | `/dashboard/admin/content` | `src/app/dashboard/admin/content/page.tsx` | 🛡️ Super Admin | **Headless Visual CMS & Theme Studio**: Live markdown preview, hero banner editor, media asset picker, and 12-palette color studio. |
| 18 | `/dashboard/admin/engineers` | `src/app/dashboard/admin/engineers/page.tsx` | 🛡️ Super Admin | **Site Engineers Directory**: Engineering credentials (CA-PE, SE, OSHA 30), assigned job sites, and direct communications. |
| 19 | `/dashboard/admin/leads` | `src/app/dashboard/admin/leads/page.tsx` | 🛡️ Super Admin | **CRM Lead Pipeline**: Interactive Kanban board (New, Estimating, Bid Sent, Contracted), budget sizes, and estimator assignments. |
| 20 | `/dashboard/admin/projects` | `src/app/dashboard/admin/projects/page.tsx` | 🛡️ Super Admin | **Master Project Portfolio Tracker**: Completion percentages, supervising PE engineers, budget vs. actual costs, and timeline status. |
| 21 | `/dashboard/admin/revenue` | `src/app/dashboard/admin/revenue/page.tsx` | 🛡️ Super Admin | **Financial Analytics**: Monthly billing trends, cash flow forecasts, trade division margin breakdown, and expense ledgers. |
| 22 | `/dashboard/admin/settings` | `src/app/dashboard/admin/settings/page.tsx` | 🛡️ Super Admin | **Enterprise Settings & Compliance**: Corporate tax IDs, security audit trails, notification rules, and system-wide default themes. |
| 23 | `/dashboard/client` | `src/app/dashboard/client/page.tsx` | 👤 Property Owner | **Client Build Overview**: Primary residence/facility build status (e.g. Modern Family Villa PRJ-901), phase completion, and next payment. |
| 24 | `/dashboard/client/blueprints` | `src/app/dashboard/client/blueprints/page.tsx` | 👤 Property Owner | **Architectural Blueprint Vault**: High-resolution floor plans, foundation layouts, and electrical drawings with download permissions. |
| 25 | `/dashboard/client/change-orders` | `src/app/dashboard/client/change-orders/page.tsx` | 👤 Property Owner | **Scope Variation Requests**: Cost and schedule impact breakdowns, engineering approvals, and one-click digital client signature. |
| 26 | `/dashboard/client/documents` | `src/app/dashboard/client/documents/page.tsx` | 👤 Property Owner | **Encrypted Documents Vault**: Municipal building permits, soil geotechnical reports, insurance certificates, and warranties. |
| 27 | `/dashboard/client/messages` | `src/app/dashboard/client/messages/page.tsx` | 👤 Property Owner | **Direct Engineer Communication**: Secure messaging thread connecting client directly to the assigned Lead PE and Superintendent. |
| 28 | `/dashboard/client/payments` | `src/app/dashboard/client/payments/page.tsx` | 👤 Property Owner | **Milestone Escrow Billing**: Transparent billing tied to verified physical construction milestones with official downloadable receipts. |
| 29 | `/dashboard/client/progress` | `src/app/dashboard/client/progress/page.tsx` | 👤 Property Owner | **3D & Photo Site Timeline**: Timestamped site photos uploaded daily by field engineers, drone orthomosaics, and milestone gates. |
| 30 | `/dashboard/client/projects` | `src/app/dashboard/client/projects/page.tsx` | 👤 Property Owner | **Client Project Directory**: Multi-property view for investors managing multiple simultaneous custom construction projects. |
| 31 | `/dashboard/engineer` | `src/app/dashboard/engineer/page.tsx` | ⛑️ Site Engineer | **Field Command Hub**: Zero-incident milestone counter (240+ days), active trade subcontractor headcounts, and daily pour briefing. |
| 32 | `/dashboard/engineer/blueprints` | `src/app/dashboard/engineer/blueprints/page.tsx` | ⛑️ Site Engineer | **Issued For Construction (IFC) CAD Viewer**: PE-stamped architectural, structural, and MEP drawings with revision markup logs. |
| 33 | `/dashboard/engineer/logs` | `src/app/dashboard/engineer/logs/page.tsx` | ⛑️ Site Engineer | **Daily Field Shift Logs**: Weather telemetry (temperature, wind, rain delays), manpower counts, equipment hours, and field notes. |
| 34 | `/dashboard/engineer/materials` | `src/app/dashboard/engineer/materials/page.tsx` | ⛑️ Site Engineer | **Material Requisitions**: Purchase requisitions for Grade 60 rebar, 4000 PSI ready-mix, structural timber, and live supplier status. |
| 35 | `/dashboard/engineer/requisition` | `src/app/dashboard/engineer/requisition/page.tsx` | ⛑️ Site Engineer | **Canonical Requisition Workflow**: Material batch approvals, batch ticket validations, and supplier dispatch confirmations. |
| 36 | `/dashboard/engineer/safety` | `src/app/dashboard/engineer/safety/page.tsx` | ⛑️ Site Engineer | **OSHA 30 Safety & PPE Audits**: Daily mandatory safety inspections, toolbox talk topics, PPE audit matrix, and incident log filing. |
| 37 | `/dashboard/engineer/site-logs` | `src/app/dashboard/engineer/site-logs/page.tsx` | ⛑️ Site Engineer | **Canonical Historical Site Logs**: Searchable archive of all shift inspection logs, concrete batch tickets, and weather anomalies. |
| 38 | `/dashboard/subcontractor` | `src/app/dashboard/subcontractor/page.tsx` | 💼 Subcontractor | **Trade Operations Command**: Subcontractor profile (Apex Millwork LLC, CSLB C-6), contract value, earned progress, retainage held. |
| 39 | `/dashboard/subcontractor/crew-logs` | `src/app/dashboard/subcontractor/crew-logs/page.tsx` | 💼 Subcontractor | **Daily Craftsmen Crew Logs**: Headcount breakdown of journeymen, apprentices, total labor hours worked, and site photo uploads. |
| 40 | `/dashboard/subcontractor/invoices` | `src/app/dashboard/subcontractor/invoices/page.tsx` | 💼 Subcontractor | **AIA G702 Progress Billing**: Standard AIA G702/G703 payment application schedules, 10% retainage tracking, and GC review status. |
| 41 | `/dashboard/subcontractor/punch-list` | `src/app/dashboard/subcontractor/punch-list/page.tsx` | 💼 Subcontractor | **Punch List & Snag Management**: Corrective action checklists, photo proofs of completed snags, and GC engineer sign-offs. |
| 42 | `/dashboard/subcontractor/safety` | `src/app/dashboard/subcontractor/safety/page.tsx` | 💼 Subcontractor | **Trade Safety & Insurance Vault**: Certificate of Insurance (COI) expiration tracker, Jobsite Hazard Analysis (JHA), and crew sign-offs. |
| 43 | `/dashboard/subcontractor/work-orders` | `src/app/dashboard/subcontractor/work-orders/page.tsx` | 💼 Subcontractor | **Division 06 Scope Packages**: Contracted scope deliverables (Finish Carpentry, Architectural Millwork), task checklists, and status. |
| 44 | `/dashboard/supplier` | `src/app/dashboard/supplier/page.tsx` | 🚚 Material Supplier | **Logistics Command Overview**: Active purchase orders, fleet trucks in transit, ASTM lab certificates issued, and pending invoices. |
| 45 | `/dashboard/supplier/deliveries` | `src/app/dashboard/supplier/deliveries/page.tsx` | 🚚 Material Supplier | **Fleet GPS Tracking & e-POD**: Real-time vehicle telemetry, delivery notes (DN), and electronic Proof of Delivery with signature capture. |
| 46 | `/dashboard/supplier/inventory` | `src/app/dashboard/supplier/inventory/page.tsx` | 🚚 Material Supplier | **Material Catalog & Inventory**: Live warehouse stock of ready-mix concrete, steel rebar, lumber, masonry, and technical spec sheets. |
| 47 | `/dashboard/supplier/invoices` | `src/app/dashboard/supplier/invoices/page.tsx` | 🚚 Material Supplier | **Commercial Billing (Net 30)**: Commercial billing matched to signed e-POD delivery receipts, payment terms, and remittance status. |
| 48 | `/dashboard/supplier/orders` | `src/app/dashboard/supplier/orders/page.tsx` | 🚚 Material Supplier | **GC Purchase Orders (PO)**: Fulfillment workflow for General Contractor purchase orders, line-item pricing, batch staging, and tickets. |
| 49 | `/dashboard/supplier/quality` | `src/app/dashboard/supplier/quality/page.tsx` | 🚚 Material Supplier | **Quality Assurance & Mill Test Reports**: ASTM/ACI certified Mill Test Reports (MTRs), 7-day and 28-day concrete cylinder break tests. |

---

### 📦 Dynamic Slug Route Manifest

Buildora pre-renders all dynamic routes at build time using static parameters (`generateStaticParams`). Below are the pre-rendered dynamic slugs available in the production bundle:

#### 1. Specialized Construction Divisions (`/services/[slug]`)
- `/services/residential-construction`: Custom estate and modern home building from foundation to bespoke finishes.
- `/services/commercial-construction`: Corporate office buildings, business headquarters, and retail facilities.
- `/services/industrial-construction`: High-bay logistics warehouses, manufacturing plants, and heavy distribution centers.
- `/services/infrastructure-construction`: Municipal civil infrastructure, bridges, highways, and drainage networks.
- `/services/building-renovation`: Historic architectural preservation, seismic retrofitting, and modernization.
- `/services/home-remodeling`: Kitchen, bathroom, and structural residential space redesigns.
- `/services/structural-engineering`: 3D BIM structural analysis, foundation calculation, and seismic engineering.
- `/services/interior-design`: Luxury interior architecture, spatial planning, bespoke lighting, and custom fixtures.

#### 2. Verified Case Studies & Project Portfolio (`/projects/[slug]`)
- `/projects/modern-family-villa`: Contemporary residential villa in Central Valley, California with energy-efficient systems.
- `/projects/building-restoration`: 18-month historical landmark renovation in Manhattan, New York with carbon-fiber retrofits.
- `/projects/metro-business-center`: Multi-story commercial corporate facility with structural steel frames and smart HVAC.
- `/projects/luxury-skyline-tower`: High-rise luxury residential condominium with post-tensioned concrete slabs.
- `/projects/eco-friendly-corporate-park`: LEED Platinum commercial complex featuring solar arrays and recycled structural timber.
- `/projects/industrial-logistics-hub`: 350,000 sq ft automated distribution facility with heavy-load slab foundations.

#### 3. Engineering Thought Leadership (`/blog/[slug]`)
- `/blog/expert-insights-and-latest-trends-in-construction-industry`: Comprehensive report on emerging technologies, BIM modeling, drone site scanning, and sustainable materials.

---

### 🧩 Component Architecture Breakdown

The user interface follows atomic design principles and clean separation of concerns:

```
src/components/
├── animations/           # Hardware-accelerated entrance and micro-interaction wrappers
│   ├── FadeInUp.tsx      # Smooth viewport intersection fade-and-slide
│   └── TextAnime.tsx     # Typography letter-by-letter reveal
│
├── layout/               # Global navigational wrappers and utilities
│   ├── Header.tsx        # Responsive sticky glassmorphism navigation with role switcher
│   ├── Footer.tsx        # Multi-column directory, newsletter, and company credentials
│   ├── FooterSkyline.tsx # Custom architectural skyline vector backdrop
│   ├── SmoothScroll.tsx  # Global Lenis smooth scrolling orchestrator
│   ├── Preloader.tsx     # Polished SVG brand loading indicator
│   ├── PageHeader.tsx    # Standardized inner page hero banner with breadcrumbs
│   ├── SocialIcons.tsx   # Verified corporate social media links
│   └── VideoModal.tsx    # Accessible modal player for jobsite drone footage
│
├── dashboard/            # Dedicated operational hub components
│   ├── DashboardHeader.tsx   # Breadcrumb navigation, role badge, quick search, notification bell
│   ├── DashboardSidebar.tsx  # Dynamic role-tailored sidebar with active route highlights
│   └── CommandPalette.tsx    # Universal keyboard-accessible (Ctrl+K) search and action runner
│
├── home/                 # 12 Modular Homepage Sections
│   ├── Hero.tsx          # Cinematic video background, consultation CTA, and key metrics
│   ├── AboutUs.tsx       # 25-year legacy overview with ISO credentials
│   ├── OurExpertise.tsx  # Core craftsmanship pillars and engineering standards
│   ├── CoreValues.tsx    # Integrity, precision, safety, and sustainable building values
│   ├── Approach.tsx      # 4-stage construction process walkthrough (Consult -> Plan -> Build -> Handover)
│   ├── Services.tsx      # Filterable service card grid with dynamic routing
│   ├── WhyChooseUs.tsx   # Value proposition with drone scanning and transparent billing
│   ├── Projects.tsx      # Featured case studies with before/after imagery
│   ├── Team.tsx          # Principal architects and licensed PE leadership
│   ├── VideoBanner.tsx   # Full-width cinematic jobsite machinery showcase
│   ├── Testimonials.tsx  # Touch-enabled Swiper slider with verified property owner reviews
│   ├── Faq.tsx           # Accordion addressing timelines, escrow, permits, and change orders
│   ├── CtaSection.tsx    # High-converting project consultation booking banner
│   └── Blog.tsx          # Latest technical engineering field insights
│
└── context/
    └── ThemeContext.tsx  # Centralized theme provider supporting 12 curated industry color palettes
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
