import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Mycontext from "../../context/Mycontext";
import Layout from "../../components/Layout";

const ProductInfo = () => {
  const { productsData, addToCart } = useContext(Mycontext);
  const data = useParams();
  const findItem = productsData.find((item) => item.id === data.id);

  return (
    <Layout>
      {findItem && (
        <div className="min-h-[80vh] px-3 py-5 flex justify-center items-center bg-gradient-to-r from-[#540b0e] via-[#e09f3e] to-[#fff3b0] ">
          <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-[950px]">
            {/* Left: Image */}
            <div className="md:w-1/2 max-h-[400px] min-h-[250px]">
              <img
                src={findItem.imgUrl}
                alt="cardInfo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 sm:p-8 p-5 flex flex-col justify-between">
              {/* Brand */}
              <div className="flex justify-between items-center">
                <p className="text-sm uppercase tracking-widest  text-[#540b0e] font-semibold">
                {findItem.category}
                
              </p>
                    <Link to={"/"} className="text-white  bg-[#540b0e] items-center rounded-full flex py-1 gap-1 text-lg px-4
                    shadow-md hover:bg-[#e09f3e] transition-all duration-300 cursor-pointer">
                  Back <TiArrowBack size={23} />
                </Link>
              </div>
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {findItem.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-3 text-[#e09f3e] mb-3">
                <div className="flex sm:text-2xl text-xl">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar className="text-gray-300" />
                </div>
                <span className="text-sm text-gray-600">
                  Launched: {findItem.date}
                </span>
                <span className="text-sm bg-[#fff3b0] text-[#540b0e] px-2 py-1 rounded-md">
                  New Product
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {findItem.description}
              </p>

              {/* Price & Button */}
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-[#540b0e]">
                  PKR {findItem.price}
                </div>
                <button
                  className="bg-[#540b0e] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#e09f3e] transition-all duration-300 cursor-pointer"
                  onClick={() => addToCart(findItem)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductInfo;
