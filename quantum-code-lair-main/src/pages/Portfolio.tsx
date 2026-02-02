import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Footer />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
         <Footer />
    </div>
  );
};

export default Portfolio;
