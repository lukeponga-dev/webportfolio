
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Level 6 Diploma in Software Development",
    institution: "Vision College, Hamilton | 2020 - 2021",
  },
  {
    degree: "Level 5 Diploma in Web Development & Design",
    institution: "Vision College, Hamilton | 2019 - 2021",
  },
  {
    degree: "Level 3 Cert. in Business Admin & Technology",
    institution: "Vision College, Hamilton | 2018",
  },
];

const certificates = [
  {
    name: "Generative AI Certificate",
    issuer: "Issued by CodeSignal",
  },
  {
    name: "Microsoft Build Natural Language Certificate",
    issuer: "Issued by Microsoft",
  },
];


export function Education() {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-2xl font-bold font-headline uppercase tracking-wider text-primary mb-12">
        Education & Certs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
        <div>
          <h3 className="flex items-center justify-center md:justify-start gap-3 text-2xl font-bold font-headline mb-6">
            <GraduationCap className="w-7 h-7 text-primary"/>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="text-center md:text-left">
                <h4 className="font-semibold text-lg">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="flex items-center justify-center md:justify-start gap-3 text-2xl font-bold font-headline mb-6">
            <Award className="w-7 h-7 text-primary" />
            Certificates
          </h3>
          <div className="space-y-6">
            {certificates.map((cert, index) => (
               <div key={index} className="text-center md:text-left">
                <h4 className="font-semibold text-lg">{cert.name}</h4>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
