import prisma from "@/lib/prisma";
import { CreatePostDto } from "@/utils/dtos";
import { createPostSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/posts
 * @description Retrieves a list of all posts from the database
 * @access Public
 */
export async function GET() {
    try {
        const posts = await prisma.post.findMany({
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
            }
        });
        if (!posts || posts.length === 0) {
            return NextResponse.json({ msg: "No posts found" }, { status: 404 });
        }
        return NextResponse.json(posts, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { msg: "Failed to fetch posts", error: error.message },
            { status: 500 }
        );
    }
}

/**
 * @method POST
 * @route ~/api/posts
 * @description Create new post
 * @access Public
 */
export async function POST(req: NextRequest) {
    try {
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