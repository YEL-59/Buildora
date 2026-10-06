"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Plus,
  Search,
  MapPin,
  Wrench,
  User,
  Calendar,
  X,
  Camera,
  Send,
  Eye,
  AlertTriangle,
  Clock,
} from "lucide-react";

interface PunchItem {
  id: string;
  trade: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "Ready for Re-inspection" | "Resolved";
  location: string;
  observation: string;
  actionPlan: string;
  assigned: string;
  inspector: string;
  issued: string;
  due: string;
  initialPhoto: string;
  resolutionPhoto?: string;
  isPendingResolution?: boolean;
}

const initialItems: PunchItem[] = [
  {
    id: "P-042",
    trade: "Architectural Woodwork",
    priority: "High",
    status: "Open",
    location: "Living Pavilion Ceiling — North Bay Grid C6",
    observation: "Slat joint spacing reveals a 1/8 inch variance near the recessed return air grille. Needs micro-shim alignment.",
    actionPlan: "Loosen fastening bracket clip, insert laser-calibrated 2mm spacer, and re-torque concealed fastener.",
    assigned: "Marcus Vance",
    inspector: "Sophia Bennett (Lead PE)",
    issued: "Oct 04, 2026",
    due: "Oct 07, 2026",
    initialPhoto: "/images/project-1.jpg",
    isPendingResolution: true,
  },
  {
    id: "P-039",
    trade: "Custom Cabinetry",
    priority: "Medium",
    status: "Ready for Re-inspection",
    location: "Master Bedroom Walk-in Closet Island",
    observation: "Top drawer soft-close damper tension requires adjustment to match adjacent cabinet drawers.",
    actionPlan: "Adjusted Blum tip-on damper setting to position 3; cycle tested 20 times smoothly.",
    assigned: "Elena Rostova",
    inspector: "David Miller (Owner Representative)",
    issued: "Oct 02, 2026",
    due: "Oct 06, 2026",
    initialPhoto: "/images/project-2.jpg",
    resolutionPhoto: "/images/project-2.jpg",
  },
  {
    id: "P-035",
    trade: "Finishes",
    priority: "Low",
    status: "Resolved",
    location: "Gourmet Kitchen Island Base",
    observation: "Touch up clear poly satin coat along bottom toe-kick reveal to ensure moisture barrier.",
    actionPlan: "Applied two coats of zero-VOC commercial matte urethane sealant.",
    assigned: "Marcus Vance",
    inspector: "Sophia Bennett (Lead PE)",
    issued: "Sep 28, 2026",
    due: "Oct 02, 2026",
    initialPhoto: "/images/project-3.jpg",
    resolutionPhoto: "/images/project-3.jpg",
  },
];

