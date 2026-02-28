import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DemoSection />
        <TestimonialsSection />
        <PricingSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
