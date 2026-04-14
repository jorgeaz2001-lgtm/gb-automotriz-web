import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GB Automotriz | Agencia Multimarca en Culiacán",
  description: "Grupo Líder Automotriz en el Noroeste. Venta de autos nuevos y seminuevos. Ford, Jeep, Mazda, Lincoln, Peugeot, Fiat, Dodge y Ram. Financiamiento disponible.",
  keywords: "autos, coches, vehículos, agencia automotriz, Culiacán, Sinaloa, Ford, Jeep, Mazda, Lincoln, seminuevos",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
