import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex items-center justify-center text-white bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
  );
}

export default Loader;
