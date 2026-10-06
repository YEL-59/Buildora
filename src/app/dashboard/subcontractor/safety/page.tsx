"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Plus,
  FileCheck,
  Search,
  CheckCircle2,
  Calendar,
  Download,
  X,
  Upload,
  Send,
  AlertTriangle,
} from "lucide-react";

interface SafetyDoc {
  id: string;
  category: "Insurance (COI)" | "Worker OSHA Card" | "JHA Protocol" | "Equipment Cert";
  docNumber: string;
  title: string;
  status: "Compliant" | "Action Required" | "Pending Review";
  description: string;
  holder: string;
  issued: string;
  expires: string;
}

const initialDocs: SafetyDoc[] = [
  {
    id: "doc-1",
    category: "Insurance (COI)",
    docNumber: "POL-99482-US",
    title: "Commercial General Liability & Workers Comp Policy (COI)",
    status: "Compliant",
    description: "$2,000,000 per occurrence / $4,000,000 aggregate with Builtex named as additional insured.",
    holder: "Apex Millwork LLC (Insured: Travelers Casualty)",
    issued: "Nov 15, 2025",
    expires: "Nov 15, 2027",
  },
  {
    id: "doc-2",
    category: "Worker OSHA Card",
    docNumber: "OSHA-30-CA-8819",
    title: "Lead Foreman OSHA 30-Hour Construction Safety Card",
    status: "Compliant",
    description: "Certified in scaffolding, fall arrest harnesses, and hazardous material management.",
    holder: "Marcus Vance",
    issued: "Jan 10, 2024",
    expires: "Jan 10, 2029",
  },
  {
    id: "doc-3",
    category: "JHA Protocol",
    docNumber: "JHA-2026-1005",
    title: "Daily Jobsite Hazard Analysis (JHA) — Saws & Dust Extraction",
    status: "Compliant",
    description: "HEPA dust extractor seals inspected; all team members signed off on N95 / P100 respirator use.",
    holder: "Site Crew #4 (8 Workers)",
    issued: "Today, Oct 05, 2026",
    expires: "Today (Valid Shift)",
  },
  {
    id: "doc-4",
    category: "Equipment Cert",
    docNumber: "MEWP-3A-7712",
    title: "Scissor Lift Operator Annual Competency Certificate",
    status: "Compliant",
    description: "Annual inspection and battery tethering verification completed.",
    holder: "Dmitri Volkov (Journeyman)",
    issued: "Dec 01, 2025",
    expires: "Dec 01, 2028",
  },
];

const initialJhaChecks = [
  { id: "c1", text: "100% Personal Protective Equipment (Hardhats, High-Vis, ANSI Z87 Eye Wear)", checked: true },
  { id: "c2", text: "Fall protection harnesses inspected and tethered on 19ft scissor lift", checked: true },
  { id: "c3", text: "Festool HEPA dust extraction system operational on all miter & plunge saws", checked: true },
  { id: "c4", text: "GFCI electrical cords inspected with zero cuts or damaged insulation", checked: true },
  { id: "c5", text: "Jobsite first-aid trauma kit and eyewash bottles fully stocked in trade trailer", checked: true },
];

