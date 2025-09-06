"use client";

import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-2">Get In Touch</h2>
          <p className="text-foreground/80 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me via email.
          </p>
          <div className="flex justify-center items-center gap-2 text-lg">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:lukeponga9@gmail.com" className="hover:underline">
              lukeponga9@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
