"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Plus,
  CheckCircle2,
  HardHat,
  Building,
  Flame,
  HeartPulse,
  CheckSquare,
  Square,
  Search,
  Calendar,
  Phone,
  AlertTriangle,
  X,
  Check,
  UserCheck,
} from "lucide-react";

interface SafetyProtocol {
  id: number;
  text: string;
  timeStr: string;
  completed: boolean;
}

interface SafetyAuditLog {
  id: string;
  dateStr: string;
  grade: string;
  topic: string;
  inspector: string;
  attendees: number;
  observations: string;
}

const INITIAL_PROTOCOLS: SafetyProtocol[] = [
  {
    id: 1,
    text: "Morning Safety Tailgate Talk (07:00 AM)",
    timeStr: "07:05 AM",
    completed: true,
  },
  {
    id: 2,
    text: "Scaffolding Green Tag & Toe-board Inspection",
    timeStr: "07:45 AM",
    completed: true,
  },
  {
    id: 3,
    text: "Electrical 200A LOTO & GFCI Ground Fault Verification",
    timeStr: "08:30 AM",
    completed: true,
  },
  {
    id: 4,
    text: "Trench Shoring & Excavation Safe Egress Ladders",
    timeStr: "08:00 AM",
    completed: true,
  },
  {
    id: 5,
    text: "Fire Extinguisher Charge & Access Clearance",
    timeStr: "Pending",
    completed: false,
  },
  {
    id: 6,
    text: "Fall Arrest Harness & Lanyard 6ft Drop Checks",
    timeStr: "Pending",
    completed: false,
  },
];

const AUDIT_LOGS: SafetyAuditLog[] = [
  {
    id: "SAF-104",
    dateStr: "Today, Oct 05",
    grade: "Grade A+ (100% Pass)",
    topic: "Toolbox Talk: Trip Hazard Mitigation & Overhead Material Handling Protocols",
    inspector: "Sophia Bennett (PE)",
    attendees: 34,
    observations:
      "All staging zones cleared of loose 2x4 cutoffs. Crane hoisting exclusion zone barricaded with high-vis tape. Zero near-misses.",
  },
  {
    id: "SAF-103",
    dateStr: "Oct 01, 2026",
    grade: "Grade A+ (100% Pass)",
    topic: "Toolbox Talk: Eye & Respiratory Crystalline Silica Protection (OSHA Table 1)",
    inspector: "Sophia Bennett (PE)",
    attendees: 32,
    observations:
      "HEPA vacuum shrouds active during all concrete grinding and masonry cutting. N95 respirators distributed and fitted.",
  },
  {
    id: "SAF-102",
    dateStr: "Sep 26, 2026",
    grade: "Grade A (98% Pass)",
    topic: "Toolbox Talk: Fall Protection & 100% Tie-Off on Sloped and Elevated Surfaces",
    inspector: "Sophia Bennett (PE)",
    attendees: 30,
    observations:
      "One subcontractor observed near roof edge without secondary tether clip; immediate stop-work issued and rectified in 2 minutes.",
  },
  {
    id: "SAF-101",
    dateStr: "Sep 20, 2026",
    grade: "Grade A+ (100% Pass)",
    topic: "Toolbox Talk: Excavation Trench Safety & Safe Ingress/Egress Ladders",
    inspector: "Marcus Vance (PM)",
    attendees: 28,
    observations:
      "Trench boxes inspected and approved. Heavy equipment kept 6ft back from perimeter berm.",
  },
];

