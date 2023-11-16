import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CreateBlog from './pages/CreateBlog';

export default function App() {
	return (
		<div className="max-w-4xl mx-auto px-4">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs/:id" element={<Blog />} />
				<Route path="/blogs/create" element={<CreateBlog />} />
			</Routes>
		</div>
	);
}
