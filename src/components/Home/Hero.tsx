import HeroTitleSection from "./HeroTitleSection";
import HeroStats from "./HeroStats";
import HeroImageSection from "./HeroImageSection";
import HeroFeatureCards from "./HeroFeatureCards";

export default function Hero() {
	return (
		<>
			<section>
				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between ">
					<div className="w-full">
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
