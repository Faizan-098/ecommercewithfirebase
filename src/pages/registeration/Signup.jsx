import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Mycontext from "../../context/Mycontext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
const Signup = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useContext(Mycontext);
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
   const [buttonDisabled, setbuttonDisabled] = useState(false)
  const signupFunc = async (e) => {
  e.preventDefault();

  // Check if any field is empty
  if (!username || !useremail || !userpassword) {
    return toast.error("Please fill all fields");
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(useremail)) {
    return toast.error("Please enter a valid email address");
  }

  // Check password length
  if (userpassword.length < 8) {
    return toast.error("Password must contain at least 8 characters!");
  }
  setbuttonDisabled(true)
  try {
    setIsLoading(true);

    // Create user with Firebase Authentication
    const fireAuth = await createUserWithEmailAndPassword(
      auth,
      useremail,
      userpassword
    );

    // Create a user object
    const user = {
      userId: fireAuth.user.uid,
      name: username,
      email: fireAuth.user.email,
      time: Timestamp.now(),
    };

    // Add user data to Firestore
    const fireDatabase = collection(fireDB, "Users");
    await addDoc(fireDatabase, user);

    // Show success message
    toast.success("Signup Successful!");

    // Reset all input fields
    setUsername("");
    setUseremail("");
    setUserpassword("");

    // wait to remove toast
    toast.onChange((payload)=>{
      if(payload.status === "removed"){
        navigate("/login")
      }
    })
  } catch (error) {
    console.log(error);
    toast.error(error.message || "Signup failed. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#540b0e] via-[#e09f3e] to-[#fff3b0] px-4">
      <form
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md "
        onSubmit={signupFunc}
      >
        <h2 className="text-4xl font-bold text-center text-[#540b0e] mb-5">
          Sign up
        </h2>
        <p className="text-center text-[#540b0e]/70 mb-6">
          Please signup to create account
        </p>

        {/* User Input */}
        <div className="mb-5">
          <input
            type="text"
            name="email"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Email Input */}
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 rounded-lg border border-[#e09f3e]/50 focus:outline-none focus:ring-2 focus:ring-[#e09f3e] text-[#540b0e] placeholder:text-[#540b0e]/50"
            value={userpassword}
            onChange={(e) => setUserpassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
        disabled={buttonDisabled}
          type="submit"
          className="cursor-pointer w-full bg-[#e09f3e] text-[#540b0e] font-semibold py-3 rounded-lg hover:bg-[#540b0e] hover:text-[#fff3b0] transition-all duration-300 shadow-md"
        >
          Signup
        </button>

        {/* Sign up Link */}
        <h3 className="text-center mt-6 text-[#540b0e]/80 ">
          Already have an account?
          <Link
            to="/login"
            className="text-[#e09f3e] font-semibold hover:underline"
          >
            Login
          </Link>
        </h3>
      </form>
      {isLoading && <Loader/>}
    </div>
  );
};

export default Signup;
