export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "full-stack-developer-black",
    name: "Full Stack Developer - Black",
    description:
      "Hem frontend hem backend, bu kupa tam bir full stack deneyimi sunar. Minimalist tasarımıyla her masaya uyum sağlar, kodlama seanslarınızın vazgeçilmezi olacak.",
    price: 249,
    features: [
      "Premium seramik malzeme",
      "350 ml kapasite",
      "Çift taraflı baskı",
      "Bulaşık makinesine uygun",
      "Mat siyah kaplama",
    ],
    images: ["/product-img/product-1-1.png", "/product-img/product-1-2.png"],
  },
  {
    id: 2,
    slug: "full-stack-developer-white",
    name: "Full Stack Developer - White",
    description:
      "Sade ve şık beyaz tasarımıyla, bu kupa her kodlama ortamına uyum sağlar. Hem frontend hem backend geliştiriciler için ideal, kodlama seanslarınızın vazgeçilmezi olacak.",
    price: 279,
    features: [
      "Porselen malzeme",
      "400 ml kapasite",
      "Tek taraflı kabartma baskı",
      "Bulaşık makinesine uygun",
      "Parlak beyaz yüzey",
    ],
    images: ["/product-img/product-2-1.png", "/product-img/product-2-2.png"],
  },
  {
    id: 3,
    slug: "full-stack-developer-black-special",
    name: "Full Stack Developer - Black Special Edition",
    description:
      "Sınırlı sayıda üretilen bu özel kupa, siyahın gücünü ve kodlama tutkusunu bir araya getiriyor. Parlak siyah kaplaması ve detaylı baskısıyla, kodlama seanslarınızın vazgeçilmezi olacak.",
    price: 269,
    features: [
      "Premium seramik malzeme",
      "350 ml kapasite",
      "UV baskı teknolojisi",
      "Mikrodalga uyumlu",
      "Parlak siyah kaplama",
    ],
    images: ["/product-img/product-3-1.png", "/product-img/product-3-2.png"],
  },
  {
    id: 4,
    slug: "eat-sleep-code-repeat",
    name: "Eat Sleep Code Repeat",
    description:
      "Sonsuz döngüden çıkmanın tek yolu: bir kupa daha kahve. Beyaz cesur tasarımıyla, kodlama maratonlarının vazgeçilmezi.",
    price: 259,
    features: [
      "Porselen malzeme",
      "380 ml kapasite",
      "Çift taraflı baskı",
      "Bulaşık makinesine uygun",
      "Beyaz parlak kaplama",
    ],
    images: ["/product-img/product-4-1.png", "/product-img/product-4-2.png"],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
