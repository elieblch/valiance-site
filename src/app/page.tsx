import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import StatCounter from "@/components/StatCounter";
import ModeToggle from "@/components/ModeToggle";
import CTASection from "@/components/CTASection";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Valiance, Coaching · Conseil · Formation pour dirigeants & équipes",
  description:
    "Nous aidons dirigeants, managers et équipes à surmonter leurs difficultés et atteindre leurs objectifs, durablement. Accompagnement individuel et collectif, certifié HEC.",
  openGraph: {
    title: "Valiance, Accompagnement des dirigeants, managers & équipes",
    description:
      "Nous aidons dirigeants, managers et équipes à surmonter leurs difficultés et atteindre leurs objectifs, durablement.",
    locale: "fr_FR",
  },
};

const APPROCHE_LEVIERS = [
  {
    label: "Coaching",
    text: "Faire émerger vos propres solutions.",
  },
  {
    label: "Conseil",
    text: "Réussir vos projets de performance et de transformation.",
  },
  {
    label: "Formation",
    text: "Acquérir méthodes et outils, du lean au coaching.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero
        variant="home"
        imageSrc={IMAGES.heroHome}
        imageAlt="Architecture de verre lumineuse, symbole d'ambition"
        kicker="ACCOMPAGNEMENT DES DIRIGEANTS, MANAGERS & ÉQUIPES"
        title="Révélez votre potentiel, et celui de vos équipes."
        subtitle="Nous aidons dirigeants, managers et équipes à surmonter leurs difficultés et à atteindre leurs objectifs, durablement."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        secondaryCta={{ label: "Trouver mon accompagnement", href: "#accompagnement" }}
      />

      {/* SECTION : SUR QUOI NOUS VOUS AIDONS + MODE TOGGLE */}
      <section
        id="accompagnement"
        className="py-24 lg:py-36"
        style={{ backgroundColor: "#f7f4ee" }}
      >
        <div className="container-site">
          <SectionIntro
            kicker="SUR QUOI NOUS VOUS AIDONS"
            title="Choisissez votre porte d'entrée"
            lead="Coaching individuel, team coaching, conseil ou formation : tout part de vos objectifs."
            align="center"
          />
          <div className="mt-14">
            <ModeToggle />
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
            <StatCounter value={20} suffix="+" label="ans d'expérience" sublabel="Transformation & performance" delay={0} />
            <StatCounter value={0} prefix="Executive Coach" textOnly label="certifié HEC" sublabel="& RNCP niv. 6" delay={0.06} />
            <StatCounter value={0} prefix="Black Belt" textOnly label="Lean Six Sigma" sublabel="IASSC" delay={0.12} />
            <StatCounter value={500} suffix=" h" label="de coaching" delay={0.18} />
            <StatCounter value={100} suffix=" j" label="de formation" sublabel="Parc nucléaire français" delay={0.24} />
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

      {/* NOTRE APPROCHE, 3 leviers discrets */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <Reveal>
            <p className="kicker text-center mb-4">NOTRE APPROCHE</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p
              className="text-center text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
              style={{ color: "#3a4049" }}
            >
              Trois leviers, une même conviction : vous avez déjà en vous les ressources pour réussir.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {APPROCHE_LEVIERS.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08} className="h-full">
                <div
                  className="h-full p-6 rounded-[4px] border flex gap-4 items-start"
                  style={{ backgroundColor: "#f7f4ee", borderColor: "#e6dfd2" }}
                >
                  <div
                    className="w-7 h-7 rounded-[2px] flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5"
                    style={{ backgroundColor: "#14233b", color: "#b0894f", fontFamily: "var(--font-display)" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ fontFamily: "var(--font-display), system-ui, sans-serif", color: "#14233b" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTE */}
      <section
        className="py-24 lg:py-36"
        style={{ backgroundColor: "#f7f4ee", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site max-w-3xl mx-auto text-center">
          <Reveal>
            <blockquote className="mb-10">
              <p
                className="italic text-xl lg:text-2xl leading-relaxed mb-4"
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  color: "#14233b",
                }}
              >
                «&nbsp;C&apos;est en croyant aux roses qu&apos;on les fait éclore.&nbsp;»
              </p>
              <footer
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: "#b0894f" }}
              >
               , Anatole France
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed" style={{ color: "#3a4049" }}>
              Notre conviction : chacun possède en lui les ressources pour faire éclore ses roses.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FONDATEUR, teaser */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "#fcfaf6", borderTop: "1px solid #e6dfd2" }}
      >
        <div className="container-site">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <Reveal className="shrink-0">
              <div
                className="relative overflow-hidden rounded-[4px]"
                style={{ width: 200, height: 200 }}
              >
                <Image
                  src={IMAGES.nicolas}
                  alt="Nicolas Blecher, fondateur de Valiance"
                  fill
                  className="object-cover"
                  style={{ filter: "saturate(0.9)" }}
                  sizes="200px"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="kicker mb-4">LE FONDATEUR</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display), system-ui, sans-serif",
                    color: "#14233b",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    lineHeight: 1.25,
                  }}
                >
                  Nicolas Blecher, Executive Coach HEC, fondateur de Valiance
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="text-base leading-relaxed mb-6 max-w-xl"
                  style={{ color: "#3a4049" }}
                >
                  Executive Coach certifié HEC et Black Belt Lean Six Sigma, il accompagne depuis plus de 20 ans dirigeants et transformations d&apos;entreprise. Convaincu que le bien-être individuel est le moteur d&apos;une performance durable, il a fondé Valiance.
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
