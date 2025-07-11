import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { inter, kumbhSans } from "./fonts";

export const metadata: Metadata = {
	title: "Future Tech",
	description: "Explore the Frontiers of Artificial Intelligence",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${kumbhSans.variable} antialiased`}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
