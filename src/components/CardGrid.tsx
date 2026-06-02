import Reveal from "./Reveal";

interface CardItem {
  title: string;
  description?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

export default function CardGrid({ items, columns = 3 }: CardGridProps) {
  const colClass =
    columns === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`grid ${colClass} gap-4`} role="list">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.04}>
          <li
            className="p-6 border rounded-[4px] h-full"
            style={{
              backgroundColor: "#fcfaf6",
              borderColor: "#e6dfd2",
            }}
          >
            {item.description ? (
              <>
                <h3
                  className="font-medium mb-2 text-base"
                  style={{
                    color: "#14233b",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.description}
                </p>
              </>
            ) : (
              <p
                className="font-medium text-sm"
                style={{ color: "#3a4049" }}
              >
                {item.title}
              </p>
            )}
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
