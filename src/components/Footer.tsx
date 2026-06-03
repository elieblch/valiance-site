import Link from "next/link";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Individuel", href: "/individuel" },
  { label: "Collectif", href: "/collectif" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0c1626", color: "#9fb0c2" }}>
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <span
              className="block text-2xl font-semibold mb-3"
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                color: "#f7f4ee",
              }}
            >
              Valiance
            </span>
            <p className="text-sm leading-relaxed" style={{ color: "#9fb0c2" }}>
              Cabinet de coaching, conseil et formation fondé par Nicolas
              Blecher.
              <br />
              Une exigence d&apos;efficacité, au service de l&apos;humain.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation secondaire">
            <p
              className="text-xs uppercase tracking-widest font-medium mb-5"
              style={{ color: "#b0894f" }}
            >
              Navigation
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coordonnées */}
          <div>
            <p
              className="text-xs uppercase tracking-widest font-medium mb-5"
              style={{ color: "#b0894f" }}
            >
              Coordonnées
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+33660980685" className="footer-nav-link">
                  +33 (0)6 60 98 06 85
                </a>
              </li>
              <li>
                <a href="mailto:contact@valiance.fr" className="footer-nav-link">
                  contact@valiance.fr
                </a>
              </li>
              <li style={{ color: "#9fb0c2" }}>
                24, Prairie Souville
                <br />
                60950 Ermenonville
              </li>
              <li>
                <a
                  href="https://fr.linkedin.com/in/nicolasblecher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                  aria-label="Profil LinkedIn de Nicolas Blecher"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t text-xs"
          style={{ borderColor: "rgba(159,176,194,0.15)", color: "#9fb0c2" }}
        >
          <p>© 2025 Valiance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
