export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top left arc */}
      <svg
        className="absolute -top-20 -left-32 w-96 h-96 opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M20 380 Q 20 20 380 20"
          stroke="hsl(var(--decorative-line))"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>

      {/* Bottom right arc */}
      <svg
        className="absolute -bottom-20 -right-32 w-96 h-96 opacity-40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M20 20 Q 380 20 380 380"
          stroke="hsl(var(--decorative-line))"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>

      {/* Floating sparkles */}
      <svg
        className="absolute top-1/4 right-1/4 w-4 h-4 opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
        viewBox="0 0 24 24"
        fill="hsl(var(--decorative-line))"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <svg
        className="absolute top-1/2 left-1/6 w-3 h-3 opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
        viewBox="0 0 24 24"
        fill="hsl(var(--decorative-line))"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      <svg
        className="absolute bottom-1/3 right-1/6 w-5 h-5 opacity-25 animate-float"
        style={{ animationDelay: "0.5s" }}
        viewBox="0 0 24 24"
        fill="hsl(var(--decorative-line))"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  );
}
