import { XIcon } from "@heroicons/react/solid";

function MobileNav({ handleMobileNavToggle }) {
	return (
		<div className="absolute w-full left-0 top-0 bg-blue-200 sm:hidden text-gray-800">
			<XIcon
				onClick={handleMobileNavToggle}
				className="h-10 ml-4 mt-4 text-blue-300 cursor-pointer hover:text-white"
			/>
			<ul className="m-6 ml-10">
				<li className="mx-auto cursor-pointer hover:text-white transition  transform hover:scale-110">
					Categories
				</li>
				<li className="mx-auto cursor-pointer hover:text-white transition  transform  hover:scale-110">
					About
				</li>
				<li className="mx-auto cursor-pointer hover:text-white transition  transform  hover:scale-110">
					Products
				</li>
			</ul>
		</div>
	);
}

export default MobileNav;
