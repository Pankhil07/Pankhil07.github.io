import { Github, Linkedin, GraduationCap, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 font-mono text-lg font-semibold text-foreground hover:text-accent-cyber transition-colors">
          <Terminal className="h-5 w-5 text-accent-cyber" />
          <span className="text-accent-cyber">~/</span>pankhil
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {["about", "publications", "cv"].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-sm font-mono text-muted-foreground hover:text-accent-cyber transition-colors"
            >
              <span className="text-accent-cyber">.</span>{section}()
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
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
    </header>;
};
export default Header;