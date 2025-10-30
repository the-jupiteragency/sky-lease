import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const schbistedGrotesk = Schibsted_Grotesk({
  variable: "--font-schbisted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky Lease",
  description:
    "Discover Your Perfect Sky Lease: Explore, Compare, and Secure Your Ideal Aviation Lease Today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schbistedGrotesk.variable} ${martianMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
