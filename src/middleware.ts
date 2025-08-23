import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const authToken = req.cookies.get("token");

    if (!authToken) {
        if (req.nextUrl.pathname.startsWith("/api/users/profile/")) {
            return NextResponse.json(
                {
                    msg: "Authentication token is required",
                },
                { status: 401 }
            );
        }
    } else {
        if (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register') {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }
}

export const config = {
    matcher: [
        "/api/users/profile/:path*", "/login", "/register",
    ]
}