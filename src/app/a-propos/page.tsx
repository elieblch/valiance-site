import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Nicolas Blecher, Executive Coach HEC et fondateur de Valiance. Découvrez son parcours et ses engagements.",
  openGraph: {
    title: "À propos | Valiance",
    description:
      "Nicolas Blecher, Executive Coach HEC et fondateur de Valiance. Découvrez son parcours et ses engagements.",
  },
};

const CERTIFICATIONS = [
  "Coach certifié HEC",
  "RNCP niveau 6",
  "Black Belt Lean Six Sigma (IASSC)",
  "Diplômé ENSAE",
];

const PARCOURS = [
  "+20 ans en transformation et performance (EDF, RTE, Alcatel ; bancaire, start-ups).",
  "Expert des modes de management innovants (managers, équipes, dirigeants).",
  "Conçoit et anime des formations (management collaboratif, feedback, pilotage, management visuel, amélioration continue) et des groupes de codéveloppement.",
  "A conçu une démarche de transformation managériale à l'échelle du parc nucléaire français (100+ jours de formation, 500 h de coaching).",
  "Large expérience des modes de fonctionnement à distance.",
  "Anime un séminaire de développement personnel à l'EM Normandie.",
];

export default function AProposPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroApropos}
        imageAlt="Portrait professionnel"
        kicker="À PROPOS"
        title="Nicolas Blecher, Executive Coach HEC"
      />

      {/* BIO + PHOTO */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
            {/* Photo */}
            <Reveal className="shrink-0">
              <div
                className="relative overflow-hidden rounded-[4px] shadow-md"
                style={{ width: 260, height: 300 }}
              >
                <Image
                  src={IMAGES.nicolas}
                  alt="Nicolas Blecher"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.9)", objectPosition: "top center" }}
                  sizes="260px"
                  priority
                />
              </div>
              {/* LinkedIn */}
              <a
                href="https://fr.linkedin.com/in/nicolasblecher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 text-sm transition-colors duration-200"
                style={{ color: "#b0894f" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </Reveal>

            {/* Text */}
            <div className="flex-1">
              <Reveal>
                <p className="kicker mb-4">FONDATEUR DE VALIANCE</p>
              </Reveal>
              <Reveal delay={0.06}>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "#3a4049" }}
                >
                  Fondateur de Valiance. Executive Coach et Consultant Corporate
                  dans le Groupe EDF, il accompagne depuis de nombreuses années
                  les dirigeants et les transformations d&apos;entreprise.
                  Convaincu de l&apos;importance du bien-être individuel au
                  service d&apos;une performance durable, il a fondé Valiance
                  pour exercer en parallèle en indépendant. Son approche
                  s&apos;articule autour des postures individuelles, des
                  dynamiques collectives et de l&apos;amélioration de la
                  performance.
                </p>
              </Reveal>

              {/* Certifications */}
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-3 mb-8">
                  {CERTIFICATIONS.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium px-3 py-1.5 rounded-[2px]"
                      style={{
                        backgroundColor: "#fcfaf6",
                        color: "#14233b",
                        border: "1px solid #e6dfd2",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="kicker mb-10">ÉLÉMENTS DE PARCOURS</p>
          </Reveal>
          <ul className="space-y-6">
            {PARCOURS.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li
                  className="flex gap-5 items-start"
                >
                  <span
                    className="mt-2 w-5 h-5 shrink-0 rounded-[2px] flex items-center justify-center text-xs"
                    style={{ backgroundColor: "#14233b", color: "#b0894f" }}
                  >
                    ✓
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
                    {item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="kicker mb-6">ENGAGEMENTS</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-base leading-relaxed mb-12" style={{ color: "#3a4049" }}>
              Coach référent pour{" "}
              <strong style={{ color: "#14233b" }}>60 000 Rebonds</strong>{" "}
              (entrepreneurs en dépôt de bilan) et{" "}
              <strong style={{ color: "#14233b" }}>Force Femmes</strong>{" "}
              (retour à l&apos;emploi).
            </p>
          </Reveal>

          {/* NOTRE RÉSEAU */}
          <Reveal delay={0.1}>
            <div
              className="p-8 rounded-[4px] border"
              style={{ backgroundColor: "#fcfaf6", borderColor: "#e6dfd2" }}
            >
              <p
                className="font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  color: "#14233b",
                }}
              >
                Notre réseau
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
                Nous faisons partie d&apos;un réseau de coachs, consultants et
                formateurs certifiés, mobilisables selon les besoins de nos
                clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
