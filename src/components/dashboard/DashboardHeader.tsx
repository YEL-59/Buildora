"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  Plus,
  CheckCircle2,
  Clock,
  AlertTriangle,
  X,
  ExternalLink,
} from "lucide-react";
import CommandPalette from "./CommandPalette";

interface DashboardHeaderProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  setMobileOpen: (v: boolean) => void;
}

export default function DashboardHeader({
  collapsed,
  setCollapsed,
  setMobileOpen,
}: DashboardHeaderProps) {
  const pathname = usePathname();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Determine current page title and subtitle based on route
  const getPageInfo = () => {
    if (pathname.includes("/dashboard/admin/leads")) {
      return {
        title: "Leads & Inquiries Management",
        subtitle:
          "Track client quote submissions, assign follow-ups, and convert leads into active projects.",
      };
    }
    if (pathname.includes("/dashboard/admin/projects")) {
      return {
        title: "Active Construction Projects",
        subtitle:
          "Monitor construction milestones, engineering supervisors, budget tracking, and real-time site progress.",
      };
    }
    if (pathname.includes("/dashboard/admin/engineers")) {
      return {
        title: "Site Engineers & Technical Staff",
        subtitle:
          "Supervise on-site construction engineers, safety certifications, project allocations, and field contact logs.",
      };
    }
    if (
      pathname.includes("/dashboard/admin/billing") ||
      pathname.includes("/dashboard/admin/revenue")
    ) {
      return {
        title: "Invoices & Construction Billing",
        subtitle:
          "Track milestone-based client invoicing, pending progress payments, and revenue collection ledger.",
      };
    }
    if (pathname.includes("/dashboard/admin/content")) {
      return {
        title: "Content & Visual CMS Manager",
        subtitle:
          "Edit headlines, descriptions, media assets (images/videos), and catalogues across all website pages",
      };
    }
    if (pathname.includes("/dashboard/admin/settings")) {
      return {
        title: "System & Construction Settings",
        subtitle:
          "Configure corporate profiles, safety compliance thresholds, notification preferences, and security access.",
      };
    }
    if (pathname.includes("/dashboard/engineer")) {
      return {
        title: "Field Engineer Portal",
        subtitle:
          "Daily OSHA safety compliance, site inspections, and contractor progress logs.",
      };
    }
    if (pathname.includes("/dashboard/client")) {
      return {
        title: "Client Property Portal",
        subtitle:
          "Real-time construction milestones, photos, and payment approvals for Villa Horizon.",
      };
    }
    return {
      title: "Executive Operations Dashboard",
      subtitle:
        "Overview of all active construction sites, leads pipeline, and engineering teams",
    };
  };

  const pageInfo = getPageInfo();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#12223B]/10 px-4 sm:px-8 py-4 transition-all duration-500">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Headings */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg bg-[#12223B] text-white hover:bg-[#1c3254] transition-colors lg:hidden focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-[#12223B] leading-tight tracking-tight">
              {pageInfo.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#64748b] hidden sm:block font-normal">
              {pageInfo.subtitle}
            </p>
          </div>
        </div>

        {/* Right: Search, + New Project, Notifications, Profile */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Input */}
          <div className="relative hidden md:block w-64 lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads, projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={() => setCommandPaletteOpen(true)}
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-transparent focus:border-[#FFDB5A] focus:bg-white text-xs sm:text-sm text-[#12223B] placeholder-gray-400 focus:outline-none transition-all cursor-pointer"
              readOnly
            />
          </div>

          {/* New Project CTA */}
          <Link
            href="/dashboard/admin/projects"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FFDB5A] text-[#12223B] hover:bg-[#f0cb46] font-semibold text-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </Link>

          {/* Notification Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2.5 rounded-lg bg-[#F6F6F6] hover:bg-gray-200 text-[#12223B] transition-colors focus:outline-none cursor-pointer"
              aria-label="View notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#FFDB5A] border-2 border-white rounded-full"></span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#12223B]">
                      Notifications
                    </span>
                    <span className="text-[11px] font-semibold text-[#12223B] bg-[#FFDB5A] px-2 py-0.5 rounded-full">
                      3 New
                    </span>
                  </div>
                  <button
                    onClick={() => setNotificationsOpen(false)}
                    className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2.5 pt-3">
                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="text-[#12223B] font-semibold">
                        Phase 4 Milestone Approved
                      </p>
                      <p className="text-gray-500 mt-0.5">
                        Modern Family Villa interior finishing inspected by Sophia Bennett.
                      </p>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        12 minutes ago
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="text-[#12223B] font-semibold">
                        New Estimate Inbound
                      </p>
                      <p className="text-gray-500 mt-0.5">
                        Jonathan Ward submitted commercial construction inquiry ($1.2M).
                      </p>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        45 minutes ago
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="text-[#12223B] font-semibold">
                        Invoice Cleared
                      </p>
                      <p className="text-gray-500 mt-0.5">
                        Apex Manufacturing settled $185,000 progress billing.
                      </p>
                      <span className="text-[10px] text-gray-400 mt-1 block">
                        2 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#12223B]">
              <Image
                src="/images/author-1.jpg"
                alt="Michael Anderson"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-sm sm:text-base font-semibold text-[#12223B] leading-none">
                Michael Anderson
              </p>
              <p className="text-xs text-gray-500 font-medium mt-1">
                Principal Executive
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette open={commandPaletteOpen} setOpen={setCommandPaletteOpen} />
    </header>
  );
}
