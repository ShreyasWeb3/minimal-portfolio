import { cn } from "@/lib/utils";

type TagColor = "green" | "orange" | "pink" | "teal" | "yellow" | "blue" | "neutral";

interface TagProps {
  label: string;
  color: TagColor;
}

const colorStyles: Record<TagColor, string> = {
  green: "bg-tag-green/20 text-tag-green",
  orange: "bg-tag-orange/20 text-tag-orange",
  pink: "bg-tag-pink/20 text-tag-pink",
  teal: "bg-tag-teal/20 text-tag-teal",
  yellow: "bg-tag-yellow/20 text-tag-yellow",
  blue: "bg-tag-blue/20 text-tag-blue",
  neutral: "bg-tag-neutral/20 text-tag-neutral",
};

export function Tag({ label, color }: TagProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        colorStyles[color]
      )}
    >
      {label}
    </span>
  );
}
