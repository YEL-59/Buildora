import React from "react";
import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import { PageBlog } from "@/components/blog";

export const metadata: Metadata = {
  title: "Our Blog - Buildora Construction",
  description:
    "Explore the latest construction updates, expert tips, industry trends, and practical building guides from Buildora.",
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[#EFEFEF]">
      <Header />
      <PageHeader title="Our blog" breadcrumb="Blog" />
      <PageBlog />
      <Footer />
    </main>
  );
}
