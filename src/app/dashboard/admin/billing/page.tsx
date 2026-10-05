"use client";

import React, { useState } from "react";
import {
  Receipt,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Plus,
  Search,
  Download,
  DollarSign,
  Building2,
  X,
  FileText,
  Printer,
} from "lucide-react";

interface Invoice {
  id: string;
  client: string;
  project: string;
  amount: string;
  amountNum: number;
  issuedDate: string;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
  milestonePhase: string;
}

export default function AdminBillingPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-2026-089",
      client: "Apex Manufacturing Ltd",
      project: "Apex Logistics Hub",
      amount: "$185,000",
      amountNum: 185000,
      issuedDate: "Sep 30, 2026",
      dueDate: "Oct 15, 2026",
      status: "Paid",
      milestonePhase: "Phase 4: Dock Levelers & MEP Completion",
    },
    {
      id: "INV-2026-090",
      client: "The Johnson Family",
      project: "Modern Family Villa",
      amount: "$72,000",
      amountNum: 72000,
      issuedDate: "Oct 01, 2026",
      dueDate: "Oct 20, 2026",
      status: "Paid",
      milestonePhase: "Phase 3: MEP & Insulation Signoff",
    },
    {
      id: "INV-2026-091",
      client: "Vanguard Properties",
      project: "Metro Business Center",
      amount: "$450,000",
      amountNum: 450000,
      issuedDate: "Oct 02, 2026",
      dueDate: "Oct 25, 2026",
      status: "Pending",
      milestonePhase: "Phase 3: Structural Framing 50% Progress",
    },
    {
      id: "INV-2026-092",
      client: "Skyline Heritage Group",
      project: "Heritage Building Restoration",
      amount: "$120,000",
      amountNum: 120000,
      issuedDate: "Aug 15, 2026",
      dueDate: "Sep 15, 2026",
      status: "Overdue",
      milestonePhase: "Phase 2: Substructure Retrofit Milestone",
    },
  ]);

  // Mark invoice as paid
  const markAsPaid = (id: string) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, status: "Paid" } : inv))
    );
  };

  // Create Invoice Form State
  const [newClient, setNewClient] = useState("");
  const [newProject, setNewProject] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDueDate, setNewDueDate] = useState("Nov 15, 2026");
  const [newPhase, setNewPhase] = useState("Phase 1: Mobilization Deposit");

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient || !newAmount) return;

    const parsedNum = parseFloat(newAmount.replace(/[^0-9.]/g, "")) || 50000;
    const newInv: Invoice = {
      id: `INV-2026-0${93 + invoices.length}`,
      client: newClient,
      project: newProject || "Commercial Build Site",
      amount: `$${parsedNum.toLocaleString()}`,
      amountNum: parsedNum,
      issuedDate: "Today",
      dueDate: newDueDate,
      status: "Pending",
      milestonePhase: newPhase,
    };

    setInvoices([newInv, ...invoices]);
    setIsCreateModalOpen(false);
    setNewClient("");
    setNewProject("");
    setNewAmount("");
  };

  const filteredInvoices = invoices.filter((inv) => {
    const matchesFilter = filter === "All" || inv.status === filter;
    const matchesSearch =
      inv.client.toLowerCase().includes(search.toLowerCase()) ||
      inv.project.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* 4 Stat Cards matching Builtex */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Total Contract Invoiced
            </span>
            <Receipt className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#12223B] mt-2">
            $827k
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            4 billing milestones
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Collected Revenue
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mt-2">
            $257k
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Cleared in business bank
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Pending Milestones
            </span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-amber-600 mt-2">
            $450k
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Scheduled for release
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Overdue Claims
            </span>
            <AlertTriangle className="w-5 h-5 text-rose-500" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-rose-600 mt-2">
            $120k
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Follow-up reminder needed
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="relative w-full md:w-80">
          <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search invoice #, client, project..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl">
            {["All", "Paid", "Pending", "Overdue"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setFilter(st)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === st
                    ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                    : "text-gray-700 hover:text-[#12223B]"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#12223B] hover:bg-[#1c3254] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F6F6] text-xs sm:text-sm font-semibold text-[#12223B] uppercase tracking-wider border-b border-gray-200">
                <th className="py-4 px-5 sm:px-6">Invoice Number</th>
                <th className="py-4 px-4">Client & Project</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Issued / Due</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-5 sm:px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
              {filteredInvoices.map((inv) => {
                const statusStyles = {
                  Paid: "bg-emerald-100 text-emerald-800",
                  Pending: "bg-amber-100 text-amber-800",
                  Overdue: "bg-rose-100 text-rose-800",
                }[inv.status];

                return (
                  <tr
                    key={inv.id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="py-4.5 px-5 sm:px-6">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#FFDB5A] flex-shrink-0" />
                        <span className="font-mono font-semibold text-[#12223B]">
                          {inv.id}
                        </span>
                      </div>
                    </td>

                    <td className="py-4.5 px-4">
                      <div>
                        <strong className="font-semibold text-[#12223B] block">
                          {inv.client}
                        </strong>
                        <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3.5 h-3.5 text-gray-400" />
                          {inv.project}
                        </span>
                      </div>
                    </td>

                    <td className="py-4.5 px-4 font-bold text-[#12223B] text-base sm:text-lg">
                      {inv.amount}
                    </td>

                    <td className="py-4.5 px-4 text-xs sm:text-sm text-gray-600">
                      <div>
                        <span>Issued: {inv.issuedDate}</span>
                        <span className="block font-medium text-gray-700">
                          Due: {inv.dueDate}
                        </span>
                      </div>
                    </td>

                    <td className="py-4.5 px-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles}`}
                      >
                        {inv.status}
                      </span>
                    </td>

                    <td className="py-4.5 px-5 sm:px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {inv.status !== "Paid" && (
                          <button
                            type="button"
                            onClick={() => markAsPaid(inv.id)}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                          >
                            Mark Paid
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedInvoice(inv)}
                          className="px-3 py-1.5 rounded-lg bg-[#12223B] hover:bg-[#1c3254] text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          View PDF
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice View Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-semibold text-gray-400">
                  {selectedInvoice.id}
                </span>
                <h3 className="text-xl font-bold text-[#12223B]">
                  Milestone Progress Invoice
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInvoice(null)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-500">Bill To:</span>
                <strong className="text-[#12223B]">{selectedInvoice.client}</strong>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-500">Project:</span>
                <strong className="text-[#12223B]">{selectedInvoice.project}</strong>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-500">Milestone Stage:</span>
                <span className="text-gray-700">{selectedInvoice.milestonePhase}</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-gray-500">Payment Due:</span>
                <span className="font-semibold text-rose-600">
                  {selectedInvoice.dueDate}
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 text-base">
                <span className="font-bold text-[#12223B]">Total Amount:</span>
                <strong className="text-2xl font-bold text-emerald-700">
                  {selectedInvoice.amount}
                </strong>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedInvoice(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Invoice Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#12223B]">
                Issue Milestone Invoice
              </h3>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateInvoice} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Client Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vanguard Properties LLC"
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Metro Business Center"
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Invoice Amount ($ USD) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 250,000"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-1">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={newDueDate}
                    onChange={(e) => setNewDueDate(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">
                  Milestone Progress Billing Description
                </label>
                <input
                  type="text"
                  value={newPhase}
                  onChange={(e) => setNewPhase(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold cursor-pointer"
                >
                  Issue & Dispatch Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
