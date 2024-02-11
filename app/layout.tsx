import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Exponential Dev",
  description: "This is a landing page for Exponential Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <body
        className={`${montserrat.className} bg-gradient-to-l from-slate-950 via-slate-900 to-slate-950`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
