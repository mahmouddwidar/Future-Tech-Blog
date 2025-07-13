import ArticleStats from "@/components/Articles/ArticleStats";
import ExternalLink from "@/components/ExternalLink";
import { Blog } from "@/utils/contentTypes";
import Image from "next/image";
import React from "react";

export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<div className="container mx-auto px-4 lg:px-0 grid grid-cols-2 lg:flex lg:gap-14">
			{/* Author Card */}
			<div className="font-inter flex gap-2 items-center w-fit lg:w-1/5 lg:order-1 lg:self-start">
				<Image
					src={blog.author.profileLink}
					alt={blog.title}
					width={60}
					height={60}
				/>
				<div>
					<h3 className="font-semibold text-lg text-white">
						{blog.author.name}
					</h3>
					<p className="text-sm text-grey-60">{blog.category}</p>
				</div>
			</div>

			{/* Blog Link */}
			<ExternalLink
				href="/"
				title="View Blog"
				className="w-fit ml-auto lg:order-3 whitespace-nowrap lg:self-center h-fit"
			/>

			{/* Blog Details */}
			<div className="font-inter col-span-2 mt-7.5 lg:mt-2 lg:order-2 lg:self-start">
				<p className="text-base text-grey-60 mb-5">{blog.date}</p>
				<h3 className="font-semibold text-lg text-white mb-1">{blog.title}</h3>
				<p className="text-sm text-grey-60 mb-5">{blog.description}</p>
				{/* Blog Stats */}
				<ArticleStats
					likes={blog.likes}
					comments={blog.comments}
					shares={blog.shares}
				/>
			</div>
		</div>
	);
}
