import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://myltech.example.com"),
  title: {
    default: "MYL-Tech | Enterprise IT Solutions",
    template: "%s | MYL-Tech",
  },
  description: "Production-grade IT solutions for the modern enterprise. We specialize in AI/ML, SaaS, Cloud architecture, and UI/UX design.",
  openGraph: {
    title: "MYL-Tech | Enterprise IT Solutions",
    description: "Production-grade IT solutions for the modern enterprise. We specialize in AI/ML, SaaS, Cloud architecture, and UI/UX design.",
    url: "https://myltech.example.com",
    siteName: "MYL-Tech",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
