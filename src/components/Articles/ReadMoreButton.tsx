import Link from "next/link";
import ArrowUpRight from "../icons/arrowUpRight";

export default function ReadMoreButton({
	detailsExpanded,
}: {
	detailsExpanded: boolean;
}) {
	return (
		<Link
			href={`/`}
			className="px-5 py-3.5 rounded-lg bg-dark-8 border border-dark-15 font-inter text-sm text-grey-60 flex justify-between items-center gap-1"
		>
			Read More{" "}
			{!detailsExpanded && <ArrowUpRight className="fill-primary-55 size-4" />}
		</Link>
	);
}
