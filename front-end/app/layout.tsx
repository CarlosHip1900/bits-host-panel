import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { NavBar } from "./components/navbar";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Bit Dashboard",
  description: "Easy to use",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.6/app/ci.min.css"
        />
      </head>

      <body className="min-h-screen bg-[#080808] text-white">
        <div className="min-h-screen py-5 container mx-auto">
          <header className="pt-5">
            <div className="max-w-[1650px] mx-auto flex justify-center">
              { NavBar() }
            </div>
          </header>
        </div>
      </body>
    </html>
  );
}