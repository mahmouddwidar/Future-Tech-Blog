"use client";
import Link from "next/link";
import { useActivePath } from "@/hooks/useActivePath";
import { ReactNode } from "react";

interface SidebarLinkProps {
	href: string;
	children: ReactNode;
	isSidebarOpen: boolean;
}

export default function SidebarLink({
	href,
	children,
}: SidebarLinkProps) {
	const isActivePath = useActivePath();
	const isActive = isActivePath(href);

	return (
		<Link
			href={href}
			className={`flex justify-center items-center gap-x-3 w-full text-center shadow mb-4 md:px-1 py-3 rounded-2xl transition-colors duration-300 hover:bg-neutral-950 hover:cursor-pointer font-semibold text-lg ${
				isActive
					? "bg-neutral-950 shadow-none font-medium"
					: "text-grey-70 hover:bg-dark-10 bg-neutral-800 hover:text-white"
			} `}
		>
			{children}
		</Link>
	);
}
