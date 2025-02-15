import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModuleProvider } from "@/context/ModuleContext";

const interBoldSans = localFont({
  src: "./fonts/Inter-ExtraBold.ttf",
  variable: "--font-interBold-sans",
  weight: "100 900",
});
const interMediumSans = localFont({
  src: "./fonts/Inter-Medium.ttf",
  variable: "--font-interMedium-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Level-up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interBoldSans.variable} ${interMediumSans.variable} antialiased`}
      >
        <ModuleProvider>{children}</ModuleProvider>
      </body>
    </html>
  );
}
