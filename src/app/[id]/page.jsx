import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

async function obtenerProducto(id){
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if(!response.ok) throw new Error('No se pudo adquirir el dato');
  return response.json();
}

const page = async ({params: {id}}) => {

  const data = await obtenerProducto(id);

  console.log(id);
  return (
    <div className="bg-[#03045E] h-screen flex flex-col items-center">
    <h1 className="py-7 text-center font-extrabold text-7xl">L.A. Waldo Shop</h1>
      <div className='bg-[#0096C7] py-10 border-2 border-[#ADE8F4] w-[99%] h-[70%] flex flex-col items-center justify-evenly'>
      <h1 className='text-3xl font-bold'>{data.title}</h1>
      <div className='flex py-2'>
    {data.images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Product Image ${index + 1}`}
        width={300}
        height={300}
        style={{ width: 300, height: 300 }}
        className=' px-2'
      />
    ))}
  </div>
      <div className='text-lg'>
      <p>
        Descripcion: {data.description}
      </p>
      <p>
        Precio: ${data.price}
      </p>
      <p>
        Calificacion: {data.rating}☆
      </p>
      <p>
        Cantidad en inventario: {data.stock}
      </p>
      <p>
        Marca: {data.brand}
      </p>  
      </div>

      <div className='mt-6 flex justify-evenly'>
      <Link
       className='mx-2 p-2 bg-gray-700 rounded-md hover:bg-gray-500 mt-6' href={`http://localhost:3000/`}
        >
        Regresar
        </Link>
        <Link
       className='p-2 bg-gray-700 rounded-md hover:bg-gray-500 mt-6' href={`http://localhost:3000/`}
        >
        Comprar?
        </Link>
      </div>
      </div>
    </div>
  )
}

export default page