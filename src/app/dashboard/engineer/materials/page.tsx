"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Truck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  X,
  Boxes,
  Calendar,
  Building,
  Check,
} from "lucide-react";

interface PurchaseOrder {
  poNumber: string;
  orderDate: string;
  materialName: string;
  category:
    | "Concrete & Masonry"
    | "Structural Steel"
    | "Interior Finishes"
    | "MEP & Electrical"
    | "Lumber & Framing";
  quantity: string;
  stagingLocation: string;
  supplier: string;
  requisitioner: string;
  status: "In Transit" | "Delivered" | "Pending HQ Approval";
  deliveryDate: string;
}

const INITIAL_POS: PurchaseOrder[] = [
  {
    poNumber: "PO-2026-8812",
    orderDate: "Oct 04, 2026",
    materialName: "Grade 60 Deformed Steel Rebar #4 & #5 (5 Tons)",
    category: "Structural Steel",
    quantity: "10,000 lbs (40ft lengths)",
    stagingLocation: "Zone B Rebar Staging Yard",
    supplier: "Commercial Metals Company (CMC)",
    requisitioner: "Sophia Bennett",
    status: "In Transit",
    deliveryDate: "Oct 06, 2026",
  },
  {
    poNumber: "PO-2026-8813",
    orderDate: "Oct 03, 2026",
    materialName: "4000 PSI Fiber-Reinforced Ready-Mix Concrete (8 Trucks)",
    category: "Concrete & Masonry",
    quantity: "80 Cubic Yards",
    stagingLocation: "Rear Patio Pool Deck",
    supplier: "Granite Rock Ready-Mix Co.",
    requisitioner: "Sophia Bennett",
    status: "Pending HQ Approval",
    deliveryDate: "Oct 08, 2026",
  },
  {
    poNumber: "PO-2026-8809",
    orderDate: "Oct 01, 2026",
    materialName: "Calacatta Gold Italian Marble Island Slabs (2cm Polished)",
    category: "Interior Finishes",
    quantity: "4 Bookmatched Slabs",
    stagingLocation: "Interior Kitchen Pavilion",
    supplier: "Verona Stone Imports",
    requisitioner: "Marcus Vance (PM)",
    status: "Delivered",
    deliveryDate: "Oct 05, 2026",
  },
  {
    poNumber: "PO-2026-8804",
    orderDate: "Sep 28, 2026",
    materialName: "Lutron RadioRA 3 Central Dimming Modules & Keypads",
    category: "MEP & Electrical",
    quantity: "32 Units + 4 Repeaters",
    stagingLocation: "Secure Electrical Vault",
    supplier: "Consolidated Electrical Distributors",
    requisitioner: "Sophia Bennett",
    status: "Delivered",
    deliveryDate: "Oct 02, 2026",
  },
  {
    poNumber: "PO-2026-8798",
    orderDate: "Sep 25, 2026",
    materialName: "Kiln-Dried 2x6 Douglas Fir Structural Studs #1 Grade",
    category: "Lumber & Framing",
    quantity: "450 Pieces (16ft)",
    stagingLocation: "Upper Framing Level",
    supplier: "Sierra Pacific Lumber Co.",
    requisitioner: "Sophia Bennett",
    status: "Delivered",
    deliveryDate: "Sep 27, 2026",
  },
  {
    poNumber: "PO-2026-8815",
    orderDate: "Oct 05, 2026",
    materialName: "R-30 Mineral Wool Acoustic & Thermal Batt Insulation",
    category: "Interior Finishes",
    quantity: "60 Bags (3,600 sq ft)",
    stagingLocation: "Main Level Dry Storage",
    supplier: "Rockwool North America",
    requisitioner: "Sophia Bennett",
    status: "Pending HQ Approval",
    deliveryDate: "Oct 10, 2026",
  },
];

const CATEGORIES = [
  "All",
  "Concrete & Masonry",
  "Structural Steel",
  "Interior Finishes",
  "MEP & Electrical",
  "Lumber & Framing",
] as const;

