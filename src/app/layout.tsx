import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "./_components/container";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ericanastas.com"),
  title: { template: "ericanastas.com - %s", absolute: "ericanastas.com" },
  description: `Personal portfolio website of Eric Anastas`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
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
      </body>
    </html>
  );
}
