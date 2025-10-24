import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedAdminRoute = ({children}) => {
 const admin = JSON.parse(localStorage.getItem("auth"));
  if(admin?.user?.email === "faizandeveloper@gmail.com"){
     return children
  }else{
     return <Navigate to={"/login"}/>
  }

}

export default ProtectedAdminRoute