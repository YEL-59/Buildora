"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Receipt, CheckCircle2, AlertCircle, Clock, Download, CreditCard } from "lucide-react";

export default function ClientPaymentsPage() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
          <span>/</span>
          <span className="text-[#00C975] font-semibold">Milestones &amp; Payment</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          Villa Horizon (PRJ-901) Financial Ledger
        </h1>
      </div>

      {/* Due Alert Banner */}
      {!paid ? (
        <div className="p-6 rounded-2xl bg-[#FFDB5A]/15 border border-[#FFDB5A]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[#FFDB5A] flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white">Milestone Phase 4 Payment Ready</h2>
              <p className="text-xs text-gray-300 mt-0.5">
                Roofing and exterior thermal glazing verified by municipal building inspector. Total due: <strong>$45,000.00</strong>
              </p>
            </div>
          </div>
          <button
            onClick={() => setPaid(true)}
            className="px-6 py-2.5 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            <CreditCard className="w-4 h-4" />
            <span>Pay $45,000 via ACH / Wire</span>
          </button>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>Payment of $45,000 successfully processed! Receipt sent to your email.</span>
        </div>
      )}

      {/* Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Total Contract Price</span>
          <div className="text-2xl font-extrabold text-white mt-1">$1,250,000</div>
          <span className="text-xs text-gray-400 mt-1 block">Fixed Price Guarantee</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Amount Paid to Date</span>
          <div className="text-2xl font-extrabold text-[#00C975] mt-1">{paid ? "$1,020,000" : "$975,000"}</div>
          <span className="text-xs text-emerald-400 font-semibold mt-1 block">{paid ? "81.6% Paid" : "78% Paid"}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
          <span className="text-xs text-gray-400 font-medium">Remaining at Handover</span>
          <div className="text-2xl font-extrabold text-white mt-1">{paid ? "$230,000" : "$275,000"}</div>
          <span className="text-xs text-gray-400 mt-1 block">Due upon occupancy permit</span>
        </div>
      </div>
    </div>
  );
}
