import { registerSchema, RegisterUserData } from "@/utils/validationSchemas";
import z from "zod";


async function register(values: RegisterUserData) {
    const response = await fetch(`/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    if (!response.ok) {
        return { error: true, message: (await response.json()).msg };
    }

    const data = await response.json();
    return { error: false, message: data.msg };
}

export async function handleRegisterFormSubmit(
    unSafeData: z.infer<typeof registerSchema>
): Promise<{ error: boolean; message: string }> {
    try {
        const validationResult = registerSchema.safeParse(unSafeData);
        if (!validationResult.success) {
            const errorMessage = validationResult.error.errors
                .map(err => err.message)
                .join(', ');
            return { error: true, message: errorMessage || "Invalid form data" };
        }

        const { confirmPassword, ...userData } = validationResult.data;
        const response = await register(userData);
        return response;

    } catch (error) {
        console.error("Registration error:", error);
        return {
            error: true,
            message: error instanceof Error ? error.message : "Registration failed"
        };
    }
}