import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { SITE_CONFIG } from "@/constants";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: SITE_CONFIG.keywords,

  authors: [
    {
      name: SITE_CONFIG.name,
    },
  ],

  creator: SITE_CONFIG.name,

  openGraph: {
    type: "website",
    locale: "en_US",

    url: SITE_CONFIG.url,

    title: SITE_CONFIG.title,

    description: SITE_CONFIG.description,

    siteName: SITE_CONFIG.name,
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_CONFIG.title,

    description: SITE_CONFIG.description,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}