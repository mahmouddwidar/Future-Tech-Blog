import React from "react";
import FeaturesTitle from "./FeaturesTitle";
import FeatureSection from "./FeatureSection";
import { features } from "@/utils/content";

export default function Features() {
	return (
		<>
			{/* Title */}
			<section className="bg-dark-10 border-b border-b-dark-15">
				<FeaturesTitle />
			</section>
			{/* Features */}
			{features.map((feature) => (
				<section className="border-b border-b-dark-15" key={feature.id}>
					<FeatureSection feature={feature} />
				</section>
			))}
		</>
	);
}
