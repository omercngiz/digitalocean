import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getAllProducts, getProductBySlug } from "@/lib/data/products";
import { ProductDetail } from "@/components/store/product-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Mağaza — cengizdev`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center gap-1.5 px-4 py-4 text-sm text-muted">
          <Link
            href="/store"
            className="transition-colors hover:text-primary"
          >
            Mağaza
          </Link>
          <ChevronRight size={14} className="shrink-0" />
          <span className="truncate text-primary">{product.name}</span>
        </div>
      </section>

      {/* Product Detail */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <ProductDetail product={product} />
        </div>
      </section>
    </>
  );
}
