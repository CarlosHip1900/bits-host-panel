import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";

const aleo = Aleo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-aleo",
});

export const metadata: Metadata = {
  title: "Bit Dashboard",
  description: "Easy to use",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={aleo.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.6/app/ci.min.css"
        />
      </head>

      <body className="antialiased min-h-screen text-white">
        <div className="min-h-screen py-5 container mx-auto">

        </div>
      </body>
    </html>
  );
}