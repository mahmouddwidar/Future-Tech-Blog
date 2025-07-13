import Link from "next/link";
import React from "react";
import ExternalLink from "../ExternalLink";

export default function FooterLink({
	link,
}: {
	link: {
		id: number;
		href: string;
		name: string;
		isNew: boolean;
		externalLink?: boolean;
	};
}) {
	return (
		<>
			{link.externalLink ? (
				<ExternalLink
					href={link.href}
					title={link.name}
					className="hover:text-white"
				/>
			) : (
				<li
					key={link.id}
					className={`text-sm lg:text-lg text-grey-50 mb-2 hover:text-white`}
				>
					<Link href={link.href}>{link.name}</Link>
					{link.isNew && (
						<span className="ml-2 text-xs lg:text-base font-inter border border-dark-15 bg-dark-10 lg:px-3 px-2.5  py-1 lg:py-0.5 text-white rounded-[6px]">
							New
						</span>
					)}
				</li>
			)}
		</>
	);
}
