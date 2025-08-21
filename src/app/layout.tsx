import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import { inter, kumbhSans } from "./fonts";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/components/AuthProvider";
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
		<html lang="en" className={`${inter.variable} ${kumbhSans.variable}`}>
			<body>
				<AuthProvider>
					<Navigation />
					<main>{children}</main>
					<Footer />
					<ToastProvider />
				</AuthProvider>
			</body>
		</html>
	);
}
