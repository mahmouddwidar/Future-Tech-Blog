// Data Transfer Object

// USER
interface CreateUserDto {
    first_name: string,
    last_name?: string,
    email: string,
    password: string,
    role?: string,
}

interface UpdateUserDto {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    bio?: string,
    imageUrl?: string
}

interface LoginUserDto {
    email: string,
    password: string,
}

// POST
interface CreatePostDto {
    title: string,
    content: string,
    category: string,
    authorId: number,
    imageUrl: string
}

interface UpdatePostDto {
    title?: string,
    content?: string,
    category?: string,
    imageUrl?: string
}


// COMMENT
interface CreateCommentDto {
    content: string,
    postId: number,
}

export type { CreateUserDto, UpdateUserDto, CreatePostDto, UpdatePostDto, LoginUserDto, CreateCommentDto }