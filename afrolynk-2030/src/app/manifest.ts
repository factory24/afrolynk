import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Afrolynk — Bridging African & European Innovation",
    short_name: "Afrolynk",
    description:
      "Afrolynk connects African startups with the experts, corporates, investors and markets they need to grow. Innovate · Connect · Accelerate.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8b2536",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
