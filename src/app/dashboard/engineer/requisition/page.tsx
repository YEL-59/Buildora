"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Boxes, Plus, CheckCircle2, Truck } from "lucide-react";

export default function EngineerRequisitionPage() {
  const [ordered, setOrdered] = useState(false);

  const orders = [
    { id: "REQ-7101", item: "Grade 60 Deformed Steel Rebar (#5, #7, #9)", qty: "18.5 Tons", supplier: "Pacific Steel Supply", status: "Delivered (Gate B)", date: "Today, 08:30 AM" },
    { id: "REQ-7102", item: "4,000 PSI High-Early Ready-Mix Concrete", qty: "120 cu yards", supplier: "CEMEX Batch Plant #4", status: "In Transit", date: "Today, 11:00 AM" },
    { id: "REQ-7103", item: "Double-Glazed Low-E Curtain Wall Units", qty: "24 Panels", supplier: "ClearView Architectural", status: "Fabrication Complete", date: "Expected Tomorrow" },
    { id: "REQ-7104", item: "Heavy Duty Scaffold Ties & Guardrail Clamps", qty: "450 Units", supplier: "Safeway Scaffolding", status: "Delivered", date: "Oct 03, 2026" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/engineer" className="hover:text-white">Engineer</Link>
            <span>/</span>
            <span className="text-[#3B82F6] font-semibold">Material Requisition</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Jobsite Material Orders &amp; Staging
          </h1>
        </div>

        <button
          onClick={() => setOrdered(true)}
          className="px-4 py-2 rounded-xl bg-[#3B82F6] hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5 self-start cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Material Requisition</span>
        </button>
      </div>

      {ordered && (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>New requisition sent to Procurement &amp; Batch Plant Dispatch!</span>
        </div>
      )}

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-gray-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Requisition ID</th>
                <th className="p-4">Material Specification</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Supplier</th>
                <th className="p-4">Logistics Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-white/[0.02]">
                  <td className="p-4 font-mono font-bold text-[#FFDB5A]">{o.id}</td>
                  <td className="p-4 font-bold text-white">{o.item}</td>
                  <td className="p-4 font-bold text-[#FFDB5A]">{o.qty}</td>
                  <td className="p-4 text-gray-300">{o.supplier}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {o.status}
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
