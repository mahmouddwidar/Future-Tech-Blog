import ArticleSkeleton from "./ArticleSkeleton";
import SectionTitleSkeleton from "./SectionTitleSkeleton";

export default function ArticlesSkeleton() {
    return (
        <div className="pb-12 sm:pb-16 md:pb-20">
            {/* Featured Article Skeleton */}
            <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] border-y border-y-dark-15">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8 sm:py-10 md:py-12">
                        {/* Section Title Skeleton */}
                        <SectionTitleSkeleton />

                        {/* Featured Article Skeleton */}
                        <ArticleSkeleton isFeatured={true} />
                    </div>
                </div>
            </section>

            {/* Other Articles Grid Skeleton */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20">
                {/* Section Title Skeleton */}
                <SectionTitleSkeleton />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...Array(6)].map((_, idx) => (
                        <ArticleSkeleton key={idx} />
                    ))}
                </div>
            </section>
        </div>
    );
}