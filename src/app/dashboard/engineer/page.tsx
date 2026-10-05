"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HardHat,
  ClipboardList,
  Boxes,
  ShieldCheck,
  FileText,
  Sun,
  Users,
  Truck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  AlertTriangle,
  Upload,
  Plus,
} from "lucide-react";

export default function EngineerDashboardPage() {
  const [logSubmitted, setLogSubmitted] = useState(false);

  const materials = [
    {
      item: "Grade 60 Deformed Rebar (#5 & #7)",
      qty: "18 Tons",
      supplier: "Pacific Steel Supply",
      eta: "Arrived (Gate B)",
      status: "Verified",
    },
    {
      item: "4,000 PSI Ready-Mix Concrete",
      qty: "120 cu yards",
      supplier: "CEMEX Batch Plant",
      eta: "Pour at 13:00",
      status: "En Route",
    },
    {
      item: "Thermal Glazing Panels (Level 3)",
      qty: "24 Units",
      supplier: "ClearView Architectural",
      eta: "Tomorrow 08:30",
      status: "Scheduled",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Title & Jobsite Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Field Engineering</span>
            <span>/</span>
            <span className="text-[#3B82F6] font-semibold">Site Command</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Metro Business Center - Tower B
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Site Code: MBC-T2 • Lead Civil Engineer: Alex Rivera, PE
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/engineer/site-logs"
            className="px-4 py-2 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <ClipboardList className="w-4 h-4" />
            <span>Today's Log (Pending)</span>
          </Link>

          <Link
            href="/dashboard/engineer/requisition"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Boxes className="w-4 h-4 text-[#3B82F6]" />
            <span>Material Orders</span>
          </Link>
        </div>
      </div>

      {/* Field Conditions Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#FFDB5A] flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 font-medium">Weather &amp; Crane</span>
            <div className="text-sm font-bold text-white">74°F • Clear (Wind 5mph)</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 font-medium">Field Manpower</span>
            <div className="text-sm font-bold text-white">38 Crew Checked-In</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 font-medium">OSHA Safety Audit</span>
            <div className="text-sm font-bold text-white">100% PPE Compliant</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 font-medium">Deliveries Today</span>
            <div className="text-sm font-bold text-white">3 Scheduled / 1 Received</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Daily Site Log Submission & Materials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Daily Site Log (7 Cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>Daily Jobsite Engineering Log</span>
                <span className="text-[10px] font-bold bg-[#FFDB5A] text-[#12223B] px-2 py-0.5 rounded-full">
                  Pending
                </span>
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Required for municipal inspection compliance</p>
            </div>

            <span className="text-xs font-mono text-gray-400">
              Date: 2026-10-05
            </span>
          </div>

          {logSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Daily Site Log Submitted!</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Logged into the immutable municipal audit record and synced with the Super Admin dashboard.
              </p>
              <button
                onClick={() => setLogSubmitted(false)}
                className="mt-4 text-xs font-bold text-[#FFDB5A] hover:underline"
              >
                Edit Today's Entry
              </button>
            </div>
          ) : (
            <div className="pt-4 space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5">
                  Structural Milestones Completed Today
                </label>
                <input
                  type="text"
                  defaultValue="Level 2 core shear wall rebar cage tied and inspected. Ready for concrete pump."
                  className="w-full p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1.5">
                    Heavy Machinery in Operation
                  </label>
                  <input
                    type="text"
                    defaultValue="Tower Crane #1, Putzmeister 38m Pump"
                    className="w-full p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1.5">
                    Safety Incidents / Stoppages
                  </label>
                  <input
                    type="text"
                    defaultValue="0 Incidents • Toolbox safety talk held at 07:00"
                    className="w-full p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5">
                  Inspection Engineer Notes
                </label>
                <textarea
                  rows={3}
                  defaultValue="Concrete slump test conducted at 11:30 AM: 4.5 inches. Rebound hammer verification scheduled for tomorrow 09:00 AM."
                  className="w-full p-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-xs focus:outline-none focus:border-[#3B82F6] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Signed: Alex Rivera, PE #48910</span>
                <button
                  type="button"
                  onClick={() => setLogSubmitted(true)}
                  className="px-6 py-2.5 rounded-xl bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-md"
                >
                  Sign &amp; Submit Daily Log
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Material Requisition Table (5 Cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Material Requisitions
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Jobsite material tracking</p>
              </div>

              <Link
                href="/dashboard/engineer/requisition"
                className="text-xs font-bold text-[#3B82F6] hover:underline flex items-center gap-1"
              >
                <span>Order Material</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3.5 pt-4">
              {materials.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{m.item}</span>
                    <span className="text-[11px] font-bold text-[#FFDB5A]">{m.qty}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px] text-gray-400">
                    <span>{m.supplier}</span>
                    <span className="text-emerald-400 font-semibold">{m.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href="/dashboard/engineer/blueprints"
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#FFDB5A]" />
              <span>Open Structural Blueprints (Rev 4.2)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
