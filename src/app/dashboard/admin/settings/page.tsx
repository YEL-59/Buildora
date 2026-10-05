"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Settings,
  Building2,
  ShieldCheck,
  Bell,
  Lock,
  Save,
  Check,
  Upload,
  RefreshCw,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("company");
  const [saveToast, setSaveToast] = useState(false);

  // Form states
  const [companyName, setCompanyName] = useState(
    "Buildora Construction & Engineering Corp."
  );
  const [taxId, setTaxId] = useState("US-94820184-B");
  const [email, setEmail] = useState("corporate@buildora.com");
  const [phone, setPhone] = useState("+1 (555) 782-9000");
  const [address, setAddress] = useState(
    "742 Evergreen Terrace, Suite 500, Chicago, IL 60601"
  );
  const [currency, setCurrency] = useState("USD");
  const [timezone, setTimezone] = useState("America/Chicago (Central Time)");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Page Title Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#12223B]">
            System & Construction Settings
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Configure corporate profiles, safety compliance thresholds, notification preferences, and security access.
          </p>
        </div>

        {saveToast && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-xs sm:text-sm font-semibold animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
        {[
          { id: "company", label: "Company Profile", icon: Building2 },
          { id: "notifications", label: "Notifications & Alerts", icon: Bell },
          { id: "safety", label: "Site & Safety Standards", icon: ShieldCheck },
          { id: "security", label: "Security & Audit Logs", icon: Lock },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-[#12223B] text-[#FFDB5A] shadow-xs"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Settings Form */}
      {activeTab === "company" && (
        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#12223B]">
                Corporate Profile & Legal Registration
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                These details appear on official client invoices, contracts, and estimate proposals.
              </p>
            </div>

            {/* Profile Photos & Logo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
              {/* Administrator Profile Photo */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block">
                  Administrator Profile Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#12223B]">
                    <Image
                      src="/images/author-1.jpg"
                      alt="Michael Anderson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#12223B] block">
                      Michael Anderson
                    </span>
                    <span className="text-[11px] text-gray-500 block mb-2">
                      Principal Executive
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded text-xs font-semibold text-gray-700 cursor-pointer"
                    >
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>

              {/* Company Brand Logo */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700 block">
                  Company Brand Mark & Emblem
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#12223B] flex items-center justify-center border border-white/10 p-2">
                    <Image
                      src="/images/logo.svg"
                      alt="Buildora Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#12223B] block">
                      Buildora Construction
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold block mb-2">
                      ✓ Vector SVG Active
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1 bg-white hover:bg-gray-100 border border-gray-200 rounded text-xs font-semibold text-gray-700 cursor-pointer"
                    >
                      Replace Logo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Entity Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Company Legal Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Tax Identification Number (EIN / VAT)
                </label>
                <input
                  type="text"
                  value={taxId}
                  onChange={(e) => setTaxId(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-mono text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Official Contact Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Official Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>
            </div>

            {/* Headquarters Address */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                Headquarters Physical Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
              />
            </div>

            {/* Currency & Timezone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  System Default Currency
                </label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-semibold text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                >
                  <option value="USD">USD - US Dollar ($)</option>
                  <option value="CAD">CAD - Canadian Dollar ($)</option>
                  <option value="EUR">EUR - Euro (€)</option>
                  <option value="GBP">GBP - British Pound (£)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Default Operational Timezone
                </label>
                <input
                  type="text"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {activeTab === "safety" && (
        <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-4">
          <h3 className="text-lg font-bold text-[#12223B]">
            OSHA & Site Safety Compliance Standards
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Define mandatory daily PPE verification, rigging inspections, and supervisor signoff rules.
          </p>
          <div className="space-y-3 pt-2">
            {[
              { label: "Daily Morning Tool Box Safety Talks", defaultChecked: true },
              { label: "Mandatory 100% Tie-Off at 6+ Feet Elevation", defaultChecked: true },
              { label: "Real-time Crane Anemometer Wind Speed Alerts (>25 mph)", defaultChecked: true },
              { label: "Digital Biometric Site Gate Access Log", defaultChecked: false },
            ].map((rule, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  defaultChecked={rule.defaultChecked}
                  className="w-4 h-4 text-[#FFDB5A] rounded focus:ring-[#FFDB5A]"
                />
                <span className="text-xs sm:text-sm font-semibold text-[#12223B]">
                  {rule.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {activeTab !== "company" && activeTab !== "safety" && (
        <div className="bg-white rounded-xl border border-gray-200/80 p-8 shadow-xs text-center space-y-3">
          <ShieldCheck className="w-10 h-10 text-[#FFDB5A] mx-auto" />
          <h3 className="text-base font-bold text-[#12223B] capitalize">
            {activeTab} Management
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
            Audit logging and multi-factor authentication preferences configured by default with enterprise AES-256 encryption.
          </p>
        </div>
      )}
    </div>
  );
}
