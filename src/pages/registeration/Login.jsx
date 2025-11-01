import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Mycontext from "../../context/Mycontext";
import Loader from "../../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  // Context
  const { isLoading, setIsLoading , setAuth } = useContext(Mycontext);

  // States
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // Login Functionality
  const loginFunc = async (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      return toast.error("Please fill all fields!");
    }
  
    try {
      setIsLoading(true);
      // SignIn
      const fireAuth = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      toast.success("Login Successfully!");
      // Set in Local storage
      localStorage.setItem("auth", JSON.stringify(fireAuth));
      setAuth(fireAuth)
      setUserEmail("");
      setUserPassword("");
      // Wait for removed toast

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("Login failed plesae try again!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#540b0e] to-[#e09f3e]  px-4">
      <form
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md "
        onSubmit={loginFunc}
      >
        <h2 className="text-4xl font-bold text-center text-[#540b0e] mb-6">
          Login
        </h2>
        <p className="text-center text-[#540b0e]/70 mb-6">
          Please login to your account
        </p>

        {/* Email Input */}
        <div className="mb-5">
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
          />
        </div>

        {/* Login Button */}
        <button
        
          type="submit"
          className="cursor-pointer w-full bg-[#e09f3e] text-[#540b0e] font-semibold py-3 rounded-lg hover:bg-[#540b0e] hover:text-[#fff3b0] transition-all duration-300 shadow-md"
        >
          Login
        </button>

        {/* Sign up Link */}
        <h3 className="text-center mt-6 text-[#540b0e]/80 ">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-[#e09f3e] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </h3>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;
