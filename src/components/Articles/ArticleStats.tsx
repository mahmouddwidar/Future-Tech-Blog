import Heart from "../icons/Heart";
import Share from "../icons/Share";

function formatCount(count: number) {
	return count >= 1000
		? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K`
		: count;
}

export default function ArticleStats({
	likes,
	shares,
}: {
	likes: number;
	shares: number;
}) {
	return (
		<div className="flex justify-start items-center gap-2">
			<div className="bg-dark-10 border border-dark-15 py-1.5 px-3.5 rounded-full flex justify-between items-center gap-1.5">
				<Heart className="stroke-dark-40 fill-transparent size-5" />
				<p className="font-kumbh text-grey-60 text-sm">{formatCount(likes)}</p>
			</div>
			<div className="bg-dark-10 border border-dark-15 py-1.5 px-3.5 rounded-full flex justify-between items-center gap-1.5">
				<Share className="stroke-dark-40 fill-transparent size-5" />
				<p className="font-kumbh text-grey-60 text-sm">{formatCount(shares)}</p>
			</div>
		</div>
	);
}
