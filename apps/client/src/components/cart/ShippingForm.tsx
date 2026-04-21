"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, type FormEvent } from "react";

interface ShippingFormProps {
	onNext: () => void;
	onBack: () => void;
}

export default function ShippingForm({ onNext, onBack }: ShippingFormProps) {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		address: "",
		city: "",
		district: "",
		zipCode: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onNext();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="rounded-xl border border-border bg-background p-6"
		>
			<h2 className="text-lg font-bold text-primary">Teslimat Adresi</h2>
			<p className="mt-1 text-sm text-muted">
				Siparişinizin teslim edileceği adresi girin.
			</p>

			<div className="mt-6 grid gap-5 sm:grid-cols-2">
				{/* Full Name */}
				<div className="sm:col-span-2">
					<Label htmlFor="fullName">Ad Soyad</Label>
					<Input
						id="fullName"
						name="fullName"
						placeholder="Ad Soyad"
						value={"Omer Cengiz" || formData.fullName}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* Phone */}
				<div className="sm:col-span-2">
					<Label htmlFor="phone">Telefon</Label>
					<Input
						id="phone"
						name="phone"
						type="tel"
						placeholder="05XX XXX XX XX"
						value={"0555 555 5555" || formData.phone}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* Address */}
				<div className="sm:col-span-2">
					<Label htmlFor="address">Adres</Label>
					<Input
						id="address"
						name="address"
						placeholder="Mahalle, sokak, bina no, daire no"
						value={"Bahçelievler mah. 282. sokak 5/2" || formData.address}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* City */}
				<div>
					<Label htmlFor="city">İl</Label>
					<Input
						id="city"
						name="city"
						placeholder="İl"
						value={"İstanbul" || formData.city}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* District */}
				<div>
					<Label htmlFor="district">İlçe</Label>
					<Input
						id="district"
						name="district"
						placeholder="İlçe"
						value={"Bakırköy" || formData.district}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>

				{/* Zip Code */}
				<div>
					<Label htmlFor="zipCode">Posta Kodu</Label>
					<Input
						id="zipCode"
						name="zipCode"
						placeholder="34000"
						value={"34000" || formData.zipCode}
						onChange={handleChange}
						required
						className="mt-1.5"
					/>
				</div>
			</div>

			{/* Actions */}
			<div className="mt-8 flex flex-col gap-3 sm:flex-row">
				<Button type="submit" className="flex-1">
					Ödemeye Geç
				</Button>
				<Button type="button" variant="ghost" onClick={onBack}>
					Geri Dön
				</Button>
			</div>
		</form>
	);
}
