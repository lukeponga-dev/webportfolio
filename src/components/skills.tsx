import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const allSkills = [
  // Development
  "C# & .NET Framework", "Java & Spring Boot", "Python & TensorFlow", "JavaScript/TypeScript", "Generative AI",
  // Technical
  "IoT System Design", "Cloud Infrastructure (AWS)", "API Development", "Database Management", "Data Analysis",
  // Soft Skills
  "Problem Solving", "Logical Reasoning", "Time Management", "Project Organization", "Detail Oriented"
];

export function Skills() {
  return (
    <section id="skills" className="container">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline mb-8">My Skills</h2>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex w-max space-x-4 p-4">
          {allSkills.map(skill => (
            <Badge key={skill} variant="secondary" className="text-lg py-2 px-4 shadow-md">
              {skill}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
