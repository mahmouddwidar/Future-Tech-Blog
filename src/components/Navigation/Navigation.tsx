"use client";
import Image from "next/image";
import ArrowUpRight from "../icons/arrowUpRight";
import BarsBottom from "../icons/BarsBottom";
import { navigationLinks } from "@/utils/content";
import Link from "next/link";
import { useActivePath } from "@/hooks/useActivePath";

export default function Navigation() {
	const isActivePath = useActivePath();

	return (
		<header className="bg-dark-8">
			{/* Outer Link */}
			<div className="pt-10 pb-3.5 lg:py-3 flex justify-center items-center gap-8 cursor-pointer">
				<p className={`text-grey-60 font-inter text-center text-xs lg:text-sm`}>
					Subscribe to our Newsletter For Blogs and Resources
				</p>
				<ArrowUpRight className="fill-primary-55 size-5" />
			</div>

			{/* Navigation */}
			<div className="bg-dark-10 border-y border-y-dark-15">
				<nav className="container mx-auto max-sm:px-4 flex justify-between items-center py-5">
					<Link href={`/`}>
						<Image
							src={`/Logo.svg`}
							alt="Future Tech Logo"
							width={125.3}
							height={35}
							className="lg:w-36 lg:h-10"
						/>
					</Link>

					{/* Mobile Menu */}
					<BarsBottom className="fill-white size-8.5 cursor-pointer block lg:hidden hover:fill-grey-80" />

					{/* Desktop Menu */}
					<ul className="hidden lg:flex text-white justify-between items-center gap-6 font-inter">
						{navigationLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									isActivePath(link.href) ? "active" : ""
								} py-2.5 px-4.5 rounded-md text-grey-50`}
							>
								<Link href={link.href}>{link.text}</Link>
							</li>
						))}
					</ul>

					<Link
						href={"/contact"}
						className="py-2.5 px-3.5 text-dark-8 text-sm font-medium bg-primary-55 hover:bg-primary-60 rounded-md hidden lg:block"
					>
						Contact Us
					</Link>
				</nav>
			</div>
		</header>
	);
}
