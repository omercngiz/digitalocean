import type { Metadata } from "next";
import { Code, ShoppingCart, Palette, Headset } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda — cengizdev",
  description:
    "Web tasarımı ve şirketlere özel e-ticaret çözümleri sunan cengizdev hakkında.",
};

const services = [
  {
    icon: <Palette size={24} />,
    title: "Web Tasarım",
    description:
      "Markanıza özel, modern ve kullanıcı dostu web siteleri tasarlıyoruz.",
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Ticaret Çözümleri",
    description:
      "İşletmenize özel, ölçeklenebilir e-ticaret altyapıları kuruyoruz.",
  },
  {
    icon: <Code size={24} />,
    title: "Yazılım Geliştirme",
    description:
      "İhtiyaçlarınıza yönelik özel yazılım çözümleri geliştiriyoruz.",
  },
  {
    icon: <Headset size={24} />,
    title: "Teknik Destek",
    description:
      "Projeleriniz için sürekli teknik destek ve bakım hizmeti sunuyoruz.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="flex flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
          Hakkımızda
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Dijital dünyada işletmenizi bir adım öne taşıyoruz.
        </p>
      </section>

      {/* About Content */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <h2 className="text-2xl font-bold text-primary">Biz Kimiz?</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              <strong className="text-primary">cengizdev</strong>, işletmelere
              özel web tasarımı ve e-ticaret çözümleri sunan bir yazılım
              ekibidir. Amacımız, her ölçekteki şirketin dijital varlığını
              güçlendirmek ve online satış süreçlerini kolaylaştırmaktır.
            </p>
            <p>
              Modern teknolojileri kullanarak hızlı, güvenli ve ölçeklenebilir
              projeler geliştiriyoruz. Tasarımdan geliştirmeye, lansmandan
              sonrasına kadar tüm süreçlerde yanınızdayız.
            </p>
            <p>
              Müşterilerimizin ihtiyaçlarını anlayarak, onlara en uygun dijital
              çözümleri sunmayı ilke edindik. Her proje bizim için bir
              ortaklıktır.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary">
              Neler Yapıyoruz?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              İşletmenizin dijital ihtiyaçlarına yönelik uçtan uca hizmetler
              sunuyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-sm font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
