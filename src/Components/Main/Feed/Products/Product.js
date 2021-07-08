import item from "../../../../Utils/FakeStore/1.jpg";
import { ShoppingBagIcon } from "@heroicons/react/solid";

function Product() {
	return (
		<div className="w-36 h-60 px-3 py-2 rounded-xl border bg-white mx-2 hover:shadow-md group ">
			<div className=" cursor-pointer py-1">
				<img
					className="h-40"
					// src={require("../../../../Utils/FakeStore/1.jpg")}
					src={item}
				/>
			</div>
			<div className="text-xs">
				<p className=" ">Expensive HIgh Cool Quality Bag</p>
				<div className="flex items-center justify-between">
					<p className=" font-bold">$230,000</p>
					<span className="cursor-pointer p-1 rounded-full border sm:opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out hover:bg-gray-100">
						<ShoppingBagIcon className="h-5" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default Product;
