import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    period: "2020 - Present",
    description: "Research focus on machine learning and natural language processing.",
  },
  {
    degree: "M.S. in Computer Science",
    institution: "MIT",
    period: "2018 - 2020",
    description: "Thesis on transformer architectures for sequence modeling.",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "UC Berkeley",
    period: "2014 - 2018",
    description: "Graduated with honors. Minor in Mathematics.",
  },
];

const experience = [
  {
    role: "Research Intern",
    company: "Google Research",
    period: "Summer 2023",
    description: "Worked on large language models and their applications in code generation.",
  },
  {
    role: "Machine Learning Engineer",
    company: "OpenAI",
    period: "2019 - 2020",
    description: "Developed and deployed production ML systems for text generation.",
  },
  {
    role: "Software Engineer Intern",
    company: "Meta",
    period: "Summer 2018",
    description: "Built recommendation systems for content personalization.",
  },
];

const CV = () => {
  return (
    <section id="cv" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-4xl font-semibold text-foreground">
              Curriculum Vitae
            </h2>
            <Button variant="hero">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-warm/10 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent-warm" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-6 border-l-2 border-border hover:border-accent-warm transition-colors">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent-warm rounded-full" />
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-accent-warm">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent-warm/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-accent-warm" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.role} className="relative pl-6 border-l-2 border-border hover:border-accent-warm transition-colors">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent-warm rounded-full" />
                    <h4 className="font-medium text-foreground">{exp.role}</h4>
                    <p className="text-sm text-accent-warm">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent-warm/10 rounded-lg">
                <Award className="h-5 w-5 text-accent-warm" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">Skills & Technologies</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "TypeScript", "React", "PyTorch", "TensorFlow",
                "Machine Learning", "NLP", "Computer Vision", "Docker",
                "AWS", "Git", "SQL", "GraphQL", "FastAPI"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-full hover:bg-accent-warm/10 hover:text-accent-warm transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
