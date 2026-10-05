"use client";

import React, { useState } from "react";
import {
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Plus,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Briefcase,
  X,
  FileText,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  date: string;
  status: "New" | "Contacted" | "In Estimation" | "Converted" | "Declined";
  notes: string;
  timeline: string;
}

export default function LeadsManagementPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "LD-1048",
      name: "Jonathan Ward",
      email: "j.ward@horizonholdings.com",
      phone: "+1 (555) 234-8901",
      service: "Commercial Construction",
      budget: "$1,200,000",
      date: "Today, 10:45 AM",
      status: "New",
      notes: "Requires full LEED-certified office space expansion, 3 storeys.",
      timeline: "Q1 2027",
    },
    {
      id: "LD-1047",
      name: "Elena Rostova",
      email: "elena.rostova@gmail.com",
      phone: "+1 (555) 987-6543",
      service: "Luxury Villa Build",
      budget: "$650,000",
      date: "Today, 08:30 AM",
      status: "Contacted",
      notes: "Followed up via telephone. Client requested portfolio of modern glass villas.",
      timeline: "Q2 2027",
    },
    {
      id: "LD-1046",
      name: "Marcus Sterling",
      email: "msterling@sterlinglogistics.io",
      phone: "+1 (555) 345-6789",
      service: "Industrial Warehouse",
      budget: "$2,400,000",
      date: "Yesterday",
      status: "In Estimation",
      notes: "BIM team estimating 45,000 sq ft high-bay automated warehouse.",
      timeline: "Q4 2026",
    },
    {
      id: "LD-1045",
      name: "Sarah Jenkins",
      email: "sarah@centrixremedy.org",
      phone: "+1 (555) 456-7890",
      service: "Building Renovation",
      budget: "$580,000",
      date: "Oct 02, 2026",
      status: "Converted",
      notes: "Contract signed, deposit cleared, allocated to Civil Engineering unit.",
      timeline: "Immediate",
    },
    {
      id: "LD-1044",
      name: "David Chen",
      email: "dchen@apexdev.com",
      phone: "+1 (555) 567-8901",
      service: "Residential Remodeling",
      budget: "$190,000",
      date: "Oct 01, 2026",
      status: "Contacted",
      notes: "Preliminary architectural blueprints reviewed with client.",
      timeline: "Nov 2026",
    },
  ]);

  // Form state for Add Lead
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadPhone, setNewLeadPhone] = useState("");
  const [newLeadService, setNewLeadService] = useState("Commercial Construction");
  const [newLeadBudget, setNewLeadBudget] = useState("");
  const [newLeadNotes, setNewLeadNotes] = useState("");

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadEmail) return;

    const newEntry: Lead = {
      id: `LD-${1049 + leads.length}`,
      name: newLeadName,
      email: newLeadEmail,
      phone: newLeadPhone || "+1 (555) 000-0000",
      service: newLeadService,
      budget: newLeadBudget ? `$${newLeadBudget}` : "$500,000",
      date: "Just now",
      status: "New",
      notes: newLeadNotes || "Direct offline lead recorded by admin.",
      timeline: "Q1 2027",
    };

    setLeads([newEntry, ...leads]);
    setIsAddModalOpen(false);
    setNewLeadName("");
    setNewLeadEmail("");
    setNewLeadPhone("");
    setNewLeadBudget("");
    setNewLeadNotes("");
  };

  const handleStatusChange = (leadId: string, nextStatus: Lead["status"]) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: nextStatus } : l))
    );
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesFilter = filter === "All" || lead.status === filter;
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.service.toLowerCase().includes(search.toLowerCase()) ||
      lead.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalCount = leads.length;
  const newCount = leads.filter((l) => l.status === "New").length;
  const inEstimationCount = leads.filter((l) => l.status === "In Estimation").length;
  const convertedCount = leads.filter((l) => l.status === "Converted").length;

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards matching Builtex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Total Inquiries
            </span>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            {totalCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            From web forms & direct calls
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              New Action Required
            </span>
            <AlertCircle className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 mt-2">
            {newCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Awaiting initial phone reach-out
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              In Estimation Stage
            </span>
            <Clock className="w-5 h-5 text-purple-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-purple-600 mt-2">
            {inEstimationCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            BIM proposal in progress
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Closed & Converted
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-2">
            {convertedCount}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Contract signed & commissioned
          </p>
        </div>
      </div>

      {/* Control Bar: Search & Filter & Add Lead */}
      <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads, email, service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {["All", "New", "Contacted", "In Estimation", "Converted"].map(
              (st) => (
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
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Leads Cards / Table View */}
      <div className="space-y-4">
        {filteredLeads.map((lead) => {
          const statusColors = {
            New: "bg-[#FFDB5A] text-[#12223B]",
            Contacted: "bg-blue-100 text-blue-800",
            "In Estimation": "bg-purple-100 text-purple-800",
            Converted: "bg-emerald-100 text-emerald-800",
            Declined: "bg-gray-100 text-gray-700",
          }[lead.status];

          return (
            <div
              key={lead.id}
              className="bg-white rounded-xl border border-gray-200/80 p-5 sm:p-6 shadow-xs hover:border-[#12223B]/30 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {lead.id}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-[#12223B]">
                    {lead.name}
                  </h4>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors}`}
                  >
                    {lead.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-500">
                  Inquiry date:{" "}
                  <strong className="text-gray-700 font-semibold">{lead.date}</strong>{" "}
                  • Target: {lead.timeline}
                </p>

                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {lead.notes}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 pt-1">
                  <span className="flex items-center gap-1 font-semibold text-[#12223B]">
                    <Briefcase className="w-4 h-4 text-amber-500" />
                    {lead.service}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-semibold text-emerald-700">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Est. Budget: {lead.budget}
                  </span>
                  <span>•</span>
                  <a
                    href={`tel:${lead.phone}`}
                    className="flex items-center gap-1 text-gray-600 hover:text-[#12223B]"
                  >
                    <Phone className="w-3.5 h-3.5 text-gray-400" />
                    {lead.phone}
                  </a>
                  <span>•</span>
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-1 text-gray-600 hover:text-[#12223B]"
                  >
                    <Mail className="w-3.5 h-3.5 text-gray-400" />
                    {lead.email}
                  </a>
                </div>
              </div>

              {/* Status Selector & Direct Action */}
              <div className="flex flex-wrap items-center gap-3 lg:self-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium">Status:</span>
                  <select
                    value={lead.status}
                    onChange={(e) =>
                      handleStatusChange(lead.id, e.target.value as Lead["status"])
                    }
                    className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold bg-gray-50 text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] cursor-pointer"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Estimation">In Estimation</option>
                    <option value="Converted">Converted</option>
                    <option value="Declined">Declined</option>
                  </select>
                </div>

                <a
                  href={`tel:${lead.phone}`}
                  className="px-3.5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFDB5A]" />
                  <span>Call</span>
                </a>

                <a
                  href={`mailto:${lead.email}`}
                  className="px-3.5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-500" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#12223B]">Record New Client Lead</h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Client / Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Corp"
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@company.com"
                    value={newLeadEmail}
                    onChange={(e) => setNewLeadEmail(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Service Type
                  </label>
                  <select
                    value={newLeadService}
                    onChange={(e) => setNewLeadService(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  >
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Luxury Villa Build">Luxury Villa Build</option>
                    <option value="Industrial Warehouse">Industrial Warehouse</option>
                    <option value="Building Renovation">Building Renovation</option>
                    <option value="Residential Remodeling">Residential Remodeling</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Est. Budget ($ USD)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1,500,000"
                    value={newLeadBudget}
                    onChange={(e) => setNewLeadBudget(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Project Notes & Consultation Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Record scope of work, timeline, site address..."
                  value={newLeadNotes}
                  onChange={(e) => setNewLeadNotes(e.target.value)}
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
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
