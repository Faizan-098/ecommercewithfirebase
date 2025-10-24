import React, { useContext } from "react";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineDelete,
} from "react-icons/md";
import { FaEdit, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Mycontext from "../../../context/Mycontext";
import Loader from "../../../components/Loader";
const Products = () => {
  const navigate = useNavigate();
  const { productsData, deleteProduct, editBtn } = useContext(Mycontext);

  return (
    <>
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="sm:text-xl  font-bold text-[#540b0e]">All Products</h3>
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-[#540b0e] to-[#e09f3e] text-white px-5 py-2 rounded-xl sm:hover:scale-105 transition-all duration-300 sm:font-semibold cursor-pointer"
          onClick={() => navigate("/createproduct")}
        >
          <FaShoppingCart /> Add Product
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        {productsData.length === 0 ? (
          <h1 className="text-center font-bold  text-2xl text-[#540b0d94]    sm:text-4xl">Products is Empty</h1>
        ) : (
          <table className="w-full text-center border-collapse bg-[#fff3b0]/50 rounded-xl">
            <thead className="bg-[#540b0e] text-white">
              <tr>
                <th className="py-3  min-w-[120px] px-4 rounded-tl-xl">S.No</th>
                <th className="py-3  min-w-[120px] px-4">Image</th>
                <th className="py-3  min-w-[120px] px-4">Title</th>
                <th className="py-3  min-w-[120px] px-4">Price</th>
                <th className="py-3  min-w-[120px] px-4">Category</th>
                <th className="py-3  min-w-[120px] px-4">Date</th>
                <th className="py-3  min-w-[120px] px-4 rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((item, index) => {
                const { title, imgUrl, date, price, category } = item;
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-300 hover:bg-[#e09f3e]/20 transition-all"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">
                      <img
                        src={imgUrl}
                        alt="itemimage"
                        className="w-16 h-16 rounded-lg object-cover mx-auto"
                      />
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-700">
                      {title}
                    </td>
                    <td className="py-3 px-4 font-bold text-[#540b0e]">
                      {price}
                    </td>
                    <td className="py-3 px-4">{category}</td>
                    <td className="py-3 px-4 text-gray-600">{date}</td>
                    <td className="py-3 px-4 text-2xl text-[#540b0e]">
                      <div className="flex items-center justify-center gap-4">
                        <MdOutlineDelete
                          className="hover:text-red-600 cursor-pointer transition-all"
                          onClick={() => deleteProduct(item)}
                        />
                        <Link to={"/updateproduct"}>
                          <FaEdit
                            className="hover:text-[#e09f3e] cursor-pointer transition-all"
                            onClick={() => editBtn(item)}
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Products;
