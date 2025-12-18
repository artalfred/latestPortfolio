import type { Metadata } from "next";
import "./globals.css";

import blurd from "../public/background/blurd.avif";
import Footer from "./footer";
import Header from "./header";

export const metadata: Metadata = {
  title: "Art Alfred Bernales",
  description:
    "I help brands grow through bold visuals and thoughtful digital experiences that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
