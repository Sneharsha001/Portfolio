const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/sneharsha",
      color: "hover:text-neon-blue hover:shadow-neon-blue"
    },
    {
      name: "GitHub", 
      icon: "👨‍💻",
      url: "https://github.com/sneharsha",
      color: "hover:text-neon-purple hover:shadow-neon-purple"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/sneharsha",
      color: "hover:text-neon-cyan hover:shadow-neon-cyan"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:sneharsha@example.com",
      color: "hover:text-neon-green hover:shadow-neon-green"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-cyan">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Header */}
          <div className="glass p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or just chat about technology and innovation. Reach out through any of the 
              channels below!
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className={`glass p-6 rounded-xl hover-tilt group transition-all duration-300 block ${link.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {link.icon}
                  </div>
                  <h4 className="text-lg font-semibold group-hover:text-white transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">
                    {link.name === "Email" ? "sneharsha@example.com" : `@${link.name.toLowerCase()}`}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Contact Info */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-neon-purple">
              Quick Info
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🌍</div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">India</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🕐</div>
                <p className="text-sm text-muted-foreground">Response Time</p>
                <p className="font-medium">Within 24 hours</p>
              </div>
              <div>
                <div className="text-2xl mb-2">💡</div>
                <p className="text-sm text-muted-foreground">Available For</p>
                <p className="font-medium">Projects & Collaboration</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 animate-fade-in">
            <p className="text-lg text-neon-green mb-4">
              ✨ Let's create something extraordinary together!
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-1 bg-gradient-primary rounded-full animate-gradient-shift"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;