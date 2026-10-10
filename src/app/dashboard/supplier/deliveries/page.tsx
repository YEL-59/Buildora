"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Truck,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  FileText,
  Download,
  X,
  Eye,
  Camera,
  Send,
  User,
  ShieldCheck,
  Building2,
} from "lucide-react";

interface DeliveryManifest {
  id: string;
  poRef: string;
  project: string;
  status: "In Transit" | "Delivered & Signed";
  cargo: string;
  totalQuantity: string;
  rig: string;
  driver: string;
  destination: string;
  receiverSignOff?: string;
  photoUrl: string;
  dispatchedTime: string;
  arrivalTime: string;
}

const initialDeliveries: DeliveryManifest[] = [
  {
    id: "DN-2026-9901",
    poRef: "PO-8812",
    project: "Modern Family Villa (PRJ-901)",
    status: "In Transit",
    cargo: "12 Tons Grade 60 Rebar + 32 Cu Yd 4000 PSI Mix",
    totalQuantity: "12 Tons / 4 Trucks",
    rig: "Freightliner M2-106 (Unit #44)",
    driver: "Darius Thorne (Heavy Rig #14)",
    destination: "Bel Air, Los Angeles (Gate 2)",
    photoUrl: "/images/project-1.jpg",
    dispatchedTime: "Today, Oct 05 (11:30 AM)",
    arrivalTime: "Today, 01:45 PM",
  },
  {
    id: "DN-2026-9900",
    poRef: "PO-8809",
    project: "Modern Family Villa (PRJ-901)",
    status: "Delivered & Signed",
    cargo: "160 Cu. Yds Type II Sulfate-Resistant Concrete",
    totalQuantity: "160 Cu. Yds (16 Loads)",
    rig: "Mack Granite 10-Yard Mixer (Unit #18)",
    driver: "Carlos Mendez (Mack Mixer #08)",
    destination: "Foundation Pour Grid Lines A-E",
    receiverSignOff: "Sophia Bennett (PE Structural) — Stamp #CA-PE-8849",
    photoUrl: "/images/project-2.jpg",
    dispatchedTime: "Sep 30, 2026",
    arrivalTime: "Delivered Sep 30, 09:15 AM",
  },
  {
    id: "DN-2026-9899",
    poRef: "PO-8795",
    project: "Metro Business Center (PRJ-804)",
    status: "Delivered & Signed",
    cargo: "45 Tons Structural W14x90 Steel Columns",
    totalQuantity: "45 Tons",
    rig: "Kenworth T880 Semi (Unit #09)",
    driver: "Anton Vance (Heavy Transport #03)",
    destination: "Commercial Tower Core B2",
    receiverSignOff: "David Lee (Superintendent)",
    photoUrl: "/images/project-3.jpg",
    dispatchedTime: "Sep 22, 2026",
    arrivalTime: "Delivered Sep 22, 02:00 PM",
  },
];