export default function SubcontractorPunchListPage() {
  const [items, setItems] = useState<PunchItem[]>(initialItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Open" | "Ready for Re-inspection" | "Resolved">("All");

  // Modals
  const [resolvingItem, setResolvingItem] = useState<PunchItem | null>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string } | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  // Resolve form
  const [resolutionNotes, setResolutionNotes] = useState("");

  // Report form
  const [newTitle, setNewTitle] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newTrade, setNewTrade] = useState("Architectural Woodwork");
  const [newPriority, setNewPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [newObservation, setNewObservation] = useState("");
  const [newPlan, setNewPlan] = useState("");
  const [newDueDate, setNewDueDate] = useState("2026-10-12");

  const handleResolveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resolvingItem) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === resolvingItem.id
            ? {
                ...item,
                status: "Ready for Re-inspection",
                actionPlan: resolutionNotes || item.actionPlan,
                isPendingResolution: false,
                resolutionPhoto: item.initialPhoto,
              }
            : item
        )
      );
      setToastMessage(`Defect item ${resolvingItem.id} marked as "Ready for Re-inspection" with GC Lead PE.`);
      setResolvingItem(null);
      setResolutionNotes("");
      setTimeout(() => setToastMessage(""), 5000);
    }
  };

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: PunchItem = {
      id: `P-0${43 + items.length - 3}`,
      trade: newTrade,
      priority: newPriority,
      status: "Open",
      location: newLocation || "Living Pavilion — South Wall",
      observation: newObservation || newTitle,
      actionPlan: newPlan || "Field adjustment and joint calibration scheduled.",
      assigned: "Marcus Vance",
      inspector: "Sophia Bennett (Lead PE)",
      issued: "Oct 06, 2026",
      due: newDueDate,
      initialPhoto: "/images/project-1.jpg",
      isPendingResolution: true,
    };

    setItems([newItem, ...items]);
    setIsReportModalOpen(false);
    setToastMessage(`New punch item ${newItem.id} logged and assigned.`);
    setNewTitle("");
    setNewLocation("");
    setNewObservation("");
    setNewPlan("");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "All" || item.status === activeFilter;
    const matchesSearch =
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.observation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.actionPlan.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const openCount = items.filter((i) => i.status === "Open").length;
  const readyCount = items.filter((i) => i.status === "Ready for Re-inspection").length;
  const resolvedCount = items.filter((i) => i.status === "Resolved").length;

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
                <CheckCircle2 className="w-3.5 h-3.5" />
                QA Defect Resolution Ledger
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Millwork Punch Items & Rectifications
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Inspect punch list items flagged during GC walk-throughs. Upload before/after photos and corrective action plans to request immediate re-inspection and sign-off.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsReportModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Report Field Item
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search item #, location, trade, description..."
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
              <span className="relative z-10">All ({items.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Open")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "Open"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">Open ({openCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Ready for Re-inspection")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "Ready for Re-inspection"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">Ready for Re-inspection ({readyCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Resolved")}
              className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === "Resolved"
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-700 hover:text-[#12223B]"
              }`}
            >
              <span className="relative z-10">Resolved ({resolvedCount})</span>
            </button>
          </div>
        </div>

        {/* Punch Items List */}
        <div className="space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                      {item.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                      {item.trade}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                        item.priority === "High"
                          ? "bg-rose-50 text-rose-700 border-rose-200"
                          : item.priority === "Medium"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {item.priority} Priority
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                        item.status === "Resolved"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : item.status === "Ready for Re-inspection"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-rose-50 text-rose-700 border-rose-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B] flex items-center gap-2">
                    <MapPin className="w-4.5 h-4.5 text-[#FFDB5A] shrink-0" />
                    {item.location}
                  </h3>
                </div>

                {item.status !== "Resolved" && (
                  <button
                    type="button"
                    onClick={() => setResolvingItem(item)}
                    className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer self-start lg:self-center shadow-xs flex items-center gap-2"
                  >
                    <Wrench className="w-4 h-4 text-[#FFDB5A]" />
                    <span>Resolve & Request Sign-off</span>
                  </button>
                )}
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Notes and Plan */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Defect Observation & Inspection Notes
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                      {item.observation}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F6F6F6] border border-gray-200/80 space-y-1.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#12223B] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Corrective Action Plan
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                      {item.actionPlan}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600 font-medium">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      Assigned: <strong className="text-gray-900 font-semibold">{item.assigned}</strong>
                    </span>
                    <span>
                      Inspector: <strong className="text-gray-900 font-semibold">{item.inspector}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      Issued: {item.issued} • Due:{" "}
                      <strong
                        className={
                          item.status === "Open" ? "text-rose-700 font-semibold" : "text-gray-900"
                        }
                      >
                        {item.due}
                      </strong>
                    </span>
                  </div>
                </div>

                {/* Photos */}
                <div className="space-y-3 lg:border-l lg:border-gray-100 lg:pl-6">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Defect & Resolution Photos
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Initial Defect Photo */}
                    <div>
                      <div
                        onClick={() =>
                          setSelectedPhoto({
                            url: item.initialPhoto,
                            caption: `${item.id}: Initial defect photo at ${item.location}`,
                          })
                        }
                        className="relative h-28 w-full rounded-lg overflow-hidden border border-gray-200 bg-black cursor-pointer group"
                      >
                        <Image
                          src={item.initialPhoto}
                          alt="Before Correction"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-[11px] text-center text-gray-500 font-semibold mt-1">
                        Initial Defect
                      </p>
                    </div>

                    {/* Resolution Photo */}
                    <div>
                      {item.isPendingResolution ? (
                        <div className="h-28 w-full rounded-lg border-2 border-dashed border-gray-200 bg-[#F9F9F9] flex flex-col items-center justify-center p-2 text-center">
                          <Camera className="w-5 h-5 text-gray-400 mb-1" />
                          <p className="text-[10px] text-gray-400 font-medium">
                            Photo pending resolution
                          </p>
                        </div>
                      ) : (
                        <div
                          onClick={() =>
                            setSelectedPhoto({
                              url: item.resolutionPhoto || item.initialPhoto,
                              caption: `${item.id}: Rectification photo at ${item.location}`,
                            })
                          }
                          className="relative h-28 w-full rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center cursor-pointer group"
                        >
                          <Image
                            src={item.resolutionPhoto || item.initialPhoto}
                            alt="After Correction"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      )}
                      <p
                        className={`text-[11px] text-center font-semibold mt-1 ${
                          item.isPendingResolution ? "text-gray-400" : "text-emerald-700"
                        }`}
                      >
                        {item.isPendingResolution ? "In Progress" : "Corrected"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Resolve Item & Request Sign-off */}
      {resolvingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Resolve {resolvingItem.id}
                  </h3>
                  <p className="text-xs text-gray-500">Request Field Verification Sign-Off</p>
                </div>
              </div>
              <button
                onClick={() => setResolvingItem(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleResolveSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                <p className="font-semibold text-[#12223B]">{resolvingItem.location}</p>
                <p className="text-gray-600">{resolvingItem.observation}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Corrective Actions Taken
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the exact rectification completed (e.g. Loosened clip, installed 2mm stainless shim, calibrated plumb with laser)..."
                  value={resolutionNotes}
                  onChange={(e) => setResolutionNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Field photo will automatically attach to GC re-inspection packet.</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setResolvingItem(null)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit for Re-Inspection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Report Field Item */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Report New QA Defect / Variance
                  </h3>
                  <p className="text-xs text-gray-500">Log internal punch item before GC walk</p>
                </div>
              </div>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateReport} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Item Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Bedroom Walk-in Closet — South Elevation"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Trade Discipline
                  </label>
                  <select
                    value={newTrade}
                    onChange={(e) => setNewTrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  >
                    <option value="Architectural Woodwork">Architectural Woodwork</option>
                    <option value="Custom Cabinetry">Custom Cabinetry</option>
                    <option value="Casework & Trim">Casework & Trim</option>
                    <option value="Finishes">Finishes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Defect Priority
                  </label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as "High" | "Medium" | "Low")}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Defect Observation Notes
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe the discrepancy observed..."
                  value={newObservation}
                  onChange={(e) => setNewObservation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Proposed Corrective Plan
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe how the trade crew will rectify..."
                  value={newPlan}
                  onChange={(e) => setNewPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Target Rectification Due Date
                </label>
                <input
                  type="date"
                  required
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Log Punch Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Enlarged Defect / Rectification Photo */}
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
                QA Inspection Photo
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
