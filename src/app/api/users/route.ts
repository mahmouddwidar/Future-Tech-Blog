import prisma from "@/lib/prisma";
import { CreateUserDto } from "@/utils/dtos";
import { createUserSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { verifyToken } from "@/utils/verifyToken";
import z from "zod";


/**
 * @method GET
 * @route ~/api/users
 * @description Retrieves a list of all users from the database
 * @access private (only admin can access this route)
 */
export async function GET(request: NextRequest) {
    try {
        const user = verifyToken(request);
        if (user === null || user.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        const users = await prisma.user.findMany({
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                bio: true,
                imageUrl: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            }
        });
        if (!users || users.length === 0) {
            return NextResponse.json({ msg: "No users found" }, { status: 404 });
        }
        return NextResponse.json(users, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            { msg: "Failed to fetch users", error: (error as Error).message },
            { status: 500 }
        );
    }
}

/**
 * @method POST
 * @route ~/api/users
 * @description Create new user
 * @access private (only admin can access this route)
 */
export async function POST(req: NextRequest) {
    try {
        const user = verifyToken(req);
        if (user === null || user.role !== "ADMIN") {
            return NextResponse.json({ msg: "Unauthorized" }, { status: 401 })
        }

        const body = (await req.json()) as CreateUserDto;


        const validation = createUserSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ msg: "Invalid data", errors: z.flattenError(validation.error).fieldErrors }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(body.password, 10)

        await prisma.user.create({
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                password: hashedPassword,
                role: body.role,
            }
        })

        return NextResponse.json({ msg: "User Created Successfully!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "Failed to create user", error: (error as Error).message }, { status: 500 })
    }
}