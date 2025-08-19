export default function ArticleSkeleton({ isFeatured = false }: { isFeatured?: boolean }) {
    return (
        <article
            className={`group transition-all duration-300 hover:bg-dark-10 rounded-xl ${isFeatured
                ? "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-5"
                : "flex flex-col overflow-hidden border border-dark-15"
                }`}
        >
            {/* Image skeleton */}
            <div
                className={`relative overflow-hidden ${isFeatured ? "lg:h-full" : "aspect-[16/9]"
                    } bg-dark-15 animate-pulse rounded-lg`}
            />

            <div
                className={`flex flex-col ${isFeatured ? "lg:py-4" : "p-4 sm:p-6 flex-grow"
                    }`}
            >
                <div className="flex-grow">
                    {/* Category skeleton */}
                    <div className="h-6 w-24 bg-dark-15 rounded-full mb-3 animate-pulse"></div>

                    {/* Title skeleton */}
                    <div className={`h-7 bg-dark-15 rounded mb-3 animate-pulse ${isFeatured ? "w-full" : "w-4/5"}`}></div>
                    {isFeatured && <div className="h-7 w-3/4 bg-dark-15 rounded mb-3 animate-pulse"></div>}

                    {/* Excerpt skeleton */}
                    <div className="h-4 bg-dark-15 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-dark-15 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-2/3 bg-dark-15 rounded mb-3 animate-pulse"></div>

                    {/* Author info skeleton */}
                    <div className="h-3 w-40 bg-dark-15 rounded mb-3 animate-pulse"></div>
                </div>

                <div
                    className={`flex ${isFeatured
                        ? "items-center justify-between mt-6"
                        : "items-center justify-between mt-4"
                        }`}
                >
                    {/* Stats skeleton */}
                    <div className="flex gap-3">
                        <div className="h-6 w-12 bg-dark-15 rounded animate-pulse"></div>
                        <div className="h-6 w-12 bg-dark-15 rounded animate-pulse"></div>
                    </div>

                    {/* Read more button skeleton */}
                    <div className="h-9 w-24 bg-dark-15 rounded-md animate-pulse"></div>
                </div>
            </div>
        </article>
    );
}