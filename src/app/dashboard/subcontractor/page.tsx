"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Briefcase,
  Users,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  Sun,
  Phone,
  Clock,
  X,
  AlertTriangle,
  Send,
  Calendar,
} from "lucide-react";

interface MilestoneItem {
  id: number;
  text: string;
  dept: string;
  completed: boolean;
}

const initialMilestones: MilestoneItem[] = [
  {
    id: 1,
    text: "Living Pavilion ceiling: Complete blind-clip fastening on Grid Lines C4-C8",
    dept: "Ceiling Paneling",
    completed: true,
  },
  {
    id: 2,
    text: "Primary Wardrobe: Plumb laser alignment for Blum tip-on carcass slide mounts",
    dept: "Cabinetry",
    completed: true,
  },
  {
    id: 3,
    text: "Kitchen Island: Final micro-buff on Calacatta marble steel bracket reveals",
    dept: "Island Base",
    completed: true,
  },
  {
    id: 4,
    text: "Conduct daily 10-minute OSHA toolbox talk on HEPA dust extraction & eye wear",
    dept: "Safety Talk",
    completed: false,
  },
  {
    id: 5,
    text: "Stage Ipe hardwood decking bundles in exterior staging bay per Rev 3 specs",
    dept: "Decking",
    completed: false,
  },
];

