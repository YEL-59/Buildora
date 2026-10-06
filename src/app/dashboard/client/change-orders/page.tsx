"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  CheckCircle2,
  Clock,
  FileText,
  X,
  AlertCircle,
  Check,
  Calendar,
  DollarSign,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface VariationOrder {
  id: string;
  category: string;
  title: string;
  description: string;
  cost: number;
  scheduleImpact: string;
  originator: string;
  date: string;
  status: "Approved" | "Pending Client Approval" | "In Estimation" | "Declined";
}

const INITIAL_VARIATIONS: VariationOrder[] = [
  {
    id: "CO-01",
    category: "Kitchen & Interior",
    title: "Upgrade to Italian Calacatta Marble Kitchen Countertops",
    description:
      "Upgrade from standard quartz to imported Calacatta Gold waterfall edge slabs with mitered apron front.",
    cost: 8500,
    scheduleImpact: "+2 Work Days",
    originator: "Client",
    date: "Aug 10, 2026",
    status: "Approved",
  },
  {
    id: "CO-02",
    category: "Energy & Electrical",
    title: "Solar Roof Array & Tesla Powerwall 3 Battery Backup",
    description:
      "Installation of 12.4 kW concealed black-monocrystalline rooftop solar panels paired with 2x Tesla Powerwall 3 units.",
    cost: 18500,
    scheduleImpact: "0 Days (No Delay)",
    originator: "Engineer",
    date: "Sep 28, 2026",
    status: "Pending Client Approval",
  },
  {
    id: "CO-03",
    category: "Plumbing & HVAC",
    title: "Heated Flooring System in Master Bathroom",
    description:
      "Schluter DITRA-HEAT electric thermal cable grid beneath porcelain floor tiles with programmable Wi-Fi thermostat.",
    cost: 4200,
    scheduleImpact: "+1 Work Days",
    originator: "Client",
    date: "Oct 01, 2026",
    status: "In Estimation",
  },
  {
    id: "CO-04",
    category: "Exterior & Patio",
    title: "Motorized Louvered Pergola for Pool Patio",
    description:
      "Aluminum motorized waterproof louvered shade structure over the outdoor kitchen area.",
    cost: 1200,
    scheduleImpact: "+4 Work Days",
    originator: "Client",
    date: "Aug 02, 2026",
    status: "Declined",
  },
];

