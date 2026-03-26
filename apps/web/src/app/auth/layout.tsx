import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giriş / Kayıt — cengizdev",
  description: "cengizdev hesabınıza giriş yapın veya yeni hesap oluşturun.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
