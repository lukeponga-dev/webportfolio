import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="container flex min-h-[calc(100vh-56px)] flex-col items-center justify-center text-center">
      <p className="font-headline text-lg text-primary animate-fade-in-up">
        Luke Ponga
      </p>
      <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Software Developer
      </h1>
      <p className="max-w-[700px] text-foreground/80 md:text-xl mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        Based in Hamilton, NZ. Specializing in scalable applications, IoT, and AI solutions.
      </p>
      <Button asChild size="lg" className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <Link href="#projects">
          View My Work
        </Link>
      </Button>
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
