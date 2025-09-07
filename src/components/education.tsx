import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Level 6 Diploma in Software Development",
    institution: "Vision College, Hamilton",
    year: "2020 - 2021",
  },
  {
    degree: "Level 5 Diploma in Web Development & Design",
    institution: "Vision College, Hamilton",
    year: "2019 - 2021",
  },
  {
    degree: "Level 3 Cert. in Business Admin & Technology",
    institution: "Vision College, Hamilton",
    year: "2018",
  },
];

const certificates = [
  {
    name: "Generative AI Certificate",
    issuer: "CodeSignal",
  },
  {
    name: "Microsoft Build Natural Language Certificate",
    issuer: "Microsoft",
  },
];

export function Education() {
  return (
    <>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        Education & Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline">
              <GraduationCap className="w-7 h-7 text-accent"/>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-headline">
              <Award className="w-7 h-7 text-accent" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {certificates.map((cert, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg text-foreground">{cert.name}</h3>
                <p className="text-muted-foreground">Issued by {cert.issuer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
