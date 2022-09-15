import React from "react";
import Banner from "./Banner";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <HomeCard></HomeCard> */}
      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;
