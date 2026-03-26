import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DigitalOcean",
  description: "DigitalOcean Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
