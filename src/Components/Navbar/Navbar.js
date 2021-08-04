// import {Trainers} from 'flat-color-icons'
import { useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";

function Navbar() {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const handleMobileNavToggle = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	return (
		<nav className="relative w-full bg-blue-100 px-4 pt-4 pb-6 sm:pt-6 sm:pb-3">
			<div className=""></div>
			{isMobileNavOpen && (
				<MobileNav handleMobileNavToggle={handleMobileNavToggle} />
			)}
			<div className="flex items-center justify-between mb-3 sm:justify-evenly">
				<div className="flex items-center cursor-pointer">
					<MenuAlt2Icon
						onClick={handleMobileNavToggle}
						className="h-10 text-blue-300 sm:hidden hover:text-white"
					/>
					<span className="font-bold mx-2 transform hover:scale-110">
						INSTANTBUY
					</span>
				</div>
				{/* Search bar on desktop */}
				<div className=" hidden sm:block flex-grow mx-6">
					<SearchBar className="" />
				</div>

				<div className="flex items-center">
					{/* Navbar on desktop */}
					<NavbarLinks />

					<div className="rounded-full h-7 w-7  sm:h-8 sm:w-8 border border-gray-400 bg-gray shadow-lg"></div>
					<div className="relative mx-2 cursor-pointer transform hover:scale-110">
						<span className="absolute -top-1 -right-2 rounded-full h-5 w-5 bg-red-500 text-white p-1 flex items-center justify-center transition duration-200">
							50
						</span>
						<ShoppingCartIcon className="h-8 " />
					</div>
				</div>
			</div>
			<div className="mx-8 sm:hidden">
				<SearchBar />
			</div>
		</nav>
	);
}

export default Navbar;
