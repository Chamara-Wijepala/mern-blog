import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

export default function Home() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/blogs')
			.then((res) => {
				setBlogs(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<section>
				<h2 className="text-2xl md:text-4xl font-medium">All Blogs</h2>

				{blogs.map((blog) => (
					<Link to={`blogs/${blog._id}`} key={blog._id}>
						<BlogCard title={blog.title} snippet={blog.snippet} />
					</Link>
				))}
			</section>
		</>
	);
}
