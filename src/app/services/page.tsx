import React from "react";
import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import { PageServices } from "@/components/services";
import {
  Approach,
  CoreValues,
  VideoBanner,
  OurExpertise,
  Faq,
  Testimonials,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Our Services - Buildora Construction",
  description:
    "Explore our full range of construction services including residential, commercial, industrial, renovation, remodeling, and structural engineering.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#EFEFEF]">
      <Header />
      <PageHeader title="Our services" breadcrumb="services" />
      <PageServices />
      <Approach />
      <CoreValues />
      <VideoBanner />
      <OurExpertise />
      <Faq />
      <Testimonials />
      <Footer />
    </main>
  );
}
