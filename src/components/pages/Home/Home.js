import React from "react";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <HomeCard></HomeCard>
      {/* <BookRelease></BookRelease>
      <Products></Products> */}


      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;
