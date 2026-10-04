"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Service, servicesData } from "@/data/serviceData";
import { FadeInUp, TextAnime } from "@/components/animations";

interface ServiceBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ServiceDetailsProps {
  service?: Service;
}

const serviceBenefits: ServiceBenefit[] = [
  {
    id: 1,
    title: "Custom Home Construction",
    description:
      "Build your dream home with tailored designs and craftsmanship.",
    icon: "/images/icon-cta-box-item-1.svg",
  },
  {
    id: 2,
    title: "Renovations & Remodeling",
    description:
      "Upgrade your space with modern, functional renovations.",
    icon: "/images/icon-cta-box-item-3.svg",
  },
  {
    id: 3,
    title: "Luxury Home Development",
    description:
      "Create elegant homes with premium finishes and refined details.",
    icon: "/images/icon-cta-box-item-1.svg",
  },
  {
    id: 4,
    title: "Multi-Family Housing",
    description:
      "We build durable residential duplexes, townhouses, apartments.",
    icon: "/images/icon-cta-box-item-2.svg",
  },
];

const processSteps = [
  {
    id: 1,
    number: "1",
    title: "Initial Consultation & Planning",
    description:
      "We inspect every detail carefully completing the project and handing it over.",
  },
  {
    id: 2,
    number: "2",
    title: "Residential Services",
    description:
      "We inspect every detail carefully completing the project and handing it over.",
  },
  {
    id: 3,
    number: "3",
    title: "Final Inspection & Handover",
    description:
      "We inspect every detail carefully completing the project and handing it over.",
  },
];

