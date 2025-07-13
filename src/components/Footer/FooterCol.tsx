import { type FooterCol } from "@/utils/contentTypes";
import React from "react";
import FooterLink from "./FooterLink";

export default function FooterCol({ col }: { col: FooterCol }) {
	return (
		<li
			className={`w-[calc(50%-10px)] lg:w-fit ${
				col.links[0].externalLink && "w-full lg:w-fit"
			} xfont-inter`}
		>
			<h6 className="font-medium text-base lg:text-xl text-white mb-4 lg:mb-9">{col.heading}</h6>
			<ul
				className={`${
					col.links[0].externalLink
						? "flex justify-between items-center lg:flex-col lg:items-start flex-wrap gap-3 w-full"
						: "w-fit"
				}`}
			>
				{col.links.map((link) => (
					<FooterLink key={link.id} link={link} />
				))}
			</ul>
		</li>
	);
}
