'use client'
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductCard = ({product}) => {

  const router = new useRouter();


  return (
<div className='my-7 bg-[#0096C7] ml-2 mr-2 pb-2 rounded-xl border-2 border-[#ADE8F4] w-[90%] flex flex-col items-center justify-center'>
  <p className='text-xl font-medium py-2'>{product.title}</p>
  <div className='flex items-center justify-center py-2'>
    <Image
      src={product.thumbnail}
      alt="product image"
      width={200}
      height={200}
      style={{ width: 200, height: 200 }}
    />
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