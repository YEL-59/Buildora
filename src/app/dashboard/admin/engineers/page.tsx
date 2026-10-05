"use client";

import React from "react";
import Link from "next/link";
import { HardHat, Phone, Mail, MapPin, CheckCircle2, Shield } from "lucide-react";

export default function AdminEngineersPage() {
  const engineers = [
    {
      name: "Alex Rivera, PE",
      title: "Senior Structural Engineer",
      license: "PE #48910",
      site: "Villa Horizon (PRJ-901)",
      status: "On Jobsite",
      safetyScore: "99.2%",
      phone: "+1 (213) 465-7890",
      email: "a.rivera@buildora.com",
    },
    {
      name: "Sarah Jenkins, SE",
      title: "Lead High-Rise Specialist",
      license: "SE #32019",
      site: "Metro Tower B (PRJ-904)",
      status: "Crane Lift Ops",
      safetyScore: "98.8%",
      phone: "+1 (213) 551-8840",
      email: "s.jenkins@buildora.com",
    },
    {
      name: "Marcus Brody, PE",
      title: "Geotechnical & Civil Lead",
      license: "PE #61044",
      site: "Pacific Eco-Residence (PRJ-882)",
      status: "On Jobsite",
      safetyScore: "100%",
      phone: "+1 (310) 902-1200",
      email: "m.brody@buildora.com",
    },
    {
      name: "Tariq Mansoor, PE",
      title: "Commercial MEP Coordinator",
      license: "PE #57201",
      site: "Summit Ridge (PRJ-915)",
      status: "Permit Hearing",
      safetyScore: "97.5%",
      phone: "+1 (512) 349-8800",
      email: "t.mansoor@buildora.com",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/admin" className="hover:text-white">Admin</Link>
          <span>/</span>
          <span className="text-[#FFDB5A] font-semibold">Site Engineers</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          Licensed Site Engineering Personnel
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineers.map((eng, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FFDB5A] text-[#12223B] flex items-center justify-center font-bold text-lg">
                  <HardHat className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{eng.name}</h3>
                  <p className="text-xs text-gray-400">{eng.title} • {eng.license}</p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
                {eng.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/5 text-xs">
              <div>
                <span className="text-gray-400 block text-[11px]">Assigned Site</span>
                <span className="text-white font-semibold">{eng.site}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[11px]">Safety Audit Score</span>
                <span className="text-[#FFDB5A] font-bold">{eng.safetyScore}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <a href={`tel:${eng.phone}`} className="hover:text-white flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FFDB5A]" />
                <span>{eng.phone}</span>
              </a>
              <a href={`mailto:${eng.email}`} className="hover:text-white flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{eng.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
