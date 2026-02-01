import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Web Developer",
    "UI/UX Enthusiast", 
    "AI Explorer"
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass p-12 rounded-2xl max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
           Sneharsha Thammisetti
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-poppins">
            Engineering Student | Aspiring Full-Stack Developer
          </p>

          <div className="mb-12 h-16">
            <p className="text-2xl md:text-3xl font-medium text-neon-blue typing-cursor">
              {roles[currentRole]}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300 font-semibold px-8 py-6 text-lg rounded-xl"
            >
              View My Work →
            </Button>
            <Button
              onClick={() => scrollToSection('resume')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold px-8 py-6 text-lg rounded-xl hover:shadow-neon-blue"
            >
              Download Resume →
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;