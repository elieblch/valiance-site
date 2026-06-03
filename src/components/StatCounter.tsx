"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** When true, only prefix is shown (no animated count) — for text-only stats */
  textOnly?: boolean;
  label: string;
  sublabel?: string;
  delay?: number;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  textOnly = false,
  label,
  sublabel,
  delay = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(prefersReduced ? value : 0);
  const started = useRef(false);

  useEffect(() => {
    if (textOnly || prefersReduced) { setCount(value); return; }
    if (!isInView || started.current) return;
    started.current = true;

    const delayMs = delay * 1000;
    const timer = setTimeout(() => {
      const duration = 1400;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [isInView, value, delay, prefersReduced]);

  return (
    <div ref={ref} className="text-center px-4">
      <p
        style={{
          fontFamily: "var(--font-display), system-ui, sans-serif",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 700,
          color: "#b0894f",
          lineHeight: 1.1,
          marginBottom: "0.25rem",
        }}
      >
        {textOnly ? prefix : `${prefix}${count}${suffix}`}
      </p>
      <p className="text-sm font-medium uppercase tracking-wide mb-1" style={{ color: "#f7f4ee" }}>
        {label}
      </p>
      {sublabel && (
        <p className="text-xs" style={{ color: "#9fb0c2" }}>
          {sublabel}
        </p>
      )}
    </div>
  );
}
