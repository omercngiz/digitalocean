import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-primary">
          cengizdev
        </Link>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} cengizdev. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
