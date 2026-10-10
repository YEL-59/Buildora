"use client";

import React, { useState } from "react";
import {
  Receipt,
  Plus,
  FileText,
  X,
  CheckCircle2,
  Download,
  AlertCircle,
  DollarSign,
  Layers,
  Send,
  Building2,
  Calendar,
} from "lucide-react";

interface VendorInvoice {
  id: string;
  poRef: string;
  project: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: "Pending GC Approval" | "Due Soon" | "Paid";
  deliveryNoteRef: string;
  items: { description: string; qty: string; unitPrice: number; total: number }[];
}

const initialInvoices: VendorInvoice[] = [
  {
    id: "INV-2026-401",
    poRef: "PO-8812",
    project: "Modern Family Villa (PRJ-901)",
    issueDate: "Oct 05, 2026",
    dueDate: "Nov 04, 2026",
    amount: 14800,
    status: "Pending GC Approval",
    deliveryNoteRef: "DN-2026-9901",
    items: [
      { description: "ASTM A615 Grade 60 #5 Rebar", qty: "12 Tons", unitPrice: 850, total: 10200 },
      { description: "Ready-Mix Concrete 4000 PSI", qty: "32 Cu. Yds", unitPrice: 143.75, total: 4600 },
    ],
  },
  {
    id: "INV-2026-400",
    poRef: "PO-8809",
    project: "Modern Family Villa (PRJ-901)",
    issueDate: "Sep 30, 2026",
    dueDate: "Oct 30, 2026",
    amount: 22800,
    status: "Due Soon",
    deliveryNoteRef: "DN-2026-9900",
    items: [
      { description: "Type II/V Portland Low-Heat Cement", qty: "160 Cu. Yds", unitPrice: 142.5, total: 22800 },
    ],
  },
  {
    id: "INV-2026-398",
    poRef: "PO-8795",
    project: "Metro Business Center (PRJ-804)",
    issueDate: "Sep 22, 2026",
    dueDate: "Oct 22, 2026",
    amount: 38200,
    status: "Paid",
    deliveryNoteRef: "DN-2026-9899",
    items: [
      { description: "Structural W14x90 Steel Columns", qty: "45 Tons", unitPrice: 848.88, total: 38200 },
    ],
  },
];

