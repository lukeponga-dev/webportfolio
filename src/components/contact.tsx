import { AIRecommendation } from './ai-recommendation';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 text-center">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
        <div className="flex justify-center items-center gap-2 text-lg mb-12">
          <Mail className="w-5 h-5 text-primary" />
          <a
            href="mailto:lukeponga9@gmail.com"
            className="hover:underline text-primary font-semibold"
          >
            lukeponga9@gmail.com
          </a>
        </div>

        <AIRecommendation />
      </div>
    </section>
  );
}
