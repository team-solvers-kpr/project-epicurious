import React from "react";
import Product from "./Product";
import moonCakesImg from "../../../assets/images/Mooncakes_HERO_091321_20978.jpg";
import readPaperPastaImg from "../../../assets/images/RedPepperPasta_HERO_040821_12876.jpg";

export default function Products() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="products flex justify-center">
          <Product
            heading="meal plan"
            title="A Week of Easy Dinners to Get You Back in the Cooking Groove"
            author="by anna hezel"
            img={moonCakesImg}
          />
          <Product
            heading="dessert"
            title="A Week of Easy Dinners to Get You Back in the Cooking Groove"
            author="By Genevieve Yam"
            img={readPaperPastaImg}
          />
        </div>
      </div>
    </div>
  );
}
