"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, type FormEvent } from "react";

interface PaymentStepProps {
	onBack: () => void;
}

export default function PaymentStep({ onBack }: PaymentStepProps) {
	const [formData, setFormData] = useState({
		cardNumber: "",
		cardHolder: "",
		expiry: "",
		cvc: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Placeholder — no backend integration
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="rounded-xl border border-border bg-background p-6"
		>
			<h2 className="text-lg font-bold text-primary">Ödeme Bilgileri</h2>
			<p className="mt-1 text-sm text-muted">
				Kart bilgilerinizi girerek siparişinizi tamamlayın.
			</p>

			<div className="mt-6 grid gap-5 sm:grid-cols-2">
				{/* Card Number */}
				<div className="sm:col-span-2">
					<Label htmlFor="cardNumber">Kart Numarası</Label>
					<Input
						id="cardNumber"
						name="cardNumber"
						placeholder="0000 0000 0000 0000"
						value={formData.cardNumber}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* Card Holder */}
				<div className="sm:col-span-2">
					<Label htmlFor="cardHolder">Kart Üzerindeki İsim</Label>
					<Input
						id="cardHolder"
						name="cardHolder"
						placeholder="Ad Soyad"
						value={formData.cardHolder}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* Expiry */}
				<div>
					<Label htmlFor="expiry">Son Kullanma Tarihi</Label>
					<Input
						id="expiry"
						name="expiry"
						placeholder="AA/YY"
						value={formData.expiry}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* CVC */}
				<div>
					<Label htmlFor="cvc">CVC</Label>
					<Input
						id="cvc"
						name="cvc"
						placeholder="123"
						value={formData.cvc}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>
			</div>

			{/* Actions */}
			<div className="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button type="submit" className="flex-1">
					Siparişi Tamamla
				</Button>
				<Button type="button" variant="ghost" onClick={onBack}>
					Geri Dön
				</Button>
			</div>
		</form>
	);
}
