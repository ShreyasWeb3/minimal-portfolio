import { useTranslation } from "react-i18next";
import avatar from "@/assets/avatar.png";
import { ToolsDropdown } from "./ToolsDropdown";

// Skill icons
const ReactIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#61DAFB">
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
const BunIcon = () => <span className="text-2xl">🥟</span>;
const JSIcon = () => (
  <span className="bg-yellow-400 text-black font-bold text-xs px-1.5 py-0.5 rounded">
    JS
  </span>
);
const TSIcon = () => (
  <span className="bg-blue-600 text-white font-bold text-xs px-1.5 py-0.5 rounded">
    TS
  </span>
);
const MongoIcon = () => <span className="text-2xl">🍃</span>;
const NextIcon = () => (
  <span className="text-foreground font-bold text-lg">N</span>
);
const NodeIcon = () => <span className="text-green-600 text-2xl">⬢</span>;
const PostgresIcon = () => <span className="text-blue-700 text-2xl">🐘</span>;
const VercelIcon = () => <span className="text-foreground text-xl">▲</span>;

const skills = [
  { name: "React", icon: <ReactIcon /> },
  { name: "Bun", icon: <BunIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "PostgreSQL", icon: <PostgresIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
];

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-1">
            {t("about.label")}
          </p>
          <h2 className="text-3xl font-serif font-semibold text-foreground">
            {t("about.title")}
          </h2>
        </div>

        <div
          className="flex flex-col md:flex-row gap-10 items-start animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div
              className="w-64 h-80 rounded-xl overflow-hidden border-4 border-tag-yellow bg-tag-yellow
                            transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rotate-1"
            >
              <img
                src={avatar}
                alt="Developer avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              {t("about.name")}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg ">
              {t("about.bio")}
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-sm text-muted-foreground mb-4">
                {t("about.skills")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg
                               transition-all duration-300 ease-out
                               hover:scale-125 hover:-translate-y-1 hover:bg-secondary/80
                               cursor-pointer"
                    title={skill.name}
                  >
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
            <ToolsDropdown />
          </div>
        </div>
      </div>
    </section>
  );
}
