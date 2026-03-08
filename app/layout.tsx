import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import { getSearchIndex } from "@/lib/search-index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Morita's Vibe Coding Journey",
    template: "%s | Morita's Vibe Coding Journey",
  },
  description: "가이드, 튜토리얼, 그리고 AI와 함께 바이브 코딩을 하며 배운 것들을 기록하는 개인 문서 사이트.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchItems = getSearchIndex();

  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Header />
        <CommandPalette searchItems={searchItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
