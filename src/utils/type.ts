
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

export interface DotsMenuOption {
    label: string;
    className?: string;
    onClick: () => void;
}