export default function EngineerMaterialRequisitionPage() {
  const [orders, setOrders] = useState<PurchaseOrder[]>(INITIAL_POS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New PO modal state
  const [newMaterial, setNewMaterial] = useState("");
  const [newCat, setNewCat] = useState<PurchaseOrder["category"]>("Concrete & Masonry");
  const [newQty, setNewQty] = useState("");
  const [newStaging, setNewStaging] = useState("");
  const [newSupplier, setNewSupplier] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSignOff = (poNumber: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.poNumber === poNumber ? { ...o, status: "Delivered" } : o
      )
    );
    showToast(`Delivery ${poNumber} inspected, verified, and officially signed off.`);
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMaterial.trim()) return;

    const newPO: PurchaseOrder = {
      poNumber: `PO-2026-${8816 + orders.length - 6}`,
      orderDate: "Today, Oct 06",
      materialName: newMaterial.trim(),
      category: newCat,
      quantity: newQty.trim() || "1 Batch",
      stagingLocation: newStaging.trim() || "Main Jobsite Receiving Yard",
      supplier: newSupplier.trim() || "Certified Regional Supplier",
      requisitioner: "Sophia Bennett (PE)",
      status: "Pending HQ Approval",
      deliveryDate: "Oct 12, 2026",
    };

    setOrders([newPO, ...orders]);
    setIsModalOpen(false);
    setNewMaterial("");
    setNewQty("");
    setNewStaging("");
    setNewSupplier("");
    showToast(`Requisition order ${newPO.poNumber} sent to HQ Procurement.`);
  };

  const inTransitCount = orders.filter((o) => o.status === "In Transit").length;
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length;
  const pendingCount = orders.filter((o) => o.status === "Pending HQ Approval").length;

  const filteredOrders = orders.filter((o) => {
    const matchesCat = activeCategory === "All" || o.category === activeCategory;
    const matchesQuery =
      o.poNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.materialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.stagingLocation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 sm:space-y-8 max-w-[1600px] w-full mx-auto">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12223B] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#FFDB5A] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#FFDB5A]">Supply Chain Ledger</p>
            <p className="text-xs text-gray-200">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-[#12223B] text-white p-6 sm:p-7 rounded-xl relative overflow-hidden border border-white/10">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider bg-[#FFDB5A] text-[#12223B] px-3 py-1 rounded-full inline-block">
              Supply Chain &amp; Staging Ledger
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Material Requisition &amp; PO Tracker
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              All structural concrete, timber, and electrical shipments tracked with certified supplier documentation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer flex-shrink-0 shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Request Material Order</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* In Transit Deliveries */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                In Transit Deliveries
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-amber-400 flex items-center justify-center transition-colors duration-300">
                <Truck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                {inTransitCount}
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Shipments
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                ETA Tomorrow at 07:30 AM
              </span>
            </div>
          </div>
        </div>

        {/* Delivered & Signed */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Delivered &amp; Signed
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-emerald-400 flex items-center justify-center transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-emerald-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                {deliveredCount}
              </span>
              <span className="text-base sm:text-lg font-semibold text-emerald-700 group-hover:text-[#12223B]/80 ml-1 transition-colors">
                Orders
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                100% QA inspected upon offloading
              </span>
            </div>
          </div>
        </div>

        {/* Pending HQ Approval */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Pending HQ Approval
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-[#007EFF] flex items-center justify-center transition-colors duration-300">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl sm:text-4xl font-semibold text-[#12223B] tracking-tight leading-none">
                {pendingCount}
              </span>
              <span className="text-base sm:text-lg font-semibold text-[#12223B]/80 ml-1">
                Requests
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                Awaiting procurement sign-off
              </span>
            </div>
          </div>
        </div>

        {/* Critical Path Material */}
        <div className="relative bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 hover:border-[#FFDB5A] transition-all duration-300 group overflow-hidden cursor-pointer shadow-xs">
          <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <p className="text-xs sm:text-sm font-semibold text-[#64748b] group-hover:text-[#12223B] transition-colors duration-300">
                Critical Path Material
              </p>
              <div className="w-10 h-10 rounded-lg bg-[#12223B] text-rose-400 flex items-center justify-center transition-colors duration-300">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl sm:text-3xl font-semibold text-rose-600 group-hover:text-[#12223B] tracking-tight leading-none transition-colors">
                Grade 60 Rebar
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-gray-400 group-hover:text-[#12223B]/80 font-normal transition-colors duration-300">
                5 Tons arriving tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search PO number, material, or supplier..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
          />
        </div>

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

      {/* Purchase Orders Table */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#12223B] text-white text-xs uppercase tracking-wider font-semibold">
                <th className="px-4 py-3 sm:px-5 sm:py-3.5">PO &amp; Date</th>
                <th className="px-4 py-3 sm:px-5 sm:py-3.5">Material &amp; Discipline</th>
                <th className="px-4 py-3 sm:px-5 sm:py-3.5">Quantity &amp; Staging</th>
                <th className="px-4 py-3 sm:px-5 sm:py-3.5">Supplier &amp; Req.</th>
                <th className="px-4 py-3 sm:px-5 sm:py-3.5">Status &amp; ETA</th>
                <th className="px-4 py-3 sm:px-5 sm:py-3.5 text-right">Field Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
              {filteredOrders.map((po) => {
                const isInTransit = po.status === "In Transit";
                const isDelivered = po.status === "Delivered";
                const isPending = po.status === "Pending HQ Approval";

                return (
                  <tr key={po.poNumber} className="hover:bg-gray-50/80 transition-colors">
                    {/* PO & Date */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4">
                      <div className="font-mono font-semibold text-[#12223B] text-xs sm:text-sm">
                        {po.poNumber}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{po.orderDate}</div>
                    </td>

                    {/* Material & Discipline */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4 max-w-sm">
                      <div className="font-semibold text-[#12223B] text-xs sm:text-sm leading-snug">
                        {po.materialName}
                      </div>
                      <span className="inline-block text-[11px] sm:text-xs font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded mt-1 border border-blue-200/50">
                        {po.category}
                      </span>
                    </td>

                    {/* Quantity & Staging */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4">
                      <div className="font-semibold text-[#12223B] text-xs sm:text-sm">
                        {po.quantity}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{po.stagingLocation}</div>
                    </td>

                    {/* Supplier & Requisitioner */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4">
                      <div className="font-semibold text-[#12223B] text-xs sm:text-sm">
                        {po.supplier}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{po.requisitioner}</div>
                    </td>

                    {/* Status & Delivery Date */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4">
                      <div className="flex items-center gap-1.5 mb-1">
                        {isInTransit && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
                            <Truck className="w-3 h-3" />
                            <span>In Transit</span>
                          </span>
                        )}
                        {isDelivered && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                            Delivered
                          </span>
                        )}
                        {isPending && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                            Pending HQ Approval
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {po.deliveryDate}
                      </div>
                    </td>

                    {/* Field Action */}
                    <td className="px-4 py-3.5 sm:px-5 sm:py-4 text-right">
                      {isInTransit && (
                        <button
                          type="button"
                          onClick={() => handleSignOff(po.poNumber)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#FFDB5A] hover:bg-amber-400 text-[#12223B] font-semibold text-xs transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Sign Off Delivery</span>
                        </button>
                      )}
                      {isDelivered && (
                        <span className="text-xs sm:text-sm text-emerald-700 font-semibold inline-flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Signed Off</span>
                        </span>
                      )}
                      {isPending && (
                        <span className="text-xs text-gray-400 font-medium">Pending HQ</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Request Material Order */}
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
                Procurement Requisition
              </span>
              <h3 className="text-xl font-bold text-[#12223B]">
                Request Material Order
              </h3>
              <p className="text-xs text-gray-500">
                Submit an urgent field material requisition to HQ Procurement for vendor dispatch.
              </p>
            </div>

            <form onSubmit={handleCreateOrder} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Material Specification &amp; Grade
                </label>
                <input
                  type="text"
                  required
                  value={newMaterial}
                  onChange={(e) => setNewMaterial(e.target.value)}
                  placeholder="e.g. 5000 PSI High-Early Strength Concrete Mix"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Trade Category
                  </label>
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value as any)}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none bg-white"
                  >
                    <option value="Concrete & Masonry">Concrete & Masonry</option>
                    <option value="Structural Steel">Structural Steel</option>
                    <option value="Interior Finishes">Interior Finishes</option>
                    <option value="MEP & Electrical">MEP & Electrical</option>
                    <option value="Lumber & Framing">Lumber & Framing</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#12223B] block mb-1">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    required
                    value={newQty}
                    onChange={(e) => setNewQty(e.target.value)}
                    placeholder="e.g. 40 Cubic Yards"
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  On-Site Staging Location
                </label>
                <input
                  type="text"
                  required
                  value={newStaging}
                  onChange={(e) => setNewStaging(e.target.value)}
                  placeholder="e.g. Lower Terrace Staging Area 2"
                  className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#12223B] block mb-1">
                  Preferred Certified Supplier
                </label>
                <input
                  type="text"
                  value={newSupplier}
                  onChange={(e) => setNewSupplier(e.target.value)}
                  placeholder="e.g. Granite Rock Ready-Mix Co."
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
                  <span>Submit Requisition</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
