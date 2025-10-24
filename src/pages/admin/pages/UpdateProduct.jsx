import React, { useContext } from "react";
import Mycontext from "../../../context/Mycontext";
import Loader from "../../../components/Loader";

const UpdateProduct = () => {
  const { isLoading, product, setProduct ,updateItem} = useContext(Mycontext);
console.log(product);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#540b0e] to-[#e09f3e]  px-4">
      <form 
      onSubmit={(e)=> {
        e.preventDefault()
        updateItem(product)
      } }
      className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md "
         >
        <h2 className="text-4xl font-bold text-center text-[#540b0e] mb-6"
      
        >
          Update Product
        </h2>

        {/* Title */}
        <div className="mb-5">
          <input
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            type="text"
            name="title"
            placeholder="product title"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>

        {/* Price */}
        <div className="mb-5">
          <input
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            type="number"
            name="price"
            placeholder="product price"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>

        {/* image */}
        <div className="mb-5">
          <input
            value={product.imgUrl}
            onChange={(e) => setProduct({ ...product, imgUrl: e.target.value })}
            type="url"
            name="image"
            placeholder="product image url"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>
        {/* Category */}
        <div className="mb-5">
          <input
            value={product.category}
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            type="text"
            name="category"
            placeholder="product category"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>
        {/* Description */}
        <div className="mb-5">
          <textarea
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            rows={5}
            type="text"
            name="des"
            placeholder="product description..."
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          ></textarea>
        </div>
        {/* Create Button */}
        <button
          type="submit"
          className="cursor-pointer w-full bg-[#e09f3e] text-[#540b0e] font-semibold py-3 rounded-lg hover:bg-[#540b0e] hover:text-[#fff3b0] transition-all duration-300 shadow-md text-xl"
        >
          Update
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default UpdateProduct;
