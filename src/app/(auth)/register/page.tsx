import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function SignUpPage() {
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

				<form className="bg-dark-10 border border-dark-15 rounded-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div className="space-y-1.5 sm:space-y-2">
							<label
								htmlFor="firstName"
								className="block text-sm sm:text-base font-inter text-grey-60"
							>
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
								placeholder="Enter first name"
							/>
						</div>

						<div className="space-y-1.5 sm:space-y-2">
							<label
								htmlFor="lastName"
								className="block text-sm sm:text-base font-inter text-grey-60"
							>
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
								placeholder="Enter last name"
							/>
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
							type="email"
							id="email"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Enter your email"
						/>
					</div>

					<div className="space-y-1.5 sm:space-y-2">
						<label
							htmlFor="password"
							className="block text-sm sm:text-base font-inter text-grey-60"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Create password"
						/>
					</div>

					<div className="space-y-1.5 sm:space-y-2">
						<label
							htmlFor="confirmPassword"
							className="block text-sm sm:text-base font-inter text-grey-60"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-8 border border-dark-15 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-primary-55 focus:ring-1 focus:ring-primary-55"
							placeholder="Confirm password"
						/>
					</div>

					<div className="flex items-start space-x-2">
						<input
							type="checkbox"
							id="terms"
							className="mt-1 w-4 h-4 border border-dark-15 rounded bg-dark-8 focus:ring-primary-55 focus:ring-offset-0"
						/>
						<label
							htmlFor="terms"
							className="text-xs sm:text-sm text-grey-60 font-inter"
						>
							I agree to receive news and updates from FutureTech AI News and
							accept the{" "}
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
						</label>
					</div>

					<Button
						type="submit"
						variant="primary"
						size="md"
						fullWidth
						className="mt-6 sm:mt-8 hover:bg-primary-60 cursor-pointer"
					>
						Create Account
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
