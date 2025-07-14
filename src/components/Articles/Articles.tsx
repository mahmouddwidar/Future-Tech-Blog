import ArticleCard from "./ArticleCard";
import { articlesCards } from "@/utils/contentTypes";
import SectionTitle from "../SectionTitle";

export default function Articles({ articles }: { articles: articlesCards[] }) {
	const [featuredArticle, ...otherArticles] = articles;

	return (
		<div className="pb-12 sm:pb-16 md:pb-20">
			{/* Featured Article Section */}
			<section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-y border-y-dark-15">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-8 sm:py-10 md:py-12">
						<SectionTitle
							title="Featured Article"
							subTitle="Latest insights from our experts"
						/>
						<ArticleCard article={featuredArticle} isFeatured />
					</div>
				</div>
			</section>

			{/* Other Articles Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
				<SectionTitle
					title="Latest Articles"
					subTitle="Explore more AI insights"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{otherArticles.map((article, idx) => (
						<ArticleCard key={article.id || idx} article={article} />
					))}
				</div>
			</section>
		</div>
	);
}
