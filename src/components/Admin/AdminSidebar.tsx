import { useState } from "react";
import SidebarLink from "./SidebarLink";
import CommentsIcon from "../icons/CommentsIcon";

export default function AdminSidebar() {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	return (
		<aside
			className={` ${
				isOpen ? "w-1/4" : "w-1/4 md:w-1/10"
			} transition-all ease-in-out duration-700 text-white px-2 lg:px-6 py-9 min-h-screen border-r border-r-dark-15 relative`}
		>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="border-none max-md:hidden outline-1 outline-dark-15 rounded-full bg-dark-10 p-1 size-8 hover:cursor-pointer absolute -right-4 top-3"
			>
				---
			</button>

			<SidebarLink href="/dashboard">Home</SidebarLink>
			<SidebarLink href="/dashboard/articles">Blogs</SidebarLink>
			<SidebarLink href="/dashboard/comments">
				<CommentsIcon
					className={` ${isOpen && "block md:hidden"} size-6 fill-white`}
				/>{" "}
				<p className={isOpen ? "hidden md:block" : "hidden"}>Comments</p>
			</SidebarLink>
		</aside>
	);
}
