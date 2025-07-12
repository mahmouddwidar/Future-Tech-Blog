import ArticleMeta from "./ArticleMeta";

export default function ArticleDetails({
	details,
	category,
}: {
	details?: {
		description?: string;
		publicationDate?: string;
		author?: string;
	};
	category: string;
}) {
	return (
		<section>
			<p className="font-inter text-base text-grey-60 mb-5 lg:mt-3.5">
				{details?.description}
			</p>
			<ArticleMeta
				category={category}
				publicationDate={details?.publicationDate}
				author={details?.author}
			/>
		</section>
	);
}
