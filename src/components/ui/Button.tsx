import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
}

export function Button({
	children,
	className = "",
	variant = "primary",
	size = "md",
	fullWidth = false,
	...props
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center font-inter rounded-lg transition-colors";

	const variants = {
		primary: "bg-primary-55 hover:bg-primary-60 text-dark-8",
		secondary: "bg-dark-10 hover:bg-dark-15 text-white",
		outline:
			"border border-dark-15 hover:border-primary-55 text-grey-60 hover:text-primary-55",
	};

	const sizes = {
		sm: "px-4 py-2 text-sm",
		md: "px-5 py-3 text-base",
		lg: "px-6 py-4 text-lg",
	};

	const width = fullWidth ? "w-full" : "";

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
