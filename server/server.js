import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/blogs', blogRoutes);

mongoose
	.connect(MONGODB_URL)
	.then(() => {
		console.log('Server connected to db');
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
	})
	.catch((error) => console.log(error));
