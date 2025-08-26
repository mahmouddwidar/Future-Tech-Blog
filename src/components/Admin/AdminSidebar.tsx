import { useState } from "react";
import SidebarLink from "./SidebarLink";
import { sidebarLinks } from "@/utils/content";
import DoubleArrowIcon from "../icons/DoubleArrowIcon";

export default function AdminSidebar() {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<aside
			className={`${
				isOpen ? "w-1/4" : "w-1/4 md:w-1/10"
			} transition-all ease-in-out duration-700 text-white px-2 lg:px-6 py-9 min-h-screen border-r border-r-dark-15 relative`}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`flex justify-center items-center border-none max-md:hidden outline-1 outline-dark-15 rounded-full bg-dark-10 size-8 hover:cursor-pointer absolute -right-4 top-3 transition-all duration-500 ease-in-out ${
					!isOpen && "rotate-180"
				} `}
			>
				<DoubleArrowIcon className="size-6 fill-white" />
			</button>

			{sidebarLinks.map((link) => (
				<SidebarLink key={link.href} href={link.href} isSidebarOpen={isOpen}>
					{<link.icon className="size-6 fill-white text-black" />}
					<span className={isOpen ? "hidden md:block" : "hidden"}>
						{link.label}
					</span>
				</SidebarLink>
			))}
		</aside>
	);
}
