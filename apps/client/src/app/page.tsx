import FilterBar from "@/components/filterBar";
import { FilterItem } from "@/components/filterItem";
import { ItemCard } from "@/components/itemCard";
import { ItemPanel } from "@/components/itemPanel";
import PageBanner from "@/components/pageBanner";
import SearchBar from "@/components/searchBar";
import SortMenu from "@/components/sortMenu";

export default function Home() {
	return (
		<>
			<PageBanner title="Hoş Geldiniz" description="Aşk olmadan, Meşk omaz." />

			<section className="flex flex-1 flex-col items-center justify-center px-4 py-4 text-center sm:py-6 md:px-12">
				<FilterBar>
					<SearchBar placeholder="Ürünlerde ara..." />
					<FilterItem name="Sülüs" slug="sulus" queryKey="category" />
					<FilterItem name="Celi Sülüs" slug="celi-sulus" queryKey="category" />
					<FilterItem name="Divani" slug="divani" queryKey="category" />
					<FilterItem name="Ta'liq" slug="ta-liq" queryKey="category" />
					<FilterItem name="Kufi" slug="kufi" queryKey="category" />
					<FilterItem name="Murakka" slug="murakka" queryKey="category" />
					<SortMenu />
				</FilterBar>
				<ItemPanel className="mt-6">
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
					<ItemCard />
				</ItemPanel>
			</section>
		</>
	);
}
