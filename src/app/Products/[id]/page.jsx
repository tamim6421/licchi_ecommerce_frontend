"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { products } from "../../../../public/assets/data";
import BASE_URL from "@/api/baseUrl";
import Image from "next/image";
import IMAGE_URL from "@/api/imageUrl";



const SingleProduct = () => {
  const [licchis, setLicchis] = useState([])
  const [counters, setCounters] = useState({});
  const { id } = useParams();
  console.log(id);




  const increment = (id) => {
    console.log(id);
     setCounters((prevCounters) => ({
       ...prevCounters,
       [id]: (prevCounters[id] || 0) + 1,
     }));
   };
 
   const decrement = (id) => {
    console.log(id)
     if (counters[id] && counters[id] > 1) {
       setCounters((prevCounters) => ({
         ...prevCounters,
         [id]: prevCounters[id] - 1,
       }));
     }
   };
   











  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLicchis(data?.data); // Set the fetched data to the state
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  
  console.log("licchu",licchis)



  const licchi = licchis?.filter((el) => el.id === id);
  console.log(licchi[0])

  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 px-3 py-10 gap-x-5 ">
        <div className="img ">
        <div className="rounded-lg box">
        <img
            src="/assets/images/product.png"
            alt="product_image"
            className="w-full"
          />
        </div>
        <div className="details">
          <h2 className="text-4xl mb-5 font-bold">{licchi[0]?.product_name}</h2>

          <div className="flex items-center gap-5">
            <p className="text-xl me-4">{licchi[0]?.stock_quantity} pices</p>
            <p className="text-2xl font-bold">৳  {licchi[0]?.price}</p>
          </div>
          <div className="flex items-center gap-5 mt-5 border-b-2 pb-5">
            <div className="flex text-xl items-center gap-x-3 ">
              {/* <button
                className="border border-black rounded px-2 hover:bg-gray-200 duration-300"
                onClick={() => setCounters((q) => q - 1)}
              >
                -
              </button>
              <p className="font-bold">{counters}</p>
              <button
                className="border border-black rounded px-2 hover:bg-gray-200 duration-300"
                onClick={() => setCounters((q) => q + 1)}
              >
                +
              </button> */}

<div className={""}>
                                  <button
                                    className={"bg-blue-600 rounded-full p-1  text-white"}
                                    onClick={() => decrement(licchi[0]?.id)}
                                  >
                                    -
                                  </button>
                                  <span className={"text-3xl px-5"}>
                                    {counters[licchi[0]?.id] || 0}
                                  </span>
                                  <button
                                    className={"bg-blue-600 rounded-full p-1  text-white"}
                                    onClick={() => increment(licchi[0]?.id)}
                                  >
                                    +
                                  </button>
            </div>
            </div>
            <button className="bg-blue-600 rounded-full px-8 py-2 text-white">
              add to cart
            </button>
          </div>
          <p
                        className=" mt-6"
                        dangerouslySetInnerHTML={{ __html: licchi[0]?.description }}
                      />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleProduct;
