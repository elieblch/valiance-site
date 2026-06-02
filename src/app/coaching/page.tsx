import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import CardGrid from "@/components/CardGrid";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import Callout from "@/components/Callout";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Surmontez vos difficultés et atteignez vos objectifs grâce au coaching individuel certifié HEC.",
  openGraph: {
    title: "Coaching | Valiance",
    description:
      "Surmontez vos difficultés et atteignez vos objectifs grâce au coaching individuel certifié HEC.",
  },
};

const TOPICS = [
  { title: "Prise de poste et évolution de périmètre" },
  { title: "Renforcement de la confiance en soi et du leadership" },
  { title: "Gestion de l'équipe, de la hiérarchie, de l'écosystème" },
  { title: "Gestion des conflits et des relations interpersonnelles" },
  { title: "Gestion du temps et des priorités" },
  { title: "Préparation aux assessments et recrutements" },
  { title: "Marketing de soi et pitch" },
  { title: "Stratégie de carrière" },
  { title: "Équilibre vie professionnelle et personnelle" },
  { title: "Nouveau projet professionnel" },
  { title: "Préparation de la fin de carrière" },
];

const MODALITES = [
  { title: "Une dizaine de séances", description: "Nombre adapté à vos besoins et objectifs." },
  {
    title: "1 à 2 séances par mois",
    description: "Un rythme régulier pour ancrer la progression.",
  },
  { title: "Séances de 1h30 à 2h", description: "La durée nécessaire à un travail en profondeur." },
  {
    title: "Présentiel ou distanciel",
    description: "En présentiel (hors de vos locaux) ou en distanciel.",
  },
];

const charteItems = [
  {
    title: "Professionnalisme du coach",
    content: (
      <ol className="space-y-3 list-decimal list-inside">
        {[
          "Intention du coach — accompagner avec une posture bienveillante : écouter sans jugement, sans intention pour le client, avec éthique.",
          "Connaissance de l'entreprise — pratique professionnelle réelle, si possible managériale.",
          "Travail personnel approfondi — développement personnel dans la durée.",
          "Formation en psychologie et facteurs humains.",
          "Connaissance des fondamentaux du coaching (programme HEC / école reconnue).",
          "Supervision continue.",
          "Maintien et développement continu des compétences.",
          "Préservation de l'image du coach HEC Executive Education.",
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    ),
  },
  {
    title: "Responsabilités personnelles et professionnelles",
    content: (
      <ol className="space-y-3 list-decimal list-inside">
        {[
          "Contractualisation — volontariat du client, termes clairs.",
          "Intégrité et informations véridiques.",
          "Confidentialité (et protection des données).",
          "Absence de conflits d'intérêts.",
          "Pas de relations inappropriées.",
          "Fin de prestation — droit d'y mettre fin à tout moment ; confidentialité durable.",
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    ),
  },
];

export default function CoachingPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroCoaching}
        imageAlt="Séance de coaching individuel"
        kicker="COACHING"
        title="Surmontez vos difficultés et atteignez vos objectifs"
      />

      {/* INTRO */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <SectionIntro
            kicker="NOTRE APPROCHE"
            title="Un accompagnement sur mesure"
            lead="Des prestations de coaching professionnelles et efficaces, réalisées par des intervenants certifiés Executive Coach par des institutions reconnues. Le coaching est un accompagnement au cours duquel nous vous aidons à trouver vos propres solutions aux sujets qui vous préoccupent."
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

      {/* NOTRE CONVICTION */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/3">
              <Reveal>
                <p className="kicker mb-4">NOTRE CONVICTION</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="h3"
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    color: "#14233b",
                    fontSize: "1.5rem",
                  }}
                >
                  La clé d&apos;une transformation durable
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:w-2/3">
              <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
                Le coaching est fondé sur la conviction que chacun possède en
                lui les ressources pour résoudre ses problèmes et atteindre ses
                objectifs. Appliquer des solutions toutes faites peut être
                efficace à court terme, mais les difficultés ressurgissent.
                C&apos;est le cheminement personnel qui est la clé
                d&apos;une transformation durable. Par un questionnement précis
                et profond, nous vous aidons à appréhender vos problématiques,
                identifier et parfois confronter vos croyances, faire émerger ce
                qui n&apos;est pas conscient — pour faire fructifier la
                singularité de votre potentiel.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODALITÉS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="kicker mb-10">MODALITÉS</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {MODALITES.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div
                  className="p-6 rounded-[4px] border"
                  style={{ backgroundColor: "#f7f4ee", borderColor: "#e6dfd2" }}
                >
                  <p
                    className="font-semibold mb-2"
                    style={{
                      color: "#14233b",
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                    }}
                  >
                    {m.title}
                  </p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-sm italic" style={{ color: "#6b7280" }}>
              Format adaptable selon vos besoins.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALLOUT */}
      <section className="py-16" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-3xl">
          <Callout
            title="Le coaching pour tous"
            text="Souvent réservé aux dirigeants, le coaching reste sous-utilisé par les managers intermédiaires et les collaborateurs. Nous sommes convaincus qu'un accès facilité et autonome au coaching pour le plus grand nombre est un levier de performance majeur."
          />
        </div>
      </section>

      {/* CHARTE DÉONTOLOGIQUE */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="kicker mb-4">DÉONTOLOGIE</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="h3 mb-2"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                color: "#14233b",
                fontSize: "1.5rem",
              }}
            >
              Notre charte déontologique
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
              Selon les valeurs de l&apos;École de coaching d&apos;HEC Paris
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <Accordion items={charteItems} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
