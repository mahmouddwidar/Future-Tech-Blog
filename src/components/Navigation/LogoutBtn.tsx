"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { showToast } from "@/lib/toast";
import { userStore } from "@/store/user";
import Link from "next/link";

export default function LogoutBtn() {
	const router = useRouter();
	const clearUser = userStore((state) => state.clearUser);
	const user = userStore((state) => state.user);

	const handleLogout = () => {
		try {
			fetch("/api/users/logout");
			router.replace("/");
			router.refresh();
			clearUser();
		} catch (error) {
			console.error(error);
			showToast.error("Something went wrong!");
		}
	};
	return (
		<>
			{user ? (
				<div className="flex justify-between items-center gap-x-3">
					<Link
						href={"/profile"}
						className="text-white hover:underline underline-offset-5 hidden lg:block"
					>
						Profile
					</Link>
					<Button
						onClick={handleLogout}
						className="transition-all duration-100"
						size="sm"
						variant="outline"
					>
						Logout
					</Button>
				</div>
			) : (
				<Link
					href={"/login"}
					className="py-2.5 px-3.5 text-dark-8 text-sm font-medium bg-primary-55 hover:bg-primary-60 hover:text-dark-15 rounded-md hidden lg:block"
				>
					Login
				</Link>
			)}
		</>
	);
}
