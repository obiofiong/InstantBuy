function SidebarItem({ name, img }) {
	return (
		<div className="flex flex-col items-center text-xs text-center p-3 my-3 hover:bg-gray-100 hover:shadow-md rounded-lg">
			<img src={img} className="" />
			<p>{name}</p>
		</div>
	);
}

export default SidebarItem;
