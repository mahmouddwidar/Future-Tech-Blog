"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import z from "zod";
import { registerSchema } from "@/utils/validationSchemas";
import { useTransition } from "react";
import { showToast } from "@/lib/toast";
import { handleRegisterFormSubmit } from "@/apiCalls/registerApiCall";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
	const router = useRouter();
	const [isLoading, startTransition] = useTransition();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			first_name: "asa",
			last_name: "",
			email: "m@n.com",
			password: "12345678",
			confirmPassword: "12345678",
		},
	});

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		console.log(values);

		startTransition(async () => {
			try {
				const data = await handleRegisterFormSubmit(values);
				console.log(data)
				if (data.error) {
					console.error(data.message);
					showToast.error(data.message);
				} else {
					showToast.success(data.message);
					router.push("/");
				}
			} catch (error) {
				console.error("Login failed:", error);
				showToast.error("Registration Failed, please try again.");
			}
		});
	};
	return (
		<main className="min-h-screen flex items-center justify-center bg-dark-8 px-4 py-8 sm:py-12 md:py-16">
			<div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px]">
				<div className="text-center mb-6 sm:mb-8 md:mb-10">
					<h1 className="font-kumbh font-medium text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3">
						Create Account
					</h1>
					<p className="text-grey-50 font-inter text-sm sm:text-base">
						Join our community of AI enthusiasts
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-dark-10 border border-dark-15 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
				>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-1.5 sm:space-y-2">
							<label
								htmlFor="firstName"
								className="block text-sm sm:text-base font-inter text-grey-60"
							>
								First Name
							</label>
							<input
								{...register("first_name")}
								type="text"
								id="firstName"
								className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
								placeholder="Enter first name"
							/>
							{errors.first_name && (
								<p className="text-red-500 text-xs sm:text-sm">
									{errors.first_name.message}
								</p>
							)}
						</div>

						<div className="space-y-1.5 sm:space-y-2">
							<label
								htmlFor="lastName"
								className="block text-sm sm:text-base font-inter text-grey-60"
							>
								Last Name
							</label>
							<input
								{...register("last_name")}
								type="text"
								id="lastName"
								className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
								placeholder="Enter last name"
							/>
							{errors.last_name && (
								<p className="text-red-500 text-xs sm:text-sm">
									{errors.last_name.message}
								</p>
							)}
						</div>
					</div>

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
							placeholder="Create password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs sm:text-sm">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="space-y-1.5 sm:space-y-2">
						<label
							htmlFor="confirmPassword"
							className="block text-sm sm:text-base font-inter text-grey-60"
						>
							Confirm Password
						</label>
						<input
							{...register("confirmPassword")}
							type="password"
							id="confirmPassword"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Confirm password"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs sm:text-sm">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>

					<Button
						type="submit"
						variant="primary"
						size="md"
						fullWidth
						className={`mt-6 sm:mt-8 ${
							isLoading
								? "cursor-not-allowed opacity-30"
								: "hover:bg-primary-60 cursor-pointer"
						}`}
					>
						{isLoading ? "Loading..." : "Create Account"}
					</Button>

					<p className="text-center text-sm sm:text-base text-grey-60 font-inter">
						Already have an account?{" "}
						<Link
							href="/login"
							className="text-primary-55 hover:text-primary-60"
						>
							Sign in
						</Link>
					</p>
				</form>
			</div>
		</main>
	);
}
