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
  Building,
} from "lucide-react";

interface PaymentApplication {
  id: string;
  appNumber: string;
  isCurrent?: boolean;
  periodEnding: string;
  workDescription: string;
  totalCompleted: number;
  retainage: number;
  netDue: number;
  status: "Under GC Review" | "Approved & Paid" | "Draft";
  sovItems: {
    itemNo: string;
    description: string;
    scheduledValue: number;
    prevCompleted: number;
    thisPeriod: number;
    totalCompleted: number;
    pctCompleted: number;
    balance: number;
    retainage: number;
  }[];
}

const initialApplications: PaymentApplication[] = [
  {
    id: "PA-04",
    appNumber: "Application #4 (Current)",
    isCurrent: true,
    periodEnding: "Oct 05, 2026",
    workDescription: "Living Pavilion Ceiling Slats (90%) & Master Suite Carcasses (60%)",
    totalCompleted: 184500,
    retainage: 18450,
    netDue: 28500,
    status: "Under GC Review",
    sovItems: [
      {
        itemNo: "06-101",
        description: "Living Pavilion White Oak Acoustic Slats",
        scheduledValue: 94000,
        prevCompleted: 65800,
        thisPeriod: 16920,
        totalCompleted: 82720,
        pctCompleted: 88,
        balance: 11280,
        retainage: 8272,
      },
      {
        itemNo: "06-102",
        description: "Master Suite Walnut Walk-in Wardrobe",
        scheduledValue: 78000,
        prevCompleted: 35100,
        thisPeriod: 13260,
        totalCompleted: 48360,
        pctCompleted: 62,
        balance: 29640,
        retainage: 4836,
      },
      {
        itemNo: "06-103",
        description: "Kitchen Island Fluted Base & Prep Bar",
        scheduledValue: 46000,
        prevCompleted: 36650,
        thisPeriod: 7050,
        totalCompleted: 43700,
        pctCompleted: 95,
        balance: 2300,
        retainage: 4370,
      },
      {
        itemNo: "06-104",
        description: "Exterior Ipe Hardwood Decking",
        scheduledValue: 30000,
        prevCompleted: 0,
        thisPeriod: 0,
        totalCompleted: 0,
        pctCompleted: 0,
        balance: 30000,
        retainage: 0,
      },
    ],
  },
  {
    id: "PA-03",
    appNumber: "Application #3",
    periodEnding: "Sep 20, 2026",
    workDescription: "Rough Sub-framing, Kitchen Island Framing, Material Acclimatization",
    totalCompleted: 137550,
    retainage: 13755,
    netDue: 35595,
    status: "Approved & Paid",
    sovItems: [
      {
        itemNo: "06-101",
        description: "Living Pavilion White Oak Acoustic Slats",
        scheduledValue: 94000,
        prevCompleted: 42300,
        thisPeriod: 23500,
        totalCompleted: 65800,
        pctCompleted: 70,
        balance: 28200,
        retainage: 6580,
      },
      {
        itemNo: "06-102",
        description: "Master Suite Walnut Walk-in Wardrobe",
        scheduledValue: 78000,
        prevCompleted: 23400,
        thisPeriod: 11700,
        totalCompleted: 35100,
        pctCompleted: 45,
        balance: 42900,
        retainage: 3510,
      },
      {
        itemNo: "06-103",
        description: "Kitchen Island Fluted Base & Prep Bar",
        scheduledValue: 46000,
        prevCompleted: 23000,
        thisPeriod: 13650,
        totalCompleted: 36650,
        pctCompleted: 80,
        balance: 9350,
        retainage: 3665,
      },
      {
        itemNo: "06-104",
        description: "Exterior Ipe Hardwood Decking",
        scheduledValue: 30000,
        prevCompleted: 0,
        thisPeriod: 0,
        totalCompleted: 0,
        pctCompleted: 0,
        balance: 30000,
        retainage: 0,
      },
    ],
  },
  {
    id: "PA-02",
    appNumber: "Application #2",
    periodEnding: "Aug 30, 2026",
    workDescription: "Material Procurement, Shop Drawings Stamped, Rough Blocking",
    totalCompleted: 98000,
    retainage: 9800,
    netDue: 49500,
    status: "Approved & Paid",
    sovItems: [
      {
        itemNo: "06-101",
        description: "Living Pavilion White Oak Acoustic Slats",
        scheduledValue: 94000,
        prevCompleted: 0,
        thisPeriod: 42300,
        totalCompleted: 42300,
        pctCompleted: 45,
        balance: 51700,
        retainage: 4230,
      },
      {
        itemNo: "06-102",
        description: "Master Suite Walnut Walk-in Wardrobe",
        scheduledValue: 78000,
        prevCompleted: 0,
        thisPeriod: 23400,
        totalCompleted: 23400,
        pctCompleted: 30,
        balance: 54600,
        retainage: 2340,
      },
      {
        itemNo: "06-103",
        description: "Kitchen Island Fluted Base & Prep Bar",
        scheduledValue: 46000,
        prevCompleted: 0,
        thisPeriod: 23000,
        totalCompleted: 23000,
        pctCompleted: 50,
        balance: 23000,
        retainage: 2300,
      },
      {
        itemNo: "06-104",
        description: "Exterior Ipe Hardwood Decking",
        scheduledValue: 30000,
        prevCompleted: 0,
        thisPeriod: 0,
        totalCompleted: 0,
        pctCompleted: 0,
        balance: 30000,
        retainage: 0,
      },
    ],
  },
];

