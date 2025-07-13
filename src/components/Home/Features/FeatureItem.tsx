import { type FeatureItem } from "@/utils/contentTypes";

export default function FeatureItem({ item }: { item: FeatureItem}) {
	return (
		<li
			className="font-inter bg-dark-10 border border-dark-15 p-6 rounded-[10px] mb-2.5 lg:w-[40%]"
		>
			<h4 className="font-medium text-lg lg:text-xl text-white mb-1 lg:mb-4">
				{item.title}
			</h4>
			<p className="text-sm lg:text-base text-grey-60">{item.desc}</p>
		</li>
	);
}
