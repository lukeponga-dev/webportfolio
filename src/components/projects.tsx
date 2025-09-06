import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "Assisgnment in web development and disign - NEW ZEALAND WEBSITE",
    description: "A comprehensive tourism website highlighting New Zealand's unique culture and attractions. Features interactive elements and responsive design to provide an engaging experience across all devices",
    tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
    imageUrl: "/img/project-nz.jpg",
    imageHint: "new zealand landscape",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat interface App",
    description: "An intuitive chat interface powered by AI, enabling seamless and intelligent conversations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit"],
    imageUrl: "/img/project-aichat.jpg",
    imageHint: "ai chat",
    liveUrl: "https://openaiinterface.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "Vehicle API",
    description: "A robust RESTful API to manage vehicle information, including endpoints for CRUD operations and vehicle data retrieval.",
    tech: ["C#", ".NET", "REST API"],
    imageUrl: "https://picsum.photos/seed/vehicle-api/600/400",
    imageHint: "car engine",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CosmicPic",
    description: "An astronomical web application that fetches and displays high-quality images from the NASA APOD API based on user-selected criteria.",
    tech: ["HTML", "CSS", "JavaScript", "NASA API"],
    imageUrl: "https://picsum.photos/seed/cosmic-pic/600/400",
    imageHint: "galaxy stars",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Crypto_Stats",
    description: "A cryptocurrency dashboard that displays live market data, charts, and news for various cryptocurrencies using real-time APIs.",
    tech: ["React", "Chart.js", "Crypto API"],
    imageUrl: "https://picsum.photos/seed/crypto-stats/600/400",
    imageHint: "crypto dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-muted/40">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-headline">Featured Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A selection of my work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    width={600}
                    height={400}
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                 <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
              </CardFooter>
            </card>
          ))}
        </div>
      </div>
    </section>
  );
}