export default function EngineerSafetyPage() {
  const [protocols, setProtocols] = useState<SafetyProtocol[]>(INITIAL_PROTOCOLS);
  const [auditLogs, setAuditLogs] = useState<SafetyAuditLog[]>(AUDIT_LOGS);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Audit Modal Form State
  const [newTopic, setNewTopic] = useState("");
  const [newAttendees, setNewAttendees] = useState("34");
  const [newObservations, setNewObservations] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const toggleProtocol = (id: number) => {
    setProtocols((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              completed: !p.completed,
              timeStr: !p.completed
                ? new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "Pending",
            }
          : p
      )
    );
  };

  const completedProtocolsCount = protocols.filter((p) => p.completed).length;

  const handleCreateAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopic.trim()) return;

    const nextId = `SAF-${104 + auditLogs.length - 3}`;
    const newLog: SafetyAuditLog = {
      id: nextId,
      dateStr: "Today, Just Now",
      grade: "Grade A+ (100% Pass)",
      topic: newTopic.trim(),
      inspector: "Sophia Bennett (PE)",
      attendees: parseInt(newAttendees) || 34,
      observations: newObservations.trim() || "All safety protocols checked and compliant.",
    };

    setAuditLogs([newLog, ...auditLogs]);
    setIsModalOpen(false);
    setNewTopic("");
    setNewObservations("");
    showToast(`OSHA Audit Record ${nextId} signed and submitted.`);
  };

  const filteredLogs = auditLogs.filter(
    (log) =>
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.observations.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">OSHA Compliance Ledger</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OSHA 30 Certified Jobsite • Grade A+ Rating</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              240 Consecutive Days Incident-Free
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Modern Family Villa project maintains a 100% spotless safety record under Lead PE Sophia Bennett. All subcontractors must review daily toolbox talks and comply with ANSI Z87.1 eye protection and 100% tie-off rules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Conduct Safety Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* PPE Compliance */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                PPE Compliance
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                <HardHat className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                100%
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900 transition-colors duration-300">
                <CheckCircle2 className="w-3 h-3" />
                34/34
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                Workers verified
              </span>
            </div>
          </div>
        </div>

        {/* Scaffolding Status */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Scaffolding Status
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-blue-400 flex items-center justify-center transition-colors duration-300">
                <Building className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl sm:text-3xl font-semibold text-[#12223B] tracking-tight leading-none">
                Certified Safe
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                Towers A &amp; B Green Tagged
              </span>
            </div>
          </div>
        </div>

        {/* Fire & First Aid */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Fire &amp; First Aid
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-amber-400 flex items-center justify-center transition-colors duration-300">
                <Flame className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                100%
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Tagged
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                6 Extinguishers + AED ready
              </span>
            </div>
          </div>
        </div>

        {/* Lost-Time Incidents */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Lost-Time Incidents
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                <HeartPulse className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                0
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                Zero recordable YTD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Protocols Checklist & Emergency Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left: Protocols Checklist */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200/80 p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-6 h-6 text-[#12223B]" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#12223B]">
                Daily Field Safety Protocols &amp; Checklist
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-semibold bg-[#12223B]/10 text-[#12223B] px-3.5 py-1.5 rounded-full">
              {completedProtocolsCount} of {protocols.length} Completed
            </span>
          </div>

          <div className="space-y-3.5">
            {protocols.map((proto) => (
              <div
                key={proto.id}
                onClick={() => toggleProtocol(proto.id)}
                className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  proto.completed
                    ? "bg-emerald-50/60 border-emerald-200 text-gray-900 shadow-2xs"
                    : "bg-gray-50/60 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {proto.completed ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  ) : (
                    <Square className="w-6 h-6 text-gray-400 shrink-0" />
                  )}
                  <span className="text-sm sm:text-base md:text-lg font-semibold leading-snug text-gray-900">
                    {proto.text}
                  </span>
                </div>

                <span
                  className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg shrink-0 border ${
                    proto.completed
                      ? "bg-emerald-100 text-emerald-900 border-emerald-200"
                      : "bg-gray-200 text-gray-800 border-transparent"
                  }`}
                >
                  {proto.timeStr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Emergency Response Info */}
        <div className="bg-[#12223B] text-white rounded-xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between space-y-6 shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <HeartPulse className="w-5 h-5 text-[#FFDB5A]" />
              <h2 className="text-base sm:text-lg font-semibold text-white">
                Emergency Response Info
              </h2>
            </div>

            <div className="mt-4 space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1">
                <p className="text-xs text-[#FFDB5A] font-semibold uppercase tracking-wider">
                  Nearest Trauma Center
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  St. Mary’s Regional Medical Center
                </p>
                <p className="text-xs text-gray-300">
                  1420 Oakridge Blvd • 4.2 miles (8 mins ETA)
                </p>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono pt-1 font-semibold">
                  Direct ER: +1 (555) 911-8844
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                <p className="text-xs text-[#FFDB5A] font-semibold uppercase tracking-wider">
                  Site Safety Officers
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">
                      Sophia Bennett (Lead PE):
                    </span>
                    <span className="font-mono text-white font-semibold">
                      +1 (555) 438-9201
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">
                      Marcus Vance (Site PM):
                    </span>
                    <span className="font-mono text-white font-semibold">
                      +1 (555) 892-3104
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Automatic 911 Geolocation beacon enabled for Site PRJ-901</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certified OSHA Audit Logs */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
        <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#12223B]">
              Certified OSHA &amp; Site Safety Audit Logs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Weekly and daily supervisor field audits, hazard rectifications, and toolbox talk records.
            </p>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search audit records..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#12223B] transition-colors"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="p-6 sm:p-7 hover:bg-gray-50/70 transition-colors duration-200 flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              <div className="space-y-3.5 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#12223B] bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">
                    {log.id}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{log.dateStr}</span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{log.grade}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[#12223B]">
                  {log.topic}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {log.observations}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium pt-1">
                  <span>
                    Lead Auditor: <strong className="text-gray-800">{log.inspector}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Attendees: <strong className="text-gray-800">{log.attendees} Trade Workers</strong>
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Signed &amp; Archival Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Conduct Safety Audit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFDB5A] bg-[#12223B] px-2.5 py-0.5 rounded-md inline-block">
                OSHA Jobsite Record
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Conduct Safety Audit &amp; Toolbox Talk
              </h3>
              <p className="text-xs text-gray-500">
                Log daily safety tailgates, PPE inspections, and zero-hazard verifications.
              </p>
            </div>

            <form onSubmit={handleCreateAudit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Toolbox Talk Topic &amp; Focus Area
                </label>
                <input
                  type="text"
                  required
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  placeholder="e.g. Scaffolding Load Limits and Fall Protection Lanyards"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Trade Crew Attendees Count
                </label>
                <input
                  type="number"
                  required
                  value={newAttendees}
                  onChange={(e) => setNewAttendees(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Safety Observations &amp; Rectifications
                </label>
                <textarea
                  rows={3}
                  required
                  value={newObservations}
                  onChange={(e) => setNewObservations(e.target.value)}
                  placeholder="Detail PPE compliance, hazard mitigation, guardrails, and LOTO checks..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Submit Safety Audit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
