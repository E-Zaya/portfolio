import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import SectionReveal from "@/components/SectionReveal";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
<>
  <Hero />
    <SectionReveal delay={0}>
    <Skills />
  </SectionReveal>
  <ContactSection />
</>
  );
}