"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Camera,
  Receipt,
  FileCheck,
  FolderArchive,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Phone,
  Video,
  Download,
  Send,
} from "lucide-react";

export default function ClientDashboardPage() {
  const [quickMessage, setQuickMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickMessage.trim()) {
      setMessageSent(true);
      setQuickMessage("");
      setTimeout(() => setMessageSent(false), 3000);
    }
  };

  const milestones = [
    {
      title: "1. Architectural Blueprints & City Permitting",
      amount: "$120,000",
      status: "Completed",
      date: "Jan 2026",
      isPaid: true,
    },
    {
      title: "2. Excavation, Foundation & Retaining Piles",
      amount: "$280,000",
      status: "Completed",
      date: "Apr 2026",
      isPaid: true,
    },
    {
      title: "3. Reinforced Concrete Superstructure & Slabs",
      amount: "$420,000",
      status: "Completed",
      date: "Jul 2026",
      isPaid: true,
    },
    {
      title: "4. Roofing, Glazing & Exterior Weatherproofing",
      amount: "$210,000",
      status: "In Progress (78%)",
      date: "Nov 2026",
      isPaid: false,
      isDue: true,
    },
    {
      title: "5. Interior Luxury Fitout & MEP Finishing",
      amount: "$220,000",
      status: "Upcoming",
      date: "Jan 2027",
      isPaid: false,
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Title & Project Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Client Property Portal</span>
            <span>/</span>
            <span className="text-[#00C975] font-semibold">PRJ-901 Overview</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Villa Horizon Luxury Residence
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Beverly Hills, CA • Contract: PRJ-901 • Handover: Nov 28, 2026
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/client/progress"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Camera className="w-4 h-4 text-[#00C975]" />
            <span>Live Camera Feed</span>
          </Link>

          <Link
            href="/dashboard/client/payments"
            className="px-4 py-2 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Receipt className="w-4 h-4" />
            <span>1 Payment Due ($45,000)</span>
          </Link>
        </div>
      </div>

      {/* Progress Showcase Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#00C975]/15 border border-[#00C975]/30 text-[#00C975] text-xs font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00C975] animate-pulse" />
                Construction Phase 4 Active
              </span>
              <span className="text-xs text-gray-400 font-medium">On Schedule</span>
            </div>

            <h2 className="text-2xl font-black text-white tracking-tight">
              78% Overall Project Completion
            </h2>

            <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
              Second-floor structural slab poured and cured. Double-glazed thermal curtain walls installed. Electrical and HVAC rough-ins are currently 65% complete.
            </p>

            {/* Giant Progress Bar */}
            <div className="pt-2">
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-gray-400">Current Progress</span>
                <span className="text-[#00C975]">78%</span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-white/10 p-0.5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00C975] to-emerald-400 shadow-[0_0_12px_#00C975] transition-all duration-700"
                  style={{ width: "78%" }}
                />
              </div>
            </div>
          </div>

          {/* Assigned Engineer Quick Card */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0F1E38] border border-white/10 flex flex-col justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#FFDB5A] text-[#12223B] flex items-center justify-center font-bold text-lg flex-shrink-0">
                AR
              </div>
              <div>
                <div className="text-sm font-bold text-white">Alex Rivera, PE</div>
                <div className="text-xs text-gray-400">Lead Project Engineer</div>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#00C975] font-medium mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C975]" />
                  Active on Jobsite
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
              <Link
                href="/dashboard/client/messages"
                className="py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#00C975]" />
                <span>3 New Messages</span>
              </Link>

              <a
                href="tel:+1213465789"
                className="py-2 px-3 rounded-lg bg-[#FFDB5A] hover:bg-white text-[#12223B] text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Engineer</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Live Site Snapshot & Milestone Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Milestone Payment Schedule (7 Cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Milestones &amp; Payment Schedule</span>
                <span className="text-[10px] font-bold bg-[#FFDB5A] text-[#12223B] px-2 py-0.5 rounded-full">
                  1 Due
                </span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">Verified against site inspection reports</p>
            </div>

            <Link
              href="/dashboard/client/payments"
              className="text-xs font-bold text-[#00C975] hover:underline flex items-center gap-1"
            >
              <span>Invoices</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-white/5 mt-2">
            {milestones.map((m, idx) => (
              <div key={idx} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {m.isPaid ? (
                    <CheckCircle2 className="w-5 h-5 text-[#00C975] flex-shrink-0" />
                  ) : m.isDue ? (
                    <AlertCircle className="w-5 h-5 text-[#FFDB5A] flex-shrink-0 animate-bounce" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className="text-xs font-bold text-white">{m.title}</h4>
                    <span className="text-[11px] text-gray-400">{m.status}</span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-bold text-white">{m.amount}</div>
                  {m.isPaid ? (
                    <span className="text-[10px] text-[#00C975] font-semibold">Paid</span>
                  ) : m.isDue ? (
                    <Link
                      href="/dashboard/client/payments"
                      className="inline-block mt-0.5 text-[10px] font-bold bg-[#FFDB5A] text-[#12223B] px-2 py-0.5 rounded"
                    >
                      Pay Now
                    </Link>
                  ) : (
                    <span className="text-[10px] text-gray-500">Upcoming</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Site Stream & Quick Messaging (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live CCTV Feed Preview */}
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#00C975]" />
                <span className="text-xs font-bold text-white">Live Jobsite Stream</span>
              </div>
              <span className="text-[10px] font-bold text-[#00C975] bg-[#00C975]/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C975] animate-ping" />
                CAM 01 • LIVE
              </span>
            </div>

            <div className="relative aspect-video rounded-xl bg-[#0A1424] border border-white/10 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="text-center z-10">
                <Camera className="w-8 h-8 text-[#FFDB5A] mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-white font-bold block">Villa Horizon - North Facade</span>
                <span className="text-[10px] text-gray-400">1080p HD • 30 FPS Stream Active</span>
              </div>

              <div className="absolute bottom-3 left-3 text-[10px] text-gray-300 z-10 font-mono">
                REC 2026-10-05 11:42:18 PST
              </div>

              <Link
                href="/dashboard/client/progress"
                className="absolute bottom-3 right-3 text-[10px] font-bold bg-white/20 hover:bg-white text-white hover:text-[#12223B] px-2.5 py-1 rounded-md z-10 transition-colors"
              >
                Expand 4 Cams
              </Link>
            </div>
          </div>

          {/* Quick Note to Site Engineer */}
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Quick Message to Alex Rivera</span>
              <span className="text-[10px] font-bold text-[#00C975]">Direct Jobsite Link</span>
            </h3>

            {messageSent ? (
              <div className="p-3 rounded-xl bg-[#00C975]/15 border border-[#00C975]/30 text-xs text-[#00C975] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Message dispatched directly to site engineer tablet!</span>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-2.5">
                <textarea
                  rows={2}
                  required
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  placeholder="Ask a question about today's concrete pour, schedule, or material change..."
                  className="w-full p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs placeholder-gray-400 focus:outline-none focus:border-[#00C975] resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send to Site Engineer</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
