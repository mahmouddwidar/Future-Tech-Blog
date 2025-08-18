import Image from "next/image";
// import { CalendarIcon, ClockIcon } from "@/components/icons";

export default function BlogHeader({ post }: { post: any }) {
    // console.log("post", post)
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
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-55">
                        {/* <Image
                            src={post.author.image}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                        /> */}
                    </div>
                    <div>
                        <p className="text-white font-medium">{post.author.first_name}</p>
                        {/* <p className="text-grey-60 text-sm">{post.author.role}</p> */}
                    </div>
                </div>

                <div className="flex gap-4 text-grey-60 text-sm">
                    <div className="flex items-center gap-1.5">
                        {/* <CalendarIcon className="w-4 h-4" /> */}
                        <span>{post.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        {/* <ClockIcon className="w-4 h-4" /> */}
                        <span>{10} min read</span>
                    </div>
                </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-dark-15">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}