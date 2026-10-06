"use client";

import React, { useState } from "react";
import {
  Package,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  DollarSign,
  AlertTriangle,
  X,
  Send,
  Building2,
  FileText,
  SlidersHorizontal,
} from "lucide-react";

interface MaterialSku {
  sku: string;
  category: "Structural Steel" | "Concrete & Aggregates" | "Masonry & Cement" | "Finishes & Timber";
  title: string;
  standard: string;
  contractorPrice: number;
  unit: string;
  stockLevel: number;
  stockUnit: string;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  leadTime: string;
  minOrder: string;
}

const initialSkus: MaterialSku[] = [
  {
    sku: "STL-RB-G60-05",
    category: "Structural Steel",
    title: "ASTM A615 Grade 60 #5 Deformed Rebar",
    standard: "ASTM A615 / A706 Seismic Grade",
    contractorPrice: 850,
    unit: "/ Ton",
    stockLevel: 145,
    stockUnit: "Tons",
    status: "In Stock",
    leadTime: "Same Day Dispatch",
    minOrder: "2 Tons",
  },
  {
    sku: "CNC-RM-4000-HE",
    category: "Concrete & Aggregates",
    title: "Ready-Mix Concrete 4000 PSI High-Early Strength",
    standard: "ACI 318-19 / ASTM C94",
    contractorPrice: 143.75,
    unit: "/ Cu. Yd",
    stockLevel: 800,
    stockUnit: "Cu. Yds",
    status: "In Stock",
    leadTime: "24 Hours Notice",
    minOrder: "8 Cu. Yds",
  },
  {
    sku: "CEM-PRT-T2-50",
    category: "Masonry & Cement",
    title: "Type II/V Low-Heat Sulfate-Resistant Portland Cement",
    standard: "ASTM C150 / Caltrans Section 90",
    contractorPrice: 16.5,
    unit: "/ 50kg Bag",
    stockLevel: 1200,
    stockUnit: "50kg Bags",
    status: "In Stock",
    leadTime: "Immediate",
    minOrder: "40 Bags",
  },
  {
    sku: "TMB-OAK-546-KD",
    category: "Finishes & Timber",
    title: "FSC Certified European White Oak FAS KD 5/4x6",
    standard: "NHLA Firsts & Seconds / FSC Mix 70%",
    contractorPrice: 115,
    unit: "/ Bundle (50 LF)",
    stockLevel: 32,
    stockUnit: "Bundles (50 LF)",
    status: "Low Stock",
    leadTime: "2-3 Days",
    minOrder: "5 Bundles",
  },
  {
    sku: "TMB-IPE-546-16",
    category: "Finishes & Timber",
    title: "Premium FSC Ipe Ironwood Decking Boards 5/4x6x16'",
    standard: "FSC 100% Commercial Grade",
    contractorPrice: 370,
    unit: "/ Bundle (8 Boards)",
    stockLevel: 65,
    stockUnit: "Bundles (8 Boards)",
    status: "In Stock",
    leadTime: "3-5 Days",
    minOrder: "10 Bundles",
  },
  {
    sku: "AGG-CR-075-BAS",
    category: "Concrete & Aggregates",
    title: "3/4 Inch Crushed Base Rock (Class 2 Aggregate)",
    standard: "Caltrans Standard Specifications",
    contractorPrice: 28.5,
    unit: "/ Ton",
    stockLevel: 2400,
    stockUnit: "Tons",
    status: "In Stock",
    leadTime: "Same Day Dispatch",
    minOrder: "15 Tons",
  },
];

