"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Plus,
  Search,
  Eye,
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  X,
  Layers,
  Calendar,
  Lock,
} from "lucide-react";

interface FieldDrawing {
  sheetNo: string;
  revision: string;
  discipline: "Architectural" | "Structural" | "Electrical" | "Mechanical" | "Plumbing";
  title: string;
  certifiedBy: string;
  uploaded: string;
  size: string;
  format: "PDF" | "DWG";
  sha256: string;
}

const DRAWINGS_DATA: FieldDrawing[] = [
  {
    sheetNo: "A1.1",
    revision: "Rev 4 • Stamped Jul 12",
    discipline: "Architectural",
    title: "Ground Floor Architectural Plan & Glazing Schedules",
    certifiedBy: "Studio ArchDesign (AIA)",
    uploaded: "Jul 12, 2026",
    size: "24.8 MB",
    format: "PDF",
    sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  },
  {
    sheetNo: "S1.2",
    revision: "Rev 3 • Stamped Jun 20",
    discipline: "Structural",
    title: "Foundation Slab Rebar Layout & Monolithic Footing Details",
    certifiedBy: "Apex Structural Engineers (SE)",
    uploaded: "Jun 20, 2026",
    size: "18.5 MB",
    format: "PDF",
    sha256: "a1c43f72159828e83b4b574a4ff1d713c7bb6c2438686663f74ef959ef99fb82",
  },
  {
    sheetNo: "S2.4",
    revision: "Rev 2 • Stamped Jun 28",
    discipline: "Structural",
    title: "Cantilever Roofline Steel Framing & Moment Frame Details",
    certifiedBy: "Apex Structural Engineers (SE)",
    uploaded: "Jun 28, 2026",
    size: "14.2 MB",
    format: "DWG",
    sha256: "c530b809fa8fb0f14d9e03d4bc225b6a3b2f5d9f04ddb59f37c35a60e0a575a7",
  },
  {
    sheetNo: "E1.1",
    revision: "Rev 3 • Stamped Aug 15",
    discipline: "Electrical",
    title: "Electrical Single-Line Diagram, Solar & Powerwall Integration",
    certifiedBy: "Vanguard MEP Engineers",
    uploaded: "Aug 15, 2026",
    size: "9.4 MB",
    format: "PDF",
    sha256: "9823fbc0951a892dfd6665ba484914c62c26d83395c52c6769062e783689408e",
  },
  {
    sheetNo: "M1.2",
    revision: "Rev 2 • Stamped Aug 10",
    discipline: "Mechanical",
    title: "HVAC VRF Multi-Zone Ductwork & Energy Recovery Ventilator",
    certifiedBy: "Vanguard MEP Engineers",
    uploaded: "Aug 10, 2026",
    size: "11.6 MB",
    format: "PDF",
    sha256: "72a44b931de7ef10bf23bcda9a57f59ea061488c9cfc6d48227b686259021e84",
  },
  {
    sheetNo: "P1.1",
    revision: "Rev 1 • Stamped May 20",
    discipline: "Plumbing",
    title: "Domestic Plumbing Manifold & Tankless Recirculation Loop",
    certifiedBy: "Bay Area Plumbing Consultants",
    uploaded: "May 20, 2026",
    size: "7.8 MB",
    format: "PDF",
    sha256: "4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a",
  },
];

const DISCIPLINES = [
  "All",
  "Architectural",
  "Structural",
  "Electrical",
  "Mechanical",
  "Plumbing",
] as const;

