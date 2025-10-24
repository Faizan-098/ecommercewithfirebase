import React from "react";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 sm:px-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #540b0e, #e09f3e, #fff3b0)",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#fff3b0] mb-4 drop-shadow-lg leading-tight">
          Upgrade Your Tech Life Today 
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#fff3b0]/90 mb-8">
          Discover the latest{" "}
          <span className="font-semibold text-[#540b0e]">smartphones</span>,{" "}
          <span className="font-semibold text-[#540b0e]">laptops</span>,{" "}
          <span className="font-semibold text-[#540b0e]">headphones</span>, and{" "}
          <span className="font-semibold text-[#540b0e]">gadgets</span> — all in one place. <br />
          Unbeatable quality, trusted brands, and exclusive deals — just for you!
        </p>

        {/* Button */}
        <a
          href="#products"
          className="inline-block px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-md hover:scale-105"
          style={{
            backgroundColor: "#540b0e",
            color: "#fff3b0",
          }}
        >
          Explore Offers
        </a>
      </div>

      {/* Decorative gradient circles */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#e09f3e] rounded-full opacity-25 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#540b0e] rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
