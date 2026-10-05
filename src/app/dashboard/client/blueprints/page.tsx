"use client";

import React from "react";
import Link from "next/link";
import { FolderArchive, Download, FileText, Eye } from "lucide-react";

export default function ClientBlueprintsPage() {
  const files = [
    { name: "A101 - Full Architectural Floor Plans (Rev 4)", size: "24.2 MB", type: "PDF Blueprint", date: "Sep 2026" },
    { name: "S201 - Structural Foundation & Retaining Wall Calculations", size: "18.5 MB", type: "Engineering Specs", date: "Jul 2026" },
    { name: "M301 - Electrical, Plumbing & Smart Home Automation Schematics", size: "14.8 MB", type: "MEP Drawing", date: "Aug 2026" },
    { name: "L101 - Landscape & Infinity Pool Hydraulics Plan", size: "11.2 MB", type: "Landscape Specs", date: "Sep 2026" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
          <span>/</span>
          <span className="text-[#00C975] font-semibold">Blueprints &amp; Files</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          Villa Horizon (PRJ-901) Project Documentation
        </h1>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl">
        <div className="divide-y divide-white/5">
          {files.map((f, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{f.name}</h3>
                  <p className="text-xs text-gray-400">{f.type} • {f.size} • Updated {f.date}</p>
                </div>
              </div>

              <button className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer">
                <Download className="w-3.5 h-3.5 text-[#00C975]" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
