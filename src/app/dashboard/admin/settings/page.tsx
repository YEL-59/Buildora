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
  RotateCcw,
  Palette,
  Sparkles,
  Copy,
  ArrowUpRight,
  Sliders,
} from "lucide-react";
import {
  useTheme,
  DEFAULT_ACCENT_COLOR,
  THEME_COLOR_PRESETS,
  getContrastTextColor,
} from "@/context/ThemeContext";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<string>("theme"); // default to "theme" as shown in user screenshot
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedHex, setCopiedHex] = useState(false);

  // Global Theme Context
  const { accentColor, contrastColor, setAccentColor, resetDefault } = useTheme();

  // Custom Color Studio state
  const [customHex, setCustomHex] = useState(accentColor);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSelectPreset = (name: string, hex: string) => {
    setAccentColor(hex);
    setCustomHex(hex);
    showToast(`Accent color updated to "${name}" (${hex}) across full website!`);
  };

  const handleApplyCustomColor = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    let formatted = customHex.trim();
    if (!formatted.startsWith("#")) {
      formatted = `#${formatted}`;
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(formatted)) {
      setAccentColor(formatted);
      showToast(`Custom accent color ${formatted} applied across full website!`);
    } else {
      showToast("Please enter a valid 6-character hex color (e.g. #FFDB5A)");
    }
  };

  const handleCopyHex = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(accentColor);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
      showToast(`Copied ${accentColor} to clipboard!`);
    }
  };

  // Company profile states
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

  const handleSaveCompany = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Company profile saved successfully!");
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#12223B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <div
            className="w-3.5 h-3.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Tabs Header Card */}
      <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-gray-200/80 shadow-xs flex items-center gap-2 overflow-x-auto">
        {[
          { id: "company", label: "Company Profile", icon: Building2 },
          { id: "theme", label: "Theme & Accent Color", icon: Palette },
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
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#FFDB5A] text-[#12223B] shadow-xs"
                  : "text-gray-600 hover:text-[#12223B] hover:bg-gray-100"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          TAB 1: THEME & ACCENT COLOR (MATCHING SCREENSHOT)
      ======================================================== */}
      {activeTab === "theme" && (
        <div className="space-y-6">
          {/* Card 1: Primary Accent Color Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md transition-colors"
                style={{ backgroundColor: accentColor }}
              >
                <Palette
                  className="w-7 h-7"
                  style={{ color: contrastColor }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#12223B]">
                    Primary Accent Color
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Dynamically applies to all buttons, interactive tabs, cards, badges, and hover animations across public pages & dashboard.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 bg-[#F6F6F6] px-4 py-2.5 rounded-xl border border-gray-200/80">
                <span className="text-xs text-gray-500 font-medium">Active HEX:</span>
                <span className="font-mono font-bold text-sm text-[#12223B]">
                  {accentColor.toUpperCase()}
                </span>
                <button
                  type="button"
                  onClick={handleCopyHex}
                  title="Copy Hex Code"
                  className="p-1 rounded text-gray-400 hover:text-[#12223B] transition-colors cursor-pointer"
                >
                  {copiedHex ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {accentColor.toUpperCase() !== DEFAULT_ACCENT_COLOR.toUpperCase() && (
                <button
                  type="button"
                  onClick={() => {
                    resetDefault();
                    setCustomHex(DEFAULT_ACCENT_COLOR);
                    showToast(`Reset to default Buildora Gold (${DEFAULT_ACCENT_COLOR})`);
                  }}
                  className="px-3.5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default ({DEFAULT_ACCENT_COLOR})</span>
                </button>
              )}
            </div>
          </div>

          {/* Card 2: Curated Color Palette Presets (12 Available Palettes) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-gray-100">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#12223B] flex items-center gap-2">
                  <Sparkles
                    className="w-5 h-5 transition-colors"
                    style={{ color: accentColor }}
                  />
                  <span>Curated Color Palette Presets</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  Click any preset color to immediately apply it across the entire application.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-[#F6F6F6] text-gray-600 rounded-lg">
                {THEME_COLOR_PRESETS.length} Available Palettes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {THEME_COLOR_PRESETS.map((preset) => {
                const isSelected =
                  accentColor.toUpperCase() === preset.hex.toUpperCase();
                const textContrast = getContrastTextColor(preset.hex);

                return (
                  <button
                    key={preset.hex}
                    type="button"
                    onClick={() => handleSelectPreset(preset.name, preset.hex)}
                    className={`group relative p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                      isSelected
                        ? "border-[#12223B] bg-gray-50 ring-2 ring-[#12223B]/10 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/70"
                    }`}
                  >
                    {/* Swatch */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-inner"
                      style={{ backgroundColor: preset.hex }}
                    >
                      {isSelected ? (
                        <Check
                          className="w-6 h-6 stroke-[3]"
                          style={{ color: textContrast }}
                        />
                      ) : (
                        <div
                          className="w-2.5 h-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: textContrast }}
                        />
                      )}
                    </div>

                    {/* Meta */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm font-bold text-[#12223B] truncate">
                          {preset.name}
                        </span>
                        {preset.isDefault && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-gray-500 block mt-0.5">
                        {preset.hex.toUpperCase()}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 3: Custom Color Studio */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-5">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#12223B] flex items-center gap-2">
                <Sliders
                  className="w-5 h-5 transition-colors"
                  style={{ color: accentColor }}
                />
                <span>Custom Color Studio</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Pick any bespoke hex color to match your custom brand guidelines.
              </p>
            </div>

            <form
              onSubmit={handleApplyCustomColor}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Visual Color Picker */}
              <div className="relative flex items-center gap-3 p-2.5 pr-4 rounded-xl border border-gray-200 bg-gray-50">
                <div
                  className="w-10 h-10 rounded-lg relative overflow-hidden flex items-center justify-center border border-gray-300 cursor-pointer shadow-xs"
                  style={{ backgroundColor: customHex }}
                >
                  <input
                    type="color"
                    value={
                      /^#[0-9A-Fa-f]{6}$/.test(customHex) ? customHex : "#FFDB5A"
                    }
                    onChange={(e) => {
                      setCustomHex(e.target.value);
                      setAccentColor(e.target.value);
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#12223B] block">
                    Visual Color Picker
                  </span>
                  <span className="text-[11px] text-gray-400 block">
                    Click swatch to pick color
                  </span>
                </div>
              </div>

              {/* Text Input */}
              <div className="relative w-44">
                <input
                  type="text"
                  value={customHex}
                  onChange={(e) => setCustomHex(e.target.value)}
                  placeholder="#FFDB5A"
                  maxLength={7}
                  className="w-full h-12 px-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-sm font-mono font-bold text-[#12223B] uppercase focus:outline-none focus:border-[#12223B] transition-colors"
                />
              </div>

              {/* Apply Button */}
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-[#FFDB5A] text-[#12223B] hover:opacity-90 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Apply Color</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: COMPANY PROFILE
      ======================================================== */}
      {activeTab === "company" && (
        <form onSubmit={handleSaveCompany} className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#12223B]">
                Corporate Profile & Legal Registration
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                These details appear on official client invoices, contracts, and estimate proposals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
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
                className="px-6 py-2.5 bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ========================================================
          TAB 3: SITE & SAFETY STANDARDS
      ======================================================== */}
      {activeTab === "safety" && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-4">
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
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <input
                  type="checkbox"
                  defaultChecked={rule.defaultChecked}
                  className="w-4 h-4 text-[#FFDB5A] rounded"
                />
                <span className="text-xs sm:text-sm font-semibold text-[#12223B]">
                  {rule.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: OTHER TABS (NOTIFICATIONS / SECURITY)
      ======================================================== */}
      {activeTab !== "theme" && activeTab !== "company" && activeTab !== "safety" && (
        <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs text-center space-y-3">
          <ShieldCheck
            className="w-10 h-10 mx-auto"
            style={{ color: accentColor }}
          />
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
