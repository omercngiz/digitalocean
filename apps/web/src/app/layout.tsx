import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "cengizdev",
  description: "cengizdev — Web Uygulaması",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="flex min-h-dvh flex-col font-[family-name:var(--font-montserrat)] text-primary antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
