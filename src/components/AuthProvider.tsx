"use client";

import { useEffect } from "react";
import { userStore } from "@/store/user";
import { PayLoad } from "@/utils/type";
import { getServerUser } from "@/actions/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const setUser = userStore((state) => state.setUser);

	useEffect(() => {
		getServerUser().then((user) => {
			setUser(user as PayLoad);
		});
	}, [setUser]);

	return <>{children}</>;
}
