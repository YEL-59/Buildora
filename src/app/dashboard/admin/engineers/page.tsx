"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HardHat,
  CheckCircle2,
  ShieldCheck,
  Award,
  Search,
  Plus,
  Phone,
  Mail,
  Building2,
  MapPin,
  X,
  BadgeCheck,
} from "lucide-react";

interface Engineer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  status: "On Site" | "Off Duty" | "On Leave";
  site: string;
  location: string;
  safetyScore: number;
  tags: string[];
  phone: string;
  email: string;
}

export default function AdminEngineersPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [engineers, setEngineers] = useState<Engineer[]>([
    {
      id: "ENG-01",
      name: "Sophia Bennett",
      avatar: "/images/author-2.jpg",
      title: "Lead Structural Engineer",
      status: "On Site",
      site: "Modern Family Villa",
      location: "Central Valley, CA",
      safetyScore: 99,
      tags: ["PE Structural", "OSHA 30", "LEED AP"],
      phone: "+1 (555) 432-1098",
      email: "sophia.b@buildora.com",
    },
    {
      id: "ENG-02",
      name: "Alexander Thomas",
      avatar: "/images/author-1.jpg",
      title: "Senior Civil Engineer",
      status: "On Site",
      site: "Metro Business Center",
      location: "Downtown Chicago, IL",
      safetyScore: 97,
      tags: ["PE Civil", "OSHA 30", "PMP"],
      phone: "+1 (555) 876-5432",
      email: "alex.t@buildora.com",
    },
    {
      id: "ENG-03",
      name: "Emily Roberts",
      avatar: "/images/author-3.jpg",
      title: "Site Operations Supervisor",
      status: "On Site",
      site: "Apex Logistics Hub",
      location: "Detroit, MI",
      safetyScore: 100,
      tags: ["CSST Safety", "OSHA 30"],
      phone: "+1 (555) 765-4321",
      email: "emily.r@buildora.com",
    },
    {
      id: "ENG-04",
      name: "Michael Anderson",
      avatar: "/images/author-4.jpg",
      title: "Principal Project Director",
      status: "Off Duty",
      site: "Heritage Building Restoration",
      location: "Manhattan, NY",
      safetyScore: 98,
      tags: ["AIA", "PE Structural", "LEED Fellow"],
      phone: "+1 (555) 321-7654",
      email: "michael.a@buildora.com",
    },
  ]);

  // Cycle status on click
  const cycleStatus = (id: string) => {
    setEngineers((prev) =>
      prev.map((eng) => {
        if (eng.id !== id) return eng;
        const next: Engineer["status"] =
          eng.status === "On Site"
            ? "Off Duty"
            : eng.status === "Off Duty"
            ? "On Leave"
            : "On Site";
        return { ...eng, status: next };
      })
    );
  };

  // Add staff state
  const [newName, setNewName] = useState("");
  const [newTitle, setNewTitle] = useState("Field Structural Engineer");
  const [newSite, setNewSite] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;

    const newStaff: Engineer = {
      id: `ENG-0${engineers.length + 1}`,
      name: newName,
      avatar: "/images/author-1.jpg",
      title: newTitle,
      status: "On Site",
      site: newSite || "Unassigned Site",
      location: newLocation || "Austin, TX",
      safetyScore: 100,
      tags: ["OSHA 30", "PE Qualified"],
      phone: newPhone || "+1 (555) 000-0000",
      email: newEmail || "staff@buildora.com",
    };

    setEngineers([...engineers, newStaff]);
    setIsAddModalOpen(false);
    setNewName("");
    setNewSite("");
    setNewLocation("");
    setNewEmail("");
    setNewPhone("");
  };

  const filteredEngineers = engineers.filter((eng) => {
    const matchesFilter = filter === "All" || eng.status === filter;
    const matchesSearch =
      eng.name.toLowerCase().includes(search.toLowerCase()) ||
      eng.site.toLowerCase().includes(search.toLowerCase()) ||
      eng.title.toLowerCase().includes(search.toLowerCase()) ||
      eng.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const onSiteCount = engineers.filter((e) => e.status === "On Site").length;
  const offDutyCount = engineers.filter((e) => e.status === "Off Duty").length;

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards matching Builtex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Total Engineers
            </span>
            <HardHat className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            {engineers.length}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Licensed field staff</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Active On Site
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-2">
            {onSiteCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Currently on duty</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Off Duty / Standby
            </span>
            <ShieldCheck className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 mt-2">
            {offDutyCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Available for allocation</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Safety Compliance
            </span>
            <Award className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            98.2%
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Zero OSHA infractions</p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search engineer, project, certification..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {["All", "On Site", "Off Duty", "On Leave"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setFilter(st)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === st
                    ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                    : "text-gray-700 hover:text-[#12223B]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Staff</span>
          </button>
        </div>
      </div>

      {/* Engineers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEngineers.map((eng) => {
          const statusColors = {
            "On Site": "bg-emerald-100 text-emerald-800 border-emerald-200",
            "Off Duty": "bg-amber-100 text-amber-800 border-amber-200",
            "On Leave": "bg-gray-100 text-gray-700 border-gray-200",
          }[eng.status];

          return (
            <div
              key={eng.id}
              className="bg-white rounded-xl border border-gray-200/80 hover:border-gray-300 transition-all p-6 flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FFDB5A]">
                  <Image
                    src={eng.avatar}
                    alt={eng.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-[#12223B] text-lg sm:text-xl truncate">
                      {eng.name}
                    </h4>
                    <button
                      type="button"
                      onClick={() => cycleStatus(eng.id)}
                      title="Click to cycle status"
                      className={`text-xs sm:text-[13px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${statusColors}`}
                    >
                      {eng.status}
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-amber-600 mt-0.5">
                    {eng.title}
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-gray-400 mt-0.5">
                    {eng.id}
                  </p>
                </div>
              </div>

              {/* Site Assignment & Safety Info */}
              <div className="bg-gray-50 p-4 rounded-xl space-y-2.5 text-xs sm:text-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-gray-400" /> Site:
                  </span>
                  <strong className="font-semibold text-[#12223B] text-sm sm:text-base">
                    {eng.site}
                  </strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" /> Location:
                  </span>
                  <span className="text-gray-700 font-medium">{eng.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> Safety Score:
                  </span>
                  <span className="font-semibold text-emerald-700 text-sm sm:text-base">
                    {eng.safetyScore}%
                  </span>
                </div>
              </div>

              {/* Certification Tags */}
              <div className="flex flex-wrap gap-2">
                {eng.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-[13px] font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact Actions */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <a
                  href={`tel:${eng.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#12223B] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#1c3254] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Call Staff</span>
                </a>
                <a
                  href={`mailto:${eng.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Staff Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#12223B]">Onboard Site Engineer</h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStaff} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Vance, PE"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Job Title / Engineering Role
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Assigned Site
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Metro Business Center"
                    value={newSite}
                    onChange={(e) => setNewSite(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chicago, IL"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    placeholder="staff@buildora.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
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
                  Confirm Staff Allocation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
