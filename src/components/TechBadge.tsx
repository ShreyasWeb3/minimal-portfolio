interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export function TechBadge({ name, icon, href }: TechBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/80 rounded-md text-sm font-medium text-foreground 
                 transition-all duration-300 ease-out
                 hover:bg-secondary hover:scale-105 hover:-translate-y-0.5
                 active:scale-95"
    >
      {icon}
      <span>{name}</span>
    </a>
  );
}
