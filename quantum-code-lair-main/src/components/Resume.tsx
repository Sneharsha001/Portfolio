import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-green">
          Resume
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Download Section */}
          <div className="text-center mb-16">
            <div className="glass p-8 rounded-2xl hover-tilt">
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
                Download My Resume
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the complete overview of my education, skills, and project experience.
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300 px-8 py-4 text-lg"
              >
                📄 Download Resume (PDF)
              </Button>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="glass p-6 rounded-xl hover-tilt">
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🎓 Education
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Bachelor of Engineering</h4>
                  <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                  <p className="text-sm text-neon-blue">2022 - 2026 (Expected)</p>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="glass p-6 rounded-xl hover-tilt">
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🚀 Key Skills
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-neon-blue">• Frontend Development</span>
                <span className="text-neon-green">• Backend Development</span>
                <span className="text-neon-cyan">• Database Design</span>
                <span className="text-neon-pink">• UI/UX Design</span>
                <span className="text-neon-blue">• Problem Solving</span>
                <span className="text-neon-green">• Team Collaboration</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass p-6 rounded-xl hover-tilt">
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                🏆 Achievements
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-glow-pulse"></div>
                  <span>Built 5+ full-stack web applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
                  <span>Led Smart Campus Portal team project</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-glow-pulse"></div>
                  <span>Active contributor to open-source projects</span>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="glass p-6 rounded-xl hover-tilt">
              <h3 className="text-xl font-semibold mb-4 text-neon-purple">
                💼 Experience
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-medium">Freelance Web Developer</h4>
                  <p className="text-sm text-muted-foreground">Personal Projects & Learning</p>
                  <p className="text-sm text-neon-blue">2023 - Present</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-medium">Team Lead</h4>
                  <p className="text-sm text-muted-foreground">Smart Campus Portal Project</p>
                  <p className="text-sm text-neon-green">2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in my work? Let's connect and discuss opportunities.
              </p>
              <Button
                size="lg"
                className="bg-gradient-secondary hover:shadow-neon-purple transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;