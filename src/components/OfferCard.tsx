import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

interface OfferCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function OfferCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  delay = 0,
}: OfferCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className="group block rounded-[4px] overflow-hidden border transition-shadow duration-300 hover:shadow-lg"
        style={{ borderColor: "#e6dfd2", backgroundColor: "#fcfaf6" }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: "saturate(0.85) contrast(1.02)" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(12,22,38,0.25)" }}
          />
        </div>

        {/* Content */}
        <div className="p-7">
          <h3
            className="h3 mb-3"
            style={{
              color: "#14233b",
              fontSize: "1.25rem",
              fontFamily: "var(--font-display), system-ui, sans-serif",
            }}
          >
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b7280" }}>
            {description}
          </p>
          <span className="link-accent text-sm">
            Découvrir →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
