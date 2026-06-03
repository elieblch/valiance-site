"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Step {
  number: number;
  label: string;
}

interface ProcessStripProps {
  steps: Step[];
}

export default function ProcessStrip({ steps }: ProcessStripProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Desktop horizontal connector line */}
      <div
        className="hidden lg:block absolute"
        style={{ top: "1.375rem", left: "3rem", right: "3rem", height: "1px", backgroundColor: "#e6dfd2", zIndex: 0 }}
        aria-hidden="true"
      />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-0 lg:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex items-start gap-4 pb-8 last:pb-0 lg:pb-0 lg:flex-col lg:items-center lg:flex-1"
          >
            {/* Mobile vertical connector */}
            {i < steps.length - 1 && (
              <div
                className="absolute left-[1.125rem] top-11 bottom-0 w-px lg:hidden"
                style={{ backgroundColor: "#e6dfd2" }}
                aria-hidden="true"
              />
            )}

            {/* Number circle */}
            <div
              className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold"
              style={{
                backgroundColor: "#14233b",
                color: "#b0894f",
                fontFamily: "var(--font-display), system-ui, sans-serif",
              }}
            >
              {step.number}
            </div>

            {/* Label */}
            <p
              className="pt-1 text-sm leading-relaxed lg:text-center lg:pt-4"
              style={{ color: "#3a4049" }}
            >
              {step.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
