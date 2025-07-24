import { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

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