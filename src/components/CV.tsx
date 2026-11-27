import { useState } from "react";
import { Briefcase, GraduationCap, Download, Code, Trophy, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { downloadCvPdf } from "@/lib/generateCvPdf";

const education = [
  {
    degree: "Doctoral Researcher",
    institution: "Helmholtz Munich & TUM School of Computation, Information and Technology",
    affiliations: "ELLIS • MCML • ELIZA",
    period: "October 2025 - Present",
    description: "Research focus on topology-aware generative AI for drug discovery.",
  },
];

const experience = [
  {
    role: "Scientific Assistant",
    company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
    period: "May 2025 - Present",
    description: "Continuing research on antimicrobial peptides generation and property prediction.",
  },
  {
    role: "Master's Thesis Student",
    company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
    period: "December 2024 - May 2025",
    description:
      "Geometry-aware transformers for Antimicrobial Peptides design. Created state-of-the-art model for AMP generation. All 25 generated peptides tested active against clinically relevant bacteria.",
  },
  {
    role: "Student Researcher",
    company: "Max Planck Institute of Innovation and Competition (Net Zero Lab)",
    period: "January 2025 - April 2025",
    description: "Investigating effects of governmental policies on Green investments with focus on the EU.",
  },
  {
    role: "Student Researcher",
    company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
    period: "May 2024 - November 2024",
    description:
      "Extended Jointformer for AMP generation and property prediction. Reimplemented various models including GPT-type and BERT for benchmarking.",
  },
  {
    role: "Student Researcher",
    company: "Bavarian AI Chair for Mathematical Foundations of AI",
    period: "September 2023 - February 2024",
    description:
      "Extended ParFam symbolic regression method. Implemented RNNs, LSTMs, Transformers, and Set-Transformers from scratch using PyTorch.",
  },
  {
    role: "Student Researcher",
    company: "Max Planck Institute of Extraterrestrial Physics",
    period: "January 2023 - July 2023",
    description:
      "XMM-Newton Observations of Supernova 1987A. Traced flux and spectral decline using eROSITA satellite data. Presented findings at conference.",
  },
];

const awards = [
  {
    name: "Deutschlandstipendium",
    description: "Scholarship for particularly talented and committed students with excellent academic performance.",
  },
  {
    name: "INSPIRE SHE Scholarship",
    description:
      "Scholarship for Higher Education under Innovation in Science Pursuit for Inspired Research by DST, India.",
  },
];

const academicService = [
  {
    role: "Peer Reviewer",
    venue: "AISTATS",
    fullName: "International Conference on Artificial Intelligence and Statistics",
  },
];

const skills = {
  programming: ["Python", "Pascal", "Linux", "R", "Git", "SQL"],
  ml: ["PyTorch", "TensorFlow", "Machine Learning", "Deep Learning"],
  tools: ["Excel", "Tableau", "Power BI", "LaTeX", "Microsoft Office"],
  languages: ["English (C1)", "German (A2)"],
};

const CV = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      await downloadCvPdf();
      toast.success("Downloaded Pankhil_Gawade_CV.pdf");
    } catch {
      toast.error("Failed to generate PDF — opening browser print dialog instead.");
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="cv" className="py-20 border-t border-border/60 bg-background/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header + Download Action */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-accent-neon uppercase tracking-widest mb-1">
                $ cat ~/curriculum_vitae.txt
              </p>
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                <span className="text-accent-cyber">04 //</span> CURRICULUM VITAE
              </h2>
            </div>

            <Button
              type="button"
              variant="hero"
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="self-start sm:self-auto no-print"
            >
              <Download className="h-4 w-4" />
              {downloading ? "Generating PDF..." : "Download PDF"}
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column: Education + Academic Service + Awards */}
            <div className="space-y-8">
              <div className="unix-window">
                <div className="unix-titlebar">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <GraduationCap className="h-4 w-4 text-accent-cyber" />
                    <span>EDUCATION</span>
                  </div>
                  <span className="text-accent-cyber">[1]</span>
                </div>

                <div className="p-5 sm:p-6 space-y-6">
                  {education.map((edu) => (
                    <div key={edu.degree} className="relative pl-5 border-l-2 border-accent-cyber/60">
                      <span className="absolute -left-[5px] top-1.5 w-2 h-2 bg-accent-cyber" aria-hidden="true" />
                      <h3 className="font-mono font-bold text-foreground text-base">{edu.degree}</h3>
                      <p className="text-sm text-accent-cyber font-mono mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-foreground/85 font-mono mt-1">
                        <span className="text-muted-foreground">Affiliations:</span> {edu.affiliations}
                      </p>
                      <p className="text-xs text-accent-neon font-mono mt-1 mb-2">[{edu.period}]</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="unix-window">
                <div className="unix-titlebar">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <ShieldCheck className="h-4 w-4 text-accent-cyber" />
                    <span>ACADEMIC SERVICE</span>
                  </div>
                  <span className="text-accent-cyber">[{academicService.length}]</span>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  {academicService.map((item) => (
                    <div
                      key={item.venue}
                      className="p-4 bg-background/70 border border-border hover:border-accent-cyber transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-mono font-bold text-accent-cyber text-sm">
                          &gt; {item.role} — {item.venue}
                        </h3>
                        <span className="px-2 py-0.5 bg-accent-cyber/15 border border-accent-cyber/50 text-accent-cyber text-[11px] font-mono">
                          REVIEWER
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.fullName}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="unix-window-amber">
                <div className="unix-titlebar">
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Trophy className="h-4 w-4 text-accent-neon" />
                    <span>AWARDS &amp; SCHOLARSHIPS</span>
                  </div>
                  <span className="text-accent-neon">[{awards.length}]</span>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  {awards.map((award) => (
                    <div
                      key={award.name}
                      className="p-4 bg-background/70 border border-border hover:border-accent-neon/70 transition-colors"
                    >
                      <h3 className="font-mono font-bold text-accent-neon text-sm mb-1">&gt; {award.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Experience */}
            <div className="unix-window">
              <div className="unix-titlebar">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Briefcase className="h-4 w-4 text-accent-cyber" />
                  <span>EXPERIENCE</span>
                </div>
                <span className="text-accent-cyber">[{experience.length}]</span>
              </div>

              <div className="p-5 sm:p-6 space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.role + exp.company + exp.period}
                    className="relative pl-5 border-l-2 border-border hover:border-accent-cyber transition-colors"
                  >
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 bg-accent-cyber" aria-hidden="true" />
                    <h3 className="font-mono font-bold text-foreground text-base">{exp.role}</h3>
                    <p className="text-sm text-accent-cyber font-mono mt-0.5">{exp.company}</p>
                    <p className="text-xs text-accent-neon font-mono mt-1 mb-2">[{exp.period}]</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Technologies */}
          <div className="mt-8 unix-window">
            <div className="unix-titlebar">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Code className="h-4 w-4 text-accent-cyber" />
                <span>SKILLS &amp; TECHNOLOGIES</span>
              </div>
              <span className="text-muted-foreground">env --list</span>
            </div>

            <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-4 bg-background/70 border border-border">
                <h4 className="text-xs font-mono text-accent-cyber uppercase font-semibold mb-3">
                  // programming
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary/90 text-foreground/90 text-xs font-mono border border-border hover:border-accent-cyber hover:text-accent-cyber transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-background/70 border border-border">
                <h4 className="text-xs font-mono text-accent-neon uppercase font-semibold mb-3">// ml &amp; ai</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary/90 text-foreground/90 text-xs font-mono border border-border hover:border-accent-neon hover:text-accent-neon transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-background/70 border border-border">
                <h4 className="text-xs font-mono text-accent-cyber uppercase font-semibold mb-3">// tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary/90 text-foreground/90 text-xs font-mono border border-border hover:border-accent-cyber hover:text-accent-cyber transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-background/70 border border-border">
                <h4 className="text-xs font-mono text-accent-neon uppercase font-semibold mb-3">// languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary/90 text-foreground/90 text-xs font-mono border border-border hover:border-accent-neon hover:text-accent-neon transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
