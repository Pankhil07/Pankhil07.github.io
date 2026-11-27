import { useEffect, useState } from "react";
import { Github, Linkedin, GraduationCap, Terminal, Menu, X, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { id: "about", index: "01", label: "about" },
  { id: "publications", index: "02", label: "publications" },
  { id: "cv", index: "03", label: "cv" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [crtEnabled, setCrtEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = "hero";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleCrt = () => {
    setCrtEnabled((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("crt-off", !next);
      return next;
    });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-foreground hover:text-accent-cyber transition-colors"
        >
          <Terminal className="h-4 w-4 text-accent-cyber shrink-0" />
          <span>
            <span className="text-accent-cyber">pankhil@tum</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent-neon">~</span>
            <span className="text-muted-foreground">$</span>
          </span>
          <span className="inline-block w-2 h-4 bg-accent-cyber cursor-blink" aria-hidden="true" />
        </button>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors ${
                  isActive
                    ? "border-accent-cyber bg-accent-cyber/15 text-accent-cyber font-semibold"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <span className="text-accent-neon mr-1">{item.index}:</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right utilities + mobile menu toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCrt}
            aria-pressed={crtEnabled}
            title="Toggle CRT scanline effect"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-2.5 border border-border bg-card text-xs font-mono text-muted-foreground hover:border-accent-cyber hover:text-accent-cyber transition-colors"
          >
            <Monitor className="h-3.5 w-3.5" />
            <span>CRT:{crtEnabled ? "ON" : "OFF"}</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5">
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

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden inline-flex items-center gap-1.5 h-9 px-3 border border-accent-cyber/60 bg-card text-xs font-mono text-accent-cyber hover:bg-accent-cyber/15 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="md:hidden border-t border-border bg-background/95 px-4 py-4">
          <div className="unix-window">
            <div className="unix-titlebar">
              <span>/bin/nav --interactive</span>
              <span className="text-accent-cyber">TTY1</span>
            </div>
            <nav aria-label="Mobile navigation" className="p-3 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2.5 text-sm font-mono border flex items-center justify-between transition-colors ${
                      isActive
                        ? "border-accent-cyber bg-accent-cyber/15 text-accent-cyber font-semibold"
                        : "border-border bg-secondary/40 text-foreground hover:border-accent-cyber/60"
                    }`}
                  >
                    <span>
                      <span className="text-accent-neon mr-2">[{item.index}]</span>
                      cd ~/{item.label}
                    </span>
                    <span className="text-xs text-muted-foreground">↵</span>
                  </button>
                );
              })}

              <div className="pt-2 mt-1 border-t border-border flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={toggleCrt}
                  aria-pressed={crtEnabled}
                  className="inline-flex items-center gap-1.5 px-2.5 py-2 border border-border bg-secondary/40 text-xs font-mono text-muted-foreground hover:text-accent-cyber"
                >
                  <Monitor className="h-3.5 w-3.5" />
                  <span>CRT:{crtEnabled ? "ON" : "OFF"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <Button variant="social" size="icon" asChild>
                    <a
                      href="https://github.com/Pankhil07"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
