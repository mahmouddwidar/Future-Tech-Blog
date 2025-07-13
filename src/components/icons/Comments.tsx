import React from "react";

export default function Comments({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 16 15"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M5.07167 13.4906C5.95564 13.9235 6.94952 14.1666 8.00016 14.1666C11.6821 14.1666 14.6668 11.1819 14.6668 7.49992C14.6668 3.81802 11.6821 0.833252 8.00016 0.833252C4.31827 0.833252 1.3335 3.81802 1.3335 7.49992C1.3335 8.8667 1.7448 10.1374 2.45038 11.195M5.07167 13.4906L1.3335 14.1666L2.45038 11.195M5.07167 13.4906L5.07709 13.4897M2.45038 11.195L2.45144 11.1922"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
