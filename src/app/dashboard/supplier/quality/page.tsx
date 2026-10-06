"use client";

import React, { useState } from "react";
import {
  Award,
  Plus,
  Search,
  CheckCircle2,
  Calendar,
  FileText,
  Download,
  X,
  Upload,
  Send,
  ShieldCheck,
  Building2,
  Layers,
  FlaskConical,
} from "lucide-react";

interface MtrCertificate {
  id: string;
  heatLot: string;
  status: "Certified Pass" | "Under Lab Testing";
  title: string;
  properties: string;
  lab: string;
  compliance: string;
  engineer: string;
  issuedDate: string;
  fileSize: string;
  chemistry?: { element: string; actual: string; required: string }[];
}

const initialMtrs: MtrCertificate[] = [
  {
    id: "MTR-STL-9948",
    heatLot: "LOT-8812-A",
    status: "Certified Pass",
    title: "ASTM A615 Grade 60 #5 Rebar (Heat #H-44912)",
    properties: "Yield: 67,400 PSI • Tensile: 94,200 PSI • Elongation: 12.8%",
    lab: "Twining Testing Laboratories (AASHTO Certified)",
    compliance: "ASTM A615 / Caltrans Met Section 52",
    engineer: "Dr. Arthur Vance, PE (Materials Engineering)",
    issuedDate: "Oct 04, 2026",
    fileSize: "2.4 MB (PDF)",
    chemistry: [
      { element: "Carbon (C)", actual: "0.28%", required: "≤ 0.33%" },
      { element: "Manganese (Mn)", actual: "1.22%", required: "≤ 1.50%" },
      { element: "Phosphorus (P)", actual: "0.024%", required: "≤ 0.040%" },
      { element: "Sulfur (S)", actual: "0.018%", required: "≤ 0.050%" },
    ],
  },
  {
    id: "MTR-CNC-4000-09",
    heatLot: "BATCH-RM-9900",
    status: "Certified Pass",
    title: "4000 PSI Ready-Mix Batch Sample (7-Day & 28-Day Break)",
    properties: "7-Day Break: 3,420 PSI • 28-Day Projected: 4,680 PSI • Slump: 4.8 in",
    lab: "Smith-Emery QA Materials Testing",
    compliance: "ASTM C39 / ASTM C143 Slump Test",
    engineer: "Elena Rostova (Senior QA Metallurgist)",
    issuedDate: "Oct 02, 2026",
    fileSize: "1.8 MB (PDF)",
  },
  {
    id: "MTR-OAK-MC-101",
    heatLot: "LOT-OAK-402",
    status: "Certified Pass",
    title: "European White Oak Moisture Content & Acclimatization",
    properties: "Core Moisture: 8.2% (Permissible: 6-9%) • Zero Cupping / Twist",
    lab: "Apex In-House Kiln Quality Inspection",
    compliance: "NWFA / AWI Section 06 20 00",
    engineer: "Viktor Petrov (Accounts Director)",
    issuedDate: "Sep 29, 2026",
    fileSize: "1.2 MB (PDF)",
  },
];

