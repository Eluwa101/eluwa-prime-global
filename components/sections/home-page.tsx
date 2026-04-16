import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ValuePropositionSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
