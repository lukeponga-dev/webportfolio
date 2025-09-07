import { Badge } from "@/components/ui/badge";
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
    icon: <Code className="w-8 h-8" />,
    skills: developmentSkills,
  },
  {
    title: "Technical",
    icon: <Cpu className="w-8 h-8" />,
    skills: technicalSkills,
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="w-8 h-8" />,
    skills: softSkills,
  },
]

export function Skills() {
  return (
    <section>
      <h2 id="skills" className="text-3xl font-bold font-headline uppercase tracking-wider text-primary mb-12 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map(category => (
          <div key={category.title} className="text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <span className="text-primary">{category.icon}</span>
              <h3 className="font-headline text-2xl font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
