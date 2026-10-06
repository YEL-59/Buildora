"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Plus,
  Search,
  CheckCircle2,
  MapPin,
  Calendar,
  FileText,
  Download,
  X,
  AlertTriangle,
  Clock,
  Layers,
  Send,
  Building,
} from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  completed: boolean;
}

interface WorkPackage {
  id: string;
  spec: string;
  category: "Architectural Woodwork" | "Custom Cabinetry" | "Casework & Trim" | "Exterior Carpentry";
  status: "Active" | "Pending Inspection" | "Completed";
  title: string;
  value: number;
  scope: string;
  milestones: Milestone[];
  location: string;
  startDate: string;
  endDate: string;
  drawings: { name: string; size: string }[];
}

const initialPackages: WorkPackage[] = [
  {
    id: "WO-06-101",
    spec: "Spec 06 42 00",
    category: "Architectural Woodwork",
    status: "Active",
    title: "Living Pavilion White Oak Ceiling & Wall Paneling",
    value: 94000,
    scope:
      "Supply and precision blind-clip installation of select European White Oak tongue-and-groove acoustic micro-perforated ceiling slats and concealed pivot door cladding.",
    milestones: [
      { id: "m1", title: "Laser alignment and resilient sub-framing channels", completed: true },
      { id: "m2", title: "Concealed perimeter LED lighting reveal channels", completed: true },
      { id: "m3", title: "Main ceiling slat field installation (950 sq ft)", completed: true },
      { id: "m4", title: "Flush seamless integration with HVAC linear diffusers", completed: false },
    ],
    location: "Level 1 — Main Living Pavilion & Gallery Corridor",
    startDate: "Sep 15, 2026",
    endDate: "Oct 25, 2026",
    drawings: [
      { name: "Millwork-Detail-Sheet-M301.pdf", size: "3.4 MB" },
      { name: "Acoustic-Baffle-Specs.pdf", size: "1.8 MB" },
    ],
  },
  {
    id: "WO-06-102",
    spec: "Spec 06 41 00",
    category: "Custom Cabinetry",
    status: "Active",
    title: "Custom Master Suite Walnut Walk-in Wardrobe & Vanities",
    value: 78000,
    scope:
      "Bookmatched American Walnut veneered storage carcasses, integrated Blum soft-close tip-on hardware, leather drawer liners, and recessed bronze LED strip profiles.",
    milestones: [
      { id: "m1", title: "Carcass leveling, anchor blocking and plum verification", completed: true },
      { id: "m2", title: "Lutron drawer sensor lighting conduit pre-wiring", completed: true },
      { id: "m3", title: "Center island jewelry vitrine glass top fitting", completed: false },
      { id: "m4", title: "Final satin matte poly-urethane touch-up", completed: false },
    ],
    location: "Level 2 — Primary Bedroom Suite & Primary Bath",
    startDate: "Oct 01, 2026",
    endDate: "Nov 10, 2026",
    drawings: [{ name: "Wardrobe-Elevation-DWG-A402.pdf", size: "4.1 MB" }],
  },
  {
    id: "WO-06-103",
    spec: "Spec 06 40 00",
    category: "Casework & Trim",
    status: "Pending Inspection",
    title: "Gourmet Chef Kitchen Fluted Island Base & Prep Bar",
    value: 46000,
    scope:
      "Curved tambour fluted solid oak island base enclosure, structural steel support brackets for 2cm Calacatta Gold marble overhang, and concealed waste bins.",
    milestones: [
      { id: "m1", title: "Steel cantilever bracket installation and deflection test", completed: true },
      { id: "m2", title: "Fluted tambour panel bending and seamless jointing", completed: true },
      { id: "m3", title: "Under-counter ventilation ductwork shroud", completed: true },
      { id: "m4", title: "GC Quality Inspection sign-off", completed: false },
    ],
    location: "Level 1 — Gourmet Culinary Zone",
    startDate: "Aug 20, 2026",
    endDate: "Oct 05, 2026",
    drawings: [{ name: "Kitchen-Island-Structural-Detail.pdf", size: "2.9 MB" }],
  },
  {
    id: "WO-06-104",
    spec: "Spec 06 15 00",
    category: "Exterior Carpentry",
    status: "Active",
    title: "Exterior Ipe Hardwood Decking & Concealed Drainage Step-Downs",
    value: 30000,
    scope:
      "Commercial-grade FSC-certified 5/4x6 Ipe decking with Camo concealed edge-fasteners, aluminum pedestals, and stainless steel access hatch frames.",
    milestones: [
      { id: "m1", title: "Waterproofing membrane protection mat laydown", completed: false },
      { id: "m2", title: "Aluminum substructure joist grid installation", completed: false },
      { id: "m3", title: "Decking board laying with 3/16 inch expansion spacing", completed: false },
    ],
    location: "Outdoor — Poolside Sun Deck & Firepit Terrace",
    startDate: "Nov 01, 2026",
    endDate: "Nov 28, 2026",
    drawings: [{ name: "Decking-Substructure-Detail.pdf", size: "2.2 MB" }],
  },
];

