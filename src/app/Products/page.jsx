"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdShare } from "react-icons/io";
import { IoMdImage } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { products } from "../../../public/assets/data";
const Products = () => {
  const router = useRouter()
  return <div className="border border-b-2" >
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-3 py-5 px-3">
   {products.map((product,index) =>  <div key={index}
     data-aos="zoom-in"
     data-aos-duration="500"
      className="border cursor-pointer hover:bg-gray-200 duration-300 border-black p-3 rounded" onClick={()=> router.push(`/Products/${index}`)}>
      <div className="relative">
        <img
          className="w-full "
          src={'/assets/images/product.png'}
          alt="product image"
        />
        <span className=" bg-yellow-600 absolute top-0 px-2 py-1 text-white">
          -15%
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-red-600">out of stock</p>
        <div className="flex items-center text-xl text-blue-600 mt-2">
          <IoMdImage />
          <IoMdShare />
        </div>
      </div>
      <h2 className="title font-bold text-xl my-2">{product.price}</h2>
      <div className="flex items-center justify-between">
        <p className="flex items-center text-xl text-blue-600 font-bold">
          <TbCurrencyTaka />
          {product.price}net
        </p>
        <p className="font-bold text-sm">{product.stock}pices</p>

        <p className="text-yellow-500 line-through">55 net</p>
      </div>
    </div>)}
  </div>;
  </div>
};

export default Products;
