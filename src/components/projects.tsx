import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "New Zealand Website",
    description: "A responsive site showcasing NZ's culture and tourism with interactive elements.",
    tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
    imageUrl: "/img/project-nz.jpg",
    imageHint: "new zealand",
    liveUrl: "https://newzealand-info.netlify.app",
  },
  {
    title: "Doctors Appointments",
    description: "A healthcare management system for scheduling appointments and managing patient records.",
    tech: ["C#", "ASP.NET", "SQL Server"],
    imageUrl: "/img/project-doctors.jpg",
    imageHint: "doctor appointment",
    liveUrl: "#",
  },
  {
    title: "Health Clinic MVC",
    description: "An MVC app for managing clinic operations, including patient data, appointments, and billing.",
    tech: ["MVC", "Entity Framework", "C#"],
    imageUrl: "/img/project-clinic.jpg",
    imageHint: "health clinic",
    liveUrl: "#",
  },
  {
    title: "CosmicPic",
    description: "An engaging web application for exploring fascinating cosmic imagery.",
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    imageUrl: "/img/project-cosmic.jpg",
    imageHint: "cosmic picture",
    liveUrl: "#",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
              <CardFooter>
                 <Button asChild variant="outline">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