export default function SubcontractorWorkOrdersPage() {
  const [packages, setPackages] = useState<WorkPackage[]>(initialPackages);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Modals
  const [isExtraWorkModalOpen, setIsExtraWorkModalOpen] = useState(false);
  const [inspectingPackage, setInspectingPackage] = useState<WorkPackage | null>(null);
  const [isSuccessToast, setIsSuccessToast] = useState("");

  // Extra work form
  const [extraScopeTitle, setExtraScopeTitle] = useState("");
  const [extraPackageId, setExtraPackageId] = useState("WO-06-101");
  const [extraCost, setExtraCost] = useState("");
  const [extraHours, setExtraHours] = useState("");
  const [extraJustification, setExtraJustification] = useState("");

  // Inspection form
  const [inspectionDate, setInspectionDate] = useState("2026-10-08");
  const [inspectionTime, setInspectionTime] = useState("10:00 AM");
  const [inspectionNotes, setInspectionNotes] = useState("");

  const toggleMilestone = (pkgId: string, milestoneId: string) => {
    setPackages((prev) =>
      prev.map((pkg) => {
        if (pkg.id !== pkgId) return pkg;
        const updatedMilestones = pkg.milestones.map((m) =>
          m.id === milestoneId ? { ...m, completed: !m.completed } : m
        );
        return { ...pkg, milestones: updatedMilestones };
      })
    );
  };

  const handleExtraWorkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsExtraWorkModalOpen(false);
    setIsSuccessToast(`Extra Work Authorization request for "${extraScopeTitle || "Custom Scope"}" transmitted to GC Lead PE Sophia Bennett.`);
    setExtraScopeTitle("");
    setExtraCost("");
    setExtraHours("");
    setExtraJustification("");
    setTimeout(() => setIsSuccessToast(""), 5000);
  };

  const handleInspectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inspectingPackage) {
      setPackages((prev) =>
        prev.map((pkg) =>
          pkg.id === inspectingPackage.id ? { ...pkg, status: "Pending Inspection" } : pkg
        )
      );
      setIsSuccessToast(`Interim GC Inspection for ${inspectingPackage.id} scheduled for ${inspectionDate} at ${inspectionTime}.`);
      setInspectingPackage(null);
      setTimeout(() => setIsSuccessToast(""), 5000);
    }
  };

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.spec.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.scope.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || pkg.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const categoryCounts = {
    All: packages.length,
    "Architectural Woodwork": packages.filter((p) => p.category === "Architectural Woodwork").length,
    "Custom Cabinetry": packages.filter((p) => p.category === "Custom Cabinetry").length,
    "Casework & Trim": packages.filter((p) => p.category === "Casework & Trim").length,
    "Exterior Carpentry": packages.filter((p) => p.category === "Exterior Carpentry").length,
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto space-y-8">
      {/* Toast Notification */}
      {isSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A]/40 flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{isSuccessToast}</span>
          <button
            onClick={() => setIsSuccessToast("")}
            className="text-gray-400 hover:text-white ml-2"
          >
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
                <Briefcase className="w-3.5 h-3.5" />
                Subcontract Agreement #SC-2026-06
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Modern Family Villa — Finish Millwork Packages
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Review assigned architectural woodwork, custom cabinetry carcasses, and exterior decking scopes. Click deliverable checkboxes to update milestone progress and trigger GC interim inspections.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsExtraWorkModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Request Extra Work Authorization
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
              placeholder="Search package #, title, spec code, location..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(
              [
                "All",
                "Architectural Woodwork",
                "Custom Cabinetry",
                "Casework & Trim",
                "Exterior Carpentry",
              ] as const
            ).map((cat) => {
              const count = categoryCounts[cat];
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                      : "text-gray-700 hover:text-[#12223B]"
                  }`}
                >
                  <span className="relative z-10">
                    {cat} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Work Order Cards */}
        <div className="space-y-6">
          {filteredPackages.map((pkg) => {
            const completedCount = pkg.milestones.filter((m) => m.completed).length;
            const totalCount = pkg.milestones.length;
            const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                        {pkg.id}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                        {pkg.spec}
                      </span>
                      <span
                        className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                          pkg.status === "Pending Inspection"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : pkg.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {pkg.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] tracking-tight">
                      {pkg.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 font-medium">Package Value</p>
                      <p className="text-xl sm:text-2xl font-semibold text-[#12223B]">
                        ${pkg.value.toLocaleString()} USD
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setInspectingPackage(pkg)}
                      className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                    >
                      Request Inspection
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Scope & Milestones */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Scope Specification & Requirements
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                        {pkg.scope}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          Scheduled Milestones & Deliverables ({completedCount} / {totalCount})
                        </h4>
                        <span className="text-[11px] text-gray-400 font-medium">
                          Click milestone to toggle completed status
                        </span>
                      </div>
                      <div className="space-y-2">
                        {pkg.milestones.map((milestone) => (
                          <div
                            key={milestone.id}
                            onClick={() => toggleMilestone(pkg.id, milestone.id)}
                            className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center gap-3 ${
                              milestone.completed
                                ? "bg-emerald-50/60 border-emerald-200 text-gray-700"
                                : "bg-[#F9F9F9] border-gray-200 hover:border-[#FFDB5A] text-[#12223B]"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                                milestone.completed
                                  ? "bg-emerald-500 border-emerald-500 text-white"
                                  : "border-gray-300 bg-white"
                              }`}
                            >
                              {milestone.completed && (
                                <CheckCircle2 className="w-3.5 h-3.5" />
                              )}
                            </div>
                            <span
                              className={`text-xs sm:text-sm font-semibold leading-snug ${
                                milestone.completed ? "text-gray-700 line-through/10" : "text-[#12223B]"
                              }`}
                            >
                              {milestone.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress & Metadata */}
                  <div className="space-y-4 lg:border-l lg:border-gray-100 lg:pl-6">
                    <div className="p-4 rounded-xl bg-[#F6F6F6] space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#12223B]">
                        <span>Milestone Execution</span>
                        <span>{progressPct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div
                          className="h-full bg-[#12223B] rounded-full transition-all duration-500"
                          style={{ width: `${progressPct}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FFDB5A] shrink-0" />
                        <span>{pkg.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>
                          Schedule: {pkg.startDate} – {pkg.endDate}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Contract Drawings & Specs
                      </h4>
                      <div className="space-y-2">
                        {pkg.drawings.map((doc, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs sm:text-sm"
                          >
                            <span className="flex items-center gap-2 font-semibold text-gray-800 truncate">
                              <FileText className="w-4 h-4 text-[#12223B] shrink-0" />
                              <span className="truncate">{doc.name}</span>
                            </span>
                            <button
                              type="button"
                              onClick={() => {
                                setIsSuccessToast(`Downloading blueprint artifact: ${doc.name}`);
                                setTimeout(() => setIsSuccessToast(""), 3000);
                              }}
                              className="p-1 text-gray-500 hover:text-[#12223B] cursor-pointer"
                              title="Download Attachment"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Request Extra Work Authorization */}
      {isExtraWorkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Extra Work Authorization (EWA)
                  </h3>
                  <p className="text-xs text-gray-500">
                    Submit subcontractor scope change order to GC Lead PE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsExtraWorkModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleExtraWorkSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Parent Work Package
                </label>
                <select
                  value={extraPackageId}
                  onChange={(e) => setExtraPackageId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-xs sm:text-sm font-medium text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  {packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.id} — {pkg.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Scope Title & Description
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Additional sub-blocking for motorized drapery pocket"
                  value={extraScopeTitle}
                  onChange={(e) => setExtraScopeTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Estimated Cost ($ USD)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 4500"
                    value={extraCost}
                    onChange={(e) => setExtraCost(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Estimated Labor Hours
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 32"
                    value={extraHours}
                    onChange={(e) => setExtraHours(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Field Justification / Architect Instruction
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail why this scope exceeds base contract drawing specs (e.g. RFI #082 response requiring fire-rated plywood backing)..."
                  value={extraJustification}
                  onChange={(e) => setExtraJustification(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Extra work performed without written GC Lead PE authorization is subject to contract claim denial. AIA G702 billing requires approved CO number.
                </span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsExtraWorkModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit EWA Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Request GC Inspection */}
      {inspectingPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Request GC Inspection
                  </h3>
                  <p className="text-xs text-gray-500">{inspectingPackage.id} — Interim Sign-Off</p>
                </div>
              </div>
              <button
                onClick={() => setInspectingPackage(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleInspectionSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1 text-xs">
                <p className="font-semibold text-[#12223B]">{inspectingPackage.title}</p>
                <p className="text-gray-500">{inspectingPackage.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Proposed Date
                  </label>
                  <input
                    type="date"
                    required
                    value={inspectionDate}
                    onChange={(e) => setInspectionDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={inspectionTime}
                    onChange={(e) => setInspectionTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  >
                    <option value="09:00 AM">09:00 AM (Morning Walk)</option>
                    <option value="11:30 AM">11:30 AM (Pre-Lunch Walk)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon Walk)</option>
                    <option value="04:00 PM">04:00 PM (Shift End Walk)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Inspection Notes for Lead PE
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail readiness (e.g. All acoustic sub-channels leveled with rotary laser; ready for concealed reveal sign-off)..."
                  value={inspectionNotes}
                  onChange={(e) => setInspectionNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setInspectingPackage(null)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
                >
                  Schedule GC Inspection
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
