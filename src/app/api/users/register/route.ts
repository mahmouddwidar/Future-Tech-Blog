import prisma from "@/lib/prisma";
import { CreateUserDto } from "@/utils/dtos";
import { createUserSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { User } from "@/generated/prisma";
import { setCookie } from "@/utils/generateJwt";
import { PayLoad } from "@/utils/type";

/**
 * @method POST
 * @route ~/api/users
 * @description Register and Create a new user
 * @access Public
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as CreateUserDto;

        const validation = createUserSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({
                msg: "Invalid user data",
                errors: validation.error.issues[0]
            }, { status: 400 })
        }

        // if email already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: body.email }
        });

        if (existingUser) {
            return NextResponse.json({
                msg: "Email already exists"
            }, { status: 400 });
        };

        // Create User
        const hashedPassword = await bycrpt.hash(body.password, 10);
        const user: User = await prisma.user.create({
            data: {
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
                password: hashedPassword,
            }
        });
        
        const payLoad: PayLoad = {
            id: user.id,
            email: user.email,
            role: user.role,
        }
        const cookie = setCookie(payLoad);

        return NextResponse.json(
            { msg: "Account Created Successfully" }, { status: 201, headers: { "Set-Cookie": cookie } }
        );
    } catch (error) {
        console.error("Error in user registration:", error);
        return NextResponse.json({ msg: "Internal server error" }, { status: 500 });

    }
}