"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Settings, Save, Shield, Bell, Lock } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/dashboard/admin" className="hover:text-white">Admin</Link>
          <span>/</span>
          <span className="text-[#FFDB5A] font-semibold">System Settings</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white mt-1">
          Platform Configuration &amp; Security
        </h1>
      </div>

      <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-6 shadow-xl">
        <div>
          <h2 className="text-base font-bold text-white mb-1">Company Profile</h2>
          <p className="text-xs text-gray-400">Manage legal contractor license, primary email, and offices.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-xs text-gray-300 block mb-1">Company Name</label>
              <input type="text" defaultValue="Buildora Construction & Architecture Ltd." className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs" />
            </div>
            <div>
              <label className="text-xs text-gray-300 block mb-1">Contractor License #</label>
              <input type="text" defaultValue="CSLB-CA #1094821-B" className="w-full p-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs" />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h2 className="text-base font-bold text-white mb-1">Security &amp; Portal Permissions</h2>
          <p className="text-xs text-gray-400">Configure client portal access and engineer field permissions.</p>
          <div className="space-y-3 mt-4 text-xs">
            <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#FFDB5A] w-4 h-4 rounded" />
              <span>Allow clients to view live jobsite CCTV feeds</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#FFDB5A] w-4 h-4 rounded" />
              <span>Require digital PE signature on all daily site logs</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#FFDB5A] w-4 h-4 rounded" />
              <span>Automatic invoice generation upon milestone sign-off</span>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => {
              setSaved(true);
              setTimeout(() => setSaved(false), 2500);
            }}
            className="px-6 py-2.5 rounded-xl bg-[#FFDB5A] hover:bg-white text-[#12223B] font-bold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>{saved ? "Settings Saved!" : "Save Changes"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
