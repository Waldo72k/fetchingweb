'use client'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductCard = ({product}) => {

  const router = new useRouter();


  return (
    <div className=' my-7'>
  <p className=' text-lg font-medium py-2'>{product.title}</p>
  <div className='flex py-2'>
    {product.images.map((image, index) => (
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
  <button
    className='p-2 bg-gray-700 rounded-md hover:bg-gray-500'
    onClick={() => router.push(`http://localhost:3000/${product.id}`)}
  >
    Ver mas
  </button>
</div>

  )
}

export default ProductCard