// import {Trainers} from 'flat-color-icons'
import { MenuAlt2Icon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";

function Navbar() {
	return (
		<div className="w-screen bg-blue-100 px-4 pt-4 pb-6 sm:pt-6 sm:pb-3">
			<div className="flex items-center justify-between mb-3 sm:justify-evenly">
				<div className="flex items-center">
					<MenuAlt2Icon className="h-10 text-blue-300 sm:hidden" />
					<span className="font-bold mx-2">INSTANTBUY</span>
				</div>
				{/* Search bar on desktop */}
				<div className=" hidden sm:block flex-grow mx-6">
					<SearchBar className="" />
				</div>

				<div className="flex items-center">
					{/* Navbar on desktop */}
					<NavbarLinks />

					<div className="rounded-full h-8 w-8 border border-gray-400 bg-gray shadow-lg"></div>
					<div className="relative mx-2">
						<span className="absolute -top-1 -right-2 rounded-full h-5 w-5 bg-red-500 text-white p-1 flex items-center justify-center transition duration-100">
							50
						</span>
						<ShoppingCartIcon className="h-8" />
					</div>
				</div>
			</div>
			<div className="mx-8 sm:hidden">
				<SearchBar />
			</div>
		</div>
	);
}

export default Navbar;
