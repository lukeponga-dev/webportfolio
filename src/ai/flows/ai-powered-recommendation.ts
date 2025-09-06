'use server';

/**
 * @fileOverview An AI-powered recommendation flow for suggesting project collaborations or roles for Luke Ponga.
 *
 * - aiPoweredRecommendation - A function that generates a personalized recommendation based on Luke's skills, experience, and projects.
 * - AiPoweredRecommendationInput - The input type for the aiPoweredRecommendation function.
 * - AiPoweredRecommendationOutput - The return type for the aiPoweredRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiPoweredRecommendationInputSchema = z.object({
  skills: z.string().describe("Luke Ponga's skills."),
  experience: z.string().describe("Luke Ponga's experience."),
  projects: z.string().describe("Luke Ponga's featured projects."),
});
export type AiPoweredRecommendationInput = z.infer<typeof AiPoweredRecommendationInputSchema>;

const AiPoweredRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('A personalized project collaboration or role recommendation for Luke Ponga.'),
});
export type AiPoweredRecommendationOutput = z.infer<typeof AiPoweredRecommendationOutputSchema>;

export async function aiPoweredRecommendation(input: AiPoweredRecommendationInput): Promise<AiPoweredRecommendationOutput> {
  return aiPoweredRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredRecommendationPrompt',
  input: {schema: AiPoweredRecommendationInputSchema},
  output: {schema: AiPoweredRecommendationOutputSchema},
  prompt: `Based on the following information about Luke Ponga, suggest a potential project collaboration or role for him.\n\nSkills: {{{skills}}}\nExperience: {{{experience}}}\nFeatured Projects: {{{projects}}}\n\nRecommendation: `,
});

const aiPoweredRecommendationFlow = ai.defineFlow(
  {
    name: 'aiPoweredRecommendationFlow',
    inputSchema: AiPoweredRecommendationInputSchema,
    outputSchema: AiPoweredRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
