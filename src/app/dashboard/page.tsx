"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, UserCheck, HardHat, ArrowRight } from "lucide-react";

export default function DashboardPortalSelector() {
  const router = useRouter();

  // Optional: Auto redirect to Admin Dashboard on direct visit
  useEffect(() => {
    // If preferred, can redirect or stay on hub
  }, [router]);

  return (
    <div className="max-w-5xl mx-auto py-8">
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left">
        <span className="text-xs font-bold text-[#FFDB5A] uppercase tracking-wider bg-[#FFDB5A]/10 border border-[#FFDB5A]/20 px-3 py-1 rounded-full">
          Buildora Enterprise Suite
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 tracking-tight">
          Select Your Construction Portal
        </h1>
        <p className="text-gray-400 text-sm mt-1.5 max-w-xl">
          Choose your operational role to access dedicated project metrics, live engineering logs, and client progress trackers.
        </p>
      </div>

      {/* 3 Portal Cards matching User's Dropdown Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Admin Dashboard */}
        <Link
          href="/dashboard/admin"
          className="group relative p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FFDB5A]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#FFDB5A] text-[#12223B] flex items-center justify-center mb-5 shadow-lg shadow-[#FFDB5A]/20 transition-transform group-hover:scale-110">
              <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#FFDB5A] uppercase tracking-wider">
              Executive Authority
            </span>
            <h2 className="text-xl font-bold text-white mt-1 group-hover:text-[#FFDB5A] transition-colors">
              Admin Dashboard
            </h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Complete operational management: revenue analytics, project pipelines, site engineer assignments, and CMS inquiries.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FFDB5A]">
            <span>Enter Super Admin Portal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Client Dashboard */}
        <Link
          href="/dashboard/client"
          className="group relative p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00C975]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#00C975] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#00C975]/20 transition-transform group-hover:scale-110">
              <UserCheck className="w-8 h-8 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#00C975] uppercase tracking-wider">
              Property Client
            </span>
            <h2 className="text-xl font-bold text-white mt-1 group-hover:text-[#00C975] transition-colors">
              Client Dashboard
            </h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Track your property (Villa Horizon PRJ-901): live site camera feeds, milestone schedules, invoices, and direct engineer chat.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#00C975]">
            <span>Enter Client Portal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Engineer Portal */}
        <Link
          href="/dashboard/engineer"
          className="group relative p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#2563EB]/20 transition-transform group-hover:scale-110">
              <HardHat className="w-8 h-8 stroke-[2.2]" />
            </div>

            <span className="text-[11px] font-bold text-[#60A5FA] uppercase tracking-wider">
              Field Engineering
            </span>
            <h2 className="text-xl font-bold text-white mt-1 group-hover:text-[#60A5FA] transition-colors">
              Engineer Portal
            </h2>
            <p className="text-gray-400 text-xs mt-2 leading-relaxed">
              Field jobsite coordination: submit daily construction logs, requisition concrete and steel, run safety &amp; PPE audits, and view blueprints.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#60A5FA]">
            <span>Enter Engineer Portal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
