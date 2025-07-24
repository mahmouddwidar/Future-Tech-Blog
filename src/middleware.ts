import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const authToken = req.cookies.get("token");

    if (!authToken) {
        return NextResponse.json(
            {
                msg: "Authentication token is required",
            },
            { status: 401 }
        );
    }
}

export const config = {
    matcher: [
        "/api/users/profile/:path*",
    ]
}