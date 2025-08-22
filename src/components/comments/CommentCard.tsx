"use client";
import { CommentWithUser, DotsMenuOption } from "@/utils/type";
import React, { useState } from "react";
import AuthorImage from "../Blog/AuthorImage";
import { userStore } from "@/store/user";
import { deleteComment } from "@/apiCalls/CommentApiCalls";
import { showToast } from "@/lib/toast";
import { useRouter } from "next/navigation";
import DotsMenu from "./DotsMenu";
import CommentForm from "./CommentForm";

export default function CommentCard({ comment }: { comment: CommentWithUser }) {
	const user = userStore((state) => state.user);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const router = useRouter();
	const menu: DotsMenuOption[] = [
		{
			label: "Edit",
			onClick: () => {
				setIsEditing(true);
			},
		},
		{
			label: "Delete",
			className: "text-red-500 hover:text-red-600",
			onClick: async () => {
				const data = await deleteComment(comment.id);
				if (data.error) {
					showToast.error(data.message);
					console.error("Error deleting comment: ", data.message);
				} else {
					showToast.success(data.message);
					router.refresh();
				}
			},
		},
	];

	return (
		<>
			{isEditing ? (
				<CommentForm mode="update" comment={comment} setIsEditing={setIsEditing} />
			) : (
				<div className="p-4 border border-dark-15 animate-fade-in">
					<div className="flex justify-between items-center">
						<div className="flex justify-start items-center gap-x-2.5">
							<AuthorImage
								imageUrl={comment.author.imageUrl}
								firstName={comment.author.first_name}
							/>
							<p className="text-white">
								{comment.author?.first_name} {comment.author?.last_name}
							</p>
						</div>
						<div className="flex justify-between items-start gap-x-1.5">
							<p className="text-sm text-grey-50 self-start">
								{new Date(comment.createdAt).toDateString()}
							</p>
							{/* TODO: Add edit and delete buttons */}
							{user && user.id === comment.author.id && (
								<div className="flex justify-end items-center mt-1">
									<DotsMenu options={menu} />
								</div>
							)}
						</div>
					</div>
					<p className="text-grey-70 mt-3 ms-2.5 whitespace-pre-line">
						{comment.content}
					</p>
				</div>
			)}
		</>
	);
}
