import type { Metadata } from "next";
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "George Stimson — Portfolio",
  description: "Data engineering portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${pressStart.variable} ${jetbrainsMono.className} overflow-x-hidden antialiased`}
      >
        <div className="relative min-h-dvh">
          <div
            className="pointer-events-none fixed inset-0 z-0 bg-[#0b1120]"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[1.32]"
            style={{ backgroundImage: "url('/page-backdrop.jpg')" }}
            aria-hidden
          />
          <div
            className="pointer-events-none fixed inset-0 z-0 bg-[#0b1120]/22"
            aria-hidden
          />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