export default function SupplierQualityPage() {
  const [mtrs, setMtrs] = useState<MtrCertificate[]>(initialMtrs);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Certified Pass" | "Under Lab Testing">("All");

  // Modals
  const [selectedMtr, setSelectedMtr] = useState<MtrCertificate | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Upload Form
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadHeatLot, setUploadHeatLot] = useState("");
  const [uploadLab, setUploadLab] = useState("Twining Testing Laboratories (AASHTO Certified)");
  const [uploadStandard, setUploadStandard] = useState("ASTM A615 / Caltrans Met Section 52");
  const [uploadProperties, setUploadProperties] = useState("");

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCert: MtrCertificate = {
      id: `MTR-APX-${Math.floor(1000 + Math.random() * 9000)}`,
      heatLot: uploadHeatLot || "LOT-NEW-884",
      status: "Certified Pass",
      title: uploadTitle || "Mill Test Report & Material Certificate",
      properties: uploadProperties || "Physical properties compliant with standard specifications.",
      lab: uploadLab,
      compliance: uploadStandard,
      engineer: "Viktor Petrov, Accounts Director",
      issuedDate: "Today, Oct 06, 2026",
      fileSize: "1.9 MB (PDF)",
    };

    setMtrs([newCert, ...mtrs]);
    setIsUploadModalOpen(false);
    setToastMessage(`Certificate ${newCert.id} published to GC Quality Vault.`);
    setUploadTitle("");
    setUploadHeatLot("");
    setUploadProperties("");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredMtrs = mtrs.filter((m) => {
    const matchesFilter =
      activeFilter === "All" || m.status === activeFilter;
    const matchesSearch =
      m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.heatLot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.lab.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.properties.toLowerCase().includes(searchQuery.toLowerCase());

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
                <Award className="w-3.5 h-3.5" />
                ASTM & Caltrans Certified Quality Vault
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Materials Quality & MTR Archive
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Publish certified heat numbers, batch break records, and moisture content reports. All test certificates are verified by accredited third-party laboratories.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Upload Lab Test Report
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
              placeholder="Search MTR #, heat lot, material, lab..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(["All", "Certified Pass", "Under Lab Testing"] as const).map((filter) => {
              const count =
                filter === "All"
                  ? mtrs.length
                  : mtrs.filter((m) => m.status === filter).length;
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

        {/* MTR Cards List */}
        <div className="space-y-6">
          {filteredMtrs.map((mtr) => (
            <div
              key={mtr.id}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                      {mtr.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                      Heat / Lot: {mtr.heatLot}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {mtr.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] tracking-tight">
                    {mtr.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMtr(mtr)}
                  className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs flex items-center gap-2 self-start lg:self-center"
                >
                  <FileText className="w-4 h-4 text-[#FFDB5A]" />
                  <span>View Full MTR Certificate</span>
                </button>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Key Tested Physical / Chemical Properties
                    </h4>
                    <p className="text-sm sm:text-base font-semibold text-[#12223B]">
                      {mtr.properties}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F6F6F6] space-y-2 text-xs">
                    <div>
                      <span className="text-gray-400 font-semibold uppercase tracking-wider">
                        Testing Laboratory:
                      </span>
                      <p className="font-semibold text-gray-800 mt-0.5">{mtr.lab}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 font-semibold uppercase tracking-wider">
                        Standard Compliance:
                      </span>
                      <p className="font-semibold text-gray-800 mt-0.5">{mtr.compliance}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 lg:border-l lg:border-gray-100 lg:pl-6 text-xs text-gray-600 font-medium">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Authorized Sign-Off
                  </h4>
                  <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5">
                    <p className="text-gray-500">Certifying Engineer / Metallurgist:</p>
                    <p className="font-semibold text-[#12223B]">{mtr.engineer}</p>
                    <div className="pt-2 border-t border-gray-200 flex justify-between text-[11px] text-gray-500">
                      <span>Issued: {mtr.issuedDate}</span>
                      <span className="font-mono">{mtr.fileSize}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: View Full MTR Certificate */}
      {selectedMtr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Certified Mill Test Report
                  </h3>
                  <p className="text-xs text-gray-500">{selectedMtr.id} • {selectedMtr.heatLot}</p>
                </div>
              </div>
              <button onClick={() => setSelectedMtr(null)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated MTR Document */}
            <div className="p-6 rounded-xl border border-gray-300 bg-[#FAFAFA] space-y-5 text-xs text-gray-800 font-sans shadow-inner">
              <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                <div>
                  <h4 className="font-bold text-[#12223B] text-sm">ACCREDITED MATERIALS METALLURGICAL TEST REPORT</h4>
                  <p className="text-[11px] text-gray-500">{selectedMtr.lab}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    CERTIFIED PASS
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1">Date: {selectedMtr.issuedDate}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-[11px]">Material Title & Grade:</p>
                <p className="font-bold text-sm text-[#12223B]">{selectedMtr.title}</p>
                <p className="text-gray-600 mt-0.5">Governing Standard: {selectedMtr.compliance}</p>
              </div>

              {selectedMtr.chemistry && (
                <div>
                  <p className="font-bold text-gray-700 mb-2">Chemical Composition Analysis (% by Weight)</p>
                  <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden bg-white text-xs">
                    <thead className="bg-gray-100 font-semibold text-gray-700">
                      <tr>
                        <th className="p-2.5">Element</th>
                        <th className="p-2.5">Tested Value</th>
                        <th className="p-2.5">Required Tolerance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedMtr.chemistry.map((item, idx) => (
                        <tr key={idx}>
                          <td className="p-2.5 font-medium">{item.element}</td>
                          <td className="p-2.5 font-mono text-emerald-700 font-bold">{item.actual}</td>
                          <td className="p-2.5 text-gray-500">{item.required}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="p-3 bg-white rounded-lg border border-gray-200 space-y-1">
                <p className="font-bold text-gray-700">Tensile & Physical Strength Analysis</p>
                <p className="font-mono text-xs text-gray-900">{selectedMtr.properties}</p>
              </div>

              <div className="pt-2 border-t border-gray-200 flex justify-between items-center text-[11px] text-gray-500">
                <span>Certifying Engineer: <strong className="text-gray-800">{selectedMtr.engineer}</strong></span>
                <span className="font-mono">Digital Hash: 0x9948F..B2</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => {
                  setToastMessage("Downloading official laboratory MTR PDF certificate...");
                  setTimeout(() => setToastMessage(""), 3000);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download MTR PDF
              </button>

              <button
                type="button"
                onClick={() => setSelectedMtr(null)}
                className="px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Upload Lab Test Report */}
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
                    Upload Mill Test Certificate
                  </h3>
                  <p className="text-xs text-gray-500">Submit third-party laboratory verification</p>
                </div>
              </div>
              <button onClick={() => setIsUploadModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Material Title & Heat Spec
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ASTM A706 Seismic Grade Rebar (Heat #H-4991)"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Heat / Lot Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="LOT-8812-B"
                    value={uploadHeatLot}
                    onChange={(e) => setUploadHeatLot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Governing Standard
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadStandard}
                    onChange={(e) => setUploadStandard(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Accredited Testing Laboratory
                </label>
                <input
                  type="text"
                  required
                  value={uploadLab}
                  onChange={(e) => setUploadLab(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Tested Yield / Tensile Strength / Slump / Breaks
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Yield: 68,000 PSI • Tensile: 95,000 PSI • Elongation: 13.2%..."
                  value={uploadProperties}
                  onChange={(e) => setUploadProperties(e.target.value)}
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
                  Publish Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
