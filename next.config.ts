import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.valiance.fr" },
    ],
  },
  async redirects() {
    return [
      { source: "/coaching", destination: "/individuel", permanent: true },
      { source: "/conseil", destination: "/collectif", permanent: true },
      { source: "/formation", destination: "/collectif", permanent: true },
    ];
  },
};

export default nextConfig;
