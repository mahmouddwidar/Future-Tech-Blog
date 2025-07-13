import ExternalLink from "@/components/ExternalLink";
import SectionTitle from "@/components/SectionTitle";
import BlogsCategories from "./BlogsCategories";
import BlogCard from "./BlogCard";
import { blogs } from "@/utils/content";

export default function Blogs() {
	return (
		<>
			{/* Section Title */}
			<section className="bg-dark-10 border-y border-y-dark-15">
				<SectionTitle
					subTitle="A Knowledge Treasure Trove"
					title="Explore FutureTech's In-Depth Blog Posts"
				>
					<ExternalLink
						href="/"
						title="View All Blogs"
						className="w-full lg:w-fit mt-7.5 bg-dark-8"
					/>
				</SectionTitle>
			</section>

			{/* Blogs */}
			<section>
				<BlogsCategories />
				{blogs.map((blog, i) => (
					<section
						className="border-y border-y-dark-15 py-10 lg:py-15 px-4 lg:px-20"
						key={i}
					>
						<BlogCard blog={blog} />
					</section>
				))}
			</section>
		</>
	);
}
