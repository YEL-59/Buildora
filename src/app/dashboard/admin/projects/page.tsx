"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Search,
  Plus,
  MapPin,
  Calendar,
  HardHat,
  X,
  Clock,
  Layers,
  FileCheck,
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
  targetDate: string;
  currentPhase: string;
  progress: number;
  engineer: {
    name: string;
    avatar: string;
  };
  milestones: Milestone[];
}

export default function AdminProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedMilestoneProject, setSelectedMilestoneProject] =
    useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "PRJ-901",
      sector: "Residential",
      title: "Modern Family Villa",
      status: "Ahead of Schedule",
      client: "The Johnson Family",
      location: "Central Valley, CA",
      budget: "$850,000",
      targetDate: "Nov 2026",
      currentPhase: "Phase 4: Interior Finishing",
      progress: 78,
      engineer: {
        name: "Sophia Bennett",
        avatar: "/images/author-2.jpg",
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
          notes: "Hydronic in-floor radiant heating, wiring, R-30 insulation approved.",
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
      targetDate: "Mar 2027",
      currentPhase: "Phase 3: Structural Framing",
      progress: 54,
      engineer: {
        name: "Alexander Thomas",
        avatar: "/images/author-1.jpg",
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
      targetDate: "Oct 2026",
      currentPhase: "Phase 5: Quality Inspection",
      progress: 92,
      engineer: {
        name: "Emily Roberts",
        avatar: "/images/author-3.jpg",
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
      targetDate: "Jun 2027",
      currentPhase: "Phase 2: Substructure Retrofit",
      progress: 49,
      engineer: {
        name: "Michael Anderson",
        avatar: "/images/author-4.jpg",
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
          progress: 49,
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

  // Add Project Form
  const [newTitle, setNewTitle] = useState("");
  const [newSector, setNewSector] = useState<Project["sector"]>("Residential");
  const [newClient, setNewClient] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newBudget, setNewBudget] = useState("");
  const [newTarget, setNewTarget] = useState("");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newClient) return;

    const newProject: Project = {
      id: `PRJ-${905 + projects.length}`,
      title: newTitle,
      sector: newSector,
      status: "On Schedule",
      client: newClient,
      location: newLocation || "Austin, TX",
      budget: newBudget ? `$${newBudget}` : "$1,500,000",
      targetDate: newTarget || "Dec 2027",
      currentPhase: "Phase 1: Site Preparation",
      progress: 15,
      engineer: {
        name: "Alexander Thomas",
        avatar: "/images/author-1.jpg",
      },
      milestones: [
        {
          phase: "Phase 1",
          name: "Site Preparation & Surveying",
          progress: 60,
          status: "In Progress",
          notes: "Topographical surveying and preliminary grading.",
        },
        {
          phase: "Phase 2",
          name: "Foundation & Substructure",
          progress: 0,
          status: "Pending",
          notes: "Excavation and formwork setup.",
        },
      ],
    };

    setProjects([newProject, ...projects]);
    setIsAddModalOpen(false);
    setNewTitle("");
    setNewClient("");
    setNewLocation("");
    setNewBudget("");
    setNewTarget("");
  };

  const filteredProjects = projects.filter((prj) => {
    const matchesFilter = filter === "All" || prj.sector === filter;
    const matchesSearch =
      prj.title.toLowerCase().includes(search.toLowerCase()) ||
      prj.client.toLowerCase().includes(search.toLowerCase()) ||
      prj.location.toLowerCase().includes(search.toLowerCase()) ||
      prj.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Total Active Sites
            </span>
            <Building2 className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            {projects.length}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Across 4 sectors</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Ahead / On Track
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-2">
            {projects.filter((p) => p.status !== "Requires Attention").length}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Milestones on schedule</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Critical Focus
            </span>
            <AlertTriangle className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 mt-2">
            {projects.filter((p) => p.status === "Requires Attention").length}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Safety / supply delay</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Total Committed Value
            </span>
            <DollarSign className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            $9.9M
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Contracted construction volume
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search project, location, client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {["All", "Residential", "Commercial", "Industrial", "Renovation"].map(
              (sector) => (
                <button
                  key={sector}
                  type="button"
                  onClick={() => setFilter(sector)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    filter === sector
                      ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                      : "text-gray-700 hover:text-[#12223B]"
                  }`}
                >
                  {sector}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((prj) => {
          const statusColors = {
            "Ahead of Schedule": "bg-emerald-100 text-emerald-800",
            "On Schedule": "bg-blue-100 text-blue-800",
            "Requires Attention": "bg-amber-100 text-amber-800",
          }[prj.status];

          return (
            <div
              key={prj.id}
              className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs hover:border-[#12223B]/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-gray-500">
                      {prj.id}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#12223B] bg-[#FFDB5A] px-2.5 py-0.5 rounded">
                      {prj.sector}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors}`}
                  >
                    {prj.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#12223B] mb-1">
                  {prj.title}
                </h3>

                <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{prj.location}</span>
                  <span className="text-gray-300">•</span>
                  <span>Client: {prj.client}</span>
                </p>

                <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl mb-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400 block text-xs">Total Budget</span>
                    <strong className="text-[#12223B] font-semibold text-base">
                      {prj.budget}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Target Handover</span>
                    <strong className="text-[#12223B] font-semibold text-base">
                      {prj.targetDate}
                    </strong>
                  </div>
                </div>

                <div className="space-y-2 mb-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-[#12223B]">{prj.currentPhase}</span>
                    <span className="text-[#12223B] font-mono text-sm sm:text-base">
                      {prj.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        prj.status === "Requires Attention"
                          ? "bg-amber-500"
                          : "bg-[#12223B]"
                      }`}
                      style={{ width: `${prj.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Footer: Assigned Engineer & Milestones Button */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                    <Image
                      src={prj.engineer.avatar}
                      alt={prj.engineer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block leading-tight">
                      Site Supervisor
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#12223B] leading-tight">
                      {prj.engineer.name}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMilestoneProject(prj)}
                  className="px-4 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#FFDB5A]" />
                  <span>Milestones</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Milestones Modal */}
      {selectedMilestoneProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  {selectedMilestoneProject.id} • {selectedMilestoneProject.sector}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#12223B]">
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

            <div className="space-y-4">
              {selectedMilestoneProject.milestones.map((ms, index) => {
                const statusBadge = {
                  Completed: "bg-emerald-100 text-emerald-800",
                  "In Progress": "bg-[#FFDB5A] text-[#12223B]",
                  Pending: "bg-gray-100 text-gray-500",
                }[ms.status];

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200/70 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gray-500 uppercase">
                          {ms.phase}
                        </span>
                        <strong className="text-sm sm:text-base font-semibold text-[#12223B]">
                          {ms.name}
                        </strong>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusBadge}`}
                      >
                        {ms.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600">{ms.notes}</p>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-gray-400">
                        {ms.completionDate ? `Completed: ${ms.completionDate}` : "Status: Active"}
                      </span>
                      <span className="font-mono font-semibold text-[#12223B]">
                        {ms.progress}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full bg-[#12223B] rounded-full"
                        style={{ width: `${ms.progress}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-500">
                Supervised by{" "}
                <strong className="text-[#12223B]">
                  {selectedMilestoneProject.engineer.name}
                </strong>
              </span>
              <button
                type="button"
                onClick={() => setSelectedMilestoneProject(null)}
                className="px-4 py-2 rounded-lg bg-[#12223B] text-white font-semibold cursor-pointer"
              >
                Close Milestones
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#12223B]">Create Construction Project</h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pacific Coast Luxury Residence"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Sector
                  </label>
                  <select
                    value={newSector}
                    onChange={(e) =>
                      setNewSector(e.target.value as Project["sector"])
                    }
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Renovation">Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sterling Holdings"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Austin, TX"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Budget ($ USD)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2,500,000"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Target Handover Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dec 2027"
                  value={newTarget}
                  onChange={(e) => setNewTarget(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold cursor-pointer"
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
