import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

export default function App() {
	return (
		<div className="container mx-auto p-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs/:id" element={<Blog />} />
			</Routes>
		</div>
	);
}
