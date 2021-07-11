import { Link } from "react-router-dom";
function NavbarLinks() {
	return (
		<div className="hidden sm:block text-sm font-bold mx-6">
			<ul className="flex items-center space-x-4">
				<li className="cursor-pointer">Products</li>
				<li>Categories</li>
				<li>About</li>
			</ul>
		</div>
	);
}

export default NavbarLinks;
