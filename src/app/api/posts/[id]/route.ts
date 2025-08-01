import { Post } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { UpdatePostDto } from "@/utils/dtos";
import { idSchema, updatePostSchema } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/posts/:id
 * @method GET
 * @description Get Single Post with id
 * @access Public
 */
export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    try {

        // Invalid User Data
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid Post ID', errors: parseParams.error.issues },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Get Post
        const post = await prisma.post.findUnique({
            where: { id: id },
            include: {
                author: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        imageUrl: true,
                    }
                },
                comments: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        author: {
                            select: {
                                id: true,
                                first_name: true,
                                last_name: true,
                                imageUrl: true,
                            }
                        }
                    }
                }
            }
        });

        if (!post) {
            return NextResponse.json({ msg: "Post not found" }, { status: 404 });
        }
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { msg: "Failed to fetch users", error: (error as Error).message },
            { status: 500 }
        );
    }
}

/**
 * @route ~/api/posts/:id
 * @method PUT
 * @description Update Single Post Data
 * @access Public
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // check if user logged in
        const user = verifyToken(req);
        if (user === null) {
            return NextResponse.json({
                msg: "Unauthorized"
            }, { status: 401 })
        }

        // Validate ID
        const parsedParams = idSchema.safeParse(params);
        if (!parsedParams.success) {
            return NextResponse.json(
                { msg: 'Invalid post ID', error: parsedParams.error.issues[0].message },
                { status: 400 }
            );
        }

        const id = parsedParams.data.id;

        const existingPost = await prisma.post.findUnique({ where: { id } });

        if (!existingPost) {
            return NextResponse.json({ msg: 'Post not found.' }, { status: 404 });
        }

        if (user.id !== existingPost.authorId) {
            return NextResponse.json({
                msg: "You are not allowed to edit this post"
            }, { status: 403 })
        }

        const body = (await req.json()) as UpdatePostDto;

        const validated = updatePostSchema.safeParse(body);
        if (!validated.success) {
            return NextResponse.json(
                { msg: 'Failed to update post data.', error: validated.error.issues[0].message },
                { status: 400 }
            );
        }

        const post: Post = await prisma.post.update({
            where: { id },
            data: validated.data,
            select: {
                id: true,
                title: true,
                content: true,
                category: true,
                authorId: true,
                author: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        email: true,
                        imageUrl: true,
                        bio: true,
                    },
                },
                imageUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return NextResponse.json({ msg: 'Post updated successfully.', data: post }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { msg: 'Failed to update post.', error: (error as Error).message },
            { status: 500 }
        );
    }
}


/**
 * @route ~/api/posts/:id
 * @method DELETE
 * @description Delete Post User
 * @access Public
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // check if user logged in
        const user = verifyToken(req);
        if (user === null) {
            return NextResponse.json({
                msg: "Unauthorized"
            }, { status: 401 })
        }

        // Invalid Post Data
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid post ID', error: parseParams.error.issues[0].message },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Post Not Found 404
        const existingPost = await prisma.post.findUnique({ where: { id } });

        if (!existingPost) {
            return NextResponse.json({ msg: "Post not found." }, { status: 404 });
        }

        // Delete Post
        if (user.id === existingPost.authorId || user.role === 'ADMIN') {
            // Delete Related Comments
            await prisma.comment.deleteMany({
                where: {
                    postId: existingPost.id
                }
            })
            
            await prisma.post.delete({
                where: {
                    id: id
                }
            });

            return NextResponse.json({
                msg: "Post Deleted"
            }, { status: 200 });
        }

        return NextResponse.json({
            msg: "You are not allowed to delete this post"
        }, { status: 403 });



    } catch (error) {
        return NextResponse.json({ msg: "Couldn't delete the post", error: (error as Error).message }, { status: 500 })
    }
}