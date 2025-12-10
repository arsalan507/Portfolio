import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsalan Ahmed - Full Stack Developer",
  description: "Full Stack Developer based in Bengaluru, India. Specializing in React, Next.js, Node.js, and TypeScript. Building innovative web applications and scalable solutions.",
  keywords: ["Arsalan Ahmed", "Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Web Developer", "Bengaluru"],
  authors: [{ name: "Arsalan Ahmed" }],
  openGraph: {
    title: "Arsalan Ahmed - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
