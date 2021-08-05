import item from "../../../../Utils/FakeStore/1.jpg";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

function Product() {
	return (
		<div className="relative w-40 h-auto px-3 py-2 rounded-xl border bg-white mx-2 hover:shadow-lg filter hover:drop-shadow-lg transition duration-200 ease-in-out group">
			<div className="absolute top-1 right-2 cursor-pointer transition duration-400 ease-in-out">
				<HeartIcon className="h-5 text-red-500  opacity-0 group-hover:opacity-100" />
			</div>
			<div className="w-max cursor-pointer py-1">
				<img
					className="w-32 mx-auto"
					// src={require("../../../../Utils/FakeStore/1.jpg")}
					alt="img"
					src={item}
				/>
			</div>
			<div className="text-xs">
				<p className="text-wrap ">Expensive HIgh Cool Quality Bag</p>
				<div className="flex items-center justify-between">
					<p className=" font-bold">$230,000</p>
					<span className="cursor-pointer p-1 rounded-full border sm:opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out hover:bg-gray-100 transform -rotate-45 group-hover:rotate-0">
						<ShoppingBagIcon className="h-5" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Product;
