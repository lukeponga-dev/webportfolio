
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "JobTrakr",
    description: "A modern, responsive dashboard to efficiently track job applications. Built with a full-stack Next.js architecture, featuring AI-powered insights from Google AI, and seamless database integration with Supabase.",
    tech: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Supabase", "Google AI", "Genkit", "Firebase"],
    imageUrl: "/img/jobtrak.png",
    imageHint: "dashboard kanban",
    liveUrl: "https://jobtrack-dashboard.netlify.app/",
    githubUrl: "https://github.com/lukeponga-dev/jobtrak-dashboard-nextjs",
  },
  {
    title: "CryptoStats",
    description: "A web application for tracking cryptocurrency statistics. Further details about the project are coming soon.",
    tech: ["React", "JavaScript", "API"],
    imageUrl: "/img/project-cryptostats.jpg",
    imageHint: "cryptocurrency dashboard",
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Vehicle Management API",
    description: "A robust RESTful API for managing vehicle information, featuring comprehensive CRUD operations and built with a .NET backend.",
    tech: ["C#", ".NET", "REST API", "SQL"],
    imageUrl: "https://picsum.photos/seed/api-code/600/400",
    imageHint: "code database",
    liveUrl: null,
    githubUrl: "https://github.com/lukeponga-dev/WebAPI",
  },
  {
    title: "NZ Tourism Website",
    description: "A comprehensive tourism website for New Zealand, featuring an interactive and responsive design to showcase culture and attractions.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "/img/project-nz.jpg",
    imageHint: "new zealand",
    liveUrl: "https://lukeponga-dev.github.io/New-Zealand-Website/",
    githubUrl: "https://github.com/lukeponga-dev/New-Zealand-Website",
  },
  {
    title: "Astronomy Picture of the Day",
    description: "A web app that fetches and displays the NASA Astronomy Picture of the Day using the APOD API, built with basic web technologies.",
    tech: ["JavaScript", "HTML/CSS", "NASA API"],
    imageUrl: "/img/project-cosmic1.jpg",
    imageHint: "galaxy stars",
    liveUrl: "https://astronomydailypic.netlify.app",
    githubUrl: null,
  },
    {
    title: "AI Chat Interface",
    description: "An intuitive chat interface powered by Genkit AI, enabling seamless and intelligent conversations with a modern frontend.",
    tech: ["Next.js", "TypeScript", "Genkit", "AI"],
    imageUrl: "https://picsum.photos/seed/chatbot/600/400",
    imageHint: "chatbot conversation",
    liveUrl: "https://v0-openai-chat-tk.vercel.app/",
    githubUrl: null,
  },
    {
    title: "Xamarin Mobile App",
    description: "A cross-platform mobile application developed with C# and Xamarin, demonstrating skills in mobile development and setup troubleshooting.",
    tech: ["C#", "Xamarin", "Mobile"],
    imageUrl: "https://picsum.photos/seed/mobile-app/600/400",
    imageHint: "mobile app",
    liveUrl: null,
    githubUrl: null,
  },
];

export function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        Project Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col bg-card hover:border-primary transition-all duration-300">
            <CardHeader>
               <div className="aspect-video relative overflow-hidden rounded-md mb-4 border">
                <Image
                  src={project.imageUrl || 'https://picsum.photos/600/400'}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {project.githubUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                 <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
