import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { inter, kumbhSans } from "./fonts";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/ToastProvider";

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
			<body
				className={`${inter.variable} ${kumbhSans.variable} antialiased scroll-smooth`}
			>
				<Navigation />
				{children}
				<ToastProvider />
				<Footer />
			</body>
		</html>
	);
}
