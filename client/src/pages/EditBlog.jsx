import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config';
import BlogForm from '../components/BlogForm';

export default function EditBlog() {
	const { id } = useParams();
	const [state, setState] = useState({
		title: '',
		snippet: '',
		description: '',
	});
	const navigate = useNavigate();

	function handleChange(e) {
		setState((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		axios
			.patch(`${baseUrl}/blogs/${id}`, state)
			.then((res) => {
				if (res.status === 200) {
					navigate(`/blogs/${id}`);
				}
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		axios
			.get(`${baseUrl}/blogs/${id}`)
			.then((res) => {
				const { title, snippet, description } = res.data;
				setState({
					title,
					snippet,
					description,
				});
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<BlogForm
				state={state}
				handleChange={(e) => handleChange(e)}
				submit={(e) => handleSubmit(e)}
			/>
		</div>
	);
}
