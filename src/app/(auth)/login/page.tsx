"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import z from "zod";
import { LoginSchema } from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { handleLoginFormSubmit } from "@/apiCalls/LoginApiCall";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

export default function LoginPage() {
	const router = useRouter();
	const [isLoading, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
		console.log(values);
		startTransition(async () => {
			try {
				const data = await handleLoginFormSubmit(values);
				console.log(data);
				if (data.error) {
					console.error(data.message);
					showToast.error(data.message);
				} else {
					showToast.success(data.message);
					router.push("/");
				}
			} catch (error) {
				console.error("Login failed:", error);
				showToast.error("Login failed. Please try again.");
			}
		});
	};

	return (
		<main className="min-h-screen flex items-center justify-center bg-dark-8 px-4 py-8 sm:py-12 md:py-16">
			<div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px]">
				<div className="text-center mb-6 sm:mb-8 md:mb-10">
					<h1 className="font-kumbh font-medium text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3">
						Welcome Back
					</h1>
					<p className="text-grey-50 font-inter text-sm sm:text-base">
						Login to access your personalized AI news feed
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-dark-10 border border-dark-15 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
				>
					{/* Email */}
					<div className="space-y-1.5 sm:space-y-2">
						<label
							htmlFor="email"
							className="block text-sm sm:text-base font-inter text-grey-60"
						>
							Email Address
						</label>
						<input
							{...register("email")}
							type="email"
							id="email"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Enter your email"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs sm:text-sm">
								{errors.email.message}
							</p>
						)}
					</div>

					{/* Password */}
					<div className="space-y-1.5 sm:space-y-2">
						<label
							htmlFor="password"
							className="block text-sm sm:text-base font-inter text-grey-60"
						>
							Password
						</label>
						<input
							{...register("password")}
							type="password"
							id="password"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Enter your password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs sm:text-sm">
								{errors.password.message}
							</p>
						)}
					</div>

					<Button
						type="submit"
						variant="primary"
						size="md"
						fullWidth
						className={`mt-4 sm:mt-6 ${
							isLoading ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
						}`}
					>
						{isLoading ? "Loading..." : "Login"}
					</Button>

					<p className="text-center text-sm sm:text-base text-grey-60 font-inter">
						Don&apos;t have an account?{" "}
						<Link
							href="/register"
							className="text-primary-55 hover:text-primary-60"
						>
							Sign up
						</Link>
					</p>
				</form>

				<div className="mt-4 sm:mt-6 text-center">
					<p className="text-xs sm:text-sm text-grey-60 font-inter">
						By continuing, you agree to our{" "}
						<Link
							href="/terms"
							className="text-primary-55 hover:text-primary-60"
						>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							href="/privacy"
							className="text-primary-55 hover:text-primary-60"
						>
							Privacy Policy
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
}
