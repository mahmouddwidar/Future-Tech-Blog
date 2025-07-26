import prisma from "@/lib/prisma";
import { CreateCommentDto } from "@/utils/dtos";
import { createCommentSchema } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";


/**
 * @method GET
 * @route ~/api/comments
 * @description Retrieves a list of all comments from the database
 * @access private (only admin can access this route)
 */
export async function GET(request: NextRequest) {
    try {
        const user = verifyToken(request);
        if (user === null || user.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        const comments = await prisma.comment.findMany();

        if (!comments || comments.length === 0) {
            return NextResponse.json({ msg: "No comments found" }, { status: 404 })
        }

        return NextResponse.json(comments, { status: 200 })

    } catch (error) {
        return NextResponse.json({ msg: "Failed to fetch comments", error: (error as Error).message }, { status: 500 })
    }
}


/**
 * @method POST
 * @route ~/api/comments
 * @description Creates a new comment`
 * @access private (only authenticated users can access this route)
 */
export async function POST(request: NextRequest) {
    try {
        const user = verifyToken(request);
        if (user === null) {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json() as CreateCommentDto;

        const validation = createCommentSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ msg: "Invalid data", errors: z.flattenError(validation.error).fieldErrors }, { status: 400 })
        }

        const comment = await prisma.comment.create({
            data: {
                content: body.content,
                postId: body.postId,
                authorId: user.id,
            }
        });

        return NextResponse.json({ msg: "Comment created successfully", comment }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ msg: "Failed to create a comment", error: (error as Error).message }, { status: 500 })
    }
}