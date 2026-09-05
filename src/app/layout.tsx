import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TickerBar from "@/components/TickerBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://onecapinvestment.ng";
const siteDescription =
  "OneCap Investment Limited is a Nigerian private investment and holding company deploying proprietary capital into high-impact alternative assets, real estate infrastructure, and transition energy across Sub-Saharan Africa. Majority shareholder of FundCo Capital Managers Limited.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OneCap Investment Limited | Strategic Capital. Sustainable Impact.",
    template: "%s | OneCap Investment Limited",
  },
  description: siteDescription,
  keywords: [
    "Nigerian private equity",
    "private investment holding company",
    "institutional investment Nigeria",
    "FundCo Capital Managers",
    "West Africa infrastructure investment",
    "transition energy investment Nigeria",
    "OneCap Investment Limited",
    "alternative assets Nigeria",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "OneCap Investment Limited",
    title: "OneCap Investment Limited | Strategic Capital. Sustainable Impact.",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneCap Investment Limited",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneCap Investment Limited | Strategic Capital. Sustainable Impact.",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OneCap Investment Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/onecap-logo-full.png`,
  description: siteDescription,
  subOrganization: {
    "@type": "Organization",
    name: "FundCo Capital Managers Limited",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <TickerBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
