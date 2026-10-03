import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import { PageProjects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Our Projects - Builtex Construction & Architecture Next.js Template",
  description:
    "Explore our featured landmark projects in residential, commercial, industrial, and infrastructure construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Our projects" breadcrumb="Our projects" />
        <PageProjects />
      </main>
      <Footer />
    </>
  );
}
