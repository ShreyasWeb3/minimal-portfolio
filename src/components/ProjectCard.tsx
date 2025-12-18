import { Globe, Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    technologies: { name: string; icon: React.ReactNode }[];
    status: "operational" | "maintenance" | "offline";
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    operational: "bg-tag-green/20 text-tag-green",
    maintenance: "bg-tag-yellow/20 text-tag-yellow",
    offline: "bg-destructive/20 text-destructive",
  };

  const statusLabels = {
    operational: "All Systems Operational",
    maintenance: "Under Maintenance",
    offline: "Offline",
  };

  const handleVisit = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="group bg-card rounded-xl overflow-hidden border border-border
                 transition-all duration-300 ease-out
                 hover:shadow-xl hover:-translate-y-1 hover:border-border/80
                 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        onClick={handleVisit}
        className="relative h-48 overflow-hidden bg-secondary cursor-pointer"
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-t-xl" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-tag-teal transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-secondary transition-all duration-200 hover:scale-110"
                aria-label="Visit live site"
              >
                <Globe className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-secondary transition-all duration-200 hover:scale-110"
                aria-label="View source code"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-4">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center justify-center w-8 h-8 bg-secondary mb-3 rounded-md
                           transition-all duration-200 hover:scale-110 hover:bg-secondary/80"
                title={tech.name}
              >
                {tech.icon}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {statusLabels[project.status]}
          </span>
          
          {/* Updated Button with onClick handler */}
          <button 
            onClick={handleVisit}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 group/btn"
          >
            Live Demo
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}