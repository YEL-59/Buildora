import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, PageHeader, Footer } from "@/components/layout";
import { ProjectDetails } from "@/components/projects";
import { projectsData } from "@/data/projectData";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found - Builtex",
    };
  }

  return {
    title: `${project.title} - Builtex Construction`,
    description: project.overview[0],
  };
}

export default async function DynamicProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={project.title}
          breadcrumb={project.title}
          parentPage={{ name: "Projects", link: "/projects" }}
        />
        <ProjectDetails project={project} />
      </main>
      <Footer />
    </>
  );
}
