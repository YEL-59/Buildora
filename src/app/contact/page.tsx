import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import { PageContact } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Builtex Construction & Building Solutions",
  description:
    "Get in touch with Builtex for professional construction, renovation, architecture, and building consultations.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Contact us" breadcrumb="Contact Us" />
        <PageContact />
      </main>
      <Footer />
    </>
  );
}
