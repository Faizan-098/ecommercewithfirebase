import React, { useContext } from "react";
import Mycontext from "../context/Mycontext";
import Loader from "./Loader";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { productsData, isLoading, addToCart, searchKey, searchCategory } =
    useContext(Mycontext);

  return (
    <>
      {productsData.length > 0 ? (
        <section className="py-12 px-6 bg-[#fff3b0]" id="products">
          <h2 className="font-sans text-2xl lg:text-6xl font-bold  text-[#540b0e] mb-10 ">
            <span className="border-b-4 border-[#540b0e]"> Our La</span>test
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsData
              .filter((item) =>
                item.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .filter((item) => item.category.includes(searchCategory))
              .map((item, index) => {
                const {id, title, category, imgUrl, price } = item;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
        overflow-hidden hover:-translate-y-2"
                  >
                    <img
                      src={imgUrl}
                      alt="cardimage"
                      className="w-full h-60 object-cover object-top"
                    />
                    <div className="p-4 text-left">
                      <p className="text-sm font-medium text-[#e09f3e] uppercase">
                        {category}
                      </p>
                      <h3 className="text-md font-semibold bg-[#fff3b0]  px-3 text-[#540b0e] rounded-sm inline-block mt-1">
                        {title}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <p className="text-lg font-bold text-[#540b0e]">
                          PKR {price}
                        </p>
                        <div className="flex items-center gap-3">
                          <Link 
                          to={`/productinfo/${id}`}
                          className="text-[#540b0e]   rounded-md"  title="View Ddtails" >
                            <IoOpenOutline size={22} />
                          </Link>
                          <button
                            className="bg-[#e09f3e] text-[#540b0e] font-semibold px-4 py-1 rounded-md hover:bg-[#540b0e] hover:text-[#fff3b0] transition-all duration-300 cursor-pointer"
                            onClick={() => addToCart(item)}
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      ) : (
        <h1 className="text-center font-bold text-[#540b0d8c] py-10 text-2xl sm:text-5xl">
          Product is not Available
        </h1>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default ProductCard;
