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
  title: "DeluxDetail — Detailing Profesional Monterrey NL | Ceramic Coating & Paint Correction",
  description: "Taller de detailing profesional en Monterrey, NL. Ceramic Coating IGL, Paint Correction, Interior Deep Clean. 487+ vehículos detallados. Garantía escrita 3 años. Reserva por WhatsApp.",
  keywords: ["car detailing Monterrey", "detailing NL", "ceramic coating Mexico", "paint correction Monterrey", "DeluxDetail", "detailing profesional Mexico", "lavado premium San Pedro Garza García"],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DeluxDetail — Detailing Profesional Monterrey NL",
    description: "Taller de detailing profesional en Monterrey. Ceramic Coating IGL con garantía de 3 años. 487+ vehículos, 127 reseñas 5 estrellas. Reserva ahora.",
    url: "https://delux-detail.pages.dev",
    siteName: "DeluxDetail Monterrey",
    type: "website",
    images: [
      {
        url: "/images/hero-car.jpg",
        width: 1200,
        height: 630,
        alt: "DeluxDetail — Taller de detailing profesional en Monterrey, NL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeluxDetail — Detailing Profesional Monterrey NL",
    description: "Taller de detailing profesional en Monterrey. Ceramic Coating IGL con garantía de 3 años. Reserva por WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
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
