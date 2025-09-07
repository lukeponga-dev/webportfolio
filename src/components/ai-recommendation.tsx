"use client";

import { useState } from "react";
import { aiPoweredRecommendation } from "@/ai/flows/ai-powered-recommendation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const skills = "C# & .NET Framework, Java & Spring Boot, Python & TensorFlow, JavaScript/TypeScript, Generative AI, IoT System Design, Cloud Infrastructure (AWS), API Development, Database Management, Data Analysis, Problem Solving, Logical Reasoning, Time Management, Project Organization, Detail Oriented";
const experience = "Passionate software developer with expertise in building scalable applications, IoT systems, and AI solutions. Strong foundation from diplomas and hands-on experience. Interests in Internet of Things (IoT) ecosystems and Artificial Intelligence. Certified in Generative AI.";
const projects = "New Zealand Website (HTML/CSS, JavaScript, Bootstrap), Doctors Appointments (C#, ASP.NET, SQL Server), Health Clinic MVC (MVC, Entity Framework, C#), CosmicPic (HTML, CSS, JavaScript, API Integration)";

export function AIRecommendation() {
  const [recommendation, setRecommendation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setRecommendation("");
    try {
      const result = await aiPoweredRecommendation({ skills, experience, projects });
      setRecommendation(result.recommendation);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate recommendation. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mt-16">
      <Card className="text-center bg-card">
        <CardHeader className="p-6">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">AI-Powered Recommendation</CardTitle>
          <CardDescription className="max-w-md mx-auto mt-2">
            Curious how my skills could fit your team? Let AI suggest a potential role or project collaboration.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <Button onClick={handleGenerate} disabled={isLoading} size="lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Idea"
            )}
          </Button>
          {recommendation && (
            <div className="mt-8 p-6 border rounded-lg bg-background text-center shadow-inner">
              <p className="text-foreground/90 whitespace-pre-wrap">{recommendation}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
