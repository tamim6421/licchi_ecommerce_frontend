import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Cartpopup = () => {
  return (
<div className='absolute top-[25%] right-[20%] border-2 z-10 bg-white'>
    <div className='flex items-center border-b-2'>
        <div className='border-r-2 px-3 py-2 '><span className='bg-gray-500 p-1 rounded-full text-white'>2</span></div>
        <div className='p-3'><FaShoppingCart /></div>
    </div>
    <div className='p-2'>৳512</div>
</div>

  )
}

export default Cartpopup