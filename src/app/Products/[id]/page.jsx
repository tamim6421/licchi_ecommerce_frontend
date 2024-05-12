"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { products } from "../../../../public/assets/data";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  console.log(id);

  const product = products.filter((el) => el.id === id);

  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 px-3 py-10 gap-x-5 ">
        <div className="img ">
          <img
            src="/assets/images/product.png"
            alt="product_image"
            className="w-full"
          />
        </div>
        <div className="details">
          <h2 className="text-4xl mb-5 font-bold">Lichu kathcer</h2>

          <div className="flex items-center gap-5">
            <p className="text-xl me-4">500pices</p>
            <p className="text-2xl font-bold">৳40</p>
          </div>
          <div className="flex items-center gap-5 mt-5 border-b-2 pb-5">
            <div className="flex text-xl items-center gap-x-3 ">
              <button
                className="border border-black rounded px-2 hover:bg-gray-200 duration-300"
                onClick={() => setQuantity((q) => q - 1)}
              >
                -
              </button>
              <p className="font-bold">{quantity}</p>
              <button
                className="border border-black rounded px-2 hover:bg-gray-200 duration-300"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-blue-600 rounded-full px-8 py-2 text-white">
              add to cart
            </button>
          </div>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
