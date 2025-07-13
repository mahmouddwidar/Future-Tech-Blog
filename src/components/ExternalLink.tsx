import Link from "next/link";
import React from "react";
import ArrowUpRight from "./icons/arrowUpRight";

export default function ExternalLink({ href, title, className }: { href: string; title: string; className?: string }) {
	return (
		<Link
			href={href}
			className={`text-grey-60 text-sm font-inter px-5 py-3.5 border border-dark-15 rounded-lg inline-flex items-center justify-center ${className}`}
		>
			{title}
			<ArrowUpRight className="fill-primary-55 ml-1 size-4" />
		</Link>
	);
}
