"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Search,
  CheckCircle2,
  Sun,
  Users,
  Printer,
  Truck,
  ShieldCheck,
  Eye,
  X,
  Calendar,
  CloudSun,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

interface TradeCount {
  trade: string;
  workers: number;
  task: string;
}

interface SiteLog {
  id: string;
  dateStr: string;
  weather: string;
  temp: string;
  workers: number;
  milestoneTitle: string;
  category: "Carpentry" | "Glazing" | "Electrical" | "Facade" | "HVAC";
  trades: TradeCount[];
  receivedMaterials: string;
  safetyNote: string;
  photoUrl: string;
  photoCaption: string;
}

const INITIAL_LOGS: SiteLog[] = [
  {
    id: "LOG-110",
    dateStr: "Today, Oct 05",
    weather: "Sunny & Dry",
    temp: "74°F",
    workers: 34,
    milestoneTitle:
      "Finished master wing flooring (95%). Verified airtightness of panoramic sliding glass walls with smoke pencil test.",
    category: "Glazing",
    trades: [
      {
        trade: "Finish Carpenters",
        workers: 8,
        task: "Custom European white oak planks installation in master suite",
      },
      {
        trade: "MEP Electricians",
        workers: 6,
        task: "Lutron central dimming panel terminations & subpanel load tests",
      },
      {
        trade: "Master Stonemasons",
        workers: 6,
        task: "Pre-cutting Calacatta marble counter slabs for kitchen pavilion",
      },
      {
        trade: "Glazing Specialists",
        workers: 4,
        task: "Secondary weather seals on panoramic sliding door track",
      },
      {
        trade: "General Labor",
        workers: 10,
        task: "Site clean-up, material staging & waste segregation",
      },
    ],
    receivedMaterials:
      "120 sq meters European White Oak, 15 buckets polyurethane low-VOC adhesive, 400 linear ft cedar trims.",
    safetyNote:
      "100% hardhat and high-visibility vest compliance. Scaffolding perimeter safety netting verified intact.",
    photoUrl: "/images/project-1.jpg",
    photoCaption: "Panoramic sliding glass wall airtight sealing inspection",
  },
  {
    id: "LOG-109",
    dateStr: "Yesterday, Oct 04",
    weather: "Partly Cloudy",
    temp: "71°F",
    workers: 31,
    milestoneTitle:
      "Completed structural window frame anchor torque testing (all bolts tightened to 110 ft-lbs).",
    category: "Glazing",
    trades: [
      {
        trade: "Glazing Specialists",
        workers: 8,
        task: "High-spec acoustic perimeter anchor bolt tension tests",
      },
      {
        trade: "Finish Carpenters",
        workers: 6,
        task: "Moisture barrier laying on Level 2 subflooring",
      },
      {
        trade: "MEP Electricians",
        workers: 4,
        task: "Low-voltage architectural raceways and sensor wiring",
      },
      {
        trade: "Structural Steel Riggers",
        workers: 4,
        task: "Deck support column micro-adjustments",
      },
      {
        trade: "General Labor",
        workers: 9,
        task: "Daily material sorting and forklift offloading",
      },
    ],
    receivedMaterials:
      "8 crates custom tempered Low-E glass panels from Schott Glassworks.",
    safetyNote:
      "Spider crane outrigger pads double-cribbed with heavy timber mats. Zero near-misses.",
    photoUrl: "/images/project-2.jpg",
    photoCaption: "Level 2 cantilever deck curtain wall brackets alignment",
  },
  {
    id: "LOG-108",
    dateStr: "Oct 02, 2026",
    weather: "Clear & Breezy",
    temp: "68°F",
    workers: 28,
    milestoneTitle:
      "HVAC duct pressure test passed with <2% leakage (well under Title 24 6% limit).",
    category: "Electrical",
    trades: [
      {
        trade: "HVAC Mechanics",
        workers: 8,
        task: "Acoustic lined spiral trunk pressure decay testing",
      },
      {
        trade: "MEP Electricians",
        workers: 6,
        task: "Dedicated conduit pulls for variable refrigerant flow units",
      },
      {
        trade: "Insulation Installers",
        workers: 4,
        task: "Thermal mineral wool acoustic batts in mechanical chase",
      },
      {
        trade: "Drywall Tapers",
        workers: 4,
        task: "Level 4 pre-skim drywall priming in service closets",
      },
      {
        trade: "General Labor",
        workers: 6,
        task: "HVAC packaging disposal and debris clearing",
      },
    ],
    receivedMaterials:
      "3 pallets Western Red Cedar vertical grain siding, 4 bundles vapor barrier membrane.",
    safetyNote:
      "Daily toolbox talk on ladder fall prevention and 3-point contact.",
    photoUrl: "/images/project-3.jpg",
    photoCaption: "Great room double-height ceiling HVAC spiral ductwork",
  },
  {
    id: "LOG-107",
    dateStr: "Sep 29, 2026",
    weather: "Sunny",
    temp: "76°F",
    workers: 26,
    milestoneTitle:
      "Electrical conduit rough-in and low-voltage automation raceway sign-off for smart home core.",
    category: "Electrical",
    trades: [
      {
        trade: "MEP Electricians",
        workers: 10,
        task: "Home-run branch conduit pulls from basement switchboard",
      },
      {
        trade: "Automation Techs",
        workers: 4,
        task: "Cat6A shielded network cabling and fiber patch panel setup",
      },
      {
        trade: "Plumbers",
        workers: 4,
        task: "PEX-a radiant loop manifold pressure test (80 PSI)",
      },
      {
        trade: "General Labor",
        workers: 8,
        task: "Floor vacuuming, dust suppression, and temporary lighting",
      },
    ],
    receivedMaterials:
      "2,000 ft Cat6A shielded cable, 80 copper fittings, 12 GFCI circuit breakers.",
    safetyNote:
      "100% GFCI protection on temporary power panels verified with multimeter.",
    photoUrl: "/images/project-4.jpg",
    photoCaption: "Master suite walk-in wardrobe electrical conduit raceway",
  },
];

