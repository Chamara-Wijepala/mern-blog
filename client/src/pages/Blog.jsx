import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Blog() {
	const [blog, setBlog] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/blogs/${id}`)
			.then((res) => {
				setBlog(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<div className="flex gap-4 mb-8">
				<Link to="/">
					<button className="py-1 px-4 rounded-md bg-white border-gray-400 border">
						Back
					</button>
				</Link>

				<button className="py-1 px-4 ml-auto rounded-md bg-white border-gray-400 border">
					Edit
				</button>
				<button className="py-1 px-4 rounded-md bg-red-400 border-gray-400 border">
					Delete
				</button>
			</div>

			<div>
				<h2 className="text-3xl mb-4">{blog.title}</h2>
				<p className="text-lg">{blog.description}</p>
			</div>
		</>
	);
}
