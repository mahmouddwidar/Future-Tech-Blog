import prisma from "@/lib/prisma";
import { POSTS_PER_PAGE } from "@/utils/constants";
import { CreatePostDto } from "@/utils/dtos";
import { createPostSchema } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/posts
 * @description Retrieves a list of all posts from the database
 * @access Public
 */
export async function GET(request: NextRequest) {
    try {
        const pageNumber = request.nextUrl.searchParams.get("pageNumber") || "1";
        const [posts, count] = await Promise.all([
            prisma.post.findMany({
                select: {
                    id: true,
                    title: true,
                    content: true,
                    category: true,
                    author: {
                        select: {
                            id: true,
                            first_name: true,
                            last_name: true,
                            email: true,
                            imageUrl: true,
                            bio: true,
                        }
                    },
                    imageUrl: true,
                    createdAt: true,
                    updatedAt: true,
                },
                skip: POSTS_PER_PAGE * (parseInt(pageNumber) - 1),
                take: POSTS_PER_PAGE,
            }),
            prisma.post.count(),
        ]);

        // No Posts Found 404
        if (!posts || posts.length === 0) {
            return NextResponse.json({ msg: "No posts found" }, { status: 404 });
        }
        return NextResponse.json({ count, posts }, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { msg: "Failed to fetch posts", error: (error as Error).message },
            { status: 500 }
        );
    }
}

/**
 * @method POST
 * @route ~/api/posts
 * @description Create new post
 * @access private only authenticated users
 */
export async function POST(req: NextRequest) {
    try {

        // check if user logged in
        const user = verifyToken(req);
        if (user === null) {
            return NextResponse.json({
                msg: "Unauthorized"
            }, { status: 401 })
        }

        const body = (await req.json()) as CreatePostDto;


        const validation = createPostSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ msg: validation.error.message }, { status: 400 })
        }


        await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                category: body.category,
                authorId: body.authorId,
                imageUrl: body.imageUrl,
            }
        })

        return NextResponse.json({ msg: "Post Created Successfully!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "Failed to create post", error: error.message }, { status: 500 })
    }
}