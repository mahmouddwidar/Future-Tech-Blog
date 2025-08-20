import React from "react";
import Image from "next/image";

export default function AuthorImage({
	imageUrl,
	firstName,
}: {
	imageUrl: string | null;
	firstName: string;
}) {
	return (
		<div className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden border-2 border-primary-55">
			{imageUrl ? (
				<Image src={imageUrl} alt={firstName} fill className="object-cover" />
			) : (
				<p className="flex justify-center items-center bg-dark-8 text-grey-70 font-semibold w-full h-full">
					{firstName[0]}
				</p>
			)}
		</div>
	);
}
