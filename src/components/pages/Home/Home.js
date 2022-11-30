import React from "react";
import CookThisNow from "../../sharedPage/CookThisNow";
import TheBigGuide from "../../sharedPage/TheBigGuide";
import Banner from "./Banner";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Newsletter from "./Newsletter";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <BookRelease></BookRelease>
      <Products></Products>
      <TheBigGuide></TheBigGuide>
      <HomeCard></HomeCard>
      <NewestRecipes></NewestRecipes>
      <Newsletter></Newsletter>
      <CookThisNow></CookThisNow>
    </div>
  );
};

export default Home;
