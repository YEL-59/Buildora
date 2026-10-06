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
  ArrowUpRight,
  FileText,
  MessageSquare,
  AlertCircle,
  FileCheck,
  FolderLock,
  ChevronRight,
} from "lucide-react";

export default function ClientDashboardPage() {
  const phases = [
    {
      stage: "Stage 1",
      name: "Phase 1: Site Excavation & Foundation",
      status: "100% Done",
      completed: true,
      desc: "Deep earth excavation, seismic soil compaction, reinforced rebar cage grid, and 4500 PSI waterproof concrete slab pour.",
      progress: 100,
    },
    {
      stage: "Stage 2",
      name: "Phase 2: Structural Steel & Timber Framing",
      status: "100% Done",
      completed: true,
      desc: "Structural steel H-beam framing, exterior shear wall plywood sheathing, roof truss rigging, and high-performance weatherwrap.",
      progress: 100,
    },
    {
      stage: "Stage 3",
      name: "Phase 3: MEP & Insulation Rough-In",
      status: "100% Done",
      completed: true,
      desc: "PEX plumbing manifold lines, 400A smart electrical wiring panel, multi-zone ducted HVAC heat pump, and rockwool sound insulation.",
      progress: 100,
    },
    {
      stage: "Stage 4",
      name: "Phase 4: Interior Finishing & Architectural Glass",
      status: "78% In Progress",
      active: true,
      desc: "Level 5 drywall mud & skim, custom European white oak hardwood floors, panoramic floor-to-ceiling double-glazed doors, and bespoke kitchen cabinetry.",
      progress: 78,
    },
    {
      stage: "Stage 5",
      name: "Phase 5: Exterior Landscaping & Key Handover",
      status: "Upcoming",
      upcoming: true,
      desc: "Infinity plunge pool travertine coping, architectural exterior LED uplighting, perimeter drought-tolerant landscaping, city occupancy permit, and white-glove handover ceremony.",
      progress: 0,
    },
  ];

  const recentPhotos = [
    {
      title: "Panoramic Glass Window Wall Installed",
      time: "Today at 09:15 AM",
      img: "/images/project-1.jpg",
      tag: "Interior Glass",
    },
    {
      title: "Custom White Oak Hardwood Flooring Laid",
      time: "Yesterday at 04:30 PM",
      img: "/images/expertise-item-image-2.jpg",
      tag: "Flooring",
    },
    {
      title: "Exterior Facade Cedar Cladding Completed",
      time: "Oct 02, 2026",
      img: "/images/service-image-1.jpg",
      tag: "Exterior",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Property Hero Header Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-2xl relative overflow-hidden border border-white/10 shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#12223B] bg-[#FFDB5A] px-2.5 py-0.5 rounded">
                PRJ-901
              </span>
              <span className="text-xs text-gray-300 font-medium">
                Lot #42 Oakridge Estates
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Modern Family Villa
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFDB5A]" />
              <span>Jobsite: Central Valley, CA</span>
              <span>•</span>
              <span>Supervised by Sophia Bennett (Lead PE)</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">
                Total Completion
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#FFDB5A] mt-0.5">
                78%
              </h4>
              <span className="text-[10px] text-gray-300">Phase 4 Active</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">
                Target Handover
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                52 Days
              </h4>
              <span className="text-[10px] text-gray-300">Nov 25, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Quick Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Total Completion */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Total Completion
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12223B] mt-1">
            78%
          </h3>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">
            Phase 4 Active
          </p>
        </div>

        {/* Target Handover */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Target Handover
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12223B] mt-1">
            52 Days
          </h3>
          <p className="text-[11px] text-gray-500 mt-1">Nov 25, 2026</p>
        </div>

        {/* Total Contract */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Total Contract
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12223B] mt-1">
            $850k
          </h3>
          <p className="text-[11px] text-gray-500 mt-1">Fixed-price agreement</p>
        </div>

        {/* Paid to Date */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Paid to Date
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-600 mt-1">
            $663k
          </h3>
          <p className="text-[11px] text-gray-500 mt-1">3 of 5 settled</p>
        </div>

        {/* Next Due Milestone */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Next Due Milestone
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-amber-600 mt-1">
            $119k
          </h3>
          <p className="text-[11px] text-gray-500 mt-1">Due Oct 15, 2026</p>
        </div>

        {/* Site Weather */}
        <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-2xs">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
            Site Weather
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#12223B] mt-1 flex items-center gap-1.5">
            <CloudSun className="w-5 h-5 text-amber-500" />
            <span>72°F</span>
          </h3>
          <p className="text-[11px] text-gray-500 mt-1">Sunny & Clear</p>
        </div>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Phases & Photo Journal (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Construction Phases & Milestones */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
                  Construction Phases & Milestones
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Engineering signoffs tracked by site supervisors
                </p>
              </div>
              <Link
                href="/dashboard/client/projects"
                className="text-xs font-bold text-[#12223B] hover:text-amber-600 flex items-center gap-1 transition-colors"
              >
                <span>View Live Feed</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {phases.map((p, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    p.active
                      ? "border-[#FFDB5A] bg-amber-50/20 shadow-2xs"
                      : p.completed
                      ? "border-gray-200/80 bg-white"
                      : "border-gray-200/60 bg-gray-50/60 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {p.stage}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        p.completed
                          ? "bg-emerald-100 text-emerald-800"
                          : p.active
                          ? "bg-[#FFDB5A] text-[#12223B]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#12223B]">
                    {p.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden mt-3">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        p.completed
                          ? "bg-emerald-500"
                          : p.active
                          ? "bg-[#FFDB5A]"
                          : "bg-gray-300"
                      }`}
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent On-Site Photo Journal */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-2xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
                  Recent On-Site Photo Journal
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Uploaded directly by Lead Engineer Sophia Bennett
                </p>
              </div>
              <Link
                href="/dashboard/client/projects"
                className="text-xs font-bold text-[#12223B] hover:text-amber-600 flex items-center gap-1 transition-colors"
              >
                <span>Full Photo Log</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group rounded-xl overflow-hidden border border-gray-200/80 bg-white shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={photo.img}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      {photo.tag}
                    </div>
                  </div>
                  <div className="p-3.5 space-y-1">
                    <span className="text-[10px] text-gray-400 font-medium block">
                      {photo.time}
                    </span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#12223B] line-clamp-2 leading-snug">
                      {photo.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Engineer, Change Order & Shortcuts (1 Col) */}
        <div className="space-y-6">
          {/* Lead Site Engineer Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Lead Site Engineer
            </h4>

            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#12223B] flex-shrink-0">
                <Image
                  src="/images/author-2.jpg"
                  alt="Sophia Bennett"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#12223B]">
                  Sophia Bennett
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  Licensed Lead Site Engineer (PE #88412)
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    On Jobsite Today
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-2 border-t border-gray-100">
              <a
                href="tel:+1(555)349-8120"
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+1 (555) 349-8120</span>
              </a>
              <a
                href="mailto:s.bennett@buildora.com"
                className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-400" />
                <span>s.bennett@buildora.com</span>
              </a>
            </div>

            <Link
              href="/dashboard/client/messages"
              className="w-full py-2.5 px-4 rounded-xl bg-[#12223B] hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-[#FFDB5A]" />
              <span>Open Live Engineer Chat</span>
            </Link>
          </div>

          {/* Change Order Awaiting Signoff Card */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-300/80 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Pending Approval</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                CO-02
              </span>
            </div>

            <h4 className="text-sm font-bold text-[#12223B]">
              Solar Roof Array & Tesla Powerwall 3 Battery Backup
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              12.4 kW concealed solar panels paired with 2x Tesla Powerwall 3 units. +$18,500 budget impact, 0 days schedule impact.
            </p>

            <Link
              href="/dashboard/client/change-orders"
              className="w-full py-2.5 px-4 rounded-xl bg-[#FFDB5A] hover:bg-amber-400 text-[#12223B] text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <FileCheck className="w-4 h-4" />
              <span>Review & Approve Change Order</span>
            </Link>
          </div>

          {/* Quick Portal Shortcuts */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Quick Portal Shortcuts
            </h4>

            <div className="space-y-2">
              <Link
                href="/dashboard/client/payments"
                className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#FFDB5A] hover:bg-amber-50/20 transition-all text-xs font-bold text-[#12223B]"
              >
                <div className="flex items-center gap-2.5">
                  <DollarSign className="w-4 h-4 text-amber-600" />
                  <span>Milestone Invoices & Receipts</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>

              <Link
                href="/dashboard/client/documents"
                className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#FFDB5A] hover:bg-amber-50/20 transition-all text-xs font-bold text-[#12223B]"
              >
                <div className="flex items-center gap-2.5">
                  <FolderLock className="w-4 h-4 text-blue-600" />
                  <span>Blueprints & Permits Vault</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
