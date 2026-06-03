"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Individuel", href: "/individuel" },
  { label: "Collectif", href: "/collectif" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const LOGO_URL =
  "https://www.valiance.fr/wp-content/uploads/2024/09/Valiance-Logo-Horizontal-Brand.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory-pure border-b border-hairline shadow-sm"
            : "bg-transparent"
        }`}
        style={{ borderColor: scrolled ? "#e6dfd2" : "transparent" }}
      >
        <div className="container-site flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Valiance, accueil">
            {!logoError ? (
              <Image
                src={LOGO_URL}
                alt="Valiance"
                width={160}
                height={40}
                className="h-8 lg:h-9 w-auto"
                style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span
                className="font-display font-semibold text-xl tracking-tight"
                style={{
                  color: scrolled ? "#14233b" : "#f7f4ee",
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                }}
              >
                Valiance
              </span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: scrolled ? "#3a4049" : "rgba(247,244,238,0.9)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#b0894f")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = scrolled
                    ? "#3a4049"
                    : "rgba(247,244,238,0.9)")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm py-2.5 px-5"
              style={{ backgroundColor: "#b0894f", borderColor: "#b0894f" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#94703a")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#b0894f")
              }
            >
              Prendre contact
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "#14233b" : "#f7f4ee",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "#14233b" : "#f7f4ee",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: scrolled || menuOpen ? "#14233b" : "#f7f4ee",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col lg:hidden transition-all duration-300"
        style={{
          backgroundColor: "#0c1626",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="container-site flex items-center h-16 justify-end" />
        <nav
          className="flex flex-col items-center justify-center flex-1 gap-8"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl font-medium text-on-dark transition-colors duration-200 hover:text-brass"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                color: "#f7f4ee",
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4"
            style={{ backgroundColor: "#b0894f", borderColor: "#b0894f" }}
            onClick={() => setMenuOpen(false)}
          >
            Prendre contact
          </Link>
        </nav>
      </div>
    </>
  );
}
