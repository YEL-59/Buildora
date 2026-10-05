"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ShieldCheck,
  UserCheck,
  HardHat,
  Building2,
  Receipt,
  FileCheck,
  FolderArchive,
  ClipboardList,
  Boxes,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  setOpen: (v: boolean) => void;
}

interface CommandItem {
  id: string;
  category: "Portals" | "Projects" | "Client Tools" | "Engineering Operations";
  title: string;
  subtitle: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeBg?: string;
}

export default function CommandPalette({ open, setOpen }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const items: CommandItem[] = [
    // Portals
    {
      id: "portal-admin",
      category: "Portals",
      title: "Super Admin Dashboard",
      subtitle: "Operations, project pipelines & leads",
      href: "/dashboard/admin",
      icon: ShieldCheck,
      badge: "Admin",
      badgeBg: "bg-[#FFDB5A] text-[#12223B]",
    },
    {
      id: "portal-client",
      category: "Portals",
      title: "Property Client Portal",
      subtitle: "Villa Horizon (PRJ-901) live progress & payments",
      href: "/dashboard/client",
      icon: UserCheck,
      badge: "Client",
      badgeBg: "bg-[#00C975] text-white",
    },
    {
      id: "portal-engineer",
      category: "Portals",
      title: "Site Engineer Command Portal",
      subtitle: "Metro Business Center Tower B field logs & safety",
      href: "/dashboard/engineer",
      icon: HardHat,
      badge: "Engineer",
      badgeBg: "bg-[#2563EB] text-white",
    },

    // Projects
    {
      id: "prj-901",
      category: "Projects",
      title: "Villa Horizon Luxury Estate",
      subtitle: "78% Complete • Beverly Hills, CA • Alex Rivera, PE",
      href: "/dashboard/client/progress",
      icon: Building2,
      badge: "PRJ-901",
      badgeBg: "bg-[#FFDB5A]/20 text-[#FFDB5A]",
    },
    {
      id: "prj-904",
      category: "Projects",
      title: "Metro Tower B Commercial Core",
      subtitle: "42% Complete • Downtown LA • Sarah Jenkins, SE",
      href: "/dashboard/admin/projects",
      icon: Building2,
      badge: "PRJ-904",
      badgeBg: "bg-blue-500/20 text-blue-400",
    },
    {
      id: "prj-882",
      category: "Projects",
      title: "Pacific Modern Eco-Residence",
      subtitle: "94% Complete • Handover Prep • Malibu Coast",
      href: "/dashboard/admin/projects",
      icon: Building2,
      badge: "PRJ-882",
      badgeBg: "bg-purple-500/20 text-purple-400",
    },

    // Client Tools
    {
      id: "tool-cctv",
      category: "Client Tools",
      title: "Live Jobsite CCTV Stream",
      subtitle: "4 HD Cameras live stream (North Facade, Deck, Pool)",
      href: "/dashboard/client/progress",
      icon: Camera,
      badge: "Live 1080p",
      badgeBg: "bg-[#00C975]/20 text-[#00C975]",
    },
    {
      id: "tool-payment",
      category: "Client Tools",
      title: "Milestone Phase 4 Payment",
      subtitle: "$45,000 due upon exterior thermal glazing inspection",
      href: "/dashboard/client/payments",
      icon: Receipt,
      badge: "1 Due",
      badgeBg: "bg-[#FFDB5A] text-[#12223B]",
    },
    {
      id: "tool-change-orders",
      category: "Client Tools",
      title: "Review Change Orders (CO-901-04)",
      subtitle: "Calacatta Gold marble & Sub-Zero appliances sign-off",
      href: "/dashboard/client/change-orders",
      icon: FileCheck,
      badge: "2 Pending",
      badgeBg: "bg-amber-500/20 text-amber-400",
    },

    // Engineering Operations
    {
      id: "eng-logs",
      category: "Engineering Operations",
      title: "Submit Daily Site Log",
      subtitle: "Log manpower, weather, crane ops & concrete pour",
      href: "/dashboard/engineer/site-logs",
      icon: ClipboardList,
      badge: "Pending",
      badgeBg: "bg-[#FFDB5A] text-[#12223B]",
    },
    {
      id: "eng-req",
      category: "Engineering Operations",
      title: "Material Requisition Dispatch",
      subtitle: "Order Grade 60 rebar & 4000 PSI ready-mix concrete",
      href: "/dashboard/engineer/requisition",
      icon: Boxes,
      badge: "Orders",
      badgeBg: "bg-blue-500/20 text-blue-400",
    },
    {
      id: "eng-blueprints",
      category: "Engineering Operations",
      title: "CAD & Structural Blueprints",
      subtitle: "View Core Shear Wall Rebar Placement (Rev 4.2)",
      href: "/dashboard/engineer/blueprints",
      icon: FolderArchive,
      badge: "DWG-C101",
      badgeBg: "bg-white/10 text-white",
    },
  ];

  // Hotkey listener for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  if (!open) return null;

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#0F1C33] border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
      >
        {/* Search Input Bar */}
        <div className="relative p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#FFDB5A] flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search project, camera, blueprint, or role..."
            className="w-full bg-transparent text-white text-sm placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] font-mono font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-md flex-shrink-0 hidden sm:inline-block">
            ESC to close
          </span>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-xs">
              No matching portals, projects, or field tools found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div>
              {filteredItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.href)}
                    className="w-full p-3 rounded-2xl hover:bg-white/[0.08] transition-colors flex items-center justify-between gap-3 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#FFDB5A] group-hover:scale-105 transition-transform">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white group-hover:text-[#FFDB5A] transition-colors truncate">
                            {item.title}
                          </span>
                          {item.badge && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                item.badgeBg || "bg-white/10 text-white"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#FFDB5A] group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#0A1424] border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FFDB5A]" />
            <span>Fast navigation across Super Admin, Client Villa, and Site Engineering</span>
          </div>
          <span className="hidden sm:inline font-mono text-[10px] text-gray-500">
            Navigation Ready
          </span>
        </div>
      </div>
    </div>
  );
}
