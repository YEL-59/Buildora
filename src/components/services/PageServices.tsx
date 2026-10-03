"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/serviceData";

export default function PageServices() {
  return (
    <section className="py-20 lg:py-24 bg-[#EFEFEF]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* 8 Services Grid (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col transition-all"
            >
              {/* Service Image */}
              <div className="image-anime relative w-full aspect-square rounded-[6px] overflow-hidden mb-5 bg-gray-200">
                <Link href={`/services/${service.slug}`} className="block w-full h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-[6px] transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Service Content */}
              <div>
                <h2 className="text-[20px] font-semibold text-[#12223B] leading-snug mb-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#FFDB5A] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#28374D] leading-[1.6]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
