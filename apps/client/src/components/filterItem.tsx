"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface FilterItemProps {
	name: string;
	slug: string;
	queryKey: string;
}

export function FilterItem({ name, slug, queryKey }: FilterItemProps) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const isActive = searchParams.get(queryKey) === slug;

	const handleClick = () => {
		const params = new URLSearchParams(searchParams.toString());

		if (isActive) {
			params.delete(queryKey);
		} else {
			params.set(queryKey, slug);
		}

		const query = params.toString();
		router.push(query ? `${pathname}?${query}` : pathname);
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={`rounded-full px-4 py-2 text-sm text-gray-800 min-w-18 transition-colors ${
				isActive
					? " bg-accent text-white"
					: " bg-background text-primary hover:border-accent hover:text-accent"
			}`}
		>
			{name}
		</button>
	);
}

export default FilterItem;
