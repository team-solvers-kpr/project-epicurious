import React from "react";
import Books from "./Books";
import HomeCard from "./HomeCard";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <HomeCard></HomeCard>
      <Product></Product>
      <Books></Books>
    </div>
  );
};

export default Home;
