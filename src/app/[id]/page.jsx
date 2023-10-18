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
    <div className='my-2 mx-2 '>
      <h1 className=" text-center font-extrabold text-2xl">Tienda de Waldo</h1>
      <div className='bg-slate-500'>
      <h1 className='text-2xl'>{data.title}</h1>
      <div className='flex py-2'>
    {data.images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Product Image ${index + 1}`}
        width={200}
        height={200}
        style={{ width: 200, height: 200 }}
        className=' px-2'
      />
    ))}
  </div>
      <p>
        {data.description}
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

      <div className='mt-6'>
      <Link
       className='p-2 bg-gray-700 rounded-md hover:bg-gray-500 mt-6' href={`http://localhost:3000/`}
        >
        Regresar
        </Link>
      </div>
      </div>
    </div>
  )
}

export default page