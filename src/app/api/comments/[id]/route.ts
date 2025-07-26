import prisma from "@/lib/prisma";
import { UpdateCommentDto } from "@/utils/dtos";
import { idSchema, updateCommentSchema } from "@/utils/validationSchemas";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

interface Props {
    params: {
        id: string
    }
}

/**
 * @method PUT
 * @route ~/api/comments
 * @description Updates a comment
 * @access private (only owner of the comment can access this route)
 */
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        // Invalid Comment ID
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid Comment ID', errors: parseParams.error.issues },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Check if user logged in
        const user = verifyToken(request);
        if (user === null) {
            return NextResponse.json({
                msg: "Unauthorized, access denied"
            }, { status: 401 })
        }


        // Check if the comment exists
        const comment = await prisma.comment.findUnique({
            where: {
                id
            }
        });

        if (!comment) {
            return NextResponse.json({
                msg: "Comment not found",
            }, { status: 404 })
        }



        const body = await request.json() as UpdateCommentDto;

        // Validate Comment Data
        const validation = updateCommentSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({
                msg: "Couldn't update comment",
                errors: z.flattenError(validation.error).fieldErrors
            }, { status: 400 })
        }

        // Update Comment
        if (user.id === comment.authorId) {
            const updatedComment = await prisma.comment.update({
                where: {
                    id
                },
                data: {
                    content: body.content
                }
            });

            return NextResponse.json({
                msg: "Comment Updated Successfully!",
                updatedComment
            }, { status: 200 });

        }

        return NextResponse.json({
            msg: "You are not allowed to edit this comment"
        }, { status: 403 })


    } catch (error) {
        return NextResponse.json({
            msg: "Internal Server Error",
            error: (error as Error).message
        }, { status: 500 })
    }
}


/**
 * @method DELETE
 * @route ~/api/comments
 * @description Deletes a comment
 * @access private (only owner of the comment OR Admin can delete comments)
 */
export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        // Check ID Validation
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid Comment ID', errors: parseParams.error.issues },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Check if user logged in
        const user = verifyToken(request);
        if (user === null) {
            return NextResponse.json({
                msg: "Unauthorized, access denied"
            }, { status: 401 })
        }


        // Check if the comment exists
        const comment = await prisma.comment.findUnique({
            where: {
                id
            }
        });

        if (!comment) {
            return NextResponse.json({
                msg: "Comment not found",
            }, { status: 404 })
        }

        // Delete The Comment
        if (user.id === comment.authorId || user.role === "ADMIN") {
            await prisma.comment.delete({
                where: {
                    id
                }
            });

            return NextResponse.json({
                msg: "Comment Deleted"
            }, { status: 200 });
        }

        return NextResponse.json({
            msg: "You are not allowed to delete this comment!"
        }, { status: 403 })


    } catch (error) {
        return NextResponse.json({
            msg: "Internal Server Error",
            error: (error as Error).message
        }, { status: 500 })
    }
}