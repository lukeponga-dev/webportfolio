"use client";

import { useState } from "react";
import { aiPoweredRecommendation } from "@/ai/flows/ai-powered-recommendation";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

// Note: This data should ideally be fetched from a single source of truth (e.g., a JSON file or API)
// to avoid duplication with other components.
const skills = ".NET, SQL, Azure, C#, Java, Python, JavaScript/TypeScript, React Native, Generative AI, IoT, API Development, Database Management, Automation, System Design, Problem Solving";
const experience = "Software developer specializing in backend systems with .NET, SQL, and Azure. Experience in architecting scalable APIs, optimizing database performance, and automating workflows. Passionate about IoT and community volunteering.";
const projects = "Job Application Tracker (React, Netlify), NZ Tourism Website (Bootstrap, JS), Vehicle Management API (.NET), Xamarin Mobile App (C#), AI Chat Interface (Next.js, Genkit)";

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
        title: "Error Generating Recommendation",
        description: "The AI model could not be reached. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center">
       <h2 className="text-3xl font-bold font-headline mb-4">
        Need a Skill Set Like Mine?
      </h2>
      <p className="max-w-2xl mx-auto mb-8 text-muted-foreground">
        Let AI analyze my profile and suggest a potential role or project collaboration that would be a great fit.
      </p>

      <Button onClick={handleGenerate} disabled={isLoading} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Get AI-Powered Suggestion
          </>
        )}
      </Button>

      {recommendation && (
        <Card className="mt-10 max-w-3xl mx-auto text-left bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-accent">Recommendation</CardTitle>
            </CardHeader>
          <CardContent>
            <p className="text-lg whitespace-pre-wrap">{recommendation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
