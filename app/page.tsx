import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { CompanyDescription } from "@/components/company-description";
import { IndustriesCarousel } from "@/components/industries-carousel";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyDescription />
      <IndustriesCarousel />
      <Footer />
    </main>
  );
}
