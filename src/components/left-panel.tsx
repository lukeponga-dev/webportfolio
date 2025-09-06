"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { FileText, Github, Linkedin } from 'lucide-react';
import { Toggle } from './toggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function LeftPanel() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="font-headline text-5xl font-bold tracking-tighter">
          <Link href="/">Luke Ponga</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
          Software Engineer & Creative Technologist
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build exceptional and accessible digital experiences.
        </p>

        <nav className="hidden lg:block mt-12">
          <ul className="flex flex-col gap-4">
            {navItems.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-4 transition-all duration-300 ${
                    activeLink === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  <span className={`h-px w-8 bg-muted-foreground transition-all duration-300 ${activeLink === item.href ? 'w-16 bg-foreground' : 'group-hover:w-16 group-hover:bg-foreground'}`}></span>
                  <span className={`transition-all duration-300 ${activeLink === item.href ? 'font-bold' : 'group-hover:font-bold'}`}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Button asChild>
          <Link href="/lukeponga-cv-2025.pdf" download="lukeponga-cv-2025.pdf">
            <FileText className="mr-2 h-5 w-5" />
            My Resume
          </Link>
        </Button>
        <Link href="https://github.com/lukeponga-dev" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon">
            <Github className="h-6 w-6" />
          </Button>
        </Link>
        <Toggle />
      </div>
    </header>
  );
}
