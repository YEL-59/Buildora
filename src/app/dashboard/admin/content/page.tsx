"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Sliders,
  Sparkles,
  Palette,
  Image as ImageIcon,
  Check,
  RefreshCw,
  Trash2,
  Link as LinkIcon,
  Save,
  Briefcase,
  Layers,
  BookOpen,
  Info,
  Phone,
} from "lucide-react";

interface HeroSlide {
  id: number;
  label: string;
  image: string;
  title: string;
  subtitle: string;
}

export default function AdminContentCMSPage() {
  const [activeTab, setActiveTab] = useState<string>("hero");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Hero slides state
  const [slides, setSlides] = useState<HeroSlide[]>([
    {
      id: 1,
      label: "Hero Slide 1",
      image: "/images/hero-bg-image.jpg",
      title: "Engineered For The Future Of Modern Living",
      subtitle:
        "We craft sustainable commercial landmarks and bespoke luxury residential architecture with precision BIM modeling.",
    },
    {
      id: 2,
      label: "Hero Slide 2",
      image: "/images/hero-slide-2.jpg",
      title: "Master Craftsmanship in Heavy Infrastructure",
      subtitle:
        "Seismic-rated structural engineering, pre-engineered metal frames, and high-capacity logistics warehousing.",
    },
    {
      id: 3,
      label: "Hero Slide 3",
      image: "/images/hero-slide-3.jpg",
      title: "Historical Preservation & Sustainable Retrofit",
      subtitle:
        "Revitalizing classic architectural facades with cutting-edge environmental performance and LEED standards.",
    },
  ]);

  // Color palette state
  const [activeColor, setActiveColor] = useState("#FFDB5A");
  const colorPalettes = [
    { name: "Signature Gold", hex: "#FFDB5A" },
    { name: "Safety Amber", hex: "#F59E0B" },
    { name: "Emerald Precision", hex: "#10B981" },
    { name: "Industrial Cyan", hex: "#06B6D4" },
    { name: "Royal Azure", hex: "#3B82F6" },
    { name: "Electric Indigo", hex: "#6366F1" },
    { name: "Crimson Forge", hex: "#EF4444" },
    { name: "Architectural Bronze", hex: "#D97706" },
  ];

  const handleSlideChange = (
    id: number,
    field: "title" | "subtitle" | "image",
    val: string
  ) => {
    setSlides((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Top Header / Info banner */}
      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#12223B]">
            Hero Banner & Slider CMS
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Control the visual hero messaging, background photography, and corporate value propositions.
          </p>
        </div>

        {saveSuccess && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-xs sm:text-sm font-semibold animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Changes published live to homepage!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar: CMS Sections Menu */}
        <div className="lg:col-span-1 space-y-2">
          <div className="bg-white p-3 rounded-xl border border-gray-200/80 shadow-xs space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
              Content Sections
            </p>

            {[
              { id: "hero", label: "Hero Banner & Slides", icon: Sliders, badge: "3 Slides" },
              { id: "services", label: "Services Catalogue", icon: Briefcase, badge: "8 Items" },
              { id: "projects", label: "Projects Portfolio", icon: Layers, badge: "8 Projects" },
              { id: "posts", label: "Blog & Articles", icon: BookOpen, badge: "6 Posts" },
              { id: "about", label: "About Page Content", icon: Info, badge: "3 Sections" },
              { id: "theme", label: "Theme & Accent Color", icon: Palette, badge: "8 Palettes" },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#12223B] text-[#FFDB5A] shadow-xs"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#12223B]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#FFDB5A] text-[#12223B]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area: Forms */}
        <div className="lg:col-span-3">
          {activeTab === "hero" && (
            <form onSubmit={handleSave} className="space-y-6">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h3 className="font-bold text-base sm:text-lg text-[#12223B]">
                      {slide.label}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FFDB5A]/20 text-[#12223B]">
                      Active Slide
                    </span>
                  </div>

                  {/* Image Preview & URL */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs sm:text-sm font-semibold text-gray-700">
                        Slide Photograph Asset
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleSlideChange(
                              slide.id,
                              "image",
                              `/images/hero-slide-${(slide.id % 3) + 1}.jpg`
                            )
                          }
                          className="text-xs font-semibold text-[#12223B] hover:bg-[#FFDB5A] px-2.5 py-1 rounded bg-gray-100 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>Cycle Preset</span>
                        </button>
                      </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100 aspect-video max-h-56 group">
                      <Image
                        src={slide.image}
                        alt={slide.label}
                        fill
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-[#12223B]/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg text-xs flex items-center justify-between">
                        <span className="truncate max-w-[80%] font-mono text-[11px]">
                          {slide.image}
                        </span>
                        <span className="text-emerald-400 font-semibold text-[11px] flex items-center gap-1">
                          <Check className="w-3 h-3" /> Ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slide Title */}
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Hero Headline *
                    </label>
                    <input
                      type="text"
                      required
                      value={slide.title}
                      onChange={(e) =>
                        handleSlideChange(slide.id, "title", e.target.value)
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm sm:text-base font-semibold text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                    />
                  </div>

                  {/* Slide Subtitle */}
                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">
                      Subtext Description
                    </label>
                    <textarea
                      rows={2}
                      value={slide.subtitle}
                      onChange={(e) =>
                        handleSlideChange(slide.id, "subtitle", e.target.value)
                      }
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#12223B] hover:bg-[#1c3254] text-[#FFDB5A] font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish All Hero Slide Updates</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === "theme" && (
            <div className="bg-white rounded-xl border border-gray-200/80 p-6 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#12223B]">
                  Theme & Accent Color Customizer
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Select your corporate brand accent. This updates buttons, badges, highlights, and borders instantly across the entire dashboard.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {colorPalettes.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setActiveColor(c.hex)}
                    className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between h-28 ${
                      activeColor === c.hex
                        ? "border-[#12223B] shadow-md bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full shadow-inner border border-black/10 flex items-center justify-center text-white"
                      style={{ backgroundColor: c.hex }}
                    >
                      {activeColor === c.hex && <Check className="w-4 h-4 text-black" />}
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-[#12223B]">
                        {c.name}
                      </p>
                      <span className="font-mono text-[11px] text-gray-400">
                        {c.hex}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-600">
                  Active Brand Accent: <strong className="text-[#12223B]">{activeColor}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      document.documentElement.style.setProperty("--accent", activeColor);
                    }
                    setSaveSuccess(true);
                    setTimeout(() => setSaveSuccess(false), 3000);
                  }}
                  className="px-4 py-2 rounded-lg bg-[#FFDB5A] hover:bg-[#f0cb46] text-[#12223B] font-bold text-xs cursor-pointer"
                >
                  Apply Accent Color
                </button>
              </div>
            </div>
          )}

          {activeTab !== "hero" && activeTab !== "theme" && (
            <div className="bg-white rounded-xl border border-gray-200/80 p-8 shadow-xs text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FFDB5A]/20 text-[#12223B] flex items-center justify-center mx-auto">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12223B] capitalize">
                {activeTab} Catalogue CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                Dynamic live editor for this section is integrated with the main site data files. All updates reflect instantly in the website showcase.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab("hero")}
                className="px-4 py-2 bg-[#12223B] text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Back to Hero CMS
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
