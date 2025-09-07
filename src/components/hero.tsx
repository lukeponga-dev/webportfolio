
'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Hero() {
  const [heroText, setHeroText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Hi, I'm Luke, glad to see you.";

  useEffect(() => {
    let i = 0;
    const typeEffect = () => {
      if (i < fullText.length) {
        setHeroText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeEffect, 50);
      } else {
        // Blinking cursor at the end
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    };
    const timeoutId = setTimeout(typeEffect, 500);
    return () => clearTimeout(timeoutId);
  }, []);


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
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold min-h-[8rem] md:min-h-[10rem]">
          {heroText}
          <span className={showCursor ? 'animate-blink' : 'opacity-0'}>|</span>
        </h1>

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
      <div
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
}
