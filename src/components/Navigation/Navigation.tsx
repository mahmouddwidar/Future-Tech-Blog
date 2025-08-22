import Image from "next/image";
import ArrowUpRight from "../icons/arrowUpRight";
import BarsBottom from "../icons/BarsBottom";
import { navigationLinks } from "@/utils/content";
import Link from "next/link";
import NavLink from "./NavLink";
import LogoutBtn from "./LogoutBtn";

export default async function Navigation() {
	return (
		<header className="bg-dark-8">
			{/* Outer Link */}
			<div className="pt-10 pb-3.5 px-4 lg:px-0 lg:py-3 flex justify-center items-center gap-8 cursor-pointer">
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

					{/* Desktop Menu */}
					<ul className="hidden lg:flex text-white justify-between items-center gap-6 font-inter">
						{navigationLinks.map((link) => (
							<NavLink key={link.id} link={link} />
						))}
					</ul>

					<div className="flex justify-between items-center gap-x-4">
						<LogoutBtn />

						{/* Mobile Menu */}
						<BarsBottom className="fill-white size-8.5 cursor-pointer block lg:hidden hover:fill-grey-80" />
					</div>
				</nav>
			</div>
		</header>
	);
}
