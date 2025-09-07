'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, FileText } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Hero() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [isTitleComplete, setIsTitleComplete] = useState(false);
  
  const fullName = "Luke Ponga";
  const fullTitle = "Software Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setName(fullName.substring(0, i + 1));
        i++;
      } else {
        setIsNameComplete(true);
        clearInterval(typingInterval);
      }
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isNameComplete) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullTitle.length) {
          setTitle(fullTitle.substring(0, i + 1));
          i++;
        } else {
          setIsTitleComplete(true);
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [isNameComplete]);

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
          src="https://picsum.photos/1920/1080"
          alt="Luke Ponga Developer Portfolio"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="object-cover"
          data-ai-hint="developer setup"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold min-h-[84px] md:min-h-[112px]">
          {name}
          {!isNameComplete && <span className="animate-blink">|</span>}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 min-h-[28px] md:min-h-[32px]">
          {isNameComplete && title}
          {isNameComplete && !isTitleComplete && <span className="animate-blink">|</span>}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{animationDelay: '3s', opacity: 0}}>
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
