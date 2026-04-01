"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import type { Product } from "@/lib/data/products";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Left — Image Gallery */}
      <div className="lg:w-1/2">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src={product.images[activeImage]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="mt-3 flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                activeImage === index
                  ? "border-accent"
                  : "border-border hover:border-muted"
              }`}
            >
              <Image
                src={image}
                alt={`${product.name} — ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right — Product Info */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-2 text-2xl font-bold text-accent">
          ₺{product.price}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {product.description}
        </p>

        {/* Features */}
        <div className="mt-6 border-t border-border pt-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-primary">
            Ürün Özellikleri
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 text-sm text-muted"
              >
                <Check size={16} className="shrink-0 text-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart */}
        <Button
          onClick={handleAddToCart}
          disabled={added}
          size="lg"
          className="mt-8 w-full sm:w-auto"
        >
          {added ? "Sepete Eklendi ✓" : "Sepete Ekle"}
        </Button>
      </div>
    </div>
  );
}
