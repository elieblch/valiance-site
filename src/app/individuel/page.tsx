import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import OutcomeCard from "@/components/OutcomeCard";
import ProcessStrip from "@/components/ProcessStrip";
import Callout from "@/components/Callout";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";
import {
  Briefcase,
  Star,
  Compass,
  Shield,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coaching individuel, dirigeants, managers & talents | Valiance",
  description:
    "Un coaching individuel pour franchir un cap en confiance. Prise de poste, leadership, carrière, confiance en soi, moments décisifs, coaching certifié HEC.",
  openGraph: {
    title: "Coaching individuel, dirigeants, managers & talents | Valiance",
    description:
      "Un coaching individuel pour franchir un cap en confiance. Coaching certifié HEC pour dirigeants, managers et talents.",
  },
};

const RESULTS = [
  {
    icon: <Briefcase size={20} strokeWidth={1.5} />,
    title: "Réussir ma prise de poste",
    benefit: "Prenez vos marques vite et bien sur un nouveau périmètre.",
  },
  {
    icon: <Star size={20} strokeWidth={1.5} />,
    title: "Affirmer mon leadership",
    benefit: "Gagnez en impact, en posture et en aisance relationnelle.",
  },
  {
    icon: <Compass size={20} strokeWidth={1.5} />,
    title: "Piloter ma carrière",
    benefit: "Évolution, transition, nouveau projet ou préparation de la fin de carrière.",
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Gagner en confiance et en sérénité",
    benefit: "Renforcez votre confiance en vous, gérez mieux votre temps et votre équilibre.",
  },
  {
    icon: <Target size={20} strokeWidth={1.5} />,
    title: "Préparer un moment décisif",
    benefit: "Préparez un assessment, un recrutement, une prise de parole ou un pitch.",
  },
];

const PROCESS_STEPS = [
  { number: 1, label: "Premier échange sans engagement, pour se découvrir et vérifier l'alignement." },
  { number: 2, label: "Cadrage de vos objectifs, définir ce que vous voulez vraiment atteindre." },
  { number: 3, label: "~10 séances, 1 à 2 par mois, 1h30–2h, en présentiel ou à distance." },
  { number: 4, label: "Bilan et ancrage, consolider les acquis et tracer la suite." },
];

const charteItems = [
  {
    title: "Professionnalisme du coach",
    content: (
      <ol className="space-y-2 list-decimal list-inside text-sm" style={{ color: "#3a4049" }}>
        {[
          "Posture bienveillante : écouter sans jugement, sans intention pour le client, avec éthique.",
          "Connaissance de l'entreprise, pratique professionnelle réelle, si possible managériale.",
          "Travail personnel approfondi dans la durée.",
          "Formation en psychologie et facteurs humains.",
          "Connaissance des fondamentaux du coaching (programme HEC / école reconnue).",
          "Supervision continue et développement des compétences.",
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
      <ol className="space-y-2 list-decimal list-inside text-sm" style={{ color: "#3a4049" }}>
        {[
          "Contractualisation, volontariat du client, termes clairs.",
          "Intégrité et informations véridiques.",
          "Confidentialité et protection des données.",
          "Absence de conflits d'intérêts.",
          "Pas de relations inappropriées.",
          "Droit d'y mettre fin à tout moment ; confidentialité durable.",
        ].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    ),
  },
];

export default function IndividuelPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroIndividuel}
        imageAlt="Dirigeant en entretien de coaching individuel"
        kicker="ACCOMPAGNEMENT INDIVIDUEL"
        title="Franchir un cap, en confiance."
        subtitle="Un coaching individuel pour les dirigeants, managers et talents qui veulent progresser vite et durablement."
      />

      {/* INTRO */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-2xl">
          <Reveal>
            <p className="kicker mb-4">NOTRE APPROCHE</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-lg leading-relaxed" style={{ color: "#3a4049" }}>
              Le coaching part d&apos;une idée simple : vous possédez déjà les ressources pour avancer. Notre rôle est de vous aider à les révéler.
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
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESULTS.map((card, i) => (
              <OutcomeCard key={card.title} {...card} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* CONVICTION */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="lg:w-1/3">
              <Reveal>
                <p className="kicker mb-4">NOTRE CONVICTION</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    color: "#14233b",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    lineHeight: 1.25,
                  }}
                >
                  La clé d&apos;une transformation durable
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:w-2/3">
              <p className="text-base leading-relaxed" style={{ color: "#3a4049" }}>
                Les solutions toutes faites soulagent à court terme ; c&apos;est votre cheminement qui transforme durablement. Par un questionnement précis, nous vous aidons à voir clair, lever vos freins et faire fructifier la singularité de votre potentiel.
              </p>
            </Reveal>
          </div>
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

      {/* CALLOUT */}
      <section className="py-16" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site max-w-3xl">
          <Callout
            title="Le coaching pour tous"
            text="Trop souvent réservé aux dirigeants, le coaching reste un levier de performance encore sous-exploité pour les managers et les collaborateurs. Nous le rendons accessible à tous ceux qui veulent progresser."
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
              className="mb-2"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                color: "#14233b",
                fontSize: "1.5rem",
                fontWeight: 700,
                lineHeight: 1.25,
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
