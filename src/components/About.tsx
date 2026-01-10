import { MapPin, Mail, Building, Code } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const About = () => {
  return <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-foreground mb-2 text-center">
            <span className="text-accent-cyber font-mono">{"<"}</span>
            About
            <span className="text-accent-cyber font-mono">{" />"}</span>
          </h2>
          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            // who am I?
          </p>
          
          {/* Profile Photo in About Section */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-cyber/20 rounded-full blur-xl"></div>
              <Avatar className="h-40 w-40 md:h-48 md:w-48 border-4 border-accent-cyber/50 shadow-[0_0_30px_hsl(160_100%_50%/0.2)] hover:shadow-[0_0_40px_hsl(160_100%_50%/0.4)] transition-all duration-300">
                <AvatarImage src="/pg.jpg" alt="Pankhil Gawade" className="object-cover" />
                <AvatarFallback className="bg-accent-cyber/20 text-accent-cyber text-3xl font-bold">
                  PG
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border hover:border-accent-cyber transition-colors">
              <MapPin className="h-5 w-5 text-accent-cyber" />
              <span className="text-muted-foreground font-mono text-sm">Munich, Germany</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border hover:border-accent-cyber transition-colors">
              <Building className="h-5 w-5 text-accent-cyber" />
              <span className="text-muted-foreground font-mono text-sm">Helmholtz Munich & TUM</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border hover:border-accent-cyber transition-colors">
              <Mail className="h-5 w-5 text-accent-cyber" />
              <span className="text-muted-foreground font-mono text-sm">pankhilgawade2001@gmail.com</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-card/50 rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-accent-cyber" />
                <span className="font-mono text-accent-cyber text-sm">bio.md</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">I am an  doctoral researcher specializing in topology-aware generative AI. With a strong foundation in scientific research and applied machine learning, I possess proven expertise in developing advanced models for drug discovery and designing antimicrobial peptides.<span className="text-accent-cyber">topology-aware generative AI</span>. 
                With a strong foundation in scientific research and applied machine learning, I possess proven expertise in developing 
                advanced models for <span className="text-accent-neon">drug discovery</span> and designing <span className="text-accent-neon">antimicrobial peptides</span>.
              </p>
              
              
              
              <p className="text-muted-foreground leading-relaxed">I am currently pursuing my PhD at Helmholtz Munich and the TUM School of Computation, Information and Technology, where I focus on geometry-aware transformers and principled generation strategies for peptide design.<span className="text-foreground">Helmholtz Munich</span> and 
                <span className="text-foreground"> TUM School of Computation, Information and Technology</span>, focusing on 
                geometry-aware transformers for antimicrobial peptide design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;