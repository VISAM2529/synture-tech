import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synture Tech | Building Digital Solutions That Scale",
  description: "Premium website, app, ERP, and software development services. Transforming ideas into enterprise-grade solutions.",
  keywords: ["Software Development", "ERP Solutions", "Web Design", "App Development", "Custom Software", "Synture Tech"],
  authors: [{ name: "Synture Tech" }],
  openGraph: {
    title: "Synture Tech - Digital Solutions",
    description: "Building Digital Solutions That Scale.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Defaulting to dark for that "Tech premium" feel
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
