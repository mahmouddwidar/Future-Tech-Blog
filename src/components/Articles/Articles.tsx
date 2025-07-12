import ArticleCard from "./ArticleCard";
import { articlesCards } from "@/utils/contentTypes";

export default function Articles({ articles }: { articles: articlesCards[] }) {
	const [firstArticle, ...otherArticles] = articles;

	return (
		<>
			{/* First article: full width, edge-to-edge border */}
			<section className="w-screen border-y border-y-dark-15 relative left-1/2 right-1/2 -mx-[50vw] px-4 lg:px-0">
				<div className="max-w-7xl mx-auto">
					<ArticleCard article={firstArticle} isFirst />
				</div>
			</section>
			{/* Other articles: grid layout */}
			<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 px-4 lg:px-0">
				{otherArticles.map((article, idx) => (
					<ArticleCard key={article.id || idx} article={article} />
				))}
			</section>
		</>
	);
}
