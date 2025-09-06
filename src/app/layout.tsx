import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umer Patel - Full Stack Developer",
  description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies and creating innovative digital solutions.",
  keywords: ["Umer Patel", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Umer Patel" }],
  creator: "Umer Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umerpatel1.vercel.app",
    title: "Umer Patel - Full Stack Developer",
    description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies.",
    siteName: "Umer Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umer Patel - Full Stack Developer",
    description: "Portfolio of Umer Patel, a passionate full-stack developer specializing in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
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
