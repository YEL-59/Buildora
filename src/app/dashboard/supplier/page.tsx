"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Truck,
  FileText,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  Building2,
  Calendar,
  Layers,
  ShoppingBag,
  Package,
  Award,
  Receipt,
  Plus,
  Send,
  X,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

interface ScheduleItem {
  id: string;
  title: string;
  dept: string;
  completed: boolean;
}

export default function SupplierOverviewPage() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    {
      id: "s1",
      title: "Load and weigh 12 Tons ASTM A615 Grade 60 #5 Rebar on Freightliner Unit #44 for PRJ-901",
      dept: "Rebar Dispatch",
      completed: true,
    },
    {
      id: "s2",
      title: "Batch 32 Cu. Yds 4000 PSI concrete mix at 12:45 PM for 01:45 PM Bel Air site arrival",
      dept: "Batching Plant",
      completed: true,
    },
    {
      id: "s3",
      title: "Upload Twining Lab 28-day break test certificate for LOT-8812-A to GC compliance vault",
      dept: "QA / MTR",
      completed: true,
    },
    {
      id: "s4",
      title: "Prepare moisture-sealed staging pallets for 80 bundles European White Oak (PO-8815)",
      dept: "Timber Yard",
      completed: false,
    },
    {
      id: "s5",
      title: "Verify calibrate scale weights on Aggregate Hopper #2 per Caltrans Section 90 specs",
      dept: "Plant Maintenance",
      completed: false,
    },
  ]);

  const [po8820Confirmed, setPo8820Confirmed] = useState(false);

  // Modals
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Dispatch Form State
  const [dispatchRig, setDispatchRig] = useState("Freightliner M2-106 (Unit #44)");
  const [dispatchDriver, setDispatchDriver] = useState("Darius Thorne");
  const [dispatchDestination, setDispatchDestination] = useState("Modern Family Villa (Gate 2, Bel Air)");
  const [dispatchCargo, setDispatchCargo] = useState("12 Tons Grade 60 Rebar + 32 Cu Yd Ready-Mix Concrete");

  // Quote Form State
  const [quoteProject, setQuoteProject] = useState("Modern Family Villa (PRJ-901)");
  const [quoteItems, setQuoteItems] = useState("120 Bundles FSC White Oak Planks 5/4x6");
  const [quotePrice, setQuotePrice] = useState("13800");

  const toggleScheduleItem = (id: string) => {
    setScheduleItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleConfirmPo8820 = () => {
    setPo8820Confirmed(true);
    setToastMessage("PO-8820 confirmed and unit prices locked. Moved to Awaiting Dispatch queue.");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDispatchModalOpen(false);
    setToastMessage(`Heavy Fleet Unit dispatched to ${dispatchDestination}. Live GPS tracking initiated.`);
    setTimeout(() => setToastMessage(""), 5000);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuoteModalOpen(false);
    setToastMessage(`Price quotation of $${parseInt(quotePrice, 10).toLocaleString()} USD transmitted to GC Lead PE Sophia Bennett.`);
    setTimeout(() => setToastMessage(""), 5000);
  };

  const completedScheduleCount = scheduleItems.filter((i) => i.completed).length;

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A]/40 flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="text-gray-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hero Banner */}
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-[#12223B] text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden border border-white/10 shadow-xl">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFDB5A]/20 text-[#FFDB5A] border border-[#FFDB5A]/30 text-xs font-semibold uppercase tracking-wider">
                    <Truck className="w-3.5 h-3.5" />
                    VND-APX-7719
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Rating: Tier 1 Certified (AAA)
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Apex Heavy Materials & Industrial Supply Co.
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-medium">
                  Key Accounts Lead: <strong className="text-white">Viktor Petrov</strong> • Category: Concrete, Aggregates & Structural Steel (Div 03 / 05)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsDispatchModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
                >
                  <Truck className="w-4 h-4" />
                  Dispatch Fleet Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer border border-white/20"
                >
                  <FileText className="w-4 h-4 text-[#FFDB5A]" />
                  Submit Price Quote
                </button>
              </div>
            </div>

            {/* Metadata Badges Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-medium text-gray-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFDB5A] shrink-0" />
                <span>Primary Terminal: Apex Central Batching & Staging</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dispatch Gate: +1 (555) 892-4400 (Gate 4)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Active Heavy Fleet: 12 Mixers & Heavy Semis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Compliance: ASTM / AASHTO Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm hover:border-[#FFDB5A] transition-all">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Revenue YTD</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#12223B]">$384.5k USD</p>
            <p className="text-xs text-gray-400 font-medium">6 active master supplier agreements</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm hover:border-[#FFDB5A] transition-all">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Active PO Pipeline</p>
            <p className="text-2xl sm:text-3xl font-semibold text-blue-700">4 Orders</p>
            <p className="text-xs text-blue-800 font-semibold bg-blue-50 px-2 py-0.5 rounded w-fit">
              $65.3k committed purchase orders
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm hover:border-[#FFDB5A] transition-all">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Fleet Shipments Today</p>
            <p className="text-2xl sm:text-3xl font-semibold text-emerald-700">1 In Transit</p>
            <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded w-fit">
              ETA 01:45 PM PRJ-901 Rebar
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm hover:border-[#FFDB5A] transition-all">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Pending Receivables</p>
            <p className="text-2xl sm:text-3xl font-semibold text-amber-700">$46.8k Net 30</p>
            <p className="text-xs text-gray-400 font-medium">$22.8k due within 15 days</p>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column: POs & Schedule (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Incoming Purchase Orders */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Incoming Purchase Orders & Requisitions
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Requisitions submitted by Builtex Site Engineers and Project Executives
                  </p>
                </div>
                <Link
                  href="/dashboard/supplier/orders"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#12223B] hover:text-amber-600 transition-colors"
                >
                  All POs
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4">
                {/* PO-8812 */}
                <div className="p-4 rounded-xl border border-gray-200 bg-[#F9F9F9] hover:border-[#FFDB5A] transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                        PO-8812
                      </span>
                      <span className="text-xs font-semibold text-gray-700">
                        Modern Family Villa (PRJ-901)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Confirmed & In Transit
                      </span>
                      <span className="text-sm font-semibold text-[#12223B]">
                        $14,800 USD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600 font-medium pl-1">
                    <p>• 12 Tons of ASTM A615 Grade 60 #5 (5/8&quot;) Deformed Steel Rebar ($10,200)</p>
                    <p>• 32 Cu. Yds of Ready-Mix Concrete 4000 PSI High-Early Strength ($4,600)</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500">
                    <span>Required By: <strong className="text-gray-900">Today, Oct 05 (02:00 PM)</strong></span>
                    <span>Requisition By: <strong className="text-gray-900">Sophia Bennett (Lead PE)</strong></span>
                  </div>
                </div>

                {/* PO-8815 */}
                <div className="p-4 rounded-xl border border-gray-200 bg-[#F9F9F9] hover:border-[#FFDB5A] transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                        PO-8815
                      </span>
                      <span className="text-xs font-semibold text-gray-700">
                        Modern Family Villa (PRJ-901)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Awaiting Dispatch
                      </span>
                      <span className="text-sm font-semibold text-[#12223B]">
                        $9,200 USD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600 font-medium pl-1">
                    <p>• 80 Bundles of FSC European White Oak Kiln-Dried Planks 5/4x6 ($9,200)</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500">
                    <span>Required By: <strong className="text-gray-900">Oct 08, 2026</strong></span>
                    <span>Requisition By: <strong className="text-gray-900">Sophia Bennett (Lead PE)</strong></span>
                  </div>
                </div>

                {/* PO-8809 */}
                <div className="p-4 rounded-xl border border-gray-200 bg-[#F9F9F9] hover:border-[#FFDB5A] transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                        PO-8809
                      </span>
                      <span className="text-xs font-semibold text-gray-700">
                        Modern Family Villa (PRJ-901)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Delivered & Signed
                      </span>
                      <span className="text-sm font-semibold text-[#12223B]">
                        $22,800 USD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600 font-medium pl-1">
                    <p>• 160 Cu. Yds of Type II/V Portland Low-Heat Sulfate-Resistant Cement ($22,800)</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500">
                    <span>Required By: <strong className="text-gray-900">Sep 30, 2026</strong></span>
                    <span>Requisition By: <strong className="text-gray-900">Michael Anderson (Executive PM)</strong></span>
                  </div>
                </div>

                {/* PO-8820 */}
                <div className="p-4 rounded-xl border border-gray-200 bg-[#F9F9F9] hover:border-[#FFDB5A] transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                        PO-8820
                      </span>
                      <span className="text-xs font-semibold text-gray-700">
                        Modern Family Villa (PRJ-901)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                          po8820Confirmed
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-purple-50 text-purple-700 border-purple-200"
                        }`}
                      >
                        {po8820Confirmed ? "Awaiting Dispatch" : "Pending Confirmation"}
                      </span>
                      <span className="text-sm font-semibold text-[#12223B]">
                        $18,500 USD
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600 font-medium pl-1">
                    <p>• 50 Bundles of Commercial FSC Ipe Hardwood Decking 5/4x6x16&apos; ($18,500)</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-200/60 text-[11px] text-gray-500">
                    <span>Required By: <strong className="text-gray-900">Oct 12, 2026</strong></span>
                    {po8820Confirmed ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Unit Price Locked
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={handleConfirmPo8820}
                        className="px-3 py-1 rounded-lg bg-[#12223B] text-[#FFDB5A] hover:bg-black font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Confirm PO & Lock Price
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Plant Dispatch & Staging Schedule */}
            <div className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Today&apos;s Plant Dispatch & Staging Schedule
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Terminal operations assigned for Viktor Petrov & Dispatch Gate 4
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                  {completedScheduleCount} / {scheduleItems.length} Completed
                </span>
              </div>

              <div className="space-y-2.5">
                {scheduleItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleScheduleItem(item.id)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-3 ${
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
                        {item.title}
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

          {/* Right Column: Active Fleet & Hub Quick Links & GC Contacts */}
          <div className="space-y-6">
            {/* Live Fleet Dispatch Card */}
            <div className="bg-[#12223B] text-white p-6 rounded-xl border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#FFDB5A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FFDB5A]">
                    Live Fleet Dispatch Active
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  In Transit
                </span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-sm font-semibold text-white">DEL-9901 (Unit #44)</p>
                <p className="text-xs text-gray-300 font-medium">
                  12 Tons Grade 60 Rebar + 32 Cu. Yd Concrete
                </p>
                <div className="pt-2 flex justify-between text-xs text-gray-300">
                  <span>Driver: <strong className="text-white">Darius Thorne</strong></span>
                  <span className="text-[#FFDB5A] font-semibold">ETA: 01:45 PM</span>
                </div>
              </div>

              {/* Progress track */}
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>Terminal Staging</span>
                  <span>78% En Route</span>
                  <span>Site Gate 2</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[#FFDB5A] rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>

              <Link
                href="/dashboard/supplier/deliveries"
                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Track Rig Manifest</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Supplier Operations Hub Quick Links */}
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-3 border-b border-gray-100">
                Supplier Operations Hub
              </h4>

              <div className="space-y-2">
                <Link
                  href="/dashboard/supplier/orders"
                  className="p-3 rounded-lg bg-[#F6F6F6] hover:bg-amber-50 hover:border-[#FFDB5A] border border-transparent flex items-center justify-between text-xs font-semibold text-[#12223B] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-4 h-4 text-[#12223B] group-hover:text-amber-600" />
                    <div>
                      <p>Purchase Orders</p>
                      <p className="text-[11px] text-gray-500 font-normal">Incoming GC requisitions</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </Link>

                <Link
                  href="/dashboard/supplier/deliveries"
                  className="p-3 rounded-lg bg-[#F6F6F6] hover:bg-amber-50 hover:border-[#FFDB5A] border border-transparent flex items-center justify-between text-xs font-semibold text-[#12223B] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-[#12223B] group-hover:text-amber-600" />
                    <div>
                      <p>Fleet Deliveries</p>
                      <p className="text-[11px] text-gray-500 font-normal">Live dispatch & POD notes</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </Link>

                <Link
                  href="/dashboard/supplier/inventory"
                  className="p-3 rounded-lg bg-[#F6F6F6] hover:bg-amber-50 hover:border-[#FFDB5A] border border-transparent flex items-center justify-between text-xs font-semibold text-[#12223B] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-[#12223B] group-hover:text-amber-600" />
                    <div>
                      <p>Material Catalog</p>
                      <p className="text-[11px] text-gray-500 font-normal">Stock levels & unit pricing</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </Link>

                <Link
                  href="/dashboard/supplier/quality"
                  className="p-3 rounded-lg bg-[#F6F6F6] hover:bg-amber-50 hover:border-[#FFDB5A] border border-transparent flex items-center justify-between text-xs font-semibold text-[#12223B] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#12223B] group-hover:text-amber-600" />
                    <div>
                      <p>Quality & MTRs</p>
                      <p className="text-[11px] text-gray-500 font-normal">Lab test reports & ASTM certs</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </Link>

                <Link
                  href="/dashboard/supplier/invoices"
                  className="p-3 rounded-lg bg-[#F6F6F6] hover:bg-amber-50 hover:border-[#FFDB5A] border border-transparent flex items-center justify-between text-xs font-semibold text-[#12223B] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Receipt className="w-4 h-4 text-[#12223B] group-hover:text-amber-600" />
                    <div>
                      <p>Billing & Invoices</p>
                      <p className="text-[11px] text-gray-500 font-normal">Net 30 invoices & remittances</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                </Link>
              </div>
            </div>

            {/* General Contractor Procurement Leads */}
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-sm">
              <h4 className="font-semibold text-base sm:text-lg text-[#12223B] pb-3 border-b border-gray-100">
                General Contractor Procurement Leads
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#12223B]">Sophia Bennett</p>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                      Lead Site PE
                    </span>
                  </div>
                  <p className="text-gray-500">Requisition Approver (PRJ-901)</p>
                  <p className="text-gray-800 font-mono pt-1">+1 (555) 438-9000</p>
                </div>

                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#12223B]">Michael Anderson</p>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                      Executive PM
                    </span>
                  </div>
                  <p className="text-gray-500">Commercial Contract Officer</p>
                  <p className="text-gray-800 font-mono pt-1">+1 (555) 890-2100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Dispatch Fleet Delivery */}
      {isDispatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Dispatch Fleet Transport
                  </h3>
                  <p className="text-xs text-gray-500">Issue Electronic Delivery Note (DN)</p>
                </div>
              </div>
              <button onClick={() => setIsDispatchModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleDispatchSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Heavy Transport Rig
                </label>
                <select
                  value={dispatchRig}
                  onChange={(e) => setDispatchRig(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  <option value="Freightliner M2-106 (Unit #44)">Freightliner M2-106 (Unit #44) - Heavy Flatbed</option>
                  <option value="Mack Granite 10-Yard Mixer (Unit #18)">Mack Granite 10-Yard Mixer (Unit #18) - Concrete</option>
                  <option value="Kenworth T880 Semi (Unit #09)">Kenworth T880 Semi (Unit #09) - Steel Hauler</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Assigned Driver
                  </label>
                  <input
                    type="text"
                    required
                    value={dispatchDriver}
                    onChange={(e) => setDispatchDriver(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Jobsite Destination
                  </label>
                  <input
                    type="text"
                    required
                    value={dispatchDestination}
                    onChange={(e) => setDispatchDestination(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Cargo & Material Manifest
                </label>
                <textarea
                  rows={2}
                  required
                  value={dispatchCargo}
                  onChange={(e) => setDispatchCargo(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsDispatchModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit Dispatch Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Submit Price Quote */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Submit Material Price Quote
                  </h3>
                  <p className="text-xs text-gray-500">Provide firm pricing for GC requisition</p>
                </div>
              </div>
              <button onClick={() => setIsQuoteModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Target Project
                </label>
                <input
                  type="text"
                  required
                  value={quoteProject}
                  onChange={(e) => setQuoteProject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Line Items & Specifications
                </label>
                <textarea
                  rows={3}
                  required
                  value={quoteItems}
                  onChange={(e) => setQuoteItems(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Firm Quoted Price ($ USD)
                </label>
                <input
                  type="number"
                  required
                  value={quotePrice}
                  onChange={(e) => setQuotePrice(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Formal Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
