export default function ArticleMeta({
	category,
	publicationDate,
	author,
}: {
	category: string;
	publicationDate?: string;
	author?: string;
}) {
	return (
		<section className="flex justify-between items-center lg:mt-10">
			<div className="font-inter">
				<h6 className="text-sm text-grey-60 mb-0.5">Category</h6>
				<p className="text-white text-sm">{category}</p>
			</div>
			<div className="font-inter">
				<h6 className="text-sm text-grey-60 mb-0.5">Publication Date</h6>
				<p className="text-white text-sm">{publicationDate}</p>
			</div>
			<div className="font-inter">
				<h6 className="text-sm text-grey-60 mb-0.5">Author</h6>
				<p className="text-white text-sm">{author}</p>
			</div>
		</section>
	);
}
