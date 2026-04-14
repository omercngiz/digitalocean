const PageBanner = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<section className="flex flex-col items-center justify-center px-4 py-6 text-center sm:py-8 bg-taupe-50">
			<h1 className="text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl">
				{title}
			</h1>
			<p className="mt-4 max-w-xl text-lg text-muted">{description}</p>
		</section>
	);
};

export default PageBanner;