export default function SubcontractorInvoicesPage() {
  const [applications, setApplications] = useState<PaymentApplication[]>(initialApplications);
  const [selectedSovApp, setSelectedSovApp] = useState<PaymentApplication | null>(null);
  const [isNewPayAppModalOpen, setIsNewPayAppModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // New pay app state
  const [newPeriodEnding, setNewPeriodEnding] = useState("Oct 20, 2026");
  const [newWorkDescription, setNewWorkDescription] = useState("Decking Aluminum Substructure & Wardrobe Glass Vitrine Installation");
  const [newTotalCompleted, setNewTotalCompleted] = useState("208000");

  const handleCreatePayApp = (e: React.FormEvent) => {
    e.preventDefault();
    const totalComp = parseFloat(newTotalCompleted) || 208000;
    const ret = Math.round(totalComp * 0.1);
    const prevEarned = 184500 - 18450;
    const net = Math.round(totalComp - ret - prevEarned);

    const newApp: PaymentApplication = {
      id: `PA-0${applications.length + 1}`,
      appNumber: `Application #${applications.length + 1}`,
      periodEnding: newPeriodEnding,
      workDescription: newWorkDescription,
      totalCompleted: totalComp,
      retainage: ret,
      netDue: net > 0 ? net : 21150,
      status: "Under GC Review",
      sovItems: [
        {
          itemNo: "06-101",
          description: "Living Pavilion White Oak Acoustic Slats",
          scheduledValue: 94000,
          prevCompleted: 82720,
          thisPeriod: 5640,
          totalCompleted: 88360,
          pctCompleted: 94,
          balance: 5640,
          retainage: 8836,
        },
        {
          itemNo: "06-102",
          description: "Master Suite Walnut Walk-in Wardrobe",
          scheduledValue: 78000,
          prevCompleted: 48360,
          thisPeriod: 14040,
          totalCompleted: 62400,
          pctCompleted: 80,
          balance: 15600,
          retainage: 6240,
        },
        {
          itemNo: "06-103",
          description: "Kitchen Island Fluted Base & Prep Bar",
          scheduledValue: 46000,
          prevCompleted: 43700,
          thisPeriod: 2300,
          totalCompleted: 46000,
          pctCompleted: 100,
          balance: 0,
          retainage: 4600,
        },
        {
          itemNo: "06-104",
          description: "Exterior Ipe Hardwood Decking",
          scheduledValue: 30000,
          prevCompleted: 0,
          thisPeriod: 11240,
          totalCompleted: 11240,
          pctCompleted: 37,
          balance: 18760,
          retainage: 1124,
        },
      ],
    };

    setApplications([newApp, ...applications]);
    setIsNewPayAppModalOpen(false);
    setToastMessage(`AIA Document G702 Pay Application #${applications.length + 1} transmitted for GC Review.`);
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
                AIA Document G702 / G703 Application Protocol
              </div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
                Apex Millwork — Progress Billing Ledger
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Track schedule of values, 10% statutory retainage holdbacks, and GC approval milestones. Submit progress payment applications with full itemized breakdown.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsNewPayAppModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#FFDB5A] text-[#12223B] px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#ffe37e] transition-colors duration-200 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                Submit New Pay App (G702)
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Total Contract Sum</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#12223B]">$248,000 USD</p>
            <p className="text-xs text-gray-400 font-medium">Original Contract with $0 Change Orders</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Completed & Stored to Date</p>
            <p className="text-2xl sm:text-3xl font-semibold text-emerald-700">$184,500 USD</p>
            <p className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded w-fit">
              74.4% of Total Scope Earned
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Retainage Withheld (10%)</p>
            <p className="text-2xl sm:text-3xl font-semibold text-[#007EFF]">$18,450 USD</p>
            <p className="text-xs text-gray-400 font-medium">Held until final project completion</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 space-y-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-gray-500">Current Pending Due</p>
            <p className="text-2xl sm:text-3xl font-semibold text-amber-700">$28,500 USD</p>
            <p className="text-xs text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded w-fit">
              Application #4 Under GC Review
            </p>
          </div>
        </div>

        {/* Payment Applications Table Card */}
        <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden space-y-4 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#12223B]">
                Payment Applications History
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Itemized Schedule of Values (SOV) submitted per AIA Document G702 standard
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F6F6F6] text-[#12223B] font-semibold border-b border-gray-200">
                <tr>
                  <th className="p-3.5">Application #</th>
                  <th className="p-3.5">Period Ending</th>
                  <th className="p-3.5">Work Description</th>
                  <th className="p-3.5 text-right">Total Completed</th>
                  <th className="p-3.5 text-right">Retainage (10%)</th>
                  <th className="p-3.5 text-right">Net Payment Due</th>
                  <th className="p-3.5 text-center">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-3.5 font-semibold text-[#12223B] whitespace-nowrap">
                      {app.appNumber}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">{app.periodEnding}</td>
                    <td className="p-3.5 max-w-xs truncate" title={app.workDescription}>
                      {app.workDescription}
                    </td>
                    <td className="p-3.5 text-right font-semibold text-gray-900">
                      ${app.totalCompleted.toLocaleString()}
                    </td>
                    <td className="p-3.5 text-right text-gray-600">
                      ${app.retainage.toLocaleString()}
                    </td>
                    <td className="p-3.5 text-right font-semibold text-emerald-700">
                      ${app.netDue.toLocaleString()}
                    </td>
                    <td className="p-3.5 text-center whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          app.status === "Approved & Paid"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : app.status === "Under GC Review"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setSelectedSovApp(app)}
                        className="px-3 py-1.5 rounded-lg bg-[#12223B] text-white hover:bg-[#FFDB5A] hover:text-[#12223B] font-semibold text-xs transition-colors cursor-pointer"
                      >
                        View SOV
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal: View SOV (Schedule of Values) */}
      {selectedSovApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    AIA G703 Continuation Sheet — {selectedSovApp.appNumber}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Period Ending: {selectedSovApp.periodEnding} • Architect: Studio Architekten
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSovApp(null)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#F6F6F6] text-xs">
              <div>
                <p className="text-gray-500">Total Completed & Stored:</p>
                <p className="text-base font-semibold text-[#12223B]">
                  ${selectedSovApp.totalCompleted.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Retainage Withheld (10%):</p>
                <p className="text-base font-semibold text-[#007EFF]">
                  ${selectedSovApp.retainage.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Net Payment Due:</p>
                <p className="text-base font-semibold text-emerald-700">
                  ${selectedSovApp.netDue.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-100 text-[#12223B] font-semibold">
                  <tr>
                    <th className="p-2.5">Item</th>
                    <th className="p-2.5">Description of Work</th>
                    <th className="p-2.5 text-right">Scheduled Value</th>
                    <th className="p-2.5 text-right">Previous Completed</th>
                    <th className="p-2.5 text-right">This Period</th>
                    <th className="p-2.5 text-right">Total Completed</th>
                    <th className="p-2.5 text-center">%</th>
                    <th className="p-2.5 text-right">Balance to Finish</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                  {selectedSovApp.sovItems.map((item) => (
                    <tr key={item.itemNo} className="hover:bg-gray-50/50">
                      <td className="p-2.5 font-mono text-gray-900">{item.itemNo}</td>
                      <td className="p-2.5 font-semibold text-[#12223B]">{item.description}</td>
                      <td className="p-2.5 text-right">${item.scheduledValue.toLocaleString()}</td>
                      <td className="p-2.5 text-right">${item.prevCompleted.toLocaleString()}</td>
                      <td className="p-2.5 text-right text-emerald-700">
                        ${item.thisPeriod.toLocaleString()}
                      </td>
                      <td className="p-2.5 text-right font-semibold text-gray-900">
                        ${item.totalCompleted.toLocaleString()}
                      </td>
                      <td className="p-2.5 text-center font-semibold text-blue-700">
                        {item.pctCompleted}%
                      </td>
                      <td className="p-2.5 text-right text-gray-600">
                        ${item.balance.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => {
                  setToastMessage(`Downloading official AIA G702 / G703 PDF package...`);
                  setTimeout(() => setToastMessage(""), 3000);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download AIA G702 / G703 PDF
              </button>
              <button
                type="button"
                onClick={() => setSelectedSovApp(null)}
                className="px-5 py-2.5 rounded-lg bg-[#12223B] text-white font-semibold text-xs sm:text-sm hover:bg-[#FFDB5A] hover:text-[#12223B] transition-colors"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Submit New Pay App (G702) */}
      {isNewPayAppModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#12223B] flex items-center justify-center text-[#FFDB5A]">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#12223B]">
                    Submit Pay Application #5
                  </h3>
                  <p className="text-xs text-gray-500">AIA Document G702 Sworn Statement</p>
                </div>
              </div>
              <button
                onClick={() => setIsNewPayAppModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePayApp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Period Ending Date
                  </label>
                  <input
                    type="text"
                    required
                    value={newPeriodEnding}
                    onChange={(e) => setNewPeriodEnding(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Cumulative Completed ($ USD)
                  </label>
                  <input
                    type="number"
                    required
                    value={newTotalCompleted}
                    onChange={(e) => setNewTotalCompleted(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Summary of Work Completed in Period
                </label>
                <textarea
                  rows={3}
                  required
                  value={newWorkDescription}
                  onChange={(e) => setNewWorkDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm text-[#12223B] focus:border-[#FFDB5A] focus:outline-none"
                ></textarea>
              </div>

              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Statutory Retainage (10%):</span>
                  <span className="font-semibold text-gray-900">
                    ${Math.round((parseFloat(newTotalCompleted) || 0) * 0.1).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-1.5">
                  <span className="text-gray-700 font-semibold">Estimated Net Due:</span>
                  <span className="font-semibold text-emerald-700">
                    ${Math.max(0, Math.round((parseFloat(newTotalCompleted) || 0) * 0.9 - 166050)).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-xs text-blue-900">
                <input
                  type="checkbox"
                  required
                  id="swornStatement"
                  className="mt-0.5 rounded border-gray-300 text-[#12223B] focus:ring-[#FFDB5A]"
                />
                <label htmlFor="swornStatement" className="leading-snug">
                  The undersigned Subcontractor certifies that work completed to date meets contract specifications and all sub-tier materialmen and labor have been satisfied.
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsNewPayAppModalOpen(false)}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm hover:bg-[#ffe37e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Transmit G702 Pay App
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
