"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  PanelLeft,
  Plus,
  ShieldCheck,
  UserCheck,
  HardHat,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Command,
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

  const currentRole = pathname.includes("/dashboard/client")
    ? "client"
    : pathname.includes("/dashboard/engineer")
    ? "engineer"
    : "admin";

  const roleMeta = {
    admin: {
      badge: "Super Admin",
      badgeBg: "bg-[#FFDB5A]/20 text-[#FFDB5A] border-[#FFDB5A]/30",
      icon: ShieldCheck,
      actionLabel: "+ New Project",
      actionHref: "/dashboard/admin/projects",
      siteInfo: "24 Active Sites • 98.4% Safety",
    },
    client: {
      badge: "Property Client",
      badgeBg: "bg-[#00C975]/20 text-[#00C975] border-[#00C975]/30",
      icon: UserCheck,
      actionLabel: "Request Change",
      actionHref: "/dashboard/client/change-orders",
      siteInfo: "Villa Horizon (PRJ-901) • 78% Done",
    },
    engineer: {
      badge: "Site Engineer",
      badgeBg: "bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30",
      icon: HardHat,
      actionLabel: "+ Log Today's Work",
      actionHref: "/dashboard/engineer/site-logs",
      siteInfo: "Metro Business Center • Tower B",
    },
  }[currentRole];

  return (
    <header className="sticky top-0 z-20 h-16 bg-[#0E1A30]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Toggle & Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/15 cursor-pointer"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Expand Icon when sidebar is collapsed */}
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="hidden lg:flex p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            aria-label="Expand sidebar"
            title="Expand sidebar"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
        )}

        {/* Search Bar - Triggers Command Palette */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="relative w-full max-w-md hidden sm:flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs text-gray-400 transition-all cursor-pointer text-left group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400 group-hover:text-[#FFDB5A] transition-colors" />
            <span className="truncate">Search projects, blueprints, orders, logs...</span>
          </div>
          <kbd className="hidden md:inline-flex items-center gap-1 font-mono text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
            <span>Ctrl</span>
            <span>K</span>
          </kbd>
        </button>
      </div>

      {/* Right: Site Status Badge, Notifications, Role CTA & Profile */}
      <div className="flex items-center gap-3">
        {/* Site Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#00C975] animate-pulse" />
          <span className="font-medium text-white">{roleMeta.siteInfo}</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FFDB5A] ring-2 ring-[#0E1A30]" />
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-[#12223B] border border-white/15 rounded-2xl p-4 shadow-2xl z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live Notifications
                </span>
                <span className="text-[10px] font-bold text-[#FFDB5A] bg-[#FFDB5A]/15 px-2 py-0.5 rounded-full">
                  3 New
                </span>
              </div>

              <div className="space-y-2.5 pt-3">
                <div className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C975] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-white font-medium">Concrete Pour Completed</p>
                    <p className="text-gray-400 text-[11px]">Villa Horizon Level 2 slab verified by site engineer.</p>
                    <span className="text-[10px] text-gray-500 mt-1 block">15 mins ago</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-[#FFDB5A] flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-white font-medium">Material Delivery Arrived</p>
                    <p className="text-gray-400 text-[11px]">18 tons reinforced steel unloaded at Gate B.</p>
                    <span className="text-[10px] text-gray-500 mt-1 block">42 mins ago</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="text-white font-medium">Milestone Payment Ready</p>
                    <p className="text-gray-400 text-[11px]">Phase 3 inspection passed successfully.</p>
                    <span className="text-[10px] text-gray-500 mt-1 block">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Role Quick CTA Button */}
        <Link
          href={roleMeta.actionHref}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-sm group"
        >
          <span>{roleMeta.actionLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Global Command Palette (Ctrl+K) */}
      <CommandPalette open={commandPaletteOpen} setOpen={setCommandPaletteOpen} />
    </header>
  );
}
