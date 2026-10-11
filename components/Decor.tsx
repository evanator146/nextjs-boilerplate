/** Small decorative pieces: floating leaves and section heading. */

const leafPath = "M12 2C6 6 3 11 4 17c4 1 9-1 12-5s4-8-4-10Z";

export function FloatingLeaves({ count = 6, className = "" }: { count?: number; className?: string }) {
  const items = Array.from({ length: count }).map((_, i) => ({
    top: `${(i * 37) % 85}%`,
    duration: 22 + ((i * 7) % 14),
    delay: -i * 4.5,
    size: 14 + ((i * 5) % 14),
    color: i % 3 === 0 ? "#b6e889" : i % 3 === 1 ? "#4cbb78" : "#d6f5b6",
  }));
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="anim-drift absolute -left-10"
          style={{ top: l.top, width: l.size, height: l.size, animationDuration: `${l.duration}s`, animationDelay: `${l.delay}s` }}
        >
          <path d={leafPath} fill={l.color} opacity=".85" />
          <path d="M5 16 14 6" stroke="#071a10" strokeOpacity=".25" strokeWidth="1" />
        </svg>
      ))}
    </div>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`} data-reveal>
      <p className={`eyebrow ${light ? "!text-lime-300" : ""}`}>{eyebrow}</p>
      <h2 className={`heading-lg mt-4 ${light ? "text-white" : "text-forest-900"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/70" : "text-ink/65"}`}>{text}</p>}
    </div>
  );
}
