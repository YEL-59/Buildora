"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, Eye, Layers } from "lucide-react";

export default function EngineerBlueprintsPage() {
  const blueprints = [
    { code: "DWG-C101", title: "Core Shear Wall Rebar Placement & Splices (Rev 4.2)", scale: '1/4" = 1\'-0"', engineer: "Alex Rivera, PE", updated: "Oct 04, 2026" },
    { code: "DWG-S202", title: "Tower Crane Tieback Collar & Column Support Load Calculations", scale: '1/2" = 1\'-0"', engineer: "Sarah Jenkins, SE", updated: "Sep 29, 2026" },
    { code: "DWG-M304", title: "Sub-Slab High-Pressure Plumbing & Fire Sprinkler Risers", scale: '1/4" = 1\'-0"', engineer: "Tariq Mansoor, PE", updated: "Sep 22, 2026" },
    { code: "DWG-A501", title: "Exterior Curtain Wall Wind-Load Anchor Clip Details", scale: '1" = 1\'-0"', engineer: "Alex Rivera, PE", updated: "Sep 15, 2026" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/engineer" className="hover:text-white">Engineer</Link>
          <span>/</span>
          <span className="text-[#3B82F6] font-semibold">Field Blueprints</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          Active Engineering CAD &amp; Structural Blueprints
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blueprints.map((b, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#FFDB5A] bg-[#FFDB5A]/10 px-2 py-0.5 rounded">
                  {b.code}
                </span>
                <span className="text-[11px] text-gray-400">Scale: {b.scale}</span>
              </div>
              <h2 className="text-sm font-bold text-white leading-tight">
                {b.title}
              </h2>
              <p className="text-xs text-gray-400 mt-2">
                Stamped by: <strong className="text-gray-300">{b.engineer}</strong>
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Rev: {b.updated}</span>
              <button className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer">
                <Download className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Open CAD PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
