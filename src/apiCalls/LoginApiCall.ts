import { LoginSchema } from "@/utils/validationSchemas";
import z from "zod";

async function login(values: z.infer<typeof LoginSchema>) {
    const response = await fetch(`/api/users/login`, {
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

export const handleLoginFormSubmit = async (unSafeData: z.infer<typeof LoginSchema>) => {
    try {
        const { success, data } = LoginSchema.safeParse(unSafeData);

        if (!success) {
            return { error: true, message: "Invalid form data" };
        }

        const response = await login(data);
        return response;

    } catch (error) {
        console.error("Login error", error);
        return {
            error: true,
            message: error instanceof Error ? error.message : "Login failed"
        };
    }
}