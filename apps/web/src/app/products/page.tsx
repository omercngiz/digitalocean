import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ürünler — cengizdev",
  description:
    "İşletmenize özel e-ticaret çözümleri. Başlangıçtan kurumsal ölçeğe kadar her ihtiyaca uygun paketler.",
};

const plans = [
  {
    name: "Başlangıç",
    slug: "starter",
    price: "4.990",
    period: "/ay",
    description:
      "Küçük işletmeler için hazır e-ticaret altyapısı. Hızlıca online satışa başlayın.",
    highlighted: false,
    features: [
      "Hazır e-ticaret teması",
      "Mobil uyumlu tasarım",
      "250 ürüne kadar listeleme",
      "SSL sertifikası",
      "Otomatik yazılım güncellemeleri",
      "Temel SEO ayarları",
      "Sanal POS entegrasyonu",
      "Kargo entegrasyonu (1 firma)",
      "E-posta ile destek",
      "Aylık performans raporu",
    ],
    cta: "Hemen Başla",
  },
  {
    name: "Profesyonel",
    slug: "professional",
    price: "9.990",
    period: "/ay",
    description:
      "Büyüyen markalar için özel ilgi. Size atanmış proje yöneticisi ile birebir çalışın.",
    highlighted: true,
    badge: "Popüler",
    features: [
      "Özel tasarım (markanıza uygun)",
      "Sınırsız ürün listeleme",
      "Özel alan adı & SSL",
      "Otomatik + öncelikli güncellemeler",
      "Gelişmiş SEO & Google Analytics",
      "Sanal POS + kapıda ödeme",
      "Kargo entegrasyonu (3 firma)",
      "Pazar yeri entegrasyonu (Trendyol, HB)",
      "Size özel proje yöneticisi",
      "Haftalık performans raporu",
      "7/24 öncelikli destek",
      "Sosyal medya mağaza bağlantısı",
    ],
    cta: "Planı Seç",
  },
  {
    name: "Kurumsal",
    slug: "enterprise",
    price: "Özel Fiyat",
    period: "",
    description:
      "Yüksek trafikli, büyük ölçekli operasyonlar için. Ayrılmış bir ekiple tam kontrol.",
    highlighted: false,
    features: [
      "Tamamen özel tasarım & geliştirme",
      "Sınırsız ürün & kategori",
      "Yüksek trafikli altyapı (CDN & cache)",
      "Çoklu dil & para birimi desteği",
      "ERP / muhasebe entegrasyonu",
      "Tüm pazar yerleri entegrasyonu",
      "Kargo entegrasyonu (sınırsız)",
      "Ayrılmış teknik ekip (3-5 kişi)",
      "Özel API geliştirme",
      "A/B test & dönüşüm optimizasyonu",
      "Haftalık toplantı & strateji desteği",
      "SLA garantili 7/24 destek",
      "Güvenlik denetimi & DDoS koruması",
    ],
    cta: "İletişime Geç",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
          Ürünler & Paketler
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          İşletmenizin büyüklüğü ne olursa olsun, size uygun bir e-ticaret
          çözümümüz var. Güvenilir altyapı, modern tasarım ve sürekli destek.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.slug}
                className={cn(
                  "relative flex flex-col rounded-xl border bg-background p-8 transition-shadow hover:shadow-md",
                  plan.highlighted
                    ? "border-accent shadow-md"
                    : "border-border"
                )}
              >
                {/* Badge */}
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    {plan.badge}
                  </span>
                )}

                {/* Header */}
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  {plan.period ? (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-primary">
                        ₺{plan.price}
                      </span>
                      <span className="text-sm text-muted">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold tracking-tight text-primary">
                      {plan.price}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.slug === "enterprise" ? "/contact" : "/auth"}
                  className={cn(
                    "mt-6 flex h-12 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors",
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "border border-border bg-background text-primary hover:bg-surface"
                  )}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </Link>

                {/* Divider */}
                <div className="my-6 border-t border-border" />

                {/* Features */}
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          plan.highlighted ? "text-accent" : "text-accent/60"
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center sm:py-16">
          <h2 className="text-2xl font-bold text-primary">
            Hangi paket size uygun emin değil misiniz?
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted">
            Uzmanlarımız işletmenizi analiz edip size en uygun çözümü
            önersin.&nbsp;Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Ücretsiz Danışmanlık
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
