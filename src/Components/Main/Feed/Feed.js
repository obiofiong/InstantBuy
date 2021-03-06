import NoticeCard from "./NoticeCard/NoticeCard";
import Products from "./Products/Products";
import Sneakers from "../../../img/Featured/sneakers.png";
import Laptop from "../../../img/Featured/laptop.png";

function Feed() {
	return (
		<div
			className="p-1
						sm:p-3
						col-span-5
		">
			<NoticeCard
				title="Featured Sale for Today"
				img={Sneakers}
				direction="main"
				bg="bg-blue"
				bgLevel={300}
			/>
			<Products />
			<NoticeCard
				title="Flash Sale for Today"
				img={Laptop}
				direction="opp"
				bg="bg-purple"
				bgLevel={400}
			/>
			<Products />
		</div>
	);
}

export default Feed;
