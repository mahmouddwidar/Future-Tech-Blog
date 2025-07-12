export default function HeroStats() {
	return (
		<section className="border-y border-y-dark-15">
			<div className="container flex justify-between items-center flex-wrap px-4 mx-auto">
				<div className="font-inter border-r border-dark-15 w-1/3 py-5">
					<h2 className="font-semibold text-2xl text-white">
						300<span className="text-primary-55">+</span>
					</h2>
					<p className="text-sm text-grey-60">Resources available</p>
				</div>
				<div className="font-inter border-r border-dark-15 w-1/3 p-5">
					<h2 className="font-semibold text-2xl text-white">
						12k<span className="text-primary-55">+</span>
					</h2>
					<p className="text-sm text-grey-60">Total Downloads</p>
				</div>
				<div className="font-inter w-1/3 pl-5">
					<h2 className="font-semibold text-2xl text-white">
						10K<span className="text-primary-55">+</span>
					</h2>
					<p className="text-sm text-grey-60">Active Users</p>
				</div>
			</div>
		</section>
	);
}
