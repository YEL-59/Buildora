# Product Requirements Document (PRD)
## Buildora — Enterprise Construction & Architectural Solutions Platform

---

## 1. Executive Summary & Product Vision

### 1.1 Product Overview
**Buildora** is a premier, full-stack enterprise web platform engineered for modern commercial, residential, and industrial construction operations. It unifies a high-converting, visually rich public web experience with a multi-role, 5-portal operations management dashboard hub.

### 1.2 Core Value Proposition
- **Seamless Public-to-Portal Transition**: Prospected clients discover services, view verified project portfolios, and request estimates; active stakeholders log into dedicated, purpose-built dashboards.
- **5-Role Operational Symmetry**: Tailored portals for **Super Admins**, **Property Clients**, **Site Engineers**, **Sub-Trade Contractors**, and **Material Suppliers**.
- **Unified Brand & Design Standards**: Consistent palette (Deep Navy `#12223B`, Builtex Yellow `#FFDB5A`, Client Green `#00C975`, Engineer Blue `#2563EB`, Subcontractor Orange `#F97316`, Supplier Cyan `#06B6D4`), crisp typography, glassmorphism, responsive micro-interactions, and instant global search via Command Palette (`Ctrl+K`).

---

## 2. User Personas & Target Audiences

| Persona | Role / Portal | Core Responsibilities & Needs | Key Value Delivered |
|---|---|---|---|
| **Executive Management** | **Admin Dashboard** (`/dashboard/admin`) | Leads pipeline, project budgets, engineering allocations, CMS publishing, corporate financials. | High-level operational control, real-time revenue and margin monitoring, visual site CMS. |
| **Property Owner / Investor** | **Client Dashboard** (`/dashboard/client`) | Photographic progress timeline, milestone payment approvals, change order requests, blueprint access. | Complete transparency, bank-grade contract security, direct engineer messaging. |
| **Licensed Site Engineer** | **Engineer Portal** (`/dashboard/engineer`) | Daily manpower/concrete logs, material purchase requisition, OSHA 30 safety & PPE audits, IFC drawing review. | Frictionless field reporting, mobile-ready site logs, automated safety tracking. |
| **Sub-Trade Contractor** | **Subcontractor Portal** (`/dashboard/subcontractor`) | Division 06 work orders, daily crew headcounts, AIA G702 pay applications, punch list close-outs, COI insurance vault. | Clear scope boundaries, streamlined progress billing, retainage tracking. |
| **Material Supplier & Logistics** | **Supplier Portal** (`/dashboard/supplier`) | GC purchase order fulfillment, GPS fleet tracking, ASTM/ACI Mill Test Reports (MTRs), inventory catalog, Net 30 invoices. | Real-time dispatch schedules, digital proof of delivery (e-POD), verified quality certs. |

---

## 3. Global Information Architecture & Route Hierarchy

```
Buildora Platform
├── Public Marketing Website
│   ├── / (Home)
│   ├── /about & /about-us (Company Heritage & Team)
│   ├── /services & /services/[slug] (Specialized Construction Divisions)
│   ├── /projects & /projects/[slug] (Case Studies & Project Showcase)
│   ├── /blog & /blog/[slug] (Technical Field Insights & Articles)
│   ├── /contact & /contact-us (Interactive Quote Builder & Locations)
│   └── /404 & /not-found (Custom Error Recovery)
│
└── Unified Dashboard Hub (/dashboard)
    ├── /dashboard/admin (Super Admin Dashboard)
    │   ├── /dashboard/admin/leads (Lead CRM & Inquiry Management)
    │   ├── /dashboard/admin/projects (Active Construction Projects & Budgets)
    │   ├── /dashboard/admin/engineers (Site Engineers & Credential Tracking)
    │   ├── /dashboard/admin/billing & /revenue (Client Invoices & Revenue)
    │   ├── /dashboard/admin/content (Full Visual CMS Manager)
    │   └── /dashboard/admin/settings (System & Compliance Configuration)
    │
    ├── /dashboard/client (Property Owner Portal)
    │   ├── /dashboard/client/projects & /progress (3D Timeline & Live Photo Feed)
    │   ├── /dashboard/client/payments (Milestone Invoices & Escrow)
    │   ├── /dashboard/client/change-orders (Scope Variation Approvals)
    │   ├── /dashboard/client/documents & /blueprints (Encrypted Vault)
    │   └── /dashboard/client/messages (Direct Field Engineer Comms)
    │
    ├── /dashboard/engineer (Site Engineering Command Hub)
    │   ├── /dashboard/engineer/logs & /site-logs (Daily Shift & Weather Logs)
    │   ├── /dashboard/engineer/materials & /requisition (PO Requests & Concrete Batches)
    │   ├── /dashboard/engineer/safety (OSHA 30 Audits & Incident Counter)
    │   └── /dashboard/engineer/blueprints (IFC CAD & Structural Drawings)
    │
    ├── /dashboard/subcontractor (Sub-Trade Contractor Portal)
    │   ├── /dashboard/subcontractor/work-orders (Division 06 Scope & Packages)
    │   ├── /dashboard/subcontractor/crew-logs (Daily Headcount & Craftsmen Hours)
    │   ├── /dashboard/subcontractor/invoices (AIA G702 Progress Billing & Retainage)
    │   ├── /dashboard/subcontractor/safety (COI & Hazard Analysis)
    │   └── /dashboard/subcontractor/punch-list (Snag Lists & Corrective Actions)
    │
    └── /dashboard/supplier (Material Supplier & Fleet Command)
        ├── /dashboard/supplier/orders (GC Purchase Orders & Requisitions)
        ├── /dashboard/supplier/deliveries (Fleet GPS & Proof of Delivery / e-POD)
        ├── /dashboard/supplier/inventory (Stock Reserves & ASTM Catalog)
        ├── /dashboard/supplier/quality (Mill Test Reports & Concrete Break Tests)
        └── /dashboard/supplier/invoices (Net 30 Commercial Billing)
```

