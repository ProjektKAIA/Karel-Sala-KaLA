import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Alte Grossbuchstaben-URLs aus vorheriger Website-Version (Google hat diese indexiert)
      {
        source: "/KONTAKT",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/IMPRESSUM",
        destination: "/impressum",
        permanent: true,
      },
      {
        source: "/DATENSCHUTZ",
        destination: "/datenschutz",
        permanent: true,
      },
      {
        source: "/ANKAUF-FORMULAR",
        destination: "/#formular",
        permanent: true,
      },
      {
        source: "/KONTAKTFORMULAR",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/SIND-AUTOHAeNDLER-SERIOeS",
        destination: "/#serioes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
