import { ArrowDown, Terminal, Braces, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HERO_SKILLS = ["PyTorch", "TensorFlow", "Python", "Machine Learning", "Deep Learning"];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main UNIX Workstation Terminal Window */}
          <div className="unix-window">
            {/* Classic 90s Titlebar */}
            <div className="unix-titlebar">
              <div className="flex items-center gap-2 min-w-0">
                <span className="inline-flex items-center gap-1.5 text-accent-cyber font-bold shrink-0">
                  [■]
                </span>
                <span className="truncate text-foreground/90">tty1 — /home/pankhil/motd.sh</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground">SYS: UNIX/AI</span>
                <span className="text-accent-cyber">● ONLINE</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 md:p-12">
              {/* Status banner */}
              <div className="mb-8 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-neon/10 border border-accent-neon/50 text-accent-neon text-xs sm:text-sm font-mono">
                  <Cpu className="h-4 w-4 shrink-0" />
                  <span>Doctoral Researcher @ Helmholtz Munich &amp; TUM</span>
                </span>
              </div>

              {/* Profile Photo + Name */}
              <div className="mb-8 flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 text-center md:text-left">
                <div className="relative flex-shrink-0 p-1.5 border border-accent-cyber/70 bg-background">
                  {/* Corner bracket ticks */}
                  <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-neon" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-neon" aria-hidden="true" />
                  <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-neon" aria-hidden="true" />
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-neon" aria-hidden="true" />
                  <Avatar className="h-24 w-24 md:h-28 md:w-28 rounded-none">
                    <AvatarImage src="/pg.jpg" alt="Pankhil Gawade" className="object-cover" />
                    <AvatarFallback className="rounded-none bg-secondary text-accent-cyber text-2xl font-bold">
                      PG
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div>
                  <p className="text-accent-cyber font-mono text-xs sm:text-sm uppercase tracking-widest mb-2">
                    $ whoami {"// hello, I'm"}
                  </p>
                  <h1 className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground phosphor-glow tracking-tight leading-none">
                    Pankhil Gawade
                    <span className="text-accent-cyber cursor-blink ml-1" aria-hidden="true">
                      _
                    </span>
                  </h1>
                </div>
              </div>

              {/* Research tagline */}
              <div className="mb-8 p-4 bg-background/80 border-l-2 border-accent-cyber text-left">
                <p className="text-sm sm:text-base md:text-lg text-foreground/95 leading-relaxed font-mono">
                  <span className="text-accent-cyber font-bold mr-2">&gt;</span>
                  Specializing in{" "}
                  <span className="text-accent-cyber font-semibold">topology-aware generative AI</span>,{" "}
                  <span className="text-accent-neon font-semibold">drug discovery</span>, and{" "}
                  <span className="text-accent-neon font-semibold">antimicrobial peptide design</span>.
                </p>
              </div>

              {/* High-contrast Tech Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-10">
                {HERO_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/90 border border-border text-foreground/90 text-xs font-mono hover:border-accent-cyber hover:text-accent-cyber transition-colors"
                  >
                    <span className="text-accent-cyber mr-1">[</span>
                    {skill}
                    <span className="text-accent-cyber ml-1">]</span>
                  </span>
                ))}
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-stretch sm:items-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() =>
                    document.getElementById("publications")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <Braces className="h-4 w-4" />
                  View Publications
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  <Terminal className="h-4 w-4" />
                  Read About
                </Button>
              </div>
            </div>

            {/* Classic bottom status bar */}
            <div className="px-4 py-2.5 border-t border-border bg-secondary/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
              <span>
                <span className="text-accent-cyber">LOC:</span> Munich, DE
              </span>
              <span>
                <span className="text-accent-cyber">LAB:</span> AI for Health (Szczurek Lab)
              </span>
              <span>
                <span className="text-accent-neon">PUBS:</span> 6 indexed
              </span>
            </div>
          </div>

          {/* Scroll prompt */}
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-accent-cyber border border-transparent hover:border-border transition-colors"
              aria-label="Scroll down to About section"
            >
              <ArrowDown className="h-4 w-4 text-accent-cyber" />
              <span>SCROLL_DOWN --section=01:about</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
