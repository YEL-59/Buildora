"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DollarSign,
  Building2,
  Users,
  HardHat,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  PlusCircle,
  UserPlus,
  Receipt,
  FileCheck2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  X,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  date: string;
  status: "New" | "Contacted" | "In Estimation" | "Converted";
  notes?: string;
}

export default function AdminDashboardPage() {
  const [leadFilter, setLeadFilter] = useState<string>("All");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const [leadsList, setLeadsList] = useState<Lead[]>([
    {
      id: "LD-1048",
      name: "Jonathan Ward",
      email: "j.ward@horizonholdings.com",
      phone: "+1 (555) 234-8901",
      service: "Commercial Construction",
      budget: "$1,200,000",
      date: "Today, 10:45 AM",
      status: "New",
      notes: "Inquiring about 3-story office building retrofit with LEED Gold standards.",
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
      notes: "Followed up via phone. Sent preliminary architectural portfolio.",
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
      notes: "BIM team preparing structural steel and earthwork cost breakdown.",
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
      notes: "Contract signed, deposit received, transferred to engineering team.",
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
      notes: "Initial consultation completed. Awaiting client's municipal permits.",
    },
  ]);

  const filteredLeads =
    leadFilter === "All"
      ? leadsList
      : leadsList.filter((lead) => lead.status === leadFilter);

  // Export to CSV function
  const handleExportCSV = () => {
    const headers = ["Lead ID,Client Name,Email,Phone,Service Type,Est Budget,Date,Status"];
    const rows = leadsList.map(
      (l) =>
        `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.service}","${l.budget}","${l.date}","${l.status}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `buildora-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const updateLeadStatus = (newStatus: Lead["status"]) => {
    if (!selectedLead) return;
    setLeadsList((prev) =>
      prev.map((l) => (l.id === selectedLead.id ? { ...l, status: newStatus } : l))
    );
    setSelectedLead({ ...selectedLead, status: newStatus });
  };

  return (
    <div className="space-y-8">
      {/* 4 Top KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* Stat 1: Total Revenue (YTD) */}
        <div className="relative bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Total Revenue (YTD)
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] group-hover:bg-[#12223B] group-hover:text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-2xl sm:text-3xl font-semibold text-[#12223B]">
                $
              </span>
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                4.85
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-0.5">
                M
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full transition-colors duration-300 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900">
                <TrendingUp className="w-3 h-3" />
                +18.4%
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                vs target
              </span>
            </div>
          </div>
        </div>

        {/* Stat 2: Active Construction Sites */}
        <div className="relative bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Active Construction Sites
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] group-hover:bg-[#12223B] group-hover:text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                24
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-0.5">
                Sites
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full transition-colors duration-300 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900">
                <TrendingUp className="w-3 h-3" />
                +4 this month
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                on target
              </span>
            </div>
          </div>
        </div>

        {/* Stat 3: New Estimate Inquiries */}
        <div className="relative bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                New Estimate Inquiries
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] group-hover:bg-[#12223B] group-hover:text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                142
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-0.5">
                Leads
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full transition-colors duration-300 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900">
                <TrendingUp className="w-3 h-3" />
                +28% on month
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                on target
              </span>
            </div>
          </div>
        </div>

        {/* Stat 4: On-Duty Site Engineers */}
        <div className="relative bg-white rounded-xl p-5 sm:p-6 border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                On-Duty Site Engineers
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#FFDB5A] group-hover:bg-[#12223B] group-hover:text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <HardHat className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                38
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-0.5">
                Staff
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full transition-colors duration-300 bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100/90 group-hover:text-emerald-900">
                <CheckCircle2 className="w-3 h-3" />
                100% active
              </span>
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                on target
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Quick Operations Widget */}
      <div className="p-6 rounded-2xl bg-[#12223B] border border-white/10 shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFDB5A] text-[#12223B] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Admin Quick Operations
              </h3>
              <p className="text-xs text-gray-400">
                Shortcuts for high-frequency management workflows
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Action 1: New Client Lead */}
          <Link
            href="/dashboard/admin/leads"
            className="p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFDB5A] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FFDB5A]/20 text-[#FFDB5A] group-hover:bg-[#FFDB5A] group-hover:text-[#12223B] flex items-center justify-center transition-colors">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase px-2.5 py-0.5 rounded-full bg-white/10">
                  Fast Entry
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFDB5A] transition-colors mb-1.5 leading-snug">
                New Client Lead
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Record offline inquiry or telephone consultation
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#FFDB5A]">
              <span>Launch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Action 2: Assign Site Engineer */}
          <Link
            href="/dashboard/admin/engineers"
            className="p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFDB5A] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FFDB5A]/20 text-[#FFDB5A] group-hover:bg-[#FFDB5A] group-hover:text-[#12223B] flex items-center justify-center transition-colors">
                  <UserPlus className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase px-2.5 py-0.5 rounded-full bg-white/10">
                  Staffing
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFDB5A] transition-colors mb-1.5 leading-snug">
                Assign Site Engineer
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Deploy supervisor to active construction zone
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#FFDB5A]">
              <span>Launch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Action 3: Issue Milestone Invoice */}
          <Link
            href="/dashboard/admin/billing"
            className="p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFDB5A] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FFDB5A]/20 text-[#FFDB5A] group-hover:bg-[#FFDB5A] group-hover:text-[#12223B] flex items-center justify-center transition-colors">
                  <Receipt className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase px-2.5 py-0.5 rounded-full bg-white/10">
                  Finance
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFDB5A] transition-colors mb-1.5 leading-snug">
                Issue Milestone Invoice
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Generate 20%-25% progress billing PDF
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#FFDB5A]">
              <span>Launch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Action 4: Publish Case Study */}
          <Link
            href="/dashboard/admin/content"
            className="p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFDB5A] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FFDB5A]/20 text-[#FFDB5A] group-hover:bg-[#FFDB5A] group-hover:text-[#12223B] flex items-center justify-center transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-300 uppercase px-2.5 py-0.5 rounded-full bg-white/10">
                  CMS
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#FFDB5A] transition-colors mb-1.5 leading-snug">
                Publish Case Study
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Upload completed project photos to /projects
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#FFDB5A]">
              <span>Launch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Estimate Requests & Leads Table */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
        <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#12223B]">
              Recent Estimate Requests & Leads
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b]">
              Inquiries submitted through the website quotation forms
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {["All", "New", "Contacted", "In Estimation", "Converted"].map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setLeadFilter(status)}
                  className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    leadFilter === status
                      ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                      : "bg-[#F6F6F6] text-[#28374D] hover:text-[#12223B]"
                  }`}
                >
                  {status}
                </button>
              )
            )}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F6F6] text-xs sm:text-sm font-semibold text-[#12223B] uppercase tracking-wider border-b border-gray-200">
                <th className="py-4 px-5 sm:px-6">Lead ID & Client</th>
                <th className="py-4 px-4">Service Type</th>
                <th className="py-4 px-4">Est. Budget</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-5 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
              {filteredLeads.map((lead) => {
                const statusStyles = {
                  New: "bg-[#FFDB5A] text-[#12223B]",
                  Contacted: "bg-blue-100 text-blue-800",
                  "In Estimation": "bg-purple-100 text-purple-800",
                  Converted: "bg-emerald-100 text-emerald-800",
                }[lead.status];

                return (
                  <tr
                    key={lead.id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="py-4.5 px-5 sm:px-6">
                      <div>
                        <span className="text-xs sm:text-sm font-mono font-semibold text-gray-500 block mb-0.5">
                          {lead.id}
                        </span>
                        <span className="font-semibold text-[#12223B] block text-base sm:text-lg">
                          {lead.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 font-normal">
                          {lead.email}
                        </span>
                      </div>
                    </td>
                    <td className="py-4.5 px-4 text-[#28374D] font-medium text-sm sm:text-base">
                      {lead.service}
                    </td>
                    <td className="py-4.5 px-4 font-semibold text-[#12223B] text-sm sm:text-base">
                      {lead.budget}
                    </td>
                    <td className="py-4.5 px-4 text-gray-500 text-xs sm:text-sm">
                      {lead.date}
                    </td>
                    <td className="py-4.5 px-4">
                      <span
                        className={`text-xs sm:text-xs font-semibold px-3 py-1 rounded-full ${statusStyles}`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4.5 px-5 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`tel:${lead.phone}`}
                          title={`Call ${lead.name}`}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-[#FFDB5A] text-gray-600 hover:text-[#12223B] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          title={`Email ${lead.name}`}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-[#FFDB5A] text-gray-600 hover:text-[#12223B] transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setSelectedLead(lead)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                        >
                          Manage
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer info & CSV Export */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm text-gray-500">
          <span>
            Showing {filteredLeads.length} of {leadsList.length} total leads
          </span>
          <button
            type="button"
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 font-semibold text-[#12223B] hover:text-amber-600 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export to CSV</span>
          </button>
        </div>
      </div>

      {/* Active Construction Sites (2x2 Grid) */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
        <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#12223B]">
              Active Construction Sites
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b]">
              Real-time milestone completion and assigned site managers
            </p>
          </div>
          <Link
            href="/dashboard/admin/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#12223B] hover:text-[#FFDB5A] transition-colors"
          >
            <span>View All 24 Sites</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Site 1: Modern Family Villa */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#F6F6F6] border border-gray-200/70 hover:border-[#12223B]/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#12223B] bg-[#FFDB5A] px-3 py-1 rounded-md">
                  Residential
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Ahead of Schedule
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] group-hover:text-[#1c3254] transition-colors mb-1.5">
                Modern Family Villa
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4.5 h-4.5 text-gray-400 flex-shrink-0" />
                <span>Central Valley, CA</span>
                <span>•</span>
                <span>Client: The Johnson Family</span>
              </p>
              <div className="space-y-2.5 mb-5 bg-white p-4 sm:p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                  <span className="text-[#12223B]">Phase 4: Interior Finishing</span>
                  <span className="text-[#12223B] font-mono text-base sm:text-lg">
                    78%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-[#12223B] rounded-full transition-all duration-1000"
                    style={{ width: "78%" }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2 font-medium text-[#12223B]">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src="/images/author-2.jpg"
                    alt="Sophia Bennett"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Sophia Bennett</span>
              </div>
              <div className="text-right text-xs sm:text-sm">
                <span className="text-gray-500 font-normal">Budget: </span>
                <strong className="font-semibold text-[#12223B]">$850,000</strong>
                <span className="mx-1 text-gray-300">|</span>
                <span className="text-gray-500 font-normal">Due: </span>
                <span className="font-medium text-[#12223B]">Nov 2026</span>
              </div>
            </div>
          </div>

          {/* Site 2: Metro Business Center */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#F6F6F6] border border-gray-200/70 hover:border-[#12223B]/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#12223B] bg-[#FFDB5A] px-3 py-1 rounded-md">
                  Commercial
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  On Schedule
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] group-hover:text-[#1c3254] transition-colors mb-1.5">
                Metro Business Center
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4.5 h-4.5 text-gray-400 flex-shrink-0" />
                <span>Downtown Chicago, IL</span>
                <span>•</span>
                <span>Client: Vanguard Properties</span>
              </p>
              <div className="space-y-2.5 mb-5 bg-white p-4 sm:p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                  <span className="text-[#12223B]">Phase 3: Structural Framing</span>
                  <span className="text-[#12223B] font-mono text-base sm:text-lg">
                    44%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-[#12223B] rounded-full transition-all duration-1000"
                    style={{ width: "44%" }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2 font-medium text-[#12223B]">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src="/images/author-1.jpg"
                    alt="Alexander Thomas"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Alexander Thomas</span>
              </div>
              <div className="text-right text-xs sm:text-sm">
                <span className="text-gray-500 font-normal">Budget: </span>
                <strong className="font-semibold text-[#12223B]">$4,500,000</strong>
                <span className="mx-1 text-gray-300">|</span>
                <span className="text-gray-500 font-normal">Due: </span>
                <span className="font-medium text-[#12223B]">Mar 2027</span>
              </div>
            </div>
          </div>

          {/* Site 3: Apex Logistics Hub */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#F6F6F6] border border-gray-200/70 hover:border-[#12223B]/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#12223B] bg-[#FFDB5A] px-3 py-1 rounded-md">
                  Industrial
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Ahead of Schedule
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] group-hover:text-[#1c3254] transition-colors mb-1.5">
                Apex Logistics Hub
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4.5 h-4.5 text-gray-400 flex-shrink-0" />
                <span>Detroit, MI</span>
                <span>•</span>
                <span>Client: Apex Manufacturing Ltd</span>
              </p>
              <div className="space-y-2.5 mb-5 bg-white p-4 sm:p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                  <span className="text-[#12223B]">Phase 5: Quality Inspection</span>
                  <span className="text-[#12223B] font-mono text-base sm:text-lg">
                    92%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-[#12223B] rounded-full transition-all duration-1000"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2 font-medium text-[#12223B]">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src="/images/author-3.jpg"
                    alt="Emily Roberts"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Emily Roberts</span>
              </div>
              <div className="text-right text-xs sm:text-sm">
                <span className="text-gray-500 font-normal">Budget: </span>
                <strong className="font-semibold text-[#12223B]">$3,100,000</strong>
                <span className="mx-1 text-gray-300">|</span>
                <span className="text-gray-500 font-normal">Due: </span>
                <span className="font-medium text-[#12223B]">Oct 2026</span>
              </div>
            </div>
          </div>

          {/* Site 4: Heritage Building Restoration */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#F6F6F6] border border-gray-200/70 hover:border-[#12223B]/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#12223B] bg-[#FFDB5A] px-3 py-1 rounded-md">
                  Renovation
                </span>
                <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                  Requires Attention
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] group-hover:text-[#1c3254] transition-colors mb-1.5">
                Heritage Building Restoration
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4.5 h-4.5 text-gray-400 flex-shrink-0" />
                <span>Manhattan, NY</span>
                <span>•</span>
                <span>Client: Skyline Heritage Group</span>
              </p>
              <div className="space-y-2.5 mb-5 bg-white p-4 sm:p-5 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                  <span className="text-[#12223B]">Phase 2: Substructure Retrofit</span>
                  <span className="text-[#12223B] font-mono text-base sm:text-lg">
                    49%
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: "49%" }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-sm sm:text-base text-gray-600">
              <div className="flex items-center gap-2 font-medium text-[#12223B]">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src="/images/author-4.jpg"
                    alt="Michael Anderson"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold">Michael Anderson</span>
              </div>
              <div className="text-right text-xs sm:text-sm">
                <span className="text-gray-500 font-normal">Budget: </span>
                <strong className="font-semibold text-[#12223B]">$1,740,000</strong>
                <span className="mx-1 text-gray-300">|</span>
                <span className="text-gray-500 font-normal">Due: </span>
                <span className="font-medium text-[#12223B]">Jun 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Management Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  {selectedLead.id}
                </span>
                <h3 className="text-xl font-bold text-[#12223B]">
                  {selectedLead.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-[#12223B] hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50 rounded-xl">
                <div>
                  <span className="text-xs text-gray-400 block">Service</span>
                  <span className="font-semibold text-[#12223B]">
                    {selectedLead.service}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Est. Budget</span>
                  <span className="font-semibold text-emerald-700">
                    {selectedLead.budget}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Phone</span>
                  <a
                    href={`tel:${selectedLead.phone}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {selectedLead.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Email</span>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="font-medium text-blue-600 hover:underline truncate block"
                  >
                    {selectedLead.email}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  Inquiry Notes & Scope
                </span>
                <p className="p-3 bg-gray-50 rounded-xl text-gray-700 leading-relaxed text-xs sm:text-sm">
                  {selectedLead.notes || "Client requested standard consultation."}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                  Update Lead Status
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["New", "Contacted", "In Estimation", "Converted"] as const).map(
                    (st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => updateLeadStatus(st)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                          selectedLead.status === st
                            ? "bg-[#12223B] text-[#FFDB5A] shadow-xs"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {st}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/dashboard/admin/projects"
                className="px-4 py-2 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                Convert to Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
