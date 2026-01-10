import { Github, Linkedin, GraduationCap, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Terminal className="h-5 w-5 text-accent-cyber" />
                <h3 className="font-mono text-xl font-semibold text-foreground">
                  <span className="text-accent-cyber">~/</span>connect
                </h3>
              </div>
              <p className="text-muted-foreground text-sm font-mono">
                <span className="text-accent-cyber">$</span> open for collaborations and research opportunities
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="social" size="icon" asChild>
                <a href="mailto:pankhilgawade2001@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://github.com/Pankhil07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://www.linkedin.com/in/pankhil-g-34210018b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                  <GraduationCap className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-accent-cyber">©</span> {new Date().getFullYear()} Pankhil Gawade. Built with <span className="text-accent-neon">{"<>"}</span> code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;