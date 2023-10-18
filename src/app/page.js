import React from "react";
import { obtenerProductos } from "@/libs/getProductos";
import ProductCard from "@/components/ProductCard";


const HomePage = async () => {
  const {products} = await obtenerProductos();
  console.log(products);

  return (
    <div>
      <h1 className=" text-center font-extrabold text-2xl">Tienda de Waldo</h1>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  )
};

export default HomePage;