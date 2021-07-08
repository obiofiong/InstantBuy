import NoticeCard from "./NoticeCard/NoticeCard";
import Products from "./Products/Products";

function Feed() {
	return (
		<div
			className="flex-1 p-1
						xs:p-3
						sm:p-6
		">
			<NoticeCard />
			<Products />
		</div>
	);
}

export default Feed;
