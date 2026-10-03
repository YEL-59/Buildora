"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Residential Construction",
    description:
      "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-1.jpg",
    link: "/services/residential-construction",
  },
  {
    id: 2,
    title: "Commercial Construction",
    description:
      "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-2.jpg",
    link: "/services/commercial-construction",
  },
  {
    id: 3,
    title: "Industrial Construction",
    description:
      "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-3.jpg",
    link: "/services/industrial-construction",
  },
  {
    id: 4,
    title: "Infrastructure Construction",
    description:
      "We build modern, durable, comfortable homes designed to your lifestyle.",
    image: "/images/service-image-4.jpg",
    link: "/services/infrastructure-construction",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-24 pb-14 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #12223B 58%, #EFEFEF 42%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFDB5A]" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-[-0.03em] leading-[1.12]">
              Construction solutions built <br className="hidden sm:inline" />
              around your vision
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pl-10">
            <p className="text-gray-300 text-[15px] leading-relaxed">
              Our team of skilled professionals brings experience, precision,
              and dedication to every project we undertake, ensuring quality
              results and client satisfaction.
            </p>
            <div>
              <Link href="/services" className="readmore-btn text-white">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Services Grid Overlapping the Split Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col border-b border-[#12223B]/10 pb-7"
            >
              {/* Service Image (Square 1:1, Rounded, Hover Zoom & Shine Sweep) */}
              <div className="image-anime relative w-full aspect-square rounded-[6px] overflow-hidden mb-6 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-[6px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Service Content (On light background) */}
              <div>
                <h3 className="text-[20px] font-semibold text-[#12223B] leading-snug mb-2 transition-colors">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#28374D] leading-[1.6]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer Banner */}
        <div className="mt-8 text-center">
          <p className="text-[#28374D] text-sm sm:text-base font-normal">
            <span className="inline-block bg-[#FFDB5A] text-[#12223B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mr-2">
              Free
            </span>
            Start Your Construction Journey Today. -{" "}
            <Link
              href="#contact"
              className="text-[#12223B] font-semibold underline underline-offset-4 hover:text-[#FFDB5A] transition-colors ml-0.5"
            >
              Request A Quote.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
