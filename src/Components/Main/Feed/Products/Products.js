import Product from "./Product";
import productsList from "../../../../Utils/FakeStore/products.js";

function Products() {
	console.log(productsList);
	return (
		<div className="py-3 my-3 flex w-64 scrollbar-hidey overscroll-x-scroll ">
			{/* {productList.slice(1, 5).map((product) => (
				<Product key={product.id} product={product} />
			))} */}
			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	);
}

export default Products;
