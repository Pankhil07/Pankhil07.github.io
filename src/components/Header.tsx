import { Github, Linkedin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection("hero")}
          className="font-display text-xl font-semibold text-foreground hover:text-accent-warm transition-colors"
        >
          Your Name
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("publications")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Publications
          </button>
          <button 
            onClick={() => scrollToSection("cv")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            CV
          </button>
        </nav>

        <div className="flex items-center gap-2">
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
    </header>
  );
};

export default Header;
