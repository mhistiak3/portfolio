import type { Metadata } from "next";
import config from "../config/config.json";
import "../css/globals.css";

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
       <link rel="shortcut icon" href={config.site.favicon} />
      <meta property="og:image" content={config.site.image} />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href={`https://fonts.googleapis.com/css2?family=${config.style.font}&display=swap`}
        rel="stylesheet"
      />
     </head>
      <body>{children}</body>
    </html>
  );
}
