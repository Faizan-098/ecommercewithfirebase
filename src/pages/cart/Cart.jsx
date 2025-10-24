import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GoChecklist } from "react-icons/go";
import { FaOpencart } from "react-icons/fa";
import Layout from "../../components/Layout";
import Model from "../../components/Model";
import { useState } from "react";
import Mycontext from "../../context/Mycontext";
import { toast } from "react-toastify";

const Cart = () => {
  // Context
  const { cartList,deleteCartProduct,subTotal ,auth} = useContext(Mycontext);
  const [openModel, setOpenModel] = useState(false);
console.log(Object.keys(auth).length === 0
);

  return (
    <Layout>
      <div className="px-3 min-h-[80vh] bg-gradient-to-r from-[#540b0e] via-[#e09f3e] to-[#fff3b0] flex flex-col items-center py-10 sm:px-4">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10 tracking-wide flex gap-5  ">
          <FaOpencart />
          Your Cart
        </h2>

        <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md  sm:rounded-2xl shadow-2xl p-3 sm:p-6">
          {/* Cart Items Table */}
          <div className="overflow-x-auto ">
            {cartList.length ===0? <h1 className="#540b0e text-3xl sm:text-5xl text-center font-semibold">Cart is Empty</h1>:
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#540b0e] text-white text-lg">
                  <th className="py-3 px-4 rounded-tl-2xl min-w-[150px]">Item Image</th>
                  <th className="py-3 px-4 min-w-[150px]">Item Name</th>
                  <th className="py-3 px-4 min-w-[150px]">Item Price</th>
                  <th className="py-3 px-4 min-w-[150px]">Item Quantity</th>

                  <th className="py-3 px-4 rounded-tr-2xl">Action</th>
                </tr>
              </thead>
              <tbody className="max-h-[300px] overflow-hidden">
                {cartList && 
                  cartList.map((item, index) => {
                    const { price, title, quantity, imgUrl } = item;
                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-[#fff3b0]/40 transition-all duration-300"
                      >
                        <td className="py-3 px-4">
                          <img
                            src={imgUrl}
                            alt="itemimage"
                            className="w-20 h-20 object-cover rounded-lg mx-auto"
                          />
                        </td>
                        <td className="py-3 px-4 text-gray-700 font-semibold">
                          {title}
                        </td>
                        <td className="py-3 px-4 text-gray-800 font-medium">
                         Rs: {price}
                        </td>
                        <td className="py-3 px-4 text-[#540b0e] font-bold">
                          {quantity}
                        </td>
                        <td className="py-3 px-4 text-red-500 text-2xl cursor-pointer  ">
                          <div className="flex justify-center">
                            <AiOutlineDelete onClick={()=>deleteCartProduct(item)}  />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          }
          </div>

          {/* Bill Section */}
          {cartList.length>0 && auth && <div className="mt-10 bg-[#fff3b0]/70 rounded-xl p-6 shadow-md max-w-sm ml-auto">
            <h2 className="text-2xl font-bold text-[#540b0e] mb-4 flex gap-4 items-center justify-center">
              <GoChecklist size={30} />
              Bill Summary
            </h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">Rs {(subTotal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping:</span>
              <span className="font-semibold">Rs 100</span>
            </div>
            <hr className="border-[#e09f3e] my-2" />
            <div className="flex justify-between text-xl font-bold text-[#540b0e]">
              <span>Total:</span>
              <span>PKR {subTotal+100}</span>
            </div>

            <button
              className="w-full mt-5 bg-[#540b0e] text-white py-2 rounded-xl shadow-md hover:bg-[#e09f3e] hover:text-[#540b0e] transition-all duration-300 font-semibold cursor-pointer"
              onClick={() => Object.keys(auth).length > 0
 ? setOpenModel((prev) => !prev) :  toast.error("Login is required!")}
            >
              Buy Now
            </button>
          </div>}
        </div>
      </div>
       { openModel && <Model openModelHandler={ setOpenModel} />}
    </Layout>
  );
};

export default Cart;
