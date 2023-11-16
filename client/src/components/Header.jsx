import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="border-b-[1px] border-gray-400 mb-8 py-8 font-bold">
			<Link to="/">
				<h1 className="text-2xl md:text-4xl lg:text-5xl">MERN Blog</h1>
			</Link>
		</header>
	);
}
