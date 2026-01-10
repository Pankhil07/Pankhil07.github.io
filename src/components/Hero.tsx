import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="inline-block px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-full">PhD Student</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-foreground mb-6 animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Hi, I'm <span className="text-accent-warm">Pankhil Gawade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
        </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Learn More
            </Button>
          </div>
          
          <div className="mt-20 animate-fade-up" style={{
          animationDelay: "0.6s"
        }}>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })} className="text-muted-foreground hover:text-foreground transition-colors animate-bounce" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;