"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  HardHat,
  Receipt,
  FileText,
  Settings,
  ShieldCheck,
  PanelLeftClose,
  PanelLeft,
  X,
  UserCheck,
  LogOut,
  FolderLock,
  MessageSquare,
  FileCheck,
  Camera,
  ClipboardList,
  Boxes,
  Compass,
  Briefcase,
  CheckCircle2,
  Truck,
  ShoppingBag,
  Package,
  Award,
} from "lucide-react";

export type PortalRole = "admin" | "client" | "engineer" | "subcontractor" | "supplier";

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
    : pathname.includes("/dashboard/subcontractor")
    ? "subcontractor"
    : pathname.includes("/dashboard/supplier")
    ? "supplier"
    : "admin";

  const adminMenu = [
    { label: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
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
      href: "/dashboard/admin/billing",
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
  ];

  const clientMenu = [
    { label: "My Overview", href: "/dashboard/client", icon: LayoutDashboard },
    {
      label: "Live Site & Progress",
      href: "/dashboard/client/projects",
      icon: Camera,
      badge: "78%",
    },
    {
      label: "Milestones & Payments",
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
      href: "/dashboard/client/documents",
      icon: FolderLock,
    },
    {
      label: "Engineer Messages",
      href: "/dashboard/client/messages",
      icon: MessageSquare,
      badge: "3",
    },
  ];

  const engineerMenu = [
    { label: "Engineer Portal", href: "/dashboard/engineer", icon: LayoutDashboard },
    {
      label: "Daily Site Logs",
      href: "/dashboard/engineer/logs",
      icon: ClipboardList,
      badge: "Pending",
    },
    {
      label: "Material Requisition",
      href: "/dashboard/engineer/materials",
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
      icon: Compass,
    },
  ];

  const subcontractorMenu = [
    { label: "Trade Overview", href: "/dashboard/subcontractor", icon: LayoutDashboard },
    {
      label: "Work Packages & Scope",
      href: "/dashboard/subcontractor/work-orders",
      icon: Briefcase,
      badge: "4 Active",
    },
    {
      label: "Daily Crew Logs",
      href: "/dashboard/subcontractor/crew-logs",
      icon: Users,
      badge: "Today",
    },
    {
      label: "Pay Apps & Invoices",
      href: "/dashboard/subcontractor/invoices",
      icon: Receipt,
      badge: "1 In Review",
    },
    {
      label: "Safety & Compliance",
      href: "/dashboard/subcontractor/safety",
      icon: ShieldCheck,
      badge: "COI Valid",
    },
    {
      label: "Punch List & QA",
      href: "/dashboard/subcontractor/punch-list",
      icon: CheckCircle2,
      badge: "1 Open",
    },
  ];

  const supplierMenu = [
    { label: "Supply Overview", href: "/dashboard/supplier", icon: LayoutDashboard },
    {
      label: "Purchase Orders",
      href: "/dashboard/supplier/orders",
      icon: ShoppingBag,
      badge: "2 New",
    },
    {
      label: "Fleet & Deliveries",
      href: "/dashboard/supplier/deliveries",
      icon: Truck,
      badge: "In Transit",
    },
    {
      label: "Material Catalog",
      href: "/dashboard/supplier/inventory",
      icon: Package,
    },
    {
      label: "Quality & MTRs",
      href: "/dashboard/supplier/quality",
      icon: Award,
      badge: "ASTM Pass",
    },
    {
      label: "Vendor Invoices",
      href: "/dashboard/supplier/invoices",
      icon: Receipt,
      badge: "$46.8k",
    },
  ];

  const menuItems =
    currentRole === "client"
      ? clientMenu
      : currentRole === "engineer"
      ? engineerMenu
      : currentRole === "subcontractor"
      ? subcontractorMenu
      : currentRole === "supplier"
      ? supplierMenu
      : adminMenu;

  const roleMeta = {
    admin: {
      subtitle: "Executive Authority",
      title: "Super Admin",
      section: "ADMIN MANAGEMENT",
      icon: ShieldCheck,
    },
    client: {
      subtitle: "Villa Owner (PRJ-901)",
      title: "Property Client",
      section: "CLIENT PROPERTY PORTAL",
      icon: UserCheck,
    },
    engineer: {
      subtitle: "CA-PE #98421",
      title: "Sophia Bennett (PE)",
      section: "ENGINEERING OPS PORTAL",
      icon: HardHat,
    },
    subcontractor: {
      subtitle: "CA-CSLB-994812 (C-6)",
      title: "Apex Millwork LLC",
      section: "SUB-TRADE CONTRACTOR PORTAL",
      icon: Briefcase,
    },
    supplier: {
      subtitle: "VND-APX-7719 • Tier 1",
      title: "Apex Industrial Supply",
      section: "MATERIAL SUPPLIER PORTAL",
      icon: Truck,
    },
  }[currentRole];

  const RoleIcon = roleMeta.icon;

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-[#12223B] text-white flex flex-col justify-between border-r border-white/10 overflow-x-hidden transition-[width,transform] duration-500 ease-in-out ${
          collapsed ? "lg:w-20 w-72" : "lg:w-72 w-72"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          {/* Header / Brand Logo */}
          <div className="h-20 flex items-center justify-between px-5 border-b border-white/10 relative overflow-hidden">
            <Link
              href="/"
              className="flex items-center min-w-0 flex-shrink-0 cursor-pointer"
              aria-label="Buildora Home"
            >
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                >
                  <circle cx="25" cy="25" r="25" fill="#FFDB5A" />
                  <path
                    d="M16.9386 23.9994L25.0002 15.9391L33.0614 23.9994H39L25.0002 10L11 23.9994H16.9386Z"
                    fill="#12223B"
                  />
                  <path
                    d="M33.7221 26.9009V35.068H16.1095V26.9009H11.9102V39.2673H37.9215V26.9009H33.7221Z"
                    fill="#12223B"
                  />
                  <path
                    d="M18.7378 16.3078H14.499V20.8571H18.7378V16.3078Z"
                    fill="#12223B"
                  />
                  <path
                    d="M28.5492 28.0062C28.9643 26.2541 27.8804 24.4974 26.1283 24.0824C24.3763 23.6674 22.6196 24.7512 22.2046 26.5033C21.7896 28.2553 22.8734 30.0121 24.6255 30.4271C26.3775 30.8421 28.1342 29.7582 28.5492 28.0062Z"
                    fill="#12223B"
                  />
                  <path
                    d="M37.9226 26.3913H25.9834V28.3845H37.9226V26.3913Z"
                    fill="#12223B"
                  />
                </svg>
              </div>

              <div
                className={`transition-[opacity,transform] duration-500 ease-in-out whitespace-nowrap ml-3 ${
                  collapsed
                    ? "opacity-0 -translate-x-4 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }`}
              >
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Buildora<span className="text-[#FFDB5A]">.</span>
                </span>
              </div>
            </Link>

            {/* Collapse toggle (Desktop) */}
            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer flex-shrink-0"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-label="Toggle sidebar"
            >
              {collapsed ? (
                <PanelLeft className="w-5 h-5 text-gray-300 hover:text-white" />
              ) : (
                <PanelLeftClose className="w-5 h-5 text-gray-300 hover:text-white" />
              )}
            </button>

            {/* Close toggle (Mobile) */}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 lg:hidden cursor-pointer flex-shrink-0"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current Role Identity Banner */}
          <div className="border-b border-white/5 bg-[#1c3254]/40 px-5 py-3.5 flex items-center justify-between transition-all duration-500 overflow-hidden relative group">
            <div className="flex items-center min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#FFDB5A] text-[#12223B] flex items-center justify-center font-semibold text-sm flex-shrink-0 shadow-xs">
                <RoleIcon className="w-5 h-5" />
              </div>
              <div
                className={`transition-[opacity,transform] duration-500 ease-in-out whitespace-nowrap ml-3 ${
                  collapsed
                    ? "opacity-0 -translate-x-4 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }`}
              >
                <p className="text-xs text-gray-300 font-medium leading-none">
                  {roleMeta.subtitle}
                </p>
                <p className="text-sm font-semibold text-white capitalize mt-1 leading-none">
                  {roleMeta.title}
                </p>
              </div>
            </div>
            <span
              className={`w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0 transition-all duration-500 ml-2 animate-pulse ${
                collapsed ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          {/* Navigation Items */}
          <div className="p-3 space-y-2">
            <div
              className={`px-3 transition-[opacity,transform] duration-500 ease-in-out whitespace-nowrap overflow-hidden ${
                collapsed
                  ? "opacity-0 max-h-0 mb-0"
                  : "opacity-100 translate-x-0 max-h-8 mb-2"
              }`}
            >
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                {roleMeta.section}
              </p>
            </div>

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/dashboard/admin"
                  ? pathname === "/dashboard/admin"
                  : item.href === "/dashboard/client"
                  ? pathname === "/dashboard/client"
                  : item.href === "/dashboard/engineer"
                  ? pathname === "/dashboard/engineer"
                  : item.href === "/dashboard/subcontractor"
                  ? pathname === "/dashboard/subcontractor"
                  : item.href === "/dashboard/supplier"
                  ? pathname === "/dashboard/supplier"
                  : pathname.startsWith(item.href) ||
                    (item.href === "/dashboard/admin/billing" &&
                      pathname.startsWith("/dashboard/admin/revenue")) ||
                    (item.href === "/dashboard/client/projects" &&
                      pathname.startsWith("/dashboard/client/progress")) ||
                    (item.href === "/dashboard/client/documents" &&
                      pathname.startsWith("/dashboard/client/blueprints")) ||
                    (item.href === "/dashboard/engineer/logs" &&
                      pathname.startsWith("/dashboard/engineer/site-logs")) ||
                    (item.href === "/dashboard/engineer/materials" &&
                      pathname.startsWith("/dashboard/engineer/requisition"));

              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center h-12 rounded-xl px-3.5 w-full justify-between transition-colors duration-200 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-[#FFDB5A] text-[#12223B] shadow-md font-semibold"
                        : "text-gray-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center min-w-0">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 relative">
                        <Icon
                          className={`w-5 h-5 transition-colors duration-200 ${
                            isActive
                              ? "text-[#12223B]"
                              : "text-gray-300 group-hover:text-[#FFDB5A]"
                          }`}
                        />
                      </div>
                      <span
                        className={`transition-[opacity,transform] duration-500 ease-in-out whitespace-nowrap text-[15px] font-semibold ml-3.5 ${
                          collapsed
                            ? "opacity-0 -translate-x-4 pointer-events-none"
                            : "opacity-100 translate-x-0"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {item.badge && !collapsed && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? "bg-[#12223B] text-white"
                            : "bg-[#FFDB5A] text-[#12223B]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Role Switcher & Log Out */}
        <div className="p-3 border-t border-white/10 bg-[#12223B]/90 space-y-2.5 overflow-hidden transition-all duration-500">
          {!collapsed && (
            <div className="bg-white/5 rounded-xl p-3">
              <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Switch Portal Role
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                {currentRole !== "admin" && (
                  <Link
                    href="/dashboard/admin"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-200 flex items-center justify-between transition-colors duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FFDB5A]" /> Admin
                    </span>
                  </Link>
                )}
                {currentRole !== "engineer" && (
                  <Link
                    href="/dashboard/engineer"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-200 flex items-center justify-between transition-colors duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <HardHat className="w-4 h-4 text-[#FFDB5A]" /> Engineer
                    </span>
                  </Link>
                )}
                {currentRole !== "client" && (
                  <Link
                    href="/dashboard/client"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-200 flex items-center justify-between transition-colors duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-[#FFDB5A]" /> Client
                    </span>
                  </Link>
                )}
                {currentRole !== "subcontractor" && (
                  <Link
                    href="/dashboard/subcontractor"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-200 flex items-center justify-between transition-colors duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#FFDB5A]" /> Sub-Trade
                    </span>
                  </Link>
                )}
                {currentRole !== "supplier" && (
                  <Link
                    href="/dashboard/supplier"
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-200 flex items-center justify-between transition-colors duration-200 col-span-2 sm:col-span-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#FFDB5A]" /> Supplier
                    </span>
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="relative group">
            <Link
              href="/"
              className="w-full h-11 rounded-xl bg-[#1c3254] hover:bg-rose-950/50 hover:text-rose-200 border border-transparent hover:border-rose-500/30 flex items-center px-3.5 justify-between text-xs font-semibold text-gray-200 transition-all duration-200 cursor-pointer overflow-hidden"
            >
              <div className="flex items-center min-w-0">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <LogOut className="w-4.5 h-4.5 text-[#FFDB5A] group-hover:text-rose-400 transition-colors" />
                </div>
                <span
                  className={`transition-[opacity,transform] duration-500 ease-in-out whitespace-nowrap overflow-hidden ml-3.5 ${
                    collapsed
                      ? "opacity-0 -translate-x-4 pointer-events-none"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  Return to Website
                </span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