export default function ClientChangeOrdersPage() {
  const [variations, setVariations] = useState<VariationOrder[]>(INITIAL_VARIATIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New variation form state
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Interior Finishes");
  const [newDescription, setNewDescription] = useState("");
  const [newEstimatedCost, setNewEstimatedCost] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleApprove = (id: string) => {
    setVariations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
    showToast(`Change Order ${id} has been signed and officially approved.`);
  };

  const handleDecline = (id: string) => {
    setVariations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Declined" } : item
      )
    );
    showToast(`Change Order ${id} has been declined.`);
  };

  const handleCreateVariation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newId = `CO-0${variations.length + 1}`;
    const newOrder: VariationOrder = {
      id: newId,
      category: newCategory,
      title: newTitle.trim(),
      description: newDescription.trim() || "Custom scope item submitted by client.",
      cost: parseFloat(newEstimatedCost) || 0,
      scheduleImpact: "TBD by Engineer",
      originator: "Client",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      status: "In Estimation",
    };

    setVariations([newOrder, ...variations]);
    setIsModalOpen(false);
    setNewTitle("");
    setNewCategory("Interior Finishes");
    setNewDescription("");
    setNewEstimatedCost("");
    showToast(`Variation Request ${newId} submitted for engineering estimation.`);
  };

  // Calculations for stats
  const approvedTotal = variations
    .filter((v) => v.status === "Approved")
    .reduce((sum, v) => sum + v.cost, 0);
  const pendingCount = variations.filter((v) => v.status === "Pending Client Approval").length;
  const estimationCount = variations.filter((v) => v.status === "In Estimation").length;

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Status Updated</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-1 rounded-full inline-block">
              Project Variations Ledger
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Change Order Approvals
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              All alterations to architectural plans, materials, or MEP specs are documented with strict price protection.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer flex-shrink-0 shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Request Custom Variation</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {/* Approved Variations */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300 uppercase tracking-wider">
                Approved Variations
              </p>
              <div className="w-9 h-9 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                <CheckCircle2 className="w-4.5 h-4.5" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight transition-colors">
              +${approvedTotal.toLocaleString()}
            </h3>
            <p className="text-xs text-gray-500 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300 mt-2">
              Incorporated into contract budget
            </p>
          </div>
        </div>

        {/* Pending Client Signoff */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300 uppercase tracking-wider">
                Pending Client Signoff
              </p>
              <div className="w-9 h-9 rounded-lg bg-[#12223B] text-amber-400 flex items-center justify-center transition-colors duration-300">
                <Clock className="w-4.5 h-4.5" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 group-hover:text-[#12223B] tracking-tight transition-colors">
              {pendingCount} Item{pendingCount !== 1 ? "s" : ""}
            </h3>
            <p className="text-xs text-gray-500 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300 mt-2">
              Action required by homeowner
            </p>
          </div>
        </div>

        {/* In Engineering Estimation */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300 uppercase tracking-wider">
                In Engineering Estimation
              </p>
              <div className="w-9 h-9 rounded-lg bg-[#12223B] text-[#FFDB5A] flex items-center justify-center transition-colors duration-300">
                <FileText className="w-4.5 h-4.5" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] tracking-tight">
              {estimationCount} Item{estimationCount !== 1 ? "s" : ""}
            </h3>
            <p className="text-xs text-gray-500 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300 mt-2">
              Estimators reviewing supplier quotes
            </p>
          </div>
        </div>
      </div>

      {/* Variation Requests Section */}
      <div className="space-y-4">
        <div className="pb-2 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
              All Variation Requests
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Review and approve custom upgrades or scope adjustments
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {variations.length} Orders
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {variations.map((item) => {
            const isPending = item.status === "Pending Client Approval";
            const isApproved = item.status === "Approved";
            const isDeclined = item.status === "Declined";
            const isEstimation = item.status === "In Estimation";

            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-xl border bg-white transition-all space-y-3.5 ${
                  isPending
                    ? "border-amber-400 ring-1 ring-amber-400/30"
                    : "border-gray-200/80 hover:border-gray-300"
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#12223B] text-white font-mono font-semibold text-xs">
                      {item.id}
                    </span>
                    <span className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {isApproved && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Approved
                    </span>
                  )}
                  {isPending && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto bg-amber-50 text-amber-800 border border-amber-200 animate-pulse">
                      Pending Client Approval
                    </span>
                  )}
                  {isEstimation && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto bg-purple-50 text-purple-800 border border-purple-200">
                      In Estimation
                    </span>
                  )}
                  {isDeclined && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto bg-rose-50 text-rose-800 border border-rose-200">
                      Declined
                    </span>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#12223B]">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Meta details */}
                <div className="p-3.5 rounded-lg bg-[#F8F9FA] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-gray-500 font-medium block">Cost Variation:</span>
                    <strong className="text-[#12223B] font-semibold text-sm">
                      +${item.cost.toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Schedule Impact:</span>
                    <strong className="text-[#12223B] font-semibold text-sm">
                      {item.scheduleImpact}
                    </strong>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium block">Originator:</span>
                    <strong className="text-[#12223B] font-semibold text-sm">
                      {item.originator} • {item.date}
                    </strong>
                  </div>
                </div>

                {/* Interactive Action Buttons if Pending */}
                {isPending && (
                  <div className="pt-1 flex flex-wrap items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={() => handleDecline(item.id)}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-100 hover:bg-rose-50 text-gray-700 hover:text-rose-700 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Decline Variation
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApprove(item.id)}
                      className="px-4 py-1.5 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDB5A]" />
                      <span>Approve &amp; Sign Order</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal: Request Custom Variation */}
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
                Client Scope Request
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Request Custom Variation
              </h3>
              <p className="text-xs text-gray-500">
                Submit an architectural or material change. Our lead engineering team will provide price quotes and schedule impacts within 48 hours.
              </p>
            </div>

            <form onSubmit={handleCreateVariation} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Variation Title / Feature Name
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Automated Lutron Smart Shading System"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Trade / Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none bg-white"
                  >
                    <option value="Interior Finishes">Interior Finishes</option>
                    <option value="Kitchen & Interior">Kitchen & Interior</option>
                    <option value="Energy & Electrical">Energy & Electrical</option>
                    <option value="Plumbing & HVAC">Plumbing & HVAC</option>
                    <option value="Exterior & Patio">Exterior & Patio</option>
                    <option value="Structural & Glazing">Structural & Glazing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Target Budget Range (USD)
                  </label>
                  <input
                    type="number"
                    value={newEstimatedCost}
                    onChange={(e) => setNewEstimatedCost(e.target.value)}
                    placeholder="e.g. 7500"
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Detailed Scope &amp; Material Specifications
                </label>
                <textarea
                  rows={4}
                  required
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe desired materials, room locations, or engineering preferences..."
                  className="w-full p-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none resize-none"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
                <span>
                  No construction work will commence until both the contractor cost breakdown is finalized and you have signed the official digital addendum.
                </span>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-[#FFDB5A]" />
                  <span>Submit for Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
