"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Calendar,
  X,
  FileText,
  AlertCircle,
  Send,
  Building2,
  DollarSign,
  Layers,
} from "lucide-react";

interface LineItem {
  description: string;
  spec: string;
  quantity: string;
  unitPrice: number;
  total: number;
}

interface PurchaseOrder {
  id: string;
  projectCode: string;
  projectName: string;
  status: "Confirmed & In Transit" | "Awaiting Dispatch" | "Delivered & Signed" | "Pending Confirmation";
  totalAmount: number;
  lineItems: LineItem[];
  destination: string;
  specialHandling: string;
  orderedDate: string;
  requiredDate: string;
  requisitionBy: string;
}

const initialOrders: PurchaseOrder[] = [
  {
    id: "PO-8812",
    projectCode: "PRJ-901",
    projectName: "Modern Family Villa",
    status: "Confirmed & In Transit",
    totalAmount: 14800,
    lineItems: [
      {
        description: "ASTM A615 Grade 60 #5 (5/8\") Deformed Steel Rebar",
        spec: "Spec 03 20 00",
        quantity: "12 Tons",
        unitPrice: 850,
        total: 10200,
      },
      {
        description: "Ready-Mix Concrete 4000 PSI High-Early Strength",
        spec: "Spec 03 30 00",
        quantity: "32 Cu. Yds",
        unitPrice: 143.75,
        total: 4600,
      },
    ],
    destination: "Jobsite Gate 2 — Bel Air, Los Angeles, CA",
    specialHandling: "Chute wash-out area allocated; maximum slump 5.5 inches.",
    orderedDate: "Oct 04, 2026",
    requiredDate: "Today, Oct 05 (02:00 PM)",
    requisitionBy: "Sophia Bennett (Lead PE)",
  },
  {
    id: "PO-8815",
    projectCode: "PRJ-901",
    projectName: "Modern Family Villa",
    status: "Awaiting Dispatch",
    totalAmount: 9200,
    lineItems: [
      {
        description: "FSC European White Oak Kiln-Dried Planks 5/4x6",
        spec: "Spec 06 20 00",
        quantity: "80 Bundles",
        unitPrice: 115,
        total: 9200,
      },
    ],
    destination: "Primary Warehouse Staging — Gate 1",
    specialHandling: "Moisture-resistant poly-wrap on all timber pallets.",
    orderedDate: "Oct 03, 2026",
    requiredDate: "Oct 08, 2026",
    requisitionBy: "Sophia Bennett (Lead PE)",
  },
  {
    id: "PO-8809",
    projectCode: "PRJ-901",
    projectName: "Modern Family Villa",
    status: "Delivered & Signed",
    totalAmount: 22800,
    lineItems: [
      {
        description: "Type II/V Portland Low-Heat Sulfate-Resistant Cement",
        spec: "Spec 03 01 00",
        quantity: "160 Cu. Yds",
        unitPrice: 142.5,
        total: 22800,
      },
    ],
    destination: "Basement Foundation Footing Zone",
    specialHandling: "Continuous concrete pour pump line certification.",
    orderedDate: "Sep 28, 2026",
    requiredDate: "Sep 30, 2026",
    requisitionBy: "Michael Anderson (Executive PM)",
  },
  {
    id: "PO-8820",
    projectCode: "PRJ-901",
    projectName: "Modern Family Villa",
    status: "Pending Confirmation",
    totalAmount: 18500,
    lineItems: [
      {
        description: "Commercial FSC Ipe Hardwood Decking 5/4x6x16'",
        spec: "Spec 06 15 00",
        quantity: "50 Bundles",
        unitPrice: 370,
        total: 18500,
      },
    ],
    destination: "Pool Deck Staging Area",
    specialHandling: "Direct flatbed crane offload required.",
    orderedDate: "Oct 05, 2026",
    requiredDate: "Oct 12, 2026",
    requisitionBy: "Sophia Bennett (Lead PE)",
  },
];

