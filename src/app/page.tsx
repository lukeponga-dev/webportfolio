
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

// Custom hook to detect if an element is in view
function useInView(ref: React.RefObject<HTMLElement>) {
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
  }, [ref]);

  return inView;
}


function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 md:px-8">
        <Section><About /></Section>
        <Section><Projects /></Section>
        <Section><Skills /></Section>
        <Section><Education /></Section>
        <Section><Contact /></Section>
      </main>
      <Footer />
    </div>
  );
}
