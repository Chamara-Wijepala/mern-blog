import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config';

export default function Blog() {
	const [blog, setBlog] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	function deleteBlog() {
		axios
			.delete(`${baseUrl}/blogs/${id}`)
			.then((res) => {
				if (res.status === 200) navigate('/');
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		axios
			.get(`${baseUrl}/blogs/${id}`)
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

				<Link to={`/blogs/edit/${id}`} className="ml-auto">
					<button className="py-1 px-4  rounded-md bg-white border-gray-400 border">
						Edit
					</button>
				</Link>
				<button
					onClick={deleteBlog}
					className="py-1 px-4 rounded-md bg-red-400 border-gray-400 border"
				>
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