const CATEGORIES = ["All", "Carpentry", "Glazing", "Electrical", "Facade"] as const;

export default function EngineerDailySiteLogsPage() {
  const [logs, setLogs] = useState<SiteLog[]>(INITIAL_LOGS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [inspectPhoto, setInspectPhoto] = useState<{ url: string; caption: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Log Modal Form State
  const [newWorkers, setNewWorkers] = useState("32");
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<"Carpentry" | "Glazing" | "Electrical" | "Facade">("Carpentry");
  const [newMaterials, setNewMaterials] = useState("");
  const [newSafety, setNewSafety] = useState("100% PPE compliance verified. Scaffolding checked.");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCreateLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const nextId = `LOG-${110 + logs.length - 3}`;
    const newEntry: SiteLog = {
      id: nextId,
      dateStr: "Today, Just Now",
      weather: "Sunny & Clear",
      temp: "75°F",
      workers: parseInt(newWorkers) || 30,
      milestoneTitle: newTitle.trim(),
      category: newCategory,
      trades: [
        {
          trade: "Lead Trade Crew",
          workers: parseInt(newWorkers) || 20,
          task: newTitle.trim(),
        },
      ],
      receivedMaterials: newMaterials.trim() || "No specialized shipments offloaded.",
      safetyNote: newSafety.trim(),
      photoUrl: "/images/project-1.jpg",
      photoCaption: `Site inspection record: ${newTitle.trim().substring(0, 40)}...`,
    };

    setLogs([newEntry, ...logs]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewMaterials("");
    showToast(`Daily Site Log ${nextId} published and digitally stamped.`);
  };

  const handlePrint = (logId: string) => {
    showToast(`Generating official PDF inspection cert for ${logId}...`);
  };

  const filteredLogs = logs.filter((l) => {
    const matchesCat = activeCategory === "All" || l.category === activeCategory;
    const matchesQuery =
      l.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.milestoneTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.receivedMaterials.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.trades.some((t) => t.trade.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Field Record</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-1 rounded-full inline-block">
              Field Inspection Journal
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Daily Site Logs (PRJ-901)
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Logged by <strong className="text-white">Sophia Bennett (PE)</strong> • Certified records synchronized with Head Office and Property Owner.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer flex-shrink-0 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>New Daily Log</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Category Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by log ID, work accomplished, materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer group ${
                  isActive
                    ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                    : "text-gray-700 hover:text-[#12223B]"
                }`}
              >
                {!isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logs List */}
      <div className="space-y-5">
        {filteredLogs.map((log) => (
          <div
            key={log.id}
            className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 shadow-xs"
          >
            {/* Log Header Row */}
            <div className="p-5 sm:p-6 bg-[#FBFBFB] border-b border-gray-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-[#12223B] text-white font-mono font-semibold text-xs sm:text-sm">
                  {log.id}
                </span>
                <span className="text-xs sm:text-base font-semibold text-[#12223B]">
                  {log.dateStr}
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified by PE</span>
                </span>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{log.weather} ({log.temp})</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{log.workers} Workers</span>
                </span>
                <button
                  type="button"
                  onClick={() => handlePrint(log.id)}
                  className="p-1.5 rounded-md hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                  title="Print / Export PDF"
                >
                  <Printer className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Log Body Grid */}
            <div className="p-5 sm:p-6 md:p-7 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Left 2 Cols: Milestone & Trades & Received */}
              <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#64748b] uppercase tracking-wider mb-2">
                    Milestone Accomplishment &amp; Quality Verification
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-[#12223B] leading-relaxed font-semibold">
                    {log.milestoneTitle}
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs sm:text-sm font-semibold text-[#64748b] uppercase tracking-wider">
                    Subcontractor Trades Active On-Site
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {log.trades.map((t, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 sm:p-4 rounded-xl bg-[#F9F9F9] border border-gray-200/80 space-y-1.5 hover:bg-white hover:border-[#FFDB5A] transition-colors"
                      >
                        <div className="flex items-center justify-between font-semibold text-sm text-[#12223B]">
                          <span>{t.trade}</span>
                          <span className="text-blue-700 bg-blue-50 font-semibold text-xs px-2.5 py-1 rounded-md">
                            {t.workers} Workers
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                          {t.task}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Received & Safety Summary Bar */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-gray-800 font-medium">
                    <Truck className="w-4.5 h-4.5 text-purple-600 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900 font-semibold">Received:</strong>{" "}
                      {log.receivedMaterials}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg flex-shrink-0 font-medium border border-emerald-200/60">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                    <span>{log.safetyNote}</span>
                  </div>
                </div>
              </div>

              {/* Right Col: Inspection Photo Card */}
              <div className="bg-[#F9F9F9] p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col space-y-4 h-fit">
                <div
                  onClick={() =>
                    setInspectPhoto({
                      url: log.photoUrl,
                      caption: log.photoCaption,
                    })
                  }
                  className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden cursor-pointer group bg-gray-200"
                >
                  <Image
                    src={log.photoUrl}
                    alt={log.photoCaption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs sm:text-sm font-semibold gap-1.5">
                    <Eye className="w-4.5 h-4.5 text-[#FFDB5A]" />
                    <span>Inspect Full Photo</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-gray-400 font-mono font-semibold block uppercase tracking-wider mb-1">
                    PHOTO CAPTION:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#12223B] leading-snug">
                    {log.photoCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredLogs.length === 0 && (
          <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
            <FileText className="w-12 h-12 text-gray-300 mx-auto" />
            <h4 className="text-base font-semibold text-[#12223B]">No Daily Logs Found</h4>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              No field journals matched your filter. Try changing your query or trade category.
            </p>
          </div>
        )}
      </div>

      {/* Photo Enlarge Modal */}
      {inspectPhoto && (
        <div
          onClick={() => setInspectPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs cursor-pointer"
        >
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 space-y-3">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src={inspectPhoto.url}
                alt={inspectPhoto.caption}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#12223B] px-1">
              <span>{inspectPhoto.caption}</span>
              <span className="text-gray-500">Certified PE Record</span>
            </div>
          </div>
        </div>
      )}

      {/* Modal: New Daily Log */}
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
                Field Engineering Log
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                New Daily Site Log
              </h3>
              <p className="text-xs text-gray-500">
                Submit certified milestone verifications, labor count, and safety conditions.
              </p>
            </div>

            <form onSubmit={handleCreateLog} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Workers On-Site
                  </label>
                  <input
                    type="number"
                    required
                    value={newWorkers}
                    onChange={(e) => setNewWorkers(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Primary Trade
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none bg-white"
                  >
                    <option value="Carpentry">Carpentry</option>
                    <option value="Glazing">Glazing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Facade">Facade</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Milestone Accomplished &amp; Verification
                </label>
                <textarea
                  rows={3}
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Detail completed architectural, framing, or MEP milestones..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Materials Offloaded &amp; Received
                </label>
                <input
                  type="text"
                  value={newMaterials}
                  onChange={(e) => setNewMaterials(e.target.value)}
                  placeholder="e.g. 5 Tons Grade 60 Rebar, 8 crates tempered glass..."
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Safety Protocol Status
                </label>
                <input
                  type="text"
                  value={newSafety}
                  onChange={(e) => setNewSafety(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Publish Daily Log</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
