import Reveal from "./Reveal";

interface CalloutProps {
  title: string;
  text: string;
}

export default function Callout({ title, text }: CalloutProps) {
  return (
    <Reveal>
      <div
        className="rounded-[4px] p-8 lg:p-10"
        style={{
          backgroundColor: "#fcfaf6",
          borderLeft: "3px solid #b0894f",
        }}
      >
        <h3
          className="font-semibold mb-3 text-lg"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            color: "#14233b",
          }}
        >
          {title}
        </h3>
        <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
          {text}
        </p>
      </div>
    </Reveal>
  );
}
