import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import CV from "@/components/CV";
import Footer from "@/components/Footer";
import MatrixBackground from "@/components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-cyber focus:text-accent-cyber-foreground focus:font-mono focus:text-xs focus:font-bold"
      >
        Skip to main content
      </a>
      <MatrixBackground />
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="relative z-10">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Publications />
          <CV />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
