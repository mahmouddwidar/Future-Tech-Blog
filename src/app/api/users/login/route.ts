import prisma from "@/lib/prisma";
import { LoginUserDto } from "@/utils/dtos";
import { loginUserSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { setCookie } from "@/utils/generateJwt";
import { PayLoad } from "@/utils/type";


/**
 * @method POST
 * @route ~/api/users/login
 * @description Login user
 * @access Public
 */
export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as LoginUserDto;

        const validation = loginUserSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({
                msg: "email or password is invalid",
                errors: validation.error.issues[0].message
            }, { status: 400 })
        }

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email: body.email }
        });

        if (!user) {
            return NextResponse.json({
                msg: "User not found, create an account first"
            }, { status: 404 });
        }

        // Check password
        const isPasswordValid = await bycrpt.compare(body.password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({
                msg: "Invalid email or password"
            }, { status: 401 });
        }

        const payload: PayLoad = {
            id: user.id,
            email: user.email,
            role: user.role,
        }
        // Generate JWT
        const cookie = setCookie(payload);

        return NextResponse.json({
            msg: "Login successful",
        }, { status: 200, headers: { "Set-Cookie": cookie } });

    } catch (error) {
        console.error("Error in user login:", error);
        return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });

    }
}