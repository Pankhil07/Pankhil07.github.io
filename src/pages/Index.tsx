import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import CV from "@/components/CV";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Publications />
          <CV />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
