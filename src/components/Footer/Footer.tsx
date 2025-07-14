import { footerCols } from "@/utils/content";
import FooterCol from "./FooterCol";
import Twitter from "../icons/Twitter";
import MediumIcon from "../icons/MediumIcon";
import LinkedIn from "../icons/LinkedIn";

export default function Footer() {
	return (
		<footer className="border-t border-t-dark-15">
			<div className="container mx-auto px-4 lg:px-0">
				<div className="py-10 lg:py-20">
					<ul className="flex justify-between items-start flex-wrap gap-5 ">
						{footerCols.map((col) => (
							<FooterCol key={col.id} col={col} />
						))}
					</ul>
				</div>

				<div className="pt-6 pb-5 lg:py-10 border-t border-t-dark-15 lg:flex justify-between items-center">
					<div className="flex gap-3.5 justify-center items-center lg:order-2">
						<a href="#" target="_blank" rel="noopener noreferrer">
							<Twitter className="fill-white size-5" />
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							<MediumIcon className="fill-white size-5" />
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer">
							<LinkedIn className="fill-white size-5" />
						</a>
					</div>
					<div className="font-inter flex justify-center items-center gap-2 mt-5 lg:mt-0 lg:order-1">
						<p className="text-dark-40 text-sm pr-2 border-r border-r-dark-40 w-fit">
							Terms & Conditions
						</p>
						<p className="text-dark-40 text-sm w-fit">Privacy Policy</p>
					</div>
					<div className="mt-5 lg:mt-0 flex justify-center items-center lg:order-3">
						<p className="text-dark-40 text-sm w-fit">
							© 2024 FutureTech. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
