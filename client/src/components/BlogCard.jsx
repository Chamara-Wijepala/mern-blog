export default function BlogCard({ title, snippet }) {
	return (
		<div className="bg-white border-[1px] border-gray-400 rounded-md p-4 my-6">
			<h3 className="text-2xl mb-4">{title}</h3>

			<p>{snippet}</p>
		</div>
	);
}
