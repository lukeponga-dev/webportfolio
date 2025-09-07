
'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToContent = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://storage.googleapis.com/project-spark-308115.appspot.com/users/studio-output-user-1718136357499/1720612658825_779.png"
          alt="Luke Ponga Developer Portfolio"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 animate-fade-in-up p-4 mt-auto">
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={scrollToContent}>
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/lukeponga-cv-2025.pdf" target="_blank" rel="noopener noreferrer">
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
          <ArrowDown className="h-8 w-8 text-white/80 transition-colors hover:text-white" />
        </button>
      </div>
    </section>
  );
}
