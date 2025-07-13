export default function CategoryItem({
	name,
	isActive,
}: {
	name: string;
	isActive: boolean;
}) {
	return (
		<div
			className={`cursor-pointer px-4 lg:px-20 py-4.5 lg:py-6 min-w-[152px] flex justify-center items-center border border-dark-15 rounded-lg text-sm font-inter w-fit ${
				isActive ? "text-white font-medium bg-dark-10" : "text-grey-60"
			}`}
		>
			{name}
		</div>
	);
}
