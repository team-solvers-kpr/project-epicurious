import React from "react";
import Banner from "./Banner";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BookRelease></BookRelease>
      <Products></Products>
      <HomeCard></HomeCard>

      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;