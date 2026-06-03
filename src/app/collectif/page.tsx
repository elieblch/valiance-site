import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import OutcomeCard from "@/components/OutcomeCard";
import ProcessStrip from "@/components/ProcessStrip";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";
import {
  Users,
  GraduationCap,
  Repeat2,
  BarChart2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coaching collectif & formation, équipes & organisations | Valiance",
  description:
    "Team coaching, conseil et formation pour équipes et organisations. Lean Six Sigma, cohésion, transformation managériale, une performance durable qui allie bien-être et efficacité.",
  openGraph: {
    title: "Coaching collectif & formation, équipes & organisations | Valiance",
    description:
      "Team coaching, conseil et formation pour une performance durable. Certifiés HEC et Black Belt Lean Six Sigma.",
  },
};

const RESULTS = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Souder une équipe",
    benefit: "Développez la cohésion, la coopération et l'intelligence collective.",
  },
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: "Faire grandir mes managers",
    benefit: "Ancrez la posture de manager-coach, le feedback et les entretiens de développement.",
  },
  {
    icon: <Repeat2 size={20} strokeWidth={1.5} />,
    title: "Réussir une transformation",
    benefit: "Pilotez le changement avec des modes de management innovants et un engagement solide.",
  },
  {
    icon: <BarChart2 size={20} strokeWidth={1.5} />,
    title: "Gagner en performance",
    benefit: "Mettez en place l'excellence opérationnelle, le pilotage visuel et l'optimisation des process.",
  },
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Monter en compétences",
    benefit: "Des formations sur-mesure : lean, CNV, assertivité, pitch et plus encore.",
  },
];

const MODES = [
  {
    num: 1,
    title: "Nous menons POUR vous",
    description: "Résultat rapide sans mobiliser vos ressources. Idéal pour aller vite sur un sujet précis.",
  },
  {
    num: 2,
    title: "Nous menons AVEC vous",
    description: "Montée en compétence des équipes, un accompagnement en tandem pour transférer l'expertise.",
  },
  {
    num: 3,
    title: "Nous vous aidons À mener",
    description: "Nous intervenons en conseil pour sécuriser et orienter votre chantier interne.",
  },
];

const PROCESS_STEPS = [
  { number: 1, label: "Diagnostic partagé, comprendre vos enjeux et votre contexte." },
  { number: 2, label: "Cadrage des objectifs, définir les résultats attendus et les indicateurs de succès." },
  { number: 3, label: "Intervention, en présentiel ou à distance, sur mesure." },
  { number: 4, label: "Transfert de compétences & suivi, ancrer les acquis dans la durée." },
];

export default function CollectifPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroCollectif}
        imageAlt="Équipe en atelier collaboratif"
        kicker="ACCOMPAGNEMENT COLLECTIF"
        title="Une équipe qui avance, une performance qui dure."
        subtitle="Pour les équipes et les organisations : team coaching, conseil et formation, au service d'une performance durable."
      />

      {/* INTRO */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-2xl">
          <Reveal>
            <p className="kicker mb-4">NOTRE EXPERTISE</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-lg leading-relaxed" style={{ color: "#3a4049" }}>
              Nous associons des coachs certifiés et des experts de l&apos;excellence opérationnelle (Lean Six Sigma). La clé d&apos;une performance durable : l&apos;équilibre entre le bien-être des collaborateurs et l&apos;optimisation rigoureuse de la performance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <SectionIntro
            kicker="VOS OBJECTIFS"
            title="Sur quoi nous vous accompagnons"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {RESULTS.map((card, i) => (
              <OutcomeCard key={card.title} {...card} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* TROIS FAÇONS DE TRAVAILLER */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-4">MODES D&apos;INTERVENTION</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mb-14"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                color: "#14233b",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Trois façons de travailler ensemble
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
            {MODES.map((mode, i) => (
              <Reveal key={mode.title} delay={i * 0.08} className="h-full">
                <div
                  className="p-8 rounded-[4px] border h-full"
                  style={{ backgroundColor: "#fcfaf6", borderColor: "#e6dfd2" }}
                >
                  <div
                    className="w-8 h-8 rounded-[2px] flex items-center justify-center mb-6 text-sm font-semibold"
                    style={{ backgroundColor: "#b0894f", color: "#fcfaf6", fontFamily: "var(--font-display)" }}
                  >
                    {mode.num}
                  </div>
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-display), system-ui, sans-serif", color: "#14233b" }}
                  >
                    {mode.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {mode.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="p-8 rounded-[4px] text-center" style={{ backgroundColor: "#14233b" }}>
              <p className="kicker mb-3" style={{ color: "#b0894f" }}>
                SEE · DO · LEAD
              </p>
              <p className="text-base" style={{ color: "rgba(247,244,238,0.85)" }}>
                Pour internaliser durablement la compétence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESSUS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-10">COMMENT ÇA SE PASSE</p>
          </Reveal>
          <ProcessStrip steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* TÉMOIGNAGES, PLACEHOLDER */}
      {/* TÉMOIGNAGE À COMPLÉTER */}
      {/*
      <section className="py-20" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-3xl">
          <p className="kicker mb-10">ILS EN PARLENT</p>
          <div className="space-y-8">
            <blockquote className="p-8 rounded-[4px] border" style={{ borderColor: "#e6dfd2" }}>
              <p className="italic text-lg mb-4" style={{ color: "#3a4049" }}>« … »</p>
              <footer className="text-sm" style={{ color: "#6b7280" }}>, Prénom Nom, Titre, Entreprise</footer>
            </blockquote>
          </div>
        </div>
      </section>
      */}

      <CTASection />
    </>
  );
}
