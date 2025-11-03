import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import config from "../config/config.json";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: config.site.title,
  description: config.metadata.meta_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={config.site.favicon} />
      <body className={`${ibmPlexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
