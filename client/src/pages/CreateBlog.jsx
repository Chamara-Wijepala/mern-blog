import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../config';
import BlogForm from '../components/BlogForm';

export default function CreateBlog() {
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
			.post(`${baseUrl}/blogs/`, state)
			.then((res) => {
				if (res.status === 201) {
					navigate(`/blogs/${res.data._id}`);
				}
			})
			.catch((error) => console.log(error));
	}

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
