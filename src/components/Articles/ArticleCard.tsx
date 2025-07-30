import ArticleImage from "./ArticleImage";
import ArticleStats from "./ArticleStats";
import ReadMoreButton from "./ReadMoreButton";
import { PostWithAuthor } from "@/utils/type";

export default function ArticleCard({
	article,
	isFeatured = false,
}: {
	article: PostWithAuthor;
	isFeatured?: boolean;
}) {
	return (
		<article
			className={`group transition-all duration-300 hover:bg-dark-10 rounded-xl ${isFeatured
				? "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-5"
				: "flex flex-col overflow-hidden border border-dark-15 hover:border-primary-55"
				}`}
		>
			<div
				className={`relative overflow-hidden ${isFeatured ? "lg:h-full" : "aspect-[16/9]"
					}`}
			>
				<ArticleImage
					imgLink={article.imageUrl || ""}
					title={article.title}
					className={
						isFeatured
							? "w-full h-full object-cover rounded-lg"
							: "w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
					}
				/>
			</div>

			<div
				className={`flex flex-col ${isFeatured ? "lg:py-4" : "p-4 sm:p-6 flex-grow"
					}`}
			>
				<div className="flex-grow">
					<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-dark-15 text-primary-55 mb-3">
						{article.category}
					</span>
					<h2
						className={`font-inter font-semibold text-white mb-3 ${isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
							}`}
					>
						{article.title}
					</h2>
					<p className="text-gray-400 text-sm mb-3">
						{article.content.substring(0, 150)}...
					</p>
					<div className="text-gray-500 text-xs mb-3">
						By {article.author.first_name} {article.author.last_name} • {new Date(article.createdAt).toLocaleDateString()}
					</div>
				</div>

				<div
					className={`flex ${isFeatured
						? "items-center justify-between mt-6"
						: "items-center justify-between mt-4"
						}`}
				>
					<ArticleStats likes={0} shares={0} />
					<ReadMoreButton detailsExpanded={false} />
				</div>
			</div>
		</article>
	);
}
