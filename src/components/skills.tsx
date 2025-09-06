import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, BrainCircuit } from "lucide-react";

const developmentSkills = [
  "C# & .NET Framework", "Java & Spring Boot", "Python & TensorFlow", "JavaScript/TypeScript", "Generative AI"
];

const technicalSkills = [
  "IoT System Design", "Cloud Infrastructure (AWS)", "API Development", "Database Management", "Data Analysis"
];

const softSkills = [
  "Problem Solving", "Logical Reasoning", "Time Management", "Project Organization", "Detail Oriented"
];

const skillCategories = [
  {
    title: "Development",
    icon: <Code className="w-7 h-7" />,
    skills: developmentSkills,
  },
  {
    title: "Technical",
    icon: <Cpu className="w-7 h-7" />,
    skills: technicalSkills,
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="w-7 h-7" />,
    skills: softSkills,
  },
]

export function Skills() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold font-headline uppercase tracking-wider text-primary mb-6">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <Card key={category.title} className="bg-card/50">
            <CardHeader className="flex flex-row items-center gap-4">
              {category.icon}
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
