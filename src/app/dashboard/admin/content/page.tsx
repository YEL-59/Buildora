"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Save,
  ArrowUpRight,
  RefreshCw,
  Trash2,
  Check,
  FileImage,
  Link as LinkIcon,
  X,
  Plus,
} from "lucide-react";

interface HeroSlideData {
  id: number;
  label: string;
  image: string;
}

export default function ContentCMSManagerPage() {
  const [activeTab, setActiveTab] = useState<
    "hero" | "about" | "why" | "video" | "cta" | "faq"
  >("hero");
  const [saveToast, setSaveToast] = useState(false);
  const [urlModalSlideId, setUrlModalSlideId] = useState<number | null>(null);
  const [tempUrl, setTempUrl] = useState("");

  // Hero section form states matching user screenshot exactly
  const [badgeText, setBadgeText] = useState("Built With Trust");
  const [yearsExperience, setYearsExperience] = useState("15");
  const [mainHeadline, setMainHeadline] = useState(
    "Building excellence since day one"
  );
  const [subtitle, setSubtitle] = useState(
    "Our experienced team transforms ideas into exceptional residential and commercial developments using premium materials, innovative engineering."
  );
  const [ctaButtonText, setCtaButtonText] = useState("Get Started");
  const [videoPopupUrl, setVideoPopupUrl] = useState(
    "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1"
  );

  // 3 Slides matching screenshot
  const [slides, setSlides] = useState<HeroSlideData[]>([
    {
      id: 1,
      label: "Hero Slide 1 Image",
      image: "/images/hero-bg-image.jpg",
    },
    {
      id: 2,
      label: "Hero Slide 2 Image",
      image: "/images/hero-slide-2.jpg",
    },
    {
      id: 3,
      label: "Hero Slide 3 Image",
      image: "/images/hero-slide-3.jpg",
    },
  ]);

  // Preset images pool
  const imagePresets = [
    "/images/hero-bg-image.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
    "/images/project-1.jpg",
    "/images/project-2.jpg",
    "/images/project-3.jpg",
    "/images/project-4.jpg",
    "/images/service-image-1.jpg",
    "/images/service-image-2.jpg",
  ];

  const handleCyclePreset = (id: number) => {
    setSlides((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const currentIdx = imagePresets.indexOf(s.image);
        const nextIdx = (currentIdx + 1) % imagePresets.length;
        return { ...s, image: imagePresets[nextIdx] };
      })
    );
  };

  const handleRemoveImage = (id: number) => {
    setSlides((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, image: "/images/hero-bg-image.jpg" } : s
      )
    );
  };

  const handleApplyUrl = (id: number) => {
    if (tempUrl.trim()) {
      setSlides((prev) =>
        prev.map((s) => (s.id === id ? { ...s, image: tempUrl.trim() } : s))
      );
      setTempUrl("");
    }
    setUrlModalSlideId(null);
  };

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3500);
  };

  // About tab states
  const [aboutBadge, setAboutBadge] = useState("About Buildora");
  const [aboutTitle, setAboutTitle] = useState(
    "Crafting modern architectural landmarks with over 15 years of industry excellence"
  );
  const [aboutDesc, setAboutDesc] = useState(
    "We deliver turnkey construction, advanced engineering, and sustainable development across commercial, residential, and industrial sectors."
  );

  // Why choose us states
  const [whyBadge, setWhyBadge] = useState("Why Choose Us");
  const [whyTitle, setWhyTitle] = useState(
    "Why 250+ clients trust our construction engineering"
  );

  // Video banner states
  const [videoTitle, setVideoTitle] = useState(
    "Watch our high-rise structural framing and engineering in action"
  );

  // Quote CTA states
  const [ctaTitle, setCtaTitle] = useState(
    "Ready to build your landmark commercial or residential property?"
  );
  const [ctaDesc, setCtaDesc] = useState(
    "Speak with our principal structural engineers and get an itemized quote within 24 hours."
  );

  // FAQ states
  const [faqs, setFaqs] = useState([
    {
      q: "What certifications do Buildora site engineers hold?",
      a: "All our site supervisors are licensed Professional Engineers (PE, SE) with mandatory OSHA 30 and LEED AP certifications.",
    },
    {
      q: "How does Buildora ensure on-time milestone delivery?",
      a: "We utilize real-time BIM modeling, 4D scheduling, and integrated cloud field logs transmitted daily from active job sites.",
    },
    {
      q: "Can clients monitor construction progress remotely?",
      a: "Yes. Our Client Property Portal provides daily photo journals, milestone progress bars, and payment schedules updated live.",
    },
  ]);

  const tabs = [
    { key: "hero", label: "Hero Banner & Slides" },
    { key: "about", label: "About Us Section" },
    { key: "why", label: "Why Choose Us" },
    { key: "video", label: "Video Banner Section" },
    { key: "cta", label: "Quote Estimate CTA" },
    { key: "faq", label: "FAQ Accordions" },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Save Success Alert */}
      {saveToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#12223B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFDB5A] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">
            Hero changes saved and published live to website!
          </span>
        </div>
      )}

      {/* Top Horizontal Section Tabs (Pills) matching screenshot */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 overflow-hidden cursor-pointer group border ${
                isActive
                  ? "bg-[#FFDB5A] text-[#12223B] border-[#FFDB5A] shadow-xs"
                  : "bg-white text-[#28374D] border-gray-200 hover:border-[#FFDB5A]"
              }`}
            >
              {!isActive && (
                <div className="absolute inset-x-0 bottom-0 h-0 bg-[#FFDB5A] transition-all duration-500 ease-out group-hover:h-full pointer-events-none" />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          TAB 1: HERO BANNER & SLIDES (MATCHING USER SCREENSHOT)
      ======================================================== */}
      {activeTab === "hero" && (
        <form
          onSubmit={handleSaveHero}
          className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs"
        >
          {/* Card Header: Title & Save Button */}
          <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Hero Banner & Slider CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage main headline, subtext, background images, and video modal
              </p>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
            >
              <Save className="w-4 h-4" />
              <span>Save Hero Changes</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Top Badge Text */}
            <div>
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                Top Badge Text
              </label>
              <input
                type="text"
                name="badge"
                value={badgeText}
                onChange={(e) => setBadgeText(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            {/* Years of Experience Stat */}
            <div>
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                Years of Experience Stat
              </label>
              <input
                type="number"
                name="yearsExperience"
                value={yearsExperience}
                onChange={(e) => setYearsExperience(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            {/* Main Headline (Title) */}
            <div className="sm:col-span-2">
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                Main Headline (Title)
              </label>
              <input
                type="text"
                name="title"
                value={mainHeadline}
                onChange={(e) => setMainHeadline(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] font-semibold focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            {/* Hero Subtitle Description */}
            <div className="sm:col-span-2">
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                Hero Subtitle Description
              </label>
              <textarea
                rows={3}
                name="description"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            {/* CTA Button Text */}
            <div>
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                CTA Button Text
              </label>
              <input
                type="text"
                name="buttonText"
                value={ctaButtonText}
                onChange={(e) => setCtaButtonText(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            {/* YouTube Video Popup URL */}
            <div>
              <label className="text-sm sm:text-base font-semibold text-[#12223B] mb-1.5 block">
                YouTube Video Popup URL
              </label>
              <input
                type="text"
                name="videoUrl"
                value={videoPopupUrl}
                onChange={(e) => setVideoPopupUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm sm:text-base text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>
          </div>

          {/* HERO BACKGROUND SLIDER IMAGES (3 SLIDES) */}
          <div className="pt-4 border-t border-gray-100 space-y-4">
            <label className="text-sm sm:text-base font-semibold text-[#12223B] uppercase tracking-wider block">
              HERO BACKGROUND SLIDER IMAGES (3 SLIDES)
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slides.map((slide) => (
                <div key={slide.id} className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-sm sm:text-base font-semibold text-[#12223B]">
                      {slide.label}
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCyclePreset(slide.id)}
                        className="text-xs sm:text-[13px] font-semibold text-[#12223B] hover:text-[#28374D] flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 hover:bg-[#FFDB5A] transition-colors cursor-pointer"
                      >
                        <FileImage className="w-3.5 h-3.5" />
                        <span>Presets</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUrlModalSlideId(slide.id);
                          setTempUrl(slide.image);
                        }}
                        className="text-xs sm:text-[13px] font-semibold text-[#12223B] hover:text-[#28374D] flex items-center gap-1 px-2.5 py-1 rounded bg-gray-100 hover:bg-[#FFDB5A] transition-colors cursor-pointer"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Enter URL</span>
                      </button>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100 group transition-all aspect-video">
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />

                    {/* Hover Overlay with Change Image & Remove */}
                    <div className="absolute inset-0 bg-[#12223B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-2xs">
                      <button
                        type="button"
                        onClick={() => handleCyclePreset(slide.id)}
                        className="px-4 py-2 rounded-xl bg-[#FFDB5A] text-[#12223B] font-semibold text-xs sm:text-sm shadow-md hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Change Image</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(slide.id)}
                        className="px-3.5 py-2 rounded-xl bg-rose-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-rose-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>

                    {/* Bottom Status Bar */}
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
              ))}
            </div>
          </div>
        </form>
      )}

      {/* ========================================================
          TAB 2: ABOUT US SECTION
      ======================================================== */}
      {activeTab === "about" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaveToast(true);
            setTimeout(() => setSaveToast(false), 3000);
          }}
          className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs"
        >
          <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                About Us Section CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage corporate backstory, mission statement, and photography
              </p>
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save About Section</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Section Pill Badge
              </label>
              <input
                type="text"
                value={aboutBadge}
                onChange={(e) => setAboutBadge(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                About Headline (Title)
              </label>
              <input
                type="text"
                value={aboutTitle}
                onChange={(e) => setAboutTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Detailed Narrative Description
              </label>
              <textarea
                rows={3}
                value={aboutDesc}
                onChange={(e) => setAboutDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  About Feature Image 1
                </label>
                <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-200">
                  <Image
                    src="/images/about-us-image-1.jpg"
                    alt="About 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1">
                  About Feature Image 2
                </label>
                <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-200">
                  <Image
                    src="/images/about-us-image-2.jpg"
                    alt="About 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* ========================================================
          TAB 3: WHY CHOOSE US
      ======================================================== */}
      {activeTab === "why" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Why Choose Us CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Highlight corporate differentiators, certifications, and guarantees
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSaveToast(true);
                setTimeout(() => setSaveToast(false), 3000);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Why Choose Us</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Top Badge Text
              </label>
              <input
                type="text"
                value={whyBadge}
                onChange={(e) => setWhyBadge(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B]"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Main Headline
              </label>
              <input
                type="text"
                value={whyTitle}
                onChange={(e) => setWhyTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B]"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: VIDEO BANNER SECTION
      ======================================================== */}
      {activeTab === "video" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Video Banner Section CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Cinematic video teaser modal and construction drone footage
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSaveToast(true);
                setTimeout(() => setSaveToast(false), 3000);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Video Section</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Video Headline Text
              </label>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B]"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 5: QUOTE ESTIMATE CTA
      ======================================================== */}
      {activeTab === "cta" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Quote Estimate CTA CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Conversion box before footer across all project and service pages
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSaveToast(true);
                setTimeout(() => setSaveToast(false), 3000);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save CTA Box</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Call-To-Action Title
              </label>
              <input
                type="text"
                value={ctaTitle}
                onChange={(e) => setCtaTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                Call-To-Action Subtitle
              </label>
              <textarea
                rows={2}
                value={ctaDesc}
                onChange={(e) => setCtaDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B]"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 6: FAQ ACCORDIONS
      ======================================================== */}
      {activeTab === "faq" && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                FAQ Accordions CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage client questions and engineering process clarifications
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSaveToast(true);
                setTimeout(() => setSaveToast(false), 3000);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save FAQs</span>
            </button>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200/70 space-y-2"
              >
                <input
                  type="text"
                  value={faq.q}
                  onChange={(e) => {
                    const next = [...faqs];
                    next[idx].q = e.target.value;
                    setFaqs(next);
                  }}
                  className="w-full p-2 bg-white rounded border border-gray-200 text-sm font-bold text-[#12223B]"
                />
                <textarea
                  rows={2}
                  value={faq.a}
                  onChange={(e) => {
                    const next = [...faqs];
                    next[idx].a = e.target.value;
                    setFaqs(next);
                  }}
                  className="w-full p-2 bg-white rounded border border-gray-200 text-xs sm:text-sm text-gray-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enter URL Modal */}
      {urlModalSlideId !== null && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#12223B]">
                Enter Custom Image URL
              </h4>
              <button
                type="button"
                onClick={() => setUrlModalSlideId(null)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Image Web Address (e.g. /images/project-1.jpg or HTTPS URL)
              </label>
              <input
                type="text"
                placeholder="/images/project-1.jpg"
                value={tempUrl}
                onChange={(e) => setTempUrl(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setUrlModalSlideId(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleApplyUrl(urlModalSlideId)}
                className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-lg cursor-pointer"
              >
                Apply URL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
