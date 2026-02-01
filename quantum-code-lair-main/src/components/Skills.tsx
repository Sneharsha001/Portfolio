const Skills = () => {
  const skills: {
    name: string;
    icon: string;
    color: string;
  }[] = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "text-neon-blue",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "text-neon-purple",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "text-neon-green",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "text-neon-cyan",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "text-neon-green",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "text-neon-purple",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "text-neon-green",
    },
    {
      name: "Git/GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "text-neon-cyan",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-green">
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-xl hover-tilt group cursor-pointer transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">

                {/* OFFICIAL ICON */}
                <div className="flex justify-center group-hover:animate-float">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12"
                  />
                </div>

                <h3
                  className={`text-xl font-semibold ${skill.color} group-hover:text-white transition-colors`}
                >
                  {skill.name}
                </h3>

                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ transitionDelay: "200ms" }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Animation */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-neon-blue">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Data Structures & Algorithms", "AI Fundamentals","LLM Basics", "AWS"].map(
                (tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-secondary rounded-full text-sm font-medium animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
