import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SalesVision",
      description: "E-commerce website (Flipkart clone) with full-stack functionality, user authentication, shopping cart, and payment integration.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Image Gallery Website",
      description: "Responsive, filterable grid layout with smooth animations and advanced sorting capabilities for seamless browsing.",
      techStack: [  "HTML5","CSS Grid","JavaScript"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Music Player Website",
      description: "Interactive music player with playlists, futuristic UI design, audio visualizations, and custom controls.",
      techStack: [ "Web Audio API",  "HTML","CSS","JavaScript",],
      gradient: "bg-gradient-accent"
    },
    {
      title: "Calculator App",
      description: "Advanced calculator with history tracking, keyboard support, and beautiful glassmorphism design elements.",
      techStack: ["JavaScript", "CSS", "HTML", "Local Storage"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Smart Campus Portal",
      description: "Flask + MySQL team project for campus management with student portal, course tracking, and admin dashboard.",
      techStack: ["Flask", "MySQL", "Python", "Bootstrap"],
      gradient: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-blue">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass p-8 rounded-2xl hover-tilt group transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className={`w-full h-2 rounded-full ${project.gradient} mb-4`}></div>
                <h3 className="text-2xl font-semibold text-neon-purple group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-neon-green mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium border border-border group-hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="sm"
                  className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300"
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  GitHub Repo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <Button
              size="lg"
              className="bg-gradient-secondary hover:shadow-neon-purple transition-all duration-300"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;