import express from 'express';
import blogController from '../controllers/blogController.js';

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.get('/:id', blogController.getBlog);

router.post('/', blogController.createBlog);

export default router;