---

## 4. Public Website Functional Specifications

### 4.1 Header Navigation & Portal Switcher
- **Sticky Glassmorphism Bar**: Backdrop-blur with border `#12223B/10`, responsive mobile drawer, and active tab highlights.
- **Select Dashboard Portal Dropdown**:
  - Direct dropdown trigger with animated chevron.
  - Quick-access **Security Lock Button** opening the portal popup.
  - 5-Tile role selector:
    1. **Admin Dashboard** (`bg-white text-[#12223B]`, Shield Icon): "Operations, leads & CMS"
    2. **Client Dashboard** (`bg-[#00C975] text-white`, User Icon): "Live site & progress tracking"
    3. **Engineer Portal** (`bg-[#2563EB] text-white`, Hard Hat Icon): "Field logs & site safety"
    4. **Subcontractor Portal** (`bg-[#F97316] text-white`, Briefcase Icon): "Work orders, crew & pay apps"
    5. **Supplier Portal** (`bg-[#06B6D4] text-white`, Truck Icon): "Purchase orders, fleet & MTRs"

### 4.2 Home Page Components
- **Hero Section**: Architectural headline, video trigger, lead capture CTA, metrics counters (25+ Years, 480+ Completed Projects, 99.4% Safety Rating).
- **About Us Preview**: Mission, precision craftsmanship credentials, ISO certification callouts.
- **Services Grid**: Card layout highlighting residential, commercial, industrial, renovation, and structural engineering.
- **Why Choose Us**: Value proposition pillars (Transparent Billing, Drone & 3D Scanning, Certified Engineers, Zero-Incident Culture).
- **Projects Showcase**: Filterable portfolio cards with verified before/after imagery, completion percentages, and location tags.
- **Team Leadership**: Principal architects and licensed PE leadership profiles.
- **Cinematic Video Banner**: Video modal showcasing jobsite equipment and architectural fabrication.
- **Testimonials Carousel**: Real client and property owner reviews.
- **FAQ Accordion**: Common construction timelines, financing models, and change order policies.
- **Call-to-Action (CTA)**: Consultation booking form and direct inquiry telephone trigger.
- **Footer Section**: Detailed contact info, quick links, newsletter subscription with state validation, and signature architectural skyline illustration.

---

## 5. Portal Specifications & Modules

### 5.1 Admin Dashboard (`/dashboard/admin`)
1. **Executive Overview**: Real-time revenue run rate, active site milestones, lead conversion velocity, critical project alerts.
2. **Leads Management (`/leads`)**: Kanban & table view of customer inquiries, estimated budgets, assigned estimators, and follow-up reminders.
3. **Projects Management (`/projects`)**: Master construction project list with progress bars, supervising PEs, budget vs. actual expenses, and milestone completion flags.
4. **Site Engineers Directory (`/engineers`)**: Engineering staff licenses (CA-PE, SE, OSHA 30), assigned job sites, and contact logs.
5. **Billing & Invoices (`/billing`, `/revenue`)**: Invoicing schedule, milestone release authorization, payment status, and revenue breakdown.
6. **Visual CMS Manager (`/content`)**: Full content management for homepage banners, service descriptions, project portfolios, team members, and blog posts with live preview.
7. **System Settings (`/settings`)**: Organization credentials, security thresholds, notification triggers, and user access levels.

### 5.2 Client Dashboard (`/dashboard/client`)
1. **Property Owner Overview**: High-level summary of client's estate or commercial build (e.g. Modern Family Villa PRJ-901), milestone status (78%), and next payment milestone.
2. **Live Site & Progress Timeline (`/projects`, `/progress`)**: Time-stamped photo journals from field engineers, 3D drone scan updates, and verified milestone checkmarks.
3. **Milestone Payments (`/payments`)**: Transparent billing based on verified completion, downloadable official tax receipts, and payment approval triggers.
4. **Change Orders (`/change-orders`)**: Client variation requests, engineering cost-impact assessments, schedule adjustments, and one-click digital approvals.
5. **Documents & Blueprints Vault (`/documents`, `/blueprints`)**: Encrypted storage for municipal permits, stamped architectural drawings, soil analysis, and warranties.
6. **Field Engineer Messages (`/messages`)**: Direct communication channel with Lead Engineer and Project Superintendent.

