import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "./_components/container";
import { GoogleAnalytics } from "@next/third-parties/google";
import process from "process";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const description = "Personal portfolio site of Eric Anastas";
const url = "https://ericanastas.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { template: "ericanastas.com - %s", absolute: "ericanastas.com" },
  description: description,
  authors: { name: "Eric Anastas", url: url },
  openGraph: {
    title: "ericanastas.com",
    description: description,
    url: url,
    images: [
      {
        height: 670,
        width: 1280,
        url: "/images/og-image.png",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
        {process.env.NODE_ENV === "production" && <Analytics />}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>

      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-50TMH7J6M9" />
      )}
    </html>
  );
}
