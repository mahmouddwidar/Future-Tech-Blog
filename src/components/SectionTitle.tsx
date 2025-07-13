export default function SectionTitle({
	title,
	subTitle,
	children,
}: {
	title: string;
	subTitle: string;
	children?: React.ReactNode;
}) {
	return (
		<div className="container mx-auto py-10 px-4 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between">
			<div>
				<p className="text-sm lg:text-base font-inter font-medium text-white py-1 px-2 bg-dark-20 w-fit mb-2.5 lg:mb-3.5 rounded-sm">
					{subTitle}
				</p>
				<h2 className="font-kumbh font-medium text-3xl lg:text-5xl text-white">
					{title}
				</h2>
			</div>
			{children}
		</div>
	);
}
