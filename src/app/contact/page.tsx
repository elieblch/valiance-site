import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { IMAGES } from "@/content/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Valiance pour un premier entretien. Nous intervenons en Île-de-France, dans l'Oise et en distanciel.",
  openGraph: {
    title: "Contact | Valiance",
    description:
      "Contactez Valiance pour un premier entretien. Nous intervenons en Île-de-France, dans l'Oise et en distanciel.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        imageSrc={IMAGES.heroContact}
        imageAlt="Paysage forêt d'Ermenonville, Île-de-France"
        kicker="CONTACT"
        title="Échangeons sur vos enjeux"
        subtitle="Nous intervenons principalement en Île-de-France et dans l'Oise — Paris, Senlis, Chantilly, Compiègne. Nous travaillons aussi en distanciel et pouvons nous déplacer sur l'ensemble du territoire."
      />

      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f7f4ee" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* FORMULAIRE */}
            <div>
              <Reveal>
                <p className="kicker mb-4">FORMULAIRE</p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mb-8 text-base" style={{ color: "#6b7280" }}>
                  N&apos;hésitez pas à nous contacter pour un premier entretien.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>

            {/* COORDONNÉES */}
            <Reveal delay={0.14}>
              <div>
                <p className="kicker mb-8">COORDONNÉES</p>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#fcfaf6", border: "1px solid #e6dfd2" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                          fill="#b0894f"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#6b7280" }}>
                        Téléphone
                      </p>
                      <a
                        href="tel:+33660980685"
                        className="text-base font-medium transition-colors duration-200"
                        style={{ color: "#14233b" }}
                      >
                        +33 (0)6 60 98 06 85
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#fcfaf6", border: "1px solid #e6dfd2" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          fill="#b0894f"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#6b7280" }}>
                        Email
                      </p>
                      <a
                        href="mailto:contact@valiance.fr"
                        className="text-base font-medium transition-colors duration-200"
                        style={{ color: "#14233b" }}
                      >
                        contact@valiance.fr
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#fcfaf6", border: "1px solid #e6dfd2" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill="#b0894f"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#6b7280" }}>
                        Adresse
                      </p>
                      <address className="not-italic text-base" style={{ color: "#14233b" }}>
                        24, Prairie Souville
                        <br />
                        60950 Ermenonville
                      </address>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#fcfaf6", border: "1px solid #e6dfd2" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#b0894f" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#6b7280" }}>
                        LinkedIn
                      </p>
                      <a
                        href="https://fr.linkedin.com/in/nicolasblecher"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium transition-colors duration-200"
                        style={{ color: "#14233b" }}
                      >
                        Nicolas Blecher
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
