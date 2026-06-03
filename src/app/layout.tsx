import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Valiance, Coaching · Conseil · Formation pour dirigeants & équipes",
    template: "%s | Valiance",
  },
  description:
    "Nous aidons dirigeants, managers et équipes à surmonter leurs difficultés et atteindre leurs objectifs, durablement. Coaching individuel et collectif, certifié HEC.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "icon", url: "/icon-512.png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Valiance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
