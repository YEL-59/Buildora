import React from "react";
import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import {
  AboutUs,
  Approach,
  CoreValues,
  VideoBanner,
  Team,
  OurExpertise,
  Faq,
  Testimonials,
} from "@/components/home";

export const metadata: Metadata = {
  title: "About Us - Builtex Construction",
  description:
    "Learn about Builtex - Building reliable structures with quality and precision. Discover our mission, core values, experienced team, and industry expertise.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#EFEFEF]">
      <Header />
      <PageHeader title="About us" breadcrumb="About Us" />
      <AboutUs />
      <Approach />
      <CoreValues />
      <VideoBanner />
      <Team />
      <OurExpertise />
      <Faq />
      <Testimonials />
      <Footer />
    </main>
  );
}
