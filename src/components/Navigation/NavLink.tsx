"use client";
import { NavLink } from "@/utils/type";
import { useActivePath } from "@/hooks/useActivePath";
import Link from "next/link";


export default function NavLink({ link }: { link: NavLink }) {
	const isActivePath = useActivePath();

    return (
        <li
            key={link.id}
            className={`${isActivePath(link.href) ? "active" : ""
                } py-2.5 px-4.5 rounded-md text-grey-50`}
        >
            <Link href={link.href}>{link.text}</Link>
        </li>
    )
}
