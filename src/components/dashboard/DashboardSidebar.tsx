"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users,
  Building2,
  HardHat,
  Receipt,
  FileText,
  Settings,
  Camera,
  FileCheck,
  FolderArchive,
  MessageSquare,
  ClipboardList,
  Boxes,
  ShieldCheck,
  UserCheck,
  PanelLeftClose,
  PanelLeft,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

export type PortalRole = "admin" | "client" | "engineer";

interface DashboardSidebarProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

export default function DashboardSidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  // Detect current portal role from URL path
  const currentRole: PortalRole = pathname.includes("/dashboard/client")
    ? "client"
    : pathname.includes("/dashboard/engineer")
    ? "engineer"
    : "admin";

  // Role Profile Details matching User's Images 2, 3, 4
  const roleProfiles = {
    admin: {
      subtitle: "Executive Authority",
      title: "Super Admin",
      section: "ADMIN MANAGEMENT",
      icon: ShieldCheck,
      iconBg: "bg-[#FFDB5A]",
      iconColor: "text-[#12223B]",
      menu: [
        { label: "Overview", href: "/dashboard/admin", icon: LayoutGrid },
        {
          label: "Leads & Inquiries",
          href: "/dashboard/admin/leads",
          icon: Users,
          badge: "5 New",
        },
        {
          label: "Active Projects",
          href: "/dashboard/admin/projects",
          icon: Building2,
          badge: "24",
        },
        {
          label: "Site Engineers",
          href: "/dashboard/admin/engineers",
          icon: HardHat,
        },
        {
          label: "Invoices & Revenue",
          href: "/dashboard/admin/revenue",
          icon: Receipt,
        },
        {
          label: "Content & CMS",
          href: "/dashboard/admin/content",
          icon: FileText,
        },
        {
          label: "System Settings",
          href: "/dashboard/admin/settings",
          icon: Settings,
        },
      ],
    },
    client: {
      subtitle: "Villa Owner (PRJ-901)",
      title: "Property Client",
      section: "CLIENT PROPERTY PORTAL",
      icon: UserCheck,
      iconBg: "bg-[#FFDB5A]",
      iconColor: "text-[#12223B]",
      menu: [
        { label: "My Overview", href: "/dashboard/client", icon: LayoutGrid },
        {
          label: "Live Site & Progress",
          href: "/dashboard/client/progress",
          icon: Camera,
          badge: "78%",
        },
        {
          label: "Milestones & Payment",
          href: "/dashboard/client/payments",
          icon: Receipt,
          badge: "1 Due",
        },
        {
          label: "Change Orders",
          href: "/dashboard/client/change-orders",
          icon: FileCheck,
          badge: "2",
        },
        {
          label: "Blueprints & Files",
          href: "/dashboard/client/blueprints",
          icon: FolderArchive,
        },
        {
          label: "Engineer Messages",
          href: "/dashboard/client/messages",
          icon: MessageSquare,
          badge: "3",
        },
      ],
    },
    engineer: {
      subtitle: "Lead Civil Engineer",
      title: "Site Engineer",
      section: "FIELD ENGINEERING",
      icon: HardHat,
      iconBg: "bg-[#FFDB5A]",
      iconColor: "text-[#12223B]",
      menu: [
        {
          label: "Engineer Portal",
          href: "/dashboard/engineer",
          icon: LayoutGrid,
        },
        {
          label: "Daily Site Logs",
          href: "/dashboard/engineer/site-logs",
          icon: ClipboardList,
          badge: "Pending",
        },
        {
          label: "Material Requisition",
          href: "/dashboard/engineer/requisition",
          icon: Boxes,
        },
        {
          label: "Safety & PPE Audits",
          href: "/dashboard/engineer/safety",
          icon: ShieldCheck,
        },
        {
          label: "Field Blueprints",
          href: "/dashboard/engineer/blueprints",
          icon: FileText,
        },
      ],
    },
  };

  const currentProfile = roleProfiles[currentRole];
  const ProfileIcon = currentProfile.icon;

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0B1528] text-white border-r border-white/10 select-none">
      {/* Brand Header */}
      <div className="p-5 flex items-center justify-between border-b border-white/10">
        <Link
          href="/"
          className={`flex items-center gap-3 transition-opacity ${
            collapsed ? "justify-center w-full" : ""
          }`}
        >
          {/* Brand Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#FFDB5A] flex items-center justify-center flex-shrink-0 text-[#12223B] shadow-md shadow-[#FFDB5A]/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h6M9 14h6M9 18h6" />
            </svg>
          </div>

          {!collapsed && (
            <div className="flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-white">
                Buildora
              </span>
              <span className="text-[#FFDB5A] text-2xl leading-none">.</span>
            </div>
          )}
        </Link>

        {!collapsed && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors hidden lg:block cursor-pointer"
            aria-label="Collapse sidebar"
            title="Collapse sidebar"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* User Role Badge Card */}
      <div className="p-4 border-b border-white/10">
        <div
          className={`flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 transition-all ${
            collapsed ? "justify-center p-2" : ""
          }`}
        >
          <div
            className={`w-11 h-11 rounded-xl ${currentProfile.iconBg} ${currentProfile.iconColor} flex items-center justify-center flex-shrink-0 shadow-md shadow-[#FFDB5A]/15`}
          >
            <ProfileIcon className="w-6 h-6 stroke-[2.2]" />
          </div>

          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-gray-400 truncate">
                {currentProfile.subtitle}
              </div>
              <div className="text-sm font-bold text-white tracking-tight truncate flex items-center justify-between">
                <span>{currentProfile.title}</span>
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#00C975] shadow-[0_0_8px_#00C975] flex-shrink-0"
                  title="Online"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Nav Menu */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-1 scrollbar-thin scrollbar-thumb-white/10">
        {!collapsed && (
          <div className="px-3 pt-2 pb-2 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            {currentProfile.section}
          </div>
        )}

        {currentProfile.menu.map((item) => {
          const ItemIcon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== `/dashboard/${currentRole}` &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all duration-200 group ${
                collapsed ? "justify-center px-2" : ""
              } ${
                isActive
                  ? "bg-[#FFDB5A] text-[#12223B] font-bold shadow-md shadow-[#FFDB5A]/15"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.07] font-medium"
              }`}
            >
              <ItemIcon
                className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-105 ${
                  isActive ? "text-[#12223B]" : "text-slate-300"
                }`}
              />

              {!collapsed && (
                <span className="flex-1 text-sm tracking-tight truncate">
                  {item.label}
                </span>
              )}

              {!collapsed && item.badge && (
                <span
                  className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full flex-shrink-0 shadow-sm ${
                    isActive
                      ? "bg-[#12223B] text-[#FFDB5A]"
                      : "bg-[#FFDB5A] text-[#12223B]"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom: SWITCH PORTAL ROLE */}
      <div className="p-3.5 border-t border-white/10 bg-[#091122]">
        {!collapsed && (
          <div className="px-2 pb-2.5 text-[10px] font-bold text-gray-400 tracking-wider uppercase">
            SWITCH PORTAL ROLE
          </div>
        )}

        <div className={`grid ${collapsed ? "grid-cols-1 gap-2" : "grid-cols-3 gap-1.5"}`}>
          {/* Admin */}
          <Link
            href="/dashboard/admin"
            title="Switch to Super Admin"
            className={`p-2 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
              currentRole === "admin"
                ? "bg-[#FFDB5A] text-[#12223B] font-bold shadow-sm"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-4 h-4 mb-0.5" />
            {!collapsed && <span className="text-[10px] font-semibold">Admin</span>}
          </Link>

          {/* Client */}
          <Link
            href="/dashboard/client"
            title="Switch to Property Client"
            className={`p-2 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
              currentRole === "client"
                ? "bg-[#00C975] text-white font-bold shadow-sm"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <UserCheck className="w-4 h-4 mb-0.5" />
            {!collapsed && <span className="text-[10px] font-semibold">Client</span>}
          </Link>

          {/* Engineer */}
          <Link
            href="/dashboard/engineer"
            title="Switch to Site Engineer"
            className={`p-2 rounded-lg text-center flex flex-col items-center justify-center transition-all ${
              currentRole === "engineer"
                ? "bg-[#2563EB] text-white font-bold shadow-sm"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <HardHat className="w-4 h-4 mb-0.5" />
            {!collapsed && <span className="text-[10px] font-semibold">Engineer</span>}
          </Link>
        </div>

        {/* Back to main website */}
        <Link
          href="/"
          className={`mt-3 flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-colors ${
            collapsed ? "justify-center" : "justify-between"
          }`}
          title="Back to Public Website"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {!collapsed && <span>Main Website</span>}
          </div>
          {!collapsed && <ExternalLink className="w-3.5 h-3.5 text-gray-500" />}
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden lg:block h-screen sticky top-0 transition-all duration-300 z-30 flex-shrink-0 ${
          collapsed ? "w-20" : "w-72"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Mobile Sliding Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-72 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
