
import { Comment } from "@/generated/prisma";

export type PayLoad = null | {
    id: number,
    email: string,
    role: string,
}

type Author = {
    id: number,
    first_name: string,
    last_name: string,
    imageUrl: string | null,
}

export interface PostWithAuthor {
    id: number;
    title: string;
    content: string;
    category: string;
    authorId: number;
    author: Author
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface NavLink {
    id: number,
    href: string,
    text: string
}

export type CommentWithUser = Comment & { author: Author }

export type SinglePost = PostWithAuthor & { comments: CommentWithUser[] }




    // id: number,
    // title: string,
    // content: string,
    // imageUrl: string | null,
    // category: string,
    // authorId: number,
    // updatedAt: Date,
    // createdAt: Date,
    // author?: Author,
    // comments?: Author[],

}