export default function EngineerFieldBlueprintsPage() {
  const [drawings, setDrawings] = useState<FieldDrawing[]>(DRAWINGS_DATA);
  const [activeDiscipline, setActiveDiscipline] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDrawing, setSelectedDrawing] = useState<FieldDrawing | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Drawing Modal Form State
  const [newSheet, setNewSheet] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDisc, setNewDisc] = useState<FieldDrawing["discipline"]>("Architectural");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDownload = (doc: FieldDrawing) => {
    showToast(`Downloading certified drawing ${doc.sheetNo} (${doc.size})...`);
  };

  const handleUploadDrawing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newDoc: FieldDrawing = {
      sheetNo: newSheet.trim() || `D${drawings.length + 1}.0`,
      revision: "Rev 1 • Stamped Today",
      discipline: newDisc,
      title: newTitle.trim(),
      certifiedBy: "Sophia Bennett (CA-PE #98421)",
      uploaded: "Today, Oct 06",
      size: "12.4 MB",
      format: "PDF",
      sha256: "f83b1a208c9098fbac241d7718e219ba488d04f128bc2319087ea937ac192801",
    };

    setDrawings([newDoc, ...drawings]);
    setIsModalOpen(false);
    setNewSheet("");
    setNewTitle("");
    showToast(`Drawing sheet ${newDoc.sheetNo} uploaded and synced.`);
  };

  const filteredDrawings = drawings.filter((doc) => {
    const matchesDisc =
      activeDiscipline === "All" || doc.discipline === activeDiscipline;
    const matchesQuery =
      doc.sheetNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.certifiedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDisc && matchesQuery;
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
            <p className="text-xs font-semibold text-[#FFDB5A]">Field CAD Archive</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFDB5A]/20 text-[#FFDB5A] border border-[#FFDB5A]/30 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>PE Stamped &amp; IFC (Issued For Construction)</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Modern Family Villa — Full Drawing Set
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Access certified high-resolution PDF and CAD drawings. All field markups, RFI clarifications, and structural dimension changes are synced with project headquarters in real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Upload Stamped Drawing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search sheet #, title, discipline..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
          {DISCIPLINES.map((disc) => {
            const isActive = activeDiscipline === disc;
            return (
              <button
                key={disc}
                type="button"
                onClick={() => setActiveDiscipline(disc)}
                className={`relative px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer group ${
                  isActive
                    ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                    : "text-gray-700 hover:text-[#12223B]"
                }`}
              >
                {!isActive && (
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
                )}
                <span className="relative z-10">{disc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Drawings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredDrawings.map((doc) => (
          <div
            key={doc.sheetNo}
            className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden flex flex-col justify-between space-y-4 shadow-xs"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-[#12223B] text-white text-xs font-mono font-semibold">
                  {doc.sheetNo}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                  {doc.discipline}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-gray-400 font-semibold block mb-0.5">
                  {doc.revision}
                </span>
                <h4 className="font-semibold text-base text-[#12223B] group-hover:text-[#007EFF] transition-colors line-clamp-2 leading-snug">
                  {doc.title}
                </h4>
              </div>

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
                  • {doc.size} ({doc.format})
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedDrawing(doc)}
                className="px-3 py-1.5 rounded-lg bg-[#F6F6F6] hover:bg-gray-200 text-xs font-semibold text-[#12223B] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#007EFF]" />
                <span>Inspect CAD / PDF</span>
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

      {filteredDrawings.length === 0 && (
        <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 space-y-3">
          <FileText className="w-12 h-12 text-gray-300 mx-auto" />
          <h4 className="text-base font-semibold text-[#12223B]">
            No Drawings Found
          </h4>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            No drawing sheets matched your search or discipline filter.
          </p>
        </div>
      )}

      {/* Blueprint Drawing CAD Viewer Modal */}
      {selectedDrawing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedDrawing(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-[#12223B] text-[#FFDB5A] font-mono font-bold text-xs">
                {selectedDrawing.sheetNo}
              </span>
              <div>
                <span className="text-[11px] font-semibold text-[#007EFF] uppercase tracking-wider block">
                  {selectedDrawing.discipline} Discipline • {selectedDrawing.format}
                </span>
                <h3 className="text-lg font-bold text-[#12223B] leading-tight">
                  {selectedDrawing.title}
                </h3>
              </div>
            </div>

            {/* Simulated Blueprint Graphic Canvas */}
            <div className="h-60 rounded-xl bg-[#0B1A30] border border-gray-300 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10 space-y-2">
                <Compass className="w-12 h-12 text-[#FFDB5A] mx-auto opacity-90 animate-pulse" />
                <p className="text-white font-semibold text-sm">
                  CAD Vector Overlay &amp; Dimension Precision
                </p>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PE Stamp Verified — Ready for Field Construction</span>
                </div>
              </div>

              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-gray-400">
                PRJ-901 • IFC LEVEL 4
              </div>
            </div>

            {/* Drawing Metadata Details */}
            <div className="p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Certifying Authority:</span>
                <strong className="text-[#12223B] font-semibold">
                  {selectedDrawing.certifiedBy}
                </strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Revision State:</span>
                <strong className="text-[#12223B] font-semibold">
                  {selectedDrawing.revision}
                </strong>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200/60">
                <span className="text-gray-500">Package File Size:</span>
                <strong className="text-[#12223B] font-semibold">
                  {selectedDrawing.size}
                </strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">SHA-256 Checksum:</span>
                <span className="text-gray-700 font-mono text-[11px] truncate max-w-[280px]">
                  {selectedDrawing.sha256}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedDrawing(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
              >
                Close Viewer
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(selectedDrawing);
                  setSelectedDrawing(null);
                }}
                className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#FFDB5A]" />
                <span>Download Certified Original</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Upload Stamped Drawing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 space-y-5 border border-gray-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FFDB5A] bg-[#12223B] px-2.5 py-0.5 rounded-md inline-block">
                Field Blueprint Upload
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Upload Stamped Drawing Sheet
              </h3>
              <p className="text-xs text-gray-500">
                Upload revised architectural or MEP drawing with PE digital seal for cloud distribution.
              </p>
            </div>

            <form onSubmit={handleUploadDrawing} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Sheet Number
                  </label>
                  <input
                    type="text"
                    required
                    value={newSheet}
                    onChange={(e) => setNewSheet(e.target.value)}
                    placeholder="e.g. A2.1"
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Discipline
                  </label>
                  <select
                    value={newDisc}
                    onChange={(e) => setNewDisc(e.target.value as any)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none bg-white"
                  >
                    <option value="Architectural">Architectural</option>
                    <option value="Structural">Structural</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Plumbing">Plumbing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Sheet Title &amp; Description
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Second Floor Reflected Ceiling Plan & Lighting Grid"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Upload &amp; Distribute</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
