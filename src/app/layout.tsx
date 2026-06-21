import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeluxDetail — Premium Car Detailing | Acabado de Concesionario",
  description: "Devuélvele a tu vehículo el acabado que merece. Servicios de detailing profesional: Ceramic Coating, Paint Correction, Interior Deep Cleaning y más. Reserva online.",
  keywords: ["car detailing", "premium detailing", "ceramic coating", "paint correction", "car care", "DeluxDetail"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DeluxDetail — Premium Car Detailing",
    description: "Devuélvele a tu vehículo el acabado que merece. Servicios de detailing profesional con resultados de concesionario.",
    url: "https://delux-detail.pages.dev",
    siteName: "DeluxDetail",
    type: "website",
    images: [
      {
        url: "/images/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "DeluxDetail Premium Car Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeluxDetail — Premium Car Detailing",
    description: "Devuélvele a tu vehículo el acabado que merece. Reserva online ahora.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              border: '1px solid #2A2A2A',
              color: '#FAFAFA',
            },
          }}
        />
      </body>
    </html>
  );
}
