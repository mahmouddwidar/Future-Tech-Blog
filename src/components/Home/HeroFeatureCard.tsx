import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "../icons/arrowUpRight";

export default function HeroFeatureCard({
	icon,
	title,
	subtitle,
	description,
	link,
	idx,
}: {
	icon: string;
	title: string;
	subtitle: string;
	description: string;
	link: string;
	idx: number;
}) {
	// Add border classes based on idx for layout
	const borderClasses =
		idx === 1
			? "py-7.5 lg:py-10 lg:px-12.5 max-lg:border-b max-lg:border-b-dark-15 lg:border-x lg:border-x-dark-15 w-full lg:w-1/3"
			: idx === 0
			? "py-7.5 lg:py-10 lg:pr-12.5 max-lg:border-b max-lg:border-b-dark-15 w-full lg:w-1/3"
			: "py-7.5 lg:py-10 lg:pl-12.5 w-full lg:w-1/3";

	return (
		<div className={borderClasses}>
			<div className="mb-4">
				<Image src={icon} alt={title} width={30} height={30} />
			</div>
			<div className="flex items-center justify-between mb-2.5">
				<div className="font-inter">
					<h3 className="font-medium text-base lg:text-lg text-white">
						{title}
					</h3>
					<p className="text-sm lg:text-base text-grey-50">{subtitle}</p>
				</div>
				<Link href={link} className="bg-primary-55 rounded-full p-2.5 lg:p-3">
					<ArrowUpRight className="fill-dark-8 size-3" />
				</Link>
			</div>
			<p className="font-kumbh text-sm lg:text-base text-grey-60">
				{description}
			</p>
		</div>
	);
}
