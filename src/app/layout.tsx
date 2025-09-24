import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Angel A. Loaiza",
  description: "Angel A. Loaiza's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/al-logo.jpg" type="image/jpeg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pVbQaFA7GDj7kwsbvlqjPzOOobHCwXRo1u4r5oT4b8X3CeE+V4Q/jWvIuaTHVtZ8k5jIU2tP9LkRCpHhKJqZKg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="root-layout">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}

