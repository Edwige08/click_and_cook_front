import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Cook & Click",
  description: "Blog de recettes",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="bg-(--lightColor)">
        {children}
        <Footer />
      </body>
    </html>
  );
}
