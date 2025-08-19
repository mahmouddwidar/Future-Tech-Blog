type PayLoad = {
    id: number,
    email: string,
    role: string,
}

export type { PayLoad };

export interface PostWithAuthor {
    id: number;
    title: string;
    content: string;
    category: string;
    author: {
        id: number;
        first_name: string;
        last_name: string | null;
        email: string;
        imageUrl: string | null;
        bio: string | null;
    };
    imageUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface NavLink {
    id: number,
    href: string,
    text: string
}

type Author = {
    id: number,
    first_name: string,
    last_name: string,
    imageUrl: string | null,
}


export interface Post {
    id: number,
    title: string,
    content: string,
    imageUrl: string | null,
    category: string,
    authorId: number,
    updatedAt: Date,
    createdAt: Date,
    author?: Author,
    comments?: Author[],

}