import { CommentWithUser } from "@/utils/type";
import React from "react";
import AuthorImage from "../Blog/AuthorImage";

export default function CommentCard({ comment }: { comment: CommentWithUser }) {
	return (
		<div className="p-4 border border-dark-15 rounded">
			<div className="flex justify-between items-center">
				<div className="flex justify-start items-center gap-x-2.5">
					<AuthorImage imageUrl={null} firstName={comment.author.first_name} />
					<p className="text-white">
						{comment.author?.first_name} {comment.author?.last_name}
					</p>
				</div>
				<div>
					<p className="text-sm text-grey-50 self-start">
						{new Date(comment.createdAt).toDateString()}
					</p>
					{/* TODO: Add edit and delete buttons */}
				</div>
			</div>
			<p className="text-grey-70 mt-3 ms-2.5">{comment.content}</p>
		</div>
	);
}
