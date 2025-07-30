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