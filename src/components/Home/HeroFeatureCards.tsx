import HeroFeatureCard from "./HeroFeatureCard";

const cards = [
	{
		icon: "/imgs/icons/NewsIcon.svg",
		title: "Latest News Updates",
		subtitle: "Stay Current",
		description: "Over 1,000 articles published monthly",
		link: "/",
	},
	{
		icon: "/imgs/icons/expertIcon.svg",
		title: "Expert Contributors",
		subtitle: "Trusted Insights",
		description: "50+ renowned AI experts on our team",
		link: "/",
	},
	{
		icon: "/imgs/icons/readershipIcon.svg",
		title: "Global Readership",
		subtitle: "Worldwide Impact",
		description: "2 million monthly readers",
		link: "/",
	},
];

export default function HeroFeatureCards() {
	return (
		<section className="border-y border-y-dark-15 lg:border-b lg:border-b-dark-15">
			<div className="container px-4 lg:px-0 mx-auto flex flex-col lg:flex-row items-center justify-between">
				{cards.map((card, idx) => (
					<HeroFeatureCard key={idx} {...card} idx={idx} />
				))}
			</div>
		</section>
	);
}
