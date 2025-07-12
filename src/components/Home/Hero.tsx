import HeroTitleSection from "./HeroTitleSection";
import HeroStats from "./HeroStats";
import HeroImageSection from "./HeroImageSection";
import HeroFeatureCards from "./HeroFeatureCards";

export default function Hero() {
	return (
		<>
			<section>
				<div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
					<div className="w-full lg:border-r lg:border-r-dark-15">
						<HeroTitleSection />
						<HeroStats />
					</div>
					<HeroImageSection />
				</div>
			</section>
			<HeroFeatureCards />
		</>
	);
}
