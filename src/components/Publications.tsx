import { FileText, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type PubLink = { label: string; url: string };

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
  links: PubLink[];
};

const publications: Publication[] = [
  {
    title: "A Closed Form Depth-Width Law for Neural Collapse in Deep Linear Networks",
    authors: "Pankhil Gawade, K. Fischer, Guy Wolf, et al.",
    venue: "arXiv preprint",
    year: "2026",
    description:
      "Derives, in closed form, how depth and width shape representation geometry via neural collapse (NC1–NC3) in deep linear networks — a representation-level scaling law in the depth-to-width ratio L/N.",
    links: [
      {
        label: "arXiv",
        url: "https://arxiv.org/search/?query=Closed+Form+Depth-Width+Law+Neural+Collapse&searchtype=title",
      },
    ],
  },
  {
    title: "Scalable and Interpretable Representation Alignment with Ordinal Similarity",
    authors: "Diogo Soares, Pankhil Gawade, Andrea Dittadi, Ewa Szczurek",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2026",
    description:
      "An ordinal-similarity framework (Triplet & Quadruplet Similarity Indices) for measuring representation alignment that is interpretable, robust to outliers, and computationally efficient.",
    links: [
      { label: "ICML", url: "https://icml.cc/virtual/2026/poster/65177" },
      { label: "arXiv", url: "https://arxiv.org/abs/2606.16379" },
    ],
  },
  {
    title: "Sample Efficient Generative Molecular Optimization with Joint Self-Improvement",
    authors:
      "Serra Korkmaz, Adam Izdebski, Jonathan Pirnay, Rasmus Møller-Larsen, Michal Kmicikiewicz, Pankhil Gawade, Dominik G. Grimm, Ewa Szczurek",
    venue: "arXiv preprint",
    year: "2026",
    description:
      "Joint Self-Improvement: a joint generative-predictive model with self-improving sampling that outperforms state-of-the-art molecular optimization under limited evaluation budgets.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2602.10984" }],
  },
  {
    title: "Synergistic Benefits of Joint Molecule Generation and Property Prediction",
    authors:
      "Adam Izdebski, Jan Olszewski, Pankhil Gawade, Krzysztof Koras, Serra Korkmaz, Valentin Rauscher, Jakub M. Tomczak, Ewa Szczurek",
    venue: "Transactions on Machine Learning Research (TMLR)",
    year: "2026",
    description:
      "Hyformer: a joint transformer for generation + property prediction with strong conditional sampling and OOD prediction; includes an antimicrobial peptide design case study.",
    links: [
      { label: "OpenReview", url: "https://openreview.net/forum?id=jnzCOLyGOA" },
      { label: "arXiv", url: "https://arxiv.org/abs/2504.16559" },
      { label: "Code", url: "https://github.com/szczurek-lab/hyformer" },
    ],
  },
  {
    title:
      "Freeze, Diffuse, Decode: Geometry-Aware Adaptation of Pretrained Transformer Embeddings for Antimicrobial Peptide Design",
    authors:
      "Pankhil Gawade, Adam Izdebski, Myriam Lizotte, Kevin R. Moon, Jake S. Rhodes, Guy Wolf, Ewa Szczurek",
    venue: "arXiv preprint",
    year: "2025",
    description:
      "A geometry-aware framework to adapt frozen pretrained embeddings to downstream AMP design by propagating supervision along the intrinsic manifold.",
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2511.23120" }],
  },
  {
    title: "seqme: a Python library for evaluating biological sequence design",
    authors:
      "Rasmus Møller-Larsen, Adam Izdebski, Jan Olszewski, Pankhil Gawade, Michal Kmicikiewicz, Wojciech Zarzecki, Ewa Szczurek",
    venue: "arXiv preprint",
    year: "2025",
    description:
      "A modular, model-agnostic evaluation library covering sequence-, embedding-, and property-based metrics for biological sequence design (DNA/RNA/peptides/proteins/small molecules).",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2511.04239" },
      { label: "Code", url: "https://github.com/szczurek-lab/seqme" },
    ],
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-card/30">
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
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="group p-6 bg-card/50 rounded-lg border border-border hover:border-accent-cyber/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(160_100%_50%/0.1)] backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30 group-hover:bg-accent-cyber/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-accent-cyber" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-1">
                      {pub.venue} • {pub.year}
                    </p>

                    <p className="text-sm text-accent-cyber font-mono mt-3">
                      {pub.authors}
                    </p>

                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {pub.links.map((l) => (
                        <Button key={l.url} variant="social" size="sm" asChild>
                          <a href={l.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            {l.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <a
                href="https://scholar.google.com/citations?user=e2kHnzsAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                View All on Google Scholar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
