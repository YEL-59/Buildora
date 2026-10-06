"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Briefcase,
  Users,
  Receipt,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  Sun,
  Phone,
  Clock,
  AlertCircle,
  X,
  Check,
} from "lucide-react";

interface TradeMilestone {
  id: number;
  text: string;
  location: string;
  completed: boolean;
}

const INITIAL_MILESTONES: TradeMilestone[] = [
  {
    id: 1,
    text: "Miter joint fastening on Living Pavilion acoustic ceiling slats (Grid C4-C8)",
    location: "Pavilion Ceiling",
    completed: true,
  },
  {
    id: 2,
    text: "Blum concealed soft-close slide calibration on Master Suite wardrobe drawers",
    location: "Primary Suite",
    completed: true,
  },
  {
    id: 3,
    text: "Precision tambour tambour wood wrapping on gourmet kitchen island curved end",
    location: "Kitchen Island",
    completed: true,
  },
  {
    id: 4,
    text: "Moisture content and expansion gap verification on Gallery corridor baseboards",
    location: "Gallery Hall",
    completed: false,
  },
];

export default function SubcontractorOverviewPage() {
  const [milestones, setMilestones] = useState<TradeMilestone[]>(INITIAL_MILESTONES);
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
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleMilestone = (id: number) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const completedMilestones = milestones.filter((m) => m.completed).length;

  const handleTransmitLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shiftNotes.trim()) return;
    setIsLogModalOpen(false);
    setShiftNotes("");
    showToast("Shift Crew Log transmitted and submitted to GC Field Office.");
  };

  const handleSubmitRfi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rfiSubject.trim()) return;
    setIsRfiModalOpen(false);
    setRfiSubject("");
    setRfiDetails("");
    showToast("Scope RFI transmitted to Lead Engineer Sophia Bennett.");
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Subcontract Ledger</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#FFDB5A] flex-shrink-0">
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
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  COI: Valid (Exp: Nov 15, 2027)
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Apex Millwork &amp; Architectural Finishes LLC
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Lead Superintendent:{" "}
                <strong className="text-white font-semibold">Marcus Vance</strong> •
                Assigned:{" "}
                <strong className="text-white font-semibold">
                  Modern Family Villa (MV-2026)
                </strong>
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

        {/* Environmental & Contract Meta Strip */}
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-gray-400 block">General Contractor:</span>
            <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5 truncate">
              <Briefcase className="w-3.5 h-3.5 text-[#FFDB5A]" />
              <span>Buildora Construction &amp; Engineering Corp.</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Lead Site Engineer:</span>
            <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5 truncate">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>Sophia Bennett (PE Structural)</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Today&apos;s Weather:</span>
            <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
              <Sun className="w-3.5 h-3.5 text-[#FFDB5A]" />
              <span>74°F Clear, 8 mph Wind</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Trade Division:</span>
            <strong className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5 truncate">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Div 06 — Finish Carpentry</span>
            </strong>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* Subcontract Sum */}
        <Link
          href="/dashboard/subcontractor/work-orders"
          className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs block"
        >
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
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
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                USD
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                4 active work orders assigned
              </span>
            </div>
          </div>
        </Link>

        {/* Total Billed */}
        <Link
          href="/dashboard/subcontractor/invoices"
          className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs block"
        >
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
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
                <CheckCircle2 className="w-3 h-3" />
                $156k Paid
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                1 pending review
              </span>
            </div>
          </div>
        </Link>

        {/* Retainage Held */}
        <Link
          href="/dashboard/subcontractor/invoices"
          className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs block"
        >
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Retainage Held (10%)
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center transition-colors duration-300">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                $18.4k
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
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

        {/* Crew On-Site Today */}
        <Link
          href="/dashboard/subcontractor/crew-logs"
          className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs block"
        >
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
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
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Craftsmen
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                6 Journeymen • 2 Apprentices (64 hrs)
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left 2 Columns: Active Work Packages & Today's Shift */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Active Work Packages */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B]">
                  Active Work Packages &amp; Scope
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Division 06 contracted scope progress and deliverables checklist
                </p>
              </div>
              <Link
                href="/dashboard/subcontractor/work-orders"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#12223B] hover:text-[#007EFF] transition-colors"
              >
                <span>All Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {/* WO-06-101 */}
              <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                      WO-06-101 • Living Pavilion White Oak Ceiling &amp; Wall Paneling
                    </span>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                      Active
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                    $94,000 USD
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  Supply and precision blind-clip installation of select European White Oak tongue-and-groove acoustic micro-perforated ceiling slats and concealed pivot door cladding.
                </p>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                    <span>Milestone Progress</span>
                    <span>88% Complete</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-[#12223B] rounded-full transition-all duration-500"
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                  <span>
                    Location:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Level 1 — Main Living Pavilion &amp; Gallery Corridor
                    </strong>
                  </span>
                  <span>
                    Target:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Oct 25, 2026
                    </strong>
                  </span>
                </div>
              </div>

              {/* WO-06-102 */}
              <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                      WO-06-102 • Custom Master Suite Walnut Walk-in Wardrobe &amp; Vanities
                    </span>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-blue-50 text-blue-800 border-blue-200">
                      Active
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                    $78,000 USD
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  Bookmatched American Walnut veneered storage carcasses, integrated Blum soft-close tip-on hardware, leather drawer liners, and recessed bronze LED strip profiles.
                </p>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                    <span>Milestone Progress</span>
                    <span>62% Complete</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-[#12223B] rounded-full transition-all duration-500"
                      style={{ width: "62%" }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                  <span>
                    Location:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Level 2 — Primary Bedroom Suite &amp; Primary Bath
                    </strong>
                  </span>
                  <span>
                    Target:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Nov 10, 2026
                    </strong>
                  </span>
                </div>
              </div>

              {/* WO-06-103 */}
              <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                      WO-06-103 • Gourmet Chef Kitchen Fluted Island Base &amp; Prep Bar
                    </span>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-amber-50 text-amber-800 border-amber-200">
                      Pending Inspection
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                    $46,000 USD
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  Curved tambour fluted solid oak island base casework with internal water-resistant plywood sub-base for Calacatta Gold waterfall slabs.
                </p>
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-700">
                    <span>Milestone Progress</span>
                    <span>95% Complete</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-200/80 text-xs sm:text-sm text-gray-600 font-medium">
                  <span>
                    Location:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Level 1 — Kitchen &amp; Dining Area
                    </strong>
                  </span>
                  <span>
                    Target:{" "}
                    <strong className="text-gray-900 font-semibold">
                      Oct 15, 2026
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Trade Shift Milestones */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200/80 space-y-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                  Today&apos;s Trade Shift Milestones
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Sub-trade tasks logged by Foreman Marcus Vance for the 8-man shift
                </p>
              </div>
              <span className="text-xs sm:text-sm font-semibold px-3 py-1 bg-amber-50 text-amber-900 rounded-full border border-amber-200/60">
                {completedMilestones} / {milestones.length} Completed
              </span>
            </div>

            <div className="space-y-3.5">
              {milestones.map((m) => (
                <div
                  key={m.id}
                  onClick={() => toggleMilestone(m.id)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    m.completed
                      ? "bg-gray-50/80 border-gray-200 text-gray-400"
                      : "bg-white border-gray-200 hover:border-[#FFDB5A] text-[#12223B]"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${
                        m.completed
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {m.completed && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug ${
                        m.completed ? "line-through text-gray-400" : "text-[#12223B]"
                      }`}
                    >
                      {m.text}
                    </span>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 shrink-0">
                    {m.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Portals Navigation & GC Contacts */}
        <div className="space-y-6 sm:space-y-8">
          {/* Subcontractor Portals Links */}
          <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-xs">
            <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
              Subcontractor Portals
            </h4>

            <Link
              href="/dashboard/subcontractor/work-orders"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Work Packages</h5>
                  <p className="text-xs text-gray-500">Scope specs &amp; drawings</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/subcontractor/crew-logs"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center shrink-0">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Daily Crew Logs</h5>
                  <p className="text-xs text-gray-500">Shift headcount &amp; photos</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/subcontractor/invoices"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center shrink-0">
                  <Receipt className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">AIA Pay Applications</h5>
                  <p className="text-xs text-gray-500">G702 billing &amp; retainage</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/subcontractor/safety"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Safety &amp; COI</h5>
                  <p className="text-xs text-gray-500">Insurance &amp; OSHA cards</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/subcontractor/punch-list"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-rose-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Punch List &amp; QA</h5>
                  <p className="text-xs text-gray-500">1 open defect item</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* General Contractor Contacts */}
          <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-xs">
            <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
              General Contractor Contacts
            </h4>

            <div className="p-3.5 bg-[#F9F9F9] rounded-xl space-y-2 border border-gray-200/70">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#12223B]">Sophia Bennett</span>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Lead Site PE
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">Buildora Engineering Field Office</p>
              <div className="flex items-center gap-3 pt-1 text-xs text-gray-700 font-semibold">
                <a href="tel:+15554389000" className="hover:text-[#12223B] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#12223B]" />
                  <span>+1 (555) 438-9000</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Transmit Crew Shift Log */}
      {isLogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsLogModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFDB5A] bg-[#12223B] px-2.5 py-0.5 rounded-md inline-block">
                Daily Trade Transmission
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Transmit Crew Shift Log
              </h3>
              <p className="text-xs text-gray-500">
                Submit shift hours, craftsman headcount, and work accomplished to GC Field Management.
              </p>
            </div>

            <form onSubmit={handleTransmitLog} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Craftsmen Headcount
                  </label>
                  <input
                    type="number"
                    required
                    value={craftCount}
                    onChange={(e) => setCraftCount(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Total Shift Hours
                  </label>
                  <input
                    type="number"
                    required
                    value={shiftHours}
                    onChange={(e) => setShiftHours(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Scope Accomplished &amp; Inspection Observations
                </label>
                <textarea
                  rows={4}
                  required
                  value={shiftNotes}
                  onChange={(e) => setShiftNotes(e.target.value)}
                  placeholder="Describe linear feet installed, finishes applied, and equipment utilized..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Transmit Shift Log</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Request Scope RFI */}
      {isRfiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsRfiModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFDB5A] bg-[#12223B] px-2.5 py-0.5 rounded-md inline-block">
                Request For Information
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Request Scope RFI
              </h3>
              <p className="text-xs text-gray-500">
                Submit an architectural dimension discrepancy or engineering question to Lead PE Sophia Bennett.
              </p>
            </div>

            <form onSubmit={handleSubmitRfi} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  RFI Subject &amp; Drawing Sheet Reference
                </label>
                <input
                  type="text"
                  required
                  value={rfiSubject}
                  onChange={(e) => setRfiSubject(e.target.value)}
                  placeholder="e.g. Slat reveal spacing discrepancy on Sheet A1.1 Grid C6"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Specific Clarification Required
                </label>
                <textarea
                  rows={4}
                  required
                  value={rfiDetails}
                  onChange={(e) => setRfiDetails(e.target.value)}
                  placeholder="Describe field conditions, conflicting drawings, or requested engineer variance..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsRfiModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Submit RFI</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
