import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://aestheticgardener.net";
const defaultOgImage = `${SITE_URL}/images/client/heromain.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aesthetic Gardener | Professional Landscaping & Lawn Care | Holland MI",
    template: "%s | Aesthetic Gardener - Landscaping Holland MI",
  },
  description:
    "Professional landscaping, lawn care, snow removal, and hardscaping services in Holland MI and West Michigan. 21+ years of excellence. Free quotes. Call (616) 218-2698.",
  keywords: [
    "landscaping Holland MI",
    "lawn care Holland Michigan",
    "snow removal West Michigan",
    "hardscaping Holland MI",
    "landscape design Holland",
    "professional lawn care",
    "landscape maintenance",
    "patio installation Holland MI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aesthetic Gardener",
    title: "Aesthetic Gardener | Professional Landscaping & Lawn Care | Holland MI",
    description:
      "Professional landscaping, lawn care, snow removal, and hardscaping in Holland MI and West Michigan. 21+ years of excellence. Free quotes.",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Aesthetic Gardener - Professional landscaping and lawn care in Holland Michigan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Gardener | Professional Landscaping & Lawn Care | Holland MI",
    description:
      "Professional landscaping, lawn care, snow removal, and hardscaping in Holland MI and West Michigan. 21+ years of excellence.",
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aesthetic Gardener",
  image: defaultOgImage,
  "@id": `${SITE_URL}/#localbusiness`,
  url: SITE_URL,
  telephone: "(616) 218-2698",
  email: "info@aestheticgardener.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "199 E 34th St #6",
    addressLocality: "Holland",
    addressRegion: "MI",
    postalCode: "49423",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.7875,
    longitude: -86.1089,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$$",
  areaServed: [
    "Holland, MI",
    "Zeeland, MI",
    "Grand Haven, MI",
    "Hudsonville, MI",
    "West Michigan",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landscaping Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Landscaping Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Lawn Care & Maintenance" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Snow Removal" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Hardscaping" },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    reviewCount: "500",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* For Google Analytics: use next/script with strategy="afterInteractive" to defer loading */}
      </head>
      <body className={`${cormorant.variable} ${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
