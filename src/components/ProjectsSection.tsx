import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";

const NextIcon = () => (
  <span className="text-foreground font-bold text-xs">N</span>
);
const TSIcon = () => (
  <span className="text-blue-400 font-bold text-xs">TS</span>
);
const FramerMotionIcon = () => (
  <svg
    className="w-4 h-4" 
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 0h16v8h-8zM4 8h8l8 8h-16zM4 16h8v8z"
      fill="#AC1AF0"
    />
  </svg>
);
const ReactIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#61DAFB">
    <circle cx="12" cy="12" r="2.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="4"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="1"
      transform="rotate(120 12 12)"
    />
  </svg>
);
const VercelIcon = () => <span className="text-foreground">▲</span>;
const TailwindIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
  </svg>
);
const MongoIcon = () => <span className="text-green-500 text-xs">🍃</span>;
const NodeIcon = () => (
  <span className="text-green-600 font-bold text-xs">⬢</span>
);
const PrismaIcon = () => <span className="text-foreground text-xs">◮</span>;

const projects = [
  {
    id: "1",
    title: "Odessey",
    description:
      "A Minimalist trekking community platform enabling users to explore destinations and share reviews across all devices.",
    image: project1,
    liveUrl: "https://wander-odyssey.vercel.app/",
    githubUrl: "https://github.com/ShreyasWeb3/odyssey",
    technologies: [
      { name: "Next.js", icon: <NextIcon /> },
      { name: "TypeScript", icon: <TSIcon /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Tailwind", icon: <TailwindIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
    ],
    status: "operational" as const,
  },
  {
    id: "2",
    title: "The Fourth Move",
    description:
      "Reimagined Tic-Tac-Toe by programming a custom board-shifting algorithm to prevent stalemates, featuring a fluid,type-safe UI",
    image: project2,
    liveUrl: "https://fourth-move.vercel.app/",
    githubUrl: "https://github.com/ShreyasWeb3/fourth-move",
    technologies: [
      { name: "React", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TSIcon /> },
      { name: "Tailwind", icon: <TailwindIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
            { name: "Framer Motion", icon: <FramerMotionIcon /> },
    ],
    status: "operational" as const,
  },
];

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-1">
            {t("projects.featured")}
          </p>
          <h2 className="text-3xl font-serif font-semibold text-foreground">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
