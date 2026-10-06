"use client";

import React, { useState } from "react";
import {
  Building2,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  Search,
  Plus,
  MapPin,
  Calendar,
  User,
  Eye,
  X,
  Check,
  Clock,
  Layers,
} from "lucide-react";

interface Milestone {
  phase: string;
  name: string;
  progress: number;
  status: "Completed" | "In Progress" | "Pending";
  completionDate?: string;
  notes: string;
}

interface Project {
  id: string;
  sector: "Residential" | "Commercial" | "Industrial" | "Renovation";
  title: string;
  status: "Ahead of Schedule" | "On Schedule" | "Requires Attention";
  client: string;
  location: string;
  budget: string;
  budgetValue: number; // numeric in millions or dollars for sum
  targetDate: string;
  currentPhase: string;
  progress: number;
  engineer: {
    initial: string;
    name: string;
  };
  milestones: Milestone[];
}

export default function AdminProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [selectedMilestoneProject, setSelectedMilestoneProject] =
    useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Projects list matching the exact data in the user screenshot
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "PRJ-901",
      sector: "Residential",
      title: "Modern Family Villa",
      status: "Ahead of Schedule",
      client: "The Johnson Family",
      location: "Central Valley, CA",
      budget: "$850,000",
      budgetValue: 850000,
      targetDate: "Nov 2026",
      currentPhase: "Phase 4: Interior Finishing",
      progress: 78,
      engineer: {
        initial: "S",
        name: "Sophia Bennett",
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Site Excavation & Deep Foundation",
          progress: 100,
          status: "Completed",
          completionDate: "Jul 15, 2026",
          notes: "Seismic soil compaction, perimeter drainage, concrete piles poured.",
        },
        {
          phase: "Phase 2",
          name: "Structural Framing & Timber Beams",
          progress: 100,
          status: "Completed",
          completionDate: "Aug 28, 2026",
          notes: "Glulam beams, sub-flooring, seismic shear walls installed.",
        },
        {
          phase: "Phase 3",
          name: "MEP, Insulation & Solar Rough-In",
          progress: 100,
          status: "Completed",
          completionDate: "Sep 20, 2026",
          notes: "Hydronic radiant heating, smart wiring, R-30 insulation approved.",
        },
        {
          phase: "Phase 4",
          name: "Interior Finishing & Architectural Glass",
          progress: 78,
          status: "In Progress",
          notes: "Floor-to-ceiling panoramic glass installed; white oak hardwood in progress.",
        },
        {
          phase: "Phase 5",
          name: "Exterior Landscaping & Final Handover",
          progress: 0,
          status: "Pending",
          notes: "Permeable pavers, infinity pool terrace, smart home commissioning.",
        },
      ],
    },
    {
      id: "PRJ-902",
      sector: "Commercial",
      title: "Metro Business Center",
      status: "On Schedule",
      client: "Vanguard Properties",
      location: "Downtown Chicago, IL",
      budget: "$4,200,000",
      budgetValue: 4200000,
      targetDate: "Mar 2027",
      currentPhase: "Phase 3: Structural Framing",
      progress: 54,
      engineer: {
        initial: "A",
        name: "Alexander Thomas",
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Subterranean Parking & Caissons",
          progress: 100,
          status: "Completed",
          completionDate: "Jun 10, 2026",
          notes: "3-level underground parking diaphragm wall sealed.",
        },
        {
          phase: "Phase 2",
          name: "Reinforced Concrete Core & Columns",
          progress: 100,
          status: "Completed",
          completionDate: "Aug 15, 2026",
          notes: "Slipform core elevator shafts passed safety inspection.",
        },
        {
          phase: "Phase 3",
          name: "Structural Framing & Steel Truss Decking",
          progress: 54,
          status: "In Progress",
          notes: "Floors 8 through 14 steel erection on schedule.",
        },
        {
          phase: "Phase 4",
          name: "Glass Curtain Wall & HVAC Enclosure",
          progress: 0,
          status: "Pending",
          notes: "Unitized double-glazed facade panels awaiting delivery.",
        },
        {
          phase: "Phase 5",
          name: "Fit-out & Tenant Handover",
          progress: 0,
          status: "Pending",
          notes: "LEED Gold commissioning checklist.",
        },
      ],
    },
    {
      id: "PRJ-903",
      sector: "Industrial",
      title: "Apex Logistics Hub",
      status: "Ahead of Schedule",
      client: "Apex Manufacturing Ltd",
      location: "Detroit, MI",
      budget: "$3,100,000",
      budgetValue: 3100000,
      targetDate: "Oct 2026",
      currentPhase: "Phase 5: Quality Inspection",
      progress: 92,
      engineer: {
        initial: "E",
        name: "Emily Roberts",
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Earthwork & Heavy Pavement Slabs",
          progress: 100,
          status: "Completed",
          completionDate: "May 20, 2026",
          notes: "Superflat laser-screed concrete slab for robotic forklifts.",
        },
        {
          phase: "Phase 2",
          name: "Pre-Engineered Metal Building Framing",
          progress: 100,
          status: "Completed",
          completionDate: "Jul 12, 2026",
          notes: "Clear-span steel frames and insulated wall panels.",
        },
        {
          phase: "Phase 3",
          name: "High-Bay Racking & ESFR Fire Suppression",
          progress: 100,
          status: "Completed",
          completionDate: "Aug 30, 2026",
          notes: "Early suppression fast response sprinkler systems pressure tested.",
        },
        {
          phase: "Phase 4",
          name: "Dock Levelers & Electrical Substation",
          progress: 100,
          status: "Completed",
          completionDate: "Sep 25, 2026",
          notes: "32 hydraulic loading docks powered and certified.",
        },
        {
          phase: "Phase 5",
          name: "Final Quality & OSHA Signoff",
          progress: 92,
          status: "In Progress",
          notes: "Final punchlist walkthrough with municipal inspector.",
        },
      ],
    },
    {
      id: "PRJ-904",
      sector: "Renovation",
      title: "Heritage Building Restoration",
      status: "Requires Attention",
      client: "Skyline Heritage Group",
      location: "Manhattan, NY",
      budget: "$1,750,000",
      budgetValue: 1750000,
      targetDate: "Jun 2027",
      currentPhase: "Phase 2: Substructure Retrofit",
      progress: 35,
      engineer: {
        initial: "M",
        name: "Michael Anderson",
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Historic Masonry & Facade Shoring",
          progress: 100,
          status: "Completed",
          completionDate: "Jul 05, 2026",
          notes: "Terra-cotta cornices stabilized with structural bracing.",
        },
        {
          phase: "Phase 2",
          name: "Substructure Retrofit & Micro-piles",
          progress: 35,
          status: "In Progress",
          notes: "Unforeseen water table seepage; hydraulic pumps installed.",
        },
        {
          phase: "Phase 3",
          name: "Internal Timber Joist Replacement",
          progress: 0,
          status: "Pending",
          notes: "Historic landmark preservation approved architectural timber.",
        },
        {
          phase: "Phase 4",
          name: "Modern MEP Integration & Elevator",
          progress: 0,
          status: "Pending",
          notes: "Shaftless elevator retrofitted in historic atrium.",
        },
      ],
    },
  ]);

  // Form states for New Project Modal
  const [newTitle, setNewTitle] = useState("");
  const [newSector, setNewSector] = useState<Project["sector"]>("Residential");
  const [newClient, setNewClient] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newBudget, setNewBudget] = useState("1200000");
  const [newTarget, setNewTarget] = useState("Dec 2027");
  const [newPhase, setNewPhase] = useState("Phase 1: Site Excavation");
  const [newProgress, setNewProgress] = useState(15);
  const [newEngineer, setNewEngineer] = useState("Sophia Bennett");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newClient.trim()) return;

    const budgetNum = parseFloat(newBudget) || 1200000;
    const formattedBudget = `$${budgetNum.toLocaleString()}`;

    const newProject: Project = {
      id: `PRJ-${901 + projects.length}`,
      title: newTitle.trim(),
      sector: newSector,
      status: "On Schedule",
      client: newClient.trim(),
      location: newLocation.trim() || "Austin, TX",
      budget: formattedBudget,
      budgetValue: budgetNum,
      targetDate: newTarget.trim() || "Dec 2027",
      currentPhase: newPhase.trim() || "Phase 1: Foundation",
      progress: Number(newProgress) || 10,
      engineer: {
        initial: newEngineer.charAt(0).toUpperCase() || "E",
        name: newEngineer,
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Permitting & Excavation",
          progress: 100,
          status: "Completed",
          notes: "All municipal permits approved and foundation trenches set.",
        },
        {
          phase: "Phase 2",
          name: "Core Foundation & Framing",
          progress: Number(newProgress) || 10,
          status: "In Progress",
          notes: "Structural steel delivery expected next week.",
        },
      ],
    };

    setProjects([newProject, ...projects]);
    setIsAddModalOpen(false);
    showToast(`Project "${newProject.title}" created successfully!`);

    // Reset fields
    setNewTitle("");
    setNewClient("");
    setNewLocation("");
    setNewBudget("1200000");
  };

  // Filter projects by sector and search query
  const filteredProjects = projects.filter((prj) => {
    const matchesFilter = filter === "All" || prj.sector === filter;
    const query = search.toLowerCase().trim();
    const matchesSearch =
      !query ||
      prj.title.toLowerCase().includes(query) ||
      prj.client.toLowerCase().includes(query) ||
      prj.location.toLowerCase().includes(query) ||
      prj.engineer.name.toLowerCase().includes(query) ||
      prj.id.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  // Calculate dynamic stats
  const totalSites = projects.length;
  const aheadOnTrack = projects.filter(
    (p) => p.status === "Ahead of Schedule" || p.status === "On Schedule"
  ).length;
  const criticalCount = projects.filter(
    (p) => p.status === "Requires Attention"
  ).length;

  const totalCommittedMillions = (
    projects.reduce((acc, p) => acc + p.budgetValue, 0) / 1000000
  ).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#12223B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFDB5A] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">
            {toastMessage}
          </span>
        </div>
      )}

      {/* =====================================================================
          4 STAT KPI CARDS (EXACT MATCHING USER SCREENSHOT)
      ===================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: TOTAL ACTIVE SITES */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              TOTAL ACTIVE SITES
            </span>
            <div className="text-gray-400">
              <Building2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-[#12223B] mt-2">
            {totalSites}
          </h3>
          <p className="text-xs text-gray-400 mt-1">Across 4 sectors</p>
        </div>

        {/* Card 2: AHEAD / ON TRACK */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              AHEAD / ON TRACK
            </span>
            <div className="text-emerald-500">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-emerald-500 mt-2">
            {aheadOnTrack}
          </h3>
          <p className="text-xs text-gray-400 mt-1">Milestones on schedule</p>
        </div>

        {/* Card 3: CRITICAL FOCUS */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              CRITICAL FOCUS
            </span>
            <div className="text-red-500">
              <AlertCircle className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-red-500 mt-2">
            {criticalCount}
          </h3>
          <p className="text-xs text-gray-400 mt-1">Safety / supply delay</p>
        </div>

        {/* Card 4: TOTAL COMMITTED VALUE */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              TOTAL COMMITTED VALUE
            </span>
            <div className="text-amber-500 font-bold text-base">
              $
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-[#12223B] mt-2">
            ${totalCommittedMillions}M
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Contracted construction volume
          </p>
        </div>
      </div>

      {/* =====================================================================
          CONTROL BAR: SEARCH + SECTOR FILTERS + NEW PROJECT BUTTON
      ===================================================================== */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects, client, manager..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-gray-50/70 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#12223B] focus:bg-white transition-all text-[#12223B]"
          />
        </div>

        {/* Sector Tabs + New Project Button */}
        <div className="flex flex-wrap items-center gap-2 justify-between md:justify-end">
          <div className="flex items-center gap-1 overflow-x-auto">
            {["All", "Residential", "Commercial", "Industrial", "Renovation"].map(
              (sector) => {
                const isActive = filter === sector;
                return (
                  <button
                    key={sector}
                    type="button"
                    onClick={() => setFilter(sector)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#FFDB5A] text-[#12223B] font-bold shadow-2xs"
                        : "text-gray-600 hover:text-[#12223B] hover:bg-gray-100"
                    }`}
                  >
                    {sector}
                  </button>
                );
              }
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#12223B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs ml-auto md:ml-2"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* =====================================================================
          PROJECT CARDS GRID (2x2 RESPONSIVE MATCHING USER SCREENSHOT)
      ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((prj) => {
          // Status badge styling matching user screenshot
          const statusBadge =
            prj.status === "Ahead of Schedule"
              ? "bg-[#E8F8F0] text-[#10B981] border border-[#10B981]/20"
              : prj.status === "On Schedule"
              ? "bg-[#EAF2FF] text-[#2563EB] border border-[#2563EB]/20"
              : "bg-[#FEECEB] text-[#EF4444] border border-[#EF4444]/20";

          // Progress bar color based on screenshot
          const progressBarColor =
            prj.progress >= 90
              ? "bg-[#10B981]" // bright green for high progress / inspection (Apex Logistics Hub)
              : prj.status === "Requires Attention"
              ? "bg-[#F59E0B]" // amber/orange for attention (Heritage Restoration 35%)
              : "bg-[#12223B]"; // dark navy for on-track (Modern Villa 78%, Metro Center 54%)

          return (
            <div
              key={prj.id}
              className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-2xs hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header Row: ID • Sector and Status Badge */}
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-gray-400 tracking-tight">
                    {prj.id} • {prj.sector}
                  </div>
                  <span
                    className={`px-3 py-0.5 rounded-full text-[11px] font-semibold ${statusBadge}`}
                  >
                    {prj.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
                  {prj.title}
                </h3>

                {/* 2x2 Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <User className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    <span className="truncate">Client: {prj.client}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{prj.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-bold text-gray-400 text-xs w-3.5 text-center flex-shrink-0">
                      $
                    </span>
                    <span className="truncate">Budget: {prj.budget}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                    <span className="truncate">Target: {prj.targetDate}</span>
                  </div>
                </div>

                {/* Phase Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-600">{prj.currentPhase}</span>
                    <span className="text-[#12223B] font-bold">
                      {prj.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${progressBarColor}`}
                      style={{ width: `${prj.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Footer Row: Engineer Circle + Name and Milestones Link */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#12223B] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {prj.engineer.initial}
                  </div>
                  <span className="text-xs font-semibold text-gray-700">
                    Eng. {prj.engineer.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMilestoneProject(prj)}
                  className="text-xs font-semibold text-gray-600 hover:text-[#12223B] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-gray-500" />
                  <span>Milestones</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================================
          MODAL: MILESTONES INSPECTOR
      ===================================================================== */}
      {selectedMilestoneProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  {selectedMilestoneProject.id} • {selectedMilestoneProject.sector}
                </span>
                <h3 className="text-xl font-bold text-[#12223B]">
                  {selectedMilestoneProject.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Full Milestone Architecture & Engineering Verification
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMilestoneProject(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-[#12223B] hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick summary stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-gray-50 rounded-xl text-xs">
              <div>
                <span className="text-gray-400 block">Client</span>
                <strong className="text-[#12223B] truncate block">
                  {selectedMilestoneProject.client}
                </strong>
              </div>
              <div>
                <span className="text-gray-400 block">Total Budget</span>
                <strong className="text-[#12223B] block">
                  {selectedMilestoneProject.budget}
                </strong>
              </div>
              <div>
                <span className="text-gray-400 block">Target Handover</span>
                <strong className="text-[#12223B] block">
                  {selectedMilestoneProject.targetDate}
                </strong>
              </div>
              <div>
                <span className="text-gray-400 block">Lead Supervisor</span>
                <strong className="text-[#12223B] truncate block">
                  Eng. {selectedMilestoneProject.engineer.name}
                </strong>
              </div>
            </div>

            {/* Milestones List */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Phase Schedule & Inspections
              </h4>

              {selectedMilestoneProject.milestones.map((ms, idx) => {
                const isCompleted = ms.status === "Completed";
                const isInProgress = ms.status === "In Progress";

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-gray-200/80 bg-white space-y-2 hover:border-[#12223B]/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-400 font-mono">
                          {ms.phase}
                        </span>
                        <h5 className="text-sm font-bold text-[#12223B]">
                          {ms.name}
                        </h5>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          isCompleted
                            ? "bg-emerald-100 text-emerald-800"
                            : isInProgress
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {ms.status}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Milestone Progress</span>
                        <span className="font-bold text-[#12223B]">
                          {ms.progress}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            isCompleted
                              ? "bg-emerald-500"
                              : isInProgress
                              ? "bg-[#12223B]"
                              : "bg-gray-300"
                          }`}
                          style={{ width: `${ms.progress}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 bg-gray-50/80 p-2 rounded-lg">
                      {ms.notes}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedMilestoneProject(null)}
                className="px-5 py-2 bg-[#12223B] text-white text-xs font-bold rounded-xl cursor-pointer hover:bg-black"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL: ADD NEW PROJECT
      ===================================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="font-bold text-base text-[#12223B]">
                  Create New Construction Project
                </h4>
                <p className="text-xs text-gray-400">
                  Provision new job site, budget allocation, and engineering lead
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Waterfront Residences"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Sector
                  </label>
                  <select
                    value={newSector}
                    onChange={(e) =>
                      setNewSector(e.target.value as Project["sector"])
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Holdings"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Austin, TX"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Total Budget ($)
                  </label>
                  <input
                    type="number"
                    placeholder="1500000"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Target Handover Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dec 2027"
                    value={newTarget}
                    onChange={(e) => setNewTarget(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Assigned Engineer
                  </label>
                  <select
                    value={newEngineer}
                    onChange={(e) => setNewEngineer(e.target.value)}
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  >
                    <option value="Sophia Bennett">Eng. Sophia Bennett</option>
                    <option value="Alexander Thomas">
                      Eng. Alexander Thomas
                    </option>
                    <option value="Emily Roberts">Eng. Emily Roberts</option>
                    <option value="Michael Anderson">
                      Eng. Michael Anderson
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-xl cursor-pointer hover:opacity-90 shadow-xs"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
