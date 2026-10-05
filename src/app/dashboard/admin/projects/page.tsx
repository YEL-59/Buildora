"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Building2, Plus, ArrowUpRight, Search, MapPin, Calendar, DollarSign } from "lucide-react";

export default function AdminProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "PRJ-901",
      name: "Villa Horizon Luxury Estate",
      location: "Beverly Hills, CA",
      type: "Residential Villa",
      budget: "$1,250,000",
      spent: "$975,000",
      progress: 78,
      status: "In Progress",
      engineer: "Alex Rivera, PE",
      completion: "Nov 2026",
    },
    {
      id: "PRJ-904",
      name: "Metro Tower B Commercial Core",
      location: "Downtown Los Angeles, CA",
      type: "Commercial Skyscraper",
      budget: "$3,400,000",
      spent: "$1,428,000",
      progress: 42,
      status: "Structural Framing",
      engineer: "Sarah Jenkins, SE",
      completion: "Mar 2027",
    },
    {
      id: "PRJ-882",
      name: "Pacific Modern Eco-Residence",
      location: "Malibu Coast, CA",
      type: "Eco Architecture",
      budget: "$890,000",
      spent: "$836,600",
      progress: 94,
      status: "Finishing Touches",
      engineer: "Marcus Brody, PE",
      completion: "Oct 2026",
    },
    {
      id: "PRJ-915",
      name: "Summit Ridge Business Complex",
      location: "Austin, TX",
      type: "Commercial Office Park",
      budget: "$2,100,000",
      spent: "$525,000",
      progress: 25,
      status: "Foundation Pours",
      engineer: "Tariq Mansoor, PE",
      completion: "Jun 2027",
    },
    {
      id: "PRJ-870",
      name: "Grand Horizon Penthouse Remodel",
      location: "Century City, CA",
      type: "Interior Architecture",
      budget: "$640,000",
      spent: "$384,000",
      progress: 60,
      status: "MEP & Fitout",
      engineer: "Elena Ramos, PE",
      completion: "Dec 2026",
    },
    {
      id: "PRJ-922",
      name: "Apex Logistics Automated Hub",
      location: "Ontario, CA",
      type: "Industrial Facility",
      budget: "$4,500,000",
      spent: "$900,000",
      progress: 20,
      status: "Earthworks & Grading",
      engineer: "David Cho, SE",
      completion: "Oct 2027",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/admin" className="hover:text-white">Admin</Link>
            <span>/</span>
            <span className="text-[#FFDB5A] font-semibold">Active Projects</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            24 Active Construction Projects
          </h1>
        </div>

        <button className="px-4 py-2 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-md flex items-center gap-1.5 self-start">
          <Plus className="w-4 h-4" />
          <span>Launch New Project</span>
        </button>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-[#FFDB5A] bg-[#FFDB5A]/10 px-2 py-0.5 rounded">
                  {p.id}
                </span>
                <span className="text-[11px] font-semibold text-gray-400">
                  {p.type}
                </span>
              </div>

              <h2 className="text-base font-bold text-white leading-tight">
                {p.name}
              </h2>

              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{p.location}</span>
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/5 text-xs">
                <div>
                  <span className="text-[11px] text-gray-400 block">Total Budget</span>
                  <span className="text-white font-bold">{p.budget}</span>
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block">Handover</span>
                  <span className="text-white font-bold">{p.completion}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1 font-semibold">
                  <span className="text-gray-400">{p.status}</span>
                  <span className="text-[#FFDB5A]">{p.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FFDB5A] to-amber-500"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-gray-400">Eng: <strong className="text-white">{p.engineer}</strong></span>
              <button className="text-[#FFDB5A] font-bold hover:underline flex items-center gap-1">
                <span>Site Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
