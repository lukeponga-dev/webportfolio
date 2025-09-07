
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Toggle } from './toggle';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X, Code } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setHasScrolled(window.scrollY > 20);
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
          hasScrolled || isMenuOpen
            ? 'bg-background/80 backdrop-blur-sm border-b'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-2xl font-bold"
            onClick={closeMenu}
          >
            <Code className="h-7 w-7 text-accent" />
            <span>Luke Ponga</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Button key={item.label} variant="ghost" asChild>
                <Link
                  href={item.href}
                  className="font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </Button>
            ))}
            <Toggle />
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={closeMenu}
        />
        <nav className="relative z-10 bg-background h-full w-3/4 max-w-sm ml-auto p-8 flex flex-col">
           <Link
            href="/"
            className="flex items-center gap-2 font-headline text-2xl font-bold mb-8"
            onClick={closeMenu}
          >
            <Code className="h-7 w-7 text-accent" />
            <span>Luke Ponga</span>
          </Link>

            <div className="flex flex-col items-start gap-4">
              {navItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-2xl font-semibold text-foreground hover:text-accent"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Toggle />
            </div>
          </nav>
      </div>
    </>
  );
}
