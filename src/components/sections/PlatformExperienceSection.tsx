import { Container } from "@/components/layout/Container";
import { VerifiedPlatformShowcase } from "@/components/platform/VerifiedPlatformShowcase";

export function PlatformExperienceSection() {
  return (
    <section
      id="plataforma"
      aria-labelledby="platform-showcase-title"
      className="pshow-section pshow-section--refined"
    >
      <Container className="pshow-section__container">
        <VerifiedPlatformShowcase />
      </Container>
    </section>
  );
}