export default function SupplierInvoicesPage() {
  const [invoices, setInvoices] = useState<VendorInvoice[]>(initialInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<VendorInvoice | null>(null);
  const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // New Invoice Form
  const [newPoRef, setNewPoRef] = useState("PO-8815");
  const [newProject, setNewProject] = useState("Modern Family Villa (PRJ-901)");
  const [newDnRef, setNewDnRef] = useState("DN-2026-9902");
  const [newAmount, setNewAmount] = useState("9200");
  const [newItemsDesc, setNewItemsDesc] = useState("80 Bundles FSC European White Oak Planks 5/4x6");

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(newAmount) || 9200;
    const newInv: VendorInvoice = {
      id: `INV-2026-${402 + invoices.length - 3}`,
      poRef: newPoRef,
      project: newProject,
      issueDate: "Today, Oct 06, 2026",
      dueDate: "Nov 05, 2026",
      amount: amt,
      status: "Pending GC Approval",
      deliveryNoteRef: newDnRef,
      items: [{ description: newItemsDesc, qty: "Lot", unitPrice: amt, total: amt }],
    };

    setInvoices([newInv, ...invoices]);
    setIsNewInvoiceModalOpen(false);
    setToastMessage(`Invoice ${newInv.id} issued against ${newPoRef} and transmitted to GC Accounts Payable.`);
    setTimeout(() => setToastMessage(""), 5000);
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
                <Receipt className="w-3.5 h-3.5" />
                Commercial Accounts Receivable (Net 30)
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Materials Vendor Billing Ledger
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Generate delivery-backed material invoices, track direct EFT disbursements, and monitor aging accounts receivable across all active construction projects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsNewInvoiceModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Create New Invoice
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Invoiced YTD</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#12223B]">$384,500 USD</p>
            <p className="text-xs text-gray-400 font-medium">6 active master supply contracts</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Paid to Date</p>
            <p className="text-2xl sm:text-3xl font-semibold text-emerald-700">$337,700 USD</p>
            <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded w-fit">
              87.8% Collection Rate
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Current Outstanding</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#007EFF]">$46,800 USD</p>
            <p className="text-xs text-gray-400 font-medium">Standard Net 30 payment terms</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Due Within 15 Days</p>
            <p className="text-2xl sm:text-3xl font-semibold text-amber-700">$22,800 USD</p>
            <p className="text-xs text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded w-fit">
              Invoice #INV-2026-400
            </p>
          </div>
        </div>

        {/* Invoices Table Card */}
        <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden space-y-4 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#12223B]">
                Invoices & Billing History
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Material invoices verified with attached Proof of Delivery slips
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F6F6F6] text-[#12223B] font-semibold border-b border-gray-200">
                <tr>
                  <th className="p-3.5">Invoice #</th>
                  <th className="p-3.5">PO Ref</th>
                  <th className="p-3.5">Project</th>
                  <th className="p-3.5">Issue Date</th>
                  <th className="p-3.5">Due Date</th>
                  <th className="p-3.5 text-right">Amount</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3.5 font-semibold text-[#12223B] whitespace-nowrap">
                      {inv.id}
                    </td>
                    <td className="p-3.5 font-mono text-gray-600 whitespace-nowrap">{inv.poRef}</td>
                    <td className="p-3.5 max-w-xs truncate">{inv.project}</td>
                    <td className="p-3.5 whitespace-nowrap">{inv.issueDate}</td>
                    <td className="p-3.5 whitespace-nowrap">{inv.dueDate}</td>
                    <td className="p-3.5 text-right font-semibold text-gray-900">
                      ${inv.amount.toLocaleString()} USD
                    </td>
                    <td className="p-3.5 text-center whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          inv.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : inv.status === "Due Soon"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setSelectedInvoice(inv)}
                        className="px-3 py-1.5 rounded-lg bg-[#12223B] text-white hover:bg-[#FFDB5A] hover:text-[#12223B] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        View Statement
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal: View Statement & Remittance */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Commercial Invoice Statement
                  </h3>
                  <p className="text-xs text-gray-500">{selectedInvoice.id} • Attached to {selectedInvoice.poRef}</p>
                </div>
              </div>
              <button onClick={() => setSelectedInvoice(null)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Invoice Document */}
            <div className="p-6 rounded-xl border border-gray-300 bg-[#FAFAFA] space-y-5 text-xs text-gray-800 font-sans shadow-inner">
              <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                <div>
                  <h4 className="font-bold text-[#12223B] text-sm">APEX HEAVY MATERIALS & INDUSTRIAL SUPPLY CO.</h4>
                  <p className="text-[11px] text-gray-500">Commercial AR Department • Wire Ref: APX-EFT-991</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-xs bg-[#12223B] text-[#FFDB5A] px-2.5 py-1 rounded">
                    {selectedInvoice.id}
                  </span>
                  <p className="text-[11px] text-gray-400 mt-1">Due: {selectedInvoice.dueDate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase">Billed General Contractor:</p>
                  <p className="font-bold text-gray-900">Builtex Construction Management</p>
                  <p className="text-gray-600">Attn: Accounts Payable / Sophia Bennett PE</p>
                  <p className="text-gray-500">Project: {selectedInvoice.project}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase">Supporting e-POD Manifest:</p>
                  <p className="font-mono text-gray-900 font-semibold">{selectedInvoice.deliveryNoteRef}</p>
                  <p className="text-emerald-700 font-medium">✓ Electronic receiver sign-off attached</p>
                  <p className="text-gray-500">Terms: Net 30 Commercial</p>
                </div>
              </div>

              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden bg-white text-xs">
                <thead className="bg-gray-100 font-semibold text-gray-700">
                  <tr>
                    <th className="p-2.5">Item Description</th>
                    <th className="p-2.5">Quantity</th>
                    <th className="p-2.5 text-right">Unit Price</th>
                    <th className="p-2.5 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {selectedInvoice.items.map((it, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 font-medium text-[#12223B]">{it.description}</td>
                      <td className="p-2.5">{it.qty}</td>
                      <td className="p-2.5 text-right">${it.unitPrice.toLocaleString()}</td>
                      <td className="p-2.5 text-right font-bold">${it.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg font-bold text-sm text-[#12223B]">
                <span>Total Net Remittance Due:</span>
                <span className="text-base">${selectedInvoice.amount.toLocaleString()} USD</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => {
                  setToastMessage("Downloading official commercial invoice PDF statement...");
                  setTimeout(() => setToastMessage(""), 3000);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Statement PDF
              </button>

              <button
                type="button"
                onClick={() => setSelectedInvoice(null)}
                className="px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
              >
                Close Statement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Create New Invoice */}
      {isNewInvoiceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Create Material Invoice
                  </h3>
                  <p className="text-xs text-gray-500">Bill against fulfilled purchase order</p>
                </div>
              </div>
              <button onClick={() => setIsNewInvoiceModalOpen(false)} className="text-gray-400 hover:text-gray-700 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateInvoice} className="space-y-4">
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
                    Attached e-POD Slip #
                  </label>
                  <input
                    type="text"
                    required
                    value={newDnRef}
                    onChange={(e) => setNewDnRef(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Consigned Project
                </label>
                <input
                  type="text"
                  required
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Material Description
                </label>
                <textarea
                  rows={2}
                  required
                  value={newItemsDesc}
                  onChange={(e) => setNewItemsDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Total Invoiced Amount ($ USD)
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewInvoiceModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Generate Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
