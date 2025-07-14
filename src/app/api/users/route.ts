import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * @route ~/api/users
 * @method GET
 * @description Retrieves a list of all users from the database
 * @access Public
 */
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch users", details: error },
            { status: 500 }
        );
    }
}