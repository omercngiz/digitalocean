"use client";

import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { Button } from "./ui/button";

interface StripePaymentFormProps {
	onBack: () => void;
}

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const StripePaymentForm = ({ onBack }: StripePaymentFormProps) => {
	const fetchClientSecret = React.useCallback(() => {
		// Create a Checkout Session
		return fetch(
			`${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/session/create-checkout-session`,
			{
				method: "POST",
			},
		)
			.then((res) => res.json())
			.then((data) => data.clientSecret);
	}, []);

	const options = { fetchClientSecret };

	return (
		<div id="checkout">
			<EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
				<EmbeddedCheckout />
			</EmbeddedCheckoutProvider>
			<Button type="button" variant="ghost" onClick={onBack}>
				Geri Dön
			</Button>
		</div>
	);
};

export default StripePaymentForm;
