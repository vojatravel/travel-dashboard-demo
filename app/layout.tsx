import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { FloatingCta } from "@molecules/floating-cta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          data-jsd-embedded
          data-key="aad52487-10f3-44bb-addc-281c3986a876"
          data-base-url="https://jsd-widget.atlassian.com"
          src="https://jsd-widget.atlassian.com/assets/embed.js"
          async
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <FloatingCta />
      </body>
    </html>
  );
}
