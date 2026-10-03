import type { Metadata } from "next";
import { Header, PageHeader, Footer } from "@/components/layout";
import { NotFoundPage } from "@/components/not-found";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Builtex",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="404 Error" breadcrumb="404" />
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
