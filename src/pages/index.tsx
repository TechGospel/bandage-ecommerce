import Banner from "@/components/pages/home/banner";
import Header from "@/components/pages/home/header";
import Posts from "@/components/pages/home/posts";
import Products from "@/components/pages/home/products";
import Services from "@/components/pages/home/services";
import Testimonials from "@/components/pages/home/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Services />
      <Posts />
      <Testimonials />
      <Banner />
    </>
  );
};

export default Home;