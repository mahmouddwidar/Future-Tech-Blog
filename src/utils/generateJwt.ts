import jwt from "jsonwebtoken";
import { PayLoad } from "./type";

export function generateJwt(payLoad: PayLoad): string {
    const secretKey = process.env.JWT_SECRET as string;
    return jwt.sign(payLoad, secretKey, {
        expiresIn: "1d",
    });
}