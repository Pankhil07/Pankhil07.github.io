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
        
      </div>
    </section>;
};
export default Projects;