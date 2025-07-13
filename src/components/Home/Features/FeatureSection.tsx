import React from "react";
import { FeatureGroup } from "@/utils/contentTypes";
import Image from "next/image";
import FeatureList from "./FeatureList";

export default function FeatureSection({ feature }: { feature: FeatureGroup }) {
	return (
		<div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-start lg:items-center">
			{/* Feature Title */}
			<div className="py-12 lg:py-30.5 w-full border-b border-b-dark-15 lg:border-b-0 lg:border-r lg:border-r-dark-15 lg:w-[50%]">
				<Image
					src={feature.icon}
					alt={feature.title}
					width={40}
					height={40}
					className="lg:w-[60px] lg:h-[60px] mb-6 lg:mb-11"
				/>
				<h3 className="font-kumbh font-semibold text-2xl lg:text-3xl text-white mb-1.5 lg:mb-2.5">
					{feature.title}
				</h3>

				<p className="text-sm lg:text-base font-inter text-grey-60">
					{feature.desc}
				</p>
			</div>

			{/* Feature List */}
			<FeatureList feature={feature} />
		</div>
	);
}
