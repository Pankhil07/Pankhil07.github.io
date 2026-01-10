import { Briefcase, GraduationCap, Award, Download, Code, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
const education = [{
  degree: "Doctoral Researcher",
  institution: "Helmholtz Munich & TUM School of Computation, Information and Technology",
  period: "October 2025 - Present",
  description: "Research focus on topology-aware generative AI for drug discovery."
}];
const experience = [{
  role: "Scientific Assistant",
  company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
  period: "May 2025 - Present",
  description: "Continuing research on antimicrobial peptides generation and property prediction."
}, {
  role: "Master's Thesis Student",
  company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
  period: "December 2024 - May 2025",
  description: "Geometry-aware transformers for Antimicrobial Peptides design. Created state-of-the-art model for AMP generation. All 25 generated peptides tested active against clinically relevant bacteria."
}, {
  role: "Student Researcher",
  company: "Max Planck Institute of Innovation and Competition (Net Zero Lab)",
  period: "January 2025 - April 2025",
  description: "Investigating effects of governmental policies on Green investments with focus on the EU."
}, {
  role: "Student Researcher",
  company: "Helmholtz Munich - AI for Health (Szczurek Lab)",
  period: "May 2024 - November 2024",
  description: "Extended Jointformer for AMP generation and property prediction. Reimplemented various models including GPT-type and BERT for benchmarking."
}, {
  role: "Student Researcher",
  company: "Bavarian AI Chair for Mathematical Foundations of AI",
  period: "September 2023 - February 2024",
  description: "Extended ParFam symbolic regression method. Implemented RNNs, LSTMs, Transformers, and Set-Transformers from scratch using PyTorch."
}, {
  role: "Student Researcher",
  company: "Max Planck Institute of Extraterrestrial Physics",
  period: "January 2023 - July 2023",
  description: "XMM-Newton Observations of Supernova 1987A. Traced flux and spectral decline using eROSITA satellite data. Presented findings at conference."
}];
const certifications = ["Foundational level in Programming and Data Science - IIT Madras", "Diploma in Data Science - IIT Madras", "Python for Machine Learning - IIT Roorkee", "Neural Networks and Deep Learning - Coursera"];
const awards = [{
  name: "Deutschlandstipendium",
  description: "Scholarship for particularly talented and committed students with excellent academic performance."
}, {
  name: "INSPIRE SHE Scholarship",
  description: "Scholarship for Higher Education under Innovation in Science Pursuit for Inspired Research by DST, India."
}];
const skills = {
  programming: ["Python", "Pascal", "Linux", "R", "Git", "SQL"],
  ml: ["PyTorch", "TensorFlow", "Machine Learning", "Deep Learning"],
  tools: ["Excel", "Tableau", "Power BI", "LaTeX", "Microsoft Office"],
  languages: ["English (C1)", "German (A2)"]
};
const CV = () => {
  return <section id="cv" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground">
                <span className="text-accent-cyber font-mono">{"<"}</span>
                CV
                <span className="text-accent-cyber font-mono">{" />"}</span>
              </h2>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                // curriculum vitae
              </p>
            </div>
            <Button variant="hero">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30">
                  <GraduationCap className="h-5 w-5 text-accent-cyber" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map(edu => <div key={edu.degree} className="relative pl-6 border-l-2 border-border hover:border-accent-cyber transition-colors">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent-cyber rounded-full" />
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-accent-cyber font-mono">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2 font-mono">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>)}
              </div>

              {/* Certifications */}
              

              {/* Awards */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30">
                    <Trophy className="h-5 w-5 text-accent-cyber" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Awards</h3>
                </div>
                
                <div className="space-y-4">
                  {awards.map(award => <div key={award.name} className="p-4 bg-card/50 rounded-lg border border-border hover:border-accent-cyber/50 transition-colors">
                      <h4 className="font-medium text-accent-cyber mb-1">{award.name}</h4>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>)}
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30">
                  <Briefcase className="h-5 w-5 text-accent-cyber" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map(exp => <div key={exp.role + exp.company} className="relative pl-6 border-l-2 border-border hover:border-accent-cyber transition-colors">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent-cyber rounded-full" />
                    <h4 className="font-medium text-foreground">{exp.role}</h4>
                    <p className="text-sm text-accent-cyber font-mono">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-2 font-mono">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-cyber/10 rounded-lg border border-accent-cyber/30">
                <Code className="h-5 w-5 text-accent-cyber" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Skills & Technologies</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="text-sm font-mono text-accent-cyber mb-3">// programming</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map(skill => <span key={skill} className="px-3 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border hover:border-accent-cyber hover:text-accent-cyber transition-colors">
                      {skill}
                    </span>)}
                </div>
              </div>
              
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="text-sm font-mono text-accent-neon mb-3">// ml & ai</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ml.map(skill => <span key={skill} className="px-3 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border hover:border-accent-neon hover:text-accent-neon transition-colors">
                      {skill}
                    </span>)}
                </div>
              </div>
              
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="text-sm font-mono text-accent-cyber mb-3">// tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(skill => <span key={skill} className="px-3 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border hover:border-accent-cyber hover:text-accent-cyber transition-colors">
                      {skill}
                    </span>)}
                </div>
              </div>
              
              <div className="p-4 bg-card/50 rounded-lg border border-border">
                <h4 className="text-sm font-mono text-accent-neon mb-3">// languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(skill => <span key={skill} className="px-3 py-1 bg-background text-muted-foreground text-xs font-mono rounded-md border border-border hover:border-accent-neon hover:text-accent-neon transition-colors">
                      {skill}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CV;