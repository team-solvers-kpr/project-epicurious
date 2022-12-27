import React from "react";
import IngredientsTop from "./IngredientsTop";
// import CardTop from './CardTop';
import CardBottom from "./CardBottom";
import IngredientsBigGuide from "./IngredientsBigGuide";
//import { useState } from "react";
const ingredients = () => {
  // const [singalDetails, SetSingalDetails] = useState([]);
  // console.log(details);
  fetch("Ingridiants.json")
    .then((response) => response.json())
    //.then((data) => SetSingalDetails(data))
    .catch(() => {
      ///Exception occured do something
    });

  return (
    <>
      <IngredientsTop key={"in"}></IngredientsTop>
      {/* <CardTop></CardTop> */}
      <IngredientsBigGuide key={"bigg"}></IngredientsBigGuide>
      <CardBottom key={"card"}></CardBottom>
    </>
  );
};

export default ingredients;
