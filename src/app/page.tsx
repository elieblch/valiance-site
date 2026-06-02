import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import OfferCard from "@/components/OfferCard";
import StatItem from "@/components/StatItem";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Valiance | Coaching · Conseil · Formation",
  description:
    "Spécialistes de l'accompagnement efficace, nous vous aidons à trouver votre voie pour surmonter vos difficultés et atteindre vos objectifs.",
  openGraph: {
    title: "Valiance | Coaching · Conseil · Formation",
    description:
      "Spécialistes de l'accompagnement efficace, nous vous aidons à trouver votre voie pour surmonter vos difficultés et atteindre vos objectifs.",
    locale: "fr_FR",
  },
};

const VALUES = [
  {
    title: "Valeurs",
    text: "L'écoute, l'ouverture, le respect, l'engagement et le professionnalisme : le socle de notre approche.",
    letter: "V",
  },
  {
    title: "Alliance",
    text: "Chacun dans son rôle, alliés pour vous permettre d'atteindre vos objectifs.",
    letter: "A",
  },
  {
    title: "Vaillance",
    text: "La force de mouvement que vous démontrez en engageant votre démarche.",
    letter: "V",
  },
];

const STATS = [
  { stat: "20+ ans", label: "d'expérience", sublabel: "Transformation & performance" },
  { stat: "Executive Coach", label: "certifié HEC", sublabel: "& RNCP niv. 6" },
  { stat: "Black Belt", label: "Lean Six Sigma", sublabel: "IASSC" },
  { stat: "Diplômé", label: "ENSAE", sublabel: "" },
  {
    stat: "100 j + 500 h",
    label: "de formation + coaching",
    sublabel: "Transformation du parc nucléaire français",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero
        variant="home"
        imageSrc={IMAGES.heroHome}
        imageAlt="Architecture lumineuse et épurée"
        kicker="COACHING · CONSEIL · FORMATION"
        title="Révélez le meilleur de vous-même, durablement."
        subtitle="Spécialistes de l'accompagnement efficace, nous vous aidons à trouver VOTRE voie pour surmonter vos difficultés et atteindre vos objectifs."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        secondaryCta={{ label: "Découvrir notre approche", href: "#approche" }}
      />

      {/* MANIFESTE */}
      <section
        id="approche"
        className="py-24 lg:py-36"
        style={{ backgroundColor: "#f7f4ee" }}
      >
        <div className="container-site max-w-3xl mx-auto text-center">
          {/* Citation placeholder */}
          <Reveal>
            <blockquote className="mb-10">
              <p
                className="italic text-xl lg:text-2xl leading-relaxed mb-4"
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  color: "#14233b",
                }}
              >
                {/* CITATION ANATOLE FRANCE — à coller depuis le site actuel */}
                «&nbsp;…&nbsp;»
              </p>
              <footer
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: "#b0894f" }}
              >
                — Anatole France
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#3a4049" }}
            >
              Ces mots d&apos;Anatole France illustrent ce qui nous anime : la
              conviction que chacun possède en lui les ressources pour croire à
              ses roses et les faire éclore. C&apos;est aussi notre conviction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALIANCE, LE NOM */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p
              className="kicker text-center mb-12"
              style={{ color: "#b0894f" }}
            >
              VALIANCE, LE NOM
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div
                  className="p-8 rounded-[4px] border"
                  style={{
                    backgroundColor: "#f7f4ee",
                    borderColor: "#e6dfd2",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-[2px] flex items-center justify-center mb-6 text-xl font-semibold"
                    style={{
                      backgroundColor: "#14233b",
                      color: "#b0894f",
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                    }}
                  >
                    {v.letter}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3"
                    style={{
                      fontFamily: "var(--font-display), system-ui, sans-serif",
                      color: "#14233b",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOS ACCOMPAGNEMENTS */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#f7f4ee" }}
      >
        <div className="container-site">
          <SectionIntro
            kicker="NOS ACCOMPAGNEMENTS"
            title="Comment pouvons-nous vous aider ?"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <OfferCard
              imageSrc={IMAGES.cardCoaching}
              imageAlt="Séance de coaching individuel"
              title="Coaching"
              description="Nous vous aidons à vous transformer pour dépasser vos difficultés et atteindre vos objectifs."
              href="/coaching"
              delay={0}
            />
            <OfferCard
              imageSrc={IMAGES.cardConseil}
              imageAlt="Réunion de conseil en entreprise"
              title="Conseil"
              description="Nous accompagnons la réussite de vos projets de performance et de transformation."
              href="/conseil"
              delay={0.08}
            />
            <OfferCard
              imageSrc={IMAGES.cardFormation}
              imageAlt="Atelier de formation"
              title="Formation"
              description="Acquérez des méthodes et outils inspirés du lean management et du coaching."
              href="/formation"
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* BANDEAU CRÉDIBILITÉ */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#14233b" }}
        aria-label="Nos accréditations"
      >
        <div className="container-site">
          <Reveal>
            <p
              className="text-center text-xs uppercase tracking-widest mb-14"
              style={{ color: "#9fb0c2" }}
            >
              Garanties d&apos;expertise
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
            {STATS.map((s, i) => (
              <StatItem
                key={s.stat}
                stat={s.stat}
                label={s.label}
                sublabel={s.sublabel}
                delay={i * 0.06}
              />
            ))}
          </div>
          <Reveal delay={0.3}>
            <p
              className="text-center mt-14 text-sm italic"
              style={{ color: "#9fb0c2" }}
            >
              Une exigence d&apos;efficacité, au service de l&apos;humain.
            </p>
          </Reveal>
        </div>
      </section>

      {/* NOTRE AMBITION */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6" }}
      >
        <div className="container-site max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="kicker mb-6">NOTRE AMBITION</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#3a4049" }}
            >
              Notre ambition est de vous aider à trouver votre chemin. Nous
              croyons profondément en votre capacité à réussir : atteindre vos
              objectifs personnels et professionnels, surmonter vos difficultés,
              acquérir de nouvelles compétences, définir et mettre en œuvre de
              nouveaux projets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FONDATEUR */}
      <section
        className="py-24 lg:py-32"
        style={{
          backgroundColor: "#f7f4ee",
          borderTop: "1px solid #e6dfd2",
        }}
      >
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <Reveal className="shrink-0">
              <div
                className="relative overflow-hidden rounded-[4px]"
                style={{ width: 220, height: 220 }}
              >
                <Image
                  src={IMAGES.nicolas}
                  alt="Nicolas Blecher, fondateur de Valiance"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.9)" }}
                  sizes="220px"
                />
              </div>
            </Reveal>

            {/* Text */}
            <div>
              <Reveal>
                <p className="kicker mb-4">LE FONDATEUR</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="h3 mb-4"
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    color: "#14233b",
                    fontSize: "1.5rem",
                  }}
                >
                  Nicolas Blecher — Executive Coach HEC, fondateur de Valiance
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="text-base leading-relaxed mb-6 max-w-xl"
                  style={{ color: "#3a4049" }}
                >
                  Executive Coach et Consultant Corporate dans le Groupe EDF,
                  il accompagne depuis de nombreuses années les dirigeants et
                  les transformations d&apos;entreprise. Convaincu de
                  l&apos;importance du bien-être individuel au service
                  d&apos;une performance durable, il a fondé Valiance.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <Link href="/a-propos" className="link-accent">
                  En savoir plus →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
