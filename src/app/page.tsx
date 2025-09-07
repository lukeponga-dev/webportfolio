
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Loader } from '@/components/loader';
import { cn } from '@/lib/utils';
import { AIRecommendation } from '@/components/ai-recommendation';
import { GithubActivity } from '@/components/github-activity';

function useInView(ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return inView;
}


function Section({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-in-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Section id="about"><About /></Section>
        <Section id="skills"><Skills /></Section>
        <Section id="projects"><Projects /></Section>
        <Section id="education"><Education /></Section>
        <Section id="github"><GithubActivity /></Section>
        <Section id="ai-recommendation"><AIRecommendation /></Section>
        <Section id="contact"><Contact /></Section>
      </main>
      <Footer />
    </div>
  );
}
