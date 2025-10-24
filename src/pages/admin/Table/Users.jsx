import React, { useContext } from 'react'
import { MdOutlineProductionQuantityLimits, MdOutlineDelete } from "react-icons/md";
import { FaEdit, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import Mycontext from '../../../context/Mycontext';
const Users = () => {
const  {users , orderedList}= useContext(Mycontext)

const findTotalOrderLength = (email)=>{
  const order = orderedList.filter((order) => order.useremail === email)
if(order.length>0){
  return order.length;
  
}else{
     return 0;  
}
}

  return (
    <>
       {/* Table Header */}
          <div className=" mb-4">
            <h3 className="text-xl font-bold text-[#540b0e]">All Users</h3>
           
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse bg-[#fff3b0]/50 rounded-xl">
              <thead className="bg-[#540b0e] text-white">
                <tr>
                  <th className="py-3 px-4 min-w-[120px] rounded-tl-xl">S.No</th>
                  <th className="py-3 px-4 min-w-[120px]">UserId</th>
                  <th className="py-3 px-4 min-w-[120px]">Name</th>
                  <th className="py-3 px-4 min-w-[120px]">Email</th>
                  <th className="py-3 px-4 min-w-[120px]">Role</th>
                  <th className="py-3 px-4 min-w-[120px] ">Signup Date</th>
                  <th className="py-3 px-4 min-w-[120px]  rounded-tr-xl">Total Orders</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index)=>{
                  const {userId,name, email,time }=user
                  return(
                    <tr key={userId} className="border-b border-gray-300 hover:bg-[#e09f3e]/20 transition-all">
                  <td className="py-3 px-4">{index+1}</td>
                  <td className="py-3 px-4">
                   {userId}
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-700">{name}</td>
                  <td className="py-3 px-4 font-semibold text-gray-700">{email}</td>
                  <td className="py-3 px-4 font-bold text-[#540b0e]">{email === "faizandeveloper@gmail.com" ? "Admin":"User"}</td>
                  <td className="py-3 px-4">{time.toDate().toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{findTotalOrderLength(email)}</td>
                </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
    </>
  )
}

export default Users