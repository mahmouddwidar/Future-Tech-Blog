import { usePathname } from "next/navigation";

export function useActivePath() {
	const pathname = usePathname();

	const checkActivePath = (path: string) => {
		// For other dashboard sub-routes
		if (path.startsWith("/dashboard/")) {
			return pathname.startsWith(path);
		}

		return pathname === path;
	};

	return checkActivePath;
}
