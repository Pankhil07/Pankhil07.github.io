import { Github, ExternalLink, Dna, Cpu, Telescope, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const projects = [{
  title: "Geometry-aware Transformers for AMPs",
  description: "State-of-the-art model for antimicrobial peptides generation and property prediction. Successfully validated with all 25 generated peptides active against clinically relevant bacteria.",
  tags: ["PyTorch", "Transformers", "Drug Discovery"],
  icon: Dna,
  github: "https://github.com/Pankhil07"
}, {
  title: "Jointformer Extension",
  description: "Extended Jointformer - a joint learning model for Antimicrobial Peptides generation and property prediction with GPT-type and BERT implementations.",
  tags: ["Python", "Deep Learning", "NLP"],
  icon: Brain,
  github: "https://github.com/Pankhil07"
}, {
  title: "ParFam Neural Extension",
  description: "Extended symbolic regression method using parametric families with pre-trained transformers. Implemented RNNs, LSTMs, and Set-Transformers from scratch.",
  tags: ["PyTorch", "Symbolic AI", "Optimization"],
  icon: Cpu,
  github: "https://github.com/Pankhil07"
}, {
  title: "Supernova 1987A Analysis",
  description: "XMM-Newton observations and eROSITA satellite data analysis for tracing flux and spectral decline of Supernova 1987A. Findings presented at conference.",
  tags: ["Python", "Astrophysics", "Data Analysis"],
  icon: Telescope,
  github: "https://github.com/Pankhil07"
}];
const Projects = () => {
  return <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-foreground mb-2 text-center">
            <span className="text-accent-cyber font-mono">{"<"}</span>
            Projects
            <span className="text-accent-cyber font-mono">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-mono text-sm">
            // research projects & experiments
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
            const Icon = project.icon;
            return <Card key={project.title} className="group bg-card/50 border-border hover:border-accent-cyber/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_100%_50%/0.1)] backdrop-blur-sm" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30 group-hover:bg-accent-cyber/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent-cyber" />
                      </div>
                      
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border">
                          {tag}
                        </span>)}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="social" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Projects;