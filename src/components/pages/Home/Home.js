import React from "react";
import Banner from "./Banner";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Products from "./Products";
import Recipes_Menus from './Recipes_Menus';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recipes_Menus></Recipes_Menus>
      <BookRelease></BookRelease>
      <Products></Products>
      <HomeCard></HomeCard>

      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;