export default function SubcontractorOverviewPage() {
  const [milestones, setMilestones] = useState<MilestoneItem[]>(initialMilestones);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isRfiModalOpen, setIsRfiModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Quick log modal form state
  const [craftCount, setCraftCount] = useState("8");
  const [shiftHours, setShiftHours] = useState("64");
  const [shiftNotes, setShiftNotes] = useState("");

  // RFI modal form state
  const [rfiSubject, setRfiSubject] = useState("");
  const [rfiDetails, setRfiDetails] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const toggleMilestone = (id: number) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const completedMilestones = milestones.filter((m) => m.completed).length;

  const handleTransmitLog = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogModalOpen(false);
    showToast(`Shift Crew Log (${craftCount} Craftsmen, ${shiftHours} hrs) transmitted to GC Field Office.`);
    setShiftNotes("");
  };

  const handleSubmitRfi = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRfiModalOpen(false);
    showToast(`Scope RFI "${rfiSubject || "Millwork Specification"}" transmitted to Lead Site Engineer Sophia Bennett.`);
    setRfiSubject("");
    setRfiDetails("");
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-slide-up">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Subcontract Ledger</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-gray-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="space-y-6 sm:space-y-8">
        {/* Top Hero Banner */}
        <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10 shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#FFDB5A] shrink-0">
                <Image
                  src="/images/author-2.jpg"
                  alt="Marcus Vance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-0.5 rounded-full">
                    CA-CSLB-994812 (C-6)
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    COI: Valid (Exp: Nov 15, 2027)
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Apex Millwork & Architectural Finishes LLC
                </h2>
                <p className="text-xs sm:text-sm text-gray-300">
                  Lead Superintendent: <strong className="text-white font-semibold">Marcus Vance</strong> • Assigned: <strong className="text-white font-semibold">Modern Family Villa (MV-2026)</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIsLogModalOpen(true)}
                className="px-4 py-2.5 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Transmit Crew Shift Log</span>
              </button>
              <button
                type="button"
                onClick={() => setIsRfiModalOpen(true)}
                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-white/20 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#FFDB5A]" />
                <span>Request Scope RFI</span>
              </button>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-gray-400 block">General Contractor:</span>
              <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5 truncate">
                <Briefcase className="w-3.5 h-3.5 text-[#FFDB5A]" />
                Builtex Construction & Engineering Corp.
              </strong>
            </div>
            <div>
              <span className="text-gray-400 block">Lead Site Engineer:</span>
              <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5 truncate">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                Sophia Bennett (PE Structural)
              </strong>
            </div>
            <div>
              <span className="text-gray-400 block">Today&apos;s Weather:</span>
              <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
                <Sun className="w-3.5 h-3.5 text-[#FFDB5A]" />
                74°F Clear, 8 mph Wind
              </strong>
            </div>
            <div>
              <span className="text-gray-400 block">Trade Division:</span>
              <strong className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5" />
                Div 06 — Finish Carpentry
              </strong>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Card 1: Subcontract Sum */}
          <Link
            href="/dashboard/subcontractor/work-orders"
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-sm"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                  Subcontract Sum
                </p>
                <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                  $248k
                </span>
                <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">USD</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                  4 active work orders assigned
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2: Total Billed */}
          <Link
            href="/dashboard/subcontractor/invoices"
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-sm"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                  Total Billed (74.4%)
                </p>
                <div className="w-10 h-10 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                  <Receipt className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                  $184.5k
                </span>
                <span className="text-base sm:text-lg font-semibold text-emerald-700 group-hover:text-[#12223B]/80 ml-1 transition-colors">
                  Earned
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900 transition-colors duration-300">
                  $156k Paid
                </span>
                <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                  1 pending review
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3: Retainage Held */}
          <Link
            href="/dashboard/subcontractor/invoices"
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-sm"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                  Retainage Held (10%)
                </p>
                <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-[#007EFF] group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                  $18.4k
                </span>
                <span className="text-base sm:text-lg font-semibold text-[#007EFF]/80 group-hover:text-[#12223B]/80 ml-1 transition-colors">
                  Held
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                  Release upon final substantial sign-off
                </span>
              </div>
            </div>
          </Link>

          {/* Card 4: Crew On-Site Today */}
          <Link
            href="/dashboard/subcontractor/crew-logs"
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-sm"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                  Crew On-Site Today
                </p>
                <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                  8
                </span>
                <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">Craftsmen</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                  6 Journeymen • 2 Apprentices (64 hrs)
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column: Work Packages & Milestones */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Active Work Packages & Scope */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#12223B]">
                    Active Work Packages & Scope
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                    Division 06 contracted scope progress and deliverables checklist
                  </p>
                </div>
                <Link
                  href="/dashboard/subcontractor/work-orders"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#12223B] hover:text-[#007EFF] transition-colors"
                >
                  All Packages <ArrowRight className="w-4.5 h-4.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {/* WO-06-101 */}
                <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-sm sm:text-base md:text-lg text-[#12223B]">
                        WO-06-101 • Living Pavilion White Oak Ceiling & Wall Paneling
                      </span>
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                        Active
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                      $94,000 USD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Supply and precision blind-clip installation of select European White Oak tongue-and-groove acoustic micro-perforated ceiling slats and concealed pivot door cladding.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Milestone Progress</span>
                      <span>88% Complete</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-[#12223B] rounded-full transition-all duration-500" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                    <span>Location: <strong className="text-gray-900 font-semibold">Level 1 — Main Living Pavilion & Gallery Corridor</strong></span>
                    <span>Target: <strong className="text-gray-900 font-semibold">Oct 25, 2026</strong></span>
                  </div>
                </div>

                {/* WO-06-102 */}
                <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-sm sm:text-base md:text-lg text-[#12223B]">
                        WO-06-102 • Custom Master Suite Walnut Walk-in Wardrobe & Vanities
                      </span>
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                        Active
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                      $78,000 USD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Bookmatched American Walnut veneered storage carcasses, integrated Blum soft-close tip-on hardware, leather drawer liners, and recessed bronze LED strip profiles.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Milestone Progress</span>
                      <span>62% Complete</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-[#12223B] rounded-full transition-all duration-500" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                    <span>Location: <strong className="text-gray-900 font-semibold">Level 2 — Primary Bedroom Suite & Primary Bath</strong></span>
                    <span>Target: <strong className="text-gray-900 font-semibold">Nov 10, 2026</strong></span>
                  </div>
                </div>

                {/* WO-06-103 */}
                <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-sm sm:text-base md:text-lg text-[#12223B]">
                        WO-06-103 • Gourmet Chef Kitchen Fluted Island Base & Prep Bar
                      </span>
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-amber-50 text-amber-800 border-amber-200">
                        Pending Inspection
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                      $46,000 USD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Curved tambour fluted solid oak island base enclosure, structural steel support brackets for 2cm Calacatta Gold marble overhang, and concealed waste bins.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Milestone Progress</span>
                      <span>95% Complete</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-[#12223B] rounded-full transition-all duration-500" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                    <span>Location: <strong className="text-gray-900 font-semibold">Level 1 — Gourmet Culinary Zone</strong></span>
                    <span>Target: <strong className="text-gray-900 font-semibold">Oct 05, 2026</strong></span>
                  </div>
                </div>

                {/* WO-06-104 */}
                <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-semibold text-sm sm:text-base md:text-lg text-[#12223B]">
                        WO-06-104 • Exterior Ipe Hardwood Decking & Concealed Drainage Step-Downs
                      </span>
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                        Active
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                      $30,000 USD
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Commercial-grade FSC-certified 5/4x6 Ipe decking with Camo concealed edge-fasteners, aluminum pedestals, and stainless steel access hatch frames.
                  </p>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                      <span>Milestone Progress</span>
                      <span>0% Complete</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full bg-[#12223B] rounded-full transition-all duration-500" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                    <span>Location: <strong className="text-gray-900 font-semibold">Outdoor — Poolside Sun Deck & Firepit Terrace</strong></span>
                    <span>Target: <strong className="text-gray-900 font-semibold">Nov 28, 2026</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Trade Shift Milestones */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#12223B]">
                    Today&apos;s Trade Shift Milestones
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                    On-site tasks assigned for Marcus Vance and Crew #4
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                  {completedMilestones} / {milestones.length} Completed
                </span>
              </div>

              <div className="space-y-3">
                {milestones.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleMilestone(item.id)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      item.completed
                        ? "bg-emerald-50/60 border-emerald-200 text-gray-700"
                        : "bg-[#F9F9F9] border-gray-200 hover:border-[#FFDB5A] text-[#12223B]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                          item.completed
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {item.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold leading-snug">
                        {item.text}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-700 shrink-0">
                      {item.dept}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pending Actions, Subcontractor Portals, GC Contacts */}
          <div className="space-y-6">
            {/* Pending Actions & Approvals */}
            <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl border border-white/10 space-y-4 shadow-lg">
              <h4 className="font-semibold text-base sm:text-lg text-[#FFDB5A] pb-2 border-b border-white/10">
                Pending Actions & Approvals
              </h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-white">Pay Application #4</span>
                    <span className="text-[#FFDB5A]">$28,500</span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Under GC Engineer review. Estimated disbursement: Oct 12.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-white">Punch Item P-042</span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs">
                      High Priority
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs">
                    Ceiling slat reveal shim alignment required before Oct 07.
                  </p>
                </div>
              </div>
            </div>

            {/* Subcontractor Portals */}
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
                Subcontractor Portals
              </h4>

              <Link
                href="/dashboard/subcontractor/work-orders"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                    <Briefcase className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-semibold text-[#12223B]">Work Packages</h5>
                    <p className="text-xs md:text-sm text-gray-500">Scope specs & drawings</p>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/dashboard/subcontractor/crew-logs"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-semibold text-[#12223B]">Daily Crew Logs</h5>
                    <p className="text-xs md:text-sm text-gray-500">Shift headcount & photos</p>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/dashboard/subcontractor/invoices"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center shrink-0">
                    <Receipt className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-semibold text-[#12223B]">AIA Pay Applications</h5>
                    <p className="text-xs md:text-sm text-gray-500">G702 billing & retainage</p>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/dashboard/subcontractor/safety"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-semibold text-[#12223B]">Safety & COI</h5>
                    <p className="text-xs md:text-sm text-gray-500">Insurance & OSHA cards</p>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/dashboard/subcontractor/punch-list"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#12223B] text-rose-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-sm md:text-base font-semibold text-[#12223B]">Punch List & QA</h5>
                    <p className="text-xs md:text-sm text-gray-500">1 open defect item</p>
                  </div>
                </div>
                <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* General Contractor Contacts */}
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
                General Contractor Contacts
              </h4>
              <div className="space-y-3.5">
                <div className="p-3.5 bg-[#F9F9F9] rounded-xl space-y-2 border border-gray-200/70">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm sm:text-base text-[#12223B]">Sophia Bennett</span>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      Lead Site PE
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Builtex Engineering Field Office</p>
                  <div className="flex items-center gap-3 pt-1 text-xs sm:text-sm text-gray-700 font-semibold">
                    <a href="tel:+15554389000" className="hover:text-[#12223B] flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-[#12223B]" />
                      +1 (555) 438-9000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Transmit Crew Shift Log */}
      {isLogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Transmit Crew Shift Log
                  </h3>
                  <p className="text-xs text-gray-500">Record daily craft headcount & hours</p>
                </div>
              </div>
              <button onClick={() => setIsLogModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleTransmitLog} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Craft Headcount
                  </label>
                  <input
                    type="number"
                    required
                    value={craftCount}
                    onChange={(e) => setCraftCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Total Man-Hours
                  </label>
                  <input
                    type="number"
                    required
                    value={shiftHours}
                    onChange={(e) => setShiftHours(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Shift Work Description
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summarize tasks completed today (e.g. Miter joint fastening on ceiling slats Grid C4-C8)..."
                  value={shiftNotes}
                  onChange={(e) => setShiftNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit Log
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Request Scope RFI */}
      {isRfiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Request Scope RFI
                  </h3>
                  <p className="text-xs text-gray-500">Transmit technical query to GC Site PE</p>
                </div>
              </div>
              <button onClick={() => setIsRfiModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitRfi} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  RFI Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Living Pavilion return air grille acoustic reveal variance"
                  value={rfiSubject}
                  onChange={(e) => setRfiSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Detailed Query & Drawing Reference
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail conflict or clarification needed against drawing sheet (e.g. Drawing D6.2 vs MEP coordination)..."
                  value={rfiDetails}
                  onChange={(e) => setRfiDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsRfiModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit RFI
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
