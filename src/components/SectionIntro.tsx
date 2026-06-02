import Reveal from "./Reveal";

interface SectionIntroProps {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionIntro({
  kicker,
  title,
  lead,
  align = "left",
  light = false,
}: SectionIntroProps) {
  const centered = align === "center";
  const textColor = light ? "#f7f4ee" : "#14233b";
  const leadColor = light ? "rgba(247,244,238,0.8)" : "#3a4049";

  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-2xl`}>
      {kicker && (
        <Reveal>
          <p className="kicker mb-4">{kicker}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="h2 mb-6" style={{ color: textColor }}>
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className="text-lg leading-relaxed"
            style={{ color: leadColor }}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
