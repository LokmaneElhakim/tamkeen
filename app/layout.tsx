import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "تمكين غرداية 2025 | Tamkeen Ghardaia",
  description:
    "تمكين هو حدث شبابي يُقام في بريان، ولاية غرداية، يهدف إلى تأهيل وتمكين الشباب في مجالات التوظيف وريادة الأعمال من خلال ورشات تدريب، تحديات ميدانية، وشراكات مع مؤسسات محلية",
  icons: {
    icon: "/tamkeen-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
