import prisma from "@/lib/prisma";
import { UpdateUserDto } from "@/utils/dtos";
import { idSchema, updateUserSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { verifyToken } from "@/utils/verifyToken";
import z from "zod";


/**
 * @route ~/api/users/:id
 * @method GET
 * @description Get Single User with id
 * @access private (only admin can access this route)
 */
export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    try {

        // Invalid User Data
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid user ID', errors: parseParams.error.issues },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Check if user is admin
        const userFromToken = verifyToken(request);
        if (userFromToken === null || userFromToken.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        // Get User
        const user = await prisma.user.findUnique({
            where: { id: id },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                bio: true,
                imageUrl: true,
                createdAt: true,
                updatedAt: true,
                role: true,
                posts: true,
                comments: true,
            }
        });
        if (!user) {
            return NextResponse.json({ msg: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { msg: "Failed to fetch users", error: (error as Error).message },
            { status: 500 }
        );
    }
}

/**
 * @route ~/api/users/:id
 * @method PUT
 * @description Update Single User Data
 * @access private (only admin can access this route)
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {

        // Invalid User Data
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid user ID', error: parseParams.error.issues[0].message },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Check if user is admin
        const userFromToken = verifyToken(req);
        if (userFromToken === null || userFromToken.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        // User Not Found 404
        const existingUser = await prisma.user.findUnique({ where: { id } });

        if (!existingUser) {
            return NextResponse.json({ msg: "User not found." }, { status: 404 });
        }


        // Update User
        const body = (await req.json()) as UpdateUserDto;

        const validation = updateUserSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ msg: "Failed to update user data.", errors: z.flattenError(validation.error).fieldErrors }, { status: 400 })
        };

        // Hash Password
        let hashedPassword = body.password;
        if (body.password) {
            hashedPassword = await bcrypt.hash(body.password, 10);
        }

        const user = await prisma.user.update({
            where: { id: id },
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                password: hashedPassword,
                bio: body.bio,
                imageUrl: body.imageUrl,
            },
            select: {
                first_name: true,
                last_name: true,
                email: true,
                bio: true,
                imageUrl: true,
                createdAt: true,
                updatedAt: true,
                role: true,
            }
        })
        return NextResponse.json({ msg: "User updated Successfully.", data: user }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ msg: "Failed to update user.", error: (error as Error).message }, { status: 500 })
    }
}

/**
 * @route ~/api/users/:id
 * @method DELETE
 * @description Delete Single User
 * @access private (only admin can access this route)
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Invalid User Data
        const parseParams = idSchema.safeParse(params);

        if (!parseParams.success) {
            return NextResponse.json(
                { msg: 'Invalid user ID', error: parseParams.error.issues[0].message },
                { status: 400 }
            );
        }

        const id = parseParams.data.id;

        // Check if user is admin
        const userFromToken = verifyToken(req);
        if (userFromToken === null || userFromToken.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        // User Not Found 404
        const existingUser = await prisma.user.findUnique({ where: { id } });

        if (!existingUser) {
            return NextResponse.json({ msg: "User not found." }, { status: 404 });
        }

        // Delete Related Comments
        await prisma.comment.deleteMany({
            where: {
                authorId: id
            }
        })

        // Delete Related Posts
        await prisma.post.deleteMany({
            where: {
                authorId: id
            }
        })

        // Delete User
        await prisma.user.delete({
            where: {
                id: id
            }
        });

        return NextResponse.json({ msg: "User Deleted Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ msg: "Couldn't delete the user", error: (error as Error).message }, { status: 500 })
    }
}