import type { Metadata } from "next";
import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/store/product-card";

export const metadata: Metadata = {
  title: "Mağaza — cengizdev",
  description:
    "Yazılımcılara özel tasarım kahve kupaları. Kodlama maratonlarınızın vazgeçilmez yoldaşları.",
};

export default function StorePage() {
  const products = getAllProducts();

  return (
    <>
      {/* Hero Banner */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
          Mağaza
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted">
          Yazılımcılara özel tasarım ürünler
        </p>
      </section>

      {/* Product Grid */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