### 5.3 Engineer Portal (`/dashboard/engineer`)
1. **Operations Hub**: Critical safety metrics (240+ days incident-free), active trades on-site, concrete pour notices, and weather conditions.
2. **Daily Site Logs (`/logs`, `/site-logs`)**: Structured logs for weather, manpower headcount, equipment hours, pour inspections, and field notes.
3. **Material Requisitions (`/materials`, `/requisition`)**: Requisition workflows for Grade 60 rebar, 4000 PSI ready-mix, structural timber, with supplier dispatch statuses.
4. **Safety & PPE Audits (`/safety`)**: Daily OSHA 30 checklists, toolbox talk logs, hazard identification, and incident report filing.
5. **Field Blueprints (`/blueprints`)**: PDF & CAD drawing viewer for PE-stamped Issued For Construction (IFC) architectural, structural, and MEP sets.

### 5.4 Subcontractor Portal (`/dashboard/subcontractor`)
1. **Trade Operations Hub**: Subcontractor profile (e.g. Apex Millwork & Finishes LLC, CSLB C-6), subcontract sum, total earned, retainage held.
2. **Work Packages & Scope (`/work-orders`)**: Contract Division scope items (Division 06 Finish Carpentry), deliverables checklist, and milestone completion percentages.
3. **Daily Crew Logs (`/crew-logs`)**: Shift logs, headcount of journeymen and apprentices, total labor hours, and on-site photo uploads.
4. **AIA Pay Applications (`/invoices`)**: AIA G702 progress billing schedule, earned milestones, 10% retainage tracking, and GC review status.
5. **Safety Credentials & Insurance (`/safety`)**: Active Certificate of Insurance (COI) validity tracker, Jobsite Hazard Analysis (JHA), and toolbox talk confirmations.
6. **Punch List & Quality Assurance (`/punch-list`)**: Snag items, corrective action checklists, photo proofs, and GC sign-off verification.

### 5.5 Supplier Portal (`/dashboard/supplier`)
1. **Logistics Command Overview**: Active purchase orders, fleet trucks in transit, ASTM lab certificates issued, pending Net 30 invoices.
2. **Purchase Orders (`/orders`)**: Real-time PO fulfillment, line-item pricing, batch staging, and order acknowledgement workflows.
3. **Fleet Tracking & Deliveries (`/deliveries`)**: GPS-tracked transit routes, delivery notes (DN), electronic Proof of Delivery (e-POD) with on-site signature capture.
4. **Material Catalog & Inventory (`/inventory`)**: Live inventory levels of ready-mix concrete, steel rebar, lumber, masonry, and technical spec sheets.
5. **Quality Assurance & Mill Test Reports (`/quality`)**: Mill Test Reports (MTRs), ACI/ASTM compliance test results, 7-day and 28-day concrete cylinder break records.
6. **Vendor Billing & Invoices (`/invoices`)**: Commercial billing matched to signed e-PODs, payment terms, and remittance status.

---

## 6. Technical Architecture & Non-Functional Requirements

### 6.1 Stack & Framework
- **Framework**: Next.js 16 (App Router with Turbopack).
- **Core Language**: TypeScript with strict mode for robust type safety.
- **Styling**: Tailwind CSS with custom design system variables and responsive breakpoints.
- **Icons**: Lucide React for consistent vector symbols.
- **Build Status**: Fully static and SSG optimized (70+ pre-rendered routes, zero build errors).

### 6.2 Global Command Palette (`Ctrl+K`)
- Omnipresent quick-action modal accessible via hotkey (`Ctrl+K` or `Cmd+K`) and header search bar.
- Category filters: Portals, Projects, Client Tools, Engineering Operations, Subcontractor Operations, and Supplier Logistics.
- Real-time search query matching across titles, badges, and metadata.

### 6.3 Performance & Reliability
- Zero cumulative layout shift (CLS) through fixed aspect ratios and Next.js Image optimization.
- Client-side navigation powered by Next.js prefetching.
- Optimized bundle sizes with code-split modular route segments.

### 6.4 Security & Compliance
- Role-segregated UI boundaries ensuring dedicated workflows for owners, contractors, and suppliers.
- Standardized construction industry protocols:
  - OSHA 30 field safety regulations.
  - AIA G702/G703 progress billing schemas.
  - ASTM / ACI material testing compliance standards.
  - CSLB licensing and COI policy renewal monitoring.

---

## 7. Version History & Release Sign-Off

| Version | Date | Author / Team | Summary of Changes |
|---|---|---|---|
| **v1.0.0** | 2026-10-10 | Buildora Engineering Team | Complete release of public marketing platform and all 5 role-based dashboard suites (Admin, Client, Engineer, Subcontractor, Supplier) with unified portal switching and global command palette. |
