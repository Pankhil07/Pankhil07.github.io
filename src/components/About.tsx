import { useState } from "react";
import { MapPin, Mail, Building, FileCode2, Copy, Check, Network, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "pankhilgawade2001@gmail.com";

const RESEARCH_AFFILIATIONS = [
  {
    code: "ELLIS",
    name: "European Laboratory for Learning and Intelligent Systems",
    url: "https://ellis.eu",
  },
  {
    code: "MCML",
    name: "Munich Center for Machine Learning",
    url: "https://mcml.ai",
  },
  {
    code: "ELIZA",
    name: "Konrad Zuse School of Excellence in Learning and Intelligent Systems",
    url: "https://eliza.school",
  },
];

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy email — click the address to open your mail app");
    }
  };

  return (
    <section id="about" className="py-20 border-t border-border/60 bg-background/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <p className="text-xs font-mono text-accent-neon uppercase tracking-widest mb-1">$ man 1 pankhil</p>
            <div className="flex items-center gap-4">
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                <span className="text-accent-cyber">01 //</span> ABOUT
              </h2>
              <div className="flex-1 h-px bg-border" aria-hidden="true" />
            </div>
          </div>

          {/* 3 Metadata Info Tiles */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="unix-window p-4 flex items-center gap-3 hover:border-accent-cyber transition-colors">
              <MapPin className="h-4 w-4 text-accent-cyber shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-mono text-muted-foreground uppercase">LOCATION</p>
                <p className="text-sm font-mono text-foreground truncate">Munich, Germany</p>
              </div>
            </div>

            <div className="unix-window p-4 flex items-center gap-3 hover:border-accent-cyber transition-colors">
              <Building className="h-4 w-4 text-accent-cyber shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-mono text-muted-foreground uppercase">INSTITUTION</p>
                <p className="text-sm font-mono text-foreground truncate">Helmholtz Munich &amp; TUM</p>
              </div>
            </div>

            <div className="unix-window p-4 flex items-center justify-between gap-2 sm:col-span-2 md:col-span-1 hover:border-accent-cyber transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="h-4 w-4 text-accent-neon shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase">EMAIL</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sm font-mono text-foreground hover:text-accent-cyber underline underline-offset-4 truncate block transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                title="Copy email address"
                className="shrink-0 p-1.5 border border-border bg-secondary/70 text-muted-foreground hover:border-accent-cyber hover:text-accent-cyber transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-accent-cyber" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Research Network Affiliations (ELLIS, MCML, ELIZA) */}
          <div className="unix-window mb-8">
            <div className="unix-titlebar">
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-accent-neon" />
                <span className="text-foreground">~/affiliations.conf</span>
              </div>
              <span className="text-accent-cyber">[ELLIS · MCML · ELIZA]</span>
            </div>
            <div className="p-4 grid sm:grid-cols-3 gap-3">
              {RESEARCH_AFFILIATIONS.map((aff) => (
                <a
                  key={aff.code}
                  href={aff.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-background/70 border border-border hover:border-accent-cyber transition-colors block"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-mono font-bold text-accent-cyber group-hover:text-accent-neon transition-colors">
                      [{aff.code}]
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent-cyber transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground leading-snug">{aff.name}</p>
                </a>
              ))}
            </div>
          </div>

          {/* vi / cat ~/bio.md window */}
          <div className="unix-window">
            <div className="unix-titlebar">
              <div className="flex items-center gap-2">
                <FileCode2 className="h-4 w-4 text-accent-cyber" />
                <span className="text-foreground">~/bio.md</span>
              </div>
              <span className="text-muted-foreground">UTF-8 | RO | MARKDOWN</span>
            </div>

            <div className="p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed space-y-5">
              <div className="flex gap-4">
                <span className="text-xs text-muted-foreground/60 select-none pt-1 w-6 shrink-0">01</span>
                <p className="text-foreground/90">
                  I am a doctoral researcher specializing in{" "}
                  <span className="text-accent-cyber font-semibold">topology-aware generative AI</span>. With a strong
                  foundation in scientific research and applied machine learning, I possess proven expertise in
                  developing advanced models for{" "}
                  <span className="text-accent-neon font-semibold">drug discovery</span> and designing{" "}
                  <span className="text-accent-neon font-semibold">antimicrobial peptides</span>.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-xs text-muted-foreground/60 select-none pt-1 w-6 shrink-0">02</span>
                <p className="text-foreground/90">
                  I am currently pursuing my PhD at{" "}
                  <span className="text-foreground font-semibold">Helmholtz Munich</span> and{" "}
                  <span className="text-foreground font-semibold">
                    TUM School of Computation, Information and Technology
                  </span>{" "}
                  (affiliated with <span className="text-accent-cyber font-semibold">ELLIS</span>,{" "}
                  <span className="text-accent-cyber font-semibold">MCML</span>, and{" "}
                  <span className="text-accent-cyber font-semibold">ELIZA</span>) under the supervision of{" "}
                  <a
                    href="https://scholar.google.com/citations?user=hltmGf0AAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyber hover:text-accent-neon underline underline-offset-4 font-semibold transition-colors"
                  >
                    Dr. Ewa Szczurek
                  </a>
                  ,{" "}
                  <a
                    href="https://scholar.google.com/citations?user=La7zuKQAAAAJ&hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyber hover:text-accent-neon underline underline-offset-4 font-semibold transition-colors"
                  >
                    Dr. Bastian Rieck
                  </a>
                  , and{" "}
                  <a
                    href="https://scholar.google.com/citations?user=g0k3SjcAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyber hover:text-accent-neon underline underline-offset-4 font-semibold transition-colors"
                  >
                    Dr. Guy Wolf
                  </a>
                  , focusing on geometry-aware transformers for antimicrobial peptide design.
                </p>
              </div>
            </div>

            <div className="px-4 py-1.5 border-t border-border bg-secondary/50 text-[11px] font-mono text-muted-foreground flex justify-between">
              <span>-- VIEW --</span>
              <span>2 paragraphs | 100%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
