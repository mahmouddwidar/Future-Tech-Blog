import { Post } from "@/generated/prisma";
import { PostWithAuthor } from "@/utils/type";

interface PostsResponse {
    count: number;
    posts: PostWithAuthor[];
}

export async function getPosts(pageNumber: string | undefined): Promise<PostWithAuthor[]> {
    const response = await fetch(`http://localhost:3000/api/posts?pageNumber=${pageNumber}`);
    if (!response.ok) {
        throw new Error("Failed to fetch blogs!")
    }

    const data: PostsResponse = await response.json();
    return data.posts;
}

export async function getPostById(id: number) {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch blogs!")
    }
    const post: Post = await response.json();
    return post;
}