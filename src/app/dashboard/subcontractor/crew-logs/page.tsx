"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Plus,
  Search,
  Calendar,
  Clock,
  Wrench,
  ShieldCheck,
  Sun,
  X,
  CheckCircle2,
  Send,
  Eye,
  Camera,
} from "lucide-react";

interface CrewLog {
  id: string;
  date: string;
  status: "Verified by GC" | "Pending Review";
  shiftTime: string;
  foreman: string;
  totalCrew: number;
  journeymen: number;
  manHours: number;
  workDescription: string;
  equipment: string[];
  toolboxTopic: string;
  toolboxAttendance: string;
  photoUrl: string;
  photoCaption: string;
  weather: string;
  shiftHoursLabel: string;
}

const initialLogs: CrewLog[] = [
  {
    id: "LOG-SC-881",
    date: "Today, Oct 05, 2026",
    status: "Verified by GC",
    shiftTime: "07:00 AM – 03:30 PM",
    foreman: "Marcus Vance",
    totalCrew: 8,
    journeymen: 6,
    manHours: 64,
    workDescription:
      "Completed living pavilion acoustic ceiling slats on Grid Lines C4-C8. Installed perimeter trim reveals and prepped linear diffuser flush joints.",
    equipment: ["Genie 19ft Scissor Lift", "Festool Precision Plunge Saw", "Laser Line Alignment Unit"],
    toolboxTopic: "Working at heights on scissor lifts & fall restraint tethering",
    toolboxAttendance: "100% Attendance",
    photoUrl: "/images/project-1.jpg",
    photoCaption: "Living pavilion white oak slat alignment and laser leveling verification",
    weather: "Clear & Sunny (74°F), calm wind, optimal indoor climate",
    shiftHoursLabel: "8 Hours standard shift logged",
  },
  {
    id: "LOG-SC-880",
    date: "Oct 04, 2026",
    status: "Verified by GC",
    shiftTime: "07:00 AM – 03:30 PM",
    foreman: "Marcus Vance",
    totalCrew: 8,
    journeymen: 6,
    manHours: 64,
    workDescription:
      "Primary bedroom suite wardrobe carcass mounting, anchor studs structural verification, and LED channel routing with electrician on site.",
    equipment: ["Festool Dust Extractors", "Rotary Hammer Drills"],
    toolboxTopic: "HEPA dust extraction & eye protection during wall anchor drilling",
    toolboxAttendance: "100% Attendance",
    photoUrl: "/images/project-2.jpg",
    photoCaption: "Master bedroom suite wardrobe carcass framework anchored and plumbed",
    weather: "72°F, mild humidity, dry conditions",
    shiftHoursLabel: "8 Hours standard shift logged",
  },
  {
    id: "LOG-SC-879",
    date: "Oct 03, 2026",
    status: "Verified by GC",
    shiftTime: "07:00 AM – 03:30 PM",
    foreman: "Elena Rostova",
    totalCrew: 6,
    journeymen: 5,
    manHours: 48,
    workDescription:
      "Delivered and staged 120 sq meters European White Oak material. Acclimatization moisture readings logged at 8.2% (pass criteria).",
    equipment: ["Material Pallet Jacks", "Delmhorst Moisture Meter"],
    toolboxTopic: "Safe material handling and two-person heavy lifting protocols",
    toolboxAttendance: "100% Attendance",
    photoUrl: "/images/project-3.jpg",
    photoCaption: "Lumber acclimatization moisture test verified at 8.2%",
    weather: "70°F, low humidity",
    shiftHoursLabel: "8 Hours standard shift logged",
  },
];

