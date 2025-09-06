import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { Toggle } from "./toggle";

export function Hero() {
  return (
    <section id="hero" className="container flex min-h-[calc(100vh-56px)] flex-col items-center justify-center text-center relative">
      <div className="absolute top-4 right-4">
        <Toggle />
      </div>
      <h1 className="font-headline text-7xl font-bold tracking-tighter sm:text-8xl md:text-9xl lg:text-[10rem] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Luke Ponga
      </h1>
      <p className="max-w-[700px] text-foreground/80 md:text-xl mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Freelance Software Developer
      </p>
      
      <Link
        href="#about"
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6 text-foreground/50" />
      </Link>
    </section>
  );
}
