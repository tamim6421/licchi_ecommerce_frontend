
"use client"




import Link from "next/link";

import { useState } from "react";
import axios from "axios";
import Style from "./loginpage.module.css"

import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import BASE_URL from "@/api/baseUrl";
import { toast } from 'react-toastify';
import { Cookies } from 'js-cookie';




const Loginpage = () => {
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [scheneChange, setScheneChange] = useState(true);
    const [phone, setPhone] = useState("");
  

console.log("bal")

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm ();
    
      const handleLoginSubmit = async (data) => {
        console.log(data)
        try {
          setLoadingBtn(true);
          const response = await fetch(`${BASE_URL}/login/${data.phone}`);
          const result = await response.json();
          console.log(result)
          if (result.status === 'success11') {
               toast.success("We've sent a 4-digit one time PIN in your phone");
               setScheneChange(false);
               setLoadingBtn(false);
               setPhone(data.phone);
               reset();
           } else if (result.status === 'fail') {
              toast.error(result.message);
              setLoadingBtn(false);
           } else {
              toast.error(result.message);
              setLoadingBtn(false);
           }
        } catch (err) {
          console.log(err);
        }
      };
     
      const handleCodeSubmit = async (data) => {
        console.log(data.code)
        try {
          setLoadingBtn(true);
          const response = await fetch(`${BASE_URL}/verifyLogin/${phone}/${data.code}`);
          const result = await response.json();
    
         console.log(result);
          if (result.status === "success") {
            Cookies.set("TOKEN_LOGIN", result.member_token, { expires: 365 });
            Cookies.set("card", result.card, { expires: 365 });
            Cookies.set("name", result.name, { expires: 365 });
            setLoadingBtn(false);
            toast.success(result.message);
     
            reset();
          } else if (result.status === "fail") {
            setLoadingBtn(false);
            toast.error(result.data);
          } else {
            setLoadingBtn(false);
            toast.error(result.message);
          }
        } catch (err) {
          console.log(err);
          setLoadingBtn(false);
        }
      };
    


    return (
        <div className = {`${Style.login} max-w-[1000px] mx-auto py-20`}>
           <p>this is login page</p>



           <div
              className="d-flex max-w-[500px] mx-auto bg-gray-300 p-5 rounded-lg justify-content-center mb-5 mt-4"
              style={{ width: "100%" }}
            >
              {scheneChange ? (
              <div className={Style.loginContainer}>

           
                  <div className={""}>
                    {/* Form header and login Form data */}
                    {/* Title */}
                    {/* <TopTitle title="Phone" /> */}
                    <form onSubmit={handleSubmit(handleLoginSubmit)}>
                      <div className="mb-3" controlId="formEmail">
                        <p>Phone Number</p>
                        <input
                          type="text"
                          className={`${Style.inputField} remove-focus p-3 w-full rounded bg-gray-100`}
                          {...register("phone", { required: true })}
                          placeholder="Phone Number"
                        />
                        {/* {errors.phone && (
                          <span className="text-danger">Phone is required</span>
                        )} */}
                      </div>

                      {/* Submit Button */}
                      {loadingBtn ? (
                        <button
                          type="submit"
                          style={{ width: "100%" }}
                          disabled
                        >
                          Loading...
                        </button>
                      ) : (
                        <button
                        className = "bg-blue-700 px-5 py-2 rounded text-white"
                          type="submit"
                          style={{ width: "100%" }}
                        >
                          Sign In
                        </button>
                      )}
                    </form>
                  </div>
                  </div>
              ) : (
              <div>
                   <div className={Style.loginContainer}>
                    {/* Form header and login Form data */}
                    {/* Title */}
                    {/* <TopTitle title="We've sent a 4-digit one time PIN in your phone" /> */}
                    <form onClick={handleSubmit(handleCodeSubmit)}>
                      <div className="mb-3" controlId="formEmail">
                        <label>4-digit PIN </label>
                        <input
                          type="text"
                          className={`${Style.inputField} remove-focus p-3 w-full rounded bg-gray-100`}
                          {...register("code", { required: true })}
                          placeholder="Enter 4-digit PIN"
                        />
                        {errors.code && (
                          <span className="text-danger">Code is required</span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                      className = "bg-blue-700 px-5 py-2 rounded text-white"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled={loadingBtn}
                      >
                        {loadingBtn
                          ? "Loading..."
                          : scheneChange
                          ? "Sign In"
                          : "Submit"}
                      </button>
                    </form>
                  </div>
                  </div>
              )}
            </div>




        </div>
    );
};

export default Loginpage;