import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Rocket, Cloud, Wrench, BrainCircuit } from 'lucide-react';

const skills = [
  { category: 'Backend', skill: '.NET', icon: Code },
  { category: 'Backend', skill: 'C#', icon: Code },
  { category: 'Backend', skill: 'Java', icon: Code },
  { category: 'Backend', skill: 'Python', icon: Code },
  { category: 'Database', skill: 'SQL', icon: Database },
  { category: 'Database', skill: 'Database Management', icon: Database },
  { category: 'Cloud', skill: 'Azure', icon: Cloud },
  { category: 'Cloud', skill: 'Cloud Infrastructure', icon: Cloud },
  { category: 'Frontend', skill: 'React Native', icon: Code },
  { category: 'Frontend', skill: 'JavaScript/TypeScript', icon: Code },
  { category: 'AI/Automation', skill: 'Generative AI', icon: BrainCircuit },
  { category: 'AI/Automation', skill: 'Automation', icon: Rocket },
  { category: 'Technical', skill: 'API Development', icon: Wrench },
  { category: 'Technical', skill: 'IoT System Design', icon: Wrench },
  { category: 'Technical', skill: 'System Design', icon: Wrench },
  { category: 'Soft Skills', skill: 'Problem Solving', icon: BrainCircuit },
];

const categories = [
    { name: "Backend", icon: Code },
    { name: "Database", icon: Database },
    { name: "Cloud", icon: Cloud },
    { name: "Frontend", icon: Code },
    { name: "AI/Automation", icon: Rocket },
    { name: "Technical", icon: Wrench },
]

export function Skills() {
  return (
    <>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        My Technical Toolbox
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map(({name, icon: Icon}) => (
          <Card key={name} className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl">
                <Icon className="w-6 h-6 text-accent" />
                {name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills
                .filter(s => s.category === name || (name === "Frontend" && s.category === 'Frontend') || (name === "AI/Automation" && s.category === 'AI/Automation') || (name === "Technical" && s.category === 'Technical'))
                .map(s => (
                  <Badge key={s.skill} variant="secondary" className="text-sm">
                    {s.skill}
                  </Badge>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
