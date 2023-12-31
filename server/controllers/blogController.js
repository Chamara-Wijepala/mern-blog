import asyncHandler from 'express-async-handler';
import { Blog } from '../models/Blog.js';

const getAllBlogs = asyncHandler(async (req, res) => {
	const blogs = await Blog.find();

	if (!blogs) {
		return res.status(400).json({ message: 'No blogs found' });
	}

	return res.status(200).json(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const blog = await Blog.findById(id);

	if (!blog) {
		return res.status(500).json({ message: 'Blog not found' });
	}

	return res.status(200).json(blog);
});

const createBlog = asyncHandler(async (req, res) => {
	const { title, snippet, description } = req.body;

	if (!title || !snippet || !description) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	const newBlog = { title, snippet, description };
	const blog = await Blog.create(newBlog);

	return res.status(201).json(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { title, snippet, description } = req.body;

	if (!title || !snippet || !description) {
		return res.status(400).json({ message: 'All fields are required' });
	}

	const result = await Blog.findByIdAndUpdate(id, req.body);

	if (!result) {
		return res.status(404).json({ message: 'Blog not found' });
	}

	return res.status(200).json(result);
});

const deleteBlog = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const result = await Blog.findByIdAndDelete(id);

	if (!result) {
		return res.status(404).json({ message: 'Blog not found' });
	}

	return res.status(200).json({ message: 'Blog deleted' });
});

export default {
	getAllBlogs,
	getBlog,
	createBlog,
	updateBlog,
	deleteBlog,
};
