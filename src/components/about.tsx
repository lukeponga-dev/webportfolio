import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">About Me</h2>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-lg text-foreground/80">
        <p className="leading-relaxed">
          Hi, my name is Luke and I have graduated with a (Level 6) Diploma in software 
          development, and a (Level 5) Diploma in web development and design at Vision 
          College, New Zealand.
        </p>
        <p className="leading-relaxed">
          I'm currently interested, primarily, in Internet of Things (IoT), Artificial 
          Intelligence (AI), web3 technologies, mobile computing and data stream 
          processing. I also enjoy Web design and General software development.
        </p>
      </div>
    </section>
  );
}
