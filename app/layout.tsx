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
  title: {
    default: "Exponential Dev",
    template: "%s - Exponential Dev",
  },
  description:
    "This is a landing page for Exponential Dev where the services offered by them are listed and projects they have made. They are team of two people which are ready to deliver software solutions and can be contacted for discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="G-ecnXsuzM_QGhL3KRifec9IhTndAYNGlgjzBtVsOWg"
        />
      </head>

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
