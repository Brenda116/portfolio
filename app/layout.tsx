import type { Metadata } from "next";
import { Parisienne, Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";

const script = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const body = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Brenda Anastasya | Machine Learning & Frontend",
  description:
    "Informatics Engineering student passionate about machine learning and data with a skill in design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${script.variable} ${serif.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
