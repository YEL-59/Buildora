"use client";

import React from "react";
import Link from "next/link";
import { Users, Phone, Mail, ArrowUpRight, Search, Filter } from "lucide-react";

export default function AdminLeadsPage() {
  const leads = [
    {
      id: "LD-301",
      name: "Dr. Jonathan Hayes",
      email: "j.hayes@beverlyhealth.com",
      phone: "+1 (310) 849-2104",
      project: "Custom Smart Villa (4,500 sq ft)",
      budget: "$950K - $1.2M",
      location: "Bel Air, CA",
      date: "2 hours ago",
      status: "New RFP",
    },
    {
      id: "LD-302",
      name: "Aura Retail Ventures (Ms. Clara Wu)",
      email: "c.wu@auragroup.io",
      phone: "+1 (213) 440-1928",
      project: "Commercial Showroom Renovation",
      budget: "$420K - $600K",
      location: "Downtown Los Angeles",
      date: "5 hours ago",
      status: "Awaiting Call",
    },
    {
      id: "LD-303",
      name: "Pacific Crest Holdings",
      email: "dev@pacificcrest.org",
      phone: "+1 (415) 880-3490",
      project: "Industrial Distribution Warehouse (18,000 sq ft)",
      budget: "$2.5M+",
      location: "Long Beach Harbor",
      date: "Yesterday",
      status: "Architect Review",
    },
    {
      id: "LD-304",
      name: "Marcus & Olivia Sterling",
      email: "sterling.estates@icloud.com",
      phone: "+1 (949) 321-7711",
      project: "Hillside Modern Residence & Infinity Pool",
      budget: "$1.8M",
      location: "Newport Beach, CA",
      date: "Oct 03, 2026",
      status: "Quote Sent",
    },
    {
      id: "LD-305",
      name: "Kensington Hospitality Group",
      email: "projects@kensingtonhotels.com",
      phone: "+1 (702) 412-9900",
      project: "Boutique Hotel Lobby & Rooftop Bar Fitout",
      budget: "$1.4M",
      location: "Santa Monica, CA",
      date: "Oct 02, 2026",
      status: "Negotiation",
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
            <span className="text-[#FFDB5A] font-semibold">Leads &amp; Inquiries</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Incoming Construction Leads
          </h1>
        </div>

        <span className="text-xs font-bold text-[#FFDB5A] bg-[#FFDB5A]/15 border border-[#FFDB5A]/30 px-3 py-1.5 rounded-xl self-start">
          5 New Inquiries This Week
        </span>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-gray-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Lead ID &amp; Client</th>
                <th className="p-4">Project Scope</th>
                <th className="p-4">Est. Budget</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    <span className="font-mono text-[#FFDB5A] font-bold block">{lead.id}</span>
                    <span className="text-white font-bold">{lead.name}</span>
                    <span className="text-gray-400 block text-[11px]">{lead.email}</span>
                  </td>
                  <td className="p-4 font-medium text-gray-300">{lead.project}</td>
                  <td className="p-4 font-bold text-white">{lead.budget}</td>
                  <td className="p-4 text-gray-400">{lead.location}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-bold hover:bg-white transition-colors cursor-pointer">
                      Review RFP
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