export default function SubcontractorSafetyPage() {
  const [docs, setDocs] = useState<SafetyDoc[]>(initialDocs);
  const [jhaChecks, setJhaChecks] = useState(initialJhaChecks);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Modals
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isJhaModalOpen, setIsJhaModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Upload Form
  const [uploadCategory, setUploadCategory] = useState<SafetyDoc["category"]>("Worker OSHA Card");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadDocNum, setUploadDocNum] = useState("");
  const [uploadHolder, setUploadHolder] = useState("");
  const [uploadExpiry, setUploadExpiry] = useState("2028-10-15");
  const [uploadDesc, setUploadDesc] = useState("");

  const toggleCheck = (id: string) => {
    setJhaChecks((prev) =>
      prev.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc: SafetyDoc = {
      id: `doc-${docs.length + 1}`,
      category: uploadCategory,
      docNumber: uploadDocNum || `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
      title: uploadTitle || "Trade Safety Certification",
      status: "Compliant",
      description: uploadDesc || "Verified and recorded in GC compliance repository.",
      holder: uploadHolder || "Apex Millwork Team",
      issued: "Oct 06, 2026",
      expires: uploadExpiry,
    };

    setDocs([newDoc, ...docs]);
    setIsUploadModalOpen(false);
    setToastMessage(`Credential "${newDoc.title}" uploaded and verified with Builtex Safety Officers.`);
    setUploadTitle("");
    setUploadDocNum("");
    setUploadHolder("");
    setUploadDesc("");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const handleCertifyJha = () => {
    const verified = jhaChecks.filter((c) => c.checked).length;
    if (verified < jhaChecks.length) {
      setToastMessage("Please verify all 5 pre-shift safety checkpoints before certifying JHA.");
    } else {
      setToastMessage("Today's Shift JHA Pre-Inspection Protocol successfully certified and logged to GC Safety Portal.");
    }
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredDocs = docs.filter((doc) => {
    const matchesFilter =
      activeFilter === "All" || doc.category === activeFilter;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.docNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.holder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const verifiedChecksCount = jhaChecks.filter((c) => c.checked).length;

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Jobsite Safety Compliance Certified
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Millwork Safety & Insurance Vault
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Maintain active Certificates of Insurance, worker OSHA cards, and daily hazard analyses. Compliance status is synced in real-time with Builtex Safety Officers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Upload Certificate / Card
              </button>
              <button
                type="button"
                onClick={() => setIsJhaModalOpen(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer border border-white/20"
              >
                <FileCheck className="w-4 h-4 text-[#FFDB5A]" />
                Submit JHA Audit
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search holder, document #, category, notes..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(
              [
                "All",
                "Insurance (COI)",
                "Worker OSHA Card",
                "JHA Protocol",
                "Equipment Cert",
              ] as const
            ).map((cat) => {
              const count =
                cat === "All"
                  ? docs.length
                  : docs.filter((d) => d.category === cat).length;
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer ${
                    isSelected
                      ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                      : "text-gray-700 hover:text-[#12223B]"
                  }`}
                >
                  <span className="relative z-10">
                    {cat} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column: Credential Cards (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl border border-gray-200/80 p-6 sm:p-7 hover:border-[#FFDB5A] transition-all duration-300 space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {doc.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-gray-500">
                        {doc.docNumber}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#12223B]">
                      {doc.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Compliant
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {doc.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600 font-medium">
                  <span>
                    Holder: <strong className="text-gray-900 font-semibold">{doc.holder}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    Issued: {doc.issued} • Expires:{" "}
                    <strong className="text-gray-900 font-semibold">{doc.expires}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: JHA Pre-Inspection & Insurance Vault */}
          <div className="space-y-6">
            {/* Daily JHA Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-[#12223B]">
                    Daily Jobsite Hazard Analysis (JHA)
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">Shift Pre-Inspection Protocol</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
                  {verifiedChecksCount} / {jhaChecks.length} Verified
                </span>
              </div>

              <div className="space-y-2.5">
                {jhaChecks.map((check) => (
                  <div
                    key={check.id}
                    onClick={() => toggleCheck(check.id)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center gap-3 ${
                      check.checked
                        ? "bg-emerald-50/60 border-emerald-200 text-gray-700"
                        : "bg-[#F9F9F9] border-gray-200 hover:border-[#FFDB5A] text-[#12223B]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                        check.checked
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {check.checked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-snug">
                      {check.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCertifyJha}
                  className="w-full py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certify Shift JHA</span>
                </button>
              </div>
            </div>

            {/* COI Download Box */}
            <div className="bg-[#12223B] text-white p-6 rounded-xl border border-white/10 space-y-3 text-xs shadow-lg">
              <div className="flex items-center gap-2 font-semibold text-[#FFDB5A]">
                <ShieldCheck className="w-4 h-4" />
                <span>Certificate of Insurance (COI)</span>
              </div>
              <p className="text-gray-300 leading-relaxed font-medium">
                Insurer: Travelers Casualty & Surety Co. Policy #POL-99482-US. Primary & Non-Contributory endorsement active.
              </p>
              <button
                type="button"
                onClick={() => {
                  setToastMessage("Downloading Certificate of Insurance (COI) PDF...");
                  setTimeout(() => setToastMessage(""), 3000);
                }}
                className="w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#FFDB5A]" />
                <span>Download COI Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Upload Certificate / Card */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Upload Safety Credential
                  </h3>
                  <p className="text-xs text-gray-500">Sync with Builtex Safety Officers</p>
                </div>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Document Category
                </label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value as SafetyDoc["category"])}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  <option value="Worker OSHA Card">Worker OSHA Card</option>
                  <option value="Insurance (COI)">Insurance (COI)</option>
                  <option value="Equipment Cert">Equipment Cert</option>
                  <option value="JHA Protocol">JHA Protocol</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Document Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Journeyman OSHA 10 Construction Safety Card"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Document # / Policy ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. OSHA-10-88421"
                    value={uploadDocNum}
                    onChange={(e) => setUploadDocNum(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Holder Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Jenkins"
                    value={uploadHolder}
                    onChange={(e) => setUploadHolder(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Expiration Date
                </label>
                <input
                  type="date"
                  required
                  value={uploadExpiry}
                  onChange={(e) => setUploadExpiry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Scope / Coverage Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Notes on endorsements, certified equipment types, or safety scope..."
                  value={uploadDesc}
                  onChange={(e) => setUploadDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Save Credential
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Submit JHA Audit */}
      {isJhaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Submit Shift JHA Hazard Audit
                  </h3>
                  <p className="text-xs text-gray-500">OSHA 1926 Trade Hazard Mitigation Report</p>
                </div>
              </div>
              <button
                onClick={() => setIsJhaModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsJhaModalOpen(false);
                setToastMessage("Shift JHA Hazard Audit submitted to GC Safety Management.");
                setTimeout(() => setToastMessage(""), 5000);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Trade Foreman / Auditor
                </label>
                <input
                  type="text"
                  defaultValue="Marcus Vance (OSHA-30 Certified)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  High Risk Activities Today
                </label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center gap-2 text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    Overhead ceiling work & scissor lift maneuvering
                  </label>
                  <label className="flex items-center gap-2 text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    Silica / fine wood dust generation with plunge saws
                  </label>
                  <label className="flex items-center gap-2 text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    Heavy lumber unboxing and two-worker lifts
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Mitigation Controls Verified
                </label>
                <textarea
                  rows={2}
                  defaultValue="Double lanyard fall arrest connected; HEPA M-Class extractors calibrated; all workers wearing ANSI hardhats and high-vis vests."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsJhaModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit Audit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
