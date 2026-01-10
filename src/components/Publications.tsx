import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "Deep Learning Approaches for Natural Language Understanding",
    authors: "Your Name, Co-Author A, Co-Author B",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    link: "https://arxiv.org",
  },
  {
    title: "Efficient Transformer Architectures for Low-Resource Settings",
    authors: "Your Name, Co-Author C",
    venue: "Association for Computational Linguistics (ACL)",
    year: "2023",
    link: "https://arxiv.org",
  },
  {
    title: "A Survey on Multi-Modal Learning: Methods and Applications",
    authors: "Co-Author D, Your Name, Co-Author E",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: "2023",
    link: "https://arxiv.org",
  },
  {
    title: "Reinforcement Learning for Robotic Manipulation Tasks",
    authors: "Your Name, Co-Author F, Co-Author G",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: "2022",
    link: "https://arxiv.org",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-4 text-center">
            Publications
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Selected peer-reviewed publications and preprints.
          </p>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div 
                key={pub.title}
                className="group p-6 bg-background rounded-lg border border-border hover:border-accent-warm/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-lg group-hover:bg-accent-warm/10 transition-colors">
                    <FileText className="h-5 w-5 text-accent-warm" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-accent-warm transition-colors mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">{pub.venue}</span> · {pub.year}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" aria-label="View publication">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
