import SidebarItem from "./SidebarItem";
import exploreItems from "./exploreItems";

function Sidebar() {
	return (
		<div>
			<h2 className="font-bold text-2xl mx-4">Explore</h2>
			<div className="grid grid-cols-3 mx-4 my-2">
				{exploreItems.map((exploreItem) => (
					<SidebarItem
						name={exploreItem.name}
						img={exploreItem.img}
						key={exploreItem.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
