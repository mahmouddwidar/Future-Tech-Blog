"use client";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import { userStore } from "@/store/user";
import { redirect } from "next/navigation";
import React from "react";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = userStore((state) => state.user);
    if (user?.role !== "ADMIN") return redirect('/')
	return (
		<section className="flex justify-start items-start">
			<AdminSidebar />
			<main>{children}</main>
		</section>
	);
}
