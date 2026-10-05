"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  HardHat,
  Filter,
  Eye,
  FileText,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [filterStatus, setFilterStatus] = useState("all");

  const stats = [
    {
      label: "Total Contract Value",
      value: "$4,850,000",
      change: "+14.8%",
      isPositive: true,
      icon: DollarSign,
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    },
    {
      label: "Active Projects",
      value: "24 Sites",
      change: "4 Nearing Handover",
      isPositive: true,
      icon: Building2,
      iconBg: "bg-[#FFDB5A]/10 text-[#FFDB5A] border border-[#FFDB5A]/20",
    },
    {
      label: "New Leads & RFP",
      value: "5 Inquiries",
      change: "3 Verified Today",
      isPositive: true,
      icon: Users,
      iconBg: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    },
    {
      label: "Safety & OSHA Rating",
      value: "98.4%",
      change: "Zero incidents (180d)",
      isPositive: true,
      icon: ShieldCheck,
      iconBg: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    },
  ];

  const projects = [
    {
      id: "PRJ-901",
      name: "Villa Horizon Luxury Estate",
      location: "Beverly Hills, CA",
      client: "Michael Vance",
      engineer: "Alex Rivera, PE",
      budget: "$1,250,000",
      progress: 78,
      status: "In Progress",
      deadline: "Nov 2026",
    },
    {
      id: "PRJ-904",
      name: "Metro Tower B Commercial Core",
      location: "Downtown Financial Dist.",
      client: "Starlight Corp",
      engineer: "Sarah Jenkins, SE",
      budget: "$3,400,000",
      progress: 42,
      status: "Structural Framing",
      deadline: "Mar 2027",
    },
    {
      id: "PRJ-882",
      name: "Pacific Modern Eco-Residence",
      location: "Malibu Coast, CA",
      client: "Elena Rostova",
      engineer: "Marcus Brody, PE",
      budget: "$890,000",
      progress: 94,
      status: "Final Handover",
      deadline: "Oct 2026",
    },
    {
      id: "PRJ-915",
      name: "Summit Ridge Business Complex",
      location: "Austin, TX",
      client: "Vertex Logistics",
      engineer: "Tariq Mansoor, PE",
      budget: "$2,100,000",
      progress: 25,
      status: "Foundation & Piles",
      deadline: "Jun 2027",
    },
  ];

  const leads = [
    {
      id: "LD-301",
      name: "Dr. Jonathan Hayes",
      type: "Custom Smart Villa (4,500 sq ft)",
      budget: "$950K - $1.2M",
      date: "2 hours ago",
      status: "New RFP",
    },
    {
      id: "LD-302",
      name: "Aura Retail Ventures",
      type: "Commercial Showroom Renovation",
      budget: "$420K - $600K",
      date: "5 hours ago",
      status: "Awaiting Call",
    },
    {
      id: "LD-303",
      name: "Pacific Crest Holdings",
      type: "Industrial Warehouse Expansion",
      budget: "$2.5M+",
      date: "Yesterday",
      status: "Architect Review",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Title & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-[#FFDB5A] font-semibold">Admin Overview</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Executive Admin Control Center
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/admin/projects"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Building2 className="w-4 h-4 text-[#FFDB5A]" />
            <span>Manage 24 Projects</span>
          </Link>

          <Link
            href="/dashboard/admin/leads"
            className="px-4 py-2 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            <span>5 New Leads</span>
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-gray-400">
                  {stat.label}
                </span>
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div>
                <div className="text-2xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects Table & Live Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Active Projects (8 Cols) */}
        <div className="lg:col-span-8 p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl">
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Active Projects Overview
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Monitoring ongoing sites, budgets, and engineering phases
              </p>
            </div>

            <Link
              href="/dashboard/admin/projects"
              className="text-xs font-bold text-[#FFDB5A] hover:underline flex items-center gap-1"
            >
              <span>View All 24</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-white/5 mt-2">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="py-4 hover:bg-white/[0.02] transition-colors rounded-xl px-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#FFDB5A] bg-[#FFDB5A]/10 px-2 py-0.5 rounded-md">
                        {proj.id}
                      </span>
                      <h3 className="text-sm font-bold text-white hover:text-[#FFDB5A] transition-colors">
                        {proj.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {proj.location} • Lead: <span className="text-gray-300 font-medium">{proj.engineer}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-white">{proj.budget}</span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">Due {proj.deadline}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-gray-400 font-medium">{proj.status}</span>
                    <span className="text-white font-bold">{proj.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FFDB5A] to-amber-500 transition-all duration-500"
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries & Quick Leads (4 Cols) */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>New Leads</span>
                  <span className="text-[10px] font-bold bg-[#FFDB5A] text-[#12223B] px-2 py-0.5 rounded-full">
                    5 New
                  </span>
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">Incoming building RFPs</p>
              </div>

              <Link
                href="/dashboard/admin/leads"
                className="text-xs font-bold text-[#FFDB5A] hover:underline"
              >
                View
              </Link>
            </div>

            <div className="space-y-4 pt-4">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{lead.name}</span>
                    <span className="text-[10px] text-gray-400">{lead.date}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 font-medium">{lead.type}</p>
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                    <span className="text-[11px] font-bold text-[#FFDB5A]">{lead.budget}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Operations Button */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <Link
              href="/dashboard/admin/revenue"
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#FFDB5A]" />
              <span>Generate Monthly Financial Report</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
