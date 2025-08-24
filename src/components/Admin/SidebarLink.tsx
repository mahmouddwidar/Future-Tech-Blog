"use client";
import Link from "next/link";
import { useActivePath } from "@/hooks/useActivePath";

interface SidebarLinkProps {
	href: string;
	className?: string,
	children: React.ReactNode;
}

export default function SidebarLink({ href, children, className }: SidebarLinkProps) {
	const isActivePath = useActivePath();

	return (
		<Link
			className={` ${className} flex justify-center items-center gap-x-3 w-full text-center shadow mb-4 md:px-1 py-3 rounded-2xl transition-colors duration-300 hover:bg-neutral-950 hover:cursor-pointer font-semibold text-lg ${
				isActivePath(href) ? "bg-neutral-950 shadow-none" : "bg-neutral-800"
			}`}
			href={href}
		>
			{children}
		</Link>
	);
}
