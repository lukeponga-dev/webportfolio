import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github } from "lucide-react";

// This is a placeholder component.
// In a real application, you would fetch this data from the GitHub API.
const recentActivity = [
    { id: 1, repo: 'lukeponga-dev/portfolio-v2', action: 'pushed 2 commits' },
    { id: 2, repo: 'lukeponga-dev/Job-application-tracker', action: 'opened issue #4' },
    { id: 3, repo: 'lukeponga-dev/WebAPI', action: 'merged pull request #12' },
];

export function GithubActivity() {
    return (
        <>
            <h2 className="text-3xl font-bold font-headline text-center mb-12">
                Latest GitHub Activity
            </h2>
            <Card className="max-w-3xl mx-auto bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                        <Github className="w-7 h-7 text-accent" />
                        Recent Commits & Contributions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {recentActivity.map(activity => (
                             <li key={activity.id} className="flex items-center gap-4 text-muted-foreground">
                                <Github className="w-5 h-5 shrink-0" />
                                <p>
                                    <a href={`https://github.com/${activity.repo}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-accent transition-colors">
                                        {activity.repo}
                                    </a>
                                    <span className="ml-2">{activity.action}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    );
}
