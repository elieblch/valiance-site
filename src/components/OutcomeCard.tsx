"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface OutcomeCardProps {
  icon: React.ReactNode;
  title: string;
  benefit: string;
  delay?: number;
}

export default function OutcomeCard({ icon, title, benefit, delay = 0 }: OutcomeCardProps) {
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      animate={prefersReduced ? {} : { y: hovered ? -4 : 0 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-[4px] border p-6 flex flex-col gap-4 cursor-default"
      style={{
        backgroundColor: "#fcfaf6",
        borderColor: "#e6dfd2",
        boxShadow: hovered && !prefersReduced ? "0 8px 24px rgba(20,35,59,0.10)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <motion.div
        animate={prefersReduced ? {} : { scale: hovered ? 1.12 : 1 }}
        transition={{ duration: 0.2 }}
        className="w-9 h-9 flex items-center justify-center"
        style={{ color: "#b0894f" }}
      >
        {icon}
      </motion.div>

      <div>
        <p
          className="font-semibold text-base mb-1.5"
          style={{ fontFamily: "var(--font-display), system-ui, sans-serif", color: "#14233b" }}
        >
          {title}
        </p>
        <motion.div
          animate={prefersReduced ? {} : { width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ height: 1, backgroundColor: "#b0894f", marginBottom: "0.75rem" }}
        />
        <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
          {benefit}
        </p>
      </div>
    </motion.div>
  );
}
