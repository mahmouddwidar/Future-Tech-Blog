"use client";

import { createCommentSchema } from "@/utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/Button";
import { useTransition } from "react";
import { addComment } from "@/apiCalls/CommentApiCalls";
import { showToast } from "@/lib/toast";
import { useRouter } from "next/navigation";

export default function AddCommentForm({ postId }: { postId: number }) {
	const [isLoading, startTransition] = useTransition();
	const router = useRouter();

	const onSubmit = (values: z.infer<typeof createCommentSchema>) => {
		startTransition(async () => {
			try {
				const data = await addComment({ ...values, postId });
                if (data.error) {
                    showToast.error(data.message);
                    return;
                }
				showToast.success(data.message);
				router.refresh();
                
			} catch (error) {
				showToast.error("Couldn't add comment, try again later");
				console.error("Couldn't add comment: ", error);
			}
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof createCommentSchema>>({
		resolver: zodResolver(createCommentSchema),
		defaultValues: {
			content: "",
			postId: postId,
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
				className="w-full resize-none p-2 border border-dark-15 rounded-lg bg-dark-8 text-white"
			/>
			{errors.content && (
				<p className="text-red-500 text-sm">{errors.content.message}</p>
			)}
			<Button
				type="submit"
				variant="primary"
				size="sm"
				fullWidth={false}
				className={`mt-0 w-fit font-inter ml-auto ${
					isLoading ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
				}`}
			>
				{isLoading ? "Loading..." : "Add"}
			</Button>
		</form>
	);
}
