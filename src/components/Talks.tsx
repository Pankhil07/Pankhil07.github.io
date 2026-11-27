import { Play, Video, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const talks = [
  {
    title: "AMPFormer: A Peptide Foundation Model for Antimicrobial Discovery",
    event: "Helmholtz AI Conference (HAICON26)",
    session: "Session 3a — Foundation Models for Science",
    date: "June 10, 2026",
    channel: "Helmholtz AI",
    youtubeId: "H0zLf_LyL0U",
    url: "https://www.youtube.com/watch?v=H0zLf_LyL0U",
    description:
      "Presents AMPFormer, a peptide foundation model unifying de novo antimicrobial peptide generation and property prediction with test-time alignment steering and self-improvement — with all 25/25 wet-lab validated candidates active against clinically relevant pathogens.",
  },
];

const Talks = () => {
  return (
    <section id="talks" className="py-20 border-t border-border/60 bg-background/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-xs font-mono text-accent-neon uppercase tracking-widest mb-1">
              $ ls -lt ~/talks/ # recorded presentations
            </p>
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                <span className="text-accent-cyber">03 //</span> TALKS
              </h2>
              <div className="flex-1 h-px bg-border" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-6">
            {talks.map((talk) => (
              <article key={talk.youtubeId} className="unix-window-amber hover:border-accent-cyber transition-colors">
                <div className="unix-titlebar flex-wrap">
                  <div className="flex items-center gap-2 min-w-0">
                    <Video className="h-3.5 w-3.5 text-accent-neon shrink-0" />
                    <span className="text-foreground font-semibold truncate">
                      ~/talks/haicon26_ampformer.mp4
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-0.5 bg-accent-neon/15 border border-accent-neon/50 text-accent-neon text-[11px] font-mono font-semibold">
                      HAICON26
                    </span>
                    <span className="text-accent-cyber text-[11px] font-mono">YOUTUBE</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 grid md:grid-cols-5 gap-6 items-center">
                  {/* CRT-framed YouTube thumbnail */}
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${talk.title} on YouTube`}
                    className="md:col-span-2 group relative block border border-accent-cyber/60 bg-background overflow-hidden"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${talk.youtubeId}/hqdefault.jpg`}
                      alt={talk.title}
                      loading="lazy"
                      className="w-full aspect-video object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-200"
                    />
                    <div className="absolute inset-0 bg-background/35 group-hover:bg-background/15 transition-colors flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-cyber text-accent-cyber-foreground font-mono text-xs font-bold border border-accent-cyber shadow-[3px_3px_0_0_hsl(38_100%_58%)]">
                        <Play className="h-3.5 w-3.5 fill-current" />
                        PLAY
                      </span>
                    </div>
                  </a>

                  {/* Talk Details */}
                  <div className="md:col-span-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-accent-neon mb-2">
                      <span>{talk.event}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3 text-accent-cyber" />
                        {talk.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">{talk.title}</h3>

                    <p className="text-xs font-mono text-accent-cyber mt-1.5">{talk.session}</p>

                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{talk.description}</p>

                    <div className="mt-5">
                      <Button variant="hero" size="sm" asChild>
                        <a href={talk.url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-3.5 w-3.5" />
                          Watch on YouTube ({talk.channel})
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;
