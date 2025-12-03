import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "OptimaCall - Centre d'appels externalisé 24/7",
  description: "OptimaCall, votre partenaire de confiance pour l'externalisation de votre accueil téléphonique. Service professionnel disponible 24/7.",
  keywords: "call center, centre d'appels, accueil téléphonique, externalisation, service client, 24/7, OptimaCall",
  openGraph: {
    title: "OptimaCall - Centre d'appels externalisé 24/7",
    description: "Votre partenaire de confiance pour l'externalisation de votre accueil téléphonique.",
    images: ["/logo-optimacall-transparent.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}