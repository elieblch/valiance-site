"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number | null;
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: "#e6dfd2" }}
    >
      <button
        className="w-full flex justify-between items-center py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        id={`${id}-btn`}
      >
        <span
          className="font-medium text-base pr-4"
          style={{ color: "#14233b" }}
        >
          {item.title}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            d="M5 7.5l5 5 5-5"
            stroke="#b0894f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        style={{
          maxHeight: isOpen ? "2000px" : "0",
          overflow: "hidden",
          transition: "max-height 400ms ease-in-out",
        }}
      >
        <div className="pb-6 text-sm leading-relaxed" style={{ color: "#3a4049" }}>
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items, defaultOpen = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          id={`accordion-${i}`}
        />
      ))}
    </div>
  );
}
