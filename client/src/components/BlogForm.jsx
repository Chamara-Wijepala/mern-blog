export default function BlogForm({ state, handleChange, submit }) {
	return (
		<form className="flex flex-col gap-4 text-center max-w-xl mx-auto">
			<div className="flex flex-col gap-2">
				<label className="text-2xl">Title</label>
				<input
					type="text"
					name="title"
					value={state.title}
					onChange={handleChange}
					required
					className="h-8 p-2 border-[1px] border-gray-400 rounded-md"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label className="text-2xl">Snippet</label>
				<input
					type="text"
					name="snippet"
					value={state.snippet}
					onChange={handleChange}
					required
					className="h-8 p-2 border-[1px] border-gray-400 rounded-md"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label className="text-2xl">Description</label>
				<textarea
					name="description"
					value={state.description}
					onChange={handleChange}
					required
					className="p-2 border-[1px] border-gray-400 rounded-md"
				></textarea>
			</div>

			<button
				className="bg-green-400 py-2 text-2xl mt-8 rounded-md"
				onClick={submit}
			>
				Submit
			</button>
		</form>
	);
}
