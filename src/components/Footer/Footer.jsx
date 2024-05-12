import React from "react";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  // social media colors
  const colors = ["#1877F2","#db4437","#1DA1F2","#0077B5","#E10600"];

  return (
    <div className="footer max-w-screen-lg mx-auto py-3 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-2 px-3">
        <div className="">
          <div className="logo"><img className="w-full"src="https://s3-alpha-sig.figma.com/img/6fd6/df15/896296ec37f48ce7b2075289913dbedf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJZAqyYpO4n2eSsk12D3ipEoSfRN1YrVGTyV6xLfo9BF81f0ASrIbM2IXrN58N2DjKLVEp0jLnhe~3ZkW2oxoM56Ra8OBMXKA~vZo3n~TEgVAVakdzCDIYS19HY0zs49HMEnNPCB2Ql75PJsi269sDFpjom5GEWzn~baVLbPZqb35QuQbpHMzl7KwPHyUwKMqiLY8uVbCcRuPnR7r23KlOeQ0RTtn-SO0JgZV7COiV4V-UZI5FWQvWhv3TCAYSMJgP3sWozQJNHXfrtiu~O1o1geaFARhaKrqfHgsnZI2K1IPMlmDzYByXMDhowFmnXyX9XlhdDhVOFzDyqsIM2cKw__" alt="" /></div>
          <p className="tex-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            maxime molestias fuga autem illo distinctio eos in blanditiis
            quidem, accusantium quasi sequi ea obcaecati!
          </p>
          <div className="social_icons flex gap-x-3 mt-4 text-white">
            
           {
           [ <FaFacebookF />,
            <FaGooglePlusG />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaYoutube />].map((logo,index) => <div className={`flex items-center justify-center rounded p-2 `} style={{background: colors[index]}}>{logo}</div>)}

          </div>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">INSIDER</h2>
          <ul className="mt-3">
            {[
              "about us",
              "contact us",
              "shipping and payment info",
              "terms and conditions",
              "privacy policy",
              "return and refund policy",
            ].map((element,index) => (
              <li key={index}>&gt; {element}</li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">SERVICE</h2>
          <ul className="mt-3">
            {["my account", "wishlist", "shopping cart"].map((element,index) => (
              <li className="capitalize" key={index}>&gt;{element}</li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl font-bold">CONTACT US</h2>
          <div className="mt-3">
            <div className="flex items-start gap-3">
              <div className="logo text-2xl border-gray-600 border bg-gray-300 mb-3 p-2 rounded">
                <CgMail />
              </div>
              <p>ancovasoft@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="logo text-2xl border-gray-600 border bg-gray-300 mb-3 p-2 rounded">
                <FaPhoneAlt />
              </div>
              <p>017XXXXXXXX</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="logo text-2xl border-gray-600 border bg-gray-300 mb-3 p-2 rounded">
                <FaSearchLocation />
              </div>
              <p>
                ANCOVA <br /> 45/3 B.K Ganguli Len, Kayettuli, Bongshal, Dhaka-
                1000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
