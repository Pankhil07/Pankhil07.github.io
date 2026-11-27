import { Github, Linkedin, GraduationCap, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/85">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Terminal className="h-4 w-4 text-accent-cyber" />
                <h3 className="font-mono text-lg font-bold text-foreground">
                  <span className="text-accent-cyber">pankhil@munich</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-accent-neon">~/connect</span>$
                </h3>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-mono">
                <span className="text-accent-cyber">&gt;</span> open for collaborations and research opportunities
              </p>
              <a
                href="mailto:pankhilgawade2001@gmail.com"
                className="inline-block mt-1.5 text-xs font-mono text-accent-cyber hover:text-accent-neon underline underline-offset-4 transition-colors"
              >
                pankhilgawade2001@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5">
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
                <a
                  href="https://www.linkedin.com/in/pankhil-g-34210018b"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a
                  href="https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                >
                  <GraduationCap className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
            <span>
              <span className="text-accent-cyber">[EOF]</span> EXIT 0
            </span>
            <span>
              © {new Date().getFullYear()} Pankhil Gawade — 90s CRT UNIX Workstation Edition
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
