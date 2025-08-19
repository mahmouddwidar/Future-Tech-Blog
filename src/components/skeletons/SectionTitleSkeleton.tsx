export default function SectionTitleSkeleton() {
    return (
        <div className="container mx-auto py-10 px-4 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
                {/* Subtitle skeleton */}
                <div className="h-5 w-32 bg-dark-15 rounded-sm mb-2.5 lg:mb-3.5 animate-pulse"></div>
                {/* Title skeleton */}
                <div className="h-12 w-80 bg-dark-15 rounded-lg animate-pulse"></div>
            </div>
        </div>
    );
}