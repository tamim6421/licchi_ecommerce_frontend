import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  
  return (
    <div className="w-full bg-gray-300">
      <header className="max-w-screen-lg mx-auto py-5 flex items-center justify-between px-3">
        <div className="w-[100px]">
        <img src="https://s3-alpha-sig.figma.com/img/6fd6/df15/896296ec37f48ce7b2075289913dbedf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJZAqyYpO4n2eSsk12D3ipEoSfRN1YrVGTyV6xLfo9BF81f0ASrIbM2IXrN58N2DjKLVEp0jLnhe~3ZkW2oxoM56Ra8OBMXKA~vZo3n~TEgVAVakdzCDIYS19HY0zs49HMEnNPCB2Ql75PJsi269sDFpjom5GEWzn~baVLbPZqb35QuQbpHMzl7KwPHyUwKMqiLY8uVbCcRuPnR7r23KlOeQ0RTtn-SO0JgZV7COiV4V-UZI5FWQvWhv3TCAYSMJgP3sWozQJNHXfrtiu~O1o1geaFARhaKrqfHgsnZI2K1IPMlmDzYByXMDhowFmnXyX9XlhdDhVOFzDyqsIM2cKw__" className="w-full" alt="logo" data-aos="fade-right"/>
        </div>
        <div className="search flex items-center justify-center border rounded border-black sm:w-1/3 w-full mx-3">
          <input
            type="text"
            className="rounded py-2 px-3 w-full"
          />
          <button className="bg-gray-500 px-4 py-3 -ms-3 rounded">
            <IoSearch className="text-white"/>
          </button>
        </div>
        <button className="capitalize bg-blue-700 px-5 py-2 rounded text-white" data-aos="fade-left">
          login
        </button>
      </header>
    </div>
  );
};

export default Header;
