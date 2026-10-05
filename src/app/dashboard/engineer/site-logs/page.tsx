"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ClipboardList, CheckCircle2, Calendar, Plus, Clock } from "lucide-react";

export default function EngineerSiteLogsPage() {
  const [submitted, setSubmitted] = useState(false);

  const pastLogs = [
    { date: "Oct 04, 2026", weather: "72°F Sunny", manpower: "36 crew", work: "Level 2 structural shear wall formwork & reinforcement placement.", signedBy: "Alex Rivera, PE #48910" },
    { date: "Oct 03, 2026", weather: "68°F Clear", manpower: "40 crew", work: "Sub-grade plumbing pressure testing & perimeter waterproofing inspection.", signedBy: "Alex Rivera, PE #48910" },
    { date: "Oct 02, 2026", weather: "75°F Wind 8mph", manpower: "38 crew", work: "Tower crane lift ops: 42 steel I-beams delivered and rigged into core columns.", signedBy: "Alex Rivera, PE #48910" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/engineer" className="hover:text-white">Engineer</Link>
            <span>/</span>
            <span className="text-[#3B82F6] font-semibold">Daily Site Logs</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Jobsite Field Activity Logbook
          </h1>
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="px-4 py-2 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-md flex items-center gap-1.5 self-start cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Daily Entry</span>
        </button>
      </div>

      {submitted && (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>Daily site log created and stored in regulatory compliance registry.</span>
        </div>
      )}

      <div className="space-y-4">
        {pastLogs.map((log, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#FFDB5A]">{log.date}</span>
              <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified by City Inspector</span>
              </span>
            </div>
            <div className="text-xs text-gray-300">
              <span className="text-white font-bold">Weather: </span>{log.weather} • <span className="text-white font-bold">Manpower: </span>{log.manpower}
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">{log.work}</p>
            <div className="pt-2 border-t border-white/5 text-[11px] text-gray-400">
              Digital Signature: {log.signedBy}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
