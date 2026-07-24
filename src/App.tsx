// Aplicação principal da página DevClub

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import HeroToCommunityTransition from "@/experience/HeroToCommunityTransition";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MentorsSection } from "@/components/sections/MentorsSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { CertificationSection } from "@/components/sections/CertificationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <FormationsSection />
        <TechnologiesSection />
        <EcosystemSection />
        <PlatformSection />
        <ProjectsSection />
        <HeroToCommunityTransition />
        <CommunitySection />
        <TestimonialsSection />
        <MentorsSection />
        <BonusSection />
        <CertificationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;