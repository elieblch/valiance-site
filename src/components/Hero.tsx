import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  variant?: "home" | "inner";
  imageSrc: string;
  imageAlt: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  variant = "inner",
  imageSrc,
  imageAlt,
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: isHome ? "100svh" : "52vh" }}
      aria-label={`Hero, ${title}`}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        style={{ filter: "saturate(0.85) contrast(1.02)" }}
        priority
        sizes="100vw"
      />

      {/* Ink overlay */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, rgba(12,22,38,0.72) 0%, rgba(12,22,38,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 container-site flex flex-col justify-center"
        style={{
          minHeight: isHome ? "100svh" : "52vh",
          paddingTop: "5rem",
          paddingBottom: isHome ? "5rem" : "3rem",
        }}
      >
        <div className={`max-w-3xl ${isHome ? "" : ""}`}>
          {kicker && (
            <p className="kicker mb-5" style={{ color: "#b0894f" }}>
              {kicker}
            </p>
          )}

          <h1
            className="h1 text-on-dark mb-6"
            style={{ color: "#f7f4ee" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ color: "rgba(247,244,238,0.85)" }}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator, home only */}
      {isHome && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
          aria-hidden="true"
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(247,244,238,0.6)", fontSize: "0.7rem" }}
          >
            Découvrir
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="rgba(247,244,238,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