export default function SupplierOrdersPage() {
  const [orders, setOrders] = useState<PurchaseOrder[]>(initialOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Confirmed & In Transit" | "Awaiting Dispatch" | "Delivered & Signed" | "Pending Confirmation"
  >("All");

  // Modals
  const [isClarificationModalOpen, setIsClarificationModalOpen] = useState(false);
  const [schedulingPo, setSchedulingPo] = useState<PurchaseOrder | null>(null);
  const [confirmingPo, setConfirmingPo] = useState<PurchaseOrder | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  // Clarification Form
  const [clarifyPoId, setClarifyPoId] = useState("PO-8820");
  const [clarifyQuestion, setClarifyQuestion] = useState("");

  // Scheduling Form
  const [scheduleRig, setScheduleRig] = useState("Freightliner M2-106 Flatbed (Unit #44)");
  const [scheduleDate, setScheduleDate] = useState("2026-10-08");

  const handleClarificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsClarificationModalOpen(false);
    setToastMessage(`Clarification RFI on ${clarifyPoId} transmitted to Lead PE Sophia Bennett.`);
    setClarifyQuestion("");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (schedulingPo) {
      setOrders((prev) =>
        prev.map((o) =>
          o.id === schedulingPo.id ? { ...o, status: "Confirmed & In Transit" } : o
        )
      );
      setToastMessage(`${schedulingPo.id} scheduled for dispatch on ${scheduleDate} via ${scheduleRig}.`);
      setSchedulingPo(null);
      setTimeout(() => setToastMessage(""), 5000);
    }
  };

  const handleConfirmSubmit = (poId: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === poId ? { ...o, status: "Awaiting Dispatch" } : o
      )
    );
    setConfirmingPo(null);
    setToastMessage(`Purchase Order ${poId} accepted and locked at contract price.`);
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesFilter =
      activeFilter === "All" || order.status === activeFilter;
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.lineItems.some((item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.spec.toLowerCase().includes(searchQuery.toLowerCase())
      );

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
                <ShoppingBag className="w-3.5 h-3.5" />
                Live Requisition & PO Ledger
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Materials Order Fulfillment Pipeline
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Review line-item specifications, required jobsite delivery windows, and special handling instructions for structural steel, concrete mixes, and architectural lumber.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsClarificationModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Request Spec Clarification
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
              placeholder="Search PO #, project, spec code, material..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(
              [
                "All",
                "Confirmed & In Transit",
                "Awaiting Dispatch",
                "Delivered & Signed",
                "Pending Confirmation",
              ] as const
            ).map((filter) => {
              const count =
                filter === "All"
                  ? orders.length
                  : orders.filter((o) => o.status === filter).length;
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

        {/* Purchase Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs sm:text-sm font-semibold bg-[#12223B] text-[#FFDB5A] px-3 py-1 rounded-md">
                      {order.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                      {order.projectCode}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${
                        order.status === "Delivered & Signed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : order.status === "Confirmed & In Transit"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : order.status === "Awaiting Dispatch"
                          ? "bg-amber-50 text-amber-700 border-amber-200"
                          : "bg-purple-50 text-purple-700 border-purple-200"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#12223B] tracking-tight">
                    {order.projectName}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium">Committed PO Total</p>
                    <p className="text-xl sm:text-2xl font-semibold text-[#12223B]">
                      ${order.totalAmount.toLocaleString()} USD
                    </p>
                  </div>

                  {order.status === "Pending Confirmation" && (
                    <button
                      type="button"
                      onClick={() => setConfirmingPo(order)}
                      className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
                    >
                      Confirm Order
                    </button>
                  )}

                  {order.status === "Awaiting Dispatch" && (
                    <button
                      type="button"
                      onClick={() => setSchedulingPo(order)}
                      className="px-4 py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs flex items-center gap-2"
                    >
                      <Truck className="w-4 h-4 text-[#FFDB5A]" />
                      Schedule Rig
                    </button>
                  )}

                  {order.status === "Delivered & Signed" && (
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Line Items Table */}
              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                  Requisitioned Line Items
                </h4>
                <div className="overflow-x-auto border border-gray-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F6F6F6] text-[#12223B] font-semibold border-b border-gray-200">
                      <tr>
                        <th className="p-3">Material Description</th>
                        <th className="p-3">Specification</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3 text-right">Unit Price</th>
                        <th className="p-3 text-right">Line Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                      {order.lineItems.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50">
                          <td className="p-3 font-semibold text-[#12223B]">{item.description}</td>
                          <td className="p-3 text-gray-500 font-mono text-xs">{item.spec}</td>
                          <td className="p-3 font-semibold">{item.quantity}</td>
                          <td className="p-3 text-right">${item.unitPrice.toLocaleString()}</td>
                          <td className="p-3 text-right font-semibold text-gray-900">
                            ${item.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Delivery Destination & Offload Protocol */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F6F6F6] text-xs">
                <div>
                  <p className="text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                    Delivery Destination & Gate:
                  </p>
                  <p className="text-gray-800 font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FFDB5A] shrink-0" />
                    {order.destination}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                    Special Handling / Offload Protocol:
                  </p>
                  <p className="text-gray-800 font-medium">{order.specialHandling}</p>
                </div>
              </div>

              {/* Footer Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-gray-600 font-medium border-t border-gray-100">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  Ordered: {order.orderedDate}
                </span>
                <span>
                  Required on Site: <strong className="text-gray-900">{order.requiredDate}</strong>
                </span>
                <span>
                  Requisition By: <strong className="text-gray-900">{order.requisitionBy}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Request Spec Clarification */}
      {isClarificationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Request Spec Clarification
                  </h3>
                  <p className="text-xs text-gray-500">Submit RFI to GC Engineering Team</p>
                </div>
              </div>
              <button
                onClick={() => setIsClarificationModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleClarificationSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Target Purchase Order
                </label>
                <select
                  value={clarifyPoId}
                  onChange={(e) => setClarifyPoId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  {orders.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.id} — {o.projectName} (${o.totalAmount.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Clarification Query / Variance Note
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail specification questions (e.g. Slump test limit clarification, rebar mill cert requirements, lumber moisture tolerancing)..."
                  value={clarifyQuestion}
                  onChange={(e) => setClarifyQuestion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsClarificationModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Schedule Rig Dispatch */}
      {schedulingPo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Schedule Transport Rig — {schedulingPo.id}
                  </h3>
                  <p className="text-xs text-gray-500">{schedulingPo.projectName}</p>
                </div>
              </div>
              <button
                onClick={() => setSchedulingPo(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Heavy Transport Rig Allocation
                </label>
                <select
                  value={scheduleRig}
                  onChange={(e) => setScheduleRig(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                >
                  <option value="Freightliner M2-106 Flatbed (Unit #44)">Freightliner M2-106 Flatbed (Unit #44)</option>
                  <option value="Mack Granite 10-Yard Mixer (Unit #18)">Mack Granite 10-Yard Mixer (Unit #18)</option>
                  <option value="Kenworth T880 Semi (Unit #09)">Kenworth T880 Semi (Unit #09)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Scheduled Dispatch Date
                </label>
                <input
                  type="date"
                  required
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                Destination: {schedulingPo.destination}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setSchedulingPo(null)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Truck className="w-4 h-4" />
                  Confirm Rig Dispatch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Confirm Order & Lock Price */}
      {confirmingPo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Confirm {confirmingPo.id}
                  </h3>
                  <p className="text-xs text-gray-500">Lock unit prices and commit delivery</p>
                </div>
              </div>
              <button
                onClick={() => setConfirmingPo(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <p className="text-gray-600">
                You are confirming order <strong className="text-gray-900">{confirmingPo.id}</strong> for{" "}
                <strong className="text-gray-900">{confirmingPo.projectName}</strong>.
              </p>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex justify-between font-semibold">
                <span>Committed Value:</span>
                <span className="text-[#12223B]">${confirmingPo.totalAmount.toLocaleString()} USD</span>
              </div>
              <p className="text-gray-500">
                Required site arrival: <strong className="text-gray-800">{confirmingPo.requiredDate}</strong>
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={() => setConfirmingPo(null)}
                className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleConfirmSubmit(confirmingPo.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                Lock Contract & Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