const faqItems = [
  {
    id: 1,
    question: "How long does a construction project take?",
    answer:
      "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery.",
  },
  {
    id: 2,
    question: "Do you offer customized construction solutions?",
    answer:
      "Yes, all our construction and architectural designs are completely tailored to meet your unique architectural requirements and functional goals.",
  },
  {
    id: 3,
    question: "What types of projects do you handle?",
    answer:
      "We handle a diverse spectrum of projects ranging from custom residential homes and luxury developments to commercial complexes and industrial structures.",
  },
  {
    id: 4,
    question: "How do you ensure quality in your work?",
    answer:
      "We adhere to ISO-certified safety protocols, utilize premium-grade materials, and conduct comprehensive multi-stage structural inspections throughout every phase.",
  },
  {
    id: 5,
    question: "Do you provide project cost estimates?",
    answer:
      "Yes, we provide transparent, itemized cost estimates with zero hidden fees during our initial consultation and planning phase.",
  },
];

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const currentService = service || servicesData[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredProcessStep, setHoveredProcessStep] = useState<number | null>(2);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Sidebar (Category Menu & Dark CTA Card) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            <FadeInUp direction="left" delay={0.1}>
              {/* Category Card */}
              <div className="rounded-[6px] overflow-hidden bg-white shadow-sm mb-8">
                <div className="bg-[#FFDB5A] p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-[#12223B]">
                    Discover Our Services
                  </h3>
                </div>
                <ul className="p-6 space-y-4">
                  {servicesData.slice(0, 5).map((item) => {
                    const isActive = currentService.slug === item.slug;
                    return (
                      <li
                        key={item.id}
                        className="border-b border-[#12223B]/10 last:border-b-0 pb-4 last:pb-0"
                      >
                        <Link
                          href={`/services/${item.slug}`}
                          className={`flex items-center justify-between font-semibold text-[15px] transition-colors ${
                            isActive
                              ? "text-[#12223B]"
                              : "text-[#28374D] hover:text-[#FFDB5A]"
                          }`}
                        >
                          <span>{item.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#12223B]" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Dark CTA Box Card */}
              <div className="relative rounded-[6px] overflow-hidden p-8 sm:p-10 text-white min-h-[360px] flex flex-col justify-between group shadow-md">
                {/* Background Image with Dark Navy Gradient */}
                <Image
                  src="/images/service-image-1.jpg"
                  alt="Connect CTA"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#12223B]/85 pointer-events-none" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-[4px] bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                  <Building2 className="w-6 h-6 text-[#FFDB5A]" />
                </div>

                {/* Title & Button */}
                <div className="relative z-10 space-y-6">
                  <h4 className="text-xl sm:text-[22px] font-semibold text-white leading-snug">
                    Let&apos;s Connect with Our Expert Construction Team and Start Building Today
                  </h4>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-white group/btn hover:text-[#FFDB5A] transition-colors"
                  >
                    <span>Contact Now</span>
                    <span className="w-8 h-8 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-8 space-y-12">
            {/* Top Featured Image with image-anime shine sweep hover effect */}
            <FadeInUp delay={0.15}>
              <div className="image-anime relative w-full aspect-[1/0.52] rounded-[6px] overflow-hidden bg-gray-200">
                <Image
                  src={currentService.image || "/images/core-value-image.jpg"}
                  alt={currentService.title}
                  fill
                  priority
                  className="object-cover rounded-[6px] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeInUp>

            {/* Introduction Copy */}
            <FadeInUp delay={0.2}>
              <div className="space-y-4 text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7]">
                {currentService.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </FadeInUp>

            {/* Section: Our construction services */}
            <FadeInUp delay={0.25}>
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                    Our {currentService.title.toLowerCase()}
                  </h2>
                  <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6]">
                    From initial concept to final touches, we provide a full range of construction services that ensure your project is completed with quality, efficiency, and expert care.
                  </p>
                </div>

                {/* 4 Benefits Cards (2x2 Grid) with interactive Dark Navy hover state */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceBenefits.map((item) => {
                  const isHovered = hoveredBenefit === item.id;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredBenefit(item.id)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                      className={`relative rounded-[6px] p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 min-h-[180px] cursor-pointer ${
                        isHovered
                          ? "bg-[#12223B] text-white shadow-md"
                          : "bg-white text-[#12223B] shadow-sm"
                      }`}
                    >
                      {/* Watermark Icon on Bottom-Right */}
                      <div className="absolute right-4 bottom-2 w-20 h-20 opacity-20 pointer-events-none flex items-center justify-center">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={70}
                          height={70}
                          className={`w-full h-full object-contain ${
                            isHovered ? "filter brightness-0 invert" : ""
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3
                          className={`text-xl font-semibold mb-2.5 transition-colors ${
                            isHovered ? "text-white" : "text-[#12223B]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`text-[14px] sm:text-[15px] leading-relaxed transition-colors ${
                            isHovered ? "text-white/90" : "text-[#28374D]"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* Small Yellow Indicator Dot */}
                      {isHovered && (
                        <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#FFDB5A] mt-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section: Why choose our services */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                  Why choose our services
                </h2>
                <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6]">
                  With a team of skilled professionals and years of experience, we are committed to delivering construction services that offer peace of mind, quality, and long-lasting value.
                </p>
              </div>

              {/* 4 Checkpoint Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-[#28374D] text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] flex-shrink-0 fill-[#FFDB5A] text-[#12223B]" />
                  <span>Transparent communication at every stage</span>
                </div>
                <div className="flex items-center gap-3 text-[#28374D] text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] flex-shrink-0 fill-[#FFDB5A] text-[#12223B]" />
                  <span>Custom built solutions for modern living</span>
                </div>
                <div className="flex items-center gap-3 text-[#28374D] text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] flex-shrink-0 fill-[#FFDB5A] text-[#12223B]" />
                  <span>Strict adherence to timelines and budgets</span>
                </div>
                <div className="flex items-center gap-3 text-[#28374D] text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#FFDB5A] flex-shrink-0 fill-[#FFDB5A] text-[#12223B]" />
                  <span>Premium materials and skilled craftsmanship</span>
                </div>
              </div>

              {/* Wide Image with image-anime shine sweep hover effect */}
              <div className="image-anime relative w-full aspect-[1/0.42] rounded-[6px] overflow-hidden bg-gray-200">
                <Image
                  src="/images/expertise-item-image-2.jpg"
                  alt="Why Choose Our Services"
                  fill
                  className="object-cover rounded-[6px] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeInUp>

            {/* Section: Our construction process */}
            <FadeInUp delay={0.3}>
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                    Our construction process
                  </h2>
                  <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6]">
                    From initial consultation to final inspection, our structured construction process ensures efficiency, open communication, and high-quality results at every stage of your project.
                  </p>
                </div>

                {/* Process Grid: Left Steps + Right Image */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                  {/* Left Process Steps with Dotted Connector Line */}
                  <div className="md:col-span-6 relative flex flex-col justify-between py-1 space-y-6">
                    {/* Vertical Dotted Line connecting the steps */}
                    <div className="absolute left-[21px] top-6 bottom-6 w-0 border-l-[2px] border-dotted border-gray-300 z-0 pointer-events-none" />

                    {processSteps.map((step) => {
                      const isHovered = hoveredProcessStep === step.id;
                      return (
                        <div
                          key={step.id}
                          onMouseEnter={() => setHoveredProcessStep(step.id)}
                          onMouseLeave={() => setHoveredProcessStep(null)}
                          className="relative z-10 flex items-start gap-4 cursor-pointer group"
                        >
                          {/* Number Box with Hover State & Yellow Dot */}
                          <div className="relative flex-shrink-0">
                            <div
                              className={`w-11 h-11 rounded-[4px] font-semibold text-lg flex items-center justify-center transition-all duration-300 ${
                                isHovered
                                  ? "bg-[#12223B] text-white shadow-sm"
                                  : "bg-[#FFDB5A] text-[#12223B]"
                              }`}
                            >
                              {step.number}
                            </div>

                            {/* Yellow indicator dot on right side of badge when hovered */}
                            {isHovered && (
                              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FFDB5A] z-20" />
                            )}
                          </div>

                          {/* Title & Description */}
                          <div className="pt-0.5">
                            <h4 className="text-[17px] sm:text-lg font-semibold text-[#12223B] mb-1">
                              {step.title}
                            </h4>
                            <p className="text-[14px] sm:text-[15px] text-[#28374D] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Process Image with image-anime shine sweep hover effect */}
                  <div className="md:col-span-6">
                    <div className="image-anime relative w-full h-full min-h-[280px] rounded-[6px] overflow-hidden bg-gray-200">
                      <Image
                        src="/images/service-image-2.jpg"
                        alt="Construction Process"
                        fill
                        className="object-cover rounded-[6px] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Section: Frequently asked questions */}
            <FadeInUp delay={0.35}>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-6">
                  Frequently asked questions
                </h2>

                <div className="space-y-4">
                  {faqItems.map((item) => {
                    const isOpen = activeFaq === item.id;
                    return (
                      <div
                        key={item.id}
                        className="rounded-[6px] bg-white overflow-hidden shadow-sm transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(item.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-[17px] text-[#12223B] hover:text-[#FFDB5A] transition-colors focus:outline-none cursor-pointer"
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#12223B] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-0 text-[#28374D] text-[15px] leading-relaxed border-t border-[#12223B]/5 pt-4">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInUp>
          </main>
        </div>
      </div>
    </section>
  );
}
