"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import OutcomeCard from "./OutcomeCard";
import {
  Briefcase,
  Star,
  Compass,
  Shield,
  Target,
  Users,
  GraduationCap,
  Repeat2,
  BarChart2,
  BookOpen,
} from "lucide-react";

const INDIVIDUEL_CARDS = [
  {
    icon: <Briefcase size={20} strokeWidth={1.5} />,
    title: "Réussir ma prise de poste",
    benefit: "Prendre mes marques vite et bien sur un nouveau périmètre.",
  },
  {
    icon: <Star size={20} strokeWidth={1.5} />,
    title: "Affirmer mon leadership",
    benefit: "Gagner en impact, en posture et en aisance relationnelle.",
  },
  {
    icon: <Compass size={20} strokeWidth={1.5} />,
    title: "Piloter ma carrière",
    benefit: "Évolution, transition, nouveau projet ou fin de carrière.",
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Gagner en confiance et en sérénité",
    benefit: "Confiance en soi, gestion du temps, équilibre pro/perso.",
  },
  {
    icon: <Target size={20} strokeWidth={1.5} />,
    title: "Préparer un moment décisif",
    benefit: "Assessment, recrutement, prise de parole, pitch.",
  },
];

const COLLECTIF_CARDS = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Souder une équipe",
    benefit: "Cohésion, coopération et intelligence collective.",
  },
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: "Faire grandir mes managers",
    benefit: "Posture de manager-coach, feedback, entretiens de développement.",
  },
  {
    icon: <Repeat2 size={20} strokeWidth={1.5} />,
    title: "Réussir une transformation",
    benefit: "Modes de management innovants, conduite du changement, engagement.",
  },
  {
    icon: <BarChart2 size={20} strokeWidth={1.5} />,
    title: "Gagner en performance",
    benefit: "Excellence opérationnelle, pilotage visuel, optimisation des process.",
  },
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Monter en compétences",
    benefit: "Formations sur-mesure : lean, CNV, assertivité, pitch…",
  },
];

type Mode = "individuel" | "collectif";

export default function ModeToggle() {
  const [active, setActive] = useState<Mode>("individuel");
  const prefersReduced = useReducedMotion();

  const tabs: { id: Mode; label: string }[] = [
    { id: "individuel", label: "Individuel" },
    { id: "collectif", label: "Collectif" },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, current: Mode) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(current === "individuel" ? "collectif" : "individuel");
    }
  };

  const cards = active === "individuel" ? INDIVIDUEL_CARDS : COLLECTIF_CARDS;

  return (
    <div>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Type d'accompagnement"
        className="flex gap-8 mb-10 border-b"
        style={{ borderColor: "#e6dfd2" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => setActive(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            className="relative pb-4 text-base font-semibold transition-colors duration-200 focus-visible:outline-none"
            style={{
              color: active === tab.id ? "#14233b" : "#6b7280",
              fontFamily: "var(--font-display), system-ui, sans-serif",
            }}
          >
            {tab.label}
            {active === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "#b0894f" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <OutcomeCard key={card.title} {...card} delay={i * 0.05} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href={active === "individuel" ? "/individuel" : "/collectif"}
              className="btn-outline"
            >
              {active === "individuel"
                ? "Voir l'accompagnement individuel →"
                : "Voir l'accompagnement collectif →"}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
