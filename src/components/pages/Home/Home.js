import React from "react";
import Books from "./Books";
import HomeCard from "./HomeCard";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <HomeCard></HomeCard>
      <Books></Books>
      <Products></Products>
    </div>
  );
};

export default Home;
