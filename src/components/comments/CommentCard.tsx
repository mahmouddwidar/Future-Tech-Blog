"use client"
import { CommentWithUser } from "@/utils/type";
import React from "react";
import AuthorImage from "../Blog/AuthorImage";
import { userStore } from "@/store/user";

export default function CommentCard({ comment }: { comment: CommentWithUser }) {
	const user = userStore((state) => state.user);

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
					{user && user.id === comment.author.id && (
						<div className="flex gap-x-2">
							<button className="text-sm text-primary-55 hover:text-primary-60">
								Edit
							</button>
							<button className="text-sm text-red-500 hover:text-red-600">
								Delete
							</button>
						</div>
					)}
				</div>
			</div>
			<p className="text-grey-70 mt-3 ms-2.5">{comment.content}</p>
		</div>
	);
}
