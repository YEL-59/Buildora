import { Header, Footer } from "@/components/layout";
import {
  Hero,
  AboutUs,
  Services,
  WhyChooseUs,
  Projects,
  Team,
  VideoBanner,
  Testimonials,
  Faq,
  CtaSection,
  Blog,
} from "@/components/home";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#EFEFEF]">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Team />
      <VideoBanner />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Blog />
      <Footer />
    </main>
  );
}