export default function SubcontractorCrewLogsPage() {
  const [logs, setLogs] = useState<CrewLog[]>(initialLogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Verified by GC" | "Pending Review">("All");

  // Modals
  const [isNewLogModalOpen, setIsNewLogModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string } | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  // New Log Form State
  const [formData, setFormData] = useState({
    date: "Today, Oct 06, 2026",
    shiftTime: "07:00 AM – 03:30 PM",
    foreman: "Marcus Vance",
    totalCrew: "8",
    journeymen: "6",
    workDescription: "",
    equipment: "Festool Plunge Saw, Laser Alignment, HEPA Dust Extractor",
    toolboxTopic: "Pre-shift inspection of electrical cords and GFCI outlets",
    weather: "Clear & Sunny (75°F), calm conditions",
  });

  const handleCreateLog = (e: React.FormEvent) => {
    e.preventDefault();
    const total = parseInt(formData.totalCrew, 10) || 8;
    const jour = parseInt(formData.journeymen, 10) || 6;
    const hours = total * 8;

    const newLog: CrewLog = {
      id: `LOG-SC-${882 + logs.length - 3}`,
      date: formData.date,
      status: "Pending Review",
      shiftTime: formData.shiftTime,
      foreman: formData.foreman,
      totalCrew: total,
      journeymen: jour,
      manHours: hours,
      workDescription: formData.workDescription || "General millwork detailing and framing integration.",
      equipment: formData.equipment.split(",").map((s) => s.trim()),
      toolboxTopic: formData.toolboxTopic,
      toolboxAttendance: "100% Attendance",
      photoUrl: "/images/project-1.jpg",
      photoCaption: "Shift crew progress photos logged to site engineering archive",
      weather: formData.weather,
      shiftHoursLabel: "8 Hours standard shift logged",
    };

    setLogs([newLog, ...logs]);
    setIsNewLogModalOpen(false);
    setToastMessage(`Daily Shift Report ${newLog.id} submitted for Builtex Site Engineering verification.`);
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredLogs = logs.filter((log) => {
    const matchesFilter =
      activeFilter === "All" || log.status === activeFilter;
    const matchesSearch =
      log.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.foreman.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.workDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.toolboxTopic.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const verifiedCount = logs.filter((l) => l.status === "Verified by GC").length;
  const pendingCount = logs.filter((l) => l.status === "Pending Review").length;

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A]/40 flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="text-gray-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10 shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDB5A]/20 text-[#FFDB5A] border border-[#FFDB5A]/30 text-xs font-semibold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                Live Certified Payroll & Headcount Ledger
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Millwork Daily Shift Reports
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Record daily journeymen and apprentice labor allocations, equipment usage, and safety toolbox topics. Submitted logs are verified by Builtex Site Engineers for AIA payment authorization.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsNewLogModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Submit New Crew Log
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Tabs */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search date, foreman, tasks, toolbox talk..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "All"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">All ({logs.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Verified by GC")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "Verified by GC"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">Verified by GC ({verifiedCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Pending Review")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "Pending Review"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">Pending Review ({pendingCount})</span>
            </button>
          </div>
        </div>

        {/* Crew Log Cards */}
        <div className="space-y-6">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                      {log.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      {log.date}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                        log.status === "Verified by GC"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Day Shift ({log.shiftTime}) • Foreman: {log.foreman}
                  </h3>
                </div>

                {/* Metrics Pill Grid */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F6F6F6] rounded-xl text-center min-w-[90px]">
                    <p className="text-xs text-gray-500 font-medium">Total Crew</p>
                    <p className="text-lg font-semibold text-[#12223B]">{log.totalCrew} Workers</p>
                  </div>
                  <div className="p-3 bg-[#F6F6F6] rounded-xl text-center min-w-[90px]">
                    <p className="text-xs text-gray-500 font-medium">Journeymen</p>
                    <p className="text-lg font-semibold text-blue-700">{log.journeymen}</p>
                  </div>
                  <div className="p-3 bg-[#F6F6F6] rounded-xl text-center min-w-[90px]">
                    <p className="text-xs text-gray-500 font-medium">Man-Hours</p>
                    <p className="text-lg font-semibold text-emerald-700">{log.manHours} hrs</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left 2 Cols: Work & Tools & Safety */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Work Completed During Shift
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                      {log.workDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Equipment & Tools Utilized
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {log.equipment.map((tool, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-lg bg-gray-100 text-gray-700 border border-gray-200"
                        >
                          <Wrench className="w-3.5 h-3.5 text-gray-500" />
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Safety Toolbox Meeting Conducted
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">
                        {log.toolboxAttendance}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-900 font-medium">
                      Topic: <strong>{log.toolboxTopic}</strong>
                    </p>
                  </div>
                </div>

                {/* Right Col: Field Photo & Weather */}
                <div className="space-y-4 lg:border-l lg:border-gray-100 lg:pl-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Shift Field Photo
                    </h4>
                    <div
                      onClick={() => setSelectedPhoto({ url: log.photoUrl, caption: log.photoCaption })}
                      className="relative h-44 w-full rounded-xl overflow-hidden border border-gray-200 bg-black cursor-pointer group"
                    >
                      <Image
                        src={log.photoUrl}
                        alt={log.photoCaption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                        <p className="text-[11px] text-white font-medium line-clamp-2">
                          {log.photoCaption}
                        </p>
                      </div>
                      <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-gray-600 font-medium pt-1">
                    <div className="flex items-center gap-2">
                      <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">{log.weather}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{log.shiftHoursLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Submit New Crew Log */}
      {isNewLogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Submit Daily Shift Report
                  </h3>
                  <p className="text-xs text-gray-500">Certified Trade Headcount & Field Log</p>
                </div>
              </div>
              <button
                onClick={() => setIsNewLogModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLog} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Date & Shift
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Lead Trade Foreman
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.foreman}
                    onChange={(e) => setFormData({ ...formData, foreman: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Total Crew Count
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.totalCrew}
                    onChange={(e) => setFormData({ ...formData, totalCrew: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Journeymen Count
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.journeymen}
                    onChange={(e) => setFormData({ ...formData, journeymen: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Work Completed During Shift
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail scope completed today (e.g. Completed living pavilion acoustic ceiling slats on Grid Lines C4-C8)..."
                  value={formData.workDescription}
                  onChange={(e) => setFormData({ ...formData, workDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Equipment & Tools Utilized (Comma Separated)
                </label>
                <input
                  type="text"
                  value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Safety Toolbox Talk Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.toolboxTopic}
                  onChange={(e) => setFormData({ ...formData, toolboxTopic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewLogModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Shift Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Enlarged Field Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#12223B] rounded-2xl max-w-3xl w-full p-4 overflow-hidden border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
              <span className="text-xs sm:text-sm font-semibold text-[#FFDB5A] flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Shift Inspection Field Photo
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden my-3 border border-white/10">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-300 px-2 font-medium">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
