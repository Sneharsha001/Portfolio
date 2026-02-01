const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/20">
      {/* Animated neon line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary animate-gradient-shift"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="font-orbitron text-2xl font-bold text-neon-blue mb-2">
              Sneharsha
            </h3>
            <p className="text-muted-foreground">
              Engineering Student | Aspiring Full-Stack Developer
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-purple group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: "💼", label: "LinkedIn" },
              { icon: "👨‍💻", label: "GitHub" },
              { icon: "🐦", label: "Twitter" }
            ].map((social, index) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-neon-blue transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="group-hover:animate-float">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground">
            © 2025 Mr. Sneharsha. Built with passion using React & futuristic design.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-px bg-gradient-primary animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;