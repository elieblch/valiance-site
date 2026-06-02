import Image from "next/image";
import Reveal from "./Reveal";

interface AlternatingFeatureProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function AlternatingFeature({
  title,
  text,
  imageSrc,
  imageAlt,
  reverse = false,
}: AlternatingFeatureProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-12 lg:gap-20 items-center`}
    >
      {/* Text */}
      <div className="flex-1">
        <Reveal>
          <h3
            className="h3 mb-5"
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              color: "#14233b",
              fontSize: "1.5rem",
            }}
          >
            {title}
          </h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
            {text}
          </p>
        </Reveal>
      </div>

      {/* Image */}
      <Reveal delay={0.12} className="flex-1 w-full">
        <div
          className="relative w-full overflow-hidden rounded-[4px]"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            style={{ filter: "saturate(0.85) contrast(1.02)" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Reveal>
    </div>
  );
}
