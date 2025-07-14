import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

/**
 * @route ~/api/users
 * @method GET
 * @description Retrieves a list of all users from the database
 * @access Public
 */
export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    try {
        const id = Number((await params).id);
        const user = await prisma.user.findUnique({ where: { id: id } });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch users", details: error },
            { status: 500 }
        );
    }
}