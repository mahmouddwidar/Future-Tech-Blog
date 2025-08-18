export default function BlogContent({ content }: { content: string }) {
    return (
        <article className="prose prose-invert max-w-none">
            <p className="text-lg text-grey-80 leading-relaxed">{content}</p>
            {/* <div className="text-lg text-grey-80 leading-relaxed space-y-6">
                <p>This is where your blog content would be rendered. The styling is customized to match your theme with proper typography and spacing.</p>

                <h2 className="text-2xl font-bold text-white mt-10 mb-4">Section Title</h2>

                <p>Paragraph text with <a href="#" className="text-primary-55 hover:text-primary-70 underline">inline link</a>. Using Tailwind's typography plugin with custom inverted colors.</p>

                <blockquote className="border-l-4 border-primary-55 pl-4 py-2 text-primary-70 italic">
                    "This is a styled blockquote that stands out with your primary color scheme."
                </blockquote>

                <ul className="list-disc pl-6 space-y-2">
                    <li>List item with custom bullet colors</li>
                    <li>Another list item showing features</li>
                    <li>Final point in the list structure</li>
                </ul>

                <div className="bg-dark-10 rounded-xl p-6 border border-dark-15 my-6">
                    <h3 className="text-primary-55 font-bold mb-3">Key Takeaway</h3>
                    <p>This is a styled info box that uses your dark theme colors with primary accent.</p>
                </div>
            </div> */}
        </article>
    );
}