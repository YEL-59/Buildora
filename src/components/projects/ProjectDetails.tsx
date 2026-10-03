"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Building2,
  Compass,
  Hammer,
  ClipboardCheck,
} from "lucide-react";
import { Project, projectsData } from "@/data/projectData";

interface ProjectDetailsProps {
  project?: Project;
}

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

const constructionProcessCards = [
  {
    id: 1,
    number: "01",
    title: "Planning & Design",
    description:
      "Comprehensive architectural drafts, permits, project scheduling.",
    icon: Compass,
  },
  {
    id: 2,
    number: "02",
    title: "Additional Finishing",
    description:
      "Structural completion and client-driven interior customization.",
    icon: Hammer,
  },
  {
    id: 3,
    number: "03",
    title: "Final Inspection",
    description:
      "Thorough multi-point testing, final review, and handover.",
    icon: ClipboardCheck,
  },
];

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const currentProject = project || projectsData[0];
  const [activeFaq, setActiveFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            {/* Project Information Box */}
            <div className="rounded-[6px] overflow-hidden bg-white shadow-sm">
              <div className="bg-[#FFDB5A] p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-[#12223B]">
                  Project Information
                </h3>
              </div>
              <div className="p-6 space-y-4 text-[15px]">
                <div className="flex items-center justify-between border-b border-[#12223B]/10 pb-3">
                  <span className="text-[#526071] font-medium">Project Type:</span>
                  <span className="text-[#12223B] font-semibold">
                    {currentProject.projectType}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#12223B]/10 pb-3">
                  <span className="text-[#526071] font-medium">Client Name:</span>
                  <span className="text-[#12223B] font-semibold">
                    {currentProject.clientName}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#12223B]/10 pb-3">
                  <span className="text-[#526071] font-medium">Duration:</span>
                  <span className="text-[#12223B] font-semibold">
                    {currentProject.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#12223B]/10 pb-3">
                  <span className="text-[#526071] font-medium">Location:</span>
                  <span className="text-[#12223B] font-semibold text-right max-w-[200px]">
                    {currentProject.location}
                  </span>
                </div>

                {/* Share Project Social Icons */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#526071] font-medium">Share Project:</span>
                  <div className="flex items-center gap-2">
                    {["fb", "x", "in", "insta"].map((network) => (
                      <span
                        key={network}
                        className="w-8 h-8 rounded-full bg-[#12223B] hover:bg-[#FFDB5A] text-white hover:text-[#12223B] flex items-center justify-center text-xs font-bold uppercase transition-colors cursor-pointer"
                      >
                        {network === "fb" && "f"}
                        {network === "x" && "x"}
                        {network === "in" && "in"}
                        {network === "insta" && "ig"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-8 space-y-12">
            {/* Top Featured Image with image-anime shine sweep hover effect */}
            <div className="image-anime relative w-full aspect-[1/0.52] rounded-[6px] overflow-hidden bg-gray-200">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                priority
                className="object-cover rounded-[6px] transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Project overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight">
                Project overview
              </h2>
              {currentProject.overview.map((para, idx) => (
                <p
                  key={idx}
                  className="text-[#28374D] text-[16px] sm:text-[17px] leading-[1.7]"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Challenges & solutions */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                Challenges & solutions
              </h2>
              <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6] mb-8">
                Through efficient planning, regular quality inspections, and proactive communication, every milestone was completed successfully without compromising quality or safety.
              </p>

              {/* 2-Column Grid: Left Text + Right Image */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#12223B] mb-2">
                      Project Challenges:
                    </h4>
                    <p className="text-sm sm:text-[15px] text-[#28374D] leading-relaxed">
                      {currentProject.challenges}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#12223B] mb-2">
                      Our Solutions:
                    </h4>
                    <p className="text-sm sm:text-[15px] text-[#28374D] leading-relaxed">
                      {currentProject.solutions}
                    </p>
                  </div>
                </div>

                {/* Right Image with image-anime shine sweep hover effect */}
                <div className="md:col-span-6">
                  <div className="image-anime relative w-full aspect-[4/3] rounded-[6px] overflow-hidden bg-gray-200">
                    <Image
                      src={currentProject.challengesImage || "/images/expertise-item-image-1.jpg"}
                      alt="Challenges & Solutions"
                      fill
                      className="object-cover rounded-[6px] transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Construction process */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                Construction process
              </h2>
              <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6] mb-8">
                From initial consultation to final handover, our structured process ensures timely execution, seamless coordination, and exemplary build quality from concept to reality.
              </p>

              {/* 3 Process Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {constructionProcessCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-[6px] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
                    >
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-[4px] bg-[#FFDB5A]/20 flex items-center justify-center text-[#12223B] group-hover:bg-[#FFDB5A] transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-[#526071]/60">
                          {item.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#12223B] mb-2 group-hover:text-[#12223B] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#526071] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact our construction team */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#12223B] tracking-tight mb-3">
                Contact our construction team
              </h2>
              <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6] mb-8">
                Begin with us to bring your dreams to reality. Our team is ready to assist you in every step of construction and architectural development.
              </p>

              {/* Two CTA boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left Card: Team Avatars */}
                <div className="bg-white rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  {/* Avatar Stack */}
                  <div className="flex items-center -space-x-3 mb-4">
                    {["author-1.jpg", "author-2.jpg", "author-3.jpg", "author-4.jpg"].map(
                      (img, idx) => (
                        <div
                          key={idx}
                          className="relative w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-sm"
                        >
                          <Image
                            src={`/images/${img}`}
                            alt="Team member"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                  <h4 className="text-lg sm:text-[19px] font-semibold text-[#12223B] leading-snug">
                    Professionals committed to building better spaces
                  </h4>
                </div>

                {/* Right Card: Dark Background CTA */}
                <div className="relative rounded-[6px] overflow-hidden p-6 sm:p-8 text-white flex flex-col justify-between group shadow-sm min-h-[160px]">
                  <Image
                    src="/images/service-image-3.jpg"
                    alt="CTA background"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#12223B]/85 pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    <p className="text-sm sm:text-[15px] font-semibold text-white/90 leading-snug">
                      We have been dedicated to quality craftsmanship since 1996.
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-[#FFDB5A] transition-colors group/btn"
                    >
                      <span>Request A Consultation</span>
                      <span className="w-7 h-7 rounded-full bg-[#FFDB5A] text-[#12223B] flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Frequently asked questions */}
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
          </main>
        </div>
      </div>
    </section>
  );
}
