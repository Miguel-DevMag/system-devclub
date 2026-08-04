// Aplicação principal da página DevClub

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { DevClubOverviewSection } from "@/components/sections/DevClubOverviewSection";
import { LearningJourneySection } from "@/components/sections/LearningJourneySection";
import { PlatformExperienceSection } from "@/components/sections/PlatformExperienceSection";
import { CommunityExperienceSection } from "@/components/sections/CommunityExperienceSection";
import { PeopleResultsSection } from "@/components/sections/PeopleResultsSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <HeroSection />
        <AuthoritySection />
        <DevClubOverviewSection />
        <LearningJourneySection />
        <PlatformExperienceSection />
        <CommunityExperienceSection />
        <PeopleResultsSection />
        <RecognitionSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
