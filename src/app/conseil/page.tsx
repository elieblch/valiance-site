import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import CardGrid from "@/components/CardGrid";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Conseil",
  description:
    "Réussissez vos projets de performance et de transformation grâce à notre expertise conseil.",
  openGraph: {
    title: "Conseil | Valiance",
    description:
      "Réussissez vos projets de performance et de transformation grâce à notre expertise conseil.",
  },
};

const TOPICS = [
  { title: "Mentoring managérial" },
  { title: "Modes de management innovants" },
  { title: "Développement de l'engagement des équipes" },
  { title: "Excellence opérationnelle" },
  { title: "Définition et pilotage de la performance" },
  { title: "Amélioration du fonctionnement des organisations" },
  { title: "Optimisation des processus opérationnels" },
  { title: "Sélection des ressources d'appui" },
  { title: "Montée en compétences opérationnelle" },
  { title: "Dispositif de formation et de certification" },
  { title: "Modes de fonctionnement à distance" },
];

const MODES = [
  {
    title: "Nous menons pour vous",
    description:
      "Résultat ponctuel sans mobiliser vos ressources. Idéal pour aller vite sur un sujet précis.",
  },
  {
    title: "Nous menons avec vous",
    description:
      "Montée en compétence des équipes. Un accompagnement en tandem pour transférer l'expertise.",
  },
  {
    title: "Nous vous aidons à mener",
    description:
      "Sécuriser un chantier interne. Nous intervenons en conseil pour valider et orienter.",
  },
];

export default function ConseilPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroConseil}
        imageAlt="Réunion de conseil stratégique"
        kicker="CONSEIL"
        title="Réussissez vos projets de performance et de transformation"
      />

      {/* INTRO */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <SectionIntro
            kicker="NOTRE EXPERTISE"
            title="Une expérience de terrain, au service de votre performance"
            lead="Fort de notre expérience dans l'industrie et les services, nous accompagnons la définition et la mise en œuvre de vos projets de performance et de transformation. La clé d'une performance durable : l'équilibre entre le bien-être des collaborateurs et l'optimisation rigoureuse de la performance. Nous associons des coachs certifiés (postures et modes de management) et des experts de l'excellence opérationnelle certifiés Lean Six Sigma (pilotage et optimisation)."
          />
        </div>
      </section>

      {/* EXEMPLES DE SUJETS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-10">EXEMPLES DE SUJETS</p>
          </Reveal>
          <CardGrid items={TOPICS} columns={3} />
        </div>
      </section>

      {/* TROIS MODES D'INTERVENTION */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-4">MODES D&apos;INTERVENTION</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="h2 mb-14"
              style={{ color: "#14233b" }}
            >
              Trois façons de travailler ensemble
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {MODES.map((mode, i) => (
              <Reveal key={mode.title} delay={i * 0.08}>
                <div
                  className="p-8 rounded-[4px] border h-full"
                  style={{ backgroundColor: "#fcfaf6", borderColor: "#e6dfd2" }}
                >
                  <div
                    className="w-8 h-8 rounded-[2px] flex items-center justify-center mb-6 text-sm font-semibold"
                    style={{ backgroundColor: "#b0894f", color: "#fcfaf6" }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3"
                    style={{
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                      color: "#14233b",
                    }}
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

          {/* See Do Lead highlight */}
          <Reveal delay={0.24}>
            <div
              className="p-8 rounded-[4px] text-center"
              style={{ backgroundColor: "#14233b" }}
            >
              <p
                className="kicker mb-3"
                style={{ color: "#b0894f" }}
              >
                SEE · DO · LEAD
              </p>
              <p
                className="text-base"
                style={{ color: "rgba(247,244,238,0.85)" }}
              >
                Une approche combinant les trois modes pour internaliser
                durablement la compétence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              className="text-sm italic mt-6"
              style={{ color: "#6b7280" }}
            >
              En présentiel (vos locaux) comme en distanciel.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
