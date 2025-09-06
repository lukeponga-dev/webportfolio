'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  const scrollToContent = () => {
    const content = document.getElementById('about');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="font-headline text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
          Luke Ponga
        </h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight text-foreground/80 md:text-2xl">
          Software Engineer & Creative Technologist
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          I build exceptional and accessible digital experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" onClick={scrollToContent}>
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/lukeponga-cv-2025.pdf" download="lukeponga-cv-2025.pdf">
              <FileText className="mr-2 h-5 w-5" />
              My Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 z-10">
        <button
          onClick={scrollToContent}
          className="animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
}
