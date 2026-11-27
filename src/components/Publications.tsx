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

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(Pankhil Gawade)/g);
  return parts.map((part, idx) =>
    part === "Pankhil Gawade" ? (
      <strong key={idx} className="text-foreground underline decoration-accent-cyber underline-offset-4 font-bold">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    ),
  );
};

const Publications = () => {
  return (
    <section id="publications" className="py-20 border-t border-border/60 bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-xs font-mono text-accent-neon uppercase tracking-widest mb-1">
              $ ls -lt ~/publications/ # {publications.length} entries
            </p>
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                <span className="text-accent-cyber">02 //</span> PUBLICATIONS
              </h2>
              <div className="flex-1 h-px bg-border" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-6">
            {publications.map((pub, idx) => {
              const isFirstAuthor = pub.authors.startsWith("Pankhil Gawade");
              const isPeerReviewed = !pub.venue.toLowerCase().includes("preprint");
              const entryIndex = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={pub.title}
                  className={`${
                    isPeerReviewed ? "unix-window-amber" : "unix-window"
                  } transition-colors hover:border-accent-cyber`}
                >
                  {/* Record top bar */}
                  <div className="unix-titlebar flex-wrap">
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen className="h-3.5 w-3.5 text-accent-cyber shrink-0" />
                      <span className="text-accent-cyber font-bold">[{entryIndex}]</span>
                      <span
                        className={`text-xs font-mono ${
                          isPeerReviewed ? "text-accent-neon font-semibold" : "text-muted-foreground"
                        }`}
                      >
                        {pub.venue} ({pub.year})
                      </span>
                    </div>
                    {isFirstAuthor && (
                      <span className="px-2 py-0.5 bg-accent-cyber/15 border border-accent-cyber/60 text-accent-cyber text-[11px] font-mono font-semibold">
                        1ST_AUTHOR
                      </span>
                    )}
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">{pub.title}</h3>

                    <p className="text-xs sm:text-sm text-accent-cyber/90 font-mono mt-3 leading-relaxed">
                      {renderAuthors(pub.authors)}
                    </p>

                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{pub.description}</p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {pub.links.map((l) => (
                        <Button key={l.url} variant="social" size="sm" asChild>
                          <a href={l.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            [{l.label}]
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
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
