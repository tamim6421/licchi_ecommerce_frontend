import Header from "@/components/Header/Header";
import Products from "@/app/Products/page";
// import Reviews from "@/components/Review/Reviews";
import Payment from "@/components/payment/Payment";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Products />
      {/* <Reviews /> */}
      <Payment /> 
      <ToastContainer />
    </>
  );
}
