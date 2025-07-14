import { articlesCards } from "@/utils/contentTypes";
import ArticleImage from "./ArticleImage";
import ArticleStats from "./ArticleStats";
import ArticleDetails from "./ArticleDetails";
import ReadMoreButton from "./ReadMoreButton";

export default function ArticleCard({
	article,
	isFeatured = false,
}: {
	article: articlesCards;
	isFeatured?: boolean;
}) {
	return (
		<article
			className={`group transition-all duration-300 hover:bg-dark-10 rounded-xl ${
				isFeatured
					? "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-5"
					: "flex flex-col overflow-hidden border border-dark-15 hover:border-primary-55"
			}`}
		>
			<div
				className={`relative overflow-hidden ${
					isFeatured ? "lg:h-full" : "aspect-[16/9]"
				}`}
			>
				<ArticleImage
					imgLink={article.imgLink}
					title={article.title}
					className={
						isFeatured
							? "w-full h-full object-cover rounded-lg"
							: "w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
					}
				/>
			</div>

			<div
				className={`flex flex-col ${
					isFeatured ? "lg:py-4" : "p-4 sm:p-6 flex-grow"
				}`}
			>
				<div className="flex-grow">
					<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-dark-15 text-primary-55 mb-3">
						{article.category}
					</span>
					<h2
						className={`font-inter font-semibold text-white mb-3 ${
							isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
						}`}
					>
						{article.title}
					</h2>
					{article.detailsExpanded && (
						<ArticleDetails
							details={article.details}
							className="mb-4 sm:mb-6"
						/>
					)}
				</div>

				<div
					className={`flex ${
						isFeatured
							? "items-center justify-between mt-6"
							: "items-center justify-between mt-4"
					}`}
				>
					<ArticleStats likes={article.likes} shares={article.shares} />
					<ReadMoreButton detailsExpanded={article.detailsExpanded} />
				</div>
			</div>
		</article>
	);
}
