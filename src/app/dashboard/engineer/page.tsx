"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Sun,
  Wind,
  ShieldCheck,
  CheckCircle2,
  Users,
  Truck,
  FileText,
  ClipboardList,
  Boxes,
  ArrowRight,
  Phone,
  MessageSquare,
  AlertCircle,
  X,
  Check,
} from "lucide-react";

interface PunchItem {
  id: number;
  text: string;
  category: "Glazing" | "Carpentry" | "Electrical" | "Material" | "Safety";
  completed: boolean;
}

const INITIAL_PUNCH_LIST: PunchItem[] = [
  {
    id: 1,
    text: "Verify airtight smoke pencil test on sliding glass panels",
    category: "Glazing",
    completed: true,
  },
  {
    id: 2,
    text: "Check moisture content of master suite European oak planks (< 10%)",
    category: "Carpentry",
    completed: true,
  },
  {
    id: 3,
    text: "Inspect Lutron electrical subpanel torque terminations",
    category: "Electrical",
    completed: false,
  },
  {
    id: 4,
    text: "Sign off delivery inspection of Grade 60 Rebar bundle (PO-8812)",
    category: "Material",
    completed: false,
  },
  {
    id: 5,
    text: "Conduct 10-minute daily safety toolbox talk on trip hazards",
    category: "Safety",
    completed: true,
  },
];

