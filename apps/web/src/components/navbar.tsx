"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#urunler", label: "Ürünler" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          cengizdev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#giris"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Giriş Yap
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border transition-all duration-300 md:hidden",
          isOpen ? "max-h-64" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#giris"
            onClick={() => setIsOpen(false)}
            className="w-full rounded-lg bg-accent px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </header>
  );
}
