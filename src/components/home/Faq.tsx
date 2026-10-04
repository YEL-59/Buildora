"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { FadeInUp, TextAnime } from "@/components/animations";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
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
      "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery.",
  },
  {
    id: 3,
    question: "What types of projects do you handle?",
    answer:
      "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery.",
  },
  {
    id: 4,
    question: "How do you ensure quality in your work?",
    answer:
      "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery.",
  },
  {
    id: 5,
    question: "Do you provide project cost estimates?",
    answer:
      "Project timelines depend on the size, complexity & scope of work. We provide a clear schedule during the planning phase and timely delivery.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const count200 = useCountUp(200, 2000, isVisible);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={sectionRef} id="faqs" className="py-20 lg:py-28 bg-[#EFEFEF]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: FAQ Content */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <FadeInUp delay={0.1} direction="down">
                <div className="section-sub-title mb-4">
                  Frequently Asked Questions
                </div>
              </FadeInUp>

              {/* Title */}
              <TextAnime
                as="h2"
                className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#12223B] tracking-[-0.03em] leading-[1.12] mb-4"
                delay={0.2}
              >
                Everything you need to <br className="hidden sm:inline" />
                know about us
              </TextAnime>

              {/* Description */}
              <FadeInUp delay={0.35}>
                <p className="text-[#28374D] text-[15px] sm:text-[16px] leading-[1.6] max-w-lg">
                  Find answers to the most common questions about our construction
                  services, project timelines, pricing, and process to help you
                  build with confidence.
                </p>
              </FadeInUp>
            </div>

            {/* Left Footer: Button & Satisfied Clients Box */}
            <FadeInUp delay={0.5}>
              <div className="pt-8 mt-12 sm:mt-16 border-t border-[#12223B]/10 flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Button */}
                <Link href="#contact" className="btn-builtex">
                  View All Faqs
                </Link>

                {/* Satisfied Clients Box */}
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center -space-x-2.5">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white relative shadow-none">
                      <Image
                        src="/images/author-1.jpg"
                        alt="Client 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white relative shadow-none">
                      <Image
                        src="/images/author-2.jpg"
                        alt="Client 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white relative shadow-none">
                      <Image
                        src="/images/author-3.jpg"
                        alt="Client 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-[28px] font-bold text-[#12223B] leading-none">
                      {count200}+
                    </h4>
                    <p className="text-[13px] text-[#28374D] font-normal leading-tight mt-1">
                      Satisfied Clients
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Flat Accordion List (No Shadow, Clean Borders & Rounded Corners) */}
          <div className="lg:col-span-6 space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <FadeInUp
                  key={faq.id}
                  delay={index * 0.08}
                  duration={0.6}
                  className="bg-[#F6F6F6] rounded-[6px] overflow-hidden transition-colors duration-200 border-0 shadow-none"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left px-6 py-4 sm:px-7 sm:py-5 flex items-center justify-between gap-4 font-semibold text-[17px] sm:text-[19px] text-[#12223B] leading-snug focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-[#12223B] ml-2">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mx-6 sm:mx-7 border-t border-[#12223B]/10 pt-4 pb-5 text-[15px] text-[#28374D] leading-[1.6]">
                      <p className="m-0">{faq.answer}</p>
                    </div>
                  )}
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
