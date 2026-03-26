import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "İletişim — cengizdev",
  description: "Bizimle iletişime geçin. Web tasarımı ve e-ticaret çözümleri.",
};

export default function ContactPage() {
  return <ContactContent />;
}
