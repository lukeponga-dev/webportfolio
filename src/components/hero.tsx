'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToContent = () => {
    const aboutSection = document.querySelector<HTMLElement>('main > section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover"
          data-ai-hint="technology abstract"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 animate-fade-in-up p-4">
        <h1 className="font-headline text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
          Luke Ponga
        </h1>
        <h2 className="mt-4 text-xl font-medium tracking-tight text-white/80 md:text-2xl">
          Software Engineer & Creative Technologist
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          I build exceptional and accessible digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={scrollToContent} variant="secondary">
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
          <ArrowDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
}
