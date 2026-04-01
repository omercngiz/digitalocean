"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();

  const isEmpty = items.length === 0;

  return (
    <>
      {/* Hero Banner */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
          Sepetim
        </h1>
        <p className="mt-4 max-w-lg text-lg text-muted">
          {isEmpty
            ? "Sepetinizde henüz ürün bulunmuyor."
            : `Sepetinizde ${items.length} ürün var.`}
        </p>
      </section>

      {/* Cart Content */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          {isEmpty ? (
            /* Empty Cart */
            <div className="flex flex-col items-center py-12 text-center">
              <ShoppingCart size={64} className="text-border" />
              <p className="mt-6 text-lg font-semibold text-primary">
                Sepetiniz boş
              </p>
              <p className="mt-2 text-sm text-muted">
                Mağazamıza göz atarak beğendiğiniz ürünleri sepetinize
                ekleyebilirsiniz.
              </p>
              <Button asChild className="mt-8">
                <Link href="/store">Mağazaya Git</Link>
              </Button>
            </div>
          ) : (
            /* Cart Items */
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 rounded-xl border border-border bg-background p-4"
                >
                  {/* Image */}
                  <Link
                    href={`/store/${item.product.slug}`}
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-surface"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </Link>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        href={`/store/${item.product.slug}`}
                        className="text-sm font-bold text-primary transition-colors hover:text-accent"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-0.5 text-sm text-muted">
                        ₺{item.product.price}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-primary"
                          aria-label="Miktarı azalt"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="flex h-8 w-8 items-center justify-center text-sm font-semibold text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-primary"
                          aria-label="Miktarı artır"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:text-red-500"
                        aria-label="Ürünü kaldır"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="flex items-start">
                    <p className="text-sm font-bold text-primary">
                      ₺{item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}

              {/* Summary */}
              <div className="mt-4 rounded-xl border border-border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Toplam</span>
                  <span className="text-2xl font-bold text-primary">
                    ₺{totalPrice}
                  </span>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1">
                    <Link href="/store">Alışverişe Devam Et</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="text-muted hover:text-red-500"
                  >
                    Sepeti Temizle
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
