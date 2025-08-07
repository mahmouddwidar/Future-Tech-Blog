import z from "zod";

// USER
const createUserSchema = z.object({
    first_name: z.string().min(3).max(100),
    last_name: z.string().max(100).nullable().optional(),
    email: z.email({ message: "This is not a valid email." }).min(1, { message: "This field has to be filled." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must not exceed 20 characters" }),
    role: z.enum(["USER", "ADMIN"]).default("USER"),
}).strict();

const updateUserSchema = z.object({
    first_name: z.string().min(3).max(100).optional(),
    last_name: z.string().min(3).max(100).nullable().optional(),
    email: z.email({ message: "This is not a valid email." }).min(1, { message: "This field has to be filled." }).optional(),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must not exceed 20 characters" }).optional(),
    bio: z.string().max(100).nullable().optional(),
    imageUrl: z.url().optional(),
}).strict()


const loginUserSchema = z.object({
    email: z.email({ message: "This is not a valid email." }).min(1, { message: "This field has to be filled." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password must not exceed 20 characters" })
})

// POST
const createPostSchema = z.object({
    title: z.string().min(5).max(200),
    content: z.string().min(10).max(1000),
    category: z.string().min(3).max(50),
    authorId: z.number().int().positive(),
    imageUrl: z.url(),
}).strict()

const updatePostSchema = z.object({
    title: z.string().min(5).max(200).optional(),
    content: z.string().min(10).max(1000).optional(),
    category: z.string().min(3).max(50).optional(),
    authorId: z.number().int().positive().optional(),
    imageUrl: z.url().optional(),
}).strict()

const idSchema = z.object({
    id: z.coerce.number().int().positive({ message: 'Invalid ID' }),
});


//COMMENT
const createCommentSchema = z.object({
    content: z.string().min(1).max(1000),
    postId: z.number().int().positive(),
}).strict();

const updateCommentSchema = z.object({
    content: z.string().min(10).max(1000),
}).strict()


// AUTHENTICATION
const LoginSchema = z.object({
    email: z.email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).strict();

const registerSchema = z.object({
    first_name: z.string().min(3, { message: "First name must be at least 3 characters long" }).max(20, { message: "First name must not exceed 20 characters" }),
    last_name: z.string().max(20, { message: "Last name must not exceed 20 characters" }).nullable().optional(),
    email: z.email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must not exceed 20 characters" }),
    confirmPassword: z.string()
        .min(8, { message: "Confirm Password must be at least 8 characters long" })
        .max(20, { message: "Confirm Password must not exceed 20 characters" })
}).strict()
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export type RegisterUserData = Omit<z.infer<typeof registerSchema>, 'confirmPassword'>;

export { createUserSchema, updateUserSchema, idSchema, createPostSchema, updatePostSchema, loginUserSchema, createCommentSchema, updateCommentSchema, LoginSchema, registerSchema }