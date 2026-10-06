"use client";

import React, { useState } from "react";
import {
  DollarSign,
  CheckCircle2,
  Clock,
  Receipt,
  Download,
  CreditCard,
  Building,
  Check,
  X,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

interface MilestoneInvoice {
  id: string;
  phase: string;
  amount: number;
  contractPercent: number;
  date: string;
  status: "Paid" | "Due" | "Upcoming";
}

export default function ClientPaymentsPage() {
  const [invoices, setInvoices] = useState<MilestoneInvoice[]>([
    {
      id: "BX-INV-2026-091",
      phase: "Deposit & Mobilization / Excavation",
      amount: 170000,
      contractPercent: 20,
      date: "Paid on Jun 12, 2026",
      status: "Paid",
    },
    {
      id: "BX-INV-2026-114",
      phase: "Structural Steel & Roof Framing",
      amount: 255000,
      contractPercent: 30,
      date: "Paid on Jul 28, 2026",
      status: "Paid",
    },
    {
      id: "BX-INV-2026-148",
      phase: "Mechanical, Electrical & Plumbing (MEP)",
      amount: 238000,
      contractPercent: 28,
      date: "Paid on Sep 18, 2026",
      status: "Paid",
    },
    {
      id: "BX-INV-2026-189",
      phase: "Interior Finishing, Drywall & Millwork",
      amount: 119000,
      contractPercent: 14,
      date: "Due Oct 15, 2026",
      status: "Due",
    },
    {
      id: "BX-INV-2026-210",
      phase: "Final Landscaping & Key Handover (Retainage)",
      amount: 68000,
      contractPercent: 8,
      date: "Due Nov 25, 2026",
      status: "Upcoming",
    },
  ]);

  const [payingInvoice, setPayingInvoice] = useState<MilestoneInvoice | null>(
    null
  );
  const [paymentMethod, setPaymentMethod] = useState<"ach" | "wire" | "card">(
    "ach"
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleConfirmPayment = () => {
    if (!payingInvoice) return;

    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === payingInvoice.id
          ? {
              ...inv,
              status: "Paid",
              date: `Paid on ${new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}`,
            }
          : inv
      )
    );

    const paidId = payingInvoice.id;
    setPayingInvoice(null);
    showToast(`Payment for ${paidId} ($119,000) processed successfully! Receipt emailed.`);
  };

  // Dynamic calculations
  const totalContract = 850000;
  const totalPaid = invoices
    .filter((i) => i.status === "Paid")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const currentDue = invoices
    .filter((i) => i.status === "Due")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const retainage = 68000;
  const percentCleared = Math.round((totalPaid / totalContract) * 100);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#12223B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFDB5A] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">
            {toastMessage}
          </span>
        </div>
      )}

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {/* Total Contract Value */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs sm:text-sm font-bold text-[#64748b] uppercase tracking-wider">
              Total Contract Value
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#12223B] text-[#FFDB5A] flex items-center justify-center">
              <DollarSign className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12223B] tracking-tight">
            ${totalContract.toLocaleString()}
          </h3>
          <p className="text-xs text-gray-500 font-normal mt-1.5">
            Turn-key guaranteed price
          </p>
        </div>

        {/* Total Paid to Date */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs sm:text-sm font-bold text-[#64748b] uppercase tracking-wider">
              Total Paid to Date
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#12223B] text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
            ${totalPaid.toLocaleString()}
          </h3>
          <p className="text-xs text-gray-500 font-normal mt-1.5">
            {percentCleared}% of contract cleared
          </p>
        </div>

        {/* Current Due Now */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs sm:text-sm font-bold text-[#64748b] uppercase tracking-wider">
              Current Due Now
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#12223B] text-amber-400 flex items-center justify-center">
              <Clock className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-600 tracking-tight">
            ${currentDue.toLocaleString()}
          </h3>
          <p className="text-xs text-gray-500 font-normal mt-1.5">
            {currentDue > 0
              ? "1 Milestone invoice awaiting payment"
              : "All milestone invoices up to date"}
          </p>
        </div>

        {/* Remaining Retainage */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-2xs hover:shadow-xs transition-all">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs sm:text-sm font-bold text-[#64748b] uppercase tracking-wider">
              Remaining Retainage
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#12223B] text-[#007EFF] flex items-center justify-center">
              <Receipt className="w-4.5 h-4.5" />
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#12223B] tracking-tight">
            ${retainage.toLocaleString()}
          </h3>
          <p className="text-xs text-gray-500 font-normal mt-1.5">
            Payable upon final key handover
          </p>
        </div>
      </div>

      {/* Milestone Invoicing Schedule Table */}
      <div className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs">
        <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#12223B]">
              Milestone Invoicing Schedule
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Each payment is released strictly following certified architectural and structural sign-off
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8F9FA] text-[#64748b] uppercase text-[11px] font-bold tracking-wider border-b border-gray-200">
              <tr>
                <th className="py-4 px-6">Invoice # / Phase</th>
                <th className="py-4 px-6">Milestone Amount</th>
                <th className="py-4 px-6">Contract %</th>
                <th className="py-4 px-6">Due / Paid Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((inv) => {
                const isPaid = inv.status === "Paid";
                const isDue = inv.status === "Due";

                return (
                  <tr
                    key={inv.id}
                    className="hover:bg-gray-50/80 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <span className="text-xs font-mono font-bold text-gray-400 block">
                        {inv.id}
                      </span>
                      <span className="font-bold text-[#12223B] text-sm">
                        {inv.phase}
                      </span>
                    </td>

                    <td className="py-4 px-6 font-bold text-[#12223B] text-sm">
                      ${inv.amount.toLocaleString()}
                    </td>

                    <td className="py-4 px-6">
                      <span className="px-2.5 py-0.5 rounded-md bg-gray-100 font-bold text-gray-700 text-xs">
                        {inv.contractPercent}%
                      </span>
                    </td>

                    <td className="py-4 px-6 text-gray-600">
                      <span
                        className={
                          isPaid
                            ? "text-emerald-700 font-semibold"
                            : isDue
                            ? "text-amber-800 font-semibold"
                            : "text-gray-500"
                        }
                      >
                        {inv.date}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      {isPaid ? (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Paid</span>
                        </span>
                      ) : isDue ? (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 animate-pulse">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Due</span>
                        </span>
                      ) : (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1 bg-gray-50 text-gray-600 border border-gray-200">
                          <span>Upcoming</span>
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {isDue && (
                          <button
                            type="button"
                            onClick={() => setPayingInvoice(inv)}
                            className="px-3.5 py-1.5 rounded-xl bg-[#12223B] hover:bg-black text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                          >
                            <CreditCard className="w-3.5 h-3.5 text-[#FFDB5A]" />
                            <span>Pay Invoice</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            showToast(`Downloaded official PDF receipt for ${inv.id}`)
                          }
                          className="p-2 rounded-xl bg-[#F6F6F6] hover:bg-gray-200 text-[#12223B] transition-colors cursor-pointer"
                          title="Download Receipt PDF"
                        >
                          <Download className="w-4 h-4" />
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

      {/* Pay Invoice Modal */}
      {payingInvoice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-bold text-gray-400">
                  {payingInvoice.id}
                </span>
                <h4 className="font-bold text-base text-[#12223B]">
                  Settle Milestone Payment
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setPayingInvoice(null)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 space-y-1">
              <span className="text-xs text-gray-500 font-medium">
                Milestone Description
              </span>
              <p className="text-sm font-bold text-[#12223B]">
                {payingInvoice.phase}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-500 font-medium">
                  Amount Due
                </span>
                <strong className="text-xl font-extrabold text-[#12223B]">
                  ${payingInvoice.amount.toLocaleString()}.00
                </strong>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 block">
                Select Secure Payment Channel
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("ach")}
                  className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                    paymentMethod === "ach"
                      ? "border-[#12223B] bg-gray-50 ring-2 ring-[#12223B]/20"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Building className="w-5 h-5 mx-auto text-[#12223B] mb-1" />
                  <span className="text-xs font-bold block">ACH Direct</span>
                  <span className="text-[10px] text-gray-400">No Fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("wire")}
                  className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                    paymentMethod === "wire"
                      ? "border-[#12223B] bg-gray-50 ring-2 ring-[#12223B]/20"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <ExternalLink className="w-5 h-5 mx-auto text-[#12223B] mb-1" />
                  <span className="text-xs font-bold block">Bank Wire</span>
                  <span className="text-[10px] text-gray-400">Same-Day</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                    paymentMethod === "card"
                      ? "border-[#12223B] bg-gray-50 ring-2 ring-[#12223B]/20"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <CreditCard className="w-5 h-5 mx-auto text-[#12223B] mb-1" />
                  <span className="text-xs font-bold block">Card / Escrow</span>
                  <span className="text-[10px] text-gray-400">Instant</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-emerald-50/60 rounded-xl text-xs text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                Encrypted bank-grade 256-Bit SSL with escrow milestone release.
              </span>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setPayingInvoice(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="px-5 py-2.5 bg-[#FFDB5A] hover:bg-amber-400 text-[#12223B] text-xs font-extrabold rounded-xl cursor-pointer shadow-xs"
              >
                Confirm &amp; Settle Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
