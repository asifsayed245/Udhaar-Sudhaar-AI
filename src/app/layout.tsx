import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Udhaar Sudhaar AI - Bill Photo Se Billing | Telegram Bot for Small Business",
  description:
    "India's simplest Telegram bot for small business billing and udhaari tracking. Photo bhejo, bill ban jaye. No app download needed. Hindi + English supported.",
  keywords: [
    "udhaar sudhaar",
    "udhaari tracking",
    "telegram billing bot",
    "kirana store billing",
    "bill management app India",
    "small business billing India",
  ],
  openGraph: {
    title: "Udhaar Sudhaar AI - Smart Billing for Small Business",
    description:
      "Bill ka photo lo, baaki bot sambhal lega. Free mein try karo.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoDevanagari.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
