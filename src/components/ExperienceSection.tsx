import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";

interface Role {
  title: string;
  type: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

interface Experience {
  company: string;
  isActive: boolean;
  icon: React.ReactNode;
  roles: Role[];
}

const BrillioIcon = () => (
  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">B</span>
  </div>
);

const TCSIcon = () => (
  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-[10px]">TCS</span>
  </div>
);

const InfosysIcon = () => (
  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">I</span>
  </div>
);

const experiences: Experience[] = [
  {
    company: "Brillio",
    isActive: true,
    icon: <BrillioIcon />,
    roles: [
      {
        title: "Senior Engineer",
        type: "Full-time",
        period: "10.2023 – Present",
        highlights: [
          "Architected and built the entire frontend from scratch using Next.js, TypeScript, and ShadCN.",
          "Utilized Server Side Rendering (SSR) to greatly improve SEO.",
          "Developed custom Node.js scripts to automate i18n workflows and optimized website performance by 16%.",
          "Engineered an end-to-end MVP for a next-gen POS system."
        ],
        technologies: ["Next.js", "TypeScript", "ShadCN", "Redux Toolkit", "TanStack Query", "Supabase"]
      }
    ]
  },
  {
    company: "TCS",
    isActive: false,
    icon: <TCSIcon />,
    roles: [
      {
        title: "Senior Engineer",
        type: "Full-time",
        period: "12.2022 – 10.2023",
        highlights: [
          "Developed modular components for Fable distributed as an NPM package.",
          "Architected a Micro Frontend architecture using Webpack Module Federation.",
          "Developed scalable microservices using NestJS and TypeScript."
        ],
        technologies: ["React", "TypeScript", "Storybook", "Webpack", "NestJS", "Module Federation"]
      }
    ]
  },
  {
    company: "Infosys Ltd",
    isActive: false,
    icon: <InfosysIcon />,
    roles: [
      {
        title: "Senior Software Engineer",
        type: "Full-time",
        period: "10.2019 – 08.2022",
        highlights: [
          "Engineered a scalable web interface, transforming Figma designs into pixel-perfect code.",
          "Developed user interfaces using React and Redux with unit testing using Jest.",
          "Built and maintained robust RESTful APIs using Node.js, Express.js, and MongoDB."
        ],
        technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Jest"]
      }
    ]
  }
];

function RoleCard({ role, isExpanded, onToggle }: { role: Role; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="ml-8 border-l border-border">
      <div 
        className="pl-6 py-3 cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium text-foreground">{role.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {role.type} | {role.period}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform" />
            )}
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <ul className="space-y-2">
              {role.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="mt-2 w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {role.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium border border-border text-muted-foreground rounded-md
                            transition-all duration-200 hover:bg-secondary hover:text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { t } = useTranslation();
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    "Brillio-0": true // First role expanded by default
  });

  const toggleRole = (companyRole: string) => {
    setExpandedRoles(prev => ({
      ...prev,
      [companyRole]: !prev[companyRole]
    }));
  };

  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-grid-pattern">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-semibold text-foreground mb-10 animate-fade-in">
          {t('experience.title')}
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="border-b border-border py-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Company Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="transition-transform duration-300 hover:scale-110">
                  {exp.icon}
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {exp.company}
                </h3>
                {exp.isActive && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </div>

              {/* Roles */}
              {exp.roles.map((role, roleIndex) => (
                <RoleCard
                  key={`${exp.company}-${roleIndex}`}
                  role={role}
                  isExpanded={!!expandedRoles[`${exp.company}-${roleIndex}`]}
                  onToggle={() => toggleRole(`${exp.company}-${roleIndex}`)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
