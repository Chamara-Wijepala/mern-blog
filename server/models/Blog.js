import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		snippet: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timeStamps: true }
);

export const Blog = mongoose.model('Blog', blogSchema);
