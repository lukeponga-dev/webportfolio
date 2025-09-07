'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';

export function Hero() {

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-5rem)] min-h-[500px] md:h-screen flex-col items-center justify-center text-center text-white bg-background"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Abstract background"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="opacity-20"
          data-ai-hint="abstract geometric background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 p-4 flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
          Luke Ponga
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-accent max-w-2xl">
          Backend & Automation Developer
        </p>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
          Building reliable backend systems and streamlined automation solutions with .NET, SQL, and Azure.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={scrollToContent}>
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/lukeponga-cv-2025.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
