import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedUserRoute = ({children}) => {
  const user = localStorage.getItem("auth");
  if(user){
    return children
  }else{
    return  <Navigate to={"/login"}/>
  }
}

export default ProtectedUserRoute