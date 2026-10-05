"use client";

import React from "react";
import Link from "next/link";
import { Receipt, DollarSign, TrendingUp, Download, ArrowUpRight } from "lucide-react";

export default function AdminRevenuePage() {
  const invoices = [
    {
      id: "INV-2026-089",
      project: "Villa Horizon (PRJ-901)",
      client: "Michael Vance",
      amount: "$45,000",
      type: "Phase 4 Glazing Milestone",
      date: "Oct 05, 2026",
      status: "Due",
      badgeBg: "bg-[#FFDB5A]/15 text-[#FFDB5A] border-[#FFDB5A]/30",
    },
    {
      id: "INV-2026-088",
      project: "Metro Tower B (PRJ-904)",
      client: "Starlight Corp",
      amount: "$320,000",
      type: "Level 14 Slab Milestone",
      date: "Oct 01, 2026",
      status: "Paid",
      badgeBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "INV-2026-087",
      project: "Pacific Eco-Residence (PRJ-882)",
      client: "Elena Rostova",
      amount: "$88,000",
      type: "Exterior Hardscaping",
      date: "Sep 28, 2026",
      status: "Paid",
      badgeBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "INV-2026-086",
      project: "Summit Ridge (PRJ-915)",
      client: "Vertex Logistics",
      amount: "$150,000",
      type: "Deep Soil Retention",
      date: "Sep 24, 2026",
      status: "Paid",
      badgeBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/admin" className="hover:text-white">Admin</Link>
            <span>/</span>
            <span className="text-[#FFDB5A] font-semibold">Invoices &amp; Revenue</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Financial Ledger &amp; Cash Flow
          </h1>
        </div>

        <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition-colors flex items-center gap-1.5 self-start">
          <Download className="w-4 h-4 text-[#FFDB5A]" />
          <span>Export Quickbooks/CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Billed Q3 2026</span>
          <div className="text-2xl font-extrabold text-white mt-1">$1,480,000</div>
          <span className="text-xs text-emerald-400 font-semibold mt-1 block">+12.4% vs Q2</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Outstanding Receivables</span>
          <div className="text-2xl font-extrabold text-[#FFDB5A] mt-1">$45,000</div>
          <span className="text-xs text-gray-400 font-semibold mt-1 block">1 Invoice Due</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Gross Profit Margin</span>
          <div className="text-2xl font-extrabold text-white mt-1">28.6%</div>
          <span className="text-xs text-emerald-400 font-semibold mt-1 block">Optimal Industry Standard</span>
        </div>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-white/10 font-bold text-sm text-white">
          Recent Project Invoices
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-gray-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Invoice #</th>
                <th className="p-4">Project &amp; Client</th>
                <th className="p-4">Milestone Scope</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02]">
                  <td className="p-4 font-mono font-bold text-[#FFDB5A]">{inv.id}</td>
                  <td className="p-4">
                    <span className="text-white font-bold block">{inv.project}</span>
                    <span className="text-gray-400 text-[11px]">{inv.client}</span>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{inv.type}</td>
                  <td className="p-4 text-gray-400">{inv.date}</td>
                  <td className="p-4 font-extrabold text-white">{inv.amount}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${inv.badgeBg}`}>
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
