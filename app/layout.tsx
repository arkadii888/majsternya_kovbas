import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Майстерня Ковбас",
  description: "Мережа магазинів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={cn("font-sans", geist.variable, "dark")}>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <div className="relative flex min-h-screen flex-col">

          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center">
              <MainNav />
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-sm leading-loose text-muted-foreground">
                © 2026
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
