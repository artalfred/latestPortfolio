import type { Metadata } from "next";
import { Inter, Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";

import blurd from "../public/background/blurd.avif";
import Footer from "./footer";
import Header from "./header";

export const metadata: Metadata = {
  title: "Art Alfred Bernales",
  description:
    "I help brands grow through bold visuals and thoughtful digital experiences that drive results.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // match what you need
  style: ["normal", "italic"],
  variable: "--font-fira-sans-condensed",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaSansCondensed.variable} antialiased`}
      >
        <Header />
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/background/default.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
