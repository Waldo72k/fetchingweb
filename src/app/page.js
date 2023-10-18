import React from "react";
import { obtenerProductos } from "@/libs/getProductos";
import ProductCard from "@/components/ProductCard";


const HomePage = async () => {
  const {products} = await obtenerProductos();
  console.log(products);

  return (
    <div className="bg-[#03045E]">
      <h1 className="py-7 text-center font-extrabold text-7xl">L.A. Waldo Shop</h1>
      <div className="grid grid-cols-5 gap-7 items-center">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
      </div>
    </div>
  )
};

export default HomePage;