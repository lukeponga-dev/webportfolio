import Image from 'next/image';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function About() {
  return (
    <>
      <h2 className="text-3xl font-bold font-headline text-center mb-12">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="relative w-48 h-48 md:w-60 md:h-60 mx-auto">
          <Image
            src="https://picsum.photos/300/300"
            alt="Luke Ponga"
            width={240}
            height={240}
            className="rounded-full object-cover border-4 border-primary"
            data-ai-hint="professional headshot"
          />
        </div>
        <div className="md:col-span-2 text-lg text-center md:text-left space-y-6 text-muted-foreground">
          <p>
            Driven by a passion for building robust and efficient backend systems, I am a software developer who thrives on solving complex technical challenges. My journey has taken me from web development fundamentals to specializing in .NET, SQL, and cloud platforms like Azure.
          </p>
          <p>
            Whether it's architecting scalable APIs, optimizing database performance, or automating workflows, I find immense satisfaction in creating solutions that are both powerful and reliable. I also have a keen interest in IoT and enjoy volunteering my tech skills for community projects.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 pt-4">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:lukeponga9@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/lukeponga-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
             <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/lukeponga" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
