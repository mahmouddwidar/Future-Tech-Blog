import { categories } from "@/utils/content";
import CategoryItem from "./CategoryItem";

export default function BlogsCategories() {
	return (
		<div className="container mx-auto px-4 lg:px-0 py-5 lg:py-10 flex gap-3.5 lg:justify-center items-center whitespace-nowrap overflow-x-auto">
			{categories.map((category) => (
				<CategoryItem
					key={category.id}
					name={category.name}
					isActive={category.isActive}
				/>
			))}
		</div>
	);
}
