import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


/**
 * @method GET
 * @route ~/api/posts/search?searchQuery=value
 * @description Search All Posts by search text
 * @access Public
 */
export async function GET(request: NextRequest) {
    try {
        const searchQuery = request.nextUrl.searchParams.get("searchQuery");
        let posts;

        if (searchQuery) {
            posts = await prisma.post.findMany({
                where: {
                    title: {
                        contains: searchQuery,
                    }
                }
            });

            return NextResponse.json({
                posts
            }, { status: 200 })
        } else {
            posts = await prisma.post.findMany({ take: 6 })
            return NextResponse.json({
                posts
            }, { status: 200 })
        }

    } catch (error) {
        return NextResponse.json({
            msg: "Internal Server Error",
            error: (error as Error).message
        }, { status: 500 })
    }
}