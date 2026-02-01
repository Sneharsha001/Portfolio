import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "My Journey Into Web Development",
      excerpt: "From engineering student to aspiring full-stack developer - the challenges, breakthroughs, and lessons learned along the way.",
      date: "Dec 2024",
      readTime: "5 min read",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Building Futuristic UI with CSS",
      excerpt: "Exploring glassmorphism, neon effects, and modern CSS techniques to create stunning user interfaces that feel from the future.",
      date: "Nov 2024",
      readTime: "8 min read",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "How I Approached My Smart Campus Portal Project",
      excerpt: "A deep dive into the architecture, challenges, and solutions behind building a full-stack campus management system.",
      date: "Oct 2024",
      readTime: "12 min read",
      gradient: "bg-gradient-accent"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Thoughts on emerging technologies, AI integration, and what the next generation of web applications might look like.",
      date: "Sep 2024",
      readTime: "6 min read",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-orbitron font-bold text-center mb-16 text-neon-purple">
          Latest Blog Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="glass p-6 rounded-2xl hover-tilt group cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="mb-4">
                <div className={`w-full h-1 rounded-full ${post.gradient} mb-4 group-hover:h-2 transition-all duration-300`}></div>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-neon-blue group-hover:text-white transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                {post.excerpt}
              </p>

              {/* Read More Button */}
              <Button
                variant="ghost"
                className="text-primary hover:text-white hover:bg-primary/20 transition-all duration-300 p-0 h-auto font-medium"
              >
                Read More →
              </Button>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-neon-green">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about web development, technology, and my learning journey.
            </p>
            <Button
              size="lg"
              className="bg-gradient-accent hover:shadow-neon-green transition-all duration-300"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;