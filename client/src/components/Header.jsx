import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="border-b-[1px] border-gray-400 mb-8 py-8  flex items-center justify-between">
			<Link to="/">
				<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
					MERN Blog
				</h1>
			</Link>

			<Link to="/blogs/create">
				<button className="border-[1px] border-gray-400 rounded-md px-1 py-2 bg-white">
					New Blog
				</button>
			</Link>
		</header>
	);
}
