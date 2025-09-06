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
          I'm a passionate software developer with expertise in building scalable applications, IoT systems, and AI solutions. With a strong foundation from my diplomas and hands-on experience, I focus on creating efficient and innovative software.
        </p>
        <p className="leading-relaxed">
          My interests center around Internet of Things (IoT) ecosystems and Artificial Intelligence. I have recently expanded my expertise through certification in Generative AI and continue to explore new technologies to solve complex problems.
        </p>
      </div>
    </section>
  );
}
