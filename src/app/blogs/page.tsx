import Articles from "@/components/Articles/Articles";
import { articlesCards } from "@/utils/content";
import NewsHero from "@/components/NewsHero";

export default function page() {
	return (
		<>
			<NewsHero />
			<Articles articles={articlesCards} />;
		</>
	);
}
