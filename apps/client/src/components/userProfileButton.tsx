import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const UserProfileButton = () => {
	const router = useRouter();

	return (
		<UserButton
			appearance={{ elements: { userButtonPopoverFooter: "display-none" } }}
		>
			<UserButton.MenuItems>
				<UserButton.Action
					label="Siparişler"
					labelIcon={<ShoppingBag className="w-4 h-4" />}
					onClick={() => router.push("/orders")}
				/>
			</UserButton.MenuItems>
		</UserButton>
	);
};

export default UserProfileButton;
