import { SearchIcon } from "@heroicons/react/solid";

function SearchBar() {
	return (
		<div className="rounded-full py-1 px-4 w-auto  flex items-center">
			<SearchIcon className="h-6 mr-1 text-blue-300" />
			<form className="w-full">
				<input
					placeholder="Search Store"
					className="border-none w-full outline-none bg-transparent"
				/>
			</form>
		</div>
	);
}

export default SearchBar;
