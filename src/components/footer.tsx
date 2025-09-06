import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t pt-8">
      <div className="text-center text-muted-foreground">
         <h3 className="text-xl font-bold font-headline mb-4 text-foreground">Get In Touch</h3>
         <div className="flex justify-center items-center gap-2 text-lg mb-8">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:lukeponga9@gmail.com" className="hover:underline">
              lukeponga9@gmail.com
            </a>
          </div>
        <p className="text-sm">© {new Date().getFullYear()} Luke Ponga. All Rights Reserved.</p>
        <p className="mt-1 text-sm">Designed with ♥ in Hamilton, New Zealand</p>
      </div>
    </footer>
  );
}
