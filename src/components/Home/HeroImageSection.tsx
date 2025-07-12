import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "../icons/arrowUpRight";

export default function HeroImageSection() {
	return (
		<div className="p-10 lg:p-12 lg:pr-0 pt-24.5 lg:pt-63 relative overflow-hidden lg:w-[48%] h-full">
			<div className="rotate-55 bg-no-repeat absolute -top-10 -left-18 opacity-70 -z-1">
				<Image
					src={`/imgs/abstractLayer.svg`}
					alt="Abstract Layer"
					width={423}
					height={286}
				/>
			</div>
			<div className="p-2 bg-dark-10 border border-dark-15 rounded-full w-[145px] flex justify-between items-center relative">
				<div>
					<Image
						src={`/imgs/persons/person1.svg`}
						alt="People"
						width={40}
						height={40}
					/>
				</div>
				<div className="absolute top-[14%] left-[35px] z-1">
					<Image
						src={`/imgs/persons/person2.svg`}
						alt="People"
						width={40}
						height={40}
					/>
				</div>
				<div className="absolute top-[14%] left-[65px] z-2">
					<Image
						src={`/imgs/persons/person3.svg`}
						alt="People"
						width={40}
						height={40}
					/>
				</div>
				<div className="absolute top-[14%] left-[95px] z-3">
					<Image
						src={`/imgs/persons/person4.svg`}
						alt="People"
						width={40}
						height={40}
					/>
				</div>
			</div>
			<div>
				<div className="my-5 font-inter">
					<h2 className="font-medium text-lg text-white">
						Explore 1000+ resources
					</h2>
					<p className="text-sm text-grey-60">
						Over 1,000 articles on emerging tech trends and breakthroughs.
					</p>
				</div>
				<Link
					href={`/`}
					className="text-grey-60 text-sm font-inter px-5 py-3.5 border border-dark-15 rounded-lg w-full lg:w-fit inline-flex items-center justify-center"
				>
					Explore Resources
					<ArrowUpRight className="fill-primary-55 ml-1 size-4" />
				</Link>
			</div>
		</div>
	);
}
