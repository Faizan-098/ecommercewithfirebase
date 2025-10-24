import React from "react";
import Layout from "../../components/Layout";
import Mycontext from "../../context/Mycontext";
import HeroSection from "../../components/HeroSection";
import Filter from "../../components/Filter";
import ProductCard from "../../components/productCard";

const Home = () => {


  return (
    <Layout>
      {/* Hero Section */}
        <HeroSection/>
        {/* Filter */}
        <Filter/>
        {/* ProductCard */}
        <ProductCard/>
    
    </Layout>
  );
};

export default Home;
