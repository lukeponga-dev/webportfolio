
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Toggle } from './toggle';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          hasScrolled
            ? 'bg-background/90 backdrop-blur-sm border-b'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className={cn(
              'font-headline text-2xl font-bold transition-colors duration-300',
               hasScrolled ? 'text-foreground' : 'text-white'
            )}
            onClick={closeMenu}
          >
            Luke Ponga
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(item => (
              <Button key={item.label} variant="ghost" asChild>
                <Link
                  href={item.href}
                  className={cn("font-semibold transition-colors hover:text-primary", hasScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white')}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
             <Button variant="ghost" asChild>
              <a
                href="/lukeponga-cv-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("font-semibold transition-colors hover:text-primary", hasScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Toggle />
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(!hasScrolled && 'text-white hover:text-white')}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 pt-20 md:hidden animate-in fade-in-20">
          <nav className="container mx-auto flex flex-col items-center gap-6 py-8">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold text-foreground"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
             <a
                href="/lukeponga-cv-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-foreground flex items-center"
                onClick={closeMenu}
              >
                <FileText className="mr-2 h-6 w-6" />
                Resume
              </a>
            <Toggle />
          </nav>
        </div>
      )}
    </>
  );
}
