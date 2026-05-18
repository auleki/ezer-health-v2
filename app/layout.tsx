import type { Metadata } from "next";
import { fontSans, fontSerif } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezerhealthcare.com"),
  title: "Ezerhealthcare | The Intelligence Behind Better Care",
  description: "Ezerhealthcare unites high-performance EHR workflows, automated remote monitoring and ambient AI scribing into a single, clinical-grade ecosystem.",
  keywords: [
    "EHR",
    "Electronic Health Records",
    "AI Scribe",
    "Ambient Clinical Intelligence",
    "Remote Patient Monitoring",
    "RPM",
    "Ezer",
    "FHIR Interoperability",
    "Healthcare AI",
    "Clinical Intelligence",
    "Ezer Labs",
    "Medical Scribe"
  ],
  authors: [{ name: "Ezer Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ezerhealthcare.com",
    title: "Ezerhealthcare | The Intelligence Behind Better Care",
    description: "Ezerhealthcare unites high-performance EHR workflows, automated remote monitoring and ambient AI scribing into a single, clinical-grade ecosystem.",
    siteName: "Ezerhealthcare",
    images: [
      {
        url: "/unified-healthcare.png",
        width: 1200,
        height: 630,
        alt: "Ezerhealthcare Clinical Intelligence Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezerhealthcare | The Intelligence Behind Better Care",
    description: "Ezerhealthcare unites high-performance EHR workflows, automated remote monitoring and ambient AI scribing into a single, clinical-grade ecosystem.",
    images: ["/unified-healthcare.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://ezerhealthcare.com/#organization",
      "name": "Ezerhealthcare",
      "url": "https://ezerhealthcare.com",
      "logo": "https://ezerhealthcare.com/favicon.ico",
      "description": "Ezerhealthcare unites high-performance EHR workflows, automated remote monitoring and ambient AI scribing into a single, clinical-grade ecosystem.",
      "sameAs": [
        "https://linkedin.com/company/ezerhealthcare",
        "https://x.com/ezerhealthcare"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://ezerhealthcare.com/#software",
      "name": "Ezerhealthcare Clinical Suite",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web, Mobile, Desktop",
      "url": "https://ezerhealthcare.com",
      "description": "HIPAA-compliant clinical intelligence suite featuring Ambient AI Scribing, Remote Patient Monitoring, and FHIR-native EHR workflows."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} min-h-full flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
