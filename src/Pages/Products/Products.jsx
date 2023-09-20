import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  console.log("kkkkkkkkkkkkkkkkk", products);

  return (
    <div className="grid grid-cols-3 p-7 ml-7 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
