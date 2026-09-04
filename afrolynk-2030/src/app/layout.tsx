import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afrolynk.com"),
  title: {
    default: "Afrolynk — Bridging African & European Innovation",
    template: "%s · Afrolynk",
  },
  description:
    "Afrolynk connects African startups, entrepreneurs and innovation ecosystems with the experts, corporates, investors and markets they need to grow. Founded in Berlin in 2016. Innovate · Connect · Accelerate.",
  applicationName: "Afrolynk",
  keywords: [
    "Afrolynk",
    "African startups",
    "Africa Europe innovation",
    "startup ecosystem Berlin",
    "diaspora innovation",
    "venture building Africa",
    "African entrepreneurs",
    "Ghana Germany startups",
    "Moses Acquah",
    "Afrolynk Conference",
    "Factory24",
  ],
  authors: [{ name: "Afrolynk" }],
  creator: "Afrolynk",
  publisher: "Afrolynk",
  category: "technology",
  openGraph: {
    title: "Afrolynk — Bridging African & European Innovation",
    description:
      "Connecting African startups with the experts, corporates, investors and markets they need to grow. Innovate · Connect · Accelerate.",
    url: "https://afrolynk.com",
    siteName: "Afrolynk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/img/carousel-3.jpg",
        width: 1200,
        height: 630,
        alt: "Afrolynk — bridging African and European innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrolynk — Bridging African & European Innovation",
    description:
      "Connecting African startups with experts, corporates, investors and global markets. Since 2016.",
    site: "@afrolynk",
    images: ["/img/carousel-3.jpg"],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Afrolynk",
  url: "https://afrolynk.com",
  logo: "https://afrolynk.com/img/Afrolynk-Logo-White.png",
  description:
    "A bridge between the African and European startup ecosystems — connecting founders, experts, investors and corporates to build ventures that create value for good.",
  foundingDate: "2016",
  founder: { "@type": "Person", name: "Moses Acquah" },
  email: "info@afrolynk.com",
  telephone: "+49 1520 9295402",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Neue Bahnhofstraße 28",
    postalCode: "10245",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  sameAs: [
    "https://www.linkedin.com/company/afrolynk/",
    "https://www.facebook.com/Afrolynk",
    "https://twitter.com/afrolynk",
    "https://www.instagram.com/afrolynk_/",
    "https://www.youtube.com/channel/UCjNXmCZGJWShsa5SPhsJtDg",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-body font-sans selection:bg-gold selection:text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
