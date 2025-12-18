import { ArrowUpRight } from "lucide-react";

interface SocialLink {
  name: string;
  handle: string;
  icon: React.ReactNode;
  href: string;
}

const XIcon = () => (
  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  </div>
);

const GithubIcon = () => (
  <div className="w-12 h-12 bg-[#181717] rounded-xl flex items-center justify-center">
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  </div>
);

const LinkedInIcon = () => (
  <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center">
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </div>
);

const MediumIcon = () => (
  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.846 6.887c.028-.293-.057-.594-.236-.836L.286 3.123V2.5h7.101l5.225 11.458 4.745-11.458h6.643v.623l-2.073 2.064c-.204.197-.308.473-.283.754v11.13c-.025.281.079.557.283.754l2.035 2.046v.623H13.68v-.623l2.054-2.046c.198-.203.287-.49.245-.773V7.93l-5.186 13.19h-.812L4.54 7.93v8.527c-.035.334.07.668.292.916l2.316 2.804v.623H.832v-.623l2.316-2.804c.217-.253.32-.582.283-.916V6.887z" />
    </svg>
  </div>
);

const socials: SocialLink[] = [
  { name: "X (formerly Twitter)", handle: "@shreyas", icon: <XIcon />, href: "https://x.com/Shreyasweb3" },
  { name: "GitHub", handle: "shreyasweb3", icon: <GithubIcon />, href: "https://github.com/ShreyasWeb3" },
  { name: "LinkedIn", handle: "Shreyas B", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/shreyas-balappanavar-2885a4158/" },
  { name: "Medium", handle: "Shreyas", icon: <MediumIcon />, href: "https://medium.com/@shreyasweb3" },
];

export function SocialsSection() {
  return (
    <section className="py-8 px-4 md:px-8 bg-grid-pattern">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card hover:bg-secondary/50 transition-all duration-300 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
