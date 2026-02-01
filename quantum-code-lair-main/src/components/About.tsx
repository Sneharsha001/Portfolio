import profileImage from "@/assets/profile-image.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-purple">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Bio Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass p-8 rounded-2xl hover-tilt">
              <p className="text-lg leading-relaxed text-foreground font-poppins">
                I'm an engineering student passionate about building{" "}
                <span className="text-neon-blue font-semibold">futuristic digital experiences</span>. 
                Skilled in frontend (HTML, CSS, JavaScript, React) and backend (Node.js, Flask, MySQL), 
                I love blending{" "}
                <span className="text-neon-green font-semibold">creativity with code</span> to craft 
                impactful solutions.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-neon-purple mb-4">What drives me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                  Building scalable web applications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                  Exploring AI and machine learning
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                  Creating intuitive user experiences
                </li>
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="glass p-6 rounded-3xl hover-tilt">
                <img
                  src={profileImage}
                  alt="Mr. Sneharsha - Engineering Student"
                  className="w-80 h-80 object-cover rounded-2xl shadow-neon-blue"
                />
                <div className="absolute -inset-2 bg-gradient-primary rounded-3xl -z-10 opacity-20 animate-glow-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;