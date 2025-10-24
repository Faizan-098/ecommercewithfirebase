import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import Mycontext from "../context/Mycontext";

const Filter = () => {
  const { searchKey, setSearchKey, searchCategory, setSearchCategory, productsData } = useContext(Mycontext);

  return (
    <div
      className="sm:max-w-[1300px]
     sm:rounded-lg  mx-auto sm:mt-[30px] pt-4 px-4 bg-gradient-to-r from-[#540b0e] to-[#e09f3e] "
    >
      <h2 className="font-bold text-3xl  sm:text-5xl  text-[#fff3b0]">
        Filters
      </h2>
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between   p-5 gap-4">
        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-2/3 bg-white/90 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#e09f3e] transition-all duration-300">
          <IoSearch className="text-[#540b0e] text-xl mr-3" />
          <input
          value={searchKey}
          onChange={(e)=> setSearchKey(e.target.value)}
            type="text"
            placeholder="Search electronic products..."
            className="bg-transparent outline-none w-full text-[#540b0e] placeholder-[#540b0e]/60 font-medium"
          />
        </div>

        {/* Dropdown */}
        <div className="w-full sm:w-1/3">
          <select
          value={searchCategory}
          onChange={(e)=> setSearchCategory(e.target.value)}
            name="product"
            className="w-full bg-white/90 border border-[#e09f3e] text-[#540b0e] font-medium rounded-[7px] px-4 py-2  focus:outline-none focus:ring-2 focus:ring-[#e09f3e] transition-all duration-300"
          >
            <option value=""  >All Category</option>
            {productsData.map((item, index) =><option value={item.category} key={index}>{item.category}</option>)}
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
