import React, { useContext } from "react";
import Mycontext from "../../context/Mycontext";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";

const Order = () => {
  const { orderedList, isLoading, auth } = useContext(Mycontext);

  const filteredOrder = orderedList.filter(
    (order) => order.useremail === auth?.user?.email
  );
  return (
    <>
      <Layout>
        <div className="min-h-[300px] flex flex-col items-center justify-center px-4">
          {/* Orders Available */}
          {filteredOrder.length > 0 && (
            <div className="w-full">
              {/* Heading */}
              <div className="mb-8 mt-[50px]">
                <h3 className="text-3xl sm:text-5xl font-bold text-center text-[#540b0e]">
                  Orders History
                </h3>
              </div>

              {/* Orders Table */}
              <div className="overflow-x-auto max-w-[1200px] w-full m-auto mb-[50px]">
                <table className="w-full text-center border-collapse bg-[#fff]/70 rounded-xl shadow-lg">
                  <thead className="bg-[#540b0e] text-white">
                    <tr>
                      <th className="py-3 px-4 min-w-[140px] rounded-tl-xl">
                        Order ID
                      </th>
                      <th className="py-3 px-4 min-w-[140px]">Customer Name</th>
                      <th className="py-3 px-4 min-w-[140px]">Phone Number</th>
                      <th className="py-3 px-4 min-w-[140px]">Items</th>
                      <th className="py-3 px-4 min-w-[140px]">Address</th>
                      <th className="py-3 px-4 min-w-[140px]">Date</th>
                      <th className="py-3 px-4 min-w-[140px] rounded-tr-xl">
                        Payment
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrder.length > 0 &&
                      filteredOrder.map((order) => {
                        const {
                          id,
                          username,
                          address,
                          date,
                          payment,
                          items,
                          phonenumber,
                        } = order;

                        return (
                          <tr
                            key={id}
                            className="hover:bg-[#e09f3e]/20 transition-all border-b border-[#e09f3e]/30"
                          >
                            <td className="py-3 px-4 text-gray-700">#{id}</td>
                            <td className="py-3 px-4 font-medium text-[#540b0e]">
                              <span className="bg-[#540b0e] rounded-md px-4 py-1 text-white">
                                {username}
                              </span>
                            </td>
                            <td className="py-3 px-4 font-medium text-[#540b0e]">
                              <span className=" ">{phonenumber}</span>
                            </td>

                            {/* Display Multiple Items */}
                            <td className="py-3 px-4 text-center flex flex-col gap-3 ">
                              {items.map((item, index) => (
                                <div
                                  key={index}
                                  className="text-black rounded-md py-1 px-3 bg-[#e09f3e31]"
                                >
                                  {item.title}{" "}
                                  <span className="">
                                    {" "}
                                    {item.quantity} piece{" "}
                                  </span>
                                </div>
                              ))}
                            </td>

                            <td className="py-3 px-4 text-gray-700">
                              {address}
                            </td>
                            <td className="py-3 px-4 text-gray-600">{date}</td>
                            <td className="py-3 px-4 font-semibold text-[#540b0e]">
                              <span className="bg-[#540b0e] text-white rounded-md px-4 py-1">
                                Rs {payment}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty Orders */}
          {filteredOrder.length === 0 && (
            <h1 className="font-bold text-2xl sm:text-4xl text-[#540b0e]/70 mt-10">
              Order list is empty
            </h1>
          )}

          {/* Loader */}
          {isLoading && <Loader />}
        </div>
      </Layout>
    </>
  );
};

export default Order;
