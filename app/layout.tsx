import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Майстерня Ковбас",
  description: "Мережа магазинів",
  icons: {
    icon: "/majsternya_kovbas/icon.png",
  },
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

          <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/40 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 md:h-20 items-center">
              <MainNav />
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <SiteFooter />

        </div>
      </body>
    </html>
  );
}
