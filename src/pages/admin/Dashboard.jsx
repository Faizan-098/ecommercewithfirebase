import React, { useContext, useState } from "react";
import Layout from "../../components/Layout";
import { MdOutlineProductionQuantityLimits, MdOutlineDelete } from "react-icons/md";
import { FaEdit, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import Products from "./Table/Products";
import Users from "./Table/Users";
import Orders from "./Table/Orders";
import Mycontext from "../../context/Mycontext";
import Loader from "../../components/Loader";

const Dashboard = () => {
const {isLoading , productsData, orderedList, users}=useContext(Mycontext)
  const [showTable, setShowTable] = useState("products");
  return (
    <>
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-[#540b0e] via-[#e09f3e] to-[#fff3b0] py-10 px-3">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center drop-shadow-md">
           Admin Dashboard
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          {/* Card 1 - Users */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
            <div className="text-[#540b0e] text-6xl mb-4">
              <FaRegUser />
            </div>
            <h2 className="text-3xl font-bold text-[#540b0e]">{users.length}</h2>
            <h3 className="text-lg font-semibold text-gray-700">
              Total Users
            </h3>
          </div>

          {/* Card 2 - Products */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
            <div className="text-[#e09f3e] text-6xl mb-4">
              <MdOutlineProductionQuantityLimits />
            </div>
            <h2 className="text-3xl font-bold text-[#540b0e]">{productsData.length}</h2>
            <h3 className="text-lg font-semibold text-gray-700">
              Total Products
            </h3>
          </div>

          {/* Card 3 - Orders */}
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
            <div className="text-[#540b0e] text-6xl mb-4">
              <IoBagCheckOutline />
            </div>
            <h2 className="text-3xl font-bold text-[#540b0e]">{orderedList.length}</h2>
            <h3 className="text-lg font-semibold text-gray-700">
              Total Orders
            </h3>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl sm:p-8 px-4 py-8  max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#540b0e] mb-6 text-center">
             Product Details
          </h2>

          {/* Tabs */}
          <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mb-10 w-full ">
            <button className="flex items-center gap-2 bg-[#540b0e] text-white px-3 sm:px-5 py-2 rounded-xl hover:bg-[#e09f3e] hover:text-[#540b0e] transition-all sm:font-semibold cursor-pointer"
            onClick={()=> setShowTable("users")}
            >
              <FaRegUser   /> Users
            </button>
            <button className="flex items-center gap-2 bg-[#540b0e] text-white px-3 sm:px-5 py-2 rounded-xl hover:bg-[#e09f3e] hover:text-[#540b0e] transition-all sm:font-semibold cursor-pointer"
             onClick={()=>setShowTable("orders")}
            >
              <IoBagCheckOutline  /> Orders
            </button>
            <button className="flex items-center gap-2 bg-[#540b0e] text-white px-3 sm:px-5 py-2 rounded-xl hover:bg-[#e09f3e] hover:text-[#540b0e] transition-all sm:font-semibold cursor-pointer"
             onClick={()=> setShowTable("products")} 
            >
              <MdOutlineProductionQuantityLimits /> Products
            </button>
          </div>

         {/* Tables */}
        {showTable === "products" && <Products/>}
        {showTable === "users" && <Users/>}
        {showTable === "orders" && <Orders/>}
         
        </div>
      </div>
    </Layout>
    {isLoading && <Loader/>}
    </>
  );
};

export default Dashboard;
