import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Mystate from "./context/Mystate";
import Login from "./pages/registeration/Login";
import Signup from "./pages/registeration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import CreateProduct from "./pages/admin/pages/CreateProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import ProtectedAdminRoute from "./ProtectRoutes/ProtectedAdminRoute";

import ProtectedUserRoute from "./ProtectRoutes/ProtectedUserRoute";

const App = () => {
  return (
   
    <Router>
        <ToastContainer position="top-center" autoClose={3000}
 />
         <Mystate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedUserRoute>
                <Order />
              </ProtectedUserRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/createproduct"
            element={
              <ProtectedAdminRoute>
                <CreateProduct />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/updateproduct" element={
            <ProtectedAdminRoute>
                <UpdateProduct />
              </ProtectedAdminRoute>
            } />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        </Mystate>
      </Router>
  
  );
};

export default App;
