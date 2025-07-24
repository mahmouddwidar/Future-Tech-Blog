import { cookies } from "next/headers";
import { NextResponse } from "next/server";


/**
 * @method GET
 * @route ~/api/users/logout
 * @description Logout user
 * @access Public
 */
export async function GET() {
    try {
        (await cookies()).delete("token");
        return NextResponse.json({ msg: "Logout successful" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            msg: "Error logging out",
            error: (error as Error).message
        }, { status: 500 })
    }
}