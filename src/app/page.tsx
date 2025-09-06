import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { AIRecommendation } from '@/components/ai-recommendation';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Experience } from '@/components/experience';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <AIRecommendation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