export default function EngineerDashboardPage() {
  const [punchList, setPunchList] = useState<PunchItem[]>(INITIAL_PUNCH_LIST);
  const [isOnDuty, setIsOnDuty] = useState(true);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New quick log state
  const [logSummary, setLogSummary] = useState("");
  const [workersCount, setWorkersCount] = useState("34");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const togglePunch = (id: number) => {
    setPunchList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = punchList.filter((p) => p.completed).length;

  const handleCreateLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!logSummary.trim()) return;
    setIsLogModalOpen(false);
    setLogSummary("");
    showToast("Daily Site Log transmitted and synced with HQ and Client Portal.");
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
            <p className="text-xs font-semibold text-[#FFDB5A]">Field Journal Updated</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Header Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-[#FFDB5A] flex-shrink-0">
              <Image
                src="/images/author-2.jpg"
                alt="Sophia Bennett"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-0.5 rounded-full">
                  CA-PE #98421
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${
                    isOnDuty
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOnDuty ? "bg-emerald-400 animate-pulse" : "bg-gray-400"
                    }`}
                  />
                  Status: {isOnDuty ? "On Site" : "Off Duty"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Sophia Bennett
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Assigned Site:{" "}
                <strong className="text-white font-semibold">
                  Modern Family Villa (PRJ-901)
                </strong>{" "}
                • Phase 4: Interior Finishes &amp; MEP
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsLogModalOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Transmit Daily Log</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOnDuty(!isOnDuty)}
              className="px-4 py-2.5 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer border bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              Toggle {isOnDuty ? "Off Duty" : "On Duty"}
            </button>
          </div>
        </div>

        {/* Environmental & Advisory Strip */}
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-gray-400 block">Site Weather:</span>
            <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
              <Sun className="w-3.5 h-3.5 text-[#FFDB5A]" />
              <span>74°F, Clear &amp; Sunny</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Wind Velocity:</span>
            <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
              <Wind className="w-3.5 h-3.5 text-blue-400" />
              <span>8 mph W</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Safety Record:</span>
            <strong className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>240 Days Incident-Free</span>
            </strong>
          </div>
          <div>
            <span className="text-gray-400 block">Concrete Advisory:</span>
            <strong className="text-[#FFDB5A] font-semibold flex items-center gap-1.5 mt-0.5 truncate">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Optimal Pour Window</span>
            </strong>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* Labor On-Site Today */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Labor On-Site Today
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                34
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Workers
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                5 Subcontractor trades active
              </span>
            </div>
          </div>
        </div>

        {/* PPE & Safety Audit */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                PPE &amp; Safety Audit
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                100%
              </span>
              <span className="text-base sm:text-lg font-semibold text-emerald-700 group-hover:text-[#12223B]/80 ml-1 transition-colors">
                Passed
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900 transition-colors duration-300">
                <CheckCircle2 className="w-3 h-3" />
                Grade A+
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                0 incidents
              </span>
            </div>
          </div>
        </div>

        {/* Material Deliveries */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Material Deliveries
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center transition-colors duration-300">
                <Truck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                4
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                POs
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                1 Rebar shipment in transit
              </span>
            </div>
          </div>
        </div>

        {/* Blueprint Vault */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Blueprint Vault
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                6
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Sheets
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                All certified Rev 4 drawings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column: Punch List & Recent Logs (2 Cols) */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Punch List */}
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200/80 space-y-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#12223B]">
                  Today&apos;s Engineering Punch-List &amp; Tasks
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Field inspections required before daily sign-off and concrete placement
                </p>
              </div>
              <span className="text-xs sm:text-sm font-semibold px-3 py-1 bg-amber-50 text-amber-900 rounded-full border border-amber-200/60">
                {completedCount} / {punchList.length} Completed
              </span>
            </div>

            <div className="space-y-3.5">
              {punchList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => togglePunch(item.id)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    item.completed
                      ? "bg-gray-50/80 border-gray-200 text-gray-400"
                      : "bg-white border-gray-200 hover:border-[#FFDB5A] text-[#12223B]"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors flex-shrink-0 ${
                        item.completed
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {item.completed && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug ${
                        item.completed ? "line-through text-gray-400" : "text-[#12223B]"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-md flex-shrink-0 border ${
                      item.category === "Safety"
                        ? "bg-rose-50 text-rose-700 border-rose-200/50"
                        : item.category === "Material"
                        ? "bg-purple-50 text-purple-700 border-purple-200/50"
                        : "bg-blue-50 text-blue-700 border-blue-200/50"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Field Inspection Logs */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200/80 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B]">
                  Recent Field Inspection Logs
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Synced with Super Admin HQ and Client property portal
                </p>
              </div>
              <Link
                href="/dashboard/engineer/logs"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#12223B] hover:text-[#007EFF] transition-colors"
              >
                <span>All Logs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* LOG-110 */}
            <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                    LOG-110 • Today, Oct 05
                  </span>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                    Verified by PE
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                  34 Workers On-Site
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-900 font-semibold leading-relaxed">
                Finished master wing flooring (95%). Verified airtightness of panoramic sliding glass walls with smoke pencil test.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-gray-200/80 text-xs sm:text-sm text-gray-700 font-medium">
                <span className="flex items-center gap-2">
                  <Truck className="w-4.5 h-4.5 text-purple-600 shrink-0" />
                  <span className="truncate max-w-sm">
                    120 sq meters European White Oak, 15 buckets polyurethane low-VOC adhesive, 400 linear ft cedar trims.
                  </span>
                </span>
                <span className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 flex items-center gap-2 shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>100% hardhat and high-visibility vest compliance. Scaffolding perimeter safety netting verified intact.</span>
                </span>
              </div>
            </div>

            {/* LOG-109 */}
            <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                    LOG-109 • Yesterday, Oct 04
                  </span>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                    Verified by PE
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                  31 Workers On-Site
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-900 font-semibold leading-relaxed">
                Completed structural window frame anchor torque testing (all bolts tightened to 110 ft-lbs).
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-gray-200/80 text-xs sm:text-sm text-gray-700 font-medium">
                <span className="flex items-center gap-2">
                  <Truck className="w-4.5 h-4.5 text-purple-600 shrink-0" />
                  <span className="truncate max-w-sm">
                    8 crates custom tempered Low-E glass panels from Schott Glassworks.
                  </span>
                </span>
                <span className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 flex items-center gap-2 shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>Spider crane outrigger pads double-cribbed with heavy timber mats. Zero near-misses.</span>
                </span>
              </div>
            </div>

            {/* LOG-108 */}
            <div className="p-5 sm:p-6 rounded-xl border border-gray-200/80 bg-[#F9F9F9] hover:bg-white hover:border-[#FFDB5A] transition-all space-y-3.5 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-semibold text-sm sm:text-base text-[#12223B]">
                    LOG-108 • Oct 02, 2026
                  </span>
                  <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                    Verified by PE
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-semibold bg-white px-3 py-1 rounded-lg border border-gray-200/60">
                  28 Workers On-Site
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-900 font-semibold leading-relaxed">
                HVAC duct pressure test passed with &lt;2% leakage (well under Title 24 6% limit).
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-gray-200/80 text-xs sm:text-sm text-gray-700 font-medium">
                <span className="flex items-center gap-2">
                  <Truck className="w-4.5 h-4.5 text-purple-600 shrink-0" />
                  <span className="truncate max-w-sm">
                    3 pallets Western Red Cedar vertical grain siding, 4 bundles vapor barrier membrane.
                  </span>
                </span>
                <span className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60 flex items-center gap-2 shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                  <span>Daily toolbox talk on ladder fall prevention and 3-point contact.</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Site Operations Hub & Contacts */}
        <div className="space-y-6 sm:space-y-8">
          {/* Site Operations Hub */}
          <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-xs">
            <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
              Site Operations Hub
            </h4>

            <Link
              href="/dashboard/engineer/logs"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                  <ClipboardList className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Daily Site Logs</h5>
                  <p className="text-xs text-gray-500">Submit field journals &amp; photos</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/engineer/materials"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center shrink-0">
                  <Boxes className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Material Orders</h5>
                  <p className="text-xs text-gray-500">Requisitions &amp; supplier POs</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/engineer/safety"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Safety &amp; PPE Audits</h5>
                  <p className="text-xs text-gray-500">OSHA compliance &amp; hazard logs</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/dashboard/engineer/blueprints"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F6F6] hover:bg-[#FFDB5A]/20 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center shrink-0">
                  <FileText className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-[#12223B]">Field Blueprints</h5>
                  <p className="text-xs text-gray-500">Certified CAD &amp; structural PDF</p>
                </div>
              </div>
              <ArrowRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#12223B] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Key Jobsite Contacts */}
          <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-xs">
            <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-2 border-b border-gray-100">
              Key Jobsite Contacts
            </h4>

            <div className="space-y-3.5">
              <div className="p-3.5 bg-[#F9F9F9] rounded-xl space-y-2 border border-gray-200/70">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#12223B]">Marcus Vance</span>
                  <span className="text-xs font-semibold text-[#007EFF] bg-blue-50 px-2.5 py-1 rounded-md">
                    Project Executive
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Head Office Construction PM</p>
                <div className="flex items-center gap-3 pt-1 text-xs text-gray-700 font-semibold">
                  <a href="tel:+15554389000" className="hover:text-[#12223B] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#12223B]" />
                    <span>+1 (555) 438-9000</span>
                  </a>
                </div>
              </div>

              <div className="p-3.5 bg-[#F9F9F9] rounded-xl space-y-2 border border-gray-200/70">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#12223B]">David Miller</span>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Villa Owner
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">PRJ-901 Property Client</p>
                <div className="flex items-center gap-3 pt-1 text-xs text-gray-700 font-semibold">
                  <Link
                    href="/dashboard/client/messages"
                    className="text-[#007EFF] hover:underline font-semibold flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open Direct Client Chat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Transmit Daily Log */}
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
                Field Journal Transmission
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Transmit Daily Site Log
              </h3>
              <p className="text-xs text-gray-500">
                Log today&apos;s trade work, milestone accomplishments, and inspection sign-offs directly to the master construction audit log.
              </p>
            </div>

            <form onSubmit={handleCreateLog} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Active Labor On-Site Today
                </label>
                <input
                  type="number"
                  required
                  value={workersCount}
                  onChange={(e) => setWorkersCount(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Work Accomplished &amp; Inspection Observations
                </label>
                <textarea
                  rows={4}
                  required
                  value={logSummary}
                  onChange={(e) => setLogSummary(e.target.value)}
                  placeholder="Detail completed milestones, weather impact, sub-trade headcount, and QA verifications..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-[11px] text-emerald-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                <span>
                  By transmitting, you certify as Licensed Professional Engineer (CA-PE #98421) that all logged site inspections comply with applicable building codes.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Transmit &amp; Sign</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
