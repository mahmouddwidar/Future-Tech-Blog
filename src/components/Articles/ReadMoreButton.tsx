import Link from "next/link";
import ArrowUpRight from "../icons/arrowUpRight";

export default function ReadMoreButton({
	detailsExpanded,
}: {
	detailsExpanded: boolean;
}) {
	return (
		<Link
			href="/"
			className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-8 border border-dark-15 text-sm text-grey-60 hover:border-primary-55 hover:text-primary-55 transition-colors duration-300"
		>
			Read More
			{!detailsExpanded && <ArrowUpRight className="w-4 h-4 fill-current" />}
		</Link>
	);
}
