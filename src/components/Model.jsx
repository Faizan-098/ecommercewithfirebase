import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Mycontext from "../context/Mycontext";
import Loader from "./Loader";

const Model = ({openModelHandler}) => {
const {orderInfo, setOrderInfo,order, isLoading} =useContext(Mycontext)

  return (
    <div
      className="min-h-screen w-full fixed inset-0 flex items-center justify-center px-4 
bg-black/60 backdrop-blur-sm z-50"
    >
      <form className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md relative"
      onSubmit={order}>
        <RxCross2 size={30} className="absolute right-5 top-5 cursor-pointer" 
        onClick={()=>openModelHandler(prev =>!prev)}
        />

        <h2 className="text-4xl font-bold text-center text-[#540b0e] mb-6">
          Place Order
        </h2>
        <p className="text-center text-[#540b0e]/70 mb-6">
          Please carefully fill the form
        </p>

        {/* Name */}
        <div className="mb-5">
          <input
          value={orderInfo.username}
          onChange={(e)=>setOrderInfo({...orderInfo,username:e.target.value})}
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>

        {/* Number */}
        <div className="mb-5">
          <input
           value={orderInfo.phonenumber}
          onChange={(e)=>setOrderInfo({...orderInfo,phonenumber:e.target.value})}
            type="number"
            name="number"
            placeholder="Enter Your Phone Numnber"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>
        {/* Address */}
        <div className="mb-5">
          <textarea
           value={orderInfo.address}
          onChange={(e)=>setOrderInfo({...orderInfo,address:e.target.value})}
            type="text"
            name="message"
            placeholder="Write Complete Address..."
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          ></textarea>
        </div>

        {/* Login Button */}
        <button
        disabled={isLoading}
          type="submit"
          className="cursor-pointer w-full bg-[#e09f3e] text-[#540b0e] font-semibold py-3 rounded-lg hover:bg-[#540b0e] hover:text-[#fff3b0] transition-all duration-300 shadow-md"
          
        >
          Order Now
        </button>
      </form>
      {isLoading && <Loader/>}
    </div>
  );
};

export default Model;
