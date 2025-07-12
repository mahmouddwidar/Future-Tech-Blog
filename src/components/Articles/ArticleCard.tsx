import { articlesCards } from "@/utils/contentTypes";
import ArticleImage from "./ArticleImage";
import ArticleStats from "./ArticleStats";
import ArticleDetails from "./ArticleDetails";
import ReadMoreButton from "./ReadMoreButton";

export default function ArticleCard({
	article,
	isFirst = false,
}: {
	article: articlesCards;
	isFirst?: boolean;
}) {
	return (
		<article
			className={
				isFirst
					? "px-4 lg:px-0 py-10 w-full flex gap-10 items-center justify-start"
					: "px-4 lg:px-0 py-10 "
			}
		>
			<ArticleImage imgLink={article.imgLink} title={article.title} />
			<section className={isFirst ? "w-1/2" : ""}>
				<section>
					<h2 className="font-inter font-semibold text-xl text-white mb-1.5">
						{article.title}
					</h2>
					{article.detailsExpanded ? (
						<ArticleDetails
							details={article.details}
							category={article.category}
						/>
					) : (
						<p className="text-sm text-grey-60 mt-1">{article.category}</p>
					)}
				</section>
				<section
					className={
						isFirst
							? "mt-7 flex justify-between items-center lg:items-start lg:mt-10"
							: "mt-7 flex justify-between items-center"
					}
				>
					<ArticleStats likes={article.likes} shares={article.shares} />
					<ReadMoreButton detailsExpanded={article.detailsExpanded} />
				</section>
			</section>
		</article>
	);
}