export default function SupplierInventoryPage() {
  const [skus, setSkus] = useState<MaterialSku[]>(initialSkus);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Modals
  const [isAddSkuModalOpen, setIsAddSkuModalOpen] = useState(false);
  const [editingSku, setEditingSku] = useState<MaterialSku | null>(null);
  const [toastMessage, setToastMessage] = useState("");

  // Edit State
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");

  // Add SKU State
  const [newSku, setNewSku] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<MaterialSku["category"]>("Structural Steel");
  const [newStandard, setNewStandard] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newUnit, setNewUnit] = useState("/ Ton");
  const [newStock, setNewStock] = useState("");
  const [newLeadTime, setNewLeadTime] = useState("24 Hours Notice");
  const [newMinOrder, setNewMinOrder] = useState("5 Tons");

  const openEditModal = (item: MaterialSku) => {
    setEditingSku(item);
    setEditPrice(item.contractorPrice.toString());
    setEditStock(item.stockLevel.toString());
  };

  const handleUpdateSku = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSku) {
      const priceVal = parseFloat(editPrice) || editingSku.contractorPrice;
      const stockVal = parseInt(editStock, 10) || editingSku.stockLevel;

      setSkus((prev) =>
        prev.map((s) =>
          s.sku === editingSku.sku
            ? {
                ...s,
                contractorPrice: priceVal,
                stockLevel: stockVal,
                status: stockVal <= 40 ? "Low Stock" : "In Stock",
              }
            : s
        )
      );

      setToastMessage(`SKU ${editingSku.sku} updated: $${priceVal} ${editingSku.unit} • ${stockVal} ${editingSku.stockUnit} on hand.`);
      setEditingSku(null);
      setTimeout(() => setToastMessage(""), 5000);
    }
  };

  const handleCreateSku = (e: React.FormEvent) => {
    e.preventDefault();
    const createdSku: MaterialSku = {
      sku: newSku || `MAT-${Math.floor(1000 + Math.random() * 9000)}`,
      category: newCategory,
      title: newTitle || "Industrial Building Material",
      standard: newStandard || "ASTM / Caltrans Certified",
      contractorPrice: parseFloat(newPrice) || 120,
      unit: newUnit,
      stockLevel: parseInt(newStock, 10) || 500,
      stockUnit: "Units",
      status: "In Stock",
      leadTime: newLeadTime,
      minOrder: newMinOrder,
    };

    setSkus([createdSku, ...skus]);
    setIsAddSkuModalOpen(false);
    setToastMessage(`New SKU ${createdSku.sku} added to Master Price Book.`);
    setNewSku("");
    setNewTitle("");
    setNewStandard("");
    setNewPrice("");
    setNewStock("");
    setTimeout(() => setToastMessage(""), 5000);
  };

  const filteredSkus = skus.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categoryCounts = {
    All: skus.length,
    "Structural Steel": skus.filter((s) => s.category === "Structural Steel").length,
    "Concrete & Aggregates": skus.filter((s) => s.category === "Concrete & Aggregates").length,
    "Masonry & Cement": skus.filter((s) => s.category === "Masonry & Cement").length,
    "Finishes & Timber": skus.filter((s) => s.category === "Finishes & Timber").length,
  };

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
                <Package className="w-3.5 h-3.5" />
                Live Stock & Master Price Book
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Industrial Materials Catalog
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Manage live depot stock levels, update bulk contractor price tiers, and publish standardized ASTM/ACI material grades to general contractors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsAddSkuModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Add New Material SKU
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
              placeholder="Search SKU, material title, standard, category..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#F6F6F6] border border-gray-200 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {(
              [
                "All",
                "Structural Steel",
                "Concrete & Aggregates",
                "Masonry & Cement",
                "Finishes & Timber",
              ] as const
            ).map((cat) => {
              const count = categoryCounts[cat];
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
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

        {/* 6 SKU Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkus.map((item) => (
            <div
              key={item.sku}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden hover:border-[#FFDB5A] transition-all duration-300 p-6 flex flex-col justify-between space-y-5 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                    {item.sku}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      item.status === "Low Stock"
                        ? "bg-amber-50 text-amber-700 border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#12223B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">Standard: {item.standard}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F6F6F6] space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-500 font-medium">Contractor Price</span>
                    <span className="text-lg font-bold text-[#12223B]">
                      ${item.contractorPrice.toLocaleString()} <span className="text-xs font-normal text-gray-500">{item.unit}</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-gray-200/60 pt-2">
                    <span className="text-xs text-gray-500 font-medium">Available Depot Stock</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {item.stockLevel.toLocaleString()} {item.stockUnit}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-gray-600 font-medium">
                  <p>Fulfillment Lead Time: <strong className="text-gray-900">{item.leadTime}</strong></p>
                  <p>Minimum Order Size: <strong className="text-gray-900">{item.minOrder}</strong></p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openEditModal(item)}
                className="w-full py-2.5 rounded-xl bg-[#12223B] hover:bg-[#FFDB5A] hover:text-[#12223B] text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#FFDB5A]" />
                <span>Update Price & Stock</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Update Price & Stock */}
      {editingSku && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Update SKU
                  </h3>
                  <p className="text-xs text-gray-500">{editingSku.sku}</p>
                </div>
              </div>
              <button onClick={() => setEditingSku(null)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateSku} className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs">
                <p className="font-semibold text-[#12223B]">{editingSku.title}</p>
                <p className="text-gray-500">{editingSku.standard}</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Contractor Unit Price ($ USD {editingSku.unit})
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Available Depot Stock ({editingSku.stockUnit})
                </label>
                <input
                  type="number"
                  required
                  value={editStock}
                  onChange={(e) => setEditStock(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingSku(null)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add New Material SKU */}
      {isAddSkuModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Add New Material SKU
                  </h3>
                  <p className="text-xs text-gray-500">Publish item to contractor catalog</p>
                </div>
              </div>
              <button onClick={() => setIsAddSkuModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSku} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    SKU Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. STL-HSS-044-20"
                    value={newSku}
                    onChange={(e) => setNewSku(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as MaterialSku["category"])}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  >
                    <option value="Structural Steel">Structural Steel</option>
                    <option value="Concrete & Aggregates">Concrete & Aggregates</option>
                    <option value="Masonry & Cement">Masonry & Cement</option>
                    <option value="Finishes & Timber">Finishes & Timber</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Material Title & Grade
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ASTM A500 Grade B HSS Tube Steel 4x4x1/4"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  ASTM / Technical Standard
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ASTM A500 Grade B / AISC Specification"
                  value={newStandard}
                  onChange={(e) => setNewStandard(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Price ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="940"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Unit
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="/ Ton"
                    value={newUnit}
                    onChange={(e) => setNewUnit(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Depot Stock
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="85"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Lead Time
                  </label>
                  <input
                    type="text"
                    value={newLeadTime}
                    onChange={(e) => setNewLeadTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddSkuModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Publish SKU
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
