import { ArrowDown, Terminal, Braces, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-30 border-destructive bg-[accent-neon-foreground] text-[sidebar-primary-foreground] bg-primary-foreground text-primary-foreground" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyber/10 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-neon/10 rounded-full blur-[128px] animate-pulse-slow" style={{
      animationDelay: "2s"
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-accent-cyber/30 text-accent-cyber text-sm font-mono rounded-full">
              <Cpu className="h-4 w-4" />
              Doctoral Researcher @ Helmholtz Munich & TUM
            </span>
          </div>
          
          {/* Profile Photo and Name */}
          <div className="mb-8 animate-fade-up flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8" style={{
          animationDelay: "0.15s"
        }}>
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-accent-cyber/30 rounded-full blur-xl animate-pulse-slow"></div>
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-accent-cyber/50 shadow-[0_0_30px_hsl(160_100%_50%/0.3)] hover:shadow-[0_0_40px_hsl(160_100%_50%/0.5)] transition-all duration-300">
                <AvatarImage src="/pg.jpg" alt="Pankhil Gawade" className="object-cover" />
                <AvatarFallback className="bg-accent-cyber/20 text-accent-cyber text-2xl font-bold">
                  PG
                </AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
              <span className="text-muted-foreground font-mono text-xl md:text-2xl lg:text-3xl block mb-2">{"// Hello, I'm"}</span>
              <span className="gradient-text animate-glow font-light">Pankhil Gawade</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up font-mono" style={{
          animationDelay: "0.3s"
        }}>
            <span className="text-accent-cyber">{">"}</span> Specializing in topology-aware generative AI, drug discovery, and antimicrobial peptide design
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{
          animationDelay: "0.35s"
        }}>
            {["PyTorch", "TensorFlow", "Python", "Machine Learning", "Deep Learning"].map(skill => <span key={skill} className="px-3 py-1 bg-card/50 border border-border text-muted-foreground text-xs font-mono rounded-md hover:border-accent-cyber hover:text-accent-cyber transition-colors">
                {skill}
              </span>)}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="lg" onClick={() => document.getElementById("publications")?.scrollIntoView({
            behavior: "smooth"
          })}>
              <Braces className="h-4 w-4" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })}>
              <Terminal className="h-4 w-4" />
              Learn More
            </Button>
          </div>
          
          <div className="mt-20 animate-fade-up" style={{
          animationDelay: "0.6s"
        }}>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })} className="text-muted-foreground hover:text-accent-cyber transition-colors animate-bounce" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;