import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@mantine/core/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Wooler | Software Engineer - Coming Soon",
  description:
    "Welcome to my personal website! This will let you know what I'm all about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          animation: "gradient 10s linear infinite",
          alignItems: "center",
          background:
            "linear-gradient( -45deg, var(--moody-theme-1), var(--moody-theme-2), var(--moody-theme-3), var(--moody-theme-4), var(--moody-theme-5), var(--moody-theme-6))",
          backgroundSize: "400%",
          display: "flex",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
