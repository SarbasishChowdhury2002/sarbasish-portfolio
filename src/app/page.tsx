import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackgroundEffects } from "@/components/layout/background-effects";
import { SectionDivider } from "@/components/layout/section-divider";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <BackgroundEffects />
      
      <Navbar />
      <HeroSection />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <ProjectsSection />
      <SectionDivider />

      <SkillsSection />
      <SectionDivider />
      
      <ContactSection />
      <Footer />
    </main>
  );
}