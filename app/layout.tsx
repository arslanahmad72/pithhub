import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pithhub.com"), // update if different

  title: {
    default: "PithHub | Business Systems & Digital Solutions",
    template: "%s | PithHub",
  },

  description:
    "We design simple digital systems that remove confusion, reduce dependence on people, and give business owners real control over operations, sales, and visibility.",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },

  /* -----------------------------
     Open Graph defaults
     ----------------------------- */
  openGraph: {
    siteName: "PithHub",
    type: "website",
    images: [
      {
        url: "/og/pithhub-og.jpg", // 1200×630 clean brand image
        width: 1200,
        height: 630,
        alt: "PithHub — Business Systems & Digital Solutions",
      },
    ],
  },

  /* -----------------------------
     Twitter defaults
     ----------------------------- */
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-bg text-text">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
