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
