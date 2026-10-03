import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, PageHeader, Footer } from "@/components/layout";
import { ServiceDetails } from "@/components/services";
import { servicesData } from "@/data/serviceData";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found - Builtex",
    };
  }

  return {
    title: `${service.title} - Builtex Construction`,
    description: service.description,
  };
}

export default async function DynamicServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          title={service.title}
          breadcrumb={service.title}
          parentPage={{ name: "Services", link: "/services" }}
        />
        <ServiceDetails service={service} />
      </main>
      <Footer />
    </>
  );
}
