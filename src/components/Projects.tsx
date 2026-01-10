import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Machine Learning Pipeline",
    description: "An end-to-end ML pipeline for processing and analyzing large-scale datasets with automated feature engineering.",
    tags: ["Python", "TensorFlow", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Natural Language Processor",
    description: "A transformer-based NLP toolkit for text classification, sentiment analysis, and named entity recognition.",
    tags: ["PyTorch", "Hugging Face", "FastAPI"],
    github: "https://github.com",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for exploring and visualizing complex multi-dimensional datasets in real-time.",
    tags: ["React", "D3.js", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Research Paper Analyzer",
    description: "AI-powered tool that summarizes academic papers and extracts key findings and methodologies.",
    tags: ["Python", "OpenAI", "Streamlit"],
    github: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-4 text-center">
            Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects I've worked on, from research experiments to production-ready applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="group bg-card border-border hover:border-accent-warm/50 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl text-foreground group-hover:text-accent-warm transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="social" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="social" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
