import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary/10 border-t border-primary/20 py-8">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-4 mb-4">
           <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/lukeponga-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/lukeponga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
        </div>
        <p>© {new Date().getFullYear()} Luke Ponga. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Designed with ♥ in Hamilton, New Zealand</p>
      </div>
    </footer>
  );
}
