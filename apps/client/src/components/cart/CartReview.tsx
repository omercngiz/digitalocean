"use client";

import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderCartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

const PLACEHOLDER_ITEMS: PlaceholderCartItem[] = [
	{ id: 1, name: "Örnek Ürün 1", price: 149.99, quantity: 2 },
	{ id: 2, name: "Örnek Ürün 2", price: 89.5, quantity: 1 },
	{ id: 3, name: "Örnek Ürün 3", price: 249.0, quantity: 3 },
];

interface CartReviewProps {
	onNext: () => void;
}

export default function CartReview({ onNext }: CartReviewProps) {
	const items = PLACEHOLDER_ITEMS;
	const totalPrice = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<div className="flex flex-col gap-4">
			{items.map((item) => (
				<div
					key={item.id}
					className="flex gap-4 rounded-xl border border-border bg-background p-4"
				>
					{/* Placeholder Image */}
					<div className="h-24 w-24 shrink-0 rounded-lg bg-border" />

					{/* Info */}
					<div className="flex flex-1 flex-col justify-between">
						<div>
							<p className="text-sm font-bold text-primary">{item.name}</p>
							<p className="mt-0.5 text-sm text-muted">
								₺{item.price.toFixed(2)}
							</p>
						</div>

						{/* Quantity & Remove */}
						<div className="mt-2 flex items-center gap-3">
							<div className="flex items-center gap-1">
								<button
									className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-primary"
									aria-label="Miktarı azalt"
								>
									<Minus size={14} />
								</button>
								<span className="flex h-8 w-8 items-center justify-center text-sm font-semibold text-primary">
									{item.quantity}
								</span>
								<button
									className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-primary"
									aria-label="Miktarı artır"
								>
									<Plus size={14} />
								</button>
							</div>

							<button
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
							₺{(item.price * item.quantity).toFixed(2)}
						</p>
					</div>
				</div>
			))}

			{/* Summary */}
			<div className="mt-4 rounded-xl border border-border bg-background p-6">
				<div className="flex items-center justify-between">
					<span className="text-sm text-muted">Toplam</span>
					<span className="text-2xl font-bold text-primary">
						₺{totalPrice.toFixed(2)}
					</span>
				</div>
				<div className="mt-6 flex flex-col gap-3 sm:flex-row">
					<Button onClick={onNext} className="flex-1">
						Adres Bilgilerine Geç
					</Button>
					<Button variant="ghost" className="text-muted hover:text-red-500">
						Sepeti Temizle
					</Button>
				</div>
			</div>
		</div>
	);
}