export default function SupplierDeliveriesPage() {
  const [deliveries, setDeliveries] = useState<DeliveryManifest[]>(initialDeliveries);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "In Transit" | "Delivered & Signed">("All");

  // Modals
  const [selectedPodDelivery, setSelectedPodDelivery] = useState<DeliveryManifest | null>(null);
  const [isNewDispatchModalOpen, setIsNewDispatchModalOpen] = useState(false);
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  // New Dispatch Form State
  const [newPoRef, setNewPoRef] = useState("PO-8815");
  const [newProject, setNewProject] = useState("Modern Family Villa (PRJ-901)");
  const [newCargo, setNewCargo] = useState("80 Bundles FSC European White Oak Planks 5/4x6");
  const [newTotalQuantity, setNewTotalQuantity] = useState("80 Bundles (2 Trucks)");
  const [newRig, setNewRig] = useState("Freightliner M2-106 (Unit #44)");
  const [newDriver, setNewDriver] = useState("Darius Thorne");
  const [newDestination, setNewDestination] = useState("Jobsite Gate 1 Staging Area");

  const handleCreateDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const newManifest: DeliveryManifest = {
      id: `DN-2026-${9902 + deliveries.length - 3}`,
      poRef: newPoRef,
      project: newProject,
      status: "In Transit",
      cargo: newCargo,
      totalQuantity: newTotalQuantity,
      rig: newRig,
      driver: newDriver,
      destination: newDestination,
      photoUrl: "/images/project-1.jpg",
      dispatchedTime: "Today (Just Now)",
      arrivalTime: "Today, 03:30 PM",
    };

    setDeliveries([newManifest, ...deliveries]);
    setIsNewDispatchModalOpen(false);
    setToastMessage(`Manifest ${newManifest.id} dispatched! Electronic delivery note generated.`);
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredDeliveries = deliveries.filter((d) => {
    const matchesFilter =
      activeFilter === "All" || d.status === activeFilter;
    const matchesSearch =
      d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.poRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.rig.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.cargo.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A]/40 flex items-center gap-3 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="text-gray-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10 shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDB5A]/20 text-[#FFDB5A] border border-[#FFDB5A]/30 text-xs font-semibold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                Apex Heavy Fleet Logistics & e-POD
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Live Material Delivery Manifest
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Monitor fleet transport in real-time, generate electronic delivery notes (DNs), and archive signed Proof of Delivery (POD) slips with GC Structural PE stamps.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsNewDispatchModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Dispatch New Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Tabs */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search DN #, PO ref, driver, rig, destination..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(["All", "In Transit", "Delivered & Signed"] as const).map((filter) => {
              const count =
                filter === "All"
                  ? deliveries.length
                  : deliveries.filter((d) => d.status === filter).length;
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                      : "text-gray-700 hover:text-[#12223B]"
                  }`}
                >
                  <span className="relative z-10">
                    {filter} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Manifest Cards List */}
        <div className="space-y-6">
          {filteredDeliveries.map((manifest) => (
            <div
              key={manifest.id}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                      {manifest.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                      Ref: {manifest.poRef}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                        manifest.status === "In Transit"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }`}
                    >
                      {manifest.status}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    {manifest.project}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPodDelivery(manifest)}
                  className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs flex items-center gap-2 self-start lg:self-center"
                >
                  <FileText className="w-4 h-4 text-[#FFDB5A]" />
                  <span>View Signed POD Slip</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left 2 cols: Cargo & Logistics Specifications */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Cargo & Material Manifest
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-[#12223B]">
                      {manifest.cargo}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Total Quantity Loaded: <strong className="text-gray-800">{manifest.totalQuantity}</strong>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F6F6F6] text-xs">
                    <div>
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                        Heavy Transport Rig:
                      </p>
                      <p className="font-semibold text-[#12223B] flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-blue-600" />
                        {manifest.rig}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                        Assigned Driver:
                      </p>
                      <p className="font-semibold text-gray-800 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-gray-500" />
                        {manifest.driver}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                        Jobsite Destination:
                      </p>
                      <p className="font-semibold text-gray-800 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FFDB5A]" />
                        {manifest.destination}
                      </p>
                    </div>
                  </div>

                  {manifest.receiverSignOff && (
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        Certified Site Receiver Sign-Off: <strong className="font-semibold">{manifest.receiverSignOff}</strong>
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Col: Staging & Offload Photo */}
                <div className="space-y-3 lg:border-l lg:border-gray-100 lg:pl-6">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Staging & Offload Photo
                  </h4>
                  <div
                    onClick={() => setEnlargedPhoto(manifest.photoUrl)}
                    className="relative h-44 w-full rounded-xl overflow-hidden border border-gray-200 bg-black cursor-pointer group"
                  >
                    <Image
                      src={manifest.photoUrl}
                      alt="Delivery Staging"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600 font-medium pt-1">
                    <p>Dispatched: <strong className="text-gray-800">{manifest.dispatchedTime}</strong></p>
                    <p>ETA / Arrival: <strong className="text-[#12223B]">{manifest.arrivalTime}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: View Signed POD Slip */}
      {selectedPodDelivery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Electronic Proof of Delivery (e-POD)
                  </h3>
                  <p className="text-xs text-gray-500">{selectedPodDelivery.id} • Ref {selectedPodDelivery.poRef}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPodDelivery(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated POD Document Paper */}
            <div className="p-6 rounded-xl border border-gray-300 bg-[#FAFAFA] space-y-5 text-xs text-gray-800 font-sans shadow-inner">
              <div className="flex justify-between items-start border-b border-gray-200 pb-4">
                <div>
                  <h4 className="text-base font-bold text-[#12223B]">APEX HEAVY MATERIALS & INDUSTRIAL SUPPLY CO.</h4>
                  <p className="text-[11px] text-gray-500">Terminal Dispatch Gate 4 • Los Angeles, CA</p>
                  <p className="text-[11px] text-gray-500 font-mono">Vendor License: VND-APX-7719</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm font-bold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                    {selectedPodDelivery.id}
                  </span>
                  <p className="text-[11px] text-gray-500 mt-1">Status: {selectedPodDelivery.status}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase">Consigned Project:</p>
                  <p className="font-semibold text-gray-900">{selectedPodDelivery.project}</p>
                  <p className="text-gray-600">{selectedPodDelivery.destination}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase">Logistics Details:</p>
                  <p className="font-medium text-gray-900">Rig: {selectedPodDelivery.rig}</p>
                  <p className="text-gray-600">Driver: {selectedPodDelivery.driver}</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <div className="p-2.5 bg-gray-100 font-bold text-[11px] text-gray-700 flex justify-between">
                  <span>Cargo Manifest Description</span>
                  <span>Quantity</span>
                </div>
                <div className="p-3 text-xs flex justify-between font-medium">
                  <span>{selectedPodDelivery.cargo}</span>
                  <span className="font-bold text-[#12223B]">{selectedPodDelivery.totalQuantity}</span>
                </div>
              </div>

              {/* Signature / Stamp Section */}
              <div className="pt-2 border-t border-gray-200 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg border border-dashed border-gray-300 bg-white">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Driver Digital Signature</p>
                  <p className="font-serif italic text-base text-gray-800">{selectedPodDelivery.driver}</p>
                  <p className="text-[10px] text-gray-400">{selectedPodDelivery.dispatchedTime}</p>
                </div>

                <div className="p-3 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/50">
                  <p className="text-[10px] text-emerald-700 uppercase font-bold mb-1">Receiver PE Stamp</p>
                  <p className="font-semibold text-xs text-emerald-900">
                    {selectedPodDelivery.receiverSignOff || "Pending Site Receiver Sign-off on Arrival"}
                  </p>
                  <p className="text-[10px] text-emerald-600 mt-1">Verified Structural Materials</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => {
                  setToastMessage("Downloading e-POD PDF slip with official signature stamp...");
                  setTimeout(() => setToastMessage(""), 3000);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF Slip
              </button>

              <button
                type="button"
                onClick={() => setSelectedPodDelivery(null)}
                className="px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
              >
                Close Manifest
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Dispatch New Delivery */}
      {isNewDispatchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Dispatch Heavy Fleet Delivery
                  </h3>
                  <p className="text-xs text-gray-500">Generate electronic manifest and tracking</p>
                </div>
              </div>
              <button onClick={() => setIsNewDispatchModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateDispatch} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    PO Reference
                  </label>
                  <input
                    type="text"
                    required
                    value={newPoRef}
                    onChange={(e) => setNewPoRef(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Target Project
                  </label>
                  <input
                    type="text"
                    required
                    value={newProject}
                    onChange={(e) => setNewProject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Cargo Description
                </label>
                <input
                  type="text"
                  required
                  value={newCargo}
                  onChange={(e) => setNewCargo(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Total Quantity
                  </label>
                  <input
                    type="text"
                    required
                    value={newTotalQuantity}
                    onChange={(e) => setNewTotalQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Assigned Driver
                  </label>
                  <input
                    type="text"
                    required
                    value={newDriver}
                    onChange={(e) => setNewDriver(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Heavy Transport Rig
                </label>
                <select
                  value={newRig}
                  onChange={(e) => setNewRig(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  <option value="Freightliner M2-106 (Unit #44)">Freightliner M2-106 (Unit #44)</option>
                  <option value="Mack Granite 10-Yard Mixer (Unit #18)">Mack Granite 10-Yard Mixer (Unit #18)</option>
                  <option value="Kenworth T880 Semi (Unit #09)">Kenworth T880 Semi (Unit #09)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Jobsite Destination
                </label>
                <input
                  type="text"
                  required
                  value={newDestination}
                  onChange={(e) => setNewDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewDispatchModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Manifest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Enlarged Photo */}
      {enlargedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div
            className="bg-[#12223B] rounded-2xl max-w-3xl w-full p-4 overflow-hidden border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
              <span className="text-xs sm:text-sm font-semibold text-[#FFDB5A] flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Staging & Offload Verification Photo
              </span>
              <button onClick={() => setEnlargedPhoto(null)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-96 w-full rounded-xl overflow-hidden my-3 border border-white/10">
              <Image src={enlargedPhoto} alt="Staging Verification" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
