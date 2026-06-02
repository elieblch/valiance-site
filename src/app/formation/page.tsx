import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import AlternatingFeature from "@/components/AlternatingFeature";
import CardGrid from "@/components/CardGrid";
import Callout from "@/components/Callout";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Formation",
  description:
    "Découvrez les outils du lean management et du coaching avec des formations pratiques et ludiques.",
  openGraph: {
    title: "Formation | Valiance",
    description:
      "Découvrez les outils du lean management et du coaching avec des formations pratiques et ludiques.",
  },
};

const FORMATIONS = [
  { title: "Découvrir la démarche lean de manière ludique" },
  { title: "Le A3, outil simple pour traiter les irritants" },
  { title: "Piloter la performance en management visuel" },
  { title: "Installer la pratique du feedback" },
  { title: "Mettre en œuvre des entretiens de développement" },
  { title: "Pratiquer la communication non violente (CNV)" },
  { title: "Développer son assertivité" },
  { title: "Pitcher pour impacter" },
];

export default function FormationPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroFormation}
        imageAlt="Atelier de formation collaborative"
        kicker="FORMATION"
        title="Découvrez les outils du lean et du coaching"
      />

      {/* INTRO */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <SectionIntro
            kicker="NOS FORMATIONS"
            title="Apprendre par la pratique"
            lead="Des formations concrètes, fondées sur l'alternance entre apports théoriques et mises en situation. Pour acquérir des méthodes réellement applicables dès le lendemain."
          />
        </div>
      </section>

      {/* ALTERNATING FEATURES */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site space-y-20 lg:space-y-28">
          <AlternatingFeature
            title="Le lean management, de manière ludique"
            text="Méthode de gestion et d'organisation visant à améliorer la performance, souvent mal perçue en Europe car appliquée sans sa dimension humaine. C'est en s'appuyant sur ceux qui font qu'on construit une performance durable. Nous vous proposons de découvrir ses principes par une simulation opérationnelle ludique, en alternant théorie et pratique."
            imageSrc={IMAGES.featureLean}
            imageAlt="Simulation lean en atelier"
          />
          <AlternatingFeature
            title="Le manager coach"
            text="Le manager se positionne comme une ressource pour ses collaborateurs, en privilégiant l'aide et le développement plutôt que la seule expertise métier. Découvrez le feedback et l'entretien de développement, deux outils simples au bénéfice des collaborateurs et de la performance collective."
            imageSrc={IMAGES.featureManagerCoach}
            imageAlt="Manager coach en entretien de développement"
            reverse
          />
        </div>
      </section>

      {/* CALLOUT CODÉVELOPPEMENT */}
      <section className="py-16" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-3xl">
          <Callout
            title="Le codéveloppement"
            text="Pour développer la transversalité, le partage de pratiques et la coopération : un groupe de pairs s'entraide dans son développement professionnel."
          />
        </div>
      </section>

      {/* EXEMPLES DE FORMATIONS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-10">EXEMPLES DE FORMATIONS</p>
          </Reveal>
          <CardGrid items={FORMATIONS} columns={2} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
