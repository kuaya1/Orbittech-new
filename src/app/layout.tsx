import type { Metadata } from "next";
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData, localBusinessSchema, speakableSchema } from "@/components/StructuredData";

// Temporarily remove Google Fonts to fix build issue
// const inter = Inter({ 
//   subsets: ["latin"], 
//   variable: "--font-body",
//   display: 'swap',
// });

// const plusJakartaSans = Plus_Jakarta_Sans({ 
//   subsets: ["latin"], 
//   variable: "--font-headline",
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: "Starlink Installation DMV | Same-Day Service VA, MD & DC | Certified Installers | (571) 999-6915",
  description: "⚡ Same-day Starlink & Kuiper installation in Northern VA, Maryland & DC. 500+ installs, HOA-approved, tree obstruction experts. Get 250+ Mbps today! Free quote: (571) 999-6915",
  keywords: "Starlink installation McLean, Amazon Kuiper installer Northern Virginia, Starlink roof mount HOA approval Maryland, same-day satellite internet setup Fairfax County, Starlink business installation Tysons Corner, tree obstruction Starlink solutions DMV, emergency Starlink installation storm damage VA, federal contractor Starlink installation DC metro",
  authors: [{ name: "The Orbit Tech" }],
  creator: "The Orbit Tech",
  publisher: "The Orbit Tech", 
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theorbittech.com",
    siteName: "The Orbit Tech",
    title: "Starlink Installation DMV | Same-Day Service VA, MD & DC | (571) 999-6915",
    description: "⚡ Same-day Starlink & Kuiper installation in Northern VA, Maryland & DC. 500+ installs, HOA-approved, tree obstruction experts. Get 250+ Mbps today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starlink Installation DMV | Same-Day Service VA, MD & DC | (571) 999-6915",
    description: "⚡ Same-day Starlink & Kuiper installation in Northern VA, Maryland & DC. 500+ installs, HOA-approved, tree obstruction experts. Get 250+ Mbps today!",
  },
  icons: {
    icon: "/Orbit tech favicon black (3).png",
    shortcut: "/Orbit tech favicon black (3).png",
    apple: "/Orbit tech favicon black (3).png",
  },
  other: {
    "geo.region": "US-VA",
    "geo.placename": "McLean, Virginia",
    "geo.position": "38.9338;-77.2297",
    "ICBM": "38.9338, -77.2297",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={speakableSchema} />
      </head>
      <body className="font-body bg-brand-white text-text-primary min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

