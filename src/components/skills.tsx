import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, BrainCircuit, Users } from 'lucide-react';

const devSkills = ["C# & .NET Framework", "Java & Spring Boot", "Python & TensorFlow", "JavaScript/TypeScript", "Generative AI"];
const techSkills = ["IoT System Design", "Cloud Infrastructure (AWS)", "API Development", "Database Management", "Data Analysis"];
const softSkills = ["Problem Solving", "Logical Reasoning", "Time Management", "Project Organization", "Detail Oriented"];

const skillIcons: Record<string, React.ReactNode> = {
  "Development": <Code className="w-8 h-8 text-primary" />,
  "Technical": <BrainCircuit className="w-8 h-8 text-primary" />,
  "Soft Skills": <Users className="w-8 h-8 text-primary" />
}

const SkillCard = ({ title, skills }: { title: string, skills: string[] }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center gap-4">
      {skillIcons[title]}
      <CardTitle className="font-headline text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      {skills.map(skill => <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>)}
    </CardContent>
  </Card>
);

export function Skills() {
  return (
    <section id="skills" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline mb-8">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillCard title="Development" skills={devSkills} />
        <SkillCard title="Technical" skills={techSkills} />
        <SkillCard title="Soft Skills" skills={softSkills} />
      </div>
    </section>
  );
}
