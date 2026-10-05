"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileCheck, CheckCircle2, Clock, Plus } from "lucide-react";

export default function ClientChangeOrdersPage() {
  const [approved1, setApproved1] = useState(false);
  const [approved2, setApproved2] = useState(false);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/dashboard/client" className="hover:text-white">Client Portal</Link>
            <span>/</span>
            <span className="text-[#00C975] font-semibold">Change Orders</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            2 Pending Change Orders
          </h1>
        </div>
      </div>

      <div className="space-y-4">
        {/* Change Order 1 */}
        <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFDB5A]">CO-901-04</span>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Upgraded Calacatta Gold Marble in Master Bath &amp; Powder Room
              </h2>
            </div>
            <div className="text-right">
              <span className="text-base font-extrabold text-[#FFDB5A]">+$14,500.00</span>
              <span className="text-[11px] text-gray-400 block">+0 Days Schedule Impact</span>
            </div>
          </div>
          <p className="text-xs text-gray-300">
            Client requested upgrade from standard Carrera marble to imported bookmatched Italian Calacatta Gold slabs with mitered edge detailing. Sourced from supplier with immediate availability.
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-xs text-gray-400">Requested by: Alex Rivera, PE</span>
            {approved1 ? (
              <span className="text-xs font-bold text-[#00C975] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Signed &amp; Approved</span>
              </span>
            ) : (
              <button
                onClick={() => setApproved1(true)}
                className="px-4 py-2 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] font-bold text-xs transition-colors cursor-pointer"
              >
                Approve &amp; Sign Order
              </button>
            )}
          </div>
        </div>

        {/* Change Order 2 */}
        <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFDB5A]">CO-901-05</span>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Sub-Zero / Wolf Smart Integrated Appliance Package
              </h2>
            </div>
            <div className="text-right">
              <span className="text-base font-extrabold text-[#FFDB5A]">+$22,800.00</span>
              <span className="text-[11px] text-gray-400 block">+0 Days Schedule Impact</span>
            </div>
          </div>
          <p className="text-xs text-gray-300">
            Replacement of builder series appliances with 48" Dual Fuel Range, 30" Column Refrigeration, and integrated wine reserve. Electrical load calculation updated and approved.
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-xs text-gray-400">Requested by: Alex Rivera, PE</span>
            {approved2 ? (
              <span className="text-xs font-bold text-[#00C975] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Signed &amp; Approved</span>
              </span>
            ) : (
              <button
                onClick={() => setApproved2(true)}
                className="px-4 py-2 rounded-xl bg-[#00C975] hover:bg-emerald-400 text-[#091524] font-bold text-xs transition-colors cursor-pointer"
              >
                Approve &amp; Sign Order
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
