import { Code, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Todo List",
    description: "A simple task management web application that allows users to add, manage, and delete daily tasks to stay organized and productive.",
    repo: "https://github.com/pradeepsinghkuntal1913/todo-list",
  },
  {
    name: "Virtual Library",
    description: "A digital library management system where users can browse, organize, and manage book collections in a virtual environment.",
    repo: "https://github.com/pradeepsinghkuntal1913/Virtual-Library",
  },
  {
    name: "MedEmergency",
    description: "A web-based emergency assistance platform designed to help users quickly access medical help and emergency information.",
    repo: "https://github.com/pradeepsinghkuntal1913/MedEmergency-main",
  },
  {
    name: "Apple Music Clone",
    description: "A full-stack Apple Music inspired web application with responsive UI, music playback, playlists, and authentication features.",
    repo: "https://github.com/pradeepsinghkuntal1913/apple-music-clone-website",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 mb-4">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="glass-card rounded-2xl p-8 border border-primary/10 hover:border-primary/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Open ${project.name} repository`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
