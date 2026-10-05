"use client";

import React from "react";
import Link from "next/link";
import { FileText, Plus, Eye, Edit3 } from "lucide-react";

export default function AdminContentPage() {
  const contentItems = [
    { title: "Smart Building Tips for Better Project Planning", type: "Blog Post", category: "Construction Guide", date: "Oct 04, 2026", status: "Published" },
    { title: "Expert Insights & Latest Trends in Construction", type: "Blog Post", category: "Industry News", date: "Oct 01, 2026", status: "Published" },
    { title: "Residential Construction Full Service Specification", type: "Service Page", category: "Core Services", date: "Sep 28, 2026", status: "Published" },
    { title: "Commercial Construction Architecture & Engineering", type: "Service Page", category: "Core Services", date: "Sep 25, 2026", status: "Published" },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/admin" className="hover:text-white">Admin</Link>
            <span>/</span>
            <span className="text-[#FFDB5A] font-semibold">Content &amp; CMS</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            Buildora Website CMS Management
          </h1>
        </div>

        <button className="px-4 py-2 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-md flex items-center gap-1.5 self-start">
          <Plus className="w-4 h-4" />
          <span>New Blog / Article</span>
        </button>
      </div>

      <div className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-white/10 font-bold text-sm text-white">
          Active Website Articles &amp; Service Pages
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-gray-400 uppercase text-[10px] tracking-wider">
              <tr>
                <th className="p-4">Title</th>
                <th className="p-4">Content Type</th>
                <th className="p-4">Category</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contentItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="p-4 font-bold text-white">{item.title}</td>
                  <td className="p-4 text-gray-300">{item.type}</td>
                  <td className="p-4 text-gray-400">{item.category}</td>
                  <td className="p-4 text-gray-400">{item.date}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1.5 text-gray-400 hover:text-white mr-2">
                      <Edit3 className="w-4 h-4" />
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
