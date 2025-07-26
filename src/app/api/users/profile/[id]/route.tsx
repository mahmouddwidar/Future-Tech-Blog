import prisma from "@/lib/prisma";
import { idSchema } from "@/utils/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/verifyToken";
import { UpdateUserDto } from "@/utils/dtos";
import bcrypt from "bcrypt";

interface Props {
	params: { id: string };
}

/**
 * @method GET
 * @route ~/api/users/profile/:id
 * @description Get user profile by ID
 * @access private only user can access their own profile
 */
export async function GET(req: NextRequest, { params }: Props) {
	try {
		// Validate user ID
		const parseParams = idSchema.safeParse(params);

		if (!parseParams.success) {
			return NextResponse.json(
				{ msg: "Invalid user ID", error: parseParams.error.issues[0].message },
				{ status: 400 }
			);
		}

		const id = parseParams.data.id;

		// Fetch user profile
		const user = await prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				first_name: true,
				last_name: true,
				imageUrl: true,
				bio: true,
				email: true,
				createdAt: true,
				updatedAt: true,
			},
		});

		if (!user) {
			return NextResponse.json(
				{
					msg: "User not found",
				},
				{ status: 404 }
			);
		}

		const userFromToken = verifyToken(req) as JwtPayload;

		if (userFromToken === null || userFromToken.id !== user.id) {
			return NextResponse.json(
				{ msg: "You are not authorized to view this profile" },
				{ status: 403 }
			);
		}

		return NextResponse.json(
			{
				msg: "User profile fetched successfully",
				user,
			},
			{ status: 200 }
		);

	} catch (error) {
		return NextResponse.json(
			{
				msg: "Failed to fetch user profile",
				error: (error as Error).message,
			},
			{ status: 500 }
		);
	}
}

/**
 * @method PUT
 * @route ~/api/users/profile/:id
 * @description Update user profile by ID
 * @access private only user can update their own profile
 */
export async function PUT(req: NextRequest, { params }: Props) {
	try {
		// Validate user ID
		const parseParams = idSchema.safeParse(params);

		if (!parseParams.success) {
			return NextResponse.json(
				{ msg: "Invalid user ID", error: parseParams.error.issues[0].message },
				{ status: 400 }
			);
		}

		const id = parseParams.data.id;

		// Fetch user profile
		const user = await prisma.user.findUnique({
			where: { id },
		});

		if (!user) {
			return NextResponse.json(
				{
					msg: "User not found",
				},
				{ status: 404 }
			);
		}

		const userFromToken = verifyToken(req) as JwtPayload;
		if (userFromToken === null || userFromToken.id !== user.id) {
			return NextResponse.json(
				{ msg: "You are not authorized to update this profile" },
				{ status: 403 }
			);
		}

		const body = (await req.json()) as UpdateUserDto;

		if (body.password) {
			body.password = await bcrypt.hash(body.password, 10);
		}

		const updatedUser = await prisma.user.update({
			where: { id: user.id },
			data: {
				first_name: body.first_name,
				last_name: body.last_name,
				email: body.email,
				password: body.password,
				bio: body.bio,
				imageUrl: body.imageUrl,
			},
		});

		const { password, role, ...userData } = updatedUser;
		return NextResponse.json(
			{
				msg: "User Profile Updated Successfully",
				userData,
			},
			{ status: 200 }
		);

	} catch (error) {
		return NextResponse.json(
			{
				msg: "Failed to update user profile",
				error: (error as Error).message,
			},
			{ status: 500 }
		);
	}
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

		// Delete User Comments
		await prisma.comment.deleteMany({
			where: {
				authorId: user.id
			}
		})

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
