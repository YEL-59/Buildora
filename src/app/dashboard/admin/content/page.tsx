"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Layers,
  FolderKanban,
  FileText,
  Info,
  Globe,
  Palette,
  Save,
  Plus,
  Trash2,
  Edit3,
  ArrowUpRight,
  RotateCcw,
  Check,
  X,
  FileImage,
  Link as LinkIcon,
  MapPin,
  User,
  Calendar,
  Phone,
  Mail,
  Share2,
  Copy,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  useTheme,
  DEFAULT_ACCENT_COLOR,
  THEME_COLOR_PRESETS,
  getContrastTextColor,
} from "@/context/ThemeContext";
import { servicesData, Service } from "@/data/serviceData";
import { projectsData, Project } from "@/data/projectData";
import { blogPosts, BlogPost } from "@/data/blogData";

// Top 7 Tabs Definition
export type MainCMSTab =
  | "homepage"
  | "services"
  | "projects"
  | "blog"
  | "about"
  | "contact"
  | "theme";

interface HeroSlideData {
  id: number;
  label: string;
  image: string;
}

export default function ContentCMSManagerPage() {
  const [activeMainTab, setActiveMainTab] = useState<MainCMSTab>("about");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Image Presets Pool
  const imagePresets = [
    "/images/hero-bg-image.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
    "/images/page-header-bg.jpg",
    "/images/service-image-1.jpg",
    "/images/service-image-2.jpg",
    "/images/service-image-3.jpg",
    "/images/service-image-4.jpg",
    "/images/service-image-5.jpg",
    "/images/service-image-6.jpg",
    "/images/service-image-7.jpg",
    "/images/project-1.jpg",
    "/images/project-2.jpg",
    "/images/project-3.jpg",
    "/images/project-4.jpg",
    "/images/post-1.jpg",
    "/images/post-2.jpg",
    "/images/post-3.jpg",
    "/images/expertise-item-image-1.jpg",
    "/images/expertise-item-image-2.jpg",
    "/images/about-us-image-1.jpg",
    "/images/about-us-image-2.jpg",
  ];

  // Global Presets & URL Modal State
  const [presetModalOpen, setPresetModalOpen] = useState(false);
  const [urlModalOpen, setUrlModalOpen] = useState(false);
  const [activeImageFieldKey, setActiveImageFieldKey] = useState<string | null>(
    null
  );
  const [customUrlInput, setCustomUrlInput] = useState("");

  // =========================================================================
  // 1. HOMEPAGE SECTIONS STATE
  // =========================================================================
  const [homepageSubTab, setHomepageSubTab] = useState<
    "hero" | "about" | "why" | "video" | "cta" | "faq"
  >("hero");
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
  const [aboutBadge, setAboutBadge] = useState("About Buildora");
  const [aboutTitle, setAboutTitle] = useState(
    "Crafting modern architectural landmarks with over 15 years of industry excellence"
  );
  const [aboutDesc, setAboutDesc] = useState(
    "We deliver turnkey construction, advanced engineering, and sustainable development across commercial, residential, and industrial sectors."
  );
  const [whyBadge, setWhyBadge] = useState("Why Choose Us");
  const [whyTitle, setWhyTitle] = useState(
    "Why 250+ clients trust our construction engineering"
  );
  const [videoTitle, setVideoTitle] = useState(
    "Watch our high-rise structural framing and engineering in action"
  );
  const [ctaTitle, setCtaTitle] = useState(
    "Ready to build your landmark commercial or residential property?"
  );
  const [ctaDesc, setCtaDesc] = useState(
    "Speak with our principal structural engineers and get an itemized quote within 24 hours."
  );
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

  // =========================================================================
  // 2. SERVICES CATALOGUE STATE (8 Services)
  // =========================================================================
  const [servicesList, setServicesList] = useState<Service[]>(servicesData);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  // =========================================================================
  // 3. PROJECTS PORTFOLIO STATE (8 Projects)
  // =========================================================================
  const [projectsList, setProjectsList] = useState<Project[]>(projectsData);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // =========================================================================
  // 4. BLOG & ARTICLES STATE (6 Posts)
  // =========================================================================
  const [blogList, setBlogList] = useState<BlogPost[]>(blogPosts);
  const [editingArticle, setEditingArticle] = useState<BlogPost | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);

  // =========================================================================
  // 5. ABOUT PAGE CONTENT STATE
  // =========================================================================
  const [aboutHeaderTitle, setAboutHeaderTitle] = useState("About us");
  const [aboutHeroBgImage, setAboutHeroBgImage] = useState(
    "/images/page-header-bg.jpg"
  );
  const [aboutStatYears, setAboutStatYears] = useState("20");
  const [aboutStatProjects, setAboutStatProjects] = useState("1");
  const [aboutStatEngineers, setAboutStatEngineers] = useState("367");
  const [aboutCoreValuesHeadline, setAboutCoreValuesHeadline] = useState(
    "Our commitment to lasting excellence"
  );
  const [aboutBox1Title, setAboutBox1Title] = useState("Discover & Consult");
  const [aboutBox1Desc, setAboutBox1Desc] = useState(
    "Every project is completed with precision, attention to detail, and the highest construction standards."
  );
  const [aboutBox1Image, setAboutBox1Image] = useState(
    "/images/expertise-item-image-1.jpg"
  );
  const [aboutBox2Title, setAboutBox2Title] = useState(
    "Experienced Professionals"
  );
  const [aboutBox2Desc, setAboutBox2Desc] = useState(
    "Our skilled architects, engineers, and construction specialists bring years of industry expertise to every build."
  );
  const [aboutBox2Image, setAboutBox2Image] = useState(
    "/images/expertise-item-image-2.jpg"
  );

  // =========================================================================
  // 6. GLOBAL BRANDING & CONTACT CMS STATE
  // =========================================================================
  const [companyBrandName, setCompanyBrandName] = useState(
    "Buildora Construction"
  );
  const [hotlinePhone, setHotlinePhone] = useState("+1(213) 465 789");
  const [supportEmail, setSupportEmail] = useState("info@domain.com");
  const [officeAddress, setOfficeAddress] = useState(
    "245 Business Avenue, Central New York, USA"
  );
  const [mapEmbedUrl, setMapEmbedUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001223!2d-74.14448729227586!3d40.69763123308051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
  );
  const [socialFacebook, setSocialFacebook] = useState("https://facebook.com");
  const [socialTwitter, setSocialTwitter] = useState("https://twitter.com");
  const [socialInstagram, setSocialInstagram] = useState(
    "https://instagram.com"
  );
  const [socialLinkedIn, setSocialLinkedIn] = useState("https://linkedin.com");
  const [socialPinterest, setSocialPinterest] = useState(
    "https://pinterest.com"
  );

  // =========================================================================
  // 7. THEME & ACCENT COLOR (Context Connection)
  // =========================================================================
  const { accentColor, setAccentColor, resetDefault } = useTheme();
  const [customThemeHex, setCustomThemeHex] = useState(accentColor);
  const [prevAccentColor, setPrevAccentColor] = useState(accentColor);
  const [copiedHex, setCopiedHex] = useState(false);

  // Sync custom hex when accentColor changes externally (render-phase sync avoiding cascading renders)
  if (accentColor !== prevAccentColor) {
    setPrevAccentColor(accentColor);
    setCustomThemeHex(accentColor);
  }

  // Image Assignment Handlers
  const handleOpenPresets = (fieldKey: string) => {
    setActiveImageFieldKey(fieldKey);
    setPresetModalOpen(true);
  };

  const handleOpenUrlModal = (fieldKey: string) => {
    setActiveImageFieldKey(fieldKey);
    setCustomUrlInput("");
    setUrlModalOpen(true);
  };

  const handleApplyImageToField = (imagePath: string) => {
    if (!activeImageFieldKey) return;

    if (activeImageFieldKey.startsWith("hero-slide-")) {
      const slideId = parseInt(activeImageFieldKey.replace("hero-slide-", ""));
      setSlides((prev) =>
        prev.map((s) => (s.id === slideId ? { ...s, image: imagePath } : s))
      );
    } else if (activeImageFieldKey === "about-hero-bg") {
      setAboutHeroBgImage(imagePath);
    } else if (activeImageFieldKey === "about-box-1") {
      setAboutBox1Image(imagePath);
    } else if (activeImageFieldKey === "about-box-2") {
      setAboutBox2Image(imagePath);
    } else if (activeImageFieldKey === "service-edit") {
      if (editingService) {
        setEditingService({ ...editingService, image: imagePath });
      }
    } else if (activeImageFieldKey === "project-edit") {
      if (editingProject) {
        setEditingProject({ ...editingProject, image: imagePath });
      }
    } else if (activeImageFieldKey === "article-edit") {
      if (editingArticle) {
        setEditingArticle({ ...editingArticle, image: imagePath });
      }
    }

    setPresetModalOpen(false);
    setUrlModalOpen(false);
    setActiveImageFieldKey(null);
  };

  // Top Tabs Configuration (Exact icons and badges from user screenshots)
  const topTabs = [
    {
      id: "homepage" as MainCMSTab,
      title: "Homepage Sections",
      badge: "6 Sections",
      icon: Home,
    },
    {
      id: "services" as MainCMSTab,
      title: "Services Catalogue",
      badge: `${servicesList.length} Services`,
      icon: Layers,
    },
    {
      id: "projects" as MainCMSTab,
      title: "Projects Portfolio",
      badge: `${projectsList.length} Projects`,
      icon: FolderKanban,
    },
    {
      id: "blog" as MainCMSTab,
      title: "Blog & Articles",
      badge: `${blogList.length} Posts`,
      icon: FileText,
    },
    {
      id: "about" as MainCMSTab,
      title: "About Page Content",
      badge: "3 Sections",
      icon: Info,
    },
    {
      id: "contact" as MainCMSTab,
      title: "Global & Contact Info",
      badge: "Settings",
      icon: Globe,
    },
    {
      id: "theme" as MainCMSTab,
      title: "Theme & Accent Color",
      badge: "12 Palettes",
      icon: Palette,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#12223B] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <div
            className="w-3.5 h-3.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-xs sm:text-sm font-semibold">
            {toastMessage}
          </span>
        </div>
      )}

      {/* =====================================================================
          TOP NAVIGATION CARDS GRID (EXACTLY MATCHING USER SCREENSHOTS)
      ===================================================================== */}
      <div className="bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 shadow-xs space-y-3">
        {/* Row 1: First 6 Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {topTabs.slice(0, 6).map((tab) => {
            const isActive = activeMainTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMainTab(tab.id)}
                className={`relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 min-h-[84px] ${
                  isActive
                    ? "bg-[#FFDB5A] border-[#FFDB5A] shadow-xs"
                    : "bg-white border-gray-200 hover:border-[#FFDB5A] hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isActive ? "text-[#12223B]" : "text-[#28374D]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight ${
                      isActive
                        ? "bg-[#12223B] text-[#FFDB5A]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>
                <div
                  className={`text-xs sm:text-sm font-bold mt-2.5 line-clamp-1 ${
                    isActive ? "text-[#12223B]" : "text-[#12223B]"
                  }`}
                >
                  {tab.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Row 2: 7th Card - Theme & Accent Color */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {topTabs.slice(6, 7).map((tab) => {
            const isActive = activeMainTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMainTab(tab.id)}
                className={`relative flex flex-col justify-between p-3.5 sm:p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 min-h-[84px] ${
                  isActive
                    ? "bg-[#FFDB5A] border-[#FFDB5A] shadow-xs"
                    : "bg-white border-gray-200 hover:border-[#FFDB5A] hover:shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isActive ? "text-[#12223B]" : "text-[#28374D]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight ${
                      isActive
                        ? "bg-[#12223B] text-[#FFDB5A]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#12223B] mt-2.5 line-clamp-1">
                  {tab.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          TAB 1: HOMEPAGE SECTIONS
      ===================================================================== */}
      {activeMainTab === "homepage" && (
        <div className="space-y-5">
          {/* Sub Navigation Pills for Homepage */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { key: "hero", label: "Hero Banner & Slides" },
              { key: "about", label: "About Us Section" },
              { key: "why", label: "Why Choose Us" },
              { key: "video", label: "Video Banner Section" },
              { key: "cta", label: "Quote Estimate CTA" },
              { key: "faq", label: "FAQ Accordions" },
            ].map((sub) => (
              <button
                key={sub.key}
                type="button"
                onClick={() =>
                  setHomepageSubTab(
                    sub.key as "hero" | "about" | "why" | "video" | "cta" | "faq"
                  )
                }
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                  homepageSubTab === sub.key
                    ? "bg-[#FFDB5A] text-[#12223B] border-[#FFDB5A] font-bold shadow-xs"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#FFDB5A]"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Sub Tab: Hero Banner */}
          {homepageSubTab === "hero" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#12223B]">
                    Hero Banner & Slider CMS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Manage main headline, subtext, background images, and video
                    modal
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast("Hero section changes saved and published live!")
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Hero Changes</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Top Badge Text
                  </label>
                  <input
                    type="text"
                    value={badgeText}
                    onChange={(e) => setBadgeText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Years of Experience Stat
                  </label>
                  <input
                    type="number"
                    value={yearsExperience}
                    onChange={(e) => setYearsExperience(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Main Headline (Title)
                  </label>
                  <input
                    type="text"
                    value={mainHeadline}
                    onChange={(e) => setMainHeadline(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Hero Subtitle Description
                  </label>
                  <textarea
                    rows={3}
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={ctaButtonText}
                    onChange={(e) => setCtaButtonText(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Intro Video Embed URL
                  </label>
                  <input
                    type="text"
                    value={videoPopupUrl}
                    onChange={(e) => setVideoPopupUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                  />
                </div>
              </div>

              {/* Slider Images Manager */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-[#12223B]">
                  Hero Slides Background Images
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {slides.map((slide) => (
                    <div
                      key={slide.id}
                      className="bg-gray-50 border border-gray-200/80 rounded-xl overflow-hidden p-3 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#12223B]">
                          {slide.label}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              handleOpenPresets(`hero-slide-${slide.id}`)
                            }
                            className="px-2 py-1 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                          >
                            <FileImage className="w-3 h-3" /> Presets
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleOpenUrlModal(`hero-slide-${slide.id}`)
                            }
                            className="px-2 py-1 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                          >
                            <LinkIcon className="w-3 h-3" /> URL
                          </button>
                        </div>
                      </div>
                      <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gray-200">
                        <Image
                          src={slide.image}
                          alt={slide.label}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs py-1 px-2 flex items-center justify-between text-[10px] text-white">
                          <span className="truncate max-w-[140px]">
                            {slide.image}
                          </span>
                          <span className="text-[#FFDB5A] font-bold">
                            ✓ Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub Tab: About Us Section */}
          {homepageSubTab === "about" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#12223B]">
                    Homepage About Us Section
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Configure tagline, title, description, and trust metrics
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast("Homepage About section updated successfully!")
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save About</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Section Tagline Badge
                  </label>
                  <input
                    type="text"
                    value={aboutBadge}
                    onChange={(e) => setAboutBadge(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Main Headline
                  </label>
                  <input
                    type="text"
                    value={aboutTitle}
                    onChange={(e) => setAboutTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Overview Narrative
                  </label>
                  <textarea
                    rows={4}
                    value={aboutDesc}
                    onChange={(e) => setAboutDesc(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sub Tab: Why Choose Us */}
          {homepageSubTab === "why" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#12223B]">
                    Why Choose Us Section
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Highlight company differentiators and competitive advantages
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast("Why Choose Us section updated successfully!")
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Section</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Tagline
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
                    Headline
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

          {/* Sub Tab: Video Banner */}
          {homepageSubTab === "video" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#12223B]">
                    Video Banner Section
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Manage full-width video player callout headline and media
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast("Video Banner section updated successfully!")
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Video Banner</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    Video Banner Title
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

          {/* Sub Tab: Quote CTA */}
          {homepageSubTab === "cta" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-gray-100 pb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#12223B]">
                    Quote Estimate CTA Section
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    Conversion call-to-action headline and subtext
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    showToast("Quote CTA section updated successfully!")
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>Save CTA</span>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                    CTA Title
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
                    CTA Subtitle
                  </label>
                  <textarea
                    rows={3}
                    value={ctaDesc}
                    onChange={(e) => setCtaDesc(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Sub Tab: FAQ Accordions */}
          {homepageSubTab === "faq" && (
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
                  onClick={() =>
                    showToast("FAQ questions updated successfully!")
                  }
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
                      className="w-full p-2.5 bg-white rounded-lg border border-gray-200 text-sm font-bold text-[#12223B]"
                    />
                    <textarea
                      rows={2}
                      value={faq.a}
                      onChange={(e) => {
                        const next = [...faqs];
                        next[idx].a = e.target.value;
                        setFaqs(next);
                      }}
                      className="w-full p-2.5 bg-white rounded-lg border border-gray-200 text-xs sm:text-sm text-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =====================================================================
          TAB 2: SERVICES CATALOGUE CMS (SCREENSHOT 5)
      ===================================================================== */}
      {activeMainTab === "services" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Construction Services Catalogue CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage, add, and edit the {servicesList.length} services
                displayed on /services and homepage
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingService({
                  id: Date.now(),
                  slug: "new-custom-service",
                  title: "New Engineering Service",
                  description:
                    "Turnkey architectural and structural solutions crafted with certified precision.",
                  image: "/images/service-image-1.jpg",
                  overview: [
                    "High-precision engineering and structural planning tailored to commercial and residential developments.",
                  ],
                });
                setIsServiceModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 8 Services Grid (4 Columns Desktop matching Screenshot 5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Tag Badge */}
                  <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded tracking-wider uppercase">
                      {service.slug}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-[#12223B] line-clamp-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Live View & Actions */}
                <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                  <Link
                    href={`/services/${service.slug}`}
                    target="_blank"
                    className="text-xs font-semibold text-gray-600 hover:text-[#12223B] flex items-center gap-1 transition-colors"
                  >
                    <span>Live View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingService(service);
                        setIsServiceModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#12223B] hover:bg-gray-100 transition-colors cursor-pointer"
                      title="Edit Service"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setServicesList((prev) =>
                          prev.filter((s) => s.id !== service.id)
                        );
                        showToast(`Removed "${service.title}" from catalogue`);
                      }}
                      className="p-1.5 rounded-lg text-pink-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Service"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: PROJECTS PORTFOLIO CMS (SCREENSHOT 4)
      ===================================================================== */}
      {activeMainTab === "projects" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Projects Portfolio & Case Studies CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage, publish, and update the {projectsList.length} showcase
                projects on /projects
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingProject({
                  id: Date.now(),
                  slug: "new-case-study",
                  category: "Commercial",
                  title: "New Architectural Landmark",
                  image: "/images/project-1.jpg",
                  clientName: "Global Infrastructure Group",
                  duration: "14 Months",
                  location: "Manhattan, New York",
                  projectType: "Commercial Landmark",
                  overview: [
                    "A milestone engineering project designed to set standard for urban durability.",
                  ],
                  challenges: "High-density zoning and soil load stabilization.",
                  solutions: "Deep pile micro-foundations and lightweight steel.",
                  challengesImage: "/images/expertise-item-image-1.jpg",
                });
                setIsProjectModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 8 Projects Grid (4 Columns Desktop matching Screenshot 4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projectsList.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Sector Badge */}
                  <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFDB5A] text-[#12223B] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-[#12223B] line-clamp-1">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                      <User className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{project.clientName}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Live View & Actions */}
                <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    target="_blank"
                    className="text-xs font-semibold text-gray-600 hover:text-[#12223B] flex items-center gap-1 transition-colors"
                  >
                    <span>Live View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProject(project);
                        setIsProjectModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#12223B] hover:bg-gray-100 transition-colors cursor-pointer"
                      title="Edit Project"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setProjectsList((prev) =>
                          prev.filter((p) => p.id !== project.id)
                        );
                        showToast(`Removed "${project.title}" from portfolio`);
                      }}
                      className="p-1.5 rounded-lg text-pink-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 4: BLOG & ARTICLES CMS (SCREENSHOT 3)
      ===================================================================== */}
      {activeMainTab === "blog" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Articles & News Blog CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Publish engineering breakthroughs, market reports, and
                construction insights on /blog
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setEditingArticle({
                  id: Date.now(),
                  slug: "new-industry-insights",
                  title: "Smart Engineering Trends and Future Workflows",
                  excerpt:
                    "Explore modern sustainable concrete methodologies and robotic site planning.",
                  image: "/images/post-1.jpg",
                  author: "Admin",
                  date: "10 October, 2026",
                  tags: ["Innovation", "BIM", "Civil"],
                });
                setIsArticleModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>New Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Articles Grid (3 Columns Desktop matching Screenshot 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogList.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Tag Badge */}
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded tracking-wide">
                      {post.tags[0] || "Innovation"}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-1.5">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#12223B] line-clamp-2 mt-1">
                      {post.title}
                    </h4>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Live View & Actions */}
                <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-xs font-semibold text-gray-600 hover:text-[#12223B] flex items-center gap-1 transition-colors"
                  >
                    <span>Live View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingArticle(post);
                        setIsArticleModalOpen(true);
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-[#12223B] hover:bg-gray-100 transition-colors cursor-pointer"
                      title="Edit Article"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setBlogList((prev) =>
                          prev.filter((b) => b.id !== post.id)
                        );
                        showToast(`Removed "${post.title}" from blog`);
                      }}
                      className="p-1.5 rounded-lg text-pink-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 5: ABOUT PAGE CONTENT CMS (SCREENSHOT 1)
      ===================================================================== */}
      {activeMainTab === "about" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                About Page Content CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage Our Approach, Core Values, and Expertise sections on /about
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                showToast(
                  "About page content saved and published live to /about!"
                )
              }
              className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 self-start sm:self-auto"
            >
              <Save className="w-4 h-4" />
              <span>Save About Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Section 1: Page Header & Background Banner */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              1. Page Header & Background Banner
            </h4>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Header Title
                </label>
                <input
                  type="text"
                  value={aboutHeaderTitle}
                  onChange={(e) => setAboutHeaderTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-[#12223B]">
                    About Page Top Hero Background Image
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenPresets("about-hero-bg")}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileImage className="w-3.5 h-3.5" />
                      <span>Presets</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenUrlModal("about-hero-bg")}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <LinkIcon className="w-3.5 h-3.5" />
                      <span>Enter URL</span>
                    </button>
                  </div>
                </div>

                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src={aboutHeroBgImage}
                    alt="About Page Header Banner"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs py-2 px-4 flex items-center justify-between text-xs text-white">
                    <span className="truncate max-w-[280px]">
                      {aboutHeroBgImage}
                    </span>
                    <span className="text-[#FFDB5A] font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Core Values & Numerical Stats */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              2. Core Values & Numerical Stats
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Years Experience Counter
                </label>
                <input
                  type="text"
                  value={aboutStatYears}
                  onChange={(e) => setAboutStatYears(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Projects Completed (k+)
                </label>
                <input
                  type="text"
                  value={aboutStatProjects}
                  onChange={(e) => setAboutStatProjects(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Skilled Engineers Count
                </label>
                <input
                  type="text"
                  value={aboutStatEngineers}
                  onChange={(e) => setAboutStatEngineers(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Core Values Headline
                </label>
                <input
                  type="text"
                  value={aboutCoreValuesHeadline}
                  onChange={(e) => setAboutCoreValuesHeadline(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm font-semibold text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Our Expertise Cards & Highlights */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              3. Our Expertise Cards & Highlights
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tall Card (Box 1) */}
              <div className="p-5 rounded-xl border border-gray-200/90 bg-gray-50/50 space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-1">
                    Tall Card (Box 1)
                  </label>
                  <input
                    type="text"
                    value={aboutBox1Title}
                    onChange={(e) => setAboutBox1Title(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-bold text-[#12223B]"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={aboutBox1Desc}
                    onChange={(e) => setAboutBox1Desc(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-700"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-gray-600">
                      Box 1 Image
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleOpenPresets("about-box-1")}
                        className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                      >
                        <FileImage className="w-3 h-3" /> Presets
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenUrlModal("about-box-1")}
                        className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                      >
                        <LinkIcon className="w-3 h-3" /> Enter URL
                      </button>
                    </div>
                  </div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={aboutBox1Image}
                      alt="Expertise Box 1"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs py-1 px-3 flex items-center justify-between text-[11px] text-white">
                      <span className="truncate max-w-[150px]">
                        {aboutBox1Image}
                      </span>
                      <span className="text-[#FFDB5A] font-bold">✓ Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Card (Box 2) */}
              <div className="p-5 rounded-xl border border-gray-200/90 bg-gray-50/50 space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase block mb-1">
                    Top Card (Box 2)
                  </label>
                  <input
                    type="text"
                    value={aboutBox2Title}
                    onChange={(e) => setAboutBox2Title(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-bold text-[#12223B]"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={aboutBox2Desc}
                    onChange={(e) => setAboutBox2Desc(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-xs sm:text-sm text-gray-700"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-gray-600">
                      Box 2 Image
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleOpenPresets("about-box-2")}
                        className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                      >
                        <FileImage className="w-3 h-3" /> Presets
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenUrlModal("about-box-2")}
                        className="px-2 py-0.5 bg-white border border-gray-200 rounded text-[11px] font-semibold text-gray-700 hover:border-[#FFDB5A] flex items-center gap-1 cursor-pointer"
                      >
                        <LinkIcon className="w-3 h-3" /> Enter URL
                      </button>
                    </div>
                  </div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={aboutBox2Image}
                      alt="Expertise Box 2"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs py-1 px-3 flex items-center justify-between text-[11px] text-white">
                      <span className="truncate max-w-[150px]">
                        {aboutBox2Image}
                      </span>
                      <span className="text-[#FFDB5A] font-bold">✓ Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 6: GLOBAL & CONTACT INFO (SCREENSHOT 2)
      ===================================================================== */}
      {activeMainTab === "contact" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Global Branding & Contact CMS
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Manage site-wide contact info, map location, and social links
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setCompanyBrandName("Buildora Construction");
                  setHotlinePhone("+1(213) 465 789");
                  setSupportEmail("info@buildora.com");
                  setOfficeAddress("245 Business Avenue, Central New York, USA");
                  showToast("Reset all global contact fields to system defaults");
                }}
                className="px-4 py-2.5 rounded-xl border border-red-200 text-red-600 bg-red-50/50 hover:bg-red-100/60 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All CMS Data</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  showToast(
                    "Global branding and contact settings saved successfully!"
                  )
                }
                className="px-5 py-2.5 rounded-xl bg-[#FFDB5A] text-[#12223B] font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90"
              >
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 1: Primary Contact & Address */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider">
              <Phone className="w-4 h-4 text-[#FFDB5A]" />
              <span>Primary Contact & Address</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Company Brand Name
                </label>
                <input
                  type="text"
                  value={companyBrandName}
                  onChange={(e) => setCompanyBrandName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Official Hotline Phone
                </label>
                <input
                  type="text"
                  value={hotlinePhone}
                  onChange={(e) => setHotlinePhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Support & Inquiries Email
                </label>
                <input
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Physical Office Address
                </label>
                <input
                  type="text"
                  value={officeAddress}
                  onChange={(e) => setOfficeAddress(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Google Map Location Embed URL */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#FFDB5A]" />
              <span>Interactive Google Map Location Embed URL</span>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={mapEmbedUrl}
                onChange={(e) => setMapEmbedUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-xs sm:text-sm text-[#12223B] font-mono focus:outline-none focus:ring-1 focus:ring-[#12223B]"
              />

              <div className="rounded-xl overflow-hidden border border-gray-200 h-60 bg-gray-100 relative">
                <iframe
                  title="Office Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Social Profile Channels */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-wider">
              <Share2 className="w-4 h-4 text-[#FFDB5A]" />
              <span>Social Profile Channels</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Facebook URL
                </label>
                <input
                  type="text"
                  value={socialFacebook}
                  onChange={(e) => setSocialFacebook(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Twitter / X URL
                </label>
                <input
                  type="text"
                  value={socialTwitter}
                  onChange={(e) => setSocialTwitter(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Instagram URL
                </label>
                <input
                  type="text"
                  value={socialInstagram}
                  onChange={(e) => setSocialInstagram(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  LinkedIn URL
                </label>
                <input
                  type="text"
                  value={socialLinkedIn}
                  onChange={(e) => setSocialLinkedIn(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-[#12223B] mb-1.5 block">
                  Pinterest URL
                </label>
                <input
                  type="text"
                  value={socialPinterest}
                  onChange={(e) => setSocialPinterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#F6F6F6] text-sm text-[#12223B] focus:outline-none focus:ring-1 focus:ring-[#12223B]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 7: THEME & ACCENT COLOR
      ===================================================================== */}
      {activeMainTab === "theme" && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div>
              <h3 className="text-xl font-bold text-[#12223B]">
                Global Theme & Accent Color Customizer
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Live real-time theme customization across all 54 pages of
                Buildora
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-xl text-xs font-mono font-bold text-[#12223B]">
                <div
                  className="w-4 h-4 rounded-full border border-black/20"
                  style={{ backgroundColor: accentColor }}
                />
                <span>{accentColor}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  resetDefault();
                  setCustomThemeHex(DEFAULT_ACCENT_COLOR);
                  showToast("Reset global primary color to Buildora Gold (#FFDB5A)");
                }}
                className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Default</span>
              </button>
            </div>
          </div>

          {/* 12 Presets Grid */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4 shadow-xs">
            <h4 className="text-sm font-bold text-[#12223B]">
              12 Curated Construction & Brand Palettes
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {THEME_COLOR_PRESETS.map((p) => {
                const isSelected =
                  accentColor.toLowerCase() === p.hex.toLowerCase();
                return (
                  <button
                    key={p.hex}
                    type="button"
                    onClick={() => {
                      setAccentColor(p.hex);
                      setCustomThemeHex(p.hex);
                      showToast(`Applied ${p.name} (${p.hex}) across full website!`);
                    }}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between h-24 ${
                      isSelected
                        ? "border-[#12223B] ring-2 ring-[#12223B]/30 shadow-xs"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg shadow-2xs border border-black/10 flex items-center justify-center text-white"
                      style={{ backgroundColor: p.hex }}
                    >
                      {isSelected && (
                        <Check
                          className="w-4 h-4 stroke-[3]"
                          style={{ color: getContrastTextColor(p.hex) }}
                        />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#12223B] line-clamp-1">
                        {p.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {p.hex}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Color Studio */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-4 shadow-xs">
            <h4 className="text-sm font-bold text-[#12223B]">
              Custom Hex Color Studio
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="color"
                value={customThemeHex}
                onChange={(e) => {
                  setCustomThemeHex(e.target.value);
                  setAccentColor(e.target.value);
                }}
                className="w-12 h-12 rounded-xl cursor-pointer border border-gray-200 p-1"
              />
              <input
                type="text"
                value={customThemeHex}
                onChange={(e) => setCustomThemeHex(e.target.value)}
                placeholder="#FFDB5A"
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-mono text-[#12223B] w-36 uppercase font-bold"
              />
              <button
                type="button"
                onClick={() => {
                  let f = customThemeHex.trim();
                  if (!f.startsWith("#")) f = `#${f}`;
                  if (/^#[0-9A-Fa-f]{6}$/.test(f)) {
                    setAccentColor(f);
                    showToast(`Custom primary accent ${f} applied live!`);
                  } else {
                    showToast("Please enter a valid 6-character hex code");
                  }
                }}
                className="px-5 py-2.5 rounded-xl bg-[#12223B] text-white text-xs font-bold cursor-pointer hover:bg-black transition-colors"
              >
                Apply Custom Color
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 1: PRESET IMAGE PICKER MODAL
      ===================================================================== */}
      {presetModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <h4 className="font-bold text-base text-[#12223B]">
                  Select Image Preset
                </h4>
                <p className="text-xs text-gray-400">
                  Choose from existing high-res project and site photography
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPresetModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-3 p-1">
              {imagePresets.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => handleApplyImageToField(img)}
                  className="group relative h-28 rounded-xl overflow-hidden border border-gray-200 hover:border-[#FFDB5A] hover:ring-2 hover:ring-[#FFDB5A] transition-all text-left cursor-pointer"
                >
                  <Image src={img} alt="Preset" fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-black/70 py-1 px-2 text-[10px] text-white truncate">
                    {img.replace("/images/", "")}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setPresetModalOpen(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: CUSTOM URL MODAL
      ===================================================================== */}
      {urlModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#12223B]">
                Enter Custom Image URL
              </h4>
              <button
                type="button"
                onClick={() => setUrlModalOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 block mb-1">
                Image Web Address (e.g. /images/hero-bg-image.jpg or HTTPS URL)
              </label>
              <input
                type="text"
                placeholder="/images/hero-bg-image.jpg"
                value={customUrlInput}
                onChange={(e) => setCustomUrlInput(e.target.value)}
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B] focus:outline-none focus:ring-2 focus:ring-[#FFDB5A]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setUrlModalOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (customUrlInput.trim()) {
                    handleApplyImageToField(customUrlInput.trim());
                  }
                }}
                className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-lg cursor-pointer"
              >
                Apply URL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: EDIT / ADD SERVICE MODAL
      ===================================================================== */}
      {isServiceModalOpen && editingService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#12223B]">
                {servicesList.some((s) => s.id === editingService.id)
                  ? "Edit Service"
                  : "Add New Service"}
              </h4>
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Service Title
                </label>
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  URL Slug Tag
                </label>
                <input
                  type="text"
                  value={editingService.slug}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      slug: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-[#12223B]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  value={editingService.description}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-600">
                    Service Image
                  </label>
                  <button
                    type="button"
                    onClick={() => handleOpenPresets("service-edit")}
                    className="px-2.5 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer"
                  >
                    Change Image
                  </button>
                </div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={editingService.image}
                    alt={editingService.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setServicesList((prev) => {
                    const idx = prev.findIndex(
                      (s) => s.id === editingService.id
                    );
                    if (idx >= 0) {
                      const updated = [...prev];
                      updated[idx] = editingService;
                      return updated;
                    } else {
                      return [editingService, ...prev];
                    }
                  });
                  setIsServiceModalOpen(false);
                  showToast(`Service "${editingService.title}" saved!`);
                }}
                className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-xl cursor-pointer"
              >
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 4: EDIT / ADD PROJECT MODAL
      ===================================================================== */}
      {isProjectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#12223B]">
                {projectsList.some((p) => p.id === editingProject.id)
                  ? "Edit Project"
                  : "Add New Project"}
              </h4>
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Sector Category
                  </label>
                  <input
                    type="text"
                    value={editingProject.category}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        category: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Slug
                  </label>
                  <input
                    type="text"
                    value={editingProject.slug}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        slug: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-mono text-[#12223B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={editingProject.clientName}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        clientName: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        location: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-600">
                    Showcase Cover Image
                  </label>
                  <button
                    type="button"
                    onClick={() => handleOpenPresets("project-edit")}
                    className="px-2.5 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer"
                  >
                    Change Image
                  </button>
                </div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={editingProject.image}
                    alt={editingProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsProjectModalOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setProjectsList((prev) => {
                    const idx = prev.findIndex(
                      (p) => p.id === editingProject.id
                    );
                    if (idx >= 0) {
                      const updated = [...prev];
                      updated[idx] = editingProject;
                      return updated;
                    } else {
                      return [editingProject, ...prev];
                    }
                  });
                  setIsProjectModalOpen(false);
                  showToast(`Project "${editingProject.title}" saved!`);
                }}
                className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-xl cursor-pointer"
              >
                Save Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 5: EDIT / ADD ARTICLE MODAL
      ===================================================================== */}
      {isArticleModalOpen && editingArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h4 className="font-bold text-base text-[#12223B]">
                {blogList.some((b) => b.id === editingArticle.id)
                  ? "Edit Article"
                  : "Add New Article"}
              </h4>
              <button
                type="button"
                onClick={() => setIsArticleModalOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Article Title
                </label>
                <input
                  type="text"
                  value={editingArticle.title}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Category Tag
                  </label>
                  <input
                    type="text"
                    value={editingArticle.tags[0] || ""}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        tags: [e.target.value],
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-600 block mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    value={editingArticle.author}
                    onChange={(e) =>
                      setEditingArticle({
                        ...editingArticle,
                        author: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 block mb-1">
                  Excerpt Snippet
                </label>
                <textarea
                  rows={2}
                  value={editingArticle.excerpt}
                  onChange={(e) =>
                    setEditingArticle({
                      ...editingArticle,
                      excerpt: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#12223B]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-600">
                    Article Cover Image
                  </label>
                  <button
                    type="button"
                    onClick={() => handleOpenPresets("article-edit")}
                    className="px-2.5 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-700 hover:bg-gray-200 cursor-pointer"
                  >
                    Change Image
                  </button>
                </div>
                <div className="relative h-32 w-full rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={editingArticle.image}
                    alt={editingArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsArticleModalOpen(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-xs font-semibold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setBlogList((prev) => {
                    const idx = prev.findIndex(
                      (b) => b.id === editingArticle.id
                    );
                    if (idx >= 0) {
                      const updated = [...prev];
                      updated[idx] = editingArticle;
                      return updated;
                    } else {
                      return [editingArticle, ...prev];
                    }
                  });
                  setIsArticleModalOpen(false);
                  showToast(`Article "${editingArticle.title}" saved!`);
                }}
                className="px-4 py-2 bg-[#FFDB5A] text-[#12223B] text-xs font-bold rounded-xl cursor-pointer"
              >
                Save Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
