import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechNewsTicker } from "@/components/TechNewsTicker";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { DecorativeElements } from "@/components/DecorativeElements";
import { VisitorCount } from "@/components/VisitorCount";
import { SocialsSection } from "@/components/SocialsSection";

const Index = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background relative">
        <DecorativeElements />
        <Header />
        <main>
          <HeroSection />
          <TechNewsTicker />
          <ProjectsSection />
          <ExperienceSection />
          <AboutSection />
          <SocialsSection />
          <ContactSection />
        </main>
        <footer className="py-8 px-4 md:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {t("footer.rights")}
            </p>
            <VisitorCount />
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
