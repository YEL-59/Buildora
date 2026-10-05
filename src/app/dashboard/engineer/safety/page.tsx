"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, AlertTriangle, HardHat, FileCheck } from "lucide-react";

export default function EngineerSafetyPage() {
  const [checkedAll, setCheckedAll] = useState(true);

  const checklist = [
    { title: "Hard Hat & High-Visibility Vest Mandatory Compliance", status: "100% Verified (Gate A & B)", pass: true },
    { title: "Fall Protection Harnesses & Perimeter Leading-Edge Guardrails", status: "Checked across Level 2 deck", pass: true },
    { title: "Tower Crane Daily Pre-Operational Inspection & Rigging Slings", status: "Certified by Master Rigger", pass: true },
    { title: "Excavation Trench Shoring & Sloping Stability Verification", status: "Inspected by Geotechnical Lead", pass: true },
    { title: "First-Aid Stations & Fire Extinguisher Charge Pressure Verification", status: "All 6 stations pressurized", pass: true },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/engineer" className="hover:text-white">Engineer</Link>
          <span>/</span>
          <span className="text-[#3B82F6] font-semibold">Safety &amp; PPE Audits</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          OSHA Jobsite Safety Compliance
        </h1>
      </div>

      <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Zero Incidents - 180 Consecutive Days</h2>
            <p className="text-xs text-gray-300">Metro Business Center jobsite exceeds OSHA Voluntary Protection Program guidelines.</p>
          </div>
        </div>
        <span className="text-2xl font-extrabold text-emerald-400">100%</span>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-white border-b border-white/10 pb-3">
          Daily Morning Safety Audit Protocols (Signed 07:00 AM)
        </h3>

        <div className="space-y-3">
          {checklist.map((c, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">{c.title}</span>
                  <span className="text-[11px] text-gray-400">{c.status}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                PASS
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
