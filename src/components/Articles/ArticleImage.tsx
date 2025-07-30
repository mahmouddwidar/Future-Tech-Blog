import Image from "next/image";

export default function ArticleImage({
	imgLink,
	title,
	className = "",
}: {
	imgLink: string;
	title: string;
	className?: string;
}) {
	// If no image link is provided, show a placeholder
	if (!imgLink || imgLink.trim() === "") {
		return (
			<div className={`bg-dark-15 flex items-center justify-center ${className}`}>
				<span className="text-gray-500 text-sm">No image available</span>
			</div>
		);
	}

	return (
		<Image
			src={imgLink}
			alt={title}
			width={800}
			height={450}
			className={className}
			priority
		/>
	);
}
