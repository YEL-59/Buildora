"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HardHat,
  ClipboardList,
  CheckCircle2,
  Calendar,
  CloudSun,
  Users,
  Camera,
  Check,
  Upload,
  RefreshCw,
  Send,
  Building2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

interface FieldLog {
  id: string;
  date: string;
  summary: string;
  crewCount: number;
  safetyPassed: boolean;
  status: "Verified & Locked" | "Pending Review";
}

export default function EngineerDashboardPage() {
  const [isOnSite, setIsOnSite] = useState(true);
  const [transmitToast, setTransmitToast] = useState(false);

  // Form states
  const [weather, setWeather] = useState("72°F, Sunny, 5 mph NW wind");
  const [headcount, setHeadcount] = useState("24 Workers • 4 Specialist Subs");
  const [workAccomplished, setWorkAccomplished] = useState(
    "Completed panoramic window sealing and weatherproofing flashing on Phase 4."
  );
  const [materials, setMaterials] = useState(
    "40 sheets Low-E architectural glazing; 2 pallets mortar received and verified."
  );
  const [photoUrl, setPhotoUrl] = useState("/images/expertise-item-image-1.jpg");
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);

  const [logs, setLogs] = useState<FieldLog[]>([
    {
      id: "LOG-109",
      date: "Yesterday, Oct 03",
      summary: "Completed panoramic window sealing and weatherproofing tape on Phase 4 master suite.",
      crewCount: 22,
      safetyPassed: true,
      status: "Verified & Locked",
    },
    {
      id: "LOG-108",
      date: "Oct 02, 2026",
      summary: "Concrete slab core drill testing and seismic rebar verification passed with zero voids.",
      crewCount: 28,
      safetyPassed: true,
      status: "Verified & Locked",
    },
    {
      id: "LOG-107",
      date: "Oct 01, 2026",
      summary: "Shear wall framing inspection and anchor bolt torque calibration.",
      crewCount: 26,
      safetyPassed: true,
      status: "Verified & Locked",
    },
  ]);

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog: FieldLog = {
      id: `LOG-${110 + logs.length}`,
      date: "Today, Just Now",
      summary: workAccomplished,
      crewCount: parseInt(headcount) || 24,
      safetyPassed: check1 && check2,
      status: "Verified & Locked",
    };

    setLogs([newLog, ...logs]);
    setTransmitToast(true);
    setTimeout(() => setTransmitToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Engineer Identity Banner */}
      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#FFDB5A]">
            <Image
              src="/images/author-2.jpg"
              alt="Sophia Bennett"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                ENG-01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#12223B]">
                Sophia Bennett
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-600">
              Lead Structural Engineer
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Assigned Site:</span>
              <strong className="text-gray-700">Modern Family Villa (Central Valley, CA)</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOnSite(!isOnSite)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isOnSite
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-gray-100 text-gray-700 border border-gray-200"
            }`}
          >
            {isOnSite ? "● Status: On Site" : "○ Status: Off Duty"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Submit Daily Field Log Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleTransmit}
            className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-[#12223B]">
                  Submit Today's Field Log
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Daily mandatory OSHA and milestone compliance report.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FFDB5A] text-[#12223B]">
                Today
              </span>
            </div>

            {transmitToast && (
              <div className="p-3 bg-emerald-100 text-emerald-800 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Field log transmitted to executive engineering headquarters!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Weather Conditions *
                </label>
                <div className="relative">
                  <CloudSun className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={weather}
                    onChange={(e) => setWeather(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  On-Site Labor Headcount *
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Milestone Work Accomplished Today *
              </label>
              <textarea
                rows={3}
                required
                value={workAccomplished}
                onChange={(e) => setWorkAccomplished(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Materials & Equipment Received
              </label>
              <input
                type="text"
                value={materials}
                onChange={(e) => setMaterials(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
              />
            </div>

            {/* Daily Photo Upload Preview */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                Daily Progress Inspection Photo
              </label>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100 aspect-video max-h-48 group">
                <Image
                  src={photoUrl}
                  alt="Daily Progress"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-[#12223B]/80 text-white px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                  <span className="font-mono text-[11px] truncate max-w-[80%]">
                    {photoUrl}
                  </span>
                  <span className="text-emerald-400 font-semibold text-[11px]">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Mandatory Safety Checklist */}
            <div className="p-4 bg-gray-50 rounded-xl space-y-2 border border-gray-100">
              <span className="text-xs font-bold text-[#12223B] uppercase tracking-wider block mb-1">
                Mandatory Safety Checks
              </span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={check1}
                  onChange={(e) => setCheck1(e.target.checked)}
                  className="w-4 h-4 text-[#FFDB5A] rounded"
                />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  100% PPE Hardhats & Harnesses Verified
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={check2}
                  onChange={(e) => setCheck2(e.target.checked)}
                  className="w-4 h-4 text-[#FFDB5A] rounded"
                />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">
                  Scaffolding & Rigging Cleared
                </span>
              </label>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-[#12223B] hover:bg-[#1c3254] text-[#FFDB5A] font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Daily Field Log</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Col: Recent Transmitted Logs */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200/80 p-5 shadow-xs space-y-4">
            <h3 className="font-bold text-[#12223B] text-base sm:text-lg pb-2 border-b border-gray-100">
              Recent Transmitted Logs
            </h3>

            <div className="space-y-3">
              {logs.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-gray-50 rounded-xl border border-gray-100 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-[#12223B]">
                      {item.id}
                    </span>
                    <span className="text-gray-400">{item.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-gray-500">
                      Crew: <strong className="text-gray-700">{item.crewCount} workers</strong>
                    </span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      ✓ 100% Passed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
