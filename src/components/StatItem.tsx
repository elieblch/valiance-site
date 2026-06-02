import Reveal from "./Reveal";

interface StatItemProps {
  stat: string;
  label: string;
  sublabel?: string;
  delay?: number;
}

export default function StatItem({
  stat,
  label,
  sublabel,
  delay = 0,
}: StatItemProps) {
  return (
    <Reveal delay={delay}>
      <div className="text-center px-4">
        <p
          className="font-display font-semibold mb-1"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "#b0894f",
            lineHeight: 1.1,
          }}
        >
          {stat}
        </p>
        <p
          className="text-sm font-medium uppercase tracking-wide mb-1"
          style={{ color: "#f7f4ee" }}
        >
          {label}
        </p>
        {sublabel && (
          <p className="text-xs" style={{ color: "#9fb0c2" }}>
            {sublabel}
          </p>
        )}
      </div>
    </Reveal>
  );
}
