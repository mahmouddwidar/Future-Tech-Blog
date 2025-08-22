"use client";
import Image from "next/image";
import CalenderIcon from "../icons/CalenderIcon";
import ClockIcon from "../icons/ClockIcon";
import Link from "next/link";
import { SinglePost } from "@/utils/type";
import AuthorImage from "./AuthorImage";
import { userStore } from "@/store/user";

export default function BlogHeader({ post }: { post: SinglePost }) {
	const user = userStore( (state) => state.user )

	return (
		<div className="flex flex-col gap-8">
			<div>
				<span className="inline-block px-3 py-1.5 bg-dark-15 rounded-full text-primary-55 text-sm font-medium">
					{post.category}
				</span>
			</div>

			<h1 className="text-4xl md:text-5xl font-bold font-kumbh text-white">
				{post.title}
			</h1>

			<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
				<div className="flex items-center gap-3">
					<AuthorImage
						imageUrl={post.author?.imageUrl}
						firstName={post.author?.first_name}
					/>
					<div>
						<p className="text-white font-medium">{post.author?.first_name}</p>
					</div>
				</div>

				<div className="flex gap-4 text-grey-60 text-sm">
					<div className="flex items-center gap-1.5">
						<CalenderIcon className="size-4 fill-white" />
						<span>{new Date(post.createdAt).toDateString()}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<ClockIcon className="size-4 fill-white" />
						<span>{10} min read</span>
					</div>
				</div>

				{user?.id == post.authorId && (
					<Link
						className="px-3 py-1 bg-primary-55 hover:bg-primary-60 transition-colors hover:text-black font-inter duration-100 rounded text-dark-8 ms-auto"
						href={`/blogs/${post.id}/edit`}
					>
						Edit post
					</Link>
				)}
			</div>

			<div className="relative aspect-video rounded-xl overflow-hidden border border-dark-15">
				{post.imageUrl ? (
					<Image
						src={post.imageUrl}
						alt={post.title}
						fill
						className="object-cover"
						priority
					/>
				) : (
					<p className="w-full h-full flex justify-center items-center bg-dark-8 text-grey-70 text-sm">
						No Image
					</p>
				)}
			</div>
		</div>
	);
}
