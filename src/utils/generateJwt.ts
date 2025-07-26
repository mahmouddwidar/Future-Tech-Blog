import jwt from "jsonwebtoken";
import { PayLoad } from "./type";
import { serialize } from "cookie";

export function generateJwt(payLoad: PayLoad): string {
    const secretKey = process.env.JWT_SECRET as string;
    return jwt.sign(payLoad, secretKey, {
        expiresIn: "1d",
    });
};


export function setCookie(payLoad: PayLoad) {
    const token = generateJwt(payLoad);

    const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day,
    });

    return cookie;
}