import Link from "next/link";
import Reveal from "./Reveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Échangeons sur vos enjeux",
  subtitle,
  buttonLabel = "Prendre contact",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#14233b" }}
      aria-label="Appel à l'action"
    >
      <div className="container-site text-center">
        <Reveal>
          <h2
            className="h2 mb-6"
            style={{ color: "#f7f4ee" }}
          >
            {title}
          </h2>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.06}>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(247,244,238,0.75)" }}>
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={subtitle ? 0.12 : 0.06}>
          <Link
            href={buttonHref}
            className="btn-primary"
            style={{ backgroundColor: "#b0894f", borderColor: "#b0894f" }}
          >
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
