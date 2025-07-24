import prisma from "@/lib/prisma";
import { idSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
	params: { id: string };
}

/**
 * @method DELETE
 * @route ~/api/users/profile/:id
 * @description Delete a user profile by ID
 * @access private
 */
export async function DELETE(req: NextRequest, { params }: Props) {
	try {
		// Invalid User Data
		const parseParams = await idSchema.safeParse(params);

		if (!parseParams.success) {
			return NextResponse.json(
				{ msg: "Invalid user ID", error: parseParams.error.issues[0].message },
				{ status: 400 }
			);
		}

		const id = parseParams.data.id;

		// Check if user exists
		const user = await prisma.user.findUnique({ where: { id } });
		if (!user) {
			return NextResponse.json(
				{
					msg: "User Not Found",
				},
				{ status: 404 }
			);
		}

		const userFromToken = verifyToken(req) as JwtPayload;

		if (userFromToken !== null && userFromToken.id !== user.id) {
			return NextResponse.json(
				{ msg: "You are not authorized to delete this user profile" },
				{ status: 403 }
			);
		}

		// Delete user Posts
		await prisma.post.deleteMany({
			where: { authorId: user.id },
		});

		// Delete user profile
		await prisma.user.delete({
			where: { id: user.id },
		});

		// Logout user by deleting the cookie
		(await cookies()).delete("token");

		return NextResponse.json(
			{
				msg: "User profile deleted successfully",
				userId: user.id,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ msg: "Failed to delete user profile", error: error.message },
			{ status: 500 }
		);
	}
}
