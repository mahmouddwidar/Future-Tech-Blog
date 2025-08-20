import { getPostById } from "@/apiCalls/postApiCall";
import BlogContent from "@/components/Blog/BlogContent";
import BlogHeader from "@/components/Blog/BlogHeader";
import CommentCard from "@/components/comments/CommentCard";
export default async function BlogPostPage({
    params,
}: {
    params: { id: number };
}) {
    const post = await getPostById((params).id);
    console.log(post)

    return (
        <div className="bg-dark-8 min-h-screen text-grey-97">
            {/* Hero Section */}
            <div className="border-b border-dark-15 bg-gradient-to-b from-dark-10 to-dark-8 pb-20 pt-28">
                <div className="container mx-auto px-4 max-w-4xl">
                    <BlogHeader post={post} />
                </div>  
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <BlogContent content={post.content} />
            </div>

            {/* Comments */}
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                {/* Render comments here */}
                <div className="flex flex-col gap-4">
                    { post?.comments.map( (comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    )) }
                </div>
            </div>
        </div>
    );
}