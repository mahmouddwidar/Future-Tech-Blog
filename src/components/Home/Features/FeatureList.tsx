import { FeatureGroup } from "@/utils/contentTypes";
import FeatureItem from "./FeatureItem";

export default function FeatureList({ feature }: { feature: FeatureGroup }) {
	return (
		<ul className="px-4 py-7 w-full flex flex-col lg:flex-row lg:gap-5 lg:justify-end lg:items-center flex-wrap">
			{feature.features.map((item) => (
				<FeatureItem key={item.id} item={item} />
			))}
		</ul>
	);
}
