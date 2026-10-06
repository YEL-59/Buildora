"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  X,
  Download,
  Eye,
  Layers,
  ChevronRight,
  Filter,
} from "lucide-react";

interface PhaseStage {
  stage: number;
  phase: string;
  progress: number;
  status: string;
  desc: string;
  items: string[];
}

interface PhotoItem {
  id: number;
  category: "Exterior" | "Interior" | "MEP" | "Framing" | "Foundation";
  title: string;
  time: string;
  image: string;
  notes: string;
}

export default function ClientLiveSiteProjectsPage() {
  const [activePhotoCategory, setActivePhotoCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const stages: PhaseStage[] = [
    {
      stage: 1,
      phase: "Phase 1: Site Excavation & Foundation",
      progress: 100,
      status: "100% Done",
      desc: "Deep earth excavation, seismic soil compaction, reinforced rebar cage grid, and 4500 PSI waterproof concrete slab pour.",
      items: [
        "Soil compaction & geotechnical signoff",
        "Underground plumbing rough-in",
        "Vapor barrier & steel rebar placement",
        "Foundation slab pour & 28-day curing audit",
      ],
    },
    {
      stage: 2,
      phase: "Phase 2: Structural Steel & Timber Framing",
      progress: 100,
      status: "100% Done",
      desc: "Structural steel H-beam framing, exterior shear wall plywood sheathing, roof truss rigging, and high-performance weatherwrap.",
      items: [
        "Steel load-bearing posts anchored",
        "Second-floor joists & subflooring",
        "Roof truss installation & decking",
        "Tyvek weather barrier & seismic strapping",
      ],
    },
    {
      stage: 3,
      phase: "Phase 3: MEP & Insulation Rough-In",
      progress: 100,
      status: "100% Done",
      desc: "PEX plumbing manifold lines, 400A smart electrical wiring panel, multi-zone ducted HVAC heat pump, and rockwool sound insulation.",
      items: [
        "Conduit electrical wiring & smart home hub",
        "Supply & waste drainage pressure test",
        "Daikin VRV heat pump ductwork run",
        "R-38 acoustic & thermal insulation inspected",
      ],
    },
    {
      stage: 4,
      phase: "Phase 4: Interior Finishing & Architectural Glass",
      progress: 78,
      status: "78% In Progress",
      desc: "Level 5 drywall mud & skim, custom European white oak hardwood floors, panoramic floor-to-ceiling double-glazed doors, and bespoke kitchen cabinetry.",
      items: [
        "Level 5 smooth drywall finished & primed",
        "Panoramic sliding glass door installation",
        "White oak chevron flooring installation",
        "Italian quartz countertops & custom vanity fitting",
        "Interior recessed designer lighting fixtures",
      ],
    },
    {
      stage: 5,
      phase: "Phase 5: Exterior Landscaping & Key Handover",
      progress: 0,
      status: "Upcoming",
      desc: "Infinity plunge pool travertine coping, architectural exterior LED uplighting, perimeter drought-tolerant landscaping, city occupancy permit, and white-glove handover ceremony.",
      items: [
        "Travertine patio pavers & infinity pool finish",
        "Smart irrigation & architectural flora planting",
        "Municipal Certificate of Occupancy (CO) sign-off",
        "Final deep cleaning & Key Handover package",
      ],
    },
  ];

  const photos: PhotoItem[] = [
    {
      id: 1,
      category: "Interior",
      title: "Panoramic Glass Window Wall Installed",
      time: "Today at 09:15 AM",
      image: "/images/project-1.jpg",
      notes:
        "Floor-to-ceiling acoustic triple-glazed sliding panels seated into anodized aluminum tracks. Thermal seal certified by Lead PE Sophia Bennett.",
    },
    {
      id: 2,
      category: "Interior",
      title: "Custom White Oak Hardwood Flooring Laid",
      time: "Yesterday at 04:30 PM",
      image: "/images/expertise-item-image-2.jpg",
      notes:
        "Engineered European white oak wide planks laid in chevron orientation over sound-dampening cork underlayment.",
    },
    {
      id: 3,
      category: "Exterior",
      title: "Exterior Facade Cedar Cladding Completed",
      time: "Oct 02, 2026",
      image: "/images/service-image-1.jpg",
      notes:
        "Western red cedar rainscreen batten siding treated with eco-friendly fire-retardant finish and concealed stainless steel fastenings.",
    },
    {
      id: 4,
      category: "MEP",
      title: "Daikin Multi-Zone VRV Heat Pump Pressure Testing",
      time: "Sep 26, 2026",
      image: "/images/service-image-3.jpg",
      notes:
        "Refrigerant line pressure held at 550 PSI for 48 hours without drop. Smart thermostat zoning hubs tested and mapped.",
    },
    {
      id: 5,
      category: "Framing",
      title: "Steel Truss & Cantilever Balcony Rigging",
      time: "Aug 18, 2026",
      image: "/images/hero-slide-2.jpg",
      notes:
        "Pre-engineered structural steel cantilevers crane-hoisted and torqued to engineer specifications with laser alignment.",
    },
    {
      id: 6,
      category: "Foundation",
      title: "Seismic Rebar Grid & Waterproof Slab Pour",
      time: "Jul 10, 2026",
      image: "/images/service-image-2.jpg",
      notes:
        "High-density #6 rebar mesh grid inspected before pouring 4500 PSI waterproof fiber-reinforced concrete mix.",
    },
  ];

  const filteredPhotos = photos.filter((p) =>
    activePhotoCategory === "All" ? true : p.category === activePhotoCategory
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-2xl relative overflow-hidden border border-white/10 shadow-xs">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-1 rounded-full inline-block font-mono">
              Live Site Cam &amp; Progress Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Modern Family Villa (PRJ-901)
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Supervised by <strong className="text-white">Sophia Bennett (Lead PE)</strong> • Updated Daily with Certified High-Resolution Logs
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">
                Total Photos
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-[#FFDB5A] mt-0.5">
                6 Logs
              </h4>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">
                Current Phase
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                Phase 4
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Phase-by-Phase Construction Journey */}
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 space-y-6 shadow-2xs">
        <div className="pb-3 border-b border-gray-100">
          <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
            Phase-by-Phase Construction Journey
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Detailed milestones and quality assurance sign-offs for each building stage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage) => {
            const isCompleted = stage.progress === 100;
            const isInProgress = stage.progress > 0 && stage.progress < 100;

            return (
              <div
                key={stage.stage}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isInProgress
                    ? "bg-amber-50/40 border-[#FFDB5A] shadow-xs"
                    : isCompleted
                    ? "bg-white border-gray-200/90 hover:border-emerald-300"
                    : "bg-[#F9F9F9] border-gray-200/60 opacity-80"
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider">
                      Stage {stage.stage}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isCompleted
                          ? "bg-emerald-100 text-emerald-800"
                          : isInProgress
                          ? "bg-[#FFDB5A] text-[#12223B]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#12223B] leading-snug">
                    {stage.phase}
                  </h4>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isCompleted
                          ? "bg-emerald-500"
                          : isInProgress
                          ? "bg-[#FFDB5A]"
                          : "bg-gray-300"
                      }`}
                      style={{ width: `${stage.progress}%` }}
                    />
                  </div>
                </div>

                {/* Checklists */}
                <div className="mt-4 pt-3 border-t border-gray-200/60 space-y-1.5">
                  {stage.items.map((item, idx) => {
                    const checked =
                      isCompleted || (isInProgress && idx < 3);

                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs"
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            checked ? "text-emerald-500" : "text-gray-300"
                          }`}
                        />
                        <span
                          className={
                            checked
                              ? "text-gray-800 font-medium"
                              : "text-gray-400"
                          }
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 2: High-Resolution Site Photo Journal */}
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 space-y-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-gray-100">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
              High-Resolution Site Photo Journal
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Click any photo to view full inspection notes and download high-res files
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {["All", "Exterior", "Interior", "MEP", "Framing", "Foundation"].map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActivePhotoCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activePhotoCategory === cat
                      ? "bg-[#FFDB5A] text-[#12223B] font-bold shadow-2xs"
                      : "text-gray-700 hover:text-[#12223B]"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white transition-all cursor-pointer flex flex-col justify-between hover:shadow-md"
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#FFDB5A]" />
                    <span>View Inspection Log</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  {photo.category}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[11px] text-gray-400 font-medium block">
                  {photo.time}
                </span>
                <h4 className="text-sm font-bold text-[#12223B] line-clamp-1 group-hover:text-amber-600 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {photo.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Inspector Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {selectedPhoto.category} • {selectedPhoto.time}
                </span>
                <h4 className="font-bold text-lg text-[#12223B]">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-xl space-y-1 text-xs">
              <span className="font-bold text-gray-700 block">
                Engineer Inspection Notes:
              </span>
              <p className="text-gray-600 leading-relaxed">
                {selectedPhoto.notes}
              </p>
              <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between">
                <span>Verified by Lead Engineer Sophia Bennett</span>
                <span className="font-mono text-emerald-600 font-bold">
                  ✓ Certified &amp; Archived
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedPhoto.image}
                download
                className="px-4 py-2 bg-[#12223B] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-black"
              >
                <Download className="w-4 h-4 text-[#FFDB5A]" />
                <span>Download High-Res</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
