"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Eye,
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  Calendar,
  Lock,
} from "lucide-react";

interface VaultDocument {
  id: string;
  badge: "PDF" | "DWG";
  category: "Architectural" | "Structural" | "Permit" | "Contract" | "Warranty";
  title: string;
  certifiedBy: string;
  uploaded: string;
  size: string;
  sha256: string;
}

const DOCUMENTS_DATA: VaultDocument[] = [
  {
    id: "DOC-01",
    badge: "PDF",
    category: "Architectural",
    title: "Architectural Blueprint Set - Complete Revisions (A1-A12)",
    certifiedBy: "Studio ArchDesign",
    uploaded: "Jul 12, 2026",
    size: "24.8 MB",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    id: "DOC-02",
    badge: "PDF",
    category: "Structural",
    title: "Structural Calculations & Foundation Load Specs",
    certifiedBy: "Apex Structural Engineers",
    uploaded: "Jun 20, 2026",
    size: "8.2 MB",
    sha256: "a1c43f72159828e83b4b574a4ff1d713c7bb6c2438686663f74ef959ef99fb82",
  },
  {
    id: "DOC-03",
    badge: "PDF",
    category: "Permit",
    title: "City Building Permit #BP-2026-8891-Oakridge",
    certifiedBy: "Department of City Planning",
    uploaded: "May 28, 2026",
    size: "2.1 MB",
    sha256: "c530b809fa8fb0f14d9e03d4bc225b6a3b2f5d9f04ddb59f37c35a60e0a575a7",
  },
  {
    id: "DOC-04",
    badge: "PDF",
    category: "Contract",
    title: "Master Construction Agreement & Milestone Schedule",
    certifiedBy: "Builtex Legal",
    uploaded: "May 15, 2026",
    size: "4.5 MB",
    sha256: "9823fbc0951a892dfd6665ba484914c62c26d83395c52c6769062e783689408e",
  },
  {
    id: "DOC-05",
    badge: "PDF",
    category: "Warranty",
    title: "10-Year Structural & Waterproofing Warranty Certificate",
    certifiedBy: "Builtex Assurance Group",
    uploaded: "Oct 01, 2026",
    size: "1.4 MB",
    sha256: "72a44b931de7ef10bf23bcda9a57f59ea061488c9cfc6d48227b686259021e84",
  },
  {
    id: "DOC-06",
    badge: "DWG",
    category: "Structural",
    title: "MEP Rough-In CAD Schematics (Electrical & HVAC)",
    certifiedBy: "Vanguard Engineering",
    uploaded: "Aug 15, 2026",
    size: "18.5 MB",
    sha256: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
  },
];

const CATEGORIES = ["All", "Architectural", "Structural", "Permit", "Warranty", "Contract"] as const;

export default function ClientDocumentsVaultPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<VaultDocument | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownload = (doc: VaultDocument) => {
    showToast(`Downloading "${doc.title}" (${doc.size})...`);
  };

  const filteredDocs = DOCUMENTS_DATA.filter((doc) => {
    const matchesCategory =
      activeCategory === "All" || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.certifiedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-[#FFDB5A]/20 text-[#FFDB5A] flex items-center justify-center flex-shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Vault Download</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-1 rounded-full inline-block">
              Secure Document Vault
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Project Blueprints &amp; Permits
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              All certified construction documents and permits with permanent cloud archiving.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">Vault Files</span>
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#FFDB5A] mt-0.5">
                {DOCUMENTS_DATA.length} Docs
              </h4>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 text-center">
              <span className="text-xs text-gray-300 uppercase font-semibold">Encryption</span>
              <h4 className="text-2xl sm:text-3xl font-semibold text-emerald-400 mt-0.5">
                256-Bit
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Category Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search blueprints, permits, warranty..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer group ${
                  isActive
                    ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                    : "text-gray-700 hover:text-[#12223B]"
                }`}
              >
                {!isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-[#12223B] text-white text-xs font-mono font-semibold">
                  {doc.badge}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  {doc.category}
                </span>
              </div>

              <h4 className="font-semibold text-base text-[#12223B] group-hover:text-[#007EFF] transition-colors line-clamp-2 leading-snug">
                {doc.title}
              </h4>

              <div className="space-y-1 text-xs text-gray-500">
                <p>
                  Certified By:{" "}
                  <strong className="font-semibold text-gray-800">
                    {doc.certifiedBy}
                  </strong>
                </p>
                <p>
                  Uploaded:{" "}
                  <strong className="font-semibold text-gray-800">
                    {doc.uploaded}
                  </strong>{" "}
                  • {doc.size}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedDoc(doc)}
                className="px-3 py-1.5 rounded-lg bg-[#F6F6F6] hover:bg-gray-200 text-xs font-semibold text-[#12223B] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#007EFF]" />
                <span>Preview</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload(doc)}
                className="px-3.5 py-1.5 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#FFDB5A]" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocs.length === 0 && (
        <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
          <FileText className="w-12 h-12 text-gray-300 mx-auto" />
          <h4 className="text-base font-semibold text-[#12223B]">
            No Documents Found
          </h4>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            No files matched your search or category filter. Try selecting "All" or altering your search keywords.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-lg bg-[#12223B] text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Document Preview Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-[#12223B] text-[#FFDB5A] font-mono font-bold text-xs">
                {selectedDoc.badge}
              </span>
              <div>
                <span className="text-[11px] font-semibold text-[#007EFF] uppercase tracking-wider block">
                  {selectedDoc.category} Document
                </span>
                <h3 className="text-lg font-bold text-[#12223B] leading-tight">
                  {selectedDoc.title}
                </h3>
              </div>
            </div>

            {/* Document Preview Blueprint Viewer Simulation */}
            <div className="h-56 rounded-xl bg-[#0F1E38] border border-gray-200 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Blueprint Grid Background */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 space-y-2">
                <FileText className="w-12 h-12 text-[#FFDB5A] mx-auto opacity-90" />
                <p className="text-white font-semibold text-sm">
                  Document Preview &amp; Certified Digital Copy
                </p>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Digitally Signed &amp; Seal Verified</span>
                </div>
              </div>

              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-gray-400">
                PRJ-901 • ARCHIVED
              </div>
            </div>

            {/* Metadata Table */}
            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Certified Authority:</span>
                <strong className="text-[#12223B] font-semibold">{selectedDoc.certifiedBy}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Upload Date:</span>
                <strong className="text-[#12223B] font-semibold">{selectedDoc.uploaded}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">File Package Size:</span>
                <strong className="text-[#12223B] font-semibold">{selectedDoc.size}</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">SHA-256 Hash:</span>
                <span className="text-gray-700 font-mono text-[11px] truncate max-w-[280px]">
                  {selectedDoc.sha256}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(selectedDoc);
                  setSelectedDoc(null);
                }}
                className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FFDB5A]" />
                <span>Download Original Document</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
