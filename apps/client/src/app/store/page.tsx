import type { Metadata } from "next";
import { getAllProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/store/product-card";
import PageBanner from "@/components/pageBanner";

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
			<PageBanner
				title="Mağaza"
				description="Yazılımcılara özel tasarım ürünler"
			/>

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
