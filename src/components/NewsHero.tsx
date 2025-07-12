export default function NewsHero() {
	return (
		<section className="container px-4 mx-auto flex justify-between items-center flex-wrap py-10 lg:pt-20 lg:pb-24.5">
			<h1 className="font-kumbh font-medium text-3xl lg:text-6xl text-white">
				Today&apos;s Headlines: Stay{" "}
			</h1>

			<div className="flex justify-between items-center flex-wrap lg:flex-nowrap lg:mt-5">
				<p className="font-kumbh font-medium text-3xl lg:text-6xl text-white mb-3.5 me-15">
					Informed
				</p>
				<p className="font-inter text-sm lg:text-base text-grey-60">
					Explore the latest news from around the world. We bring you
					up-to-the-minute updates on the most significant events, trends, and
					stories. Discover the world through our news coverage.
				</p>
			</div>
		</section>
	);
}
