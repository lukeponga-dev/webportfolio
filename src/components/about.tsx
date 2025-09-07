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
            My background spans backend systems, secure configurations, and modern web development using technologies like .NET, SQL, Azure, React Native, and Tailwind CSS.
          </p>
          <p>
            I thrive on solving real-world problems through clean, scalable code and structured workflows. Whether I’m automating developer tasks, optimizing performance, or troubleshooting complex environments like Xamarin and Visual Studio, I approach every challenge with clarity, precision, and curiosity.
          </p>
          <p>
            Beyond the keyboard, I’m committed to community service — blending technical skills with volunteer work in retail, hospice, and digital support roles. I believe in learning through doing, and I’m always exploring new ways to contribute meaningfully through both paid and volunteer opportunities.
          </p>
          <p className="font-bold text-foreground">
            Let’s build something that matters.
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
