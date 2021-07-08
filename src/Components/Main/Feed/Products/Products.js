import Product from "./Product";
import productsList from "../../../../FakeStore/Products";

function Products() {
	console.log(productsList);
	return (
		<div className="py-3 my-3">
			<Product />
		</div>
	);
}

export default Products;
