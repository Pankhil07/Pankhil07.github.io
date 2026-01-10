import { Github, Linkedin, GraduationCap, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-sm">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="social" size="icon" asChild>
                <a href="mailto:email@example.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                  <GraduationCap className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
