function SidebarItem({ name, img }) {
	return (
		<div
			className="flex flex-col items-center text-xs text-center p-3 my-3 rounded-lg hover:bg-gray-100 hover:shadow-md transition duration-200 ease-in-out cursor-pointer
						sm:flex-row sm:my-0 sm:p-1 sm:rounded-2xl">
			<img src={img} className="sm:h-6 sm:mx-1 md:mx-3" />
			<p className="">{name}</p>
		</div>
	);
}

export default SidebarItem;
