"use client";

import React from "react";
import Link from "next/link";
import { Camera, Video, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ClientProgressPage() {
  const cams = [
    { id: "CAM-01", name: "North Facade & Entry Framing", status: "Live • 1080p", view: "Exterior Elevation" },
    { id: "CAM-02", name: "Level 2 Master Suite & Terrace", status: "Live • 1080p", view: "Upper Deck" },
    { id: "CAM-03", name: "Rear Infinity Pool & Patio Foundation", status: "Live • 1080p", view: "Rear Yard" },
    { id: "CAM-04", name: "Interior Great Room & Double-Height Atrium", status: "Live • 1080p", view: "Interior Framing" },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
            <span>/</span>
            <span className="text-[#00C975] font-semibold">Live Site &amp; Progress</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Live Jobsite Multi-Camera Stream (78% Complete)
          </h1>
        </div>

        <span className="px-3.5 py-1.5 rounded-full bg-[#00C975]/15 border border-[#00C975]/30 text-[#00C975] text-xs font-bold flex items-center gap-2 self-start">
          <span className="w-2 h-2 rounded-full bg-[#00C975] animate-ping" />
          <span>4 Cameras Online &amp; Recording</span>
        </span>
      </div>

      {/* 4 Camera Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cams.map((cam) => (
          <div key={cam.id} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
            <div className="flex items-center justify-between mb-3 text-xs">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#00C975]" />
                <span className="font-bold text-white">{cam.name}</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">{cam.id}</span>
            </div>

            <div className="relative aspect-video rounded-xl bg-[#070F1C] border border-white/10 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              <div className="text-center z-10">
                <Camera className="w-8 h-8 text-[#FFDB5A] mx-auto mb-1.5 opacity-70 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-white font-semibold block">{cam.view}</span>
                <span className="text-[10px] text-emerald-400 font-medium">{cam.status}</span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 text-[10px] text-gray-400 font-mono z-10">
                2026-10-05 11:58:24 PST
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
