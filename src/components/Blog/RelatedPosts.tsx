import Link from "next/link";
import Image from "next/image";

export default function RelatedPosts({ posts }: { posts: any[] }) {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group bg-dark-15 rounded-xl overflow-hidden border border-dark-20 hover:border-primary-55 transition-all"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <span className="inline-block px-3 py-1 text-sm bg-dark-10 text-primary-55 rounded-full mb-3">
                                {post.category}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary-55 transition-colors mb-2 line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-grey-60 text-sm">{post.date}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-primary-55 hover:text-primary-70 font-medium"
                >
                    View All Articles
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}