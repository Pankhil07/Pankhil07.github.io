import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
const publications = [{
  title: "Geometry-aware Transformers for Antimicrobial Peptides Design",
  authors: "Pankhil Gawade, et al.",
  venue: "Master's Thesis - Helmholtz Munich & TUM",
  year: "2025",
  description: "State-of-the-art model for AMP generation using diffusion-based dimensionality reduction and NeuralODEs with Optimal Transport.",
  link: "https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en"
}, {
  title: "XMM-Newton Observations of Supernova 1987A",
  authors: "Research Team incl. Pankhil Gawade",
  venue: "Max Planck Institute of Extraterrestrial Physics",
  year: "2023",
  description: "Determining properties of Fe-K lines and tracing flux and spectral decline using eROSITA satellite data.",
  link: "https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en"
}];
const Publications = () => {
  return <section id="publications" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-foreground mb-2 text-center">
            <span className="text-accent-cyber font-mono">{"<"}</span>
            Publications
            <span className="text-accent-cyber font-mono">{" />"}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 font-mono text-sm">
            // research publications & preprints
          </p>
          
          <div className="space-y-6">
            {publications.map((pub, index) => <div key={pub.title} className="group p-6 bg-card/50 rounded-lg border border-border hover:border-accent-cyber/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_100%_50%/0.1)] backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30 group-hover:bg-accent-cyber/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-accent-cyber" />
                  </div>
                  <div className="flex-1">
                    
                    <p className="text-sm text-accent-cyber font-mono mb-1">
                      {pub.authors}
                    </p>
                    
                    
                    <Button variant="social" size="sm" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View on Scholar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>)}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a href="https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                View All on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Publications;