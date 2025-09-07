import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Rocket, Cloud, Wrench, BrainCircuit, Bot } from 'lucide-react';

const skillsByCategory = [
  { 
    category: "Backend Development", 
    icon: Code,
    skills: [".NET", "C#", "Java", "Python", "API Development"] 
  },
  { 
    category: "Frontend & Mobile", 
    icon: Code,
    skills: ["React Native", "JavaScript/TypeScript", "HTML/CSS"]
  },
  { 
    category: "Database & Cloud", 
    icon: Database,
    skills: ["SQL", "Database Management", "Azure", "Cloud Infrastructure"] 
  },
  { 
    category: "AI & Automation", 
    icon: Bot,
    skills: ["Generative AI", "Automation", "System Design", "Problem Solving"] 
  },
];


export function Skills() {
  return (
    <>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        My Technical Toolbox
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsByCategory.map(({ category, icon: Icon, skills }) => (
          <Card key={category} className="bg-card border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <Icon className="w-7 h-7 text-primary" />
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm font-medium">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
