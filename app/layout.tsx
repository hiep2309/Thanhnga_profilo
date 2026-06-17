import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiệp — Personal Profile",
  description:
    "A soft, personal space for memories, photos, and favorite things.",
};

export const viewport: Viewport = {
  themeColor: "#FFF8F8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${nunito.variable} ${cormorant.variable} ${dancingScript.variable} scroll-smooth`}
    >
      <body className="bg-cream text-charcoal antialiased">
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
