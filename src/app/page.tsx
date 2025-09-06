import { About } from '@/components/about';
import { AIRecommendation } from '@/components/ai-recommendation';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';
import { LeftPanel } from '@/components/left-panel';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[400px_1fr]">
        <LeftPanel />
        <main className="py-16 lg:py-24">
          <div id="about" className="scroll-mt-24">
            <About />
          </div>
          <div id="projects" className="scroll-mt-24">
            <Projects />
          </div>
          <div id="skills" className="scroll-mt-24">
            <Skills />
          </div>
          <div id="education" className="scroll-mt-24">
            <Education />
          </div>
          <div id="ai-recommendation" className="scroll-mt-24">
            <AIRecommendation />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
