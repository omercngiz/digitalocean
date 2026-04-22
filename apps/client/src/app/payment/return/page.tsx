import Link from "next/link";

const PaymentReturnPage = async ({
	searchParams,
}: {
	searchParams: Promise<{ session_id: string }> | undefined;
}) => {
	const session_id = (await searchParams)?.session_id;

	if (!session_id) {
		return <p>No session ID provided.</p>;
	}

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_PAYMENT_SERVICE_URL}/session/${session_id}`,
	);
	const data = await res.json();

	return (
		<div>
			<h1>Payment Return Page</h1>
			<p>Ödeme {data.status == "complete" ? "tamamlandı" : "başarısız"}</p>
			<p>
				Durum:{" "}
				{data.paymentStatus == "paid" ? "ödeme alındı" : "ödeme alınamadı"}
			</p>
			<Link href="/orders">Siparişlerinizi görün</Link>
		</div>
	);
};

export default PaymentReturnPage;
