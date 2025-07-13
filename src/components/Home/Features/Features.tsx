import React from "react";
import FeatureSection from "./FeatureSection";
import { features } from "@/utils/content";
import SectionTitle from "@/components/SectionTitle";
// import ExternalLink from "@/components/ExternalLink";

export default function Features() {
	return (
		<>
			{/* Title */}
			<section className="bg-dark-10 border-b border-b-dark-15">
				<SectionTitle
					title="FutureTech Features"
					subTitle="Unlock the Power of"
				/>
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
