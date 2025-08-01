import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayyan's Portfolio",
  description: "A showcase of my work and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
// RootLayout.tsx
<html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-white bg-gradient-to-br from-cyan-900 via-black to-emerald-800
`}>

    <Navbar />
      {children}
      <Footer/>
  </body>
</html>

  );
}
