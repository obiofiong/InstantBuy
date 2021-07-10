import Product from "./Product";
import productsList from "../../../../Utils/FakeStore/products.js";

function Products() {
	return (
		<div className="w-full py-3 px-1 my-3 mx-0 flex items-center scrollbar-hide overflow-x-scroll">
			{/* {productList.slice(1, 5).map((product) => (
				<Product key={product.id} product={product} />
			))} */}
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
}

export default Products;
