import type { Metadata, Viewport } from "next";
import { Oswald, Raleway } from "next/font/google";
import { siteContent } from "../src/data/site-content";
import { getRequestSiteUrl } from "../src/lib/site-url";
import "./globals.css";

const heading = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Raleway({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getRequestSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Gimnasio en Celaya | 4U Wellness Gym",
      template: "%s | 4U Wellness Gym",
    },
    description: siteContent.seo.description,
    applicationName: siteContent.name,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: "/",
      siteName: siteContent.name,
      title: "Gimnasio en Celaya | 4U Wellness Gym",
      description: siteContent.seo.description,
      images: [
        {
          url: siteContent.assets.heroImage,
          alt: "Comunidad 4U Wellness Gym",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gimnasio en Celaya | 4U Wellness Gym",
      description: siteContent.seo.description,
      images: [siteContent.assets.heroImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050705",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
