import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Lightbulb } from "lucide-react";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Xero",
    duration: "2022 - 2023",
    description: "During my internship at Xero, I contributed to the development of a new feature for their accounting software. I worked with C# and the .NET framework, gaining valuable experience in a professional software development environment.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline mb-8 flex items-center justify-center gap-2">
          <Lightbulb className="w-8 h-8" /> Personal Projects
        </h2>
      </div>
      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base">{exp.company}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
