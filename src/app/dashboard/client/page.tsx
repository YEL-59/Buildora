"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  CloudSun,
  Camera,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Download,
  AlertTriangle,
  Check,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function ClientDashboardPage() {
  const [changeOrderApproved, setChangeOrderApproved] = useState(false);

  const phases = [
    {
      phase: "Phase 1",
      name: "Site Excavation & Foundation",
      status: "Completed",
      date: "Jul 15, 2026",
      desc: "Deep earth excavation, seismic soil compaction, reinforced rebar footings, and waterproof membrane foundation poured.",
      progress: 100,
    },
    {
      phase: "Phase 2",
      name: "Structural Steel & Timber Framing",
      status: "Completed",
      date: "Aug 28, 2026",
      desc: "Glulam beam trusses, second-story subfloor framing, and shear wall structural anchors installed and inspected.",
      progress: 100,
    },
    {
      phase: "Phase 3",
      name: "MEP & Insulation Rough-In",
      status: "Completed",
      date: "Sep 20, 2026",
      desc: "Hydronic radiant floor heating circuits, 400A electrical service, plumbing rough-in, and R-30 spray foam insulation.",
      progress: 100,
    },
    {
      phase: "Phase 4",
      name: "Interior Finishing & Architectural Glass",
      status: "In Progress",
      date: "Nov 15, 2026",
      desc: "Floor-to-ceiling panoramic Low-E glazing installed; bespoke white oak hardwood and Italian marble tiling ongoing.",
      progress: 78,
    },
    {
      phase: "Phase 5",
      name: "Exterior Landscaping & Key Handover",
      status: "Scheduled",
      date: "Nov 25, 2026",
      desc: "Drought-tolerant native landscaping, infinity plunge pool deck, smart home automation commissioning, and turnkey delivery.",
      progress: 0,
    },
  ];

  const photos = [
    {
      title: "Panoramic Glass Window Wall Installed",
      date: "Oct 03, 2026",
      desc: "Triple-glazed acoustic glass facade framed with matte black architectural aluminum.",
      img: "/images/expertise-item-image-1.jpg",
    },
    {
      title: "Custom White Oak Hardwood Flooring Laid",
      date: "Sep 29, 2026",
      desc: "Wide-plank quarter-sawn white oak flooring with zero-VOC natural matte seal.",
      img: "/images/expertise-item-image-2.jpg",
    },
    {
      title: "Exterior Facade Cedar Cladding Completed",
      date: "Sep 24, 2026",
      desc: "Western red cedar rainscreen siding treated with eco-friendly fire-retardant finish.",
      img: "/images/service-image-1.jpg",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Client Property Hero Banner */}
      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              PRJ-901
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              On Schedule (Ahead of Target)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12223B]">
            Modern Family Villa
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1.5 mt-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>Jobsite: Central Valley, CA (Lot #42 Oakridge Estates)</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#FFDB5A]" />
            <span>Download Progress Summary</span>
          </button>
        </div>
      </div>

      {/* 5 KPI Stat Cards matching Builtex */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Total Completion
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#12223B]">
              78
            </span>
            <span className="text-lg font-semibold text-[#12223B]">%</span>
          </div>
          <span className="text-xs text-emerald-600 font-medium mt-1 block">
            Phase 4 Active
          </span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Target Handover
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#12223B]">
              52
            </span>
            <span className="text-xs text-gray-500">Days</span>
          </div>
          <span className="text-xs text-gray-500 font-medium mt-1 block">
            Nov 25, 2026
          </span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Total Contract
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-[#12223B]">
              $850
            </span>
            <span className="text-sm font-semibold text-gray-500">k</span>
          </div>
          <span className="text-xs text-gray-400 font-medium mt-1 block truncate">
            Fixed-price agreement
          </span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Paid to Date
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-xl sm:text-2xl font-bold text-emerald-700">
              $663
            </span>
            <span className="text-sm font-semibold text-emerald-700">k</span>
          </div>
          <span className="text-xs text-gray-400 font-medium mt-1 block truncate">
            3 of 5 settled
          </span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 shadow-xs col-span-2 sm:col-span-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Site Weather
          </span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#12223B]">
              72°F
            </span>
            <span className="text-xs text-emerald-600 font-bold ml-1">● Active</span>
          </div>
          <span className="text-xs text-gray-500 font-medium mt-1 block truncate">
            Sunny & Clear • 6 mph
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Construction Phases & Milestones */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
                  Construction Phases & Milestones
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Engineering signoffs tracked by site supervisors
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Verified On-Chain & Signed
              </span>
            </div>

            <div className="space-y-4">
              {phases.map((p, idx) => {
                const statusStyles = {
                  Completed: "bg-emerald-100 text-emerald-800",
                  "In Progress": "bg-[#FFDB5A] text-[#12223B]",
                  Scheduled: "bg-gray-100 text-gray-600",
                }[p.status];

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200/60 space-y-2 hover:border-[#12223B]/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-gray-500 uppercase">
                          {p.phase}
                        </span>
                        <strong className="text-sm sm:text-base font-bold text-[#12223B]">
                          {p.name}
                        </strong>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles}`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-gray-400">
                        {p.status === "Completed"
                          ? `Completed on ${p.date}`
                          : `Target date: ${p.date}`}
                      </span>
                      <span className="font-mono font-bold text-[#12223B]">
                        {p.progress}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full bg-[#12223B] rounded-full transition-all duration-1000"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photo Journal */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
              Recent On-Site Photo Journal
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Photographs captured and logged during daily engineering inspections
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {photos.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200/80 overflow-hidden bg-gray-50 group hover:border-[#FFDB5A] transition-all"
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      {item.date}
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-xs sm:text-sm text-[#12223B] leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Engineer Card, Change Order, Shortcuts */}
        <div className="space-y-6">
          {/* Lead Site Engineer Card */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Lead Site Engineer
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                ● On Duty
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFDB5A]">
                <Image
                  src="/images/author-2.jpg"
                  alt="Sophia Bennett"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#12223B] text-base">
                  Sophia Bennett, PE
                </h4>
                <p className="text-xs text-amber-600 font-semibold">
                  Lead Structural Supervisor
                </p>
                <p className="text-[11px] text-gray-400">Buildora Engineering Ops</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              <a
                href="tel:+15554321098"
                className="py-2 px-3 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFDB5A]" />
                <span>Direct Call</span>
              </a>
              <a
                href="mailto:sophia.b@buildora.com"
                className="py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <span>Message</span>
              </a>
            </div>
          </div>

          {/* Change Order Card */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#12223B] uppercase tracking-wider">
                Change Order Signoff
              </span>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                Pending
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl space-y-1 border border-gray-100">
              <div className="flex justify-between items-center text-xs font-semibold text-[#12223B]">
                <span>Smart HVAC Dual-Zone Heat Pump</span>
                <strong className="text-emerald-700">+$14,200</strong>
              </div>
              <p className="text-[11px] text-gray-500">
                Upgrade to ultra-quiet inverter variable refrigerant flow system with smart zoning.
              </p>
            </div>

            {changeOrderApproved ? (
              <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Change order signed & released to engineering!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setChangeOrderApproved(true)}
                  className="flex-1 py-2 bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Approve Signoff
                </button>
                <button
                  type="button"
                  className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Review Details
                </button>
              </div>
            )}
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs space-y-3">
            <h4 className="font-bold text-xs text-gray-400 uppercase tracking-wider">
              Quick Portal Shortcuts
            </h4>
            <div className="space-y-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#12223B] flex items-center justify-between cursor-pointer"
              >
                <span>Download Architectural Blueprints PDF</span>
                <Download className="w-3.5 h-3.5 text-gray-400" />
              </button>
              <Link
                href="/dashboard/admin/billing"
                className="w-full p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#12223B] flex items-center justify-between"
              >
                <span>View Full Payment Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
