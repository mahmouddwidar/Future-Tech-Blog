import { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// Verify for backend
export function verifyToken(request: NextRequest): JwtPayload | null {
    try {
        const token = request.cookies.get("token")?.value as string;
        if (!token) return null;

        const privateKey = process.env.JWT_SECRET as string;
        const userPayload = jwt.verify(token, privateKey) as JwtPayload;
        return userPayload;

    } catch (error) {
        return null;
    }
}

// Verify for frontend
export function verifyTokenForPages(token): JwtPayload | null {
    try {        
        const privateKey = process.env.JWT_SECRET as string;
        const userPayload = jwt.verify(token, privateKey) as JwtPayload;
        if (!userPayload) return null;
        return userPayload;

    } catch (error) {
        return null;
    }
}