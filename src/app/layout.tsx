import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-headline",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Orbit Tech Solutions | Starlink & Internet Experts in DMV",
  description: "Professional Starlink installation, mesh WiFi setup, and business internet solutions in the DMV area. Your trusted local technology partner.",
  keywords: "Starlink installation, mesh WiFi, business internet, DMV, Virginia, Maryland, Washington DC",
  authors: [{ name: "Orbit Tech Solutions" }],
  creator: "Orbit Tech Solutions",
  publisher: "Orbit Tech Solutions",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbittech.com",
    siteName: "Orbit Tech Solutions",
    title: "Orbit Tech Solutions | Starlink & Internet Experts in DMV",
    description: "Professional Starlink installation, mesh WiFi setup, and business internet solutions in the DMV area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Tech Solutions | Starlink & Internet Experts in DMV",
    description: "Professional Starlink installation, mesh WiFi setup, and business internet solutions in the DMV area.",
  },
  icons: {
    icon: "/Orbit tech favicon black (3).png",
    shortcut: "/Orbit tech favicon black (3).png",
    apple: "/Orbit tech favicon black (3).png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
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

