import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Hoş Geldiniz
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted sm:text-xl">
        Modern, hızlı ve güvenilir çözümler üreten bir yazılım platformu.
      </p>
      <Link
        href="#urunler"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Ürünleri Keşfet
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
