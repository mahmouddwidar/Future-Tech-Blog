import Image from "next/image";

export default function ArticleImage({
	imgLink,
	title,
	isFirst = false,
}: {
	imgLink: string;
	title: string;
	isFirst?: boolean;
}) {
	return (
		<figure className="mb-7.5 lg:first-of-type:w-1/2">
			<Image
				src={imgLink}
				alt={title}
				width={358}
				height={213}
				className={isFirst ? "lg:w-[515px] lg:h-[325px] " : " lg:h-[185px]"}
				// className="lg:first-of-type:w-[515px] lg:first-of-type:h-[325px] lg:w-full lg:h-[185px]"
			/>
		</figure>
	);
}
