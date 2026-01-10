import { MapPin, Mail, Building } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-foreground mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-accent-warm" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Building className="h-5 w-5 text-accent-warm" />
              <span>University / Company</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-accent-warm" />
              <span>email@example.com</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a researcher and developer with a passion for solving complex problems through 
              innovative technology. My work spans across machine learning, data science, and 
              software engineering, where I strive to bridge the gap between theoretical research 
              and practical applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Currently, I am pursuing my PhD at [University Name], where I focus on [Research Area]. 
              My research interests include natural language processing, computer vision, and 
              reinforcement learning.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or writing papers, you can find me hiking, reading science fiction, 
              or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
