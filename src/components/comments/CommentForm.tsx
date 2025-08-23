"use client";
import { Comment } from "@/generated/prisma";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import z from "zod";
import {
	createCommentSchema,
	updateCommentSchema,
} from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useTransition } from "react";
import { useRouter } from "next/navigation";
import { addComment, updateComment } from "@/apiCalls/CommentApiCalls";
import { showToast } from "@/lib/toast";

interface CommentFormProps {
	mode: "add" | "update";
	postId?: number;
	comment?: Comment;
	setIsEditing?: Dispatch<SetStateAction<boolean>>;
}

export default function CommentForm({
	mode,
	postId,
	comment,
	setIsEditing,
}: CommentFormProps) {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const schema = mode === "add" ? createCommentSchema : updateCommentSchema;

	const onSubmit = (values: z.infer<typeof schema>) => {
		startTransition(async () => {
			try {
				let data;
				if (mode === "add") {
					// For add, include postId in the values
					data = await addComment({ ...values, postId: postId! });
				} else {
					// For update, only pass content and commentId
					data = await updateComment({
						commentId: comment!.id,
						content: values.content,
					});
				}

				if (data.error) {
					showToast.error(data.message);
					return;
				}
				showToast.success(data.message);
				if (mode === "update" && setIsEditing) {
					setIsEditing(false);
				}
				router.refresh();
			} catch (error) {
				showToast.error(`Couldn't ${mode} comment, try again later`);
				console.error(`Couldn't ${mode} comment: `, error);
			}
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			content: mode === "update" ? comment?.content : "",
			...(mode === "add" && { postId: postId }),
		},
	});

	return (
		<form
			className="mb-4 flex flex-col gap-3"
			onSubmit={handleSubmit(onSubmit)}
		>
			<textarea
				{...register("content")}
				placeholder="Add a comment..."
				disabled={isLoading}
				className="w-full disabled:cursor-not-allowed disabled:opacity-30 resize-none py-2 px-3 border border-dark-15 rounded-lg bg-dark-8 text-white focus:outline-none focus:border-gray-100 transition-all duration-200"
			/>
			{errors.content && (
				<p className="text-red-500 text-sm">{errors.content.message}</p>
			)}
			<div className="flex justify-end items-center gap-x-2.5">
				<Button
					type="submit"
					variant="primary"
					size="sm"
					fullWidth={false}
					className={`mt-0 w-fit font-inter ${
						mode !== "add" ? "ml-auto" : "ms-auto"
					} ${isLoading ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
					disabled={isLoading}
				>
					{isLoading ? "Loading..." : mode === "update" ? "Update" : "Add"}
				</Button>
				{mode === "update" && (
					<Button
						type="button"
						variant="outline"
						size="sm"
						fullWidth={false}
						className={`mt-0 w-fit font-inter hover:text-white hover:border-red-700 ${
							isLoading ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
						}`}
						onClick={() => setIsEditing && setIsEditing(false)}
						disabled={isLoading}
					>
						Cancel
					</Button>
				)}
			</div>
		</form>
	);
}
