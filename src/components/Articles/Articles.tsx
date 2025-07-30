"use client";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import SectionTitle from "../SectionTitle";
import { PostWithAuthor } from "@/utils/type";
import { useSearchParams } from "next/navigation";
import { getPosts } from "@/apiCalls/postApiCall";

export default function Articles() {
	const [posts, setPosts] = useState<PostWithAuthor[]>([]);
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams();
	const pageNumber = searchParams.get('pageNumber');

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				const fetchedPosts = await getPosts(pageNumber || undefined);
				setPosts(fetchedPosts);
			} catch (error) {
				console.error("Failed to fetch posts:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, [pageNumber]);

	if (loading) {
		return (
			<div className="pb-12 sm:pb-16 md:pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="py-8 sm:py-10 md:py-12">
						<p>Loading articles...</p>
					</div>
				</div>
			</div>
		);
	}

	// Separate featured post from other posts
	const [featuredPost, ...otherPosts] = posts.length > 0 ? posts : [];

	return (
		<div className="pb-12 sm:pb-16 md:pb-20">
			{/* Featured Article Section */}
			{featuredPost && (
				<section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-y border-y-dark-15">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="py-8 sm:py-10 md:py-12">
							<SectionTitle
								title="Featured Article"
								subTitle="Latest insights from our experts"
							/>
							<ArticleCard article={featuredPost} isFeatured />
						</div>
					</div>
				</section>
			)}

			{/* Other Articles Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
				<SectionTitle
					title="Latest Articles"
					subTitle="Explore more AI insights"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{otherPosts.map((article: PostWithAuthor, idx: number) => (
						<ArticleCard key={article.id || idx} article={article} />
					))}
				</div>
			</section>
		</div>
	);
}
