import { auth } from "@clerk/nextjs/server";

const TestPage = async () => {
	const { getToken } = await auth();
	const token = await getToken();

	const productServiceResponse = await fetch("http://localhost:8000/test", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const productServiceData = await productServiceResponse.json();

	const orderServiceResponse = await fetch("http://localhost:8001/test", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const orderServiceData = await orderServiceResponse.json();

	const paymentServiceResponse = await fetch("http://localhost:8002/test", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const paymentServiceData = await paymentServiceResponse.json();

	return (
		<div>
			{/* Hero Banner */}
			<section className="flex flex-col items-center justify-center px-4 py-20 text-center sm:py-28">
				<h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
					Test Sayfası
				</h1>
				<p className="mt-4 max-w-xl text-lg text-muted">Geliştirici aracı</p>
			</section>
			<div className="flex flex-col justify-center items-center py-12 border-t border-border">
				<div className="flex flex-col justify-center items-center mb-8">
					<p className="font-bold">Product Service</p>
					<p>{productServiceData.message}</p>
					<p>
						<span className="font-bold text-sm">User ID: </span>
						{productServiceData.userId}
					</p>
				</div>
				<div className="flex flex-col justify-center items-center mb-8">
					<p className="font-bold">Order Service</p>
					<p>{orderServiceData.message}</p>
					<p>
						<span className="font-bold text-sm">User ID: </span>
						{orderServiceData.userId}
					</p>
				</div>
				<div className="flex flex-col justify-center items-center mb-8">
					<p className="font-bold">Payment Service</p>
					<p>{paymentServiceData.message}</p>
					<p>
						<span className="font-bold text-sm">User ID: </span>
						{paymentServiceData.userId}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TestPage